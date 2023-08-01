const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/product_db';

const client = new MongoClient(url);

let collectionName;

async function run() {

    try {
        const databaseName = client.db('product_info');
        collectionName = databaseName.collection('products');
        console.log("Connection Successful.");
    } catch (err) {
        console.log("Error Occured while connecting to the database.");
    }
}

run();

module.exports = collectionName;