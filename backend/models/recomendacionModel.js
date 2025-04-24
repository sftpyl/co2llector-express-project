const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recomendacionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  prompt: String,
  recomendacion: String,
  modelo: {
    type: String,
    default: 'OpenAI' // IA utilizada
  }
}, { timestamps: true } )

module.exports = mongoose.model('Recomendacion', recomendacionSchema)
