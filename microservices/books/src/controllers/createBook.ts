import { Request, Response } from 'express';
import bookModel from '../models/bookModel';
export default async function CreateBooks(req: Request, res: Response) {
    try {
        if (!req.body) {
            return res.status(400).json({ message: 'Please fill all details ' });
        }
        const createBook = await bookModel.create(req.body);
        if (createBook) {
            return res.status(201).json({ data: createBook });
        }
        return res.status(400).json({ message: 'Not able Create books' });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
