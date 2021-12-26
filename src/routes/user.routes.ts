import { Router, Request, Response } from 'express';

const expressRouter = Router();

expressRouter.get('/users', (req: Request, res: Response) => {
    return res.send("Users")
});

export default expressRouter;