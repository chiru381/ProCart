const JSZip = require('jszip');

const zip = new JSZip();

zip.file("source.txt", "Hello World\n");

const img = zip.folder("images");
img.file("yahoo-qr-code.png", 'asdfsdfds', {base64: false});

zip.generateAsync({type:""}).then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});

/*
Results in a zip containing
Hello.txt
images/
    smile.gif
*/