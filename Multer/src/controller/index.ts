const uploadFile = async (req: any, res: any) => {

    const file = req.file;

    console.log("file data - ", file);

    if (!file) {
        res.status(405).send({
            msg: 'no data',
            data: file
        })
    }
    else {
        res.status(200).send({
            msg: 'files uploaded',
            data: file
        })
    }
}

const multipleFiles = async (req: any, res: any) => {
    const files = req.files;

    console.log("file data - ", files);

    if (!files) {
        res.status(405).send({
            msg: 'no data',
            data: files
        })
    }
    else {
        res.status(200).send({
            msg: 'file uploaded',
            data: files
        })
    }
}



export { uploadFile, multipleFiles };