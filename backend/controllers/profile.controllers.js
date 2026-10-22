import User from "../models/user.model.js";
import historyModel from "../models/history.model.js";
import meetingSchema from "../models/meeting.model.js";
import Recording from "../models/recording.model.js";
import bcrypt from "bcryptjs";

// ================================
// GET USER PROFILE CONTROLLER
// ================================

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get user data excluding password and sensitive fields
    const user = await User.findById(userId, {
      password: 0,
      passwordResetToken: 0,
      passwordResetExpires: 0,
      __v: 0
    }).lean();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Get additional profile statistics
    const [meetingCount, totalRecordings, recentActivity] = await Promise.all([
      meetingSchema.countDocuments({ user: userId }),
      Recording.countDocuments({ userId: userId }),
      historyModel.find({ user: userId }).sort({ createdAt: -1 }).limit(5).lean()
    ]);

    // Calculate usage statistics
    const usageStats = {
      totalSecondsUsed: user.totalSecondsUsed || 0,
      recordingSecondsUsed: user.recordingSecondsUsed || 0,
      liveTranscriptionSecondsUsed: user.liveTranscriptionSecondsUsed || 0,
      audioNotesSecondsUsed: user.audioNotesSecondsUsed || 0,
      remainingSeconds: 6000 - (user.totalSecondsUsed || 0), // 100 minutes = 6000 seconds
      usagePercentage: Math.round(((user.totalSecondsUsed || 0) / 6000) * 100)
    };

    // Prepare response data
    const profileData = {
      ...user,
      stats: {
        totalMeetings: meetingCount,
        totalRecordings: totalRecordings,
        usageStats,
        recentActivityCount: recentActivity.length
      },
      recentActivity: recentActivity.map(activity => ({
        action: activity.action,
        targetType: activity.targetType,
        createdAt: activity.createdAt,
        summary: activity.details?.summary || `${activity.action} ${activity.targetType}`
      }))
    };

    res.json({
      success: true,
      message: "Profile data retrieved successfully",
      user: profileData
    });

  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching profile data",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// ================================
