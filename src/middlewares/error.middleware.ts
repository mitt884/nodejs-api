import { Request, Response, NextFunction } from 'express';
import HttpException from '../models/http-exception.model';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);

  if (err instanceof HttpException) {
    return res
      .status(err.errorCode || 500)
      .json(err.message || { message: 'Internal server error' });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }

  res.status(500).json({ message: 'Internal server error' });
};
