const mongoose = require('mongoose');
const databaseLoader = require('../loaders/database');
databaseLoader();
const schema = new mongoose.Schema({
    _id : Number,
    token : String    
});
const collection = mongoose.model('jwtTokencollection', schema);

module.exports = collection;

  