const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recomendacionSchema = new Schema({
  calculoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Emision',
    required: true
  },
  prompt: String,
  recomendacion: String,
  modelo: String, // IA utilizada
}, { timestamps: true } )

module.exports = mongoose.model('Recomendacion', recomendacionSchema)
