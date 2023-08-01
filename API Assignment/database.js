const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/DatabaseName';

mongoose.connect(url).then((res) => console.log('Connected to database.')).catch(err => console.log("Not connecting to the database."));

const scheme = mongoose.Schema({ 
    f_name: String,
    l_name: String,
    roll_no: Number
});



const model = mongoose.model('collection_name', scheme);

const addData = new model({
    f_name: 'Sukhveer',
    l_name: 'Singh',
    roll_no: 23,
    // car : 'Thar',
});

addData.save(addData);