// import SupportRequest from "../models/support.model.js";

// // Submit support request
// export const submitSupportRequest = async (req, res) => {
//   try {
//     const { name, email, category, message, includeActivity } = req.body;
//     const { _id: userId } = req.user;

//     // Validation
//     if (!name || !email || !category || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "All required fields must be provided",
//       });
//     }

//     if (message.length < 10) {
//       return res.status(400).json({
//         success: false,
//         message: "Message must be at least 10 characters long",
//       });
//     }

//     const supportRequest = new SupportRequest({
//       userId,
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//       category,
//       message: message.trim(),
//       includeActivity: includeActivity || false,
//     });

//     await supportRequest.save();

//     res.status(201).json({
//       success: true,
//       message: "Support request submitted successfully! We'll get back to you within 24 hours.",
//       supportRequest: {
//         id: supportRequest._id,
//         name: supportRequest.name,
//         email: supportRequest.email,
//         category: supportRequest.category,
//         status: supportRequest.status,
//         createdAt: supportRequest.createdAt,
//       },
//     });
//   } catch (error) {
//     console.error("Error submitting support request:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while submitting support request",
//     });
//   }
// };

// // Get user's support requests
// export const getUserSupportRequests = async (req, res) => {
//   try {
//     const { _id: userId } = req.user;
//     const { page = 1, limit = 10, status } = req.query;

//     const filter = { userId };
//     if (status) filter.status = status;

//     const skip = (page - 1) * limit;

//     const supportRequests = await SupportRequest.find(filter)
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(parseInt(limit))
//       .select('-__v');

//     const total = await SupportRequest.countDocuments(filter);

//     res.status(200).json({
//       success: true,
//       message: "Support requests retrieved successfully",
//       data: {
//         supportRequests,
//         pagination: {
//           currentPage: parseInt(page),
//           totalPages: Math.ceil(total / limit),
//           totalRequests: total,
//           hasNextPage: page * limit < total,
//           hasPrevPage: page > 1,
//         },
//       },
//     });
//   } catch (error) {
//     console.error("Error getting support requests:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while retrieving support requests",
//     });
//   }
// };

// // Get single support request
// export const getSupportRequest = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { _id: userId } = req.user;

//     const supportRequest = await SupportRequest.findOne({
//       _id: id,
//       userId: userId,
//     }).select('-__v');

//     if (!supportRequest) {
//       return res.status(404).json({
//         success: false,
//         message: "Support request not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Support request retrieved successfully",
//       supportRequest,
//     });
//   } catch (error) {
//     console.error("Error getting support request:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while retrieving support request",
//     });
//   }
// };

// // Update support request (for users to add additional info)
// export const updateSupportRequest = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { _id: userId } = req.user;
//     const { message } = req.body;

//     const supportRequest = await SupportRequest.findOne({
//       _id: id,
//       userId: userId,
//     });

//     if (!supportRequest) {
//       return res.status(404).json({
//         success: false,
//         message: "Support request not found",
//       });
//     }

//     if (supportRequest.status === "Closed") {
//       return res.status(400).json({
//         success: false,
//         message: "Cannot update a closed support request",
//       });
//     }

//     if (message) {
//       supportRequest.message += `\n\n--- Additional Information (${new Date().toISOString()}) ---\n${message.trim()}`;
//     }

//     await supportRequest.save();

//     res.status(200).json({
//       success: true,
//       message: "Support request updated successfully",
//       supportRequest,
//     });
//   } catch (error) {
//     console.error("Error updating support request:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while updating support request",
//     });
//   }
// };


import SupportRequest from "../models/support.model.js";
import historyModel from "../models/history.model.js";

