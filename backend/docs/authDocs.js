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
 * /api/auth/logout:
 *   post:
 *     summary: Logout para usuario
 *     tags: [User]
 *     description: Logout para usuario
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Logout exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Logout exitoso
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error al cerrar sesión
 */





/**
 * @swagger
 * /api/emission/calculate:
 *   post:
 *     summary: Crear una nueva emisión
 *     tags: [Emissions]
 *     description: Crea una nueva emisión y devuelve los resultados.
 *     security:
 *       - cookieAuth: []
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

/**
 * @swagger
 * /api/emission/history:
 *   get:
 *     summary: Emisiones de un usuario
 *     tags: [Emissions]
 *     description: Devuelve una lista con las emisiones de un usuario
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EmisionResponse'
 *       400:
 *         description: Error de validación
 */

/**
 * @swagger
 * /api/emission/{id}:
 *   get:
 *     summary: Obtiene los datos de una emision
 *     tags: [Emissions]
 *     description: Obtiene los datos de una emision según su _id
 *     security: 
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la emisión
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EmisionResponse'
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Emision no encontrada
 */

/**
 * @swagger
 * /api/recommendations:
 *   post:
 *     summary: Crea una recomendación
 *     tags: [Recommendations]
 *     description: Crea una nueva recomendación personalizada para un usuario según sus emisiones
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recommendation'
 *       400:
 *         description: Error de validación
 */

/**
 * @swagger
 * /api/profile/{id}:
 *   get:
 *     summary: Obtiene los datos de un usuario
 *     tags: [Profile]
 *     description: Obtiene los datos de un usuario
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDetails'
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Usuario no encontrado
 *   put:
 *     summary: Modifica los datos de un usuario
 *     tags: [Profile]
 *     description: Modifica los datos de un usuario
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDetails'
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDetails'
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Usuario no encontrado
 *   delete:
 *     summary: Elimina un usuario
 *     tags: [Profile]
 *     description: Elimina un usuario
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Usuario no encontrado
 */
