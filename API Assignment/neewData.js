const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/DatabaseName';

mongoose.connect(url).then((result) => {
    console.log("Connected Successfully");
}).catch((err) => {
    console.log("No Connection  ", err);
});

const mySchema = mongoose.Schema({
    f_name: String,
    l_name: String,
    roll_no: Number,
});

const newData = mongoose.model("collectionName", mySchema);

// const addData = new newData({
//     f_name: 'Sukhveer',
//     l_name: 'Singh',
//     roll_no: 23
// });

// addData.save((err) => {
//     if (err) {
//         console.log('err aa gya bhai');
//     } else {
//         console.log("data sent");
//     }
// })