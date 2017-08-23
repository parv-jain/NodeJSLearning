/*
@Author:Parv Jain
The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port

If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type

The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

This object has a property called "url" which holds the part of the url that comes after the domain name.

There are built-in modules to easily split the query string into readable parts, such as the URL module.
*/

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(3000,console.log('http://localhost:3000/?year=2017&month=July'));