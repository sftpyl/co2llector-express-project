const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prediccionSchema = new Schema({
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  },
  fechaPrediccion: {
    type: Date,
    required: true
  },
  horizonteMeses: {
    type: Number,
    default: 6, // plazo típico de predicción
    min: [1, "Debe ser mayor o igual a 1"],
    max: [12, "Debe ser menor o igual a 12"],
    validate: {
      validator: Number.isInteger,
      message: "Debe ser un número entero",
    },
  },
  prediccion: {
    total: Number,
    // detalle se podria sacar, depende el modelo de IA
    detalle: {  
      electricidad_kwh: Number,
      gas_litros: Number,
      transporte_auto_km: Number
    }
  },
  modelo: {
    nombre: String,      // Ej: "regresion-lineal"
    version: String      // Ej: "v1.0"
  },
  confianza: Number,      // Ej: 0.85 → 85% de certeza (opcional)
}, { timestamps: true })

module.exports = mongoose.model('Prediccion', prediccionSchema)
