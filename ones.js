// var express = require('express');
// const app = express();
// var path = require('path');

// app.get('/downloadFile', function (req, res) {
//    var file = path.join(__dirname, 'mw_final_project');
//    res.download(file, function (err) {
//        if (err) {
//            console.log("Error");
//            console.log(err);
//        } else {
//            console.log("Success");
//        }
//    });
// });

// var server = app.listen(3000, function () {
//    console.log('Listening on', server.address().port);
// });








const express = require('express');
const zip = require("express-zip");
const app = express();

const PORT = 4088

app.get('/', (req, res) => {
    res.zip([
        {
            path: "mw_final_project",
            name: "mw_final_project",
        }
        // {
        //     path: "Destination.txt",
        //     name: "Destination.txt",
        // }
    ])
})

app.listen(4088, () => {
    console.log("listening on " + 4088);
})