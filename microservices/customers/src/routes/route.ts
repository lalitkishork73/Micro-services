import express from 'express';
const router = express.Router();
import { CreateCustomer, DeleteCustomer, GetCustomer, GetCustomerById, UpdateCustomer } from '../controllers/index';

router.post('/customer', CreateCustomer);
router.get('/customer', GetCustomer);
router.get('/customer/:id', GetCustomerById);
router.put('/customer/:id', UpdateCustomer);
router.delete('/customer/:id', DeleteCustomer);

export default router;
