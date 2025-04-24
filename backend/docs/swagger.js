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
      description: 'Development server',
    },
  ],
  components: {
    schemas: {
      RegisterUser: {
        type: 'object',
        required: [
          'userType',
          'email',
          'password',
          'nombre',
          'pais',
          'rubro'
        ],
        properties: {
          userType: {
            type: 'string',
            enum: ['company', 'personal'],
            example: 'company'
          },
          email: {
            type: 'string',
            format: 'email',
            example: 'ricardo@gmail.com'
          },
          password: {
            type: 'string',
            format: 'password',
            example: '1234'
          },
          nombre: {
            type: 'string',
            example: 'Ricardo'
          },
          pais: {
            type: 'string',
            example: 'Argentina'
          },
          rubro: {
            type: 'string',
            example: 'Textil',
            description: 'Rubro de la empresa (solo aplica si userType es "company")'
          }
        }
      },
      LoginUser: {
        type: 'object',
        required: [
          'email',
          'password',
        ],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            example: 'ricardo@gmail.com'
          },
          password: {
            type: 'string',
            format: 'password',
            example: '1234'
          }
        }
      },
      UserDetails: {
        type: 'object',
        required: [
          'userType',
          'email',
          'nombre',
          'pais',
          'rubro'
        ],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            example: 'ricardo@gmail.com'
          },
          userType: {
            type: 'string',
            enum: ['company', 'personal'],
            example: 'company'
          },
          nombre: {
            type: 'string',
            example: 'Ricardo'
          },
          pais: {
            type: 'string',
            example: 'Argentina'
          },
          rubro: {
            type: 'string',
            example: 'Textil',
          }
        }
      },
      CalcularEmision: {
        type: 'object',
        required: ['emisionData'],
        properties: 
        {
          emisionData: {
            type: 'object',
            required: ['actividades', 'anio', 'mes'],
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
              anio: { 
                type: 'number', 
                example: 2025
              },
              mes: { 
                type: 'number', 
                example: 6
              }
            }
          },
          save: { 
            type: 'boolean', 
            default: false 
          },
        }
      },
      EmisionResponse: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          userId: { 
            type: 'string' 
          },
          actividades: { 
            type: 'object',
            example: {
              electricidad_wkh: 1,
              gas_litros: 2,
              transporte_auto_km: 3,
              viajes_avion_km: 4,
              papel_kg: 5,
              agua_m3: 6,
              residuos_kg: 12
            }
          },
          resultado: {
            type: 'object',
            properties: {
              total: { 
                type: 'number' 
              },
              detalle: { 
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
              }
            }
          },
          anio: { 
            type: 'number', 
            example: 2025
          },
          mes: { 
            type: 'number', 
            example: 6
          },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' }
        }
      },
      Recommendation: {
        type: 'object',
        properties: {
          recomendacion: {
            type: 'string',
            example: 'Recomendación generada por la AI'
          }
        }
      }
    },
    securitySchemes: {
      cookieAuth: {
        type: 'apiKey',
        in: 'cookie',
        name: 'authToken', // el nombre exacto de la cookie donde guardás el JWT
      }
    }
  },
  security: [{ cookieAuth: [] }]  // Nivel Global
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js", "./docs/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
