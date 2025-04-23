const express = require("express");
const { signUp, signIn, logout } = require("../controllers/authController");
const verifyAuthToken = require('./../middlewares/verifyAuthToken');
const router = express.Router();

const AUTH_PATH = "/auth";

router.post(`${AUTH_PATH}/register`, signUp);
router.post(`${AUTH_PATH}/login`, signIn);
router.post(`${AUTH_PATH}/logout`, verifyAuthToken, logout);

module.exports = router;
