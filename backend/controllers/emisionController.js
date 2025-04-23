const { calcularEmision, filtrarActividadesValidas } = require('./../services/calcularEmision')
const Emision = require('./../models/emisionModel')
const HTTP = require("../utils/consts/httpConstants");

const calcularEmisionController = async (req, res, next) => {
  try {
    const user = req.user;

    const { emisionData, save } = req.body;

    if (!emisionData) {
      return res.status(HTTP.STATUS.BAD_REQUEST).json({ message: "Datos de emisión inválidos" });
    }

    const actividades = emisionData?.actividades || {};
    const actividadesValidas = filtrarActividadesValidas(actividades)
    if (Object.keys(actividadesValidas).length === 0) {
      return res.status(HTTP.STATUS.BAD_REQUEST).json({ message: "No se definieron actividades" });
    }

    emisionData.actividades = actividadesValidas
    const resultado = calcularEmision(actividadesValidas);
    emisionData.fuente = 'Fuente'; // Moficar o sacar
    /* 
      Si no está loggeado userId = undefined.
      No importa porque para guardar el documento debe estar loggeado
    */
    const emision = new Emision( { userId: user?.id, ...emisionData, resultado: {
      total: resultado.total,
      detalle: resultado.detalle 
    } } );
    
    if (save === true) {
      console.log(user);
      
      // Usuario debe estar loggeado y ser empresa
      if (!user?.id || user?.userType !== 'company') {
        return res.status(HTTP.STATUS.UNAUTHORIZED).json({ message: "Usuario debe estar registrado y ser una empresa para guardar calculo de emisión" });
      }
      await emision.save()
      console.log('Emision Guardada');
    }
    res.status(HTTP.STATUS.OK).json(emision);
  } catch (err) {
    next(err) // Pasa el error al middleware global
  }
}

module.exports = { calcularEmisionController }