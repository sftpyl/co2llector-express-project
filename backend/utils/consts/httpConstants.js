const STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const STATUS_MESSAGES = {
  OK: "OK",
  CREATED: "Created",
  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  FORBIDDEN: "Forbidden",
  NOT_FOUND: "Not Found",
  CONFLICT: "Conflict",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
}

const MESSAGE_LOGOUT = {
  LOGOUT_SUCCESSFUL: "Sesión cerrada exitosamente.",
  ERROR_IN_LOGOUT: "Error al cerrar sesión.",
};

const MESSAGE_LOGIN = {
  USER_NOT_FOUND: "Usuario no encontrado.",
  INVALID_PASSWORD: "Contraseña inválida.",
  LOGIN_SUCCESSFUL: "Inicio de sesión exitoso.",
  ERROR_IN_LOGIN: "Error en el inicio de sesión.",
};

const MESSAGE_REGISTER = {
  USER_ALREADY_EXISTS: "El usuario ya existe.",
  USER_CREATED_SUCCESSFULLY: "Usuario creado exitosamente.",
  USER_NOT_FOUND: "Usuario no encontrado.",
  ERROR_CREATING_USER: "Error al crear el usuario.",
  ERROR_HASHING_PASSWORD: "Error al hashear la contraseña.",
  ERROR_COMPARING_PASSWORD: "Error al comparar la contraseña.",
}

const MESSAGE_TOKEN = {
  TOKEN_GENERADED: "Token generado correctamente.",
  TOKEN_NOT_GENERATED: "Error al generar el token.",
  TOKEN_NOT_FOUND: "Token no encontrado.",
  TOKEN_INVALID: "Token inválido o expirado.",
  TOKEN_EXIRED: "Token expirado.",
  TOKEN_NOT_PROVIDED: "Token no proporcionado.",
}

const MESSAGE_USER = {
  USER_NOT_FOUND: "Usuario no encontrado.",
  USER_DELETED: "Usuario eliminado.",
  USER_UPDATED: "Usuario actualizado.",
  USER_FOUND: "Usuario encontrado.",
  USER_NOT_UPDATED: "Usuario no actualizado.",
}

module.exports = {
  STATUS,
  STATUS_MESSAGES,
  MESSAGE_LOGIN,
  MESSAGE_LOGOUT,
  MESSAGE_REGISTER,
  MESSAGE_TOKEN,
  MESSAGE_USER,
};