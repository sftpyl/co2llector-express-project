require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const emisionRoutes = require('./routes/emisionRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger'); 
const errorHandler = require('./middlewares/errorMiddleware')

const app = express();

// Middleware
app.use(express.json());
// Agregar el Middleware para acceso con autenticacion
// Agregar al request información del usuario
// req.empresa = empresa

// Routes
app.use('/api/emision', emisionRoutes);
// Ruta para la documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Agregar el middleware de manejo de errores después de las rutas
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and listening on port ${process.env.PORT}`);
    })
  )
  .catch( (error) => {
    console.log(error);
  })