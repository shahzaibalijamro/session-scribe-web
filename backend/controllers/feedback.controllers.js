// import Feedback from "../models/feedback.model.js";

// // Submit feedback
// export const submitFeedback = async (req, res) => {
//   try {
//     const { rating, message } = req.body;
//     const { _id: userId, name, email } = req.user;

//     const feedback = new Feedback({
//       userId,
//       name,
//       email,
//       rating,
//       message,
//     });

//     await feedback.save();

//     res.status(201).json({
//       success: true,
//       message: "Thank you for your feedback!",
//       feedback,
//     });
//   } catch (error) {
//     console.error("Error submitting feedback:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while submitting feedback",
//     });
//   }
// };

// // Get all feedbacks (admin)
// // export const getFeedbacks = async (req, res) => {
// //   try {
// //     // Pagination
// //     const page = parseInt(req.query.page) || 1;
// //     const limit = parseInt(req.query.limit) || 10;
// //     const skip = (page - 1) * limit;

// //     // Filter
// //     const status = req.query.status || "";
// //     const query = status ? { status } : {};

// //     const [feedbacks, total] = await Promise.all([
// //       Feedback.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
// //       Feedback.countDocuments(query),
// //     ]);

// //     res.json({
// //       success: true,
// //       feedbacks,
// //       pagination: {
// //         total,
// //         page,
// //         pages: Math.ceil(total / limit),
// //         limit,
// //       },
// //     });
// //   } catch (error) {
// //     console.error("Error fetching feedbacks:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Server error while fetching feedbacks",
// //     });
// //   }
// // };

// export const getFeedbacks = async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find().sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       feedbacks,
//     });
//   } catch (error) {
//     console.error("Error fetching feedbacks:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching feedbacks",
//     });
//   }
// };

// // Update feedback status (admin)
// export const updateFeedbackStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     const feedback = await Feedback.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );

//     if (!feedback) {
//       return res.status(404).json({
//         success: false,
//         message: "Feedback not found",
//       });
//     }

//     res.json({
//       success: true,
//       message: "Feedback status updated",
//       feedback,
//     });
//   } catch (error) {
//     console.error("Error updating feedback:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while updating feedback",
//     });
//   }
// };


// import Feedback from "../models/feedback.model.js";
// import User from "../models/user.model.js"; // Assuming you have a user model

// // Submit feedback (for logged-in users)
// const submitFeedback = async (req, res) => {
//   try {
//     const { rating, message } = req.body;
//     const user = req.user; // From auth middleware

//     // Validate required fields
//     if (!rating || !message) {
//       return res.status(400).json({
//         error: "Rating and message are required"
//       });
//     }

//     // Validate rating range
//     if (rating < 1 || rating > 5) {
//       return res.status(400).json({
//         error: "Rating must be between 1 and 5"
//       });
//     }

//     // Validate message length
//     if (message.trim().length > 1000) {
//       return res.status(400).json({
//         error: "Message cannot exceed 1000 characters"
//       });
//     }

//     // Create new feedback
//     const newFeedback = new Feedback({
//       userId: user._id,
//       name: user.name,
//       email: user.email,
//       rating: parseInt(rating),
//       message: message.trim()
//     });

//     // Save to database
//     await newFeedback.save();

//     res.status(201).json({
//       success: true,
//       message: "Thank you for your feedback! We appreciate your input.",
//       feedbackId: newFeedback._id
//     });

//   } catch (error) {
//     console.error("Error submitting feedback:", error);
//     res.status(500).json({
//       error: "Failed to submit feedback. Please try again.",
//       details: error.message
//     });
//   }
// };

// // Get user's own feedback history
// const getUserFeedback = async (req, res) => {
//   try {
//     const user = req.user;
//     const { page = 1, limit = 10 } = req.query;
    
//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);
//     const skip = (pageNumber - 1) * limitNumber;

//     // Fetch user's feedback with pagination
//     const feedback = await Feedback
//       .find({ userId: user._id })
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limitNumber)
//       .lean();

//     // Get total count for pagination
//     const totalFeedback = await Feedback.countDocuments({ userId: user._id });
//     const totalPages = Math.ceil(totalFeedback / limitNumber);

