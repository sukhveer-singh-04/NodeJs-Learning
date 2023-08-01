const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URI;
(async function () {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
         
        })
        console.log("\nConnection Successful.\n")
    } catch (err) { console.log('\nError while connecting to database.\n', err)};
})()

