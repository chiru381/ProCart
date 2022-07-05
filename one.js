var fs = require('fs');

//reading
var readStream = fs.createReadStream('source.txt')
var data = '';
readStream.setEncoding('utf8');
readStream.on('data', function(chunk){
    data+=chunk;
})
readStream.on('end', function(){
    console.log(data)
});


//writing
var writeData = "Hello Welcome to my world"
var writeStream = fs.createWriteStream( 'Destination.txt')
writeStream.write(writeData, 'utf8')
writeStream.end()
writeStream.on('finish', function(){
    console.log('writeData successfully')
})