//     res.json({
//       success: true,
//       data: {
//         feedback,
//         pagination: {
//           currentPage: pageNumber,
//           totalPages,
//           totalFeedback,
//           hasNextPage: pageNumber < totalPages,
//           hasPreviousPage: pageNumber > 1
//         }
//       }
//     });

//   } catch (error) {
//     console.error("Error fetching user feedback:", error);
//     res.status(500).json({
//       error: "Failed to fetch feedback history",
//       details: error.message
//     });
//   }
// };

// // Get all feedback (Admin only)
// const getAllFeedback = async (req, res) => {
//   try {
//     const { page = 1, limit = 10, status = 'all', rating = 'all' } = req.query;
    
//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);
//     const skip = (pageNumber - 1) * limitNumber;

//     // Build filter object
//     const filter = {};
//     if (status !== 'all') {
//       filter.status = status;
//     }
//     if (rating !== 'all') {
//       filter.rating = parseInt(rating);
//     }

//     // Fetch feedback with filters and pagination
//     const feedback = await Feedback
//       .find(filter)
//       .populate('userId', 'name email')
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limitNumber)
//       .lean();

//     // Get total count for pagination
//     const totalFeedback = await Feedback.countDocuments(filter);
//     const totalPages = Math.ceil(totalFeedback / limitNumber);

//     // Calculate stats
//     const stats = {
//       total: await Feedback.countDocuments(),
//       pending: await Feedback.countDocuments({ status: 'pending' }),
//       reviewed: await Feedback.countDocuments({ status: 'reviewed' }),
//       archived: await Feedback.countDocuments({ status: 'archived' }),
//       averageRating: 0,
//       ratingDistribution: {
//         1: await Feedback.countDocuments({ rating: 1 }),
//         2: await Feedback.countDocuments({ rating: 2 }),
//         3: await Feedback.countDocuments({ rating: 3 }),
//         4: await Feedback.countDocuments({ rating: 4 }),
//         5: await Feedback.countDocuments({ rating: 5 })
//       }
//     };

//     // Calculate average rating
//     const avgResult = await Feedback.aggregate([
//       { $group: { _id: null, avgRating: { $avg: "$rating" } } }
//     ]);
//     stats.averageRating = avgResult.length > 0 ? Math.round(avgResult[0].avgRating * 10) / 10 : 0;

//     res.json({
//       success: true,
//       data: {
//         feedback,
//         stats,
//         pagination: {
//           currentPage: pageNumber,
//           totalPages,
//           totalFeedback,
//           hasNextPage: pageNumber < totalPages,
//           hasPreviousPage: pageNumber > 1
//         }
//       }
//     });

//   } catch (error) {
//     console.error("Error fetching feedback:", error);
//     res.status(500).json({
//       error: "Failed to fetch feedback",
//       details: error.message
//     });
//   }
// };

// // Update feedback status (Admin only)
// const updateFeedbackStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     // Validate status
//     if (!['pending', 'reviewed', 'archived'].includes(status)) {
//       return res.status(400).json({
//         error: "Invalid status. Must be 'pending', 'reviewed', or 'archived'"
//       });
//     }

//     const feedback = await Feedback.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true, runValidators: true }
//     );

//     if (!feedback) {
//       return res.status(404).json({
//         error: "Feedback not found"
//       });
//     }

//     res.json({
//       success: true,
//       message: "Feedback status updated successfully",
//       feedback
//     });

//   } catch (error) {
//     console.error("Error updating feedback status:", error);
//     res.status(500).json({
//       error: "Failed to update feedback status",
//       details: error.message
//     });
//   }
// };

// // Get single feedback by ID (Admin only)
// const getFeedbackById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const feedback = await Feedback
//       .findById(id)
//       .populate('userId', 'name email')
//       .lean();

//     if (!feedback) {
//       return res.status(404).json({
//         error: "Feedback not found"
//       });
//     }

//     res.json({
//       success: true,
//       data: feedback
//     });

//   } catch (error) {
//     console.error("Error fetching feedback:", error);
//     res.status(500).json({
//       error: "Failed to fetch feedback",
//       details: error.message
//     });
//   }
// };

// // Delete feedback (Admin only)
// const deleteFeedback = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedFeedback = await Feedback.findByIdAndDelete(id);

