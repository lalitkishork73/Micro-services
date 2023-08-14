import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:name', (req: Request, res: Response) => {
    res.json(`All is well ${req.params.name}`);
});

app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000'));
