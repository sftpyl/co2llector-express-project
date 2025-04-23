require('dotenv').config({path: './../.env'})
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const columns = [
  "activity_id",
  "id",
  "name",
  "category",
  "sector",
  "source",
  "year",
  "region",
  "description",
  "unit_type",
  "unit"
];

const getEmissionFactorsFromClimatIQ = async ({page = 1}) => {
  const url = `https://api.climatiq.io/data/v1/search?data_version=^21&activity_id=*&results_per_page=500&page=${page}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.CLIMAT_IQ_API_KEY}`
    }
  })

  if (!res.ok) {
    throw new Error(`Error en la API de ClimatIQ: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data
}

const getAllEmissionFactorsFromClimatIQ = async () => {
  let chunk = [];
  let chunkIndex = 11; // Ajustalo si empezás desde otro punto
  let currentPage = 101; // Idem
  let totalPages = 312;

  do {
    console.log(`📄 Fetching page ${currentPage}...`);
    const response = await getEmissionFactorsFromClimatIQ({ page: currentPage });

    if (!response.results || !Array.isArray(response.results)) {
      throw new Error('Formato inesperado en los resultados de la API.');
    }

    chunk.push(...response.results);

    if (currentPage % 10 === 0 || currentPage === totalPages) {
      const filename = path.join(__dirname, `factoresEmision_${String(chunkIndex).padStart(2, '0')}.csv`);
      
      // Convertimos a CSV
      const header = columns.join(',') + '\n';
      const rows = chunk.map(item =>
        columns.map(col => {
          const val = item[col] ?? '';
          const safe = typeof val === 'string'
            ? `"${val.replace(/"/g, '""').replace(/\n/g, ' ')}"`
            : val;
          return safe;
        }).join(',')
      ).join('\n');

      fs.writeFileSync(filename, header + rows);
      console.log(`💾 Guardado ${filename} con ${chunk.length} registros`);

      chunk = [];
      chunkIndex++;
    }

    currentPage++;

  } while (currentPage <= totalPages);

  console.log(`✅ Proceso terminado. Total de páginas: ${totalPages}`);
};


const joinCSVEmissionFactorsFiles = () => {
  // Carpeta donde están los archivos CSV
  const folderPath = __dirname;
  const outputFile = path.join(folderPath, 'factoresEmision_unificado.csv');

  // Leer todos los archivos que coincidan
  const files = fs.readdirSync(folderPath)
    .filter(name => name.startsWith('factoresEmision_') && name.endsWith('.csv'))
    .sort(); // para que los una en orden

  let isFirstFile = true;
  const writeStream = fs.createWriteStream(outputFile);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    if (isFirstFile) {
      // Escribimos todo, incluyendo el header
      writeStream.write(content + '\n');
      isFirstFile = false;
    } else {
      // Saltamos el header (primera línea)
      const contentWithoutHeader = lines.slice(1).join('\n');
      writeStream.write(contentWithoutHeader + '\n');
    }

    console.log(`✅ Unido ${file}`);
  }

  writeStream.end(() => {
    console.log(`🎉 Archivo unificado creado: ${outputFile}`);
  });
}


const readCSVHowManyLines = (filename) => {
  const filePath = path.join(__dirname, filename);

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n');

  // Suponiendo que la primera línea es el header
  const totalLines = lines.length - 1;

  console.log(`📊 El archivo tiene ${totalLines} registros (sin contar el header).`);
}

const parameters = {
  Area: { area: 1, area_unit: "m2" },
  AreaOverTime: { area: 1, time: 1, area_unit: "m2", time_unit: "day" },
  ContainerOverDistance:  { "weight": 1, "distance": 1, "distance_unit": "km",  "weight_unit": "kg" },
  Data: { data: 1, data_unit: "GB" },
  DataOverTime: { data: 1, time: 1, data_unit: "GB", time_unit: "day" },
  Distance: { distance: 1, distance_unit: "km" },
  DistanceOverTime: { distance: 1, distance_unit: "km", time_unit: "day" },
  Energy: { energy: 1, energy_unit: "kWh" },
  Money: { money: 1, money_unit: "usd" },
  Number: { number: 1 },
  NumberOverTime: { number: 1, time: 1, time_unit: "day" },
  PassengerOverDistance: { distance: 1, distance_unit: "km" },
  Power: { power: 1, power_unit: "kW" },
  Time: { time: 1, time_unit: "day" },
  Volume: { volume: 1, volume_unit: "l" },
  Weight: { weight: 1, weight_unit: "kg" },
  WeightOverDistance: { weight: 1, distance: 1, weight_unit: "kg", distance_unit: "km" },
  WeightOverTime: { weight: 1, time: 1, weight_unit: "kg", time_unit: "day" }
};