// UPDATE USER PROFILE CONTROLLER
// ================================

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, email, currentPassword, newPassword } = req.body;

    // Validate required fields for basic info update
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required"
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
      });
    }

    // Get current user data
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Check if email is already taken by another user
    if (email !== currentUser.email) {
      const emailExists = await User.findOne({ 
        email: email.toLowerCase().trim(),
        _id: { $ne: userId }
      });
      
      if (emailExists) {
        return res.status(409).json({
          success: false,
          message: "Email address is already in use by another account"
        });
      }
    }

    // Store original values for history
    const originalData = {
      name: currentUser.name,
      email: currentUser.email
    };

    // Prepare update data
    const updateData = {
      name: name.trim(),
      email: email.toLowerCase().trim()
    };

    // Handle password change if provided
    if (newPassword) {
      if (!currentPassword) {
        return res.status(400).json({
          success: false,
          message: "Current password is required to change password"
        });
      }

      // Verify current password
      const isCurrentPasswordValid = await currentUser.comparePassword(currentPassword);
      if (!isCurrentPasswordValid) {
        return res.status(400).json({
          success: false,
          message: "Current password is incorrect"
        });
      }

      // Validate new password strength
      if (newPassword.length < 6) {
        return res.status(400).json({
          success: false,
          message: "New password must be at least 6 characters long"
        });
      }

      // Hash new password
      const salt = await bcrypt.genSalt(12);
      updateData.password = await bcrypt.hash(newPassword, salt);
      updateData.passwordChangedAt = new Date();
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { 
        new: true, 
        runValidators: true,
        select: '-password -passwordResetToken -passwordResetExpires -__v'
      }
    );

    // Track what changed for history
    const changedFields = {};
    if (name.trim() !== originalData.name) {
      changedFields.name = { from: originalData.name, to: name.trim() };
    }
    if (email.toLowerCase().trim() !== originalData.email) {
      changedFields.email = { from: originalData.email, to: email.toLowerCase().trim() };
    }
    if (newPassword) {
      changedFields.password = { changed: true, timestamp: new Date() };
    }

    // Create history record if there were changes
    if (Object.keys(changedFields).length > 0) {
      await historyModel.create({
        user: userId,
        action: 'updated',
        targetType: 'UserProfile',
        targetId: userId,
        details: {
          profileUpdate: {
            changedFields,
            updateType: newPassword ? 'profile_and_password' : 'profile_only',
            updatedBy: updatedUser.name,
            userAgent: req.get('User-Agent'),
            ipAddress: req.ip || req.connection.remoteAddress
          },
          summary: `Updated profile information${newPassword ? ' and password' : ''}`
        }
      });
    }

    res.json({
      success: true,
      message: newPassword ? "Profile and password updated successfully" : "Profile updated successfully",
      user: updatedUser
    });

  } catch (error) {
    console.error("Error updating user profile:", error);
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email address is already in use"
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Server error while updating profile",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// ================================
// DELETE USER ACCOUNT CONTROLLER
// ================================

export const deleteUserAccount = async (req, res) => {
  try {
    const userId = req.user._id;
    const { confirmPassword, reason } = req.body;

    // Get user data
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Verify password if provided (optional but recommended)
    if (confirmPassword) {
      const isPasswordValid = await user.comparePassword(confirmPassword);
      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          message: "Password confirmation failed"
        });
      }
    }

    // Store user data for history before deletion
    const deletedUserData = {
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      totalSecondsUsed: user.totalSecondsUsed,
      recordingSecondsUsed: user.recordingSecondsUsed,
      liveTranscriptionSecondsUsed: user.liveTranscriptionSecondsUsed,
      audioNotesSecondsUsed: user.audioNotesSecondsUsed,
      accountCreatedAt: user.createdAt,
      accountDuration: Math.floor((new Date() - user.createdAt) / (1000 * 60 * 60 * 24)) // days
    };

    // Get counts of related data before deletion
    const [meetingCount, recordingCount, historyCount] = await Promise.all([
      meetingSchema.countDocuments({ user: userId }),
      Recording.countDocuments({ userId: userId }),
      historyModel.countDocuments({ user: userId })
    ]);

    const relatedDataCounts = {
      meetings: meetingCount,
      recordings: recordingCount,
      historyEntries: historyCount
    };

    // Delete related data
    await Promise.all([
      meetingSchema.deleteMany({ user: userId }),
      Recording.deleteMany({ userId: userId }),
      // Note: We might want to keep history for audit purposes, but anonymize it
      // historyModel.deleteMany({ user: userId })
    ]);

    // Create final history record before account deletion
    await historyModel.create({
      user: userId,
      action: 'self_deleted_account',
      targetType: 'UserAccount',
      targetId: userId,
      details: {
        accountDeletion: {
          deletedUser: deletedUserData,
          relatedDataDeleted: relatedDataCounts,
          deletionReason: reason || 'User requested account deletion',
          deletionTimestamp: new Date(),
          userAgent: req.get('User-Agent'),
          ipAddress: req.ip || req.connection.remoteAddress
        },
        summary: `User ${deletedUserData.name} (${deletedUserData.email}) deleted their account`
      }
    });

    // Delete the user account
    await User.findByIdAndDelete(userId);

    // Note: In production, you might want to:
    // 1. Send a confirmation email
    // 2. Add the user to a "deleted accounts" collection for audit purposes
    // 3. Schedule cleanup of any remaining data after a grace period

    res.json({
      success: true,
      message: "Account deleted successfully. We're sorry to see you go!",
      deletedData: {
        user: deletedUserData.name,
        meetings: relatedDataCounts.meetings,
        recordings: relatedDataCounts.recordings
      }
    });

  } catch (error) {
    console.error("Error deleting user account:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting account. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};