// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { verify, JsonWebTokenError } from 'jsonwebtoken';
import { DecodedLogged } from '../utils/types';  

interface AuthenticatedRequest extends Request {
  logged?: boolean; 
  token?: string
}
  
export function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) {
    res.status(401).send('Missing authorization token');
    return;
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET) as DecodedLogged; 

    if (decoded) {
      req.logged = !!decoded;
      req.token = token;
      next(); 
    } else {
      res.status(403).send('User not logged in'); 
    }
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      res.status(401).send('Invalid authorization token');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
}
