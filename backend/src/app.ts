import express, { json } from 'express';
import authRoutes from './routes/authRoutes';
import messageRoutes from './routes/messageRoutes';
import chatRoutes from './routes/chatRoutes';
import userRoutes from './routes/userRoutes';
const app = express();
import { clerkMiddleware } from '@clerk/express';
import { errorHandler } from './middleware/errorHandler';

app.use(express.json());
// express.json() --> parses incoming JSON request bodies and makes them avaliable as req.body in your route handlers
app.use(clerkMiddleware());
//Middleware that integrates Clerk authentication into your Express application. It checks the request's cookies and headers for a session JWT and, if found, attaches the Auth object to the request object under the auth key.

app.use('api/auth', authRoutes);
app.use('api/messages', messageRoutes);
app.use('api/chats', chatRoutes);
app.use('api/users', userRoutes);

// errorHandler must come after all the routes and middlewares so they can catch the errors passed with next(err) or thrown inside async handlers.
app.use(errorHandler);
export default app;
