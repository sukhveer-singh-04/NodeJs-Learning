const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : String,
    age : Number,
    is18 : Boolean,
})

const collectionCreation = mongoose.model( 'collectionName', schema);

module.exports = collectionCreation;