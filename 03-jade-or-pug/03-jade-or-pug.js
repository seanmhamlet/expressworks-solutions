/*
 JADE
 Exercise 3 of 8

Create an Express.js app with a home page rendered by Jade template engine.

The homepage should respond to /home.

The view should show the current date using toDateString.

-------------------------------------------------------------------------------

Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/

var express = require('express');
var path    = require('path');
var app = express();

var portNumber = process.argv[2];
var jadeTemplate = process.argv[3];

app.set('view engine', 'jade');

app.set('views', jadeTemplate||path.join(__dirname, 'templates'));

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(portNumber);
