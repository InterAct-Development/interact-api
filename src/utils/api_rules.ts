import {Request, Response, NextFunction} from 'express';

// @Helper class for setting ruleset for incoming requests
const api_ruleset = (req: Request, res: Response, next: NextFunction): Response => {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        
        return res.status(200).json({});
    }
  
    next();
}

export default api_ruleset;