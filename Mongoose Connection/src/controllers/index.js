const dbQuery = require('../services')

const postDocs = async (req, res) => {
    const data = req.body;
    await dbQuery.insertManyDocs(data);
    res.send('Done')
}

const getAll = async (req, res) => {
    const result = await dbQuery.getAllDocs();
    res.send(result);
}

const getById = async (req, res) => {
    const result = await dbQuery.getDocById(req.params.id);
    res.send(result);
}

const getOne = async (req, res) => {
    const result = await dbQuery.getOneDoc(req.params.id);
    res.send(result);
}

const delOne = async (req, res) => {
    const result = await dbQuery.deleteOne(req.params.id);
    res.send(result);
}

const delManyByname = async (req, res) => {
    const result = await dbQuery.deleteMany(req.params.name);
    res.send(result);
}

const findRemoveById = async (req, res) => {
    const result = await dbQuery.findByIdAndRemove(req.params.id);
    res.send(result);
}

module.exports = {
    postDocs,
    getAll,
    getById,
    getOne,
    delOne,
    delManyByname,
    findRemoveById,
};