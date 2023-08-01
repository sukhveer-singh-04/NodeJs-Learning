import { insertUser, verifyUser } from "../services";
import bcrypt from "bcrypt";


const addUser = async (req: any, res: any) => {
    const name = req.body.userName;
    let pass = req.body.password;

    // console.log("name", name)
    // console.log("pass", pass)

    pass = bcrypt.hashSync(pass, 5);

    const loginInfo = {
        userName: name,
        password: pass
    };

    const dbResult = await insertUser(loginInfo);

    // console.log("dbResult", dbResult);

    res.status(200).send("Info saved Securely.");
}



const verify = async (req: any, res: any) => {

    const name = req.params.userName;
    let pass = req.body.password;

    // console.log("bcaskb", name)

    const verifyResult = await verifyUser({ userName: name });

    // console.log("vr", verifyResult[0].userName);

    let recievedPass = String(verifyResult[0].password);

    // console.log("vr", recievedPass);
    // console.log("to", typeof verifyResult[0].password);

    const verified = bcrypt.compareSync(pass, recievedPass);

    if (!verified) {
        res.status(404).send("Invalid Credentials.");
    }
    else { res.status(200).send("Credentials Verified."); }

}

// verifyResult[0].userNam


export { verify, addUser };