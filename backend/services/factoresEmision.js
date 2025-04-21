const factoresEmision = {
  electricidad_wkh: 0.2,
  gas_litros: 5,
  transporte_auto_km: 0.1
}

// Devuelve la estructura compatible con Mongoose
const factoresEmisionFields = () => {
  const fields = {};
  for (let key in factoresEmision) {
    fields[key] = { type: Number, default: 0, min: 0 };
  }
  return fields;
};

module.exports = { factoresEmision, factoresEmisionFields };