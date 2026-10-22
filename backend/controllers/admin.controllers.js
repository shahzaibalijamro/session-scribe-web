// import meetingSchema from "../models/meeting.model.js";
// import User from "../models/user.model.js";
// import Recording from "../models/recording.model.js";
// import historyModel from "../models/history.model.js";

// const getAllRecordingUrls = async (req, res) => {
//   console.log("hello");
//   try {
//     // Fetch only the recording URLs and basic meeting info to minimize data transfer
//     const meetings = await meetingSchema
//       .find({
//         $or: [
//           { recordingAudioUrl: { $exists: true, $ne: null } },
//           { recordingVideoUrl: { $exists: true, $ne: null } },
//         ],
//       })
//       .populate("user")
//       .sort({ createdAt: -1 });
//     res.status(200).json({
//       success: true,
//       count: meetings.length,
//       data: meetings,
//     });
//   } catch (error) {
//     console.error("Error fetching recording URLs:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching recording URLs",
//       error: error.message,
//     });
//   }
// };

// export const updateUserStatus = async (req, res) => {
//   try {
//     // Check if user is admin
//     if (req.user.role !== 'admin') {
//       return res.status(403).json({
//         error: "Access denied. Admin privileges required."
//       });
//     }

//     const { userId } = req.params;
//     const { status } = req.body;

//     if (!['active', 'inactive'].includes(status)) {
//       return res.status(400).json({
//         error: "Invalid status. Must be 'active' or 'inactive'"
//       });
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { status },
//       { new: true, select: '-password -passwordResetToken -passwordResetExpires' }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({
//         error: "User not found"
//       });
//     }

//     res.json({
//       success: true,
//       message: `User ${status === 'active' ? 'activated' : 'deactivated'} successfully`,
//       user: updatedUser
//     });

//   } catch (error) {
//     console.error("Error updating user status:", error);
//     res.status(500).json({
//       error: "Failed to update user status",
//       details: error.message
//     });
//   }
// };

// export const getAllUsersAdmin = async (req, res) => {
//   try {
//     // Check if user is admin
//     if (req.user.role !== 'admin') {
//       return res.status(403).json({
//         error: "Access denied. Admin privileges required."
//       });
//     }

//     const MAX_SECONDS_ALLOWED = 6000; // 100 minutes

//     // Get all users with their usage data
//     const users = await User.find({}, {
//       password: 0, // Exclude password from results
//       passwordResetToken: 0,
//       passwordResetExpires: 0
//     }).sort({ createdAt: -1 }).lean();

//     // Get meeting counts for each user
//     const userIds = users.map(user => user._id);
//     const meetingCounts = await meetingSchema.aggregate([
//       { $match: { user: { $in: userIds } } },
//       {
//         $group: {
//           _id: "$user",
//           totalMeetings: { $sum: 1 },
//           recordingMeetings: {
//             $sum: { $cond: [{ $eq: ["$type", "recording"] }, 1, 0] }
//           },
//           liveTranscriptionMeetings: {
//             $sum: { $cond: [{ $eq: ["$type", "live-transcription"] }, 1, 0] }
//           },
//           audioNotesMeetings: {
//             $sum: { $cond: [{ $eq: ["$type", "audio-notes"] }, 1, 0] }
//           },
//           lastMeetingDate: { $max: "$createdAt" }
//         }
//       }
//     ]);

//     // Create a map for quick lookup
//     const meetingCountsMap = {};
//     meetingCounts.forEach(count => {
//       meetingCountsMap[count._id.toString()] = count;
//     });

//     // Format user data
//     const formattedUsers = users.map(user => {
//       const totalUsed = user.totalSecondsUsed || 0;
//       const totalUsedMinutes = Math.round(totalUsed / 60);
//       const percentageUsed = Math.round((totalUsed / MAX_SECONDS_ALLOWED) * 100);
//       const remainingMinutes = Math.round((MAX_SECONDS_ALLOWED - totalUsed) / 60);
      
