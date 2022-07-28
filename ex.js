


const admZip = require('adm-zip');
const request = require('superagent');
const fs = require('fs');

const repoName = 'careermunzil';
const href = `https://chiru385111@bitbucket.org/${repoName}/devappapi.git`;
const zipFile = 'master.zip';
const source = `${href}/${zipFile}`;
const extractEntryTo = `${repoName}-master/`;
const outputDir = `./${repoName}-master/`;
console.log('href', href);
console.log('source', source);
console.log('extractEntryTo', extractEntryTo);
console.log('outputDir', outputDir);

request
  .get(source)
  .on('error', function(error) {
    console.log(error);
  })
  .pipe(fs.createWriteStream(zipFile))
  .on('finish', function() {
    console.log('finished dowloading');
    var zip = new admZip(zipFile);
    console.log('start unzip');
    zip.extractEntryTo(extractEntryTo, outputDir, false, true);
    console.log('finished unzip');
  });
  

