const { generateResponse } = require("../services/openAiService");

const recommendations = async (req, res) => {
  try {
    const { company, totalEmision, details } = req.body;

    if (!company || !totalEmision || !details) {
      return res.status(400).json({ error: "Faltan datos en la solicitud" });
    }

    // obtener la ultima consulta de la base de datos


    const response = await generateResponse(company, totalEmision, details);
    return res.status(200).json({ message: response });
  } catch (error) {
    console.error("Error al generar la respuesta:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  recommendations,
};