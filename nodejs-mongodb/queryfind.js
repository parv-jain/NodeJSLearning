/*
@Author: Parv Jain
Filter the Result
-----------------
When finding documents in a collection, you can filter the result by using a query object.

The first argument of the find() method is a query object, and is used to limit the search.

*/

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { address: "Park Lane 38" };
  db.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

/*
Filter With Regular Expressions
-------------------------------
You can write regular expressions to find exactly what you are searching for.

Regular expressions can only be used to query strings.

To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/
*/


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { address: /^S/ };
  db.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});