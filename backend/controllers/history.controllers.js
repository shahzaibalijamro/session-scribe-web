import historyModel from "../models/history.model.js";
import User from "../models/user.model.js";

export const getAdminHistory = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        error: "Access denied. Admin privileges required."
      });
    }

    const { 
      page = 1, 
      limit = 20, 
      action = 'all', 
      targetType = 'all',
      userId = 'all',
      dateFrom,
      dateTo,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Build filter object
    const filter = {};
    
    if (action !== 'all') {
      filter.action = action;
    }
    
    if (targetType !== 'all') {
      filter.targetType = targetType;
    }
    
    if (userId !== 'all') {
      filter.user = userId;
    }
    
    // Date range filter
    if (dateFrom || dateTo) {
      filter.createdAt = {};
      if (dateFrom) {
        filter.createdAt.$gte = new Date(dateFrom);
      }
      if (dateTo) {
        filter.createdAt.$lte = new Date(dateTo);
      }
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Fetch history with pagination and populate user info
    const history = await historyModel
      .find(filter)
      .populate('user', 'name email username role')
      .sort(sort)
      .skip(skip)
      .limit(limitNumber)
      .lean();

    // Get total count for pagination
    const totalHistory = await historyModel.countDocuments(filter);
    const totalPages = Math.ceil(totalHistory / limitNumber);

    // Calculate statistics
    const stats = {
      total: await historyModel.countDocuments(),
      byAction: await historyModel.aggregate([
        { $group: { _id: "$action", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      byTargetType: await historyModel.aggregate([
        { $group: { _id: "$targetType", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      byUser: await historyModel.aggregate([
        { $group: { _id: "$user", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]),
      recentActivity: await historyModel.countDocuments({
        createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
      }),
      thisWeek: await historyModel.countDocuments({
        createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
      }),
      thisMonth: await historyModel.countDocuments({
        createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
      })
    };

    // Get available filter options
    const filterOptions = {
      actions: await historyModel.distinct('action'),
      targetTypes: await historyModel.distinct('targetType'),
      users: await User.find({}, 'name email username').lean()
    };

    res.json({
      success: true,
      data: {
        history,
        stats,
        filterOptions,
        pagination: {
          currentPage: pageNumber,
          totalPages,
          totalHistory,
          hasNextPage: pageNumber < totalPages,
          hasPreviousPage: pageNumber > 1,
          showing: `${skip + 1}-${Math.min(skip + limitNumber, totalHistory)} of ${totalHistory}`
        },
        filters: {
          action,
          targetType,
          userId,
          dateFrom,
          dateTo,
          sortBy,
          sortOrder
        }
      }
    });

  } catch (error) {
    console.error("Error fetching admin history:", error);
    res.status(500).json({
      error: "Failed to fetch history data",
      details: error.message
    });
  }
};

// Get detailed history item for admin
export const getAdminHistoryItem = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        error: "Access denied. Admin privileges required."
      });
    }

    const { id } = req.params;

    const historyItem = await historyModel
      .findById(id)
      .populate('user', 'name email username role status createdAt')
      .lean();

    if (!historyItem) {
      return res.status(404).json({
        error: "History item not found"
      });
    }

    // Get related history items (same user, same day)
    const relatedHistory = await historyModel
      .find({
        user: historyItem.user._id,
        createdAt: {
          $gte: new Date(historyItem.createdAt.setHours(0, 0, 0, 0)),
          $lt: new Date(historyItem.createdAt.setHours(23, 59, 59, 999))
        },
        _id: { $ne: historyItem._id }
      })
      .populate('user', 'name email username')
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    res.json({
      success: true,
      data: {
        historyItem,
        relatedHistory
      }
    });

  } catch (error) {
    console.error("Error fetching history item:", error);
    res.status(500).json({
      error: "Failed to fetch history item",
      details: error.message
    });
  }
};

// ================================
// USER HISTORY CONTROLLER
// ================================

export const getUserHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    const { 
      page = 1, 
      limit = 15, 
      action = 'all', 
      targetType = 'all',
      dateFrom,
      dateTo 
    } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Build filter object (only for current user)
    const filter = { user: userId };
    
    if (action !== 'all') {
      filter.action = action;
    }
    
    if (targetType !== 'all') {
      filter.targetType = targetType;
    }
    
    // Date range filter
    if (dateFrom || dateTo) {
      filter.createdAt = {};
      if (dateFrom) {
        filter.createdAt.$gte = new Date(dateFrom);
      }
      if (dateTo) {
        filter.createdAt.$lte = new Date(dateTo);
      }
    }

    // Fetch user's history
    const history = await historyModel
      .find(filter)
      .select('-user') // Don't need user info since it's always the current user
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNumber)
      .lean();

    // Get total count for pagination
    const totalHistory = await historyModel.countDocuments(filter);
    const totalPages = Math.ceil(totalHistory / limitNumber);

    // Calculate user-specific statistics
    const userStats = {
      totalActivities: await historyModel.countDocuments({ user: userId }),
      byAction: await historyModel.aggregate([
        { $match: { user: userId } },
        { $group: { _id: "$action", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      byTargetType: await historyModel.aggregate([
        { $match: { user: userId } },
        { $group: { _id: "$targetType", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      recentActivity: await historyModel.countDocuments({
        user: userId,
        createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
      }),
      thisWeek: await historyModel.countDocuments({
        user: userId,
        createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
      }),
      thisMonth: await historyModel.countDocuments({
        user: userId,
        createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
      }),
      firstActivity: await historyModel.findOne({ user: userId }).sort({ createdAt: 1 }).select('createdAt').lean(),
      lastActivity: await historyModel.findOne({ user: userId }).sort({ createdAt: -1 }).select('createdAt').lean()
    };

    // Get available filter options for this user
    const userFilterOptions = {
      actions: await historyModel.distinct('action', { user: userId }),
      targetTypes: await historyModel.distinct('targetType', { user: userId })
    };

    res.json({
      success: true,
      data: {
        history,
        stats: userStats,
        filterOptions: userFilterOptions,
        pagination: {
          currentPage: pageNumber,
          totalPages,
          totalHistory,
          hasNextPage: pageNumber < totalPages,
          hasPreviousPage: pageNumber > 1,
          showing: `${skip + 1}-${Math.min(skip + limitNumber, totalHistory)} of ${totalHistory}`
        },
        filters: {
          action,
          targetType,
          dateFrom,
          dateTo
        }
      }
    });

  } catch (error) {
    console.error("Error fetching user history:", error);
    res.status(500).json({
      error: "Failed to fetch your activity history",
      details: error.message
    });
  }
};

// Get detailed history item for user (only their own)
export const getUserHistoryItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    const historyItem = await historyModel
      .findOne({
        _id: id,
        user: userId // Ensure user can only see their own history
      })
      .select('-user') // Don't need user info
      .lean();

    if (!historyItem) {
      return res.status(404).json({
        error: "History item not found"
      });
    }

    res.json({
      success: true,
      data: historyItem
    });

  } catch (error) {
    console.error("Error fetching history item:", error);
    res.status(500).json({
      error: "Failed to fetch history item",
      details: error.message
    });
  }
};

// Get user activity summary (dashboard stats)
export const getUserActivitySummary = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get activity summary for dashboard
    const summary = {
      totalActivities: await historyModel.countDocuments({ user: userId }),
      todayActivities: await historyModel.countDocuments({
        user: userId,
        createdAt: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) }
      }),
      weekActivities: await historyModel.countDocuments({
        user: userId,
        createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
      }),
      monthActivities: await historyModel.countDocuments({
        user: userId,
        createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
      }),
      recentActivities: await historyModel
        .find({ user: userId })
        .sort({ createdAt: -1 })
        .limit(5)
        .select('action targetType createdAt details.summary')
        .lean(),
      mostCommonActions: await historyModel.aggregate([
        { $match: { user: userId } },
        { $group: { _id: "$action", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ])
    };

    res.json({
      success: true,
      data: summary
    });

  } catch (error) {
    console.error("Error fetching activity summary:", error);
    res.status(500).json({
      error: "Failed to fetch activity summary",
      details: error.message
    });
  }
};

export const getAllHistory = async (req, res) => {
  try {
    const history = await historyModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: history,
    });
  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch history",
      details: error.message,
    });
  }
};
