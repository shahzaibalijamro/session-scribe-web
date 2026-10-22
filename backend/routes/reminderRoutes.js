import express from 'express';
import { triggerReminders, getUpcomingTasks } from '../controllers/reminderController.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const reminderRoutes = express.Router();

// Manual trigger for testing
reminderRoutes.post('/trigger', verifyToken, triggerReminders);

// Get user's upcoming tasks
reminderRoutes.get('/upcoming-tasks', verifyToken, getUpcomingTasks);

export {reminderRoutes};