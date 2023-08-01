const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('debug', true);
const uri = process.env.MONGO_URI
const databaseLoader = async () => new Promise((resolve, reject) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(uri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false 
    })
        .then(db => {
            console.log('Database connection established.');
            resolve(db);
        })
        .catch(reject);
});

module.exports = databaseLoader;
// databaseLoader()