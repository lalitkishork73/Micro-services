import { Request, Response } from 'express';
import bookModel from '../models/bookModel';
export default async function DeleteBooks(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }
        const deleteBook = await bookModel.findOneAndDelete({ _id: req.params.id });
        if (!deleteBook) {
            return res.status(404).json({ message: 'data not able to delete' });
        }
        return res.status(200).json({ message: 'deleted Succefully' });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
