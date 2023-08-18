import mongoose from 'mongoose';
import { URI } from '../keys/keys';

export default async function Database() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(URI, { retryWrites: true, w: 'majority' }).then(() => {
            console.log('Database Connected');
        });
    } catch (err: any) {
        console.log(err.message);
    }
}
