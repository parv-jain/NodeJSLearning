/*
@Author:Parv Jain
NPM is a package manager for Node.js packages, or modules if you like.

www.npmjs.com hosts thousands of free packages to download and use.

A package in Node.js contains all the files you need for a module.

Modules are JavaScript libraries you can include in your project.

Download a package:
npm install upper-case

NPM creates a folder named "node_modules", where the package will be placed. All packages you install in the future will be placed in this folder.
*/

var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(3000);