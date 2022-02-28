import { Request, Response, Router } from 'express';
import index from '../controllers/index';
import login from '../controllers/auth/login';
import register from '../controllers/auth/register';
import findUserById from '../controllers/user[id]';
import { validateUser, validateRole } from '../middleware/user.middleware';
import { youthWorkerRole } from '../enums/roles';

const dashboard = (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Welcome Youth Worker.' });
};

const expressRouter = Router();

expressRouter.get('/', index);
expressRouter.post('/users/login', login);
expressRouter.post('/users/register', register);

// Protected routes
expressRouter.get('/users/:id', validateUser, findUserById);
expressRouter.get('/dashboard', validateRole(youthWorkerRole), dashboard);

export default expressRouter;
