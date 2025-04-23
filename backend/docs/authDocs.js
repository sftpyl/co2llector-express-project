/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [User]
 *     description: Registrar un nuevo usuario
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario creado exitosamente.
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 6808ff6420ed2fb6aa0a3967
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: ricardo@gmail.com
 *                     nombre:
 *                       type: string
 *                       example: Ricardo
 *       400:
 *         description: Error de validación
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login para usuario
 *     tags: [User]
 *     description: Login para usuario
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Loggin exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Inicio de sesión exitoso
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 6808ff6420ed2fb6aa0a3967
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: ricardo@gmail.com
 *                     nombre:
 *                       type: string
 *                       example: Ricardo
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error en el inicio de sesión
 */



/**
 * @swagger
 * /api/emission/calculate:
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
 *             type: object
 *             required:
 *               - userType
 *               - email
 *               - password
 *               - nombre
 *               - pais
 *               - rubro
 *             properties:
 *               userType:
 *                 type: string
 *                 enum: [company, individual]
 *                 example: company
 *                 description: Tipo de usuario (empresa o personal)
 *               email:
 *                 type: string
 *                 format: email
 *                 example: ricardo4@gmail.com
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "1234"
 *                 description: Contraseña del usuario (mínimo 4 caracteres)
 *               nombre:
 *                 type: string
 *                 example: Ricardo
 *                 description: Nombre del usuario o empresa
 *               pais:
 *                 type: string
 *                 example: Argentina
 *                 description: País del usuario
 *               rubro:
 *                 type: string
 *                 example: Textil
 *                 description: Rubro de la empresa (solo aplica si userType es "company")
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
