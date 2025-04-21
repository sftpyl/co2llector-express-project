const factoresEmision = require('./factoresEmision')

const calcularEmisiones = (actividades) => {
  // actividades debe ser un objeto
  let emision = 0
  for (let x in actividades) {
    if (x in factoresEmision) {
      if (actividades[x]) { // checkear condicion, podria ser mejor (actividades[x] != null), solo chequea null o undefined
        emision += factoresEmision[x] * actividades[x];
      }
    }
  }
  return emision
}

module.exports = calcularEmisiones