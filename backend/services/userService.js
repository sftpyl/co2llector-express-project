const userModel = require("../models/userModel");

const getUserById = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw new Error("Error fetching user by ID");
  }
};

const updateUser = async (userId, data) => {
  try {
    const password = data.password
    const updatePassword = await hash.createHashPassword(password);
    data.password = updatePassword;

    const user = await userModel.findByIdAndUpdate(userId, data, {
      new: true,
    });

    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Error updating user");
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await userModel.findByIdAndDelete(userId);
    return user;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Error deleting user");
  }
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
}