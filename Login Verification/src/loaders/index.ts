import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const run = async function(){
    try{
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("Connection Successful");
}catch(err){ console.log("Error while connecting...")}
finally{
    // setTimeout(() => {
    //     mongoose.connection.close();
    // }, 4000);
};

}

export {run};