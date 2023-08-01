// // const mongoose = require('mongoose');
// // const express = require("express");
// // mongoose.connect('mongodb://localhost:27017/nodejs learning', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // }).then((result) => {
// //     console.log("Connected Successfully");
// // }).catch((err) => {
// //     console.log("No Connection  ", err);
// // });;

// // var conn = mongoose.connection;
// // // mongodb://localhost:27017/
// // const mySchema = {
// //     f_name: String,
// //     l_name: String,
// //     roll_no: Number,
// // };
// // conn.on('disconnected',function(){
// //     console.log('database is disconnected successfully');
// // const newData = mongoose.model("learningDB", mySchema);
// // });
// // const app = express();
// // app.use(express.urlencoded());

// // app.post('/data', (req, res) => {
// //     // console.log(req.body.newData);
// //     const addData = new newData({
// //     //     f_name: req.body.f_name,
// //     //     l_name: req.body.l_name,
// //     //     roll_no: req.body.roll_no

// //     f_name : 'Sukhveer',
// //     l_name : 'Singh',
// //     roll_no : 23    
// // });

// //     addData.save((err) => {
// //         if (err) {
// //             throw err;
// //         } else {
// //             res.send("data sent");
// //         }
// //     })
// // })

// // app.listen(3000, function(){
// //     console.log("App is running on Port 3000");
// // });



// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
// var conn = mongoose.connection;
// conn.on('connected', function() {
//     console.log('database is connected successfully');
// });
// conn.on('disconnected',function(){
//     console.log('database is disconnected successfully');
// })
// conn.on('error', console.error.bind(console, 'connection error:'));
// module.exports = conn;

// // var mongoUrl = 'mongodb://localhost:27017/nodejs learning'
// // var mongoose = require('mongoose')
// // // updated 2021
// // // mongoose.Promise = global.Promise;
// // // mongoose.set('useNewUrlParser', true);
// // // mongoose.set('useFindAndModify', false);
// // // mongoose.set('useCreateIndex', true)
 
// // mongoose.connect(mongoUrl, { useUnifiedTopology: true })
// // .then(() => { log('Connected to MongoDB: %s \n ', mongoUrl) }) 
// // .catch((err) => { console.log('MongoDB connection error: %s \n', err); })
const mongoose = require('mongoose');

const myFunc = () => {
    const userSchema = mongoose.Schema({
        name: String
    });

    const User = mongoose.model("User", userSchema);

    const userObject = new User({
        name: 'Sukhveer Singh'
    });

    userObject.save((err, data) => {
        if (err)
            console.log('Error in saving = ' + err);
        if (data)
            console.log('Saved to DB = ' + data)
    }
    );
}; 
// mongodb://localhost:27017/nodejs learning
mongoose
    .connect("mongodb://0.0.0.0/userdb")
    .then(myFunc(), err => console.log(`Error = ${err}`)); 