//       const meetingData = meetingCountsMap[user._id.toString()] || {
//         totalMeetings: 0,
//         recordingMeetings: 0,
//         liveTranscriptionMeetings: 0,
//         audioNotesMeetings: 0,
//         lastMeetingDate: null
//       };

//       return {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         status: user.status,
//         role: user.role,
//         joinedDate: user.createdAt,
//         lastActiveDate: meetingData.lastMeetingDate || user.createdAt,
//         usage: {
//           totalMinutes: totalUsedMinutes,
//           totalSeconds: totalUsed,
//           percentageUsed,
//           remainingMinutes,
//           breakdown: {
//             recording: Math.round((user.recordingSecondsUsed || 0) / 60),
//             liveTranscription: Math.round((user.liveTranscriptionSecondsUsed || 0) / 60),
//             audioNotes: Math.round((user.audioNotesSecondsUsed || 0) / 60)
//           }
//         },
//         meetings: {
//           total: meetingData.totalMeetings,
//           recording: meetingData.recordingMeetings,
//           liveTranscription: meetingData.liveTranscriptionMeetings,
//           audioNotes: meetingData.audioNotesMeetings
//         }
//       };
//     });

//     // Calculate overall statistics
//     const totalUsers = users.length;
//     const activeUsers = users.filter(user => user.status === 'active').length;
//     const totalUsageMinutes = formattedUsers.reduce((sum, user) => sum + user.usage.totalMinutes, 0);
//     const averageUsagePerUser = totalUsers > 0 ? Math.round(totalUsageMinutes / totalUsers) : 0;
//     const usersOverLimit = formattedUsers.filter(user => user.usage.percentageUsed >= 100).length;
//     const usersNearLimit = formattedUsers.filter(user => user.usage.percentageUsed >= 80 && user.usage.percentageUsed < 100).length;
    
//     const totalMeetings = formattedUsers.reduce((sum, user) => sum + user.meetings.total, 0);

//     // Usage distribution
//     const usageDistribution = {
//       '0-25%': formattedUsers.filter(user => user.usage.percentageUsed >= 0 && user.usage.percentageUsed < 25).length,
//       '25-50%': formattedUsers.filter(user => user.usage.percentageUsed >= 25 && user.usage.percentageUsed < 50).length,
//       '50-75%': formattedUsers.filter(user => user.usage.percentageUsed >= 50 && user.usage.percentageUsed < 75).length,
//       '75-100%': formattedUsers.filter(user => user.usage.percentageUsed >= 75 && user.usage.percentageUsed <= 100).length,
//       'Over 100%': formattedUsers.filter(user => user.usage.percentageUsed > 100).length
//     };

//     const adminStats = {
//       totalUsers,
//       activeUsers,
//       inactiveUsers: totalUsers - activeUsers,
//       totalUsageMinutes,
//       averageUsagePerUser,
//       usersOverLimit,
//       usersNearLimit,
//       totalMeetings,
//       usageDistribution
//     };

//     res.json({
//       success: true,
//       data: {
//         users: formattedUsers,
//         stats: adminStats
//       }
//     });

//   } catch (error) {
//     console.error("Error fetching admin users data:", error);
//     res.status(500).json({
//       error: "Failed to fetch users data",
//       details: error.message
//     });
//   }
// };


// export const getUsers = async (req, res) => {
//   try {
//     // Get all users without password & __v
//     const users = await User.find({}, "-password -__v").sort({ createdAt: -1 });
    
//     // Get stats in parallel
//     const [totalUsers, activeUsers, inActiveUsers] = await Promise.all([
//       User.countDocuments(),
//       User.countDocuments({ status: "active" }),
//       User.countDocuments({ status: "inactive" }),
//     ]);
    
//     res.json({
//       success: true,
//       users,
//       stats: {
//         totalUsers,
//         activeUsers,
//         inActiveUsers,
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching users",
//     });
//   }
// };

// // Get single user details
// export const getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id, "-password -__v");
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
    
