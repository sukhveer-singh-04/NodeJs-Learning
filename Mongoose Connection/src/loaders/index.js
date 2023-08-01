const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.DB_URL;

// console.log(process.env.DB_URL);

// const uri = process.env.MONGO_URI || 'mongodb://localhost/test';

// const runDB = 

(async function(){
    try {
        
        mongoose.set('strictQuery', false);
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("\nConnection Successful.\n");
    } catch (err) { console.log("\nError occured whilre connecting to database.\n", err) };
})();

// runDB();

// module.exports = runDB; 