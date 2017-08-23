/*
@Author: Parv Jain

Delete Document
---------------
To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.

The first parameter of the deleteOne() method is a query object defining which document to delete.

Note: If the query finds more than one document, only the first occurrence is deleted.
*/

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: 'Mountain 21' };
  db.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

/*
Delete Many
-----------
To delete more than one document, use the deleteMany() method.

The first parameter of the deleteMany() method is a query object defining which documents to delete.
*/

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: /^O/ };
  db.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});

/*
The Result Object
-----------------
The deleteMany() method returns an object which contains information about how the execution affected the database.

Most of the information is not important to understand, but one object inside the object is called "result" which tells us if the execution went OK, and how many documents were affected.

The result object looks like this:

{ n: 1, ok: 1 }
*/