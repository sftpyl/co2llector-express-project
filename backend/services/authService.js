const userModel = require("../models/userModel");
const hash = require("../utils/functions/hashPassword");

const createUser = async (userData) => {
  try {

    const password = await hash.createHashPassword(userData.password);
    userData.password = password;

    const newUser = new userModel(userData);

    await newUser.save();
    // console.log("User created successfully service:", newUser);

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

const checkUserExists = async (data) => {
  try {
    const userExistsEmail = await userModel.findOne({ email: data.email });
    const userExistsName = await userModel.findOne({ nombre: data.nombre });
    if (userExistsEmail || userExistsName) {
      // console.log("User already exists:", userExistsEmail || userExistsName);
      return true;
    }
    // console.log("User does not exist");
    return false;
  }
  catch (error) {
    console.error("Error checking user existence:", error);
    throw new Error("Error checking user existence");
  }
}


const getUserByEmail = async (data) => {
  try {
    const user = await userModel.findOne({ email: data.email });
    if (!user) {
      // console.log("User not found:", user);
      return null;
    }
    // console.log("User found:", user);
    return user;
  } catch (error) {
    console.error("Error getting user by email:", error);
    throw new Error("Error getting user by email");
  }
}

module.exports = {
  createUser,
  checkUserExists,
  getUserByEmail,
};



