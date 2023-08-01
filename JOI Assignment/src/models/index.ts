import {Schema, model} from "mongoose";
// import Joi from "joi";

import {databaseLoader} from '../loaders/database';
databaseLoader();

// interface products {
//     title :  String,
//     price :  String,
//     category :  String,
//     description :  String,
//     image :  String 
// }


const schema = new Schema({
    _id : {type : Number},
    title : {type : String},
    price : {type : String},
    category : {type : String},
    description : {type : String},
    image : {type : String}                        
}, { versionKey : false });

const newModel = model('prods', schema);


export {newModel};