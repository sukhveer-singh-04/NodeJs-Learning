const express = require('express')
const app = express()
const execute = require('../controllers')

app.post('/add', execute.createDoc);
app.get('/all', execute.getAllDocs);
app.get('/:id', execute.getById);
app.put('/:id', execute.updateOne);
app.delete('/:id', execute.deleteOne);
app.patch('/:id', execute.patch);

module.exports = app;