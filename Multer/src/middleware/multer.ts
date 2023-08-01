import multer from 'multer';
import path from 'path';
const uniqid = require('uniqid');
const storage = multer.diskStorage({
    destination: function (req: any, file: any, callback: any) {
        callback(null, path.join(__dirname, '../storage'));

    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + uniqid() + path.extname(file.originalname));
    }
})
// console.log(path.join(__dirname, '../storage'));
const upload = multer({ storage: storage });
export { upload };