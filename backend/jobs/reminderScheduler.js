import cron from 'node-cron';
import { processTaskReminders } from '../services/reminderService.js';

export const startReminderScheduler = () => {
  // Run every day at 9:00 AM
  cron.schedule('0 9,14 * * *', async () => {
    console.log('🚀 Running scheduled task reminder check...');
    const result = await processTaskReminders();
    
    if (result.success) {
      console.log(`✅ Reminder check completed. Sent ${result.emailsSent} emails.`);
    } else {
      console.error('❌ Reminder check failed:', result.error);
    }
  });
  
  console.log('⏰ Task reminder scheduler activated - will run daily at 9 AM');
};