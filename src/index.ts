import express, { Request, Response } from 'express';
import supertest from 'supertest';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import merror from './midel/merror';
import config from './config';
import db from './database';

const port = config.port || 3000;

const app = express();
const request = supertest(app);

//connection
app.get('/', (req: Request, res: Response): void => {
  //throw new Error('a7oooo 3mlt eh ia menaillll');
  res.send('this Home1');
  // res.json('this Home jsoonn');
});
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
app.post('/', (req: Request, res: Response): void => {
  console.log(req.body);
  res.json({
    m: 'hi ',
    data: req.body,
  });
});

//security connection express
app.use(morgan('common'));
app.use(helmet());
//for use json
app.use(express.json());

//info for server conn
const x = async () => {
  const Responsee = (await request.get('/')).headers;
  console.log(Responsee);
};
//x()

//3dad mrat el get or login try agine
app.use(
  rateLimit({
    windowMs: 2 * 1000, //2s
    max: 11,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'try agine later a7a',
  })
);

//no page
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    Message: 'ops you are lost, nothing here',
  });
});
//find error
app.use(merror);

//test database
db.connect().then((client) => {
  return client
    .query('SELECT NOW()')
    .then((res) => {
      client.release();
      console.log(res.rows);
    })
    .catch((err) => {
      client.release();
      console.log(err.stack);
    });
});

export default app;
