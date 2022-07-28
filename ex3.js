const AdmZip = require('adm-zip');

const file = new AdmZip();

file.addLocalFile('routes');
file.addLocalFolder('routes');

const fs = require('fs');

fs.writeFileSync('output.zip', file.toBuffer());