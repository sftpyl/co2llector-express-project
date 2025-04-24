const { generateResponse } = require("../services/openAiService");
const HTTP = require("../utils/consts/httpConstants");
const Recomendacion = require('./../models/recomendacionModel')

const recommendations = async (req, res) => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({ message: "Usuario no autenticado" });
    }
    const user = await getUserById(userId)

    const emissions = await getAllEmissions(userId); // Vienen ordenadas por año y mes, mas reciente primero
    if ( emissions.length === 0) {
      return res.status(400).json({ message: "No tiene registrada ninguna emisión para realizar un recomendación" });
    }
    const lastEmission = emissions[0]

    const recomendacionAI = await generateResponse(user, lastEmission);

    let recomendacion = await Recomendacion.findOne({ userId });

      if (recomendacion) {
        // Si la emisión ya existe, actualízala
        recomendacion.recomendacion = recomendacionAI;
        await recomendacion.save();
        console.log('Recomendacion actualizada:', recomendacion);
      } else {
        // Si no existe, crea una nueva emisión
        recomendacion = new Recomendacion({ userId, mes, recomendacion });
        await recomendacion.save();
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