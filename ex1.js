const fs = require('fs')
const https = require('https')

function download(url, dest, cb) {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(cb);  // close() is async, call cb after close completes.
        });
    }).on('error', function (err) { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
    });
};

// Download latest archive from GitHub to temp folder
const dest  = './example.zip'
const url = 'https://github.com/chiru381/sequlize.git'
download(url, dest, function(){
    console.log('Done')
})