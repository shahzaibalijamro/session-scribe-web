// import Query from "../models/queries.model.js";

// // Save a new query (for contact form)
// const saveQuery = async (req, res) => {
//   try {
//     const { firstName, lastName, email, phoneNumber, message } = req.body;

//     // Validate required fields
//     if (!firstName || !lastName || !email || !phoneNumber || !message) {
//       return res.status(400).json({
//         error: "All fields are required"
//       });
//     }

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         error: "Please provide a valid email address"
//       });
//     }

//     // Create new query
//     const newQuery = new Query({
//       firstName: firstName.trim(),
//       lastName: lastName.trim(),
//       email: email.trim().toLowerCase(),
//       phoneNumber: phoneNumber.trim(),
//       message: message.trim()
//     });

//     // Save to database
//     await newQuery.save();

//     res.status(201).json({
//       success: true,
//       message: "Your query has been submitted successfully! We'll get back to you soon.",
//       queryId: newQuery._id
//     });

//   } catch (error) {
//     console.error("Error saving query:", error);
//     res.status(500).json({
//       error: "Failed to submit your query. Please try again.",
//       details: error.message
//     });
//   }
// };

// // Fetch all queries (for admin)
// const fetchQueries = async (req, res) => {
//   try {
//     const { page = 1, limit = 10, status = 'all' } = req.query;
    
//     // Convert to numbers
//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);
//     const skip = (pageNumber - 1) * limitNumber;

//     // Fetch queries with pagination, sorted by most recent first
//     const queries = await Query
//       .find()
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limitNumber)
//       .lean();

//     // Get total count for pagination
//     const totalQueries = await Query.countDocuments();
//     const totalPages = Math.ceil(totalQueries / limitNumber);

//     res.json({
//       success: true,
//       data: {
//         queries,
//         pagination: {
//           currentPage: pageNumber,
//           totalPages,
//           totalQueries,
//           hasNextPage: pageNumber < totalPages,
//           hasPreviousPage: pageNumber > 1
//         }
//       }
//     });

//   } catch (error) {
//     console.error("Error fetching queries:", error);
//     res.status(500).json({
//       error: "Failed to fetch queries",
//       details: error.message
//     });
//   }
// };

// // Get single query by ID (for admin)
// const getQueryById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const query = await Query.findById(id).lean();

//     if (!query) {
//       return res.status(404).json({
//         error: "Query not found"
//       });
//     }

//     res.json({
//       success: true,
//       data: query
//     });

//   } catch (error) {
//     console.error("Error fetching query:", error);
//     res.status(500).json({
//       error: "Failed to fetch query",
//       details: error.message
//     });
//   }
// };

// // Delete query (for admin)
// const deleteQuery = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedQuery = await Query.findByIdAndDelete(id);

//     if (!deletedQuery) {
//       return res.status(404).json({
//         error: "Query not found"
//       });
//     }

//     res.json({
//       success: true,
//       message: "Query deleted successfully"
//     });

//   } catch (error) {
//     console.error("Error deleting query:", error);
//     res.status(500).json({
//       error: "Failed to delete query",
//       details: error.message
//     });
//   }
// };

// export {
//   saveQuery,
//   fetchQueries,
//   getQueryById,
//   deleteQuery
// };


import Query from "../models/queries.model.js";
import historyModel from "../models/history.model.js";

// Save a new query (for contact form)
const saveQuery = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Please provide a valid email address"
      });
    }

    // Create new query
    const newQuery = new Query({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phoneNumber: phoneNumber.trim(),
      message: message.trim()
    });

    // Save to database
    await newQuery.save();

    res.status(201).json({
      success: true,
      message: "Your query has been submitted successfully! We'll get back to you soon.",
      queryId: newQuery._id
    });

  } catch (error) {
    console.error("Error saving query:", error);
    res.status(500).json({
      error: "Failed to submit your query. Please try again.",
      details: error.message
    });
  }
};

// Fetch all queries (for admin)
const fetchQueries = async (req, res) => {
  try {
    const { page = 1, limit = 10, status = 'all' } = req.query;
    
    // Convert to numbers
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Fetch queries with pagination, sorted by most recent first
    const queries = await Query
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNumber)
      .lean();

    // Get total count for pagination
    const totalQueries = await Query.countDocuments();
    const totalPages = Math.ceil(totalQueries / limitNumber);

    res.json({
      success: true,
      data: {
        queries,
        pagination: {
          currentPage: pageNumber,
          totalPages,
          totalQueries,
          hasNextPage: pageNumber < totalPages,
          hasPreviousPage: pageNumber > 1
        }
      }
    });

  } catch (error) {
    console.error("Error fetching queries:", error);
    res.status(500).json({
      error: "Failed to fetch queries",
      details: error.message
    });
  }
};

// Get single query by ID (for admin)
const getQueryById = async (req, res) => {
  try {
    const { id } = req.params;

    const query = await Query.findById(id).lean();

    if (!query) {
      return res.status(404).json({
        error: "Query not found"
      });
    }

    res.json({
      success: true,
      data: query
    });

  } catch (error) {
    console.error("Error fetching query:", error);
    res.status(500).json({
      error: "Failed to fetch query",
      details: error.message
    });
  }
};

// Delete query (for admin)
const deleteQuery = async (req, res) => {
  try {
    const { id } = req.params;

    // Get query data before deletion for history
    const queryToDelete = await Query.findById(id);
    if (!queryToDelete) {
      return res.status(404).json({
        error: "Query not found"
      });
    }

    // Store query data for history
    const deletedQueryData = {
      firstName: queryToDelete.firstName,
      lastName: queryToDelete.lastName,
      fullName: `${queryToDelete.firstName} ${queryToDelete.lastName}`,
      email: queryToDelete.email,
      phoneNumber: queryToDelete.phoneNumber,
      message: queryToDelete.message,
      messageLength: queryToDelete.message.length,
      submittedAt: queryToDelete.createdAt,
      daysSinceSubmission: Math.floor((new Date() - queryToDelete.createdAt) / (1000 * 60 * 60 * 24))
    };

    // Delete the query
    const deletedQuery = await Query.findByIdAndDelete(id);

    // Create history record for query deletion
    await historyModel.create({
      user: req.user._id,
      action: 'deleted',
      targetType: 'ContactQuery',
      targetId: id,
      details: {
        deletedQuery: deletedQueryData,
        admin: {
          adminId: req.user._id,
          adminName: req.user.name || req.user.username,
          adminEmail: req.user.email
        },
        deletionReason: req.body?.reason || 'Admin deleted contact query',
        summary: `Deleted contact query from ${deletedQueryData.fullName} (${deletedQueryData.email}) - ${deletedQueryData.daysSinceSubmission} days old`
      }
    });

    res.json({
      success: true,
      message: "Query deleted successfully"
    });

  } catch (error) {
    console.error("Error deleting query:", error);
    res.status(500).json({
      error: "Failed to delete query",
      details: error.message
    });
  }
};

export {
  saveQuery,
  fetchQueries,
  getQueryById,
  deleteQuery
};