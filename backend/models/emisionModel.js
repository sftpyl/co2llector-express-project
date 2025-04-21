const mongoose = require('mongoose');
const { factoresEmisionFields } = require('./../services/factoresEmision')

const Schema = mongoose.Schema;

// Aplicar campos al schema
const factoresEmisionSchema = new Schema(factoresEmisionFields);

const emisionSchema = new Schema({
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  actividades: factoresEmisionSchema,
  resultado: {     
    total: Number,
    detalle: factoresEmisionSchema
  },
  fuente: {
    type: String,
    default: '',
  }
}, { timestamps: true } )

module.exports = mongoose.model('Emision', emisionSchema)
