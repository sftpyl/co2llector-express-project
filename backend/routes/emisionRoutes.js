const express = require('express');
const { calcularEmisionController } = require('./../controllers/emisionController')
const router = express.Router();

// Calcular Emision
router.post('/calculate', calcularEmisionController)

module.exports = router