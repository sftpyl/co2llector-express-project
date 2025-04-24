const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const PATH_PROFILE = '/profile';

router.get(`${PATH_PROFILE}/:id`, userController.getUserById);
router.put(`${PATH_PROFILE}/:id`, userController.updateUser);
router.delete(`${PATH_PROFILE}/:id`, userController.deleteUser);

module.exports = router;