// emailService.js - Email service configuration and functions
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Email transporter configuration
export const createTransporter = () => {
  // Gmail configuration (you can change this to your email provider)
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
    },
    // Alternative configuration for other SMTP providers:
    /*
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    */
  });
};

// Generate HTML email template
const generateEmailTemplate = (meetingTitle, recipientEmail) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meeting Summary</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                background: white;
                border-radius: 12px;
                padding: 30px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #e9ecef;
            }
            .logo {
                font-size: 24px;
                font-weight: bold;
                color: #2563eb;
                margin-bottom: 10px;
            }
            .title {
                font-size: 20px;
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 10px;
            }
            .subtitle {
                color: #6b7280;
                font-size: 14px;
            }
            .content {
                margin-bottom: 30px;
            }
            .meeting-info {
                background: #f3f4f6;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
            }
            .meeting-info h3 {
                margin: 0 0 10px 0;
                color: #374151;
                font-size: 16px;
            }
            .meeting-info p {
                margin: 5px 0;
                color: #6b7280;
            }
            .attachment-info {
                background: #dbeafe;
                border: 1px solid #bfdbfe;
                border-radius: 8px;
                padding: 15px;
                margin: 20px 0;
                text-align: center;
            }
            .attachment-info .icon {
                font-size: 24px;
                margin-bottom: 8px;
            }
            .footer {
                text-align: center;
                padding-top: 20px;
                border-top: 1px solid #e9ecef;
                font-size: 12px;
                color: #6b7280;
            }
            .button {
                display: inline-block;
                background: #2563eb;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 500;
                margin: 10px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">📋 Meeting Recorder</div>
                <div class="title">Meeting Summary</div>
                <div class="subtitle">Generated on ${currentDate}</div>
            </div>
            
            <div class="content">
                <p>Hello,</p>
                <p>Please find attached the comprehensive summary for the meeting: <strong>${meetingTitle}</strong></p>
                
                <div class="meeting-info">
                    <h3>📊 What's Included</h3>
                    <p>✅ Executive Summary</p>
                    <p>✅ Full Agenda Items</p>
                    <p>✅ Detailed Minutes</p>
                    <p>✅ Action Items & Next Steps</p>
                    <p>✅ Participant Information</p>
                </div>
                
                <div class="attachment-info">
                    <div class="icon">📎</div>
                    <p><strong>Attachment:</strong> ${meetingTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Summary.pdf</p>
                    <p style="font-size: 12px; color: #6b7280;">The complete meeting summary is attached as a PDF document</p>
                </div>
                
                <p>This summary includes all key discussion points, decisions made, and action items assigned during the meeting. Please review the attached PDF for complete details.</p>
                
                <p>If you have any questions about the meeting content or need any clarifications, please don't hesitate to reach out.</p>
                
                <p>Best regards,<br>
                <strong>SessionScribe Team</strong></p>
            </div>
            
            <div class="footer">
                <p>This email was automatically generated by Meeting Recorder.</p>
                <p>© ${new Date().getFullYear()} SessionScribe. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send email with PDF attachment
export const sendMeetingSummaryEmail = async (recipientEmail, meetingTitle, pdfBuffer, senderInfo = {}) => {
  try {
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('📧 Email server connection verified');
    
    const mailOptions = {
      from: {
        name: senderInfo.name || 'Meeting Recorder',
        address: process.env.EMAIL_USER
      },
      to: recipientEmail,
      subject: `📋 Meeting Summary: ${meetingTitle}`,
      html: generateEmailTemplate(meetingTitle, recipientEmail),
      attachments: [
        {
          filename: `${meetingTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Summary.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${recipientEmail}:`, result.messageId);
    
    return {
      success: true,
      messageId: result.messageId,
      recipient: recipientEmail
    };
    
  } catch (error) {
    console.error(`❌ Failed to send email to ${recipientEmail}:`, error);
    throw error;
  }
};

// Send emails to multiple recipients with individual error handling
export const sendBulkMeetingSummaryEmails = async (recipients, meetingTitle, pdfBuffer, senderInfo = {}) => {
  const results = {
    successful: [],
    failed: [],
    total: recipients.length
  };
  
  console.log(`📧 Starting bulk email send to ${recipients.length} recipients`);
  
  // Send emails with controlled concurrency (2 at a time to avoid rate limits)
  const BATCH_SIZE = 2;
  
  for (let i = 0; i < recipients.length; i += BATCH_SIZE) {
    const batch = recipients.slice(i, i + BATCH_SIZE);
    
    const batchPromises = batch.map(async (recipient) => {
      try {
        const result = await sendMeetingSummaryEmail(recipient, meetingTitle, pdfBuffer, senderInfo);
        results.successful.push(result);
        return result;
      } catch (error) {
        const failureInfo = {
          recipient,
          error: error.message,
          success: false
        };
        results.failed.push(failureInfo);
        return failureInfo;
      }
    });
    
    await Promise.all(batchPromises);
    
    // Add small delay between batches to respect rate limits
    if (i + BATCH_SIZE < recipients.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log(`📊 Bulk email results: ${results.successful.length} successful, ${results.failed.length} failed`);
  
  return results;
};

// Add these functions to your email.utils.js file

// Generate welcome email HTML template
const generateWelcomeEmailTemplate = (userName, userEmail) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to SessionScribe</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                background: white;
                border-radius: 12px;
                padding: 30px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #e9ecef;
            }
            .logo {
                font-size: 28px;
                font-weight: bold;
                color: #8200DB;
                margin-bottom: 10px;
            }
            .welcome-title {
                font-size: 24px;
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 10px;
            }
            .subtitle {
                color: #6b7280;
                font-size: 16px;
            }
            .content {
                margin-bottom: 30px;
            }
            .features-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin: 25px 0;
            }
            .feature-card {
                background: #f8fafc;
                border-radius: 8px;
                padding: 20px;
                text-align: center;
                border: 1px solid #e2e8f0;
                margin-bottom: 10px;
            }
            .feature-icon {
                font-size: 24px;
                margin-bottom: 8px;
            }
            .feature-title {
                font-weight: 600;
                color: #374151;
                margin-bottom: 8px;
            }
            .feature-desc {
                font-size: 14px;
                color: #6b7280;
            }
            .cta-section {
                background: linear-gradient(90deg, #8573E0, #8200DB);
                color: white;
                border-radius: 12px;
                padding: 25px;
                text-align: center;
                margin: 25px 0;
            }
            .cta-button {
                display: inline-block;
                background: white;
                color: #8200DB;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                margin: 15px 0;
                transition: transform 0.2s;
            }
            .cta-button:hover {
                transform: translateY(-2px);
            }
            .tips-section {
                background: #fef3c7;
                border: 1px solid #fbbf24;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
            }
            .tips-title {
                color: #92400e;
                font-weight: 600;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .tip {
                color: #92400e;
                margin: 8px 0;
                padding-left: 16px;
            }
            .footer {
                text-align: center;
                padding-top: 20px;
                border-top: 1px solid #e9ecef;
                font-size: 12px;
                color: #6b7280;
            }
            .social-links {
                margin: 15px 0;
            }
            .social-links a {
                color: #6b7280;
                text-decoration: none;
                margin: 0 10px;
                font-size: 14px;
            }
            @media (max-width: 600px) {
                .features-grid {
                    grid-template-columns: 1fr;
                }
                .container {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">SessionScribe</div>
                <div class="welcome-title">Welcome aboard, ${userName}! </div>
                <div class="subtitle">Your meeting recording journey starts here</div>
            </div>
            
            <div class="content">
                <p>Hi ${userName},</p>
                
                <p>Welcome to <strong style="color: #8200DB;">SessionScribe</strong>! We're thrilled to have you join our community of professionals who value efficient meeting management and clear communication.</p>
                
                <p>Your account has been successfully created with the email: <strong style="color: #8200DB;">${userEmail}</strong></p>

                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🎙️</div>
                        <div class="feature-title">Smart Recording</div>
                        <div class="feature-desc">Crystal clear audio capture with automatic transcription</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📝</div>
                        <div class="feature-title">AI Summaries</div>
                        <div class="feature-desc">Intelligent meeting summaries with key action items</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <div class="feature-title">PDF Reports</div>
                        <div class="feature-desc">Professional meeting reports ready to share</div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📧</div>
                        <div class="feature-title">Easy Sharing</div>
                        <div class="feature-desc">Send summaries directly to team members</div>
                    </div>
                </div>

                <div class="cta-section">
                    <h3 style="margin: 0 0 10px 0;">Ready to record your first meeting?</h3>
                    <p style="margin: 0 0 15px 0; opacity: 0.9;">Start capturing important conversations and never miss a detail again.</p>
                    <a href="${process.env.FRONTEND_URL || 'https://your-app-url.com'}/dashboard" class="cta-button">
                        Start Recording Now →
                    </a>
                </div>

                <div class="tips-section">
                    <div class="tips-title">
                        <span>💡</span>
                        <span>Quick Tips to Get Started:</span>
                    </div>
                    <div class="tip">• Test your microphone before important meetings</div>
                    <div class="tip">• Use clear meeting titles for better organization</div>
                    <div class="tip">• Review and edit summaries before sharing</div>
                    <div class="tip">• Set up your email preferences for seamless sharing</div>
                </div>

                <p>If you have any questions or need assistance getting started, our support team is here to help. Simply reply to this email or visit our help center.</p>
                
                <p>Thank you for choosing SessionScribe. We can't wait to see how you'll transform your meeting productivity!</p>
                
                <p>Best regards,<br>
                <strong style="color: #8200DB;">The SessionScribe Team</strong></p>
            </div>
            
            <div class="footer">
                <div class="social-links">
                    <a href="#">Help Center</a> |
                    <a href="#">Contact Support</a> |
                    <a href="#">Privacy Policy</a>
                </div>
                <p>This email was sent to ${userEmail} because you created a SessionScribe account.</p>
                <p>© ${new Date().getFullYear()} SessionScribe. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send welcome email function
export const sendWelcomeEmail = async (recipientEmail, userName) => {
  try {
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('📧 Email server connection verified for welcome email');
    
    const mailOptions = {
      from: {
        name: 'SessionScribe Team',
        address: process.env.EMAIL_USER
      },
      to: recipientEmail,
      subject: `Welcome to SessionScribe, ${userName}!`,
      html: generateWelcomeEmailTemplate(userName, recipientEmail),
      // Optional: Add a plain text version for better compatibility
      text: `
Welcome to SessionScribe, ${userName}!

Thank you for signing up! Your account has been successfully created with the email: ${recipientEmail}

SessionScribe helps you:
• Record meetings with crystal clear audio
• Generate AI-powered meeting summaries  
• Create professional PDF reports
• Share summaries easily with your team

Ready to get started? Visit our dashboard to record your first meeting.

If you have any questions, our support team is here to help.

Best regards,
The SessionScribe Team
      `
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log(`✅ Welcome email sent successfully to ${recipientEmail}:`, result.messageId);
    
    return {
      success: true,
      messageId: result.messageId,
      recipient: recipientEmail
    };
    
  } catch (error) {
    console.error(`❌ Failed to send welcome email to ${recipientEmail}:`, error);
    throw error;
  }
};