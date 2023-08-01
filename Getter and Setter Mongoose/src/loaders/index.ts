import mongoose, { Mongoose } from "mongoose";

const run = async function(){
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/get_set');
    console.log("Connection Successful");
}catch(err){ console.log("Error while connecting...")};

}

export {run};