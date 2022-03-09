var path = require('path');
var express = require('express');

var app = express();
var distDir = __dirname + '/dist/';

app.use(express.static(distDir));

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function () {
  console.log('listening on port ', server.address().port);
});
