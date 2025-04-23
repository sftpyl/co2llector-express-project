const factoresEmision = {
  electricidad_kwh: 0.4,             // 0.4 kg CO₂e por kWh
  gas_natural_m3: 2.15,              // 2.15 kg CO₂e por m³
  gasolina_litros: 2.31,             // 2.31 kg CO₂e por litro
  diesel_litros: 2.68,               // 2.68 kg CO₂e por litro
  transporte_auto_km: 0.192,         // 0.192 kg CO₂e por km (auto mediano)
  viajes_avion_km: 0.09,             // 0.09 kg CO₂e por km (promedio vuelo)
  tren_km: 0.041,                    // 0.041 kg CO₂e por km
  papel_kg: 1.3,                     // 1.3 kg CO₂e por kg
  plastico_kg: 6.0,                  // 6.0 kg CO₂e por kg
  vidrio_kg: 0.85,                   // 0.85 kg CO₂e por kg
  alimentos_kg: 2.5,                 // 2.5 kg CO₂e por kg (promedio global)
  agua_m3: 0.35,                     // 0.35 kg CO₂e por m³ (tratamiento y bombeo)
  residuos_kg: 1.8                   // 1.8 kg CO₂e por kg (residuos mezclados)
};


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

module.exports = { factoresEmision, filtrarActividadesValidas };