const factoresEmision = {
  electricidad_wkh: 0.4,
  gas_litros: 2.3,
  transporte_auto_km: 0.2,
  viajes_avion_km: 0.09,
  papel_kg: 1.3,
  agua_m3: 0.5,
  residuos_kg: 2.0
}

const filtrarActividadesValidas = (actividades) => {
  const actividadesValidas = {};
  for (const key in actividades) {
    if (factoresEmision.hasOwnProperty(key)) {
      actividadesValidas[key] = actividades[key];
    }
  }
  return actividadesValidas;
};

module.exports = { factoresEmision, filtrarActividadesValidas };