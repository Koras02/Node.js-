var fs = require('fs');
fs.readFile('sample.txt', 'urf8', function(err, data) {
    console.log(data);
 });