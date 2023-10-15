// backend/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware az authentikációhoz
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']; // Token az Authorization headerből

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  // Token ellenőrzése
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }
    req.user = decoded; // Mentjük a dekódolt adatokat a requestbe
    next(); // Tovább a következő middleware-re vagy route-ra
  });
};
