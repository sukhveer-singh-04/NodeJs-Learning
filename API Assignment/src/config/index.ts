const mongoose = require('mongoose');
const express = require("express");
mongoose.connect('mongodb://localhost:27017/learningMongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log("Connected Successfully");
}).catch((err) => {
    console.log("No Connection");
});;

const mySchema = {
    f_name: String,
    l_name: String,
    roll_no: Number,

}

const newData = mongoose.model("learningDB", mySchema);

const app = express();
app.use(express.urlencoded());

app.post('/data', (req, res) => {
    // console.log(req.body.newData);
    const addData = new newData({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        roll_no: req.body.roll_no
    });

    addData.save((err) => {
        if (err) {
            throw err;
        } else {
            res.send("data sent");
        }
    })
})