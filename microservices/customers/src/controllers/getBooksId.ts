import { Request, Response } from 'express';
import customerModel from '../models/customerModel';
export default async function GetCustomerById(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }

        const FindOneCustomer = await customerModel.findOne({ _id: req.params.id });

        if (!FindOneCustomer) {
            return res.status(404).json({ message: 'customer is not available' });
        }
        return res.status(200).json({ data: FindOneCustomer });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
