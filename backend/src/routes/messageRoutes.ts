import { Router } from 'express';
import { protectRoute } from '../middleware/auth';
import { getAllChats } from '../controllers/messageController';

const messageRouter = Router();

messageRouter.get('/chat/:chatId', protectRoute, getAllChats);
export default messageRouter;
