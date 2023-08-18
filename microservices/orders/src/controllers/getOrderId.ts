import { Request, Response } from 'express';
import axios from 'axios';
import orderModel from '../models/orderModel';
export default async function GetOrderById(req: Request, res: Response) {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: 'Please Enter Valid Id' });
        }
        const GetOrder = {};

        const FindOneCustomer: any = await axios.get(`http://localhost:3001/customer/${req.params.Cid}`);

        const FindOneBooks: any = await axios.get(`http://localhost:3000/books/${req.params.Bid}`);

        if (!FindOneCustomer || !FindOneBooks) {
            return res.status(404).json({ message: 'order is not available' });
        }

        GetOrder['CustomerName'] = await FindOneCustomer?.data?.data?.name;
        GetOrder['BooksName'] = await FindOneBooks?.data?.data?.title;
        console.log(GetOrder);

        return res.status(200).json({ data: GetOrder });
    } catch (err: any) {
        return res.status(500).json(err.message);
    }
}
