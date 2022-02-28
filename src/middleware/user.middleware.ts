import { Request, Response, NextFunction } from 'express';
import { Roles } from '../enums/roles';
import JWT from 'jsonwebtoken';
import { ValueOf } from '../utils/typescript_helpers';

// @DESC: Function for verifying user's incoming JWT token.
export const validateUser = (
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader?.split(' ')[1];

    if (token == null) return res.status(401).json({ message: 'Unauthorized' });

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (hasError, verified) => {
        if (hasError)
            return res.status(500).json({
                message: 'Token is invalid or has expired.',
                error: hasError,
            });

        // Save our variable to pass onto functions or middleware using locals
        res.locals.JWT = verified;
        next();
    });
};

// @DESC: Function for verifying user's role.
export const validateRole = (role: ValueOf<typeof Roles>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const userRole: unknown = res.app.get('role');

        if (userRole !== role) {
            return res.json({
                message: 'Access Denied.',
                error: 'You do not have permission to access this resource.',
            });
        }
        next();
    };
};
