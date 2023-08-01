// const dbQueries = require("../services");

// const createDoc = async (req, res) => {
//     try {
//         console.log('dat ', req.body)
//         const data = await dbQueries.addDoc(req.body);
//         res.status(200).send({
//             status: true,
//             message: 'OK',
//             data: data
//         })
//     } catch (err) {
//         console.log("Error occured in post .\n", err);
//         res.end();
//     }
// }
// const getAllDocs = async (req, res) => {
//     try {
//         const data = await dbQueries.getDocs();
//         res.status(200).send({
//             status: true,
//             message: 'OK',
//             data: data
//         })
//     } catch (err) { console.log("Error occured in getting all .\n", err);
//     res.end();
// }
// }
// const getById = async (req, res) => {
//     try {
//         // let idd = req.params.id
//         const data = await dbQueries.getDocById(req.params.id);
//         res.status(200).send({
//             status: true,
//             message: 'OK',
//             data: data
//         })
//     } catch (err) { console.log("Error occured in getting by id .\n", err);
//     res.end();
// }
// }
// const updateOne = async (req, res) => {
//     try {
//         const data = await dbQueries.updateDoc(req.params.id, req.body);
//         res.status(200).send({
//             status: true,
//             message: 'OK',
//             data: data
//         })
//     } catch (err) { console.log("Error occured in updating .\n", err);
//     res.end();
// }
// }
// const deleteOne = async (req, res) => {
//     try {
//         const data = await dbQueries.deleteDoc(req.params.id);
//         res.status(200).send({
//             status: true,
//             message: 'OK',
//             data: data
//         })
//     } catch (err) { console.log("Error occured in deleting .\n", err);
//     res.end();
// }
// }

// module.exports = {
//     createDoc,
//     getAllDocs,
//     getById,
//     updateOne,
//     deleteOne
// }


const {addDoc, getDocs, getDocById, updateDoc, deleteDoc, patchDoc} = require("../services");

const createDoc = async (req, res) => {
    try {
        // console.log('data ', req.body)
        const data = await addDoc(req.body);
        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        })
    } catch (err) {
        console.log("Error occured in post .\n", err);
        res.end();
    }
}
const getAllDocs = async (req, res) => {
    try {
        const data = await getDocs();
        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        })
    } catch (err) {
        console.log("Error occured in getting all .\n", err);
        res.end();
    }
}
const getById = async (req, res) => {
    try {
        // let idd = req.params.id
        const data = await getDocById(req.params.id);
        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        })
    } catch (err) {
        console.log("Error occured in getting by id .\n", err);
        res.end();
    }
}
const updateOne = async (req, res) => {
    try {
        const data = await updateDoc(req.params.id, req.body);
        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        })
    } catch (err) {
        console.log("Error occured in updating .\n", err);
        res.end();
    }
}
const deleteOne = async (req, res) => {
    try {
        const data = await deleteDoc(req.params.id);
        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        })
    } catch (err) {
        console.log("Error occured in deleting .\n", err);
        res.end();
    }
}

const patch = async (req, res) => {
    try{
        let data = req.body;
        data = await patchDoc(req.params.id, data);
        res.status(200).send({
            status: true,
            message: 'OK',
            data: data
        })
    }catch (err) {
        console.log("Error occured in deleting .\n", err);
        res.end();
    }
}

module.exports = {
    createDoc,
    getAllDocs,
    getById,
    updateOne,
    deleteOne,
    patch
}