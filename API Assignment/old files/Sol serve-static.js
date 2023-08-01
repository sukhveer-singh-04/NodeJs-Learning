const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
console.log(__dirname);


fs.mkdir(path.join(__dirname, '../assetss/images/png'), {recursive : true }, (err) => {if(err) throw err;});
fs.mkdir(path.join(__dirname, '../assetss/images/jpg'), {recursive : true }, (err) => {if(err) throw err;});
app.use(express.static(path.join(__dirname, '../assets/images/jpg')));
app.use(express.static(path.join(__dirname, '../assets/images/png')));

// console.log(path.join(__dirname, '../assets/images/jpg'));

// app.use('/public-png', (req, res) => {
//     res
// })

app.listen(8080);