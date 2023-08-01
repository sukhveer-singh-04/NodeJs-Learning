import { collection } from "../models";


const insertUser =async (credentials:any) => {
    return await collection.create(credentials);
}

const verifyUser =async (credentialsUserName:any) => {
    return await collection.find(credentialsUserName);
}

export {insertUser, verifyUser};