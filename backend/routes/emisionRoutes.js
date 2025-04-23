const express = require('express');
const { calcularEmisionController } = require('./../controllers/emisionController')
const router = express.Router();

const PATH_EMISSIONS = '/emissions';

router.post(`${PATH_EMISSIONS}/calculate`, calcularEmisionController)

module.exports = router