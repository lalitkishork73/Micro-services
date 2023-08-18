import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Database from './utils/database/dbConnect';
import router from './routes/route';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
Database();

app.use('/', router);

app.listen(process.env.PORT || 3001, () => console.log('Listening on port 3001'));

