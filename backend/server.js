require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and listening on port ${process.env.PORT}`);
    })
  )
  .catch( (error) => {
    console.log(error);
  })