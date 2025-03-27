import express from 'express';
import { getAllUsers, getUsersByBatch, getUserById } from './controllers.js';

const router = express.Router();

// Route to get all users
router.get('/users', getAllUsers);

// Route to get users by batch
router.get('/users/batch/:batch', getUsersByBatch);

// Route to get a specific user by ID
router.get('/users/:id', getUserById);

export default router;

