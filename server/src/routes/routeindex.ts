import { Router } from 'express';
import filmsRouter from './components/films';

const routes = Router();

routes.use('/films', filmsRouter);

export default routes;