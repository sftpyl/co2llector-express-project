const { factoresEmision } = require('./factoresEmision')

const calcularEmision = (actividades) => {
  // actividades debe ser un objeto
  if (typeof actividades !== 'object' || actividades === null) {
    throw new Error('Las actividades deben ser un objeto no nulo');
  }

  try {
    let total = 0
    let detalle = {}

    for (let key in actividades) {
      if (Object.hasOwn(factoresEmision, key)) {
        if (actividades[key] != null) { // checkea que no sea null ni undefined
          detalle[key] = factoresEmision[key] * actividades[key];
          total += detalle[key]
        }
      }
    }

    total = Math.round(total * 100) / 100;

    return { total, detalle }

  } catch (err) {
    console.error('Error calculando las emisiones:', err);
    throw new Error(`Error al calcular las emisiones: ${err.message}`);
  }
}

module.exports = { calcularEmision }