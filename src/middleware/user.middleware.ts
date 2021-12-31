import { Request, Response, NextFunction} from 'express';
import JWT from 'jsonwebtoken';

// @Middleware class for verifying user's incoming JWT token.
const validateJWT = (req: Request, res: Response, next: NextFunction): Response => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader?.split(' ')[1];

    if (token == null) return res
                            .status(401)
                            .json({ message: 'Unauthorized'});

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (hasError, verified) => {

        if (hasError) return res
                .status(500)
                .json({
                    message: "Token is invalid or expired.",
                    error: hasError
                });

                // Save our variable to pass onto functions or middleware using locals
                res.locals.JWT = verified;
                next();
    });
}

export default validateJWT;