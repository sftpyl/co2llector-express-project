require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');
const { MESSAGE_CORRECT_CONECTION } = require('./utils/consts/connections');
const emisionRoutes = require('./routes/emisionRoutes');
const authRoutes = require('./routes/authRoute');
const ConnectionMongoDB = require('./connections/mongoose');
const errorHandler = require('./middlewares/errorMiddleware');
const swaggerSpec = require('./docs/swagger'); 
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(cors());
// Middleware
app.use(express.json());

// Agregar el Middleware para acceso con autenticacion
// Agregar al request información del usuario
// req.empresa = empresa

// Routes
app.use('/api', authRoutes);
app.use('/api/emision', emisionRoutes);
// Ruta para la documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Agregar el middleware de manejo de errores después de las rutas
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`${MESSAGE_CORRECT_CONECTION.SERVER} ${process.env.PORT}`);
  ConnectionMongoDB()
}
);
