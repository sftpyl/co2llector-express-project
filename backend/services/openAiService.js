const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateResponse = async (company, totalEmision, details) => {
  const prompt = `
  Eres un asistente virtual que ayuda a las empresas a reducir su huella de carbono.
  Has calculado la huella de carbono de la empresa ${company} y el total de emisiones es ${totalEmision} kgCO2e.
  Detalle de las emisiones:
  ${JSON.stringify(details)}
  Genera un mensaje para la empresa con recomendaciones personalizadas para reducir su huella de carbono.
  Incluye consejos prácticos y sugerencias de acciones que pueden tomar para reducir su impacto ambiental.
  Asegúrate de que el mensaje sea claro y fácil de entender para el usuario.
  El mensaje debe ser amigable y alentador, y debe motivar a la empresa a tomar medidas para reducir su huella de carbono,
  además debe incluir un resumen de las emisiones y un llamado a la acción para que la empresa implemente las recomendaciones.
  
  Tu tarea es generar una recomendación para reducir esa huella, pero **respondé únicamente en formato JSON** con esta estructura:

  {
    "empresa": "nombre",
    "huella_total": total,
    "top_emisiones": ["actividad1", "actividad2", ...],
    "recomendaciones": ["sugerencia1", "sugerencia2", ...],
    "mensaje_final": "frase motivacional o cierre profesional"
  }

  No agregues texto fuera del JSON.

  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 500,
    temperature: 0.7,
  });

  // console.log("Response from OpenAI:", JSON.parse(response.choices[0].message.content));
  const respuesta = JSON.parse(response.choices[0].message.content);

  // console.log("Response from OpenAI:", respuesta);
  
  // return response.choices[0].message.content;
  return respuesta;
};

module.exports = {
  generateResponse,
};
