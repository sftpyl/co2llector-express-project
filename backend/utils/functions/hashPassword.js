const bcrypt = require("bcrypt");

const createHashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Error hashing password");
  }
};

const compareHashPassword = async (password, hash) => {
  try {
    const comparePassword = await bcrypt.compare(password, hash);
    return comparePassword;
  } catch (error) {
    console.error("Error comparing password:", error);
    throw new Error("Error comparing password");
  }
};

module.exports = {
  createHashPassword,
  compareHashPassword,
};
