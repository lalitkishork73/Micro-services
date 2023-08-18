import express from 'express';
const router = express.Router();
import { CreateOrder, DeleteOrder, GetOrder, GetOrderById, UpdateOrder } from '../controllers/index';

router.post('/order', CreateOrder);
router.get('/order', GetOrder);
router.get('/order/:id/customer/:Cid/books/:Bid', GetOrderById);
router.put('/order/:id', UpdateOrder);
router.delete('/order/:id', DeleteOrder);

export default router;
