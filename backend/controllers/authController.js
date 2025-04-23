const userService = require("../services/authService");
const hash = require("../utils/functions/hashPassword");
const HTTP = require("../utils/consts/httpConstants");
const generateToken = require("../utils/functions/generateToken");

const signUp = async (req, res) => {
  try {
    const data = req.body;
    // console.log("req.body", data);

    const userExists = await userService.checkUserExists(data);
    if (userExists) {
      return res
        .status(HTTP.STATUS.BAD_REQUEST)
        .json({ message: HTTP.MESSAGE_REGISTER.USER_ALREADY_EXISTS });
    }

    const newUser = await userService.createUser(data);
    if (!newUser) {
      return res
        .status(HTTP.STATUS.BAD_REQUEST)
        .json({ message: HTTP.MESSAGE_REGISTER.ERROR_CREATING_USER });
    }
    // console.log("User created successfully controller:", newUser);

    res.status(HTTP.STATUS.CREATED).json({
      message: HTTP.MESSAGE_REGISTER.USER_CREATED_SUCCESSFULLY,
      user: {
        id: newUser._id,
        nombre: newUser.nombre,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(HTTP.MESSAGE_REGISTER.ERROR_CREATING_USER, error);
    res
      .status(HTTP.STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: HTTP.MESSAGE_REGISTER.ERROR_CREATING_USER });
  }
};

const signIn = async (req, res) => {
  try {
    const data = req.body;

    const userfound = await userService.getUserByEmail(data);
    if (!userfound) {
      return res
        .status(HTTP.STATUS.BAD_REQUEST)
        .json({ message: HTTP.MESSAGE_LOGIN.USER_NOT_FOUND });
    }

    const isPasswordMatch = await hash.compareHashPassword(
      data.password,
      userfound.password
    );
    if (!isPasswordMatch) {
      return res
        .status(HTTP.STATUS.BAD_REQUEST)
        .json({ message: HTTP.MESSAGE_LOGIN.INVALID_PASSWORD });
    }

    // Generar token JWT
    const token = generateToken({
      id: userfound._id,
      nombre: userfound.nombre,
      email: userfound.email,
      userType: userfound.userType,
    });

    console.log("Token generated:", token);
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.TOKEN_SECURE === "production",
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(HTTP.STATUS.OK).json({
      message: HTTP.MESSAGE_LOGIN.LOGIN_SUCCESSFUL,
      user: {
        id: userfound._id,
        nombre: userfound.nombre,
        email: userfound.email,
      },
    });
  } catch (error) {
    console.error(HTTP.MESSAGE_LOGIN.ERROR_IN_LOGIN, error);
    res.status(500).json({ message: HTTP.MESSAGE_LOGIN.ERROR_IN_LOGIN });
  }
};

module.exports = { signUp, signIn };
