const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userType: {
    type: String,
    enum: ['company', 'personal'],
    required: true
  },
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
    required: function() {
      return this.userType === 'company';
    }
  },
  pais: {
    type: String,
    required: true
  }
}, { timestamps: true } )

module.exports = mongoose.model('User', userSchema)
