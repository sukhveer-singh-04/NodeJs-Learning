const mongoose = require('mongoose');
require('../loaders');
// var i = 1;
const schema = new mongoose.Schema({
    _id: { type: Number },
    title: { type: String },
    price: { type: String },
    category: { type: String },
    description: { type: String }, 
    image: { type: String }
}, { versionKey: false });

// schema.pre('save', () => {console.log('Hello from pre save')});

// schema.post('save', () => console.log('Hello from post save'));

schema.pre('save', () => {console.log('Hello from pre create')});

schema.post('create', () => console.log('Hello from post create'));

schema.pre('findOne', () => {console.log('Hello from pre findone')});

const model = mongoose.model('prods', schema);

// schema.pre('save', function () {
//     console.log('Pre Hook Middleware executed');
// });



module.exports = model; 