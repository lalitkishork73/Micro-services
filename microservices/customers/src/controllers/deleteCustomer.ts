import { Request, Response } from 'express';
import customerModel from '../models/customerModel';
export default async function DeleteCustomer(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }
        const deleteCustomer = await customerModel.findOneAndDelete({ _id: req.params.id });
        if (!deleteCustomer) {
            return res.status(404).json({ message: 'data not able to delete' });
        }
        return res.status(200).json({ message: 'deleted Succefully' });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
