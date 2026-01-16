
const fs = require('fs');
const path = require('path');

const directory = './assets/crops';
const files = ['jasmine.png', 'mango.png', 'wheat.png'];

files.forEach(file => {
  const filePath = path.join(directory, file);
  try {
    const buffer = fs.readFileSync(filePath);
    const header = buffer.subarray(0, 8).toString('hex');
    const isPng = header.toUpperCase() === '89504E470D0A1A0A';
    console.log(`${file}: ${isPng ? 'Valid PNG Header' : 'INVALID Header: ' + header}`);
  } catch (err) {
    console.error(`Error reading ${file}:`, err.message);
  }
});
