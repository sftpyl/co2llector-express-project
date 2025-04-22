require('dotenv').config({ path: './.env' });
const express = require('express');
const emisionRoutes = require('./routes/emisionRoutes');
const ConnectionMongoDB = require('./connections/mongoose');
const { MESSAGE_CORRECT_CONECTION } = require('./utils/consts/connections');
const cors = require('cors');
const authRoutes = require('./routes/authRoute');

const app = express();

app.use(cors());
// Middleware
app.use(express.json());

// Agregar el Middleware para acceso con autenticacion
// Agregar al request información del usuario
// req.empresa = empresa

// Routes
app.use('/api/emision', emisionRoutes);
app.use('/api', authRoutes);


app.listen(process.env.PORT, () => {
  console.log(`${MESSAGE_CORRECT_CONECTION.SERVER} ${process.env.PORT}`);
  ConnectionMongoDB()
}
);
