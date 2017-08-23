/*
@Author: Parv Jain

Drop Collection
---------------
You can delete a table, or collection as it is called in MongoDB, by using the drop() method.

The drop() method takes a callback function containing the error object and the result parameter which returns true if the collection was dropped successfully, otherwise it returns false.
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});

/*
db.dropCollection
-----------------
You can also use the dropCollection() method to delete a table (collection).

The dropCollection() method takes two parameters: the name of the collection and a callback function
*/

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.dropCollection("customers", function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});