import { Request, Response } from 'express';
import customerModel from '../models/customerModel';
export default async function GetBooks(req: Request, res: Response) {
    try {
        const findCustomer = await customerModel.find();
        if (findCustomer.length === 0) {
            return res.status(404).json({ message: 'data not Found' });
        }
        return res.status(200).json({ data: findCustomer });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
