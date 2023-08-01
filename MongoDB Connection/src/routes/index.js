const express = require("express");
const userModel = require("../models/index");
const app = express();

app.post('/add_data', async(req, res) => {
    const user = userModel(req.body);

    try {
        await user.save();
        res.send(user);
    }catch(err){
        res.status(405).send('err occured in route')
    }
});

app.get('/get_data' , async(req, res) => {
    const collectionCreation = await userModel.find({});
    try {
        // await user.save();
        res.send(collectionCreation);
    }catch(err){
        res.status(405).send('err occured in route')
    }
});

module.exports = app;