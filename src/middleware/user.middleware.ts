import { NextFunction, Request, Response} from 'express';
import logger from '../utils/logger';

const userAuth = (req: Request, res: Response, next: NextFunction): void => {
    logger.info("Inside Auth Middleware");
    next();
}

export default userAuth;