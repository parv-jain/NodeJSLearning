//@Author:Parv Jain

var http = require('http');
var dt = require('./myfirstmodule');

var server = http.createServer(function(req,res){
				res.writeHead(200,{'Content-Type':'text/html'})
				res.write("The date and time currently is:"+dt.myDateTime());
				res.end();
});

server.listen(3000,console.log('server started at http://localhost:3000'));