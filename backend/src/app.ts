import express, { json } from 'express';
import authRoutes from './routes/authRoutes';
import messageRoutes from './routes/messageRoutes';
import chatRoutes from './routes/chatRoutes';
import userRoutes from './routes/userRoutes';
const app = express();

app.use(express.json()); 
// express.json() --> parses incoming JSON request bodies and makes them avaliable as req.body in your route handlers

app.use('api/auth', authRoutes);
app.use('api/messages', messageRoutes);
app.use('api/chats', chatRoutes);
app.use('api/users', userRoutes);
export default app;
