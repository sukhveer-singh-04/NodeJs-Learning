const express = require('express');
// const model = require('../models/index')
const { db, coll } = require('../configure/mongodb/mongodb');
const app = express();

// app.use(express.json());

app.post('/product', async (req, res) => {
    const data = model(req.body);

    try {
        await data.save();
        res.send(data);
        // res.status(200).send({
        //     status: true,
        //     message: OK,
        // data: data
        // });
    } catch (err) {
        res.status(405).send('err occured in route')
        console.log("Error occured in 'POST' - routes directory.");
        // res.end();
    }
})

app.get('/products', async (req, res) => {
    const data = await model.find({});

    try {
        // res.send(data);
        res.status(200).send({
            status: true,
            message: OK,
            data: data
        });
    } catch (err) {
        console.log("Error occured in 'GET' - routes directory.");
        res.status(405).send('err occured in route')
    }
})


module.exports = app;






// const doc = { name: "Neapolitan pizza", shape: "round" };
// const result = coll.insertOne(doc);
// console.log(
//     `A document was inserted with the _id: ${result.insertedId}`,
// );


app.post('/add_data', function (req, res) {
    // Sending request to create a data
    const data1 = req.body.text ;
    db.coll('data').insertOne({ data1 }, function (err, info) {
        res.send(data1);
    })
})