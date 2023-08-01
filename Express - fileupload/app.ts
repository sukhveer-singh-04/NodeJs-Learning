import express from 'express';
import fileUpload from 'express-fileupload';
import { router } from './src/routes';

import path from 'path';

const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(router);

app.use(express.static(path.join(__dirname, 'src/views')));

app.use(fileUpload({
    debug:true
}));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