//     if (!deletedFeedback) {
//       return res.status(404).json({
//         error: "Feedback not found"
//       });
//     }

//     res.json({
//       success: true,
//       message: "Feedback deleted successfully"
//     });

//   } catch (error) {
//     console.error("Error deleting feedback:", error);
//     res.status(500).json({
//       error: "Failed to delete feedback",
//       details: error.message
//     });
//   }
// };

// export {
//   submitFeedback,
//   getUserFeedback,
//   getAllFeedback,
//   updateFeedbackStatus,
//   getFeedbackById,
//   deleteFeedback
// };






import Feedback from "../models/feedback.model.js";
import User from "../models/user.model.js"; // Assuming you have a user model
import historyModel from "../models/history.model.js";

// Submit feedback (for logged-in users)
const submitFeedback = async (req, res) => {
  try {
    const { rating, message } = req.body;
    const user = req.user; // From auth middleware

    // Validate required fields
    if (!rating || !message) {
      return res.status(400).json({
        error: "Rating and message are required"
      });
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        error: "Rating must be between 1 and 5"
      });
    }

    // Validate message length
    if (message.trim().length > 1000) {
      return res.status(400).json({
        error: "Message cannot exceed 1000 characters"
      });
    }

    // Create new feedback
    const newFeedback = new Feedback({
      userId: user._id,
      name: user.name,
      email: user.email,
      rating: parseInt(rating),
      message: message.trim()
    });

    // Save to database
    await newFeedback.save();

    // Create history record for feedback submission
    await historyModel.create({
      user: user._id,
      action: 'submitted',
      targetType: 'Feedback',
      targetId: newFeedback._id,
      details: {
        feedback: {
          rating: newFeedback.rating,
          messageLength: newFeedback.message.length,
          status: newFeedback.status
        },
        submitter: {
          userId: user._id,
          name: user.name,
          email: user.email
        }
      }
    });

    res.status(201).json({
      success: true,
      message: "Thank you for your feedback! We appreciate your input.",
      feedbackId: newFeedback._id
    });

  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({
      error: "Failed to submit feedback. Please try again.",
      details: error.message
    });
  }
};

