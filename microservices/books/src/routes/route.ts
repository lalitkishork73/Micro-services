import express from 'express';
const router = express.Router();
import { CreateBooks, DeleteBooks, GetBooks, UpdateBooks, GetBooksById } from '../controllers/index';

router.post('/books', CreateBooks);
router.get('/books', GetBooks);
router.get('/books/:id', GetBooksById);
router.put('/books/:id', UpdateBooks);
router.delete('/books/:id', DeleteBooks);

export default router;
