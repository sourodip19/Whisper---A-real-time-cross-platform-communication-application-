import { Router } from 'express';
import { protectRoute } from '../middleware/auth';
import { getAllChats } from '../controllers/messageController';
import { createOrGetChat } from '../controllers/chatController';

const chatRouter = Router();

chatRouter.use(protectRoute);
chatRouter.get('/', getAllChats);
chatRouter.post('/with/:participantId', createOrGetChat);

export default chatRouter;
