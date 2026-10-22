import { processTaskReminders, getUserUpcomingTasks } from '../services/reminderService.js';

export const triggerReminders = async (req, res) => {
  try {
    const result = await processTaskReminders();
    res.json({ 
      success: true, 
      message: `Task reminders processed successfully. Sent ${result.emailsSent} emails.`,
      emailsSent: result.emailsSent
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to process reminders', 
      details: error.message 
    });
  }
};

export const getUpcomingTasks = async (req, res) => {
  try {
    const userId = req.user._id;
    const result = await getUserUpcomingTasks(userId);
    
    if (result.success) {
      res.json({ upcomingTasks: result.upcomingTasks });
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch upcoming tasks', 
      details: error.message 
    });
  }
};