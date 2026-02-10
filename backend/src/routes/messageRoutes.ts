import { Router } from 'express';
import { protectRoute } from '../middleware/auth';
import { getAllChats } from '../controllers/messageController';

const messageRouter = Router();

messageRouter.get('/allChats', protectRoute, getAllChats);
export default messageRouter;
