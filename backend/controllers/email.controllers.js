// emailController.js - API endpoint for sending meeting summary emails
import { sendBulkMeetingSummaryEmails } from '../utils/email.utils.js';
import meetingSchema from '../models/meeting.model.js';
import historyModel from '../models/history.model.js';

/**
 * Send meeting summary PDF via email to multiple recipients
 * POST /api/send-meeting-summary
 */
// export const sendMeetingSummary = async (req, res) => {
//   try {
//     const user = req.user;
    
//     // Validate request
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "No PDF file provided"
//       });
//     }

//     const { recipients, meetingTitle, meetingId } = req.body;

//     // Validate required fields
//     if (!recipients) {
//       return res.status(400).json({
//         success: false,
//         message: "No email recipients provided"
//       });
//     }

//     let parsedRecipients;
//     try {
//       parsedRecipients = JSON.parse(recipients);
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid recipients format"
//       });
//     }

//     if (!Array.isArray(parsedRecipients) || parsedRecipients.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Recipients must be a non-empty array"
//       });
//     }

//     // Validate email formats
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const invalidEmails = parsedRecipients.filter(email => !emailRegex.test(email));
    
//     if (invalidEmails.length > 0) {
//       return res.status(400).json({
//         success: false,
//         message: `Invalid email formats: ${invalidEmails.join(', ')}`
//       });
//     }

//     // Get PDF buffer from uploaded file
//     const pdfBuffer = req.file.buffer;
//     const title = meetingTitle || "Meeting Summary";
    
//     console.log(`📧 Processing email request for "${title}" to ${parsedRecipients.length} recipients`);

//     // Optional: Verify meeting belongs to user if meetingId is provided
//     if (meetingId) {
//       try {
//         const meeting = await meetingSchema.findOne({ 
//           _id: meetingId, 
//           user: user._id 
//         });
        
//         if (!meeting) {
//           console.warn(`⚠️  Meeting ${meetingId} not found or doesn't belong to user ${user._id}`);
//         } else {
//           console.log(`✅ Meeting ${meetingId} verified for user ${user._id}`);
//         }
//       } catch (error) {
//         console.warn("Error verifying meeting:", error.message);
//       }
//     }

//     // Prepare sender info
//     const senderInfo = {
//       name: user.username || 'Meeting Recorder User',
//       email: user.email || process.env.EMAIL_USER
//     };

//     // Send emails
//     const emailResults = await sendBulkMeetingSummaryEmails(
//       parsedRecipients,
//       title,
//       pdfBuffer,
//       senderInfo
//     );

//     // Prepare response
//     const response = {
//       success: true,
//       message: `Email sending completed`,
//       results: {
//         total: emailResults.total,
//         successful: emailResults.successful.length,
//         failed: emailResults.failed.length,
//         successfulRecipients: emailResults.successful.map(r => r.recipient),
//         failedRecipients: emailResults.failed.map(f => ({
//           recipient: f.recipient,
//           error: f.error
//         }))
//       }
//     };

//     // Determine response status based on results
//     if (emailResults.failed.length === 0) {
//       // All emails sent successfully
//       console.log(`✅ All emails sent successfully for "${title}"`);
//       response.message = `Meeting summary sent successfully to all ${emailResults.successful.length} recipients`;
//       return res.status(200).json(response);
      
//     } else if (emailResults.successful.length === 0) {
//       // All emails failed
//       console.error(`❌ All emails failed for "${title}"`);
//       response.success = false;
//       response.message = `Failed to send emails to any recipients`;
//       return res.status(500).json(response);
      
//     } else {
//       // Partial success
//       console.warn(`⚠️  Partial success for "${title}": ${emailResults.successful.length}/${emailResults.total} sent`);
//       response.message = `Meeting summary sent to ${emailResults.successful.length} out of ${emailResults.total} recipients`;
//       return res.status(207).json(response); // 207 Multi-Status
//     }

//   } catch (error) {
//     console.error("💥 Error in sendMeetingSummary:", error);
    
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error while sending emails",
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// };


