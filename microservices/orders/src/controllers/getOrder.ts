import { Request, Response } from 'express';
import orderModel from '../models/orderModel';
export default async function GetOrder(req: Request, res: Response) {
    try {
        const findOrder = await orderModel.find();
        if (findOrder.length === 0) {
            return res.status(404).json({ message: 'data not Found' });
        }
        return res.status(200).json({ data: findOrder });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