//     // Get user recordings stats
//     const recordings = await Recording.countDocuments({ userId: user._id });
//     const hoursRecorded = await Recording.aggregate([
//       { $match: { userId: user._id } },
//       { $group: { _id: null, total: { $sum: "$duration" } } },
//     ]);
//     const storageUsed = await Recording.aggregate([
//       { $match: { userId: user._id } },
//       { $group: { _id: null, total: { $sum: "$size" } } },
//     ]);
    
//     res.json({
//       success: true,
//       user: {
//         ...user._doc,
//         stats: {
//           recordings,
//           hours: hoursRecorded[0]?.total
//           ? (hoursRecorded[0].total / 3600).toFixed(2)
//           : 0,
//           storage: storageUsed[0]?.total
//           ? (storageUsed[0].total / (1024 * 1024)).toFixed(2) + " MB"
//           : "0 MB",
//         },
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching user",
//     });
//   }
// };

// // Create new user (admin only)
// export const createUser = async (req, res) => {
//   try {
//     const {
//       username,
//       email,
//       password,
//       role = "user",
//       status = "active",
//     } = req.body;
    
//     // Check if user exists
//     const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//       return res.status(409).json({
//         success: false,
//         message: "User with this email or username already exists",
//       });
//     }
    
//     // Create user
//     const user = new User({
//       username,
//       email,
//       password, // Password will be hashed in pre-save hook
//       role,
//       status,
//     });
    
//     await user.save();
    
//     // Return user without password
//     const userResponse = user.toObject();
//     delete userResponse.password;
    
//     res.status(201).json({
//       success: true,
//       message: "User created successfully",
//       user: userResponse,
//     });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while creating user",
//     });
//   }
// };

// // Update user
// export const updateUser = async (req, res) => {
//   try {
//     const { username, email, role, status } = req.body;
//     const userId = req.params.id;
    
//     // Check if user exists
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
    
//     // Check for duplicate email or username
//     if (email && email !== user.email) {
//       const emailExists = await User.findOne({ email });
//       if (emailExists) {
//         return res.status(409).json({
//           success: false,
//           message: "Email already in use by another user",
//         });
//       }
//     }
    
//     if (username && username !== user.username) {
//       const usernameExists = await User.findOne({ username });
//       if (usernameExists) {
//         return res.status(409).json({
//           success: false,
//           message: "Username already taken",
//         });
//       }
//     }
    
//     // Update user
//     user.username = username || user.username;
//     user.email = email || user.email;
//     user.role = role || user.role;
//     user.status = status || user.status;
    
//     await user.save();
    
//     // Return updated user without password
//     const userResponse = user.toObject();
//     delete userResponse.password;
    
//     res.json({
//       success: true,
//       message: "User updated successfully",
//       user: userResponse,
//     });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while updating user",
//     });
//   }
// };

// // Delete user
// export const deleteUser = async (req, res) => {
//   try {
//     const userId = req.params.id;
    
//     // Check if user exists
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
    
//     // Prevent deleting own account
//     if (user._id.toString() === req.user._id.toString()) {
//       return res.status(403).json({
//         success: false,
//         message: "You cannot delete your own account",
//       });
//     }
    
//     // Delete user's recordings first (optional)
//     await Recording.deleteMany({ userId: user._id });
    
//     // Delete user
//     await User.findByIdAndDelete(userId);
    
//     res.json({
//       success: true,
//       message: "User deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while deleting user",
//     });
//   }
// };

// export const getAllRecordings = async (req, res) => {
//   try {
//     const recordings = await Recording.find()
//     .populate("userId", "username email")
//     .sort({ createdAt: -1 });
    
//     res.json({
//       success: true,
//       recordings,
//     });
//   } catch (error) {
//     console.error("Error fetching recordings:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching recordings",
//     });
//   }
// };
// export default getAllRecordingUrls;


import meetingSchema from "../models/meeting.model.js";
import User from "../models/user.model.js";
import Recording from "../models/recording.model.js";
import historyModel from "../models/history.model.js";

