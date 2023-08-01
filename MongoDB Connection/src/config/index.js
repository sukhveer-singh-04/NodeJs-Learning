// const { MongoClient } = require('mongodb')

// // Create Instance of MongoClient for mongodb
// const client = new MongoClient('mongodb://127.0.0.1:27017')

// // Connect to database
// client.connect()
//     .then(() => {
//         console.log('Connected Successfully!')
//     })
//     .catch(error => console.log('Failed to connect!', error))

// var dbo = db.db("mydb");
// dbo.createCollection("customers", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     // db.close();
// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});