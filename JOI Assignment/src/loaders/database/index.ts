import mongoose, {ConnectOptions} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('debug', true);
const databaseLoader = async () => new Promise<any>((resolve, reject) => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGO_URI!)
    .then(db => {
      console.log('Database connection established');
      resolve(db);
    })
    .catch(reject);
});

export { databaseLoader };