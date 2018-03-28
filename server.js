var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

function create(data){
    var s = data.toString();
    return s;
}

app.get('/ui/hometree/*', function(req,res) {
    var url = req.originalUrl;
  res.sendFile(path.join(__dirname, create(url)));
});

app.get('/ui/hometree/style/*.css', function(req,res) {
    var url = req.originalUrl;
  res.sendFile(path.join(__dirname, create(url)));
});