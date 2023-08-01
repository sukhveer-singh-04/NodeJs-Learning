const express = require('express');
const app = express();
const port = 4040;
const route = require('./src/routes');

app.use(express.json());
app.use(route);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));