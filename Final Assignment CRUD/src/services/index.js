const collection = require('../configure/mongodb');

const insertDoc = async (data) => {
    return await collection.insertOne(data);
}

const getAllDocs = async () => {
    return await collection.find({}).sort('_id').toArray();
}

const getDocById = async (idi) => {

    return await collection.find({ _id: idi }).toArray();
}

const findDocById = async (idi) => {
    return await collection.find({ _id: idi }).toArray();
}

const replaceDoc = async (data, newData) => {
    return await collection.replaceOne(data, newData);
}

const deleteDoc = async (idi) => {
    return await collection.findOneAndDelete({ _id: idi });
}

module.exports = { insertDoc, getAllDocs, getDocById, findDocById, replaceDoc, deleteDoc };