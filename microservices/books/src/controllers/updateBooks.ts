import { Request, Response } from 'express';
import bookModel from '../models/bookModel';
export default async function UpdateBooks(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }
        if (!req.body) {
            return res.status(400).json({ message: 'Please fill all details ' });
        }
        const UpdateBook = await bookModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!UpdateBook) {
            return res.status(404).json({ message: 'book is not able or provided id has not any books' });
        }

        return res.status(201).json({ data: UpdateBook });
    } catch (err: any) {
        res.status(500).json(err.message);
    }
}
