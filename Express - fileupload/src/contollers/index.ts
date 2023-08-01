const addFile = (req: any, res: any) => {
    const data =req.file;
    console.log("data", data);
    console.log("xbjcdsbcjds --- : ", req.file);
    if (!req.file) {
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

};

export { addFile };
