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
      message: HTTP.MESSAGE_USER.USER_FOUND,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      },
    });
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res
      .status(HTTP.STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: HTTP.STATUS_MESSAGES.INTERNAL_SERVER_ERROR });
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
      message: HTTP.MESSAGE_USER.USER_UPDATED,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      },
    });
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res
      .status(HTTP.STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: HTTP.STATUS_MESSAGES.INTERNAL_SERVER_ERROR });
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

    res.status(HTTP.STATUS.OK).json({
      message: HTTP.MESSAGE_USER.USER_DELETED,
    });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    res
      .status(HTTP.STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: HTTP.STATUS_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
};
