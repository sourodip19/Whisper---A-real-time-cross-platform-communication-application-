import type { NextFunction, Response } from 'express';
import type { AuthRequest } from '../middleware/auth';
import { User } from '../models/User';

export async function getUsers(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const users = await User.find().select('name email avatar');
  } catch (error) {
    res.status(500);
    next(error);
  }
}
