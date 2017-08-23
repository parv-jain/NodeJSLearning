/*
@Author: Parv Jain
Join Collections
----------------
MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.

The $lookup stage lets you specify which collection you want to join with the current collection, and which fields that should match.

Consider you have a "orders" collection and a "products" collection

orders
[
  { _id: 1, product_id: 154, status: 1 }
]
products
[
  { _id: 154, name: 'Chocolate Heaven' },
  { _id: 155, name: 'Tasty Lemons' },
  { _id: 156, name: 'Vanilla Dreams' }
]

*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: 'id',
         as: 'orderdetails'
       }
     }
    ], function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});

/*
output:
[
  { _id: 1, product_id: 154, status: 1, orderdetails: [
    { _id: 154, name: 'Chocolate Heaven' } ]
  }
]
*/