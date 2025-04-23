const fs = require('fs');
const csv = require('csv-parser');

function readEmisionFactors() {
  return new Promise((resolve, reject) => {
    const factoresEmision = {};

    fs.createReadStream('./../dataset/dataset.csv')
      .pipe(csv())
      .on('data', (row) => {
        factoresEmision[row.subcategory] = row;
      })
      .on('end', () => {
        console.log('CSV procesado.');
        resolve(factoresEmision);
      })
      .on('error', reject);
  });
}

module.exports = { readEmisionFactors };