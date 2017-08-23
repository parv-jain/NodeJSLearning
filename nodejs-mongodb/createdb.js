/*
@Author: Parv Jain

Node.js MongoDB
---------------
Node.js can be used in database applications.

One of the most popular NoSQL database is MongoDB.

MongoDB
--------
To be able experiment with the code examples, you will need access to a MongoDB database.

You can download a free MongoDB database at https://www.mongodb.com.

Install MongoDB Driver
----------------------
Let us try to access a MongDB database with Node.js.

To download and install the official MongoDB driver: npm install mongodb
*/

/*
Creating a Database
-------------------
To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL with the correct ip address and the name of the database you want to create.

MongoDB will create the database if it does not exist, and make a connection to it.
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});