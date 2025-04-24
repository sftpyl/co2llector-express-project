//MENSAJES DE EXITO PARA MANEJO DE LAS CONECCIONES
const MESSAGE_CORRECT_CONECTION = {
  MONGO: "Conectado a MongoDB correctamente",
  SERVER: "Servidor corriendo en el puerto:",

};

//MENSAJES DE ERROR PARA MANEJO DE LAS CONECCIONES
const MESSAGE_ERROR_CONECTION = {
  MONGO: "Error al conectar a MongoDB:",
  SERVER: "Error al iniciar el servidor:",
}

module.exports = {
  MESSAGE_CORRECT_CONECTION,
  MESSAGE_ERROR_CONECTION,
};
