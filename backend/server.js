require('dotenv').config({ path: './.env' });
const express = require('express');
const emisionRoutes = require('./routes/emisionRoutes');
const ConnectionMongoDB = require('./connections/mongoose');
const { MESSAGE_CORRECT_CONECTION } = require('./utils/consts/connections');
const cors = require('cors');
const authRoutes = require('./routes/authRoute');
const recommendationsRoutes = require('./routes/recommendationsRouter');

const app = express();

app.use(cors());
// Middleware
app.use(express.json());

// Agregar el Middleware para acceso con autenticacion
// Agregar al request información del usuario
// req.empresa = empresa

// Routes
const PATH_API = '/api';

app.use('/api/emision', emisionRoutes);
app.use(PATH_API, authRoutes);
app.use(PATH_API, recommendationsRoutes);


app.listen(process.env.PORT, () => {
  console.log(`${MESSAGE_CORRECT_CONECTION.SERVER} ${process.env.PORT}`);
  ConnectionMongoDB()
}
);
