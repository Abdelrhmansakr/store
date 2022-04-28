import express, { Request, Response } from 'express';
import supertest from 'supertest';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
const app = express();
const port = 3000;
const request = supertest(app);

//secure connection express
app.use(morgan('common'));
app.use(helmet());
const x = async () => {
  const Responsee = (await request.get('/')).headers;
  console.log(Responsee);
};
//x();

app.use(
  rateLimit({
    //2s
    windowMs: 2 * 1000,
    max: 11,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'try agine later a7a',
  })
);

app.use(express.json());

app.post('/', (req: Request, res: Response): void => {
  console.log(req.body);
  res.json({
    m: 'hi ',
    data: req.body,
  });
});

app.get('/', (req: Request, res: Response): void => {
  res.send('this Home');
  res.json('this Home jsoonn');
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
