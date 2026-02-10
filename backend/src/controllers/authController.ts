import type { NextFunction, Request, Response } from 'express';
import type { AuthRequest } from '../middleware/auth';
import { User } from '../models/User';
import { clerkClient, getAuth } from '@clerk/express';

export async function getMe(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    next(error);
    // we will not define error manually anymore we have created a errorHandler function for it and we are calling it
  }
}

export async function authCallBack(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { userId: clerkId } = getAuth(req);
    if (!clerkId) {
      return res.status(401).json({ message: 'Unauthorised - invalid token' });
    }
    let user = await User.findOne({ clerkId });
    if (!user) {
      const clerkUser = await clerkClient.users.getUser(clerkId);
      user = await User.create({
        clerkId,
        name: clerkUser.firstName
          ? `${clerkUser.firstName} ${clerkUser.lastName || ''}`.trim()
          : clerkUser.emailAddresses[0]?.emailAddress.split('@')[0],
        email: clerkUser.emailAddresses[0]?.emailAddress,
        avatar: clerkUser.imageUrl,
      });
    }
  } catch (error) {
    res.status(500);
    next(error);
    // we will not define error manually anymore we have created a errorHandler function for it and we are calling it
  }
}
