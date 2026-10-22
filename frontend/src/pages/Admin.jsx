// import React, { useState, useEffect } from "react";
// import {
//   Play,
//   Pause,
//   Volume2,
//   Download,
//   User,
//   Calendar,
//   Clock,
//   AlertCircle,
//   Loader2,
//   Users,
//   FileText,
//   ChevronDown,
//   ChevronUp,
//   Video,
// } from "lucide-react";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("recordings");
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState({});
//   const [error, setError] = useState({});
//   const [playingItem, setPlayingItem] = useState(null);
//   const [expandedItems, setExpandedItems] = useState(new Set());

//   // API call to fetch recordings
//   const fetchRecordings = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/admin/recordings",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const apiResponse = await response.json();

//       if (!apiResponse.success) {
//         throw new Error("API returned unsuccessful response");
//       }

//       return apiResponse;
//     } catch (error) {
//       console.error("API call failed:", error);
//       throw error;
//     }
//   };

//   // Separate data based on recording types
//   const separateRecordingsByType = (recordings) => {
//     const allRecordings = recordings || [];

//     const audioRecordings = allRecordings.filter(
//       (recording) => recording.recordingAudioUrl && !recording.recordingVideoUrl
//     );

//     const videoRecordings = allRecordings.filter(
//       (recording) => recording.recordingVideoUrl
//     );

//     return {
//       recordings: {
//         success: true,
//         count: allRecordings.length,
//         data: allRecordings,
//       },
//       audios: {
//         success: true,
//         count: audioRecordings.length,
//         data: audioRecordings,
//       },
//       videos: {
//         success: true,
//         count: videoRecordings.length,
//         data: videoRecordings,
//       },
//     };
//   };

//   const fetchData = async (tabType) => {
//     // Check if we already have the full recordings data
//     if (data.recordings && data.audios && data.videos) return;

//     setLoading((prev) => ({ ...prev, [tabType]: true }));
//     setError((prev) => ({ ...prev, [tabType]: null }));

//     try {
//       const apiResponse = await fetchRecordings();
//       const separatedData = separateRecordingsByType(apiResponse.data);

//       // Set all tab data at once since we get everything from one API call
//       setData(separatedData);
//     } catch (err) {
//       setError((prev) => ({ ...prev, [tabType]: err.message }));
//     } finally {
//       setLoading((prev) => ({ ...prev, [tabType]: false }));
//     }
//   };

//   useEffect(() => {
//     fetchData(activeTab);
//   }, [activeTab]);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handlePlayPause = (item) => {
//     if (playingItem?.id === item._id) {
//       setPlayingItem(null);
//     } else {
//       // Determine the media URL based on what's available
//       const mediaUrl = item.recordingVideoUrl || item.recordingAudioUrl;
//       setPlayingItem({
//         id: item._id,
//         url: mediaUrl,
//         type: item.recordingVideoUrl ? "video" : "audio",
//       });
//     }
//   };

//   // Helper function to safely get user information
//   const getUserInfo = (user) => {
//     if (!user) return { username: "Undefined", email: "Undefined" };
//     return {
//       username: user?.username || user?.name || "Undefined",
//       email: user?.email || "Undefined",
//     };
//   };

//   const toggleExpanded = (itemId) => {
//     const newExpanded = new Set(expandedItems);
//     if (newExpanded.has(itemId)) {
//       newExpanded.delete(itemId);
//     } else {
//       newExpanded.add(itemId);
//     }
//     setExpandedItems(newExpanded);
//   };

