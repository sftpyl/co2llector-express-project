const express = require('express');
const { calcularEmisionController } = require('./../controllers/emisionController');
const { getAllEmissions, getEmissionsById } = require('../services/emissionsService');
const router = express.Router();

const PATH_EMISSIONS = '/emissions';

router.post(`${PATH_EMISSIONS}/calculate`, calcularEmisionController)
router.post(`${PATH_EMISSIONS}/history`, getAllEmissions)
router.get(`${PATH_EMISSIONS}/:id`, getEmissionsById)

module.exports = router