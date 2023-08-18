import { Request, Response } from 'express';
import orderModel from '../models/orderModel';
export default async function CreateOrder(req: Request, res: Response) {
    try {
        if (!req.body) {
            return res.status(400).json({ message: 'Please fill all details ' });
        }
        const createOrder = await orderModel.create(req.body);
        if (createOrder) {
            return res.status(201).json({ data: createOrder });
        }
        return res.status(400).json({ message: 'Not able Create Order' });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
