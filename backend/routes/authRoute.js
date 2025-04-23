const express = require("express");
const { signUp, signIn } = require("../controllers/authController");
const router = express.Router();

const AUTH_PATH = "/auth";

router.post(`${AUTH_PATH}/register`, signUp);
router.post(`${AUTH_PATH}/login`, signIn);

module.exports = router;
