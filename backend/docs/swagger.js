require('dotenv').config({ path: './../.env' })
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mi API',
    version: '1.0.0',
    description: 'Documentación de mi co2llector con Swagger',
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`, // Cambiá esto si usás otro puerto o deploy
    },
  ],
  components: {
    schemas: {
      CalcularEmision: {
        type: 'object',
        required: ['actividades'],
        properties: {
          actividades: {
            type: 'object',
            example: {
              electricidad_wkh: 0.4,
              gas_litros: 2.3,
              transporte_auto_km: 0.2,
              viajes_avion_km: 0.09,
              papel_kg: 1.3,
              agua_m3: 0.5,
              residuos_kg: 2.0
            }
          },
          fecha: { type: 'string', format: 'date-time' }
        }
      },
      EmisionResponse: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          empresaId: { type: 'string' },
          actividades: { type: 'object' },
          resultado: {
            type: 'object',
            properties: {
              total: { type: 'number' },
              detalle: { type: 'object' }
            }
          },
          fuente: { type: 'string' },
          fecha: { type: 'string', format: 'date-time' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' }
        }
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  },
  security: [{ bearerAuth: [] }]
};

// swaggerDefinition.paths = {
//   '/api/emision/calculate': {
//     post: {
//       summary: 'Crear una nueva emisión',
//       tags: ['Emisiones'],
//       description: 'Crea una nueva emisión y devuelve los resultados.',
//       security: [
//         {
//           bearerAuth: []
//         }
//       ],
//       requestBody: {
//         required: true,
//         content: {
//           'application/json': {
//             schema: {
//               $ref: '#/components/schemas/CalcularEmision'
//             }
//           }
//         }
//       },
//       responses: {
//         200: {
//           description: 'Éxito',
//           content: {
//             'application/json': {
//               schema: {
//                 $ref: '#/components/schemas/EmisionResponse'
//               }
//             }
//           }
//         },
//         400: {
//           description: 'Error de validación'
//         }
//       }
//     }
//   },
//   '/api/emision/test': {
//     get: {
//       summary: 'Testeo',
//       tags: ['Emisiones'],
//       description: 'Testear el swagger',
//       responses: {
//         200: {
//           description: 'Éxito'
//         },
//         400: {
//           description: 'Error de validación'
//         }
//       }
//     }
//   }
// }

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../routes/*.js')], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
