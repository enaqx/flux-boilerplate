/*
 * Testing Web-server
 */

var express = require('express');
var app = express();

var PORT = 3000;

app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT || PORT);

console.log('Listening on port %d', PORT);