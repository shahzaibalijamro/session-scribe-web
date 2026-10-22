import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Filter,
  AlertCircle,
  Calendar,
  Mail,
  Star,
  Trash2,
  Eye,
  RefreshCw,
  Clock,
  User,
  X,
  CheckCircle,
  Archive,
  Clock as PendingIcon,
  TrendingUp
} from 'lucide-react';

const AdminFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [deleting, setDeleting] = useState({});
  const [updating, setUpdating] = useState({});
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    reviewed: 0,
    archived: 0,
    averageRating: 0,
    ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/feedback/admin', {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFeedback(result.data.feedback);
        setStats(result.data.stats);
      } else {
        setError(result.error || 'Failed to fetch feedback');
      }
    } catch (err) {
      console.error('Failed to fetch feedback:', err);
      setError('Unable to load feedback');
    } finally {
      setLoading(false);
    }
  };

  const updateFeedbackStatus = async (feedbackId, newStatus) => {
    try {
      setUpdating(prev => ({ ...prev, [feedbackId]: true }));

      const token = localStorage.getItem('token');
      const response = await fetch(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/feedback/admin/${feedbackId}/status`, {
        method: 'PATCH',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Update local state
        setFeedback(prevFeedback =>
          prevFeedback.map(fb =>
            fb._id === feedbackId ? { ...fb, status: newStatus } : fb
          )
        );

        // Update stats
        setStats(prevStats => {
          const newStats = { ...prevStats };
          // This is a simplified update - in a real app you'd recalculate properly
          return newStats;
        });

        // Update selected feedback if it's currently open
        if (selectedFeedback && selectedFeedback._id === feedbackId) {
          setSelectedFeedback(prev => ({ ...prev, status: newStatus }));
        }
      } else {
        alert(result.error || 'Failed to update feedback status');
      }
    } catch (err) {
      console.error('Failed to update feedback status:', err);
      alert('Failed to update feedback status');
    } finally {
      setUpdating(prev => ({ ...prev, [feedbackId]: false }));
    }
  };

  const deleteFeedback = async (feedbackId) => {
    if (!window.confirm('Are you sure you want to delete this feedback? This action cannot be undone.')) {
      return;
    }

    try {
      setDeleting(prev => ({ ...prev, [feedbackId]: true }));

      const token = localStorage.getItem('token');
      const response = await fetch(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/feedback/admin/${feedbackId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFeedback(prevFeedback => prevFeedback.filter(fb => fb._id !== feedbackId));
        // Recalculate stats would go here
      } else {
        alert(result.error || 'Failed to delete feedback');
      }
    } catch (err) {
      console.error('Failed to delete feedback:', err);
      alert('Failed to delete feedback');
    } finally {
      setDeleting(prev => ({ ...prev, [feedbackId]: false }));
    }
  };

  const viewFeedback = (feedbackItem) => {
    setSelectedFeedback(feedbackItem);
    setShowModal(true);
  };

  const StarRating = ({ rating, size = 'sm' }) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  const StatusBadge = ({ status, feedbackId, onStatusChange, isUpdating }) => {
    const statusConfig = {
      pending: {
        color: 'bg-yellow-100 text-yellow-800',
        icon: Clock,
        label: 'Pending'
      },
      reviewed: {
        color: 'bg-green-100 text-green-800',
        icon: CheckCircle,
        label: 'Reviewed'
      },
      archived: {
        color: 'bg-gray-100 text-gray-800',
        icon: Archive,
        label: 'Archived'
      }
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <div className="flex items-center space-x-2">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
          <Icon className="w-3 h-3 mr-1" />
          {config.label}
        </span>
        {onStatusChange && (
          <select
            value={status}
            onChange={(e) => onStatusChange(feedbackId, e.target.value)}
            disabled={isUpdating}
            className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
          >
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="archived">Archived</option>
          </select>
        )}
      </div>
    );
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, color = "bg-purple-500", textColor = "text-white" }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center">
        <div className={`${color} rounded-xl p-3 mr-4`}>
          <Icon className={`w-6 h-6 ${textColor}`} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );

  const filteredFeedback = feedback.filter(fb => {
    const matchesSearch =
      fb.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fb.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fb.message?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || fb.status === statusFilter;
    const matchesRating = ratingFilter === 'all' || fb.rating.toString() === ratingFilter;

    const feedbackDate = new Date(fb.createdAt);
    const now = new Date();

    let matchesDate = true;
    if (dateFilter === 'today') {
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      matchesDate = feedbackDate >= today;
    } else if (dateFilter === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      matchesDate = feedbackDate >= weekAgo;
    } else if (dateFilter === 'month') {
      const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      matchesDate = feedbackDate >= monthAgo;
    }

    return matchesSearch && matchesStatus && matchesRating && matchesDate;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateMessage = (message, maxLength = 80) => {
    return message.length > maxLength ? message.substring(0, maxLength) + '...' : message;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
            <span className="ml-4 text-gray-600">Loading feedback...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Access Denied</h3>
            <p className="text-gray-500 mb-4">{error}</p>
            <button
              onClick={fetchFeedback}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-semibold text-purple-500">User Feedback</h1>
          </div>
          <button
            onClick={fetchFeedback}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
        </div>

        {/* Stats Overview */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={MessageCircle}
            title="Total Feedback"
            value={stats.total}
            subtitle="All submissions"
            color="bg-purple-500"
          />
          <StatCard
            icon={TrendingUp}
            title="Average Rating"
            value={stats.averageRating}
            subtitle="Out of 5 stars"
            color="bg-blue-500"
          />
          <StatCard
            icon={Clock}
            title="Pending Review"
            value={stats.pending}
            subtitle="Needs attention"
            color="bg-yellow-500"
          />
          <StatCard
            icon={CheckCircle}
            title="Reviewed"
            value={stats.reviewed}
            subtitle="Completed"
            color="bg-green-500"
          />
        </div> */}

        {/* Rating Distribution */}
        {/* <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Rating Distribution</h2>
          <div className="grid grid-cols-5 gap-4">
            {Object.entries(stats.ratingDistribution).map(([rating, count]) => (
              <div key={rating} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-2">
                  <StarRating rating={parseInt(rating)} size="sm" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{count}</div>
                <div className="text-sm text-gray-600">{rating} star{rating !== '1' ? 's' : ''}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <MessageCircle className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, or message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="reviewed">Reviewed</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Feedback Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-purple-200 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-2">User Info</div>
              <div className="col-span-1">Rating</div>
              <div className="col-span-3">Message</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2">Actions</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
            {filteredFeedback.length > 0 ? filteredFeedback.map((fb) => (
              <div key={fb._id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                  {/* User Info */}
                  <div className="col-span-2">
                    <div className="font-medium text-gray-900">{fb.name}</div>
                    <div className="text-gray-500 text-xs truncate">{fb.email}</div>
                  </div>

                  {/* Rating */}
                  <div className="col-span-1">
                    <StarRating rating={fb.rating} size="sm" />
                  </div>

                  {/* Message */}
                  <div className="col-span-3">
                    <p className="text-gray-800 text-sm">
                      {truncateMessage(fb.message)}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <StatusBadge
                      status={fb.status}
                      feedbackId={fb._id}
                      onStatusChange={updateFeedbackStatus}
                      isUpdating={updating[fb._id]}
                    />
                  </div>

                  {/* Date */}
                  <div className="col-span-2">
                    <div className="text-gray-600 text-sm">
                      {formatDate(fb.createdAt)}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="col-span-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => viewFeedback(fb)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteFeedback(fb._id)}
                        disabled={deleting[fb._id]}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        title="Delete Feedback"
                      >
                        {deleting[fb._id] ? (
                          <div className="w-4 h-4 animate-spin border-2 border-red-600 border-t-transparent rounded-full"></div>
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="px-6 py-12 text-center text-gray-500">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No feedback found matching your filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Showing {filteredFeedback.length} of {feedback.length} feedback
        </div>

        {/* Feedback Details Modal */}
        {showModal && selectedFeedback && (
          <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center p-4 z-[1000] transition-all duration-300">
            {/* Modal content */}
            <div className="relative bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Feedback Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* User Information */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    User Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Name</label>
                      <p className="text-gray-800">{selectedFeedback.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-800">{selectedFeedback.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Rating</label>
                      <div className="mt-1">
                        <StarRating rating={selectedFeedback.rating} size="md" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Submitted</label>
                      <p className="text-gray-800">{formatDate(selectedFeedback.createdAt)}</p>
                    </div>
                  </div>
                </div>

                {/* Feedback Message */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Feedback Message
                  </h3>
                  <div className="bg-white rounded-lg p-4 border">
                    <p className="text-gray-800 whitespace-pre-wrap">{selectedFeedback.message}</p>
                  </div>
                </div>

                {/* Status Management */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Status Management</h3>
                  <div className="flex items-center space-x-4">
                    <StatusBadge status={selectedFeedback.status} />
                    <select
                      value={selectedFeedback.status}
                      onChange={(e) => updateFeedbackStatus(selectedFeedback._id, e.target.value)}
                      disabled={updating[selectedFeedback._id]}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="pending">Mark as Pending</option>
                      <option value="reviewed">Mark as Reviewed</option>
                      <option value="archived">Archive</option>
                    </select>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      deleteFeedback(selectedFeedback._id);
                      setShowModal(false);
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminFeedback;