import { Request, Response } from 'express';
import customerModel from '../models/customerModel';
export default async function UpdateCustomer(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }
        if (!req.body) {
            return res.status(400).json({ message: 'Please fill all details ' });
        }
        const UpdateCustomer = await customerModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!UpdateCustomer) {
            return res.status(404).json({ message: 'customer is not able or provided id has not any books' });
        }

        return res.status(201).json({ data: UpdateCustomer });
    } catch (err: any) {
        res.status(500).json(err.message);
    }
}
