const express = require('express');
const app = express();
const route = require('./src/routes');

app.use(express.json());

app.use(route);

app.listen(8085, console.log("Listening at port number 8085..."))