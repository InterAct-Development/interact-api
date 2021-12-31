import { Request, Response } from 'express';
import User from '../models/user.model';

const findUserById = (req: Request, res: Response) => {
    const { id } = req.params;

    User
        .findById(id)
        .then(user => {
            if (!user) 
            return res
                    .status(404)
                    .json({ message: 'Could not find the specified user.'})
                    .end();

            return res.status(200).json({ user });
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    message: 'There was an error finding a user',
                    error: err
                });
        });
}

export default findUserById;