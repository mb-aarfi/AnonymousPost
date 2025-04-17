import { Server } from 'socket.io';
import { createMessage } from '../models/messageModel.js';

const connectedUsers = new Map();

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Handle user joining
    socket.on('join', (userId) => {
      connectedUsers.set(userId, socket.id);
      console.log(`User ${userId} joined with socket ${socket.id}`);
    });

    // Handle new message
    socket.on('send_message', async (data) => {
      try {
        const { senderId, receiverId, content, isAnonymous } = data;
        const message = await createMessage(senderId, receiverId, content, isAnonymous);

        // Send to receiver if online
        const receiverSocketId = connectedUsers.get(receiverId);
        if (receiverSocketId) {
          io.to(receiverSocketId).emit('receive_message', message);
        }

        // Send confirmation back to sender
        socket.emit('message_sent', message);
      } catch (error) {
        console.error('Error handling message:', error);
        socket.emit('message_error', { error: 'Failed to send message' });
      }
    });

    // Handle typing status
    socket.on('typing', ({ senderId, receiverId }) => {
      const receiverSocketId = connectedUsers.get(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit('user_typing', { senderId });
      }
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
      // Remove user from connected users
      for (const [userId, socketId] of connectedUsers.entries()) {
        if (socketId === socket.id) {
          connectedUsers.delete(userId);
          console.log(`User ${userId} disconnected`);
          break;
        }
      }
    });
  });

  return io;
}; 