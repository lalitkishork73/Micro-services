import dotenv from 'dotenv';
dotenv.config();
export const URI: any = process.env.MONGO_URL;