export const sendMeetingSummary = async (req, res) => {
  try {
    const user = req.user;
    
    // Validate request
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF file provided"
      });
    }

    const { recipients, meetingTitle, meetingId } = req.body;

    // Validate required fields
    if (!recipients) {
      return res.status(400).json({
        success: false,
        message: "No email recipients provided"
      });
    }

    let parsedRecipients;
    try {
      parsedRecipients = JSON.parse(recipients);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid recipients format"
      });
    }

    if (!Array.isArray(parsedRecipients) || parsedRecipients.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Recipients must be a non-empty array"
      });
    }

    // Validate email formats
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = parsedRecipients.filter(email => !emailRegex.test(email));
    
    if (invalidEmails.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Invalid email formats: ${invalidEmails.join(', ')}`
      });
    }

    // Get PDF buffer from uploaded file
    const pdfBuffer = req.file.buffer;
    const title = meetingTitle || "Meeting Summary";
    
    console.log(`📧 Processing email request for "${title}" to ${parsedRecipients.length} recipients`);

    // Optional: Verify meeting belongs to user if meetingId is provided
    let meetingData = null;
    if (meetingId) {
      try {
        const meeting = await meetingSchema.findOne({ 
          _id: meetingId, 
          user: user._id 
        });
        
        if (!meeting) {
          console.warn(`⚠️  Meeting ${meetingId} not found or doesn't belong to user ${user._id}`);
        } else {
          console.log(`✅ Meeting ${meetingId} verified for user ${user._id}`);
          meetingData = {
            meetingId: meeting._id,
            meetingType: meeting.type,
            meetingDate: meeting.createdAt
          };
        }
      } catch (error) {
        console.warn("Error verifying meeting:", error.message);
      }
    }

    // Prepare sender info
    const senderInfo = {
      name: user.username || 'Meeting Recorder User',
      email: user.email || process.env.EMAIL_USER
    };

    // Send emails
    const emailResults = await sendBulkMeetingSummaryEmails(
      parsedRecipients,
      title,
      pdfBuffer,
      senderInfo
    );

    // Create history record for email activity
    const historyData = {
      user: user._id,
      action: 'shared',
      targetType: 'MeetingSummary',
      targetId: meetingId || null, // Use meetingId if available, otherwise null
      details: {
        emailActivity: {
          meetingTitle: title,
          totalRecipients: emailResults.total,
          successfulDeliveries: emailResults.successful.length,
          failedDeliveries: emailResults.failed.length,
          recipients: parsedRecipients,
          successfulRecipients: emailResults.successful.map(r => r.recipient),
          failedRecipients: emailResults.failed.map(f => f.recipient),
          pdfFileSize: pdfBuffer ? pdfBuffer.length : 0
        },
        meeting: meetingData,
        sender: {
          userId: user._id,
          userName: user.username,
          userEmail: user.email
        },
        deliveryStatus: emailResults.failed.length === 0 ? 'all_success' : 
                       emailResults.successful.length === 0 ? 'all_failed' : 'partial_success'
      }
    };

    // Only create history if there were actual email attempts
    try {
      await historyModel.create(historyData);
      console.log(`📝 Email activity logged to history for user ${user._id}`);
    } catch (historyError) {
      console.error("Failed to create history record:", historyError);
      // Don't fail the main operation if history logging fails
    }

    // Prepare response
    const response = {
      success: true,
      message: `Email sending completed`,
      results: {
        total: emailResults.total,
        successful: emailResults.successful.length,
        failed: emailResults.failed.length,
        successfulRecipients: emailResults.successful.map(r => r.recipient),
        failedRecipients: emailResults.failed.map(f => ({
          recipient: f.recipient,
          error: f.error
        }))
      }
    };

    // Determine response status based on results
    if (emailResults.failed.length === 0) {
      // All emails sent successfully
      console.log(`✅ All emails sent successfully for "${title}"`);
      response.message = `Meeting summary sent successfully to all ${emailResults.successful.length} recipients`;
      return res.status(200).json(response);
      
    } else if (emailResults.successful.length === 0) {
      // All emails failed
      console.error(`❌ All emails failed for "${title}"`);
      response.success = false;
      response.message = `Failed to send emails to any recipients`;
      return res.status(500).json(response);
      
    } else {
      // Partial success
      console.warn(`⚠️  Partial success for "${title}": ${emailResults.successful.length}/${emailResults.total} sent`);
      response.message = `Meeting summary sent to ${emailResults.successful.length} out of ${emailResults.total} recipients`;
      return res.status(207).json(response); // 207 Multi-Status
    }

  } catch (error) {
    console.error("💥 Error in sendMeetingSummary:", error);
    
    return res.status(500).json({
      success: false,
      message: "Internal server error while sending emails",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Test email configuration endpoint
 * GET /api/test-email
 */
export const testEmailConfiguration = async (req, res) => {
  try {
    const { createTransporter } = await import('../utils/email.utils.js');
    
    const transporter = createTransporter();
    await transporter.verify();
    
    console.log('✅ Email configuration test successful');
    
    res.json({
      success: true,
      message: "Email configuration is valid and server is ready to send emails"
    });
    
  } catch (error) {
    console.error('❌ Email configuration test failed:', error);
    
    res.status(500).json({
      success: false,
      message: "Email configuration test failed",
      error: error.message,
      suggestions: [
        "Check your EMAIL_USER and EMAIL_APP_PASSWORD environment variables",
        "Make sure you're using an App Password for Gmail (not your regular password)",
        "Verify your SMTP settings if using a different email provider"
      ]
    });
  }
};


// Add this to your meeting controller (meetingController.js or similar)

/**
 * Get the most recent meeting's email recipients for the current user
 * GET /api/meeting/previous-emails
 */
export const getPreviousMeetingEmails = async (req, res) => {
  try {
    const user = req.user;
    
    console.log(`🔍 Fetching previous meeting emails for user: ${user._id}`);

    // Find the most recent meeting that has email recipients
    const recentMeetingWithEmails = await meetingSchema
      .findOne({
        user: user._id,
        emailRecipients: { 
          $exists: true, 
          $ne: [], // Not empty array
          $not: { $size: 0 } // Additional check for empty array
        }
      })
      .sort({ createdAt: -1 }) // Most recent first
      .select('emailRecipients title createdAt')
      .lean();

    if (!recentMeetingWithEmails) {
      console.log(`📭 No previous meetings with email recipients found for user: ${user._id}`);
      return res.json({
        success: true,
        hasEmails: false,
        emails: [],
        message: "No previous meeting emails found"
      });
    }

    // Validate and clean the email recipients
    const validEmails = recentMeetingWithEmails.emailRecipients.filter(email => {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email && typeof email === 'string' && emailRegex.test(email.trim());
    });

    console.log(`✅ Found ${validEmails.length} previous email recipients from meeting: "${recentMeetingWithEmails.title}"`);

    res.json({
      success: true,
      hasEmails: validEmails.length > 0,
      emails: validEmails,
      meetingInfo: {
        title: recentMeetingWithEmails.title,
        date: recentMeetingWithEmails.createdAt
      },
      message: validEmails.length > 0 
        ? `Found ${validEmails.length} email recipients from previous meeting`
        : "Previous meeting found but no valid email recipients"
    });

  } catch (error) {
    console.error("💥 Error fetching previous meeting emails:", error);
    
    res.status(500).json({
      success: false,
      hasEmails: false,
      emails: [],
      message: "Failed to fetch previous meeting emails",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Add this route to your meeting routes file (meetingRoutes.js or similar)

/**
 * Add this route to your existing meeting routes
 * 
 * Example in meetingRoutes.js:
 * 
 * import { getPreviousMeetingEmails } from '../controllers/meetingController.js';
 * 
 * router.get('/previous-emails', authenticateToken, getPreviousMeetingEmails);
 */