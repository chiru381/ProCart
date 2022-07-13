var fs = require('fs');

var cities = {};
try {
    var cityJSONString = fs.readFileSync("./cities.json");
    cities = JSON.parse(cityJSONString);
    console.log(cities);
  } catch (err) {
    console.log(err);
    return;
  }