// Get user's own feedback history
const getUserFeedback = async (req, res) => {
  try {
    const user = req.user;
    const { page = 1, limit = 10 } = req.query;
    
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Fetch user's feedback with pagination
    const feedback = await Feedback
      .find({ userId: user._id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNumber)
      .lean();

    // Get total count for pagination
    const totalFeedback = await Feedback.countDocuments({ userId: user._id });
    const totalPages = Math.ceil(totalFeedback / limitNumber);

    res.json({
      success: true,
      data: {
        feedback,
        pagination: {
          currentPage: pageNumber,
          totalPages,
          totalFeedback,
          hasNextPage: pageNumber < totalPages,
          hasPreviousPage: pageNumber > 1
        }
      }
    });

  } catch (error) {
    console.error("Error fetching user feedback:", error);
    res.status(500).json({
      error: "Failed to fetch feedback history",
      details: error.message
    });
  }
};

// Get all feedback (Admin only)
const getAllFeedback = async (req, res) => {
  try {
    const { page = 1, limit = 10, status = 'all', rating = 'all' } = req.query;
    
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Build filter object
    const filter = {};
    if (status !== 'all') {
      filter.status = status;
    }
    if (rating !== 'all') {
      filter.rating = parseInt(rating);
    }

    // Fetch feedback with filters and pagination
    const feedback = await Feedback
      .find(filter)
      .populate('userId', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNumber)
      .lean();

    // Get total count for pagination
    const totalFeedback = await Feedback.countDocuments(filter);
    const totalPages = Math.ceil(totalFeedback / limitNumber);

    // Calculate stats
    const stats = {
      total: await Feedback.countDocuments(),
      pending: await Feedback.countDocuments({ status: 'pending' }),
      reviewed: await Feedback.countDocuments({ status: 'reviewed' }),
      archived: await Feedback.countDocuments({ status: 'archived' }),
      averageRating: 0,
      ratingDistribution: {
        1: await Feedback.countDocuments({ rating: 1 }),
        2: await Feedback.countDocuments({ rating: 2 }),
        3: await Feedback.countDocuments({ rating: 3 }),
        4: await Feedback.countDocuments({ rating: 4 }),
        5: await Feedback.countDocuments({ rating: 5 })
      }
    };

    // Calculate average rating
    const avgResult = await Feedback.aggregate([
      { $group: { _id: null, avgRating: { $avg: "$rating" } } }
    ]);
    stats.averageRating = avgResult.length > 0 ? Math.round(avgResult[0].avgRating * 10) / 10 : 0;

    res.json({
      success: true,
      data: {
        feedback,
        stats,
        pagination: {
          currentPage: pageNumber,
          totalPages,
          totalFeedback,
          hasNextPage: pageNumber < totalPages,
          hasPreviousPage: pageNumber > 1
        }
      }
    });

  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({
      error: "Failed to fetch feedback",
      details: error.message
    });
  }
};

// Update feedback status (Admin only)
const updateFeedbackStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    if (!['pending', 'reviewed', 'archived'].includes(status)) {
      return res.status(400).json({
        error: "Invalid status. Must be 'pending', 'reviewed', or 'archived'"
      });
    }

    // Get feedback before update to track previous state
    const feedbackBeforeUpdate = await Feedback.findById(id);
    if (!feedbackBeforeUpdate) {
      return res.status(404).json({
        error: "Feedback not found"
      });
    }

    const feedback = await Feedback.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    // Create history record for feedback status update
    await historyModel.create({
      user: req.user._id,
      action: 'status_updated',
      targetType: 'Feedback',
      targetId: id,
      details: {
        statusChange: {
          from: feedbackBeforeUpdate.status,
          to: status
        },
        feedback: {
          rating: feedback.rating,
          submittedBy: feedbackBeforeUpdate.name,
          submittedByEmail: feedbackBeforeUpdate.email,
          originalSubmissionDate: feedbackBeforeUpdate.createdAt
        },
        admin: {
          adminId: req.user._id,
          adminName: req.user.name || req.user.username,
          adminEmail: req.user.email
        }
      }
    });

    res.json({
      success: true,
      message: "Feedback status updated successfully",
      feedback
    });

  } catch (error) {
    console.error("Error updating feedback status:", error);
    res.status(500).json({
      error: "Failed to update feedback status",
      details: error.message
    });
  }
};

// Get single feedback by ID (Admin only)
const getFeedbackById = async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await Feedback
      .findById(id)
      .populate('userId', 'name email')
      .lean();

    if (!feedback) {
      return res.status(404).json({
        error: "Feedback not found"
      });
    }

    res.json({
      success: true,
      data: feedback
    });

  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({
      error: "Failed to fetch feedback",
      details: error.message
    });
  }
};

// Delete feedback (Admin only)
const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    const feedbackToDelete = await Feedback.findById(id);
    if (!feedbackToDelete) {
      return res.status(404).json({
        error: "Feedback not found"
      });
    }

    // Store feedback data before deletion for history
    const deletedFeedbackData = {
      rating: feedbackToDelete.rating,
      message: feedbackToDelete.message,
      status: feedbackToDelete.status,
      submittedBy: feedbackToDelete.name,
      submittedByEmail: feedbackToDelete.email,
      submittedByUserId: feedbackToDelete.userId,
      originalSubmissionDate: feedbackToDelete.createdAt
    };

    const deletedFeedback = await Feedback.findByIdAndDelete(id);

    // Create history record for feedback deletion
    await historyModel.create({
      user: req.user._id,
      action: 'deleted',
      targetType: 'Feedback',
      targetId: id,
      details: {
        deletedFeedback: deletedFeedbackData,
        admin: {
          adminId: req.user._id,
          adminName: req.user.name || req.user.username,
          adminEmail: req.user.email
        },
        deletionReason: req.body?.reason || 'No reason provided'
      }
    });

    res.json({
      success: true,
      message: "Feedback deleted successfully"
    });

  } catch (error) {
    console.error("Error deleting feedback:", error);
    res.status(500).json({
      error: "Failed to delete feedback",
      details: error.message
    });
  }
};

export {
  submitFeedback,
  getUserFeedback,
  getAllFeedback,
  updateFeedbackStatus,
  getFeedbackById,
  deleteFeedback
};