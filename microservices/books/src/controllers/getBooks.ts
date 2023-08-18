import { Request, Response } from 'express';
import bookModel from '../models/bookModel';
export default async function GetBooks(req: Request, res: Response) {
    try {
        const findBooks = await bookModel.find();
        if (findBooks.length === 0) {
            return res.status(404).json({ message: 'data not Found' });
        }
        return res.status(200).json({ data: findBooks });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
