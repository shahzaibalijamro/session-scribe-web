import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  Plus,
  X,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Trash2,
  Edit,
  VideoIcon as Video,
  MapPin,
  PlayCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ScheduleMeetingPage = () => {
  const [scheduledMeetings, setScheduledMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const navigate = useNavigate();
  // Form states
  const [formData, setFormData] = useState({
    title: "",
    emailRecipients: [""],
    scheduledDateTime: "",
    discussionTopics: [""],
    scheduledDuration: 60,
    meetingLink: "",
    location: ""
  });

  const fetchScheduledMeetings = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/scheduled",
        {
          headers: { Authorization: token },
        }
      );
      setScheduledMeetings(response.data.meetings);
    } catch (err) {
      console.error("Error fetching scheduled meetings:", err);
      setError(err.response?.data?.error || "Failed to fetch meetings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScheduledMeetings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInputChange = (index, value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ""]
    }));
  };

  const removeArrayField = (index, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const token = localStorage.getItem("token");

      // Filter out empty values
      const cleanedData = {
        ...formData,
        emailRecipients: formData.emailRecipients.filter(email => email.trim()),
        discussionTopics: formData.discussionTopics.filter(topic => topic.trim())
      };

      await axios.post(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/schedule",
        cleanedData,
        {
          headers: { Authorization: token },
        }
      );

      // Reset form and close modal
      setFormData({
        title: "",
        emailRecipients: [""],
        scheduledDateTime: "",
        discussionTopics: [""],
        scheduledDuration: 60,
        meetingLink: "",
        location: ""
      });
      setIsModalOpen(false);

      // Refresh meetings list
      fetchScheduledMeetings();
    } catch (err) {
      console.error("Error scheduling meeting:", err);
      alert(err.response?.data?.error || "Failed to schedule meeting");
    } finally {
      setFormLoading(false);
    }
  };

  const handleMarkAttended = async (meetingId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${meetingId}/attend`,
        {},
        {
          headers: { Authorization: token },
        }
      );
      fetchScheduledMeetings();
    } catch (err) {
      console.error("Error marking meeting as attended:", err);
      alert("Failed to mark meeting as attended");
    }
  };

  const handleCancelMeeting = async (meetingId) => {
    if (window.confirm("Are you sure you want to cancel this meeting?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${meetingId}/cancel`,
          {
            headers: { Authorization: token },
          }
        );
        fetchScheduledMeetings();
      } catch (err) {
        console.error("Error cancelling meeting:", err);
        alert("Failed to cancel meeting");
      }
    }
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'missed':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getUpcomingMeetings = () => {
    const now = new Date();
    return scheduledMeetings.filter(meeting => {
      const meetingTime = new Date(meeting.scheduledDateTime);
      return meetingTime > now && meeting.meetingStatus === 'scheduled';
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Schedule Meetings</h1>
            <p className="text-gray-600 mt-2">Plan and manage your upcoming meetings</p>
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-5 h-5" />
            <span>Schedule Meeting</span>
          </motion.button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {scheduledMeetings.length}
                </div>
                <div className="text-sm text-gray-600">Total Scheduled</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {getUpcomingMeetings().length}
                </div>
                <div className="text-sm text-gray-600">Upcoming</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {scheduledMeetings.filter(m => m.meetingStatus === 'completed').length}
                </div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {scheduledMeetings.filter(m => m.meetingStatus === 'missed').length}
                </div>
                <div className="text-sm text-gray-600">Missed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Meetings List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Scheduled Meetings</h2>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">{error}</div>
            ) : scheduledMeetings.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No meetings scheduled</h3>
                <p className="text-gray-500">Click "Schedule Meeting" to create your first meeting</p>
              </div>
            ) : (
              <div className="space-y-4">
                {scheduledMeetings.map((meeting) => {
                  const { date, time } = formatDateTime(meeting.scheduledDateTime);
                  return (
                    <motion.div
                      key={meeting._id}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {meeting.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.meetingStatus)}`}>
                              {meeting.meetingStatus.charAt(0).toUpperCase() + meeting.meetingStatus.slice(1)}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{date}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{time}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">{meeting.emailRecipients?.length || 0} participants</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{meeting.scheduledDuration}min duration</span>
                            </div>
                          </div>

                          {meeting.discussionTopics && meeting.discussionTopics.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Discussion Topics:</h4>
                              <div className="flex flex-wrap gap-2">
                                {meeting.discussionTopics.map((topic, index) => (
                                  <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {(meeting.meetingLink || meeting.location) && (
                            <div className="mb-4 space-y-2">
                              {meeting.meetingLink && (
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <Video className="w-4 h-4" />
                                  <a href={meeting.meetingLink} target="_blank" rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 text-sm truncate">
                                    {meeting.meetingLink}
                                  </a>
                                </div>
                              )}
                              {meeting.location && (
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <MapPin className="w-4 h-4" />
                                  <span className="text-sm">{meeting.location}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {meeting.emailRecipients && meeting.emailRecipients.length > 0 && (
                            <div className="text-sm text-gray-500">
                              Participants: {meeting.emailRecipients.join(", ")}
                            </div>
                          )}
                        </div>

                        {/* <div className="flex items-center space-x-2 ml-4">
                          {meeting.meetingStatus === 'scheduled' && (
                            <>
                              <button
                                onClick={() => handleMarkAttended(meeting._id)}
                                className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center space-x-1"
                              >
                                <CheckCircle className="w-4 h-4" />
                                <span>Mark Attended</span>
                              </button>
                              <button
                                onClick={() => handleCancelMeeting(meeting._id)}
                                className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm flex items-center space-x-1"
                              >
                                <X className="w-4 h-4" />
                                <span>Cancel</span>
                              </button>
                            </>
                          )}
                        </div> */}
                        <div className="flex items-center space-x-2 ml-4">
                          {meeting.meetingStatus === 'scheduled' && (
                            <>
                              {/* NEW: Start Meeting Button */}
                              <button
                                onClick={() => navigate("/recorder", {
                                  state: {
                                    scheduledMeeting: meeting,
                                    fromScheduled: true
                                  }
                                })}
                                className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center space-x-1"
                              >
                                <PlayCircle className="w-4 h-4" />
                                <span>Start Meeting</span>
                              </button>

                              <button
                                onClick={() => handleMarkAttended(meeting._id)}
                                className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center space-x-1"
                              >
                                <CheckCircle className="w-4 h-4" />
                                <span>Mark Attended</span>
                              </button>
                              <button
                                onClick={() => handleCancelMeeting(meeting._id)}
                                className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm flex items-center space-x-1"
                              >
                                <X className="w-4 h-4" />
                                <span>Cancel</span>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-transparent backdrop-blur-[3px] flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white border-[1px] border-gray-300 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Schedule New Meeting</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Meeting Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter meeting title"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date & Time *
                    </label>
                    <input
                      type="datetime-local"
                      name="scheduledDateTime"
                      value={formData.scheduledDateTime}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().slice(0, 16)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (minutes)
                    </label>
                    <input
                      type="number"
                      name="scheduledDuration"
                      value={formData.scheduledDuration}
                      onChange={handleInputChange}
                      min="15"
                      max="480"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email Recipients */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Participants (Email Addresses)
                  </label>
                  {formData.emailRecipients.map((email, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => handleArrayInputChange(index, e.target.value, 'emailRecipients')}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="participant@example.com"
                      />
                      {formData.emailRecipients.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayField(index, 'emailRecipients')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField('emailRecipients')}
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center space-x-1"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Participant</span>
                  </button>
                </div>

                {/* Discussion Topics */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discussion Topics (Agenda)
                  </label>
                  {formData.discussionTopics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => handleArrayInputChange(index, e.target.value, 'discussionTopics')}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="What will be discussed?"
                      />
                      {formData.discussionTopics.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayField(index, 'discussionTopics')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField('discussionTopics')}
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center space-x-1"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Topic</span>
                  </button>
                </div>

                {/* Meeting Link and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meeting Link (Optional)
                    </label>
                    <input
                      type="url"
                      name="meetingLink"
                      value={formData.meetingLink}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://zoom.us/j/..."
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-medium flex items-center space-x-2 disabled:opacity-50"
                  >
                    {formLoading && (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    )}
                    <span>{formLoading ? 'Scheduling...' : 'Schedule Meeting'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleMeetingPage;