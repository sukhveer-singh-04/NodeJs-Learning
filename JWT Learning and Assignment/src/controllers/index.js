require('dotenv').config();
const jwt = require('jsonwebtoken');
const exeTok = require('../services');
let i = 1;

let jwtSecretKey = process.env.JWT_SECRET_KEY;

const addToken = async (req, res) => {
    try {

        let data = req.body;
        let token = jwt.sign(data, jwtSecretKey);
        let newData = {
            _id: i,
            token: token
        }
        i++;
        token = await exeTok.addData(newData);
        res.send(newData);
    } catch (err) {
        console.log(err);
        res.end();
    }
}

const getAllToken = async (req, res) => {
    try {
       
        const tokenList = await exeTok.getAllData();

        return res.send({
            status: true,
            message: 'Successfully Verified.',
            data: tokenList
        });
        
    } catch (error) {
        return res.status(401).send(error);
    }
};

const getToken = async (req, res) => {
    try {
    
        const token = await exeTok.getData(req.params.id);

        let tok = token[0].token;
        const verified = jwt.verify(tok, jwtSecretKey);
    
        if (verified) {
            return res.send({
                status: true,
                message: 'Successfully Verified.',
                data: verified
            });
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};

const putToken = async (req, res) => {
    try {
        const newData = req.body;

        let newToken = jwt.sign(newData, jwtSecretKey);
        let m = await exeTok.getData(req.params.id);

        let newDataDB = {
            _id: req.params.id,
            token: newToken
        }

        let dbResult = await exeTok.putData(req.params.id, newDataDB)
        return res.send({
            status: true,
            message: 'Successfully Verified.',
            data: dbResult

        });

    }
    catch (error) {
        return res.status(401).send(error);
    }
};

const delToken = async (req, res) => {
    try {

        const token = await exeTok.delData(req.params.id);

        let tok = token[0].token;

        const verified = jwt.verify(tok, jwtSecretKey);
      
        if (verified) {
            return res.send({
                status: true,
                message: 'Successfully Verified.',
                data: verified
            });
        } else {
            return res.send({
                status: false,
                message: 'Successfully Deleted.',
                data: verified
            });
        }
    } catch (error) {
        return res.status(401).send(error);
    }
};


module.exports = {
    addToken,
    getAllToken,
    getToken,
    putToken,
    delToken
};