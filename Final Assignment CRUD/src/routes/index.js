const express = require('express');
const app = express();

const collection = require('../configure/mongodb');
const dbQuries = require('../services/index');

app.post('/product', async (req, res) => {
    let data = req.body;
    data = await dbQuries.insertDoc(data);

    try {
        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        });
        console.log("Data sent to db.")
    } catch (err) {
        res.status(405).send({
            status: false,
            message: 'OK',
        });
        console.log("error occured while sending data to db.")
    }
});

app.get('/products', async (req, res) => {
    try {
        const data = await dbQuries.getAllDocs();
        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        });
        console.log("Data fetched from db.")
    } catch (err) {
        res.status(405).send({
            status: false,
            message: 'OK',
        });
        console.log("Error occured while fetching data from db.\n", err)
    }
});

app.get('/product/:id', async (req, res) => {
    try {
        const idi = Number(req.params.id);
        const data = await dbQuries.getDocById(idi);

        if (data == '')
            res.send("Not found.");
        else {
            res.status(200).send({
                status: true,
                message: 'OK',
                data: data
            });
            console.log("Data fetched from db.")
        }
    } catch (err) {
        res.status(405).send({
            status: false,
            message: 'OK',
        });
        console.log("Error occured while fetching data from db.", err)
    }
});

app.put('/product/:id', async (req, res) => {
    try {
        const idi = Number(req.params.id);
        let data = await dbQuries.findDocById(idi);
        // console.log('id is - ', data);

        if (data == '') {
            let newData = req.body;
            newData = await dbQuries.insertDoc(newData);
            res.status(200).send({
                status: true,
                message: 'OK',
                data: newData
            });
            console.log("Not found. Hence created.");
        }
        else {

            let newData = req.body;
            // console.log('id is - ', newData);
            newData = await dbQuries.replaceDoc(data[0], newData);

            res.status(200).send({
                status: true,
                message: 'OK',
                data: newData
            });
            console.log("Data Updated in db.")
        }
    } catch (err) {
        res.status(405).send({
            status: false,
            message: 'OK',
            // data: newData
        });
        console.log("Error occured while updating data in db.", err)
    }
});

app.delete('/product/:id', async (req, res) => {
    try {
        const idi = Number(req.params.id);
        let data = await dbQuries.deleteDoc({ _id: idi });

        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        });
    }
    catch (err) { console.log("Error while deleting.") };
});

module.exports = app;