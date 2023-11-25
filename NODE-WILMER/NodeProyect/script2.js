const fs = require('fs');

const filePath = 'output.txt';

const content = 'Hola, cree un texto!';

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`Content has been written to ${filePath}`);
  }
});
