import mongoose, { Schema, Types } from "mongoose";
import { run } from "../loaders";
run();
const loginActivitySchema = new mongoose.Schema({

    userName: {
        type: String,
        set: (v: string) => v.toLowerCase()
    },

    password: String

}, { timestamps: { createdAt: true, updatedAt: false } });

loginActivitySchema.pre('save', () => {

})

const collection = mongoose.model('login_details', loginActivitySchema);

// const data = new loginActivity({

// })

// data.save().then((res) => { console.log("data saved") })
export { collection };

function lowerCase(data: String) {
    data.toLowerCase();
}