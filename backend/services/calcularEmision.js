const { factoresEmision } = require('./../utils/dataset/factoresEmision')

const filtrarActividadesValidas = (actividades) => {
  if (typeof actividades !== 'object' || actividades === null) {
    throw new Error('El parámetro "actividades" debe ser un objeto no nulo');
  }

  try {
    const actividadesValidas = {};
    for (const key in actividades) {
      if (factoresEmision.hasOwnProperty(key)) {
        actividadesValidas[key] = actividades[key];
      }
    }
    return actividadesValidas;
  } catch (err) {
    console.error('Error al filtrar actividades:', err);
    throw new Error(`Error al filtrar actividades: ${err.message}`);
  }
};

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
          const aux = factoresEmision[key] * actividades[key];
          detalle[key] = Math.round(aux * 100) / 100;
          total += aux
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

module.exports = { calcularEmision, filtrarActividadesValidas }