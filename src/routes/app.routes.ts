import { Router } from 'express';
import index from '../controllers/index';
import login from '../controllers/auth/login';
import register from '../controllers/auth/register';
import findUserById from '../controllers/user[id]';
import validateJWT from '../middleware/user.middleware';

const expressRouter = Router();

expressRouter.get('/', index);
expressRouter.post('/users/login', login);
expressRouter.post('/users/register', register);

// Protected routes
expressRouter.get('/users/:id', validateJWT,  findUserById);

export default expressRouter;