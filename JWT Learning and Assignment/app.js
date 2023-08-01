const express = require('express')
const app = express()
const port = 3000
const mongoose = require('./src/loaders/database');
const route  = require('./src/routers');

app.use(express.json()); 
app.use(route);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))  