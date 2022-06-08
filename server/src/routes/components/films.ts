import { Router, Request, Response  } from 'express';

const filmsRouter = Router();

filmsRouter.get('/', (req: Request, res: Response) => {
  return res.json("films route is here");
});

export default filmsRouter;