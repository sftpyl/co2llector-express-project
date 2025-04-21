require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const emisionRoutes = require('./routes/emisionRoutes')

const app = express();

// Middleware
app.use(express.json());
// Agregar el Middleware para acceso con autenticacion
// Agregar al request información del usuario
// req.empresa = empresa

// Routes
app.use('/api/emision', emisionRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and listening on port ${process.env.PORT}`);
    })
  )
  .catch( (error) => {
    console.log(error);
  })