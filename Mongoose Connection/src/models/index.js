const mongoose = require("mongoose");
// const dbConnect = 
require('../loaders');

const schema = new mongoose.Schema({
    _id : {type : Number},
    name : {type : String},
    age : {type : Number}
}, { versionKey : false});

const model = mongoose.model('products', schema);
 
// dbConnect();
module.exports = model;