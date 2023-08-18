import { Request, Response } from 'express';
import orderModel from '../models/orderModel';
export default async function UpdateOrder(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }
        if (!req.body) {
            return res.status(400).json({ message: 'Please fill all details ' });
        }
        const UpdateOrder = await orderModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!UpdateOrder) {
            return res.status(404).json({ message: 'customer is not able or provided id has not any books' });
        }

        return res.status(201).json({ data: UpdateOrder });
    } catch (err: any) {
        res.status(500).json(err.message);
    }
}
