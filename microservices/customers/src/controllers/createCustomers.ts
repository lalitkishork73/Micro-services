import { Request, Response } from 'express';
import customerModel from '../models/customerModel';
export default async function CreateCustomer(req: Request, res: Response) {
    try {
        if (!req.body) {
            return res.status(400).json({ message: 'Please fill all details ' });
        }
        const createBook = await customerModel.create(req.body);
        if (createBook) {
            return res.status(201).json({ data: createBook });
        }
        return res.status(400).json({ message: 'Not able Create customer' });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
