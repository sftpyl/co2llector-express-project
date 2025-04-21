const { factoresEmision } = require('./factoresEmision')

const calcularEmision = (actividades) => {
  // actividades debe ser un objeto
  let total = 0
  let detalle = {}
  for (let key in actividades) {
    if (Object.hasOwn(factoresEmision, key)) {
      if (actividades[key]) { // checkear condicion, podria ser mejor (actividades[key] != null), solo chequea null o undefined
        detalle[key] = factoresEmision[key] * actividades[key];
        total += detalle[key]
      }
    }
  }
  total = Math.round(total * 100) / 100;
  return { total, detalle }
}

module.exports = { calcularEmision }