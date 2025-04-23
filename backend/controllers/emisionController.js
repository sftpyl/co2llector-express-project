const { calcularEmision } = require('./../services/calcularEmision')
const { filtrarActividadesValidas } = require('./../services/factoresEmision')
const Emision = require('./../models/emisionModel')

const calcularEmisionController = async (req, res, next) => {
  try {
    const empresaId = req.empresa._id;
    const { emisionData, save } = req.body;

    if (!emisionData) {
      return res.status(400).json({ error: "Datos de emisión inválidos" });
    }

    const actividades = emisionData?.actividades || {};
    const actividadesValidas = filtrarActividadesValidas(actividades)
    if (Object.keys(actividadesValidas).length === 0) {
      return res.status(400).json({ error: "No se definieron actividades" });
    }

    emisionData.actividades = actividadesValidas
    const resultado = calcularEmision(actividadesValidas);
    emisionData.fuente = 'Fuente'; // Moficar o sacar
    const emision = new Emision( { empresaId, ...emisionData, resultado: {
      total: resultado.total,
      detalle: resultado.detalle 
    } } );
    
    if (save === true) {
      await emision.save()
      console.log('Emision Guardada');
    }
    res.status(200).json(emision);
  } catch (err) {
    next(err) // Pasa el error al middleware global
  }
}

module.exports = { calcularEmisionController }