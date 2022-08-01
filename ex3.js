const AdmZip = require('adm-zip');

const file = new AdmZip();

file.addLocalFile('./model', 'project');
file.addLocalFolder('./node_modules', 'project/node_modules');

const fs = require('fs');

fs.writeFileSync('output.zip', file.toBuffer());