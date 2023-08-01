import express from 'express';
import {router} from './src/routers';
const app = express();
const port = 3000;
app.use(express.json());
app.use(router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));