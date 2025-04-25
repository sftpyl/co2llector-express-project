const { getAllEmissions, getLastEmission } = require("../services/emissionsService");
const { generateResponse } = require("../services/openAiService");
const { getUserById } = require("../services/userService");
const HTTP = require("../utils/consts/httpConstants");
const { userMock } = require("../utils/mock/userLogin");
const Recomendacion = require('./../models/recomendacionModel')

const recommendations = async (req, res) => {
  try {
    const userId = req.params.id //|| userMock.id; // Si no está loggeado, se usa el mock
    if (!userId) {
      return res.status(401).json({ message: "Usuario no autenticado" });
    }
    // console.log("ID de usuario en recommendations", userId);
    
    const user = await getUserById(userId)
    // console.log("Usuario en recommendations",user);

    const emissions = await getAllEmissions(userId); // Vienen ordenadas por año y mes, mas reciente primero
    if ( emissions.length === 0) {
      return res.status(400).json({ message: "No tiene registrada ninguna emisión para realizar un recomendación" });
    } 
    const lastEmission = await getLastEmission(userId);
    // const lastEmission = emissions[0]
    // La más reciente por fecha de creación real
    // console.log("Ultima emision en recommendations", emisionFinal);
    

    const recomendacionAI = await generateResponse(user, lastEmission);

    let recomendacion = await Recomendacion.findOne({ userId });

    // console.log("Recomendacion controller:", recomendacionAI);
    // console.log("find recomendacion controller:", recomendacion);
    
    

      if (recomendacion) {
        // Si la emisión ya existe, actualízala
        recomendacion.recomendacion = recomendacionAI;
        // await recomendacion.save();
        console.log('Recomendacion actualizada:', recomendacion);
      } else {
        // Si no existe, crea una nueva emisión
        recomendacion = new Recomendacion({ userId, mes, recomendacion });
        // await recomendacion.save();
        console.log('Recomendación creada:', recomendacion);
      }

    return res.status(HTTP.STATUS.OK).json({ recomendacion: recomendacionAI });
  } catch (error) {
    console.error("Error al generar la respuesta:", error);
    throw new Error("Error al generar la respuesta:")
  }
};

module.exports = {
  recommendations,
};