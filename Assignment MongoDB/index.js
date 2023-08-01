const express = require('express');
const app = express();
const router = require('./src/routes/index');
const dbConnect = require('./src/configure/mongodb/mongodb');
app.use(express.json());

app.use(router);

