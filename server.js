var express = require('express');
var app = express();


app.use(express.static(__dirname+'/public'));

app.listen(3000, function() {
    console.log('Server has listenning on PORT3000');
});