const express = require('express');
const app = express();

const allRoute = require('./src/routers')

app.get('/', (req, res) => {
  res.status(200).send({
    status: true,
    message: 'You will find images on "http://localhost:8080/home/public-jpg/j1.jpg"   or     on "http://localhost:8080/home/public-png/p1.png". The names of images are : JPG - j1.jpg,  j2.jpg, j3.jpg     and  PNG - p1.png, p2.png, p3.png.'
  })
})
app.use('/home', allRoute);



app.listen(8080, () => console.log('Server listening at 8080'));