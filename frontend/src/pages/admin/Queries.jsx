import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  AlertCircle,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  Trash2,
  Eye,
  RefreshCw,
  Clock,
  User,
  X,
  CheckCircle,
} from "lucide-react";

const AdminQueries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [deleting, setDeleting] = useState({});
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
  });

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      const response = await fetch("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/queries", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setQueries(result.data.queries);
        calculateStats(result.data.queries);
      } else {
        setError(result.error || "Failed to fetch queries");
      }
    } catch (err) {
      console.error("Failed to fetch queries:", err);
      setError("Unable to load queries");
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (queriesData) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const stats = {
      total: queriesData.length,
      today: queriesData.filter((q) => new Date(q.createdAt) >= today).length,
      thisWeek: queriesData.filter((q) => new Date(q.createdAt) >= thisWeek)
        .length,
      thisMonth: queriesData.filter((q) => new Date(q.createdAt) >= thisMonth)
        .length,
    };

    setStats(stats);
  };

  const deleteQuery = async (queryId) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this query? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      setDeleting((prev) => ({ ...prev, [queryId]: true }));

      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/queries/${queryId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setQueries((prevQueries) =>
          prevQueries.filter((q) => q._id !== queryId)
        );
        // Recalculate stats
        const updatedQueries = queries.filter((q) => q._id !== queryId);
        calculateStats(updatedQueries);
      } else {
        alert(result.error || "Failed to delete query");
      }
    } catch (err) {
      console.error("Failed to delete query:", err);
      alert("Failed to delete query");
    } finally {
      setDeleting((prev) => ({ ...prev, [queryId]: false }));
    }
  };

  const viewQuery = (query) => {
    setSelectedQuery(query);
    setShowModal(true);
  };

  const StatCard = ({
    icon: Icon,
    title,
    value,
    subtitle,
    color = "bg-purple-500",
    textColor = "text-white",
  }) => (
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

  const filteredQueries = queries.filter((query) => {
    const matchesSearch =
      query.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.message?.toLowerCase().includes(searchTerm.toLowerCase());

    const queryDate = new Date(query.createdAt);
    const now = new Date();

    let matchesDate = true;
    if (dateFilter === "today") {
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      matchesDate = queryDate >= today;
    } else if (dateFilter === "week") {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      matchesDate = queryDate >= weekAgo;
    } else if (dateFilter === "month") {
      const monthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      matchesDate = queryDate >= monthAgo;
    }

    return matchesSearch && matchesDate;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const truncateMessage = (message, maxLength = 100) => {
    return message.length > maxLength
      ? message.substring(0, maxLength) + "..."
      : message;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
            <span className="ml-4 text-gray-600">Loading queries...</span>
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
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Access Denied
            </h3>
            <p className="text-gray-500 mb-4">{error}</p>
            <button
              onClick={fetchQueries}
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
            <Search className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-semibold text-purple-500">
              Contact Queries
            </h1>
          </div>
          <button
            onClick={fetchQueries}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
        </div>

        {/* Stats Overview */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={MessageSquare}
            title="Total Queries"
            value={stats.total}
            subtitle="All time"
            color="bg-purple-500"
          />
          <StatCard
            icon={Clock}
            title="Today"
            value={stats.today}
            subtitle="New queries today"
            color="bg-blue-500"
          />
          <StatCard
            icon={Calendar}
            title="This Week"
            value={stats.thisWeek}
            subtitle="Last 7 days"
            color="bg-green-500"
          />
          <StatCard
            icon={Mail}
            title="This Month"
            value={stats.thisMonth}
            subtitle="Current month"
            color="bg-orange-500"
          />
        </div> */}

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, or message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
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

        {/* Queries Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-purple-200 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-2">Contact Info</div>
              <div className="col-span-2">Phone</div>
              <div className="col-span-4">Message</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2">Actions</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
            {filteredQueries.length > 0 ? (
              filteredQueries.map((query) => (
                <div
                  key={query._id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="grid grid-cols-12 gap-4 items-center text-sm">
                    {/* Contact Info */}
                    <div className="col-span-2">
                      <div className="font-medium text-gray-900">
                        {query.firstName} {query.lastName}
                      </div>
                      <div className="text-gray-500 text-xs truncate">
                        {query.email}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-span-2">
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-3 h-3 mr-1" />
                        <span className="text-sm">{query.phoneNumber}</span>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-span-4">
                      <p className="text-gray-800 text-sm">
                        {truncateMessage(query.message)}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="col-span-2">
                      <div className="text-gray-600 text-sm">
                        {formatDate(query.createdAt)}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => viewQuery(query)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteQuery(query._id)}
                          disabled={deleting[query._id]}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          title="Delete Query"
                        >
                          {deleting[query._id] ? (
                            <div className="w-4 h-4 animate-spin border-2 border-red-600 border-t-transparent rounded-full"></div>
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No queries found matching your filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Showing {filteredQueries.length} of {queries.length} queries
        </div>

        {/* Query Details Modal */}
        {showModal && selectedQuery && (
          <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center p-4 z-[1000] transition-all duration-300">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-xl border border-gray-200 transform transition-all duration-300 scale-100 opacity-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Query Details
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Full Name
                      </label>
                      <p className="text-gray-800">
                        {selectedQuery.firstName} {selectedQuery.lastName}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <p className="text-gray-800">{selectedQuery.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Phone Number
                      </label>
                      <p className="text-gray-800">
                        {selectedQuery.phoneNumber}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Submitted
                      </label>
                      <p className="text-gray-800">
                        {formatDate(selectedQuery.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Message
                  </h3>
                  <div className="bg-white rounded-lg p-4 border">
                    <p className="text-gray-800 whitespace-pre-wrap">
                      {selectedQuery.message}
                    </p>
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
                      deleteQuery(selectedQuery._id);
                      setShowModal(false);
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete Query
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

export default AdminQueries;
