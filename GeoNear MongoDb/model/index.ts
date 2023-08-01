import mongoose, { model, Schema } from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/geoloc').then(res => console.log('connected'));
const schema = new Schema({
    geo: {


        coordinates: [Number]
    }

})

const geoModel = model('geo', schema);

const data = new geoModel({
    geo: {
        coordinates: [80, 49]
    }
});

data.save().then(res => console.log('saved'));

schema.index({ location: "2dsphere" })


    const data1 = await geoModel.find({
        $geoNear: {
            near: {
                coordinates: [20, 30]
            },
            distanceField: 'dist.calculated',
            maxDistance: 2
        }
    })
    console.log('data', data1);


