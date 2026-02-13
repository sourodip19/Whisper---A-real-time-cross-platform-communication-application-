import { Router } from 'express';
import { protectRoute } from '../middleware/auth';
import { getUsers } from '../controllers/userController';

const userRouter = Router();

userRouter.get('/',protectRoute,getUsers);
export default userRouter;
