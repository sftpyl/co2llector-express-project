const mongoose = require("mongoose");
const {
  MESSAGE_CORRECT_CONECTION,
  MESSAGE_ERROR_CONECTION,
} = require("../utils/consts/connections");

const ConnectionMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {dbName: process.env.DB_NAME});
    console.log(MESSAGE_CORRECT_CONECTION.MONGO);
  } catch (error) {
    console.error(MESSAGE_ERROR_CONECTION.MONGO, error.message);
  }
};

module.exports = ConnectionMongoDB;
