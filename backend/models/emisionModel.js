const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emisionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // fecha: {
  //   type: Date,
  //   default: Date.now
  // },
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
  mes: {
    type: Number,
    min: 1,
    max: 12,
    // required: true // validar en el controlador o middleware
  },
  anio: {
    type: Number,
    min: 1900,
    max: 2100, 
    // required: true // validar en el controlador o middleware
  }
}, { timestamps: true } )

module.exports = mongoose.model('Emision', emisionSchema)