//   const formatDuration = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, "0")}`;
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return {
//       date: date.toLocaleDateString(),
//       time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//     };
//   };

//   const LoadingSpinner = () => (
//     <div className="flex items-center justify-center py-12">
//       <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
//       <span className="ml-3 text-gray-600">Loading...</span>
//     </div>
//   );

//   const ErrorMessage = ({ message, onRetry }) => (
//     <div className="flex flex-col items-center justify-center py-12">
//       <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
//       <p className="text-gray-600 mb-4">{message}</p>
//       <button
//         onClick={onRetry}
//         className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
//       >
//         Try Again
//       </button>
//     </div>
//   );

//   //   const MediaPlayer = ({ item, isPlaying }) => {
//   //     const hasVideo = !!item.recordingVideoUrl;
//   //     const hasAudio = !!item.recordingAudioUrl;
//   //     const mediaUrl = item.recordingVideoUrl || item.recordingAudioUrl;

//   //     if (hasVideo) {
//   //       return (
//   //         <div className="flex items-center space-x-3">
//   //           <button
//   //             onClick={() => handlePlayPause(item)}
//   //             className="w-10 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-colors"
//   //           >
//   //             {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//   //           </button>
//   //           <span className="text-sm text-gray-600 flex items-center">
//   //             <Volume2 className="w-4 h-4 mr-1" />
//   //             Video • {formatDuration(item.recordingLength)}
//   //           </span>
//   //         </div>
//   //       );
//   //     } else if (hasAudio) {
//   //       return (
//   //         <div className="flex items-center space-x-3">
//   //           <button
//   //             onClick={() => handlePlayPause(item)}
//   //             className="w-10 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-colors"
//   //           >
//   //             {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//   //           </button>
//   //           <span className="text-sm text-gray-600 flex items-center">
//   //             <Volume2 className="w-4 h-4 mr-1" />
//   //             Audio • {formatDuration(item.recordingLength)}
//   //           </span>
//   //         </div>
//   //       );
//   //     }

//   //     return <span className="text-sm text-gray-500">No media available</span>;
//   //   };

//   const MediaPlayer = ({ item, isPlaying }) => {
//     const hasVideo = !!item.recordingVideoUrl;
//     const hasAudio = !!item.recordingAudioUrl;

//     if (hasVideo) {
//       return (
//         <div className="flex items-center space-x-3">
//           <button
//             onClick={() => handlePlayPause(item)}
//             className="w-10 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-colors"
//           >
//             {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//           </button>
//           <span className="text-sm text-gray-600 flex items-center">
//             <Video className="w-4 h-4 mr-1" />{" "}
//             {/* Changed from Volume2 to Video icon */}
//             Video • {formatDuration(item.recordingLength)}
//           </span>
//         </div>
//       );
//     } else if (hasAudio) {
//       return (
//         <div className="flex items-center space-x-3">
//           <button
//             onClick={() => handlePlayPause(item)}
//             className="w-10 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-colors"
//           >
//             {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//           </button>
//           <span className="text-sm text-gray-600 flex items-center">
//             <Volume2 className="w-4 h-4 mr-1" />
//             Audio • {formatDuration(item.recordingLength)}
//           </span>
//         </div>
//       );
//     }

//     return <span className="text-sm text-gray-500">No media available</span>;
//   };
//   const RecordingCard = ({ item }) => {
//     const isExpanded = expandedItems.has(item._id);
//     const isPlaying = playingItem?.id === item._id;
//     const { date, time } = formatDate(item.createdAt);
//     const userInfo = getUserInfo(item.user);

//     return (
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
//         <div className="p-6">
//           {/* Header */}
//           <div className="flex items-start justify-between mb-4">
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 {item.title || "Untitled Recording"}
//               </h3>
//               <div className="flex items-center space-x-4 text-sm text-gray-600">
//                 <div className="flex items-center space-x-1">
//                   <User className="w-4 h-4" />
//                   <span>{userInfo.username}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Calendar className="w-4 h-4" />
//                   <span>
//                     {date} at {time}
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Clock className="w-4 h-4" />
//                   <span>{formatDuration(item.recordingLength || 0)}</span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => toggleExpanded(item._id)}
//               className="p-2 text-gray-400 hover:text-purple-500 transition-colors"
//             >
//               {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//             </button>
//           </div>
//           {!isExpanded && item.recordingVideoUrl && (
//             <div className="mb-4 relative pt-[56.25%] bg-gray-100 rounded-lg overflow-hidden">
//               <video
//                 src={item.recordingVideoUrl}
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 // muted
//                 playsInline
//                 controls
//                 onError={(e) => {
//                   console.error("Video error details:", {
//                     error: e.nativeEvent,
//                     videoSrc: e.target.src,
//                     videoElement: e.target,
//                   });
//                   const video = e.target;
//                   console.log(
//                     "Video error code:",
//                     video.error ? video.error.code : "unknown"
//                   );
//                 }}
//               />

//               {/* <div className="absolute inset-0 flex items-center justify-center">
//                 <button
//                   onClick={() => handlePlayPause(item)}
//                   className="w-16 h-16 bg-purple-500 bg-opacity-75 hover:bg-opacity-100 text-white rounded-full flex items-center justify-center transition-all"
//                 >
//                   {playingItem?.id === item._id ? (
//                     <Pause size={24} />
//                   ) : (
//                     <Play size={24} className="ml-1" />
//                   )}
//                 </button>
//               </div> */}
//             </div>
//           )}
//           {/* Summary */}
//           <div className="mb-4">
//             <p className="text-gray-700 leading-relaxed">
//               {item.summary || "No summary available"}
//             </p>
//           </div>
//           {/* Participants */}
//           <div className="flex items-center space-x-2 mb-4">
//             <Users className="w-4 h-4 text-gray-400" />
//             <span className="text-sm text-gray-600">Participants:</span>
//             <div className="flex space-x-2">
//               {item.participants && item.participants.length > 0 ? (
//                 item.participants.map((participant, index) => (
//                   <span
//                     key={index}
//                     className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
//                   >
//                     {participant || "Unknown"}
//                   </span>
//                 ))
//               ) : (
//                 <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
//                   No participants
//                 </span>
//               )}
//             </div>
//           </div>
//           {/* Controls */}
//           <div className="flex items-center justify-between">
//             <MediaPlayer item={item} isPlaying={isPlaying} />
//             <div className="flex items-center space-x-2">
//               <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors">
//                 <Download size={16} />
//               </button>
//             </div>
//           </div>
//           {/* Media Player for expanded view */}
//           {/* {isExpanded && isPlaying && ( */}
//           {/* <div className="mt-6 pt-6 border-t border-gray-100">
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <h4 className="font-semibold text-gray-900 mb-3">
//                   Now Playing
//                 </h4>
//                 {item.recordingVideoUrl ? (
//                   <video
//                     key={item._id}
//                     controls
//                     autoPlay
//                     className="w-full max-w-4xl rounded-lg shadow-lg"
//                     onEnded={() => setPlayingItem(null)}
//                     onError={(e) => console.error("Video error:", e)}
//                     style={{ maxHeight: "500px" }}
//                   >
//                     <source src={item.recordingVideoUrl} type="video/webm" />
//                     <source src={item.recordingVideoUrl} type="video/mp4" />
//                     <source src={item.recordingVideoUrl} type="video/ogg" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : item.recordingAudioUrl ? (
//                   <audio
//                     key={item._id}
//                     controls
//                     autoPlay
//                     className="w-full"
//                     onEnded={() => setPlayingItem(null)}
//                     onError={(e) => console.error("Audio error:", e)}
//                   >
//                     <source src={item.recordingAudioUrl} type="audio/webm" />
//                     <source src={item.recordingAudioUrl} type="audio/mpeg" />
//                     <source src={item.recordingAudioUrl} type="audio/wav" />
//                     Your browser does not support the audio tag.
//                   </audio>
//                 ) : (
//                   <p className="text-gray-500">No media available</p>
//                 )}
//               </div>
//             </div>
//           )} */}
//           {isExpanded && isPlaying && item.recordingVideoUrl && (
//             <div className="mt-6 pt-6 border-t border-gray-100">
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <h4 className="font-semibold text-gray-900 mb-3">
//                   Now Playing
//                 </h4>
//                 <div className="relative pt-[56.25%]">
//                   {" "}
//                   {/* 16:9 aspect ratio container */}
//                   <video
//                     key={item._id}
//                     controls
//                     className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
//                     onEnded={() => setPlayingItem(null)}
//                     onError={(e) => console.error("Video error:", e)}
//                   >
//                     <source src={item.recordingVideoUrl} type="video/mp4" />
//                     <source src={item.recordingVideoUrl} type="video/webm" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               </div>
//             </div>
//           )}
//           {/* Expanded Content */}
//           {isExpanded && (
//             <div className="mt-6 pt-6 border-t border-gray-100 space-y-6">
//               {/* Agenda */}
//               {item.agenda && item.agenda.length > 0 && (
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
//                     <FileText className="w-4 h-4 mr-2" />
//                     Agenda
//                   </h4>
//                   <ul className="space-y-2">
//                     {item.agenda.map((agendaItem, index) => (
//                       <li key={index} className="flex items-start space-x-2">
//                         <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
//                         <span className="text-sm text-gray-700">
//                           {agendaItem || "No details"}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Minutes */}
//               {item.minutes && item.minutes.length > 0 && (
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-3">
//                     Meeting Minutes
//                   </h4>
//                   <div className="space-y-3">
//                     {item.minutes.map((minute, index) => (
//                       <div key={index} className="bg-gray-50 rounded-lg p-4">
//                         <h5 className="font-medium text-gray-900 mb-2">
//                           {minute.topic || "No topic"}
//                         </h5>
//                         <p className="text-sm text-gray-700">
//                           {minute.details || "No details"}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Transcript Preview */}
//               {item.transcript && item.transcript.length > 0 && (
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-3">
//                     Transcript Preview
//                   </h4>
//                   <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
//                     {item.transcript.slice(0, 3).map((entry, index) => (
//                       <div key={index} className="mb-3 last:mb-0">
//                         <span className="font-medium text-purple-600">
//                           {entry.speaker || "Unknown"}:{" "}
//                         </span>
//                         <span className="text-gray-700">
//                           {entry.text || "No text"}
//                         </span>
//                       </div>
//                     ))}
//                     {item.transcript.length > 3 && (
//                       <p className="text-sm text-gray-500 mt-2">
//                         ... and {item.transcript.length - 3} more entries
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Email Recipients */}
//               {item.emailRecipients && item.emailRecipients.length > 0 && (
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-3">
//                     Email Recipients
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {item.emailRecipients.map((email, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
//                       >
//                         {email || "No email"}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const DataGrid = ({ items }) => (
//     <div className="space-y-4">
//       {items.map((item) => (
//         <RecordingCard key={item._id} item={item} />
//       ))}
//     </div>
//   );

//   const tabs = [
//     {
//       id: "recordings",
//       label: "Recordings",
//       count: data.recordings?.count || 0,
//     },
//     { id: "audios", label: "Audios", count: data.audios?.count || 0 },
//     { id: "videos", label: "Videos", count: data.videos?.count || 0 },
//   ];

//   const currentData = data[activeTab];
//   const currentItems = currentData?.data || [];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-3xl font-semibold text-purple-500 mb-2">
//             Admin Dashboard
//           </h1>
//           <p className="text-gray-600">
//             Manage and monitor all user recordings, audio files, and videos
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="mb-8">
//           <div className="border-b border-gray-200">
//             <nav className="flex space-x-8">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => handleTabChange(tab.id)}
//                   className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//                     activeTab === tab.id
//                       ? "border-purple-500 text-purple-600"
//                       : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                   }`}
//                 >
//                   {tab.label}
//                   {currentData && (
//                     <span className="ml-2 bg-purple-100 text-purple-600 py-1 px-2 rounded-full text-xs">
//                       {tab.count}
//                     </span>
//                   )}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="tab-content">
//           {loading[activeTab] && <LoadingSpinner />}

//           {error[activeTab] && (
//             <ErrorMessage
//               message={error[activeTab]}
//               onRetry={() => fetchData(activeTab)}
//             />
//           )}

//           {currentData && !loading[activeTab] && !error[activeTab] && (
//             <>
//               {currentItems.length === 0 ? (
//                 <div className="text-center py-12">
//                   <p className="text-gray-500">No {activeTab} found.</p>
//                 </div>
//               ) : (
//                 <DataGrid items={currentItems} />
//               )}
//             </>
//           )}
//         </div>

//         {/* Summary Cards */}
//         {!loading[activeTab] && !error[activeTab] && currentData && (
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-xl p-6 shadow-sm">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 Total {activeTab}
//               </h3>
//               <p className="text-3xl font-bold text-purple-500">
//                 {currentData.count}
//               </p>
//             </div>

//             <div className="bg-white rounded-xl p-6 shadow-sm">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 Active Users
//               </h3>
//               <p className="text-3xl font-bold text-purple-500">
//                 {
//                   new Set(
//                     currentItems.map(
//                       (item) =>
//                         item?.user?.username || item?.user?.name || "Undefined"
//                     )
//                   ).size
//                 }
//               </p>
//             </div>

//             <div className="bg-white rounded-xl p-6 shadow-sm">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 Total Duration
//               </h3>
//               <p className="text-3xl font-bold text-purple-500">
//                 {formatDuration(
//                   currentItems.reduce(
//                     (acc, item) => acc + item.recordingLength,
//                     0
//                   )
//                 )}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import {
  Users,
  Clock,
  Activity,
  BarChart3,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  TrendingUp,
  Shield,
  RefreshCw,
} from "lucide-react";

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [usageFilter, setUsageFilter] = useState("all");
  const [updating, setUpdating] = useState({});

  useEffect(() => {
    fetchAdminData();
  }, []);

  const deleteUser = async (userId) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this user? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      setUpdating((prev) => ({ ...prev, [userId]: true }));

      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/admin/users/${userId}`,
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
        // Remove user from local state
        setData((prevData) => ({
          ...prevData,
          users: prevData.users.filter((user) => user?.id !== userId),
        }));
        alert("User deleted successfully");
      } else {
        alert(result.message || "Failed to delete user");
      }
    } catch (err) {
      console.error("Failed to delete user:", err);
      alert("Failed to delete user");
    } finally {
      setUpdating((prev) => ({ ...prev, [userId]: false }));
    }
  };

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      const response = await fetch("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/admin/allusers", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setData(result.data);
      } else {
        setError(result.error || "Failed to fetch admin data");
      }
    } catch (err) {
      console.error("Failed to fetch admin data:", err);
      setError("Unable to load admin data");
    } finally {
      setLoading(false);
    }
  };

  const updateUserStatus = async (userId, newStatus) => {
    try {
      setUpdating((prev) => ({ ...prev, [userId]: true }));

      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/admin/users/${userId}/status`,
        {
          method: "PATCH",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        // Update local state
        setData((prevData) => ({
          ...prevData,
          users: prevData.users.map((user) =>
            user?.id === userId ? { ...user, status: newStatus } : user
          ),
        }));
      } else {
        alert(result.error || "Failed to update user status");
      }
    } catch (err) {
      console.error("Failed to update user status:", err);
      alert("Failed to update user status");
    } finally {
      setUpdating((prev) => ({ ...prev, [userId]: false }));
    }
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

  const getUsageColor = (percentage) => {
    if (percentage >= 100) return "bg-red-500";
    if (percentage >= 80) return "bg-yellow-500";
    if (percentage >= 60) return "bg-blue-500";
    return "bg-green-500";
  };

  const getStatusBadge = (status) => {
    return status === "active" ? (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <CheckCircle className="w-3 h-3 mr-1" />
        Active
      </span>
    ) : (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
        <XCircle className="w-3 h-3 mr-1" />
        Inactive
      </span>
    );
  };

  const filteredUsers =
    data?.users?.filter((user) => {
      const matchesSearch =
        user?.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        user?.email?.toLowerCase().includes(searchTerm?.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || user?.status === statusFilter;
      const matchesUsage =
        usageFilter === "all" ||
        (usageFilter === "over_limit" && user?.usage.percentageUsed >= 100) ||
        (usageFilter === "near_limit" &&
          user?.usage.percentageUsed >= 80 &&
          user?.usage.percentageUsed < 100) ||
        (usageFilter === "under_limit" && user?.usage.percentageUsed < 80);

      return matchesSearch && matchesStatus && matchesUsage;
    }) || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
            <span className="ml-4 text-gray-600">
              Loading admin dashboard...
            </span>
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
              onClick={fetchAdminData}
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
            <Shield className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-semibold text-purple-500">
              Admin Dashboard
            </h1>
          </div>
          <button
            onClick={fetchAdminData}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Users}
            title="Total Users"
            value={data?.stats?.totalUsers || 0}
            subtitle={`${data?.stats?.activeUsers || 0} active`}
            color="bg-purple-500"
          />
          <StatCard
            icon={Clock}
            title="Total Usage"
            value={`${data?.stats?.totalUsageMinutes || 0} min`}
            subtitle={`Avg: ${data?.stats?.averageUsagePerUser || 0} min/user`}
            color="bg-blue-500"
          />
          <StatCard
            icon={Activity}
            title="Total Meetings"
            value={data?.stats?.totalMeetings || 0}
            subtitle="All recordings"
            color="bg-green-500"
          />
          <StatCard
            icon={AlertCircle}
            title="Over Limit"
            value={data?.stats?.usersOverLimit || 0}
            subtitle={`${data?.stats?.usersNearLimit || 0} near limit`}
            color="bg-red-500"
          />
        </div>

        {/* Usage Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Usage Distribution
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(data?.stats?.usageDistribution || {}).map(
              ([range, count]) => (
                <div
                  key={range}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <div className="text-2xl font-bold text-gray-800">
                    {count}
                  </div>
                  <div className="text-sm text-gray-600">{range}</div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users by name or email..."
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
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Usage Filter */}
            <div>
              <select
                value={usageFilter}
                onChange={(e) => setUsageFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Usage</option>
                <option value="over_limit">Over Limit (100%+)</option>
                <option value="near_limit">Near Limit (80-99%)</option>
                <option value="under_limit">Under Limit (&lt;80%)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-purple-200 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-3">User</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2 text-center">Usage</div>
              <div className="col-span-2 text-start">Breakdown</div>
              <div className="col-span-2 text-start">Meetings</div>
              <div className="col-span-2">Actions</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user?.id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="grid grid-cols-12 gap-4 items-center text-sm">
                    {/* User Info */}
                    <div className="col-span-3">
                      <div className="font-medium text-gray-900">
                        {user?.name}
                      </div>
                      <div className="text-gray-500">{user?.email}</div>
                      <div className="text-xs text-gray-400">
                        Joined {new Date(user?.joinedDate).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="col-span-1">
                      {getStatusBadge(user?.status)}
                    </div>

                    {/* Usage */}
                    <div className="col-span-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${getUsageColor(
                              user?.usage.percentageUsed
                            )}`}
                            style={{
                              width: `${Math.min(
                                user?.usage.percentageUsed,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium">
                          {user?.usage.percentageUsed}%
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {user?.usage.totalMinutes}/100 min
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="col-span-2">
                      <div className="flex space-x-4 text-xs">
                        <span className="text-purple-600">
                          📹 {user?.usage.breakdown.recording}m
                        </span>
                        <span className="text-pink-600">
                          🎙️ {user?.usage.breakdown.liveTranscription}m
                        </span>
                        <span className="text-cyan-600">
                          🎵 {user?.usage.breakdown.audioNotes}m
                        </span>
                      </div>
                    </div>

                    {/* Meetings */}
                    <div className="col-span-2">
                      <div className="text-gray-900 font-medium">
                        {user?.meetings.total} total
                      </div>
                      <div className="text-xs text-gray-500">
                        {user?.meetings.recording}R •{" "}
                        {user?.meetings.liveTranscription}L •{" "}
                        {user?.meetings.audioNotes}A
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 flex space-x-2">
                      <button
                        onClick={() =>
                          updateUserStatus(
                            user?.id,
                            user?.status === "active" ? "inactive" : "active"
                          )
                        }
                        disabled={updating[user?.id]}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${user?.status === "active"
                          ? "bg-red-100 text-red-700 hover:bg-red-200"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                          } ${updating[user?.id]
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                          }`}
                      >
                        {updating[user?.id]
                          ? "..."
                          : user?.status === "active"
                            ? "Deactivate"
                            : "Activate"}
                      </button>
                      <button
                        onClick={() => deleteUser(user?.id)}
                        disabled={updating[user?.id]}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors ${updating[user?.id]
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                          }`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No users found matching your filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Showing {filteredUsers.length} of {data?.stats?.totalUsers || 0} users
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
