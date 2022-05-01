import { Router, Request, Response } from 'express';
import r from './api/usersr';

const routes = Router();

routes.use('/users', r);
routes.get('/', (req: Request, res: Response): void => {
  try {
    res.send('this Home2');
    // res.json('this Home jsoonn');
  } catch (merror) {
    throw new Error(`a7oooo 3mlt eh ia menaillll:${merror}`);
  }
});
console.log(`first`);
export default routes;
