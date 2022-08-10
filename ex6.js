var express = require('express');
var app = express();
var AWS = require('aws-sdk');
 
app.get('/download-file', function(req, res, next){
    // https://deposvision-s3.s3.ap-south-1.amazonaws.com/mwnode-login/login-node-flow.zip
    // s3://deposvision-s3/mwnode-login/login-node-flow.zip

    // download the file via aws s3 here
    var fileKey = req.query['login-node-flow.zip'];
 
    console.log('Trying to download file', fileKey);
     
    AWS.config.update(
      {
        accessKeyId: "AKIAYUENRQP2H4JLU6KB",
        secretAccessKey: "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",
        region: 'ap-south-1'
      }
    );
    var s3 = new AWS.S3();
    var options = {
        Bucket    : 'mwnode-login',
        Key    : 'login-node-flow.zip',
    };
 
    res.attachment(fileKey);
    var fileStream = s3.getObject(options).createReadStream();
    fileStream.pipe(res);
});

//get all list
app.get("/list", async (req, res) => {
    AWS.config.update(
        {
          accessKeyId: "AKIAYUENRQP2H4JLU6KB",
          secretAccessKey: "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",
          region: 'ap-south-1'
        }
      );
    var s3 = new AWS.S3();
    let r = await s3.listObjectsV2({ Bucket: 'mwnode-login' }).promise();
    let x = r.Contents.map(item => item.Key);
    res.send(x)
})
 
 
app.listen(3000, function () {
   console.log('express is online');
})