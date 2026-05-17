import nodemailer from 'nodemailer'; // or your preferred email service
import { createTransporter } from '../utils/email.utils.js';

const transporter = nodemailer.createTransport({
  // Your email configuration
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

export const sendTaskReminderEmail = async (meeting, upcomingTasks) => {
  try {
    const user = meeting.user;
    if (!user || !user.email) {
      throw new Error('Meeting user or user email is missing');
    }
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('📧 Email server connection verified for task reminder');
    
    const taskList = upcomingTasks.map(task => 
      `• ${task.task} (Assigned to: ${task.assignee}, Due: ${task.due || 'Soon'})`
    ).join('\n');
    
    const emailSubject = `📋 Task Reminder: ${meeting.title}`;
    
    // Create HTML version
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
          📋 Task Reminder
        </h2>
        
        <p>Hi <strong>${user.name || user.email}</strong>,</p>
        
        <p>This is a friendly reminder about upcoming tasks from your meeting <strong>"${meeting.title}"</strong>:</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">📝 Tasks Due Soon:</h3>
          ${upcomingTasks.map(task => `
            <div style="margin: 10px 0; padding: 10px; background-color: white; border-radius: 3px; border-left: 4px solid #ff6b6b;">
              <strong>${task.task}</strong><br>
              <span style="color: #666;">👤 Assigned to: ${task.assignee}</span><br>
              <span style="color: #666;">⏰ Due: ${task.due || 'Soon'}</span>
            </div>
          `).join('')}
        </div>
        
        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">📋 Meeting Summary:</h3>
          <p style="margin: 0;">${meeting.summary}</p>
        </div>
        
        <p>Please follow up with your team members to ensure these tasks are completed on time.</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        
        <p style="color: #666; font-size: 14px;">
          Best regards,<br>
          <strong>SessionScribe Task Reminder System</strong>
        </p>
        
        <p style="color: #999; font-size: 12px;">
          This is an automated reminder from your SessionScribe meeting: "${meeting.title}"
        </p>
      </div>
    `;
    
    // Create plain text version
    const textBody = `
Hi ${user.name || user.email},

This is a friendly reminder about upcoming tasks from your meeting "${meeting.title}":

TASKS DUE SOON:
${taskList}

MEETING SUMMARY:
${meeting.summary}

Please follow up with your team members to ensure these tasks are completed on time.

Best regards,
SessionScribe Task Reminder System

---
This is an automated reminder from your SessionScribe meeting: "${meeting.title}"
    `;
    
    const mailOptions = {
      from: {
        name: 'SessionScribe Task Reminders',
        address: process.env.EMAIL_USER
      },
      to: user.email,
      subject: emailSubject,
      html: htmlBody,
      text: textBody
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log(`✅ Task reminder email sent successfully to ${user.email}:`, result.messageId);
    
    return {
      success: true,
      messageId: result.messageId,
      recipient: user.email,
      taskCount: upcomingTasks.length
    };
    
  } catch (error) {
    console.error(`❌ Failed to send task reminder email to ${user.email}:`, error);
    return {
      success: false,
      error: error.message,
      recipient: user.email
    };
  }
};

// export const sendTaskReminderEmail = async (meeting, upcomingTasks) => {

//   const user = meeting.user;
  
//   const taskList = upcomingTasks.map(task => 
//     `• ${task.task} (Assigned to: ${task.assignee}, Due: ${task.due || 'Soon'})`
//   ).join('\n');
  
//   const emailSubject = `📋 Task Reminder: ${meeting.title}`;
//   const emailBody = `Hi ${user.name || user.email},

// This is a friendly reminder about upcoming tasks from your meeting "${meeting.title}":

// ${taskList}

// Meeting Summary:
// ${meeting.summary}

// Please follow up with your team members to ensure these tasks are completed on time.

// Best regards,
// Your Meeting Assistant`;
  
//   try {
//     await transporter.sendMail({
//       to: user.email,
//       subject: emailSubject,
//       text: emailBody
//     });
    
//     console.log(`📧 Reminder email sent to ${user.email}`);
//     return { success: true };
//   } catch (error) {
//     console.error('Failed to send reminder email:', error);
//     return { success: false, error: error.message };
//   }
// };