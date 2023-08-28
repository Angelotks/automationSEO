const fs = require('fs');

const readFile = (filePath) => {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return fileContent.split('\n').filter(url => url.trim() !== '');
    } catch (error) {
      console.error(`Error al leer el archivo: ${error}`);
      return [];
    }
  };

  console.log('Exportando readFile');
  module.exports = {
    readFile
  };