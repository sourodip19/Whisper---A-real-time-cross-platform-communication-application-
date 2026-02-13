import type { NextFunction, Response } from 'express';
import type { AuthRequest } from '../middleware/auth';
import { Chat } from '../models/Chat';
import { Message } from '../models/Message';

export async function getAllChats(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const { chatId } = req.params;
    const userId = req.userId;

    const chat = await Chat.findOne({
      _id: chatId,
      participants: userId,
    });

    if (!chat) {
      res.status(404).json({ message: 'Chat is not found' });
      return;
    }

    const messages = await Message.findOne({ chat: chatId })
      .populate({ path: 'sender', select: 'name email avatar' })
      .lean() // converts to plain JS object (faster)
      .sort({ createdAt: 1 }); // to sort oldest chat first

    res.json(messages);
  } catch (error) {
    res.status(500);
    next(error);
  }
}
