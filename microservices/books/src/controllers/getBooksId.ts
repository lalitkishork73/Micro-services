import { Request, Response } from 'express';
import bookModel from '../models/bookModel';
export default async function GetBooksById(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }

        const FindOneBook = await bookModel.findOne({ _id: req.params.id });

        if (!FindOneBook) {
            return res.status(404).json({ message: 'Book is not available' });
        }
        return res.status(200).json({ data: FindOneBook });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
