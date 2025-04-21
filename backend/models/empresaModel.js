const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empresaSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  rubro: {
    type: String,
    required: true
  },
  direccion: {
    type: String
  },
  pais: {
    type: String,
    required: true
  }
}, { timestamps: true } )

module.exports = mongoose.model('Empresa', empresaSchema)