import mongoose, { Schema } from "mongoose";
import { run } from "../loaders";
run();
const schema = new Schema({
    // name: { type: String },
    number: {
        type: Number,
        set: (v: number) => v.toFixed(2)
    }
})

const model = mongoose.model('setter', schema);

let data: any;
let num = [23.441, 989.2646466, 2, 4864.8784564564, 10.453, ]; 

for (let i = 0; i < 5; i++) {

    data = new model({ number: num[i] });

    console.log(data.number);
}


