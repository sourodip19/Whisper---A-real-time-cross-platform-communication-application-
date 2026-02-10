import { Router } from 'express';
import { protectRoute } from '../middleware/auth';
import { authCallBack, getMe } from '../controllers/authController';

const authRouter = Router();

authRouter.get('/me', protectRoute, getMe);
authRouter.post('/callBack', protectRoute, authCallBack);

export default authRouter;
