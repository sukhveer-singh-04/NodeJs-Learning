import express from "express";
import { addFile } from "../contollers";

const router = express.Router();

router.post("/upload-single", (req:any, res) => {
// console.log(req);

    const data = req.files;
    console.log("data", req.socket.remoteAddress);
    console.log("data", req.ip);
    console.log("xbjcdsbcjds --- : ", req.files);
    if (!req.files) {
        res.send({
            status: false,
            message: 'No file uploaded'
        });  
    } else {
        res.send({
            status: true,
            message: 'File is uploaded',
            data: data
        });
    } 

}
);

export { router };