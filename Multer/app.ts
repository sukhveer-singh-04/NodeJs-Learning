import express from 'express';
const app = express();
import path from 'path';
import { router } from './src/routes';
const port = 3300;

app.use(express.static(path.join(__dirname, 'src/views')));
app.use(router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
console.log(path.join(__dirname, 'src/views'))