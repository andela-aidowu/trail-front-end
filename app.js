'use strict';

var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + 'public/index.html');
});

app.listen(port);
