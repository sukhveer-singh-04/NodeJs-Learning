const collection = require("../models")

const addDoc = async (data) => {
    return await collection.create(data);
}

const getDocs = async () => {
    return await collection.find({}).sort({_id : 1});
}

const getDocById = async (id) => {
    return await collection.findOne({ _id: id });
}

const updateDoc = async (id, data) => {
    return await collection.findOneAndUpdate({ _id: id }, data, { upsert: true, new: true });
}

const deleteDoc = async (id) => {
    return await collection.findOneAndDelete({ _id: id });
}

const patchDoc = async (id, data) => {
    return await collection.findOneAndUpdate({ _id: id }, data, { upsert: true, new: true });
}

module.exports = {
    addDoc,
    getDocs,
    getDocById,
    updateDoc,
    deleteDoc,
    patchDoc
}
