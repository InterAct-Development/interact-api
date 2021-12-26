import { Router, Request, Response } from 'express';

const expressRouter = Router();

expressRouter.get('/', (req: Request, res: Response) => {
    return res.send("InterAct - Home")
});

export default expressRouter;