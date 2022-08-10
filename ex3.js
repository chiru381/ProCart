// const AdmZip = require('adm-zip');

// const file = new AdmZip();

// file.addLocalFile('./model', 'project');
// file.addLocalFolder('./node_modules', 'project/node_modules');

// const fs = require('fs');

// fs.writeFileSync('output.zip', file.toBuffer());



var file_system = require('fs'); 
var archiver = require('archiver'); 
 
var output = file_system.createWriteStream('target.zip'); 
var archive = archiver('zip'); 
 
output.on('close', function () { 
    console.log(archive.pointer() + ' total bytes'); 
    console.log('archiver has been finalized and the output file descriptor has closed.'); 
}); 
 
archive.on('error', function(err){ 
    throw err; 
}); 
 
archive.pipe(output); 
// archive.bulk([ 
//     { expand: false, cwd: 'source', src: ['./source.txt'], dest: './source.txt'} 
// ]) 
archive.finalize(); 