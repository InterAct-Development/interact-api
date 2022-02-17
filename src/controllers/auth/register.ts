import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/user.model';
import mongoose from 'mongoose';

const register = async (req: Request, res: Response): Promise<void> => {
    const _id = new mongoose.Types.ObjectId();
    const { name, email, age, phone, password, role } = req.body;

    await User.find({ email })
        .exec()
        .then((user) => {
            if (user.length >= 1) {
                return res.status(409).json({ error: 'Conflicting emails' });
            } else {
                bcrypt.hash(password, 10, (hasError, hashedPassword) => {
                    if (hasError) {
                        return res.status(500).json({
                            error: hasError,
                        });
                    } else {
                        const user = new User({
                            _id: _id,
                            name: name,
                            age: age,
                            phone: phone,
                            role: role,
                            email: email,
                            password: hashedPassword,
                        });

                        user.save()
                            .then(() => {
                                res.status(201).json({
                                    message: 'User saved to database.',
                                });
                            })
                            .catch((err) => {
                                res.status(500).json({
                                    error: err,
                                    message: 'User was not saved.',
                                });
                            });
                    }
                });
            }
        })
        .catch((err) => {
            return res.status(500).json({
                error: err,
            });
        });
};

export default register;
