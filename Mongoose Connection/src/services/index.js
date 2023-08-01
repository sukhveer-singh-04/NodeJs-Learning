const model = require('../models');

const insertManyDocs = async (data) => {
    return await model.insertMany(data, (err, result) => {
        if (err) console.log('insertMany err : -\n', err);
        console.log(result);
    })
};

const getAllDocs = async () => {
    return await model.find({})
};

const getDocById = async (id) => {
    console.log("Done by using findById");
    return await model.findById(Object(id))
};

const getOneDoc = async (id) => {
    console.log("Done by using findOne");
    return await model.findOne({ _id: id })
};

const deleteOne = async (id) => {
    return await model.deleteOne({ _id: id })
};

const deleteMany = async (name) => {
    return await model.deleteMany({ name: name })
};

const findByIdAndDel = async (id) => {
    return await model.findByIdAndDelete({ _id: id })
};

const findByIdAndRemove = async (id) => {
    return await model.findByIdAndRemove({ _id: id })
};


module.exports = {
    insertManyDocs,
    getAllDocs,
    getDocById,
    getOneDoc,
    deleteOne,
    deleteMany,
    findByIdAndDel,
    findByIdAndRemove,

};