const getEmissionFactorValuesFromClimatIQ = async (batchData) => {
  const url = `https://api.climatiq.io/data/v1/estimate/batch`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.CLIMAT_IQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(batchData)
  });

  if (!res.ok) {
    throw new Error(`Error en la API de ClimatIQ: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};

const mergeAllJSONFiles = (directory) => {
  const archivos = fs.readdirSync(directory).filter(file => file.startsWith("resultados_batch_") && file.endsWith(".json"));

  const resultados = {};

  for (const file of archivos.sort()) {
    const filePath = path.join(directory, file);
    const contenido = fs.readFileSync(filePath, 'utf-8');
    const datos = JSON.parse(contenido);

    Object.assign(resultados, datos); // Combina los objetos
  }

  const outputFile = path.join(directory, "resultados_unificados.json");
  fs.writeFileSync(outputFile, JSON.stringify(resultados, null, 2));
  console.log(`✅ Todos los archivos fusionados en ${outputFile}`);
};

const processCSVInChunks = async () => {
  const filePath = path.join(__dirname, 'factoresEmision_unificado.csv');
  const apiBatchSize = 100;
  const fileWriteThreshold = 5000;

  let lineCounter = 0;
  let apiBuffer = [];
  let resultBuffer = {};
  let fileIndex = 1;

  const stream = fs.createReadStream(filePath).pipe(csv());

  for await (const row of stream) {
    const unitType = row.unit_type;
    const id = row.id;

    if (!parameters[unitType]) {
      console.warn(`⚠️ unit_type desconocido: ${unitType} en línea ${lineCounter}`);
      continue;
    }

    apiBuffer.push({
      emission_factor: {
        id
      },
      parameters: parameters[unitType]
    });

    if (apiBuffer.length === apiBatchSize) {
      console.log(`🚀 Fetching batch of ${apiBatchSize} from API...`);
      try {
        const response = await getEmissionFactorValuesFromClimatIQ(apiBuffer);
        let x = 0
        for (const r of response.results) {
          if(r.emission_factor !== undefined) {
            resultBuffer[r.emission_factor.id] = {
              co2e: r.co2e,
              co2e_unit: r.co2e_unit
            };
          } else {
            console.log(apiBuffer[x]);    
            console.log(r);    
          }
          x += 1;
        }
      } catch (error) {
        console.error(`❌ Error en el fetch:`, error.message);
      } 
      apiBuffer = [];
      console.log(`🚀 Size of result batch if ${Object.keys(resultBuffer).length}`);
    }

    if (Object.keys(resultBuffer).length >= fileWriteThreshold) {
      const filename = path.join(__dirname, `resultados_batch_${String(fileIndex).padStart(3, '0')}.json`);
      fs.writeFileSync(filename, JSON.stringify(resultBuffer, null, 2));
      console.log(`💾 Guardado ${filename} con ${Object.keys(resultBuffer).length} registros`);
      resultBuffer = {};
      fileIndex++;
    }

    lineCounter++;
  }

  // Si queda algo pendiente
  if (apiBuffer.length > 0) {
    console.log(`🚀 Procesando último batch incompleto (${apiBuffer.length})`);
    try {
      const response = await getEmissionFactorValuesFromClimatIQ(apiBuffer);
      for (const r of response.results) {
        resultBuffer[r.emission_factor.id] = {
          co2e: r.co2e,
          co2e_unit: r.co2e_unit
        };
      }
    } catch (error) {
      console.error(`❌ Error en el último fetch:`, error.message);
    }
  }

  if (Object.keys(resultBuffer).length > 0) {
    const filename = path.join(__dirname, `resultados_batch_${String(fileIndex).padStart(3, '0')}.json`);
    fs.writeFileSync(filename, JSON.stringify(resultBuffer, null, 2));
    console.log(`💾 Guardado ${filename} con ${Object.keys(resultBuffer).length} registros (finales)`);
  }

  console.log(`✅ Proceso finalizado. Total líneas procesadas: ${lineCounter}`);

  mergeAllJSONFiles(__dirname);
};


const joinJSONtoCSV = () => {
  const csvInputPath = path.join(__dirname, 'factoresEmision_unificado.csv');
  const jsonPath = path.join(__dirname, 'resultados_unificados.json');
  const outputCsvPath = path.join(__dirname, 'factoresEnriquecidos.csv');

  const resultados = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  const rows = [];

  fs.createReadStream(csvInputPath)
    .pipe(csv())
    .on('data', (row) => {
      const id = row.id;
      const co2eData = resultados[id];

      if (!co2eData) return; // Si no hay resultado, salteamos

      // Eliminamos 'id'
      delete row.id;

      // Agregamos 'co2ekg'
      row.co2ekg = co2eData.co2e;

      rows.push(row);
    })
    .on('end', () => {
      const headers = Object.keys(rows[0]).map(key => ({ id: key, title: key }));

      const csvWriter = createCsvWriter({
        path: outputCsvPath,
        header: headers
      });

      csvWriter.writeRecords(rows)
        .then(() => {
          console.log(`✅ CSV enriquecido generado en: ${outputCsvPath}`);
        });
    });
}

const countObjectsInJSON = (filename) => {
  const filePath = path.join(__dirname, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);

  if (Array.isArray(data)) {
    console.log(`📊 El archivo tiene ${data.length} objetos (array).`);
  } else if (typeof data === 'object' && data !== null) {
    console.log(`📊 El archivo tiene ${Object.keys(data).length} objetos (objeto).`);
  } else {
    console.log('⚠️ El JSON no contiene un array ni un objeto válido.');
  }
};

module.exports = { getAllEmissionFactorsFromClimatIQ, joinCSVEmissionFactorsFiles, countObjectsInJSON, readCSVHowManyLines, processCSVInChunks, joinJSONtoCSV };