/*
@Author: Parv Jain

Sort the Result
---------------
Use the sort() method to sort the result in ascending or descending order.

The sort() method takes one parameter, an object defining the sorting order.

*/

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mysort = { name: 1 };
  db.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log('Ascending order of name');
    console.log(result);
    db.close();
  });
});

/*
Sort Descending
---------------
Use the value -1 in the sort object to sort descending.

{ name: 1 } // ascending
{ name: -1 } // descending
*/

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mysort = { name: -1 };
  db.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log('Descending order of name');
    console.log(result);
    db.close();
  });
});