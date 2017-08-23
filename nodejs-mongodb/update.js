/*
Author: Parv Jain

Update Document
---------------
You can update a record, or document as it is called in MongoDB, by using the updateOne() method.

The first parameter of the updateOne() method is a query object defining which document to update.

Note: If the query finds more than one record, only the first occurrence is updated.

The second parameter is an object defining the new values of the document. By default, all fields in the document gets updated, (except the _id field) so remember to set the value of every field, otherwise the value will be left empty.
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/testdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Valley 345" };
  var newvalues = { name: "Mickey", address: "Canyon 123" };
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});

/*
Update Only Specific Fields
---------------------------
To update only selected fields, use the $set operator to prevent the other fields from being left empty
*/

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: { address: "Canyon 123" } };
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});

/*
Update Many Documents
---------------------
To update all documents that meets the criteria of the query, use the updateMany() method.
*/

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  db.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});