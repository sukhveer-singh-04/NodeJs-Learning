const express = require('express');
const app = express();

const controller = require('../controllers');

app.post('/insert', controller.postDocs);
app.get('/all', controller.getAll);
app.get('/:id', controller.getById);
app.get('/:id', controller.getOne);
app.delete('/:id', controller.delOne);
app.delete('/name/:name', controller.delManyByname);
app.delete('/:id', controller.findRemoveById);

module.exports = app;