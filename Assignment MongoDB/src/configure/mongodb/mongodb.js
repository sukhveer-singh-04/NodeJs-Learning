const { MongoClient } = require("mongodb");

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/products_database';

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("mongodb").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const myDB = client.db("myDB");
const myColl = myDB.collection("pizzaMenu");

// const myDB = client.db("myDB");
// const myColl = myDB.collection("pizzaMenu");
// const doc = { name: "Neapolitan pizza", shape: "round" };
// const result = await myColl.insertOne(doc);
// console.log(
//    `A document was inserted with the _id: ${result.insertedId}`,
// );

module.exports = {
    myDB,
    myColl
}

