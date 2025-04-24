const HTTP = require("../utils/consts/httpConstants");
const userService = require("../services/userService");

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);

    if (!user) {
      return res
        .status(HTTP.STATUS.NOT_FOUND)
        .json({ message: HTTP.MESSAGE_USER.USER_NOT_FOUND });
    }

    res.status(HTTP.STATUS.OK).json({
      user: {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        rubro: user.rubro,
        pais: user.pais,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    new Error("Error al obtener el usuario:")
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    //validar datos

    const user = await userService.updateUser(userId, data);

    if (!user) {
      return res
        .status(HTTP.STATUS.NOT_FOUND)
        .json({ message: HTTP.MESSAGE_USER.USER_NOT_FOUND });
    }

    res.status(HTTP.STATUS.OK).json({
      user: {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        rubro: user.rubro,
        pais: user.pais,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    });
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    new Error("Error al actualizar el usuario:")
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.deleteUser(userId);

    if (!user) {
      return res
        .status(HTTP.STATUS.NOT_FOUND)
        .json({ message: HTTP.MESSAGE_USER.USER_NOT_FOUND });
    }

    res.status(HTTP.STATUS.OK).json();
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    new Error("Error al eliminar el usuario:")
  }
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
};
