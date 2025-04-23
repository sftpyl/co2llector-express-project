const HTTP = require("../utils/consts/httpConstants");

// Middleware para manejar errores
const errorHandler = (err, req, res, next) => {
  // Aquí puedes personalizar cómo manejar los diferentes tipos de errores
  console.error(err); // Log del error (puedes agregar más detalles si lo necesitas)

  // Si el error es un error de validación o algo específico, puedes verificar el tipo
  if (err.name === 'ValidationError') {
    return res.status(HTTP.STATUS.BAD_REQUEST).json({
      message: 'Datos inválidos',
      error: err.message
    });
  }

  // Si no es un error específico, devolvemos un error genérico
  return res.status(HTTP.STATUS.INTERNAL_SERVER_ERROR).json({
    message: 'Error interno del servidor',
    error: err.message
  });
};

module.exports = errorHandler;