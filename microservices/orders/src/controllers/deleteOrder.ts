import { Request, Response } from 'express';
import orderModel from '../models/orderModel';
export default async function DeleteOrder(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }
        const deleteOrder = await orderModel.findOneAndDelete({ _id: req.params.id });
        if (!deleteOrder) {
            return res.status(404).json({ message: 'data not able to delete' });
        }
        return res.status(200).json({ message: 'deleted Succefully' });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
