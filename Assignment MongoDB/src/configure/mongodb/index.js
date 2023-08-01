const mongoose = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/products_database';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, mongoose.set('strictQuery', true));

const db = mongoose.connection;
db.on('err', () => console.log("err occured in models directory..."));
db.once('open', () => {
    console.log('Connection Successful.')
})