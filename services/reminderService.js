import meetingSchema from "../models/meeting.model.js";
import { sendTaskReminderEmail } from "./emailService.js";

export const processTaskReminders = async () => {
  try {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    console.log('🔍 Checking for tasks due between now and tomorrow...');
    
    const meetingsWithUpcomingTasks = await meetingSchema.find({
      'nextSteps.parsedDueDate': {
        $gte: now,
        $lte: tomorrow
      },
      'nextSteps.reminderSent': false
    }).populate('user');
    
    console.log(`Found ${meetingsWithUpcomingTasks.length} meetings with upcoming tasks`);
    
    let emailsSent = 0;
    
    for (const meeting of meetingsWithUpcomingTasks) {
      const upcomingTasks = meeting.nextSteps.filter(step => 
        step.parsedDueDate && 
        step.parsedDueDate >= now && 
        step.parsedDueDate <= tomorrow && 
        !step.reminderSent
      );
      
      if (upcomingTasks.length > 0) {
        console.log(`📧 Sending reminder for ${upcomingTasks.length} tasks to ${meeting.user.email}`);
        
        const emailResult = await sendTaskReminderEmail(meeting, upcomingTasks);
        
        if (emailResult.success) {
          // Mark tasks as reminded
          for (const task of upcomingTasks) {
            task.reminderSent = true;
            task.reminderSentAt = new Date();
          }
          await meeting.save();
          emailsSent++;
        }
      }
    }
    
    return { success: true, emailsSent };
  } catch (error) {
    console.error('❌ Error in reminder service:', error);
    return { success: false, error: error.message };
  }
};

export const getUserUpcomingTasks = async (userId) => {
  try {
    const now = new Date();
    const oneWeekFromNow = new Date(now);
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
    
    const meetings = await meetingSchema.find({
      user: userId,
      'nextSteps.parsedDueDate': {
        $gte: now,
        $lte: oneWeekFromNow
      }
    });
    
    const upcomingTasks = [];
    meetings.forEach(meeting => {
      meeting.nextSteps.forEach(step => {
        if (step.parsedDueDate && step.parsedDueDate >= now && step.parsedDueDate <= oneWeekFromNow) {
          upcomingTasks.push({
            meetingTitle: meeting.title,
            meetingId: meeting._id,
            task: step.task,
            assignee: step.assignee,
            due: step.due,
            parsedDueDate: step.parsedDueDate,
            reminderSent: step.reminderSent
          });
        }
      });
    });
    
    upcomingTasks.sort((a, b) => a.parsedDueDate - b.parsedDueDate);
    return { success: true, upcomingTasks };
  } catch (error) {
    return { success: false, error: error.message };
  }
};