import {newModel} from "../models";

const addDoc = async (data:any) => {
    return await newModel.insertMany(data);
}

const getDocs = async () => {
    return await newModel.find({}).sort({_id : 1});
}

const getDocById = async (id:any) => {
    return await newModel.findOne({ _id: id });
}

const updateDoc = async (id:any, data:any) => {
    return await newModel.findOneAndUpdate({ _id: id }, data, { upsert: true, new: true });
}

const deleteDoc = async (id:any) => {
    return await newModel.findOneAndDelete({ _id: id });
}

const patchDoc = async (id:any, data:any) => {
    return await newModel.findOneAndUpdate({ _id: id }, data, { upsert: true, new: true });
}

export {
    addDoc,
    getDocs,
    getDocById,
    updateDoc,
    deleteDoc,
    patchDoc
}

