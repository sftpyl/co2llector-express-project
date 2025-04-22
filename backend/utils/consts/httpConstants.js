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

module.exports = {
  STATUS,
  MESSAGE_LOGIN,
  MESSAGE_REGISTER,
};