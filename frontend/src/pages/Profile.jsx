// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useApp } from '../components/context/AppContext';

// const Profile = () => {
//   const { user } = useApp();
//   const navigate = useNavigate();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: user.name,
//     email: user.email,
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       await updateUser(user._id, formData);
//       setSuccess('Profile updated successfully');
//       setIsEditing(false);
//       // Optionally refresh user data here
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to update profile');
//     }
//   };

//   const handleDeleteAccount = async () => {
//     if (!window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) return;

//     try {
//       await deleteUser(user._id);
//       logout();
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to delete account');
//     }
//   };

//   const formatSeconds = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hours}h ${minutes}m ${secs}s`;
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">User Profile</h1>

//       {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
//       {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{success}</div>}

//       {!isEditing ? (
//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center mb-6">
//             <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold">
//               {user.name.charAt(0).toUpperCase()}
//             </div>
//             <div className="ml-4">
//               <h2 className="text-xl font-semibold">{user.name}</h2>
//               <p className="text-gray-600">{user.email}</p>
//               <p className="text-sm text-gray-500 capitalize">{user.role} • {user.status}</p>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 pt-4">
//             <h3 className="font-medium mb-2">Usage Statistics</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//               <div className="bg-gray-50 p-3 rounded">
//                 <p className="text-sm text-gray-500">Total Usage</p>
//                 <p className="font-medium">{formatSeconds(user.totalSecondsUsed)}</p>
//               </div>
//               <div className="bg-gray-50 p-3 rounded">
//                 <p className="text-sm text-gray-500">Recordings</p>
//                 <p className="font-medium">{formatSeconds(user.recordingSecondsUsed)}</p>
//               </div>
//               <div className="bg-gray-50 p-3 rounded">
//                 <p className="text-sm text-gray-500">Live Transcriptions</p>
//                 <p className="font-medium">{formatSeconds(user.liveTranscriptionSecondsUsed)}</p>
//               </div>
//               <div className="bg-gray-50 p-3 rounded">
//                 <p className="text-sm text-gray-500">Audio Notes</p>
//                 <p className="font-medium">{formatSeconds(user.audioNotesSecondsUsed)}</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-end space-x-3 mt-6">
//             <button
//               onClick={() => setIsEditing(true)}
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//             >
//               Edit Profile
//             </button>
//             <button
//               onClick={() => setIsDeleting(true)}
//               className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//             >
//               Delete Account
//             </button>
//           </div>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Current Password</label>
//             <input
//               type="password"
//               name="currentPassword"
//               value={formData.currentPassword}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               placeholder="Required to make changes"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">New Password</label>
//             <input
//               type="password"
//               name="newPassword"
//               value={formData.newPassword}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               placeholder="Leave blank to keep current"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Confirm New Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               placeholder="Leave blank to keep current"
//             />
//           </div>

//           <div className="flex justify-end space-x-3">
//             <button
//               type="button"
//               onClick={() => setIsEditing(false)}
//               className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       )}

//       {isDeleting && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//             <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
//             <p className="mb-6">Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.</p>
//             <div className="flex justify-end space-x-3">
//               <button
//                 onClick={() => setIsDeleting(false)}
//                 className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteAccount}
//                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//               >
//                 Delete Account
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Clock,
  Calendar,
  Shield,
  Activity,
  Trash2,
  Edit3,
  Save,
  X,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import axios from "axios";
import { useApp } from "../components/context/AppContext";

