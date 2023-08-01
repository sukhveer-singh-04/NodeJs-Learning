const express = require('express');
const app = express();
const path = require('path');

// console.log( path.join(__dirname + '/src/serve-static'));
let k ;
// app.use(express.static( path.join(__dirname, '/src/serve-static') , { index: 'index.html' }));
// app.use(express.text());

app.use(express.text());

app.post("/", (req, res) => {
    k = req.body
    res.setHeader('Content-Type' , 'text/html')
    res.send(k);
})
app.get("/", (req, res) => {
    res.send(k);
})
