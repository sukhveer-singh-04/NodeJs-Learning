const express = require('express');
const app = express();

const mongoose = require('mongoose');
const router = require('./src/routes/index');
mongoose.connect('mongodb://0.0.0.0:27017/sukhveer',
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
    },
        mongoose.set('strictQuery', true)
);
// const db = mongoose.connection;
// db.on('err', console.log('err occured'));
// db.once('open', () => {
//     console.log("Connection Successful");
// });
const db = mongoose.connection;
db.on("error", () => console.log("connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.use(express.json());
app.use(router);

app.listen(8080, function () { console.log(`Server is listening at 8080...`) });