const getAllRecordingUrls = async (req, res) => {
  console.log("hello");
  try {
    // Fetch only the recording URLs and basic meeting info to minimize data transfer
    const meetings = await meetingSchema
      .find({
        $or: [
          { recordingAudioUrl: { $exists: true, $ne: null } },
          { recordingVideoUrl: { $exists: true, $ne: null } },
        ],
      })
      .populate("user")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: meetings.length,
      data: meetings,
    });
  } catch (error) {
    console.error("Error fetching recording URLs:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching recording URLs",
      error: error.message,
    });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        error: "Access denied. Admin privileges required."
      });
    }

    const { userId } = req.params;
    const { status } = req.body;

    if (!['active', 'inactive'].includes(status)) {
      return res.status(400).json({
        error: "Invalid status. Must be 'active' or 'inactive'"
      });
    }

    // Get the user before updating to store previous state
    const userBeforeUpdate = await User.findById(userId);
    if (!userBeforeUpdate) {
      return res.status(404).json({
        error: "User not found"
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { status },
      { new: true, select: '-password -passwordResetToken -passwordResetExpires' }
    );

    // Create history record for user status update
    await historyModel.create({
      user: req.user._id,
      action: 'updated',
      targetType: 'User',
      targetId: userId,
      details: {
        field: 'status',
        previousValue: userBeforeUpdate.status,
        newValue: status,
        updatedBy: req.user.email || req.user.username
      }
    });

    res.json({
      success: true,
      message: `User ${status === 'active' ? 'activated' : 'deactivated'} successfully`,
      user: updatedUser
    });

  } catch (error) {
    console.error("Error updating user status:", error);
    res.status(500).json({
      error: "Failed to update user status",
      details: error.message
    });
  }
};