const ProfilePage = () => {
  const { user, setUser, isAdmin } = useApp();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    email: ''
  });
  const [updateLoading, setUpdateLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  // Function to format duration (same as HomePage)
  const formatDuration = (seconds) => {
    if (!seconds) return "00:00:00";
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    }
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const calculateUsagePercentage = (used, total = 6000) => {
    return Math.round((used / total) * 100);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/profile",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setProfileData(response.data.user);
      setEditForm({
        name: response.data.user.name,
        email: response.data.user.email
      });
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError(err.response?.data?.message || "Failed to fetch profile data");
    } finally {
      setLoading(false);
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing - reset form
      setEditForm({
        name: profileData.name,
        email: profileData.email
      });
    }
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = async () => {
    try {
      setUpdateLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/profile",
        editForm,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setProfileData(response.data.user);
      setUser(response.data.user);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(err.response?.data?.message || "Failed to update profile");
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== 'DELETE') {
      setError('Please type "DELETE" to confirm account deletion');
      return;
    }

    try {
      setDeleteLoading(true);
      //   const token = localStorage.getItem("token");
      //   await axios.delete(
      //     "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/profile",
      //     {
      //       headers: {
      //         Authorization: token,
      //       },
      //     }
      //   );

      // Clear local storage and redirect
      localStorage.removeItem("token");
      setUser(null);
      window.location.reload();
    } catch (err) {
      console.error("Error deleting account:", err);
      setError(err.response?.data?.message || "Failed to delete account");
    } finally {
      setDeleteLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex bg-gray-50 min-h-screen">
        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading profile data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && !profileData) {
    return (
      <div className="flex bg-gray-50 min-h-screen">
        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            <div className="text-center py-16">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Failed to Load Profile</h3>
              <p className="text-gray-500 mb-4">{error}</p>
              <button
                onClick={fetchProfileData}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Retry
              </button>
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
            <p className="text-gray-600">Manage your account information and preferences</p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-red-700">{error}</span>
              <button onClick={() => setError(null)} className="ml-auto text-red-500 hover:text-red-700">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Profile Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information Card */}
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Basic Information</h3>
                  <button
                    onClick={handleEditToggle}
                    className="flex cursor-pointer items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    {isEditing ? <X className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                    <span className="text-sm">{isEditing ? 'Cancel' : 'Edit'}</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">{profileData?.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">{profileData?.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Save Button */}
                  {isEditing && (
                    <div className="flex justify-end pt-4">
                      <button
                        onClick={handleSaveProfile}
                        disabled={updateLoading}
                        className="flex items-center cursor-pointer space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                      >
                        {updateLoading ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Save className="w-4 h-4" />
                        )}
                        <span>{updateLoading ? 'Saving...' : 'Save Changes'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Account Information Card */}
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Account Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-600">Role</p>
                      <p className="font-medium text-gray-900 capitalize">{profileData?.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Activity className={`w-5 h-5 ${profileData?.status === 'active' ? 'text-green-500' : 'text-red-500'}`} />
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className={`font-medium capitalize ${profileData?.status === 'active' ? 'text-green-700' : 'text-red-700'}`}>
                        {profileData?.status}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-600">Member Since</p>
                      <p className="font-medium text-gray-900">{formatDate(profileData?.createdAt)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Last Updated</p>
                      <p className="font-medium text-gray-900">{formatDate(profileData?.updatedAt)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              {!isAdmin && <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-red-200">
                <h3 className="text-lg md:text-xl font-bold text-red-600 mb-4">Danger Zone</h3>
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-red-800 mb-1">Delete Account</h4>
                      <p className="text-sm text-red-700 mb-3">
                        Once you delete your account, there is no going back. All your recordings and data will be permanently deleted.
                      </p>
                      <button
                        onClick={() => setShowDeleteModal(true)}
                        className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>}
            </div>

            {/* Usage Statistics Sidebar */}
            {!isAdmin && <div className="space-y-6">
              {/* Total Usage Card */}
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Usage Statistics</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Total Usage</span>
                      <span className="text-sm font-medium">{calculateUsagePercentage(profileData?.totalSecondsUsed)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(calculateUsagePercentage(profileData?.totalSecondsUsed), 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      {formatDuration(profileData?.totalSecondsUsed)} / 1:40:00
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-blue-600">📹 Recordings</span>
                      <span className="text-sm font-medium">{formatDuration(profileData?.recordingSecondsUsed)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-600">🎙️ Live Transcription</span>
                      <span className="text-sm font-medium">{formatDuration(profileData?.liveTranscriptionSecondsUsed)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-600">🎵 Audio Notes</span>
                      <span className="text-sm font-medium">{formatDuration(profileData?.audioNotesSecondsUsed)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Remaining Time</span>
                    <span className="text-sm font-medium text-green-600">
                      {formatDuration(6000 - (profileData?.totalSecondsUsed || 0))}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Account Type</span>
                    <span className="text-sm font-medium capitalize">{profileData?.role}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Status</span>
                    <span className={`text-sm font-medium capitalize ${profileData?.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                      {profileData?.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-transparent  backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 border border-gray-200 shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-bold text-gray-900">Delete Account</h3>
            </div>

            <p className="text-gray-600 mb-4">
              This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type "DELETE" to confirm:
              </label>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Type DELETE here"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteConfirmText('');
                  setError(null);
                }}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={deleteLoading || deleteConfirmText !== 'DELETE'}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deleteLoading ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;