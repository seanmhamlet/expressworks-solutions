/* Master Express.js and have fun!
─────────────────────────────────
 JSON ME
 Exercise 8 of 8

Write a server that reads a file, parses it to JSON and outputs the content
to the user.

The port is passed in process.argv[2].  The file name is passed in process.argv[3].

Respond with:

    res.json(object)

Everything should match the '/books' resource path.

-------------------------------------------------------------------------------

Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/

var express = require('express');
var fs      = require('fs');
var app = express();

var portNumber = process.argv[2];
var fileName   = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(fileName, function(err, data) {
    if (err) return err;
    var books = JSON.parse(data);
    res.json(books);
  });
});

app.listen(portNumber);