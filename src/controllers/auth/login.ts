import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/user.model';
import JWT from 'jsonwebtoken';

const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    await User.find({ email: email })
        .exec()
        .then((user) => {
            // Save current user's role as global variable for role validation
            res.app.set("role", user[0].role);

            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Incorrect credentials.',
                });
            }

            // @DESC: Compare - Request body password field | Password in DB
            bcrypt.compare(password, user[0].password, (hasError, success) => {
                if (hasError) {
                    return res.status(401).json({
                        message: 'Incorrect password.',
                    });
                }

                if (success) {
                    const token = JWT.sign(
                        {
                            email: user[0],
                            userId: user[0]._id,
                        },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: '1h' }
                    );

                    return res.status(200).json({
                        message: 'Authentication was successful.',
                        id: user[0]._id,
                        token: token,
                    });
                }

                res.status(401).json({
                    message: 'Authentication failed.',
                });
            });
        })
        .catch((err) => {
            return res.status(500).json({
                error: err,
            });
        });
};

export default login;