// Submit support request
export const submitSupportRequest = async (req, res) => {
  try {
    const { name, email, category, message, includeActivity } = req.body;
    const { _id: userId } = req.user;

    // Validation
    if (!name || !email || !category || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters long",
      });
    }

    const supportRequest = new SupportRequest({
      userId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      category,
      message: message.trim(),
      includeActivity: includeActivity || false,
    });

    await supportRequest.save();

    // Create history record for support request submission
    await historyModel.create({
      user: userId,
      action: 'submitted',
      targetType: 'SupportRequest',
      targetId: supportRequest._id,
      details: {
        supportRequest: {
          category: supportRequest.category,
          messageLength: supportRequest.message.length,
          includeActivity: supportRequest.includeActivity,
          status: supportRequest.status
        },
        submitter: {
          userId: userId,
          name: supportRequest.name,
          email: supportRequest.email
        },
        summary: `Submitted ${category} support request`
      }
    });

    res.status(201).json({
      success: true,
      message: "Support request submitted successfully! We'll get back to you within 24 hours.",
      supportRequest: {
        id: supportRequest._id,
        name: supportRequest.name,
        email: supportRequest.email,
        category: supportRequest.category,
        status: supportRequest.status,
        createdAt: supportRequest.createdAt,
      },
    });
  } catch (error) {
    console.error("Error submitting support request:", error);
    res.status(500).json({
      success: false,
      message: "Server error while submitting support request",
    });
  }
};

// Get user's support requests
export const getUserSupportRequests = async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const { page = 1, limit = 10, status } = req.query;

    const filter = { userId };
    if (status) filter.status = status;

    const skip = (page - 1) * limit;

    const supportRequests = await SupportRequest.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v');

    const total = await SupportRequest.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: "Support requests retrieved successfully",
      data: {
        supportRequests,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalRequests: total,
          hasNextPage: page * limit < total,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    console.error("Error getting support requests:", error);
    res.status(500).json({
      success: false,
      message: "Server error while retrieving support requests",
    });
  }
};

// Get single support request
export const getSupportRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;

    const supportRequest = await SupportRequest.findOne({
      _id: id,
      userId: userId,
    }).select('-__v');

    if (!supportRequest) {
      return res.status(404).json({
        success: false,
        message: "Support request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Support request retrieved successfully",
      supportRequest,
    });
  } catch (error) {
    console.error("Error getting support request:", error);
    res.status(500).json({
      success: false,
      message: "Server error while retrieving support request",
    });
  }
};

// Update support request (for users to add additional info)
export const updateSupportRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;
    const { message } = req.body;

    const supportRequest = await SupportRequest.findOne({
      _id: id,
      userId: userId,
    });

    if (!supportRequest) {
      return res.status(404).json({
        success: false,
        message: "Support request not found",
      });
    }

    if (supportRequest.status === "Closed") {
      return res.status(400).json({
        success: false,
        message: "Cannot update a closed support request",
      });
    }

    // Store original message length for history
    const originalMessageLength = supportRequest.message.length;
    const additionalMessageLength = message ? message.trim().length : 0;

    if (message) {
      supportRequest.message += `\n\n--- Additional Information (${new Date().toISOString()}) ---\n${message.trim()}`;
    }

    await supportRequest.save();

    // Create history record for support request update
    await historyModel.create({
      user: userId,
      action: 'updated',
      targetType: 'SupportRequest',
      targetId: id,
      details: {
        update: {
          type: 'additional_information',
          additionalMessageLength: additionalMessageLength,
          originalMessageLength: originalMessageLength,
          newTotalLength: supportRequest.message.length,
          updateTimestamp: new Date().toISOString()
        },
        supportRequest: {
          category: supportRequest.category,
          status: supportRequest.status,
          originalSubmissionDate: supportRequest.createdAt
        },
        updater: {
          userId: userId,
          name: supportRequest.name,
          email: supportRequest.email
        },
        summary: `Added additional information to ${supportRequest.category} support request`
      }
    });

    res.status(200).json({
      success: true,
      message: "Support request updated successfully",
      supportRequest,
    });
  } catch (error) {
    console.error("Error updating support request:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating support request",
    });
  }
};