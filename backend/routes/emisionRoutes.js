const express = require('express');
const { calcularEmisionController, allEmissions, emissionById } = require('./../controllers/emisionController');
const router = express.Router();

const PATH_EMISSIONS = '/emissions';

router.post(`${PATH_EMISSIONS}/calculate`, calcularEmisionController)
router.post(`${PATH_EMISSIONS}/history`, allEmissions)
router.get(`${PATH_EMISSIONS}/:id`, emissionById)

module.exports = router