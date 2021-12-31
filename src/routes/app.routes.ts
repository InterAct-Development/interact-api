import { Router } from 'express';
import index from '../controllers/index';
import login from '../controllers/login';
import register from '../controllers/register';

const expressRouter = Router();

expressRouter.get('/', index);
expressRouter.post('/login', login);
expressRouter.post('/register', register);

export default expressRouter;