module.exports = {
  functionsForAgent: [
    {
      name: "calcularEmision",
      description:
        "Calcula la huella de carbono en base a los datos de consumo que provee el usuario.",
      parameters: {
        type: "object",
        properties: {
          nombre: {
            type: "string",
            description: "Nombre de la persona o empresa",
          },
          actividades: {
            type: "object",
            description: "Actividades con sus cantidades",
            properties: {
              electricidad_wkh: { type: "number" },
              gas_litros: { type: "number" },
              transporte_auto_km: { type: "number" },
              viajes_avion_km: { type: "number" },
              papel_kg: { type: "number" },
              agua_m3: { type: "number" },
              residuos_kg: { type: "number" },
            },
          },
        },
        required: ["nombre", "actividades"],
      },
    },
  ],
};
