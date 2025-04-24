const jwt = require("jsonwebtoken");
const HTTP = require("../utils/consts/httpConstants");

const secretKey = process.env.JWT_SECRET_KEY;

const verifyAuthToken = (req, res, next) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      console.log("verifyAuthToken: No token provided");

      return res
        .status(HTTP.STATUS.UNAUTHORIZED)
        .json({ message: HTTP.MESSAGE_TOKEN.TOKEN_NOT_PROVIDED });
    }
    const decodedToken = jwt.decode(token, secretKey);

    if (!decodedToken) {
      console.log("verifyAuthToken: Token invalid or expired");

      return res
        .status(HTTP.STATUS.UNAUTHORIZED)
        .json({ message: HTTP.MESSAGE_TOKEN.TOKEN_INVALID });
    }

    req.user = {
      id: decodedToken.id,
      nombre: decodedToken.nombre,
      email: decodedToken.email,
      userType: decodedToken.userType,
    };

    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res
      .status(HTTP.STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: HTTP.MESSAGE_TOKEN.TOKEN_NOT_GENERATED });
  }
};

const isSelf = (req, res, next) => {
  const userIdFromToken = req.user.id;
  const userIdFromParams = req.params.id;

  if (userIdFromToken !== userIdFromParams) {
    return res.status(HTTP.STATUS.FORBIDDEN).json({ message: 'No tienes permisos para esta acción' });
  }

  next();
};

module.exports = { verifyAuthToken, isSelf };
