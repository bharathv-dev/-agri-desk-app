
const fs = require('fs');
const path = require('path');

const directory = './assets/crops';
const outputFile = './bad_files.txt';

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    let badFiles = [];
    files.forEach(file => {
        const filePath = path.join(directory, file);
        try {
            const buffer = fs.readFileSync(filePath);
            const header = buffer.subarray(0, 8).toString('hex').toUpperCase();

            if (file.endsWith('.png')) {
                if (header.startsWith('FFD8')) {
                    badFiles.push(file);
                }
            }
        } catch (err) {
            // ignore
        }
    });

    fs.writeFileSync(outputFile, badFiles.join('\n'));
    console.log('Done. Found ' + badFiles.length + ' bad files.');
});
