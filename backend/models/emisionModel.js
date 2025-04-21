const mongoose = require('mongoose');
const { factoresEmisionSchemaFields } = require('./../services/factoresEmision')

const Schema = mongoose.Schema;

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
  actividades: {
    type: Map,
    of: Number,
    default: () => new Map()
  },
  resultado: {     
    total: Number,
    detalle: {
      type: Map,
      of: Number,
      default: () => new Map()
    }
  },
  fuente: {
    type: String,
    default: '', // Modificar
  }
}, { timestamps: true } )

module.exports = mongoose.model('Emision', emisionSchema)