export const getAllUsersAdmin = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        error: "Access denied. Admin privileges required."
      });
    }

    const MAX_SECONDS_ALLOWED = 6000; // 100 minutes

    // Get all users with their usage data
    const users = await User.find({}, {
      password: 0, // Exclude password from results
      passwordResetToken: 0,
      passwordResetExpires: 0
    }).sort({ createdAt: -1 }).lean();

    // Get meeting counts for each user
    const userIds = users.map(user => user._id);
    const meetingCounts = await meetingSchema.aggregate([
      { $match: { user: { $in: userIds } } },
      {
        $group: {
          _id: "$user",
          totalMeetings: { $sum: 1 },
          recordingMeetings: {
            $sum: { $cond: [{ $eq: ["$type", "recording"] }, 1, 0] }
          },
          liveTranscriptionMeetings: {
            $sum: { $cond: [{ $eq: ["$type", "live-transcription"] }, 1, 0] }
          },
          audioNotesMeetings: {
            $sum: { $cond: [{ $eq: ["$type", "audio-notes"] }, 1, 0] }
          },
          lastMeetingDate: { $max: "$createdAt" }
        }
      }
    ]);

    // Create a map for quick lookup
    const meetingCountsMap = {};
    meetingCounts.forEach(count => {
      meetingCountsMap[count._id.toString()] = count;
    });

    // Format user data
    const formattedUsers = users.map(user => {
      const totalUsed = user.totalSecondsUsed || 0;
      const totalUsedMinutes = Math.round(totalUsed / 60);
      const percentageUsed = Math.round((totalUsed / MAX_SECONDS_ALLOWED) * 100);
      const remainingMinutes = Math.round((MAX_SECONDS_ALLOWED - totalUsed) / 60);
      
      const meetingData = meetingCountsMap[user._id.toString()] || {
        totalMeetings: 0,
        recordingMeetings: 0,
        liveTranscriptionMeetings: 0,
        audioNotesMeetings: 0,
        lastMeetingDate: null
      };

      return {
        id: user._id,
        name: user.name,
        email: user.email,
        status: user.status,
        role: user.role,
        joinedDate: user.createdAt,
        lastActiveDate: meetingData.lastMeetingDate || user.createdAt,
        usage: {
          totalMinutes: totalUsedMinutes,
          totalSeconds: totalUsed,
          percentageUsed,
          remainingMinutes,
          breakdown: {
            recording: Math.round((user.recordingSecondsUsed || 0) / 60),
            liveTranscription: Math.round((user.liveTranscriptionSecondsUsed || 0) / 60),
            audioNotes: Math.round((user.audioNotesSecondsUsed || 0) / 60)
          }
        },
        meetings: {
          total: meetingData.totalMeetings,
          recording: meetingData.recordingMeetings,
          liveTranscription: meetingData.liveTranscriptionMeetings,
          audioNotes: meetingData.audioNotesMeetings
        }
      };
    });

    // Calculate overall statistics
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.status === 'active').length;
    const totalUsageMinutes = formattedUsers.reduce((sum, user) => sum + user.usage.totalMinutes, 0);
    const averageUsagePerUser = totalUsers > 0 ? Math.round(totalUsageMinutes / totalUsers) : 0;
    const usersOverLimit = formattedUsers.filter(user => user.usage.percentageUsed >= 100).length;
    const usersNearLimit = formattedUsers.filter(user => user.usage.percentageUsed >= 80 && user.usage.percentageUsed < 100).length;
    
    const totalMeetings = formattedUsers.reduce((sum, user) => sum + user.meetings.total, 0);

    // Usage distribution
    const usageDistribution = {
      '0-25%': formattedUsers.filter(user => user.usage.percentageUsed >= 0 && user.usage.percentageUsed < 25).length,
      '25-50%': formattedUsers.filter(user => user.usage.percentageUsed >= 25 && user.usage.percentageUsed < 50).length,
      '50-75%': formattedUsers.filter(user => user.usage.percentageUsed >= 50 && user.usage.percentageUsed < 75).length,
      '75-100%': formattedUsers.filter(user => user.usage.percentageUsed >= 75 && user.usage.percentageUsed <= 100).length,
      'Over 100%': formattedUsers.filter(user => user.usage.percentageUsed > 100).length
    };

    const adminStats = {
      totalUsers,
      activeUsers,
      inactiveUsers: totalUsers - activeUsers,
      totalUsageMinutes,
      averageUsagePerUser,
      usersOverLimit,
      usersNearLimit,
      totalMeetings,
      usageDistribution
    };

    res.json({
      success: true,
      data: {
        users: formattedUsers,
        stats: adminStats
      }
    });

  } catch (error) {
    console.error("Error fetching admin users data:", error);
    res.status(500).json({
      error: "Failed to fetch users data",
      details: error.message
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    // Get all users without password & __v
    const users = await User.find({}, "-password -__v").sort({ createdAt: -1 });
    
    // Get stats in parallel
    const [totalUsers, activeUsers, inActiveUsers] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ status: "active" }),
      User.countDocuments({ status: "inactive" }),
    ]);
    
    res.json({
      success: true,
      users,
      stats: {
        totalUsers,
        activeUsers,
        inActiveUsers,
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching users",
    });
  }
};

// Get single user details
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password -__v");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
    // Get user recordings stats
    const recordings = await Recording.countDocuments({ userId: user._id });
    const hoursRecorded = await Recording.aggregate([
      { $match: { userId: user._id } },
      { $group: { _id: null, total: { $sum: "$duration" } } },
    ]);
    const storageUsed = await Recording.aggregate([
      { $match: { userId: user._id } },
      { $group: { _id: null, total: { $sum: "$size" } } },
    ]);
    
    res.json({
      success: true,
      user: {
        ...user._doc,
        stats: {
          recordings,
          hours: hoursRecorded[0]?.total
          ? (hoursRecorded[0].total / 3600).toFixed(2)
          : 0,
          storage: storageUsed[0]?.total
          ? (storageUsed[0].total / (1024 * 1024)).toFixed(2) + " MB"
          : "0 MB",
        },
      },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching user",
    });
  }
};

