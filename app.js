var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/* Middleware */

// var logger = function(req, res, next){
//   console.log('Logging...');
//   next();
// }
// app.use(logger);


// body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //writing documentation for bodyParser


app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000, function(){
  console.log('server started on Port 3000...'); `  `
})
