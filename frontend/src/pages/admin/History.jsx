import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Calendar,
  User,
  Activity,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Download,
  RefreshCw,
  AlertCircle,
  BarChart3,
  Clock,
  TrendingUp,
  X
} from "lucide-react";
import axios from "axios";

const AdminHistoryPage = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);
  const [filterOptions, setFilterOptions] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Filter and pagination state
  const [filters, setFilters] = useState({
    page: 1,
    limit: 20,
    action: 'all',
    targetType: 'all',
    userId: 'all',
    dateFrom: '',
    dateTo: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalHistory: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    showing: ''
  });

  // Fetch history data
  useEffect(() => {
    fetchHistoryData();
  }, [filters]);

  const fetchHistoryData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      const queryParams = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== 'all') {
          queryParams.append(key, value);
        }
      });

      const response = await axios.get(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/history/admin?${queryParams.toString()}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.success) {
        setHistoryData(response.data.data.history);
        setStats(response.data.data.stats);
        setFilterOptions(response.data.data.filterOptions);
        setPagination(response.data.data.pagination);
      }
    } catch (err) {
      console.error("Error fetching history:", err);
      setError(err.response?.data?.error || "Failed to fetch history data");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: 1 // Reset to first page when filters change
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters(prev => ({
      ...prev,
      page: newPage
    }));
  };

  const viewDetails = async (historyId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/history/admin/history/${historyId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.success) {
        setSelectedItem(response.data.data);
        setShowDetailModal(true);
      }
    } catch (err) {
      console.error("Error fetching history details:", err);
      setError("Failed to fetch history details");
    }
  };

  const getActionIcon = (action) => {
    const icons = {
      'created': '➕',
      'updated': '✏️',
      'deleted': '🗑️',
      'submitted': '📋',
      'shared': '📤',
      'self-registered': '🎉',
      'status_updated': '🔄',
      'self_deleted_account': '❌'
    };
    return icons[action] || '📌';
  };

  const getActionColor = (action) => {
    const colors = {
      'created': 'bg-green-100 text-green-800',
      'updated': 'bg-blue-100 text-blue-800',
      'deleted': 'bg-red-100 text-red-800',
      'submitted': 'bg-purple-100 text-purple-800',
      'shared': 'bg-orange-100 text-orange-800',
      'self-registered': 'bg-pink-100 text-pink-800',
      'status_updated': 'bg-yellow-100 text-yellow-800',
      'self_deleted_account': 'bg-gray-100 text-gray-800'
    };
    return colors[action] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return date.toLocaleDateString();
  };

  if (loading && !historyData.length) {
    return (
      <div className="flex bg-gray-50 min-h-screen">
        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading history data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">System Activity History</h1>
                <p className="text-gray-600">Monitor and track all system activities and user actions</p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={fetchHistoryData}
                  className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-red-700">{error}</span>
              <button onClick={() => setError(null)} className="ml-auto text-red-500 hover:text-red-700">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Statistics Cards */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Activities</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.total?.toLocaleString()}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-purple-500" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Today</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.recentActivity}</p>
                  </div>
                  <Clock className="w-8 h-8 text-blue-500" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">This Week</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.thisWeek}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.thisMonth}</p>
                  </div>
                  <Activity className="w-8 h-8 text-orange-500" />
                </div>
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Action Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
                <select
                  value={filters.action}
                  onChange={(e) => handleFilterChange('action', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Actions</option>
                  {filterOptions?.actions?.map(action => (
                    <option key={action} value={action}>{action}</option>
                  ))}
                </select>
              </div>

              {/* Target Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Type</label>
                <select
                  value={filters.targetType}
                  onChange={(e) => handleFilterChange('targetType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Types</option>
                  {filterOptions?.targetTypes?.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* User Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User</label>
                <select
                  value={filters.userId}
                  onChange={(e) => handleFilterChange('userId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Users</option>
                  {filterOptions?.users?.map(user => (
                    <option key={user._id} value={user._id}>
                      {user.name} ({user.email})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date From */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
                <input
                  type="date"
                  value={filters.dateFrom}
                  onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Date To */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
                <input
                  type="date"
                  value={filters.dateTo}
                  onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort Order</label>
                <select
                  value={filters.sortOrder}
                  onChange={(e) => handleFilterChange('sortOrder', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="desc">Newest First</option>
                  <option value="asc">Oldest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* History Table */}
          <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 md:p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Activity History</h3>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span className="text-sm">{pagination.showing}</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Target
                    </th>
                    <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-4 py-3 md:px-6 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                        <div className="animate-pulse">Loading history...</div>
                      </td>
                    </tr>
                  ) : historyData.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                        No history data found for the selected filters.
                      </td>
                    </tr>
                  ) : (
                    historyData.map((item) => (
                      <tr key={item._id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{getActionIcon(item.action)}</span>
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getActionColor(item.action)}`}>
                              {item.action}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {item.user?.name || 'Unknown User'}
                            </p>
                            <p className="text-xs text-gray-500">{item.user?.email}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">{item.targetType}</span>
                        </td>
                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm text-gray-900">{formatDate(item.createdAt)}</p>
                            <p className="text-xs text-gray-500">{formatTimeAgo(item.createdAt)}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                          <button
                            onClick={() => viewDetails(item._id)}
                            className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center space-x-1"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="px-4 py-3 md:px-6 md:py-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">
                    Page {pagination.currentPage} of {pagination.totalPages}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={!pagination.hasPreviousPage}
                    className="p-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    disabled={!pagination.hasNextPage}
                    className="p-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedItem && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-xl">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Activity Details</h3>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Basic Information</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Action:</span>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getActionColor(selectedItem.historyItem.action)}`}>
                        {selectedItem.historyItem.action}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target Type:</span>
                      <span className="font-medium">{selectedItem.historyItem.targetType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{formatDate(selectedItem.historyItem.createdAt)}</span>
                    </div>
                  </div>
                </div>

                {/* User Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">User Information</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{selectedItem.historyItem.user?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{selectedItem.historyItem.user?.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Role:</span>
                      <span className="font-medium capitalize">{selectedItem.historyItem.user?.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Activity Details</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {JSON.stringify(selectedItem.historyItem.details, null, 2)}
                  </pre>
                </div>
              </div>

              {/* Related Activities */}
              {selectedItem.relatedHistory?.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Related Activities (Same Day)
                  </h4>
                  <div className="space-y-2">
                    {selectedItem.relatedHistory.map((related) => (
                      <div key={related._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm">{getActionIcon(related.action)}</span>
                          <span className="text-sm font-medium">{related.action}</span>
                          <span className="text-sm text-gray-600">{related.targetType}</span>
                        </div>
                        <span className="text-xs text-gray-500">{formatTimeAgo(related.createdAt)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHistoryPage;