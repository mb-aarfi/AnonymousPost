import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { createServer } from 'http';
import mainRouter from './routes/mainroute.js';
import messageRouter from './src/routes/messageRoutes.js';
import userRouter from './src/routes/userRoutes.js';
import { initializeSocket } from './src/sockets/chatSocket.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Initialize Socket.io
const io = initializeSocket(httpServer);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', mainRouter);
app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);

const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






