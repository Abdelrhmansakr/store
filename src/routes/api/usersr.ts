import { Router, Request, Response, NextFunction } from 'express';
import userm from '../../models/userm';

const usermm = new userm();

const r = Router();

{
  r.route('/')
    .post(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        try {
          const user = await usermm.create(req.body);
          res.json({
            status: 'sucess',
            data: { user },
            mess: 'Congratulations create new user ....',
          });
        } catch (error) {
          next(error);
        }
      }
    )
    .get(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        try {
          const user = await usermm.getMany();
          res.json({
            status: 'sucess',
            data: { ...user }, //or data:user
            mess: 'nice you get users',
          });
        } catch (error) {
          next(error);
        }
      }
    );
}
{
  r.route('/:id')
    .get(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        try {
          const user = await usermm.getOne(req.params.id as string);
          res.json({
            status: 'sucess',
            data: { user },
            mess: 'nice you get info user',
          });
        } catch (error) {
          next(error);
        }
      }
    )
    .patch(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        try {
          const user = await usermm.updateOne(req.body);
          res.json({
            status: 'sucess',
            data: { ...user }, //or data:user
            mess: 'Done you updat user',
          });
        } catch (error) {
          next(error);
        }
      }
    )
    .delete(
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        try {
          const user = await usermm.deleteOne(req.params.id as string);
          res.json({
            status: 'sucess',
            data: { ...user }, //or data:user
            mess: 'Done the user is Delested',
          });
        } catch (error) {
          next(error);
        }
      }
    );
}

export default r;
