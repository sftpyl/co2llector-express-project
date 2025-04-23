const express = require('express');
const { calcularEmisionController } = require('./../controllers/emisionController')
const router = express.Router();

const PATH_EMISSIONS = '/emissions';

// Calcular Emision
/**
 * @swagger
 * /api/emision/calculate:
 *   post:
 *     summary: Crear una nueva emisión
 *     tags: [Emisiones]
 *     description: Crea una nueva emisión y devuelve los resultados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CalcularEmision'
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EmisionResponse'
 *       400:
 *         description: Error de validación
 */
router.post(`${PATH_EMISSIONS}/calculate`, calcularEmisionController)

// /**
//  * @swagger
//  * /api/emision/test:
//  *   get:
//  *     summary: Testeo
//  *     tags: [Emisiones]
//  *     description: Testear el swagger
//  *     security: []
//  *     responses:
//  *       200:
//  *         description: Éxito
//  *       400:
//  *         description: Error de validación
//  */
// router.get('/test', (req, res) => {
//   res.status(200).json({msg: 'Test'})
// })

module.exports = router