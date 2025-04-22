const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY || "defaultSecretKey";

const generateToken = (payload) => {
  try {
    const expireIn = process.env.JWT_EXPIRE_IN || "1h";
    const token = jwt.sign(payload, secretKey, { expiresIn: expireIn });

    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Error generating token");
  }
};

module.exports = generateToken;