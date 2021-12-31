import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
    return res.send("InterAct - Home")
}

export default index;