// Create new user (admin only)
export const createUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      role = "user",
      status = "active",
    } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email or username already exists",
      });
    }
    
    // Create user
    const user = new User({
      username,
      email,
      password, // Password will be hashed in pre-save hook
      role,
      status,
    });
    
    await user.save();

    // Create history record for user creation
    await historyModel.create({
      user: req.user._id,
      action: 'created',
      targetType: 'User',
      targetId: user._id,
      details: {
        createdUser: {
          username: user.username,
          email: user.email,
          role: user.role,
          status: user.status
        },
        createdBy: req.user.email || req.user.username
      }
    });
    
    // Return user without password
    const userResponse = user.toObject();
    delete userResponse.password;
    
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: userResponse,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating user",
    });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { username, email, role, status } = req.body;
    const userId = req.params.id;
    
    // Check if user exists
    const userBeforeUpdate = await User.findById(userId);
    if (!userBeforeUpdate) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
    // Check for duplicate email or username
    if (email && email !== userBeforeUpdate.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(409).json({
          success: false,
          message: "Email already in use by another user",
        });
      }
    }
    
    if (username && username !== userBeforeUpdate.username) {
      const usernameExists = await User.findOne({ username });
      if (usernameExists) {
        return res.status(409).json({
          success: false,
          message: "Username already taken",
        });
      }
    }
    
    // Store previous values for history
    const previousValues = {
      username: userBeforeUpdate.username,
      email: userBeforeUpdate.email,
      role: userBeforeUpdate.role,
      status: userBeforeUpdate.status
    };
    
    // Update user
    userBeforeUpdate.username = username || userBeforeUpdate.username;
    userBeforeUpdate.email = email || userBeforeUpdate.email;
    userBeforeUpdate.role = role || userBeforeUpdate.role;
    userBeforeUpdate.status = status || userBeforeUpdate.status;
    
    await userBeforeUpdate.save();

    // Track what fields were changed
    const changedFields = {};
    if (username && username !== previousValues.username) {
      changedFields.username = { from: previousValues.username, to: username };
    }
    if (email && email !== previousValues.email) {
      changedFields.email = { from: previousValues.email, to: email };
    }
    if (role && role !== previousValues.role) {
      changedFields.role = { from: previousValues.role, to: role };
    }
    if (status && status !== previousValues.status) {
      changedFields.status = { from: previousValues.status, to: status };
    }

    // Create history record only if there were actual changes
    if (Object.keys(changedFields).length > 0) {
      await historyModel.create({
        user: req.user._id,
        action: 'updated',
        targetType: 'User',
        targetId: userId,
        details: {
          changedFields,
          updatedBy: req.user.email || req.user.username
        }
      });
    }
    
    // Return updated user without password
    const userResponse = userBeforeUpdate.toObject();
    delete userResponse.password;
    
    res.json({
      success: true,
      message: "User updated successfully",
      user: userResponse,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating user",
    });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    
    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
    // Prevent deleting own account
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You cannot delete your own account",
      });
    }
    
    // Store user data for history before deletion
    const deletedUserData = {
      username: user.username,
      email: user.email,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt
    };
    
    // Delete user's recordings first (optional)
    const deletedRecordings = await Recording.countDocuments({ userId: user._id });
    await Recording.deleteMany({ userId: user._id });
    
    // Delete user
    await User.findByIdAndDelete(userId);

    // Create history record for user deletion
    await historyModel.create({
      user: req.user._id,
      action: 'deleted',
      targetType: 'User',
      targetId: userId,
      details: {
        deletedUser: deletedUserData,
        deletedRecordings: deletedRecordings,
        deletedBy: req.user.email || req.user.username
      }
    });
    
    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting user",
    });
  }
};

export const getAllRecordings = async (req, res) => {
  try {
    const recordings = await Recording.find()
    .populate("userId", "username email")
    .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      recordings,
    });
  } catch (error) {
    console.error("Error fetching recordings:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching recordings",
    });
  }
};

export default getAllRecordingUrls;