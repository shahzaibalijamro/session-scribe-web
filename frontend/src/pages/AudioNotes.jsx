// import { useState } from "react";
// import { Download, Trash2, Edit3, MessageCircle, Share } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function AudioAgenda() {
//   const [activeTab, setActiveTab] = useState("summary");

//   return (
//     <div className="max-w-4xl mx-auto min-h-screen">
//       {/* Header */}
//       <div className="flex items-center justify-between p-6 border-b border-gray-100">
//         <h1 className="text-3xl font-medium text-[#9810fa]">Audio Agenda</h1>
//         <div className="flex items-center gap-3">
//           <button className="p-2 text-gray-400 hover:text-gray-600">
//             <Download size={20} />
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 bg-[#9810fa] text-white rounded-lg text-sm font-medium hover:bg-[#9810fa]">
//             <Trash2 size={16} />
//             Delete
//           </button>
//         </div>
//       </div>

//       {/* Audio Player */}
//       <div className="px-6 py-4">
//         <div className="flex items-center gap-4 mb-4">
//           {/* Progress bar */}
//           <div className="flex-1">
//             <div className="relative h-1 bg-gray-200 rounded-full">
//               <div
//                 className="absolute left-0 top-0 h-1 bg-purple-600 rounded-full"
//                 style={{ width: "4.8%" }}
//               ></div>
//             </div>
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>0:02</span>
//               <span>0:41</span>
//             </div>
//           </div>
//         </div>

//         {/* Audio Controls */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//               <div className="w-3 h-3 border-l-2 border-l-white ml-0.5"></div>
//             </button>
//             <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
//               <div className="text-xs">15</div>
//             </button>
//             <span className="text-sm font-medium">1x</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <button className="p-2 text-gray-400">
//               <Edit3 size={18} />
//             </button>
//             <button className="p-2 text-gray-400">
//               <MessageCircle size={18} />
//             </button>
//             <button className="p-2 text-gray-400">
//               <Share size={18} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tab Navigation */}
//       <div className="px-6">
//         <div className="flex rounded-lg overflow-hidden border border-gray-200">
//           <button
//             onClick={() => setActiveTab("summary")}
//             className={`flex-1 py-3 px-4 text-sm font-medium ${
//               activeTab === "summary"
//                 ? "bg-purple-600 text-white"
//                 : "bg-gray-50 text-black hover:bg-gray-100"
//             }`}
//           >
//             Summary
//           </button>
//           <button
//             onClick={() => setActiveTab("transcript")}
//             className={`flex-1 py-3 px-4 text-sm font-medium ${
//               activeTab === "transcript"
//                 ? "bg-purple-600 text-white"
//                 : "bg-gray-50 text-black hover:bg-gray-100"
//             }`}
//           >
//             Transcript
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="px-6 py-6">
//         {activeTab === "summary" ? (
//           <div className="space-y-6">
//             {/* Topic */}
//             <div>
//               <h2 className="text-base font-semibold text-gray-900 mb-3">
//                 Topic: Planning adjustments for the Q3 marketing rollout.
//               </h2>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 <li className="flex">
//                   <span className="mr-2">•</span>
//                   <span>
//                     Lisa suggested reordering the content calendar to prioritize
//                     video content before blog posts, aiming to boost early
//                     engagement.
//                   </span>
//                 </li>
//                 <li className="flex">
//                   <span className="mr-2">•</span>
//                   <span>
//                     Charlie agreed and confirmed feasibility with the creative
//                     team, pending script finalization by Friday.
//                   </span>
//                 </li>
//                 <li className="flex">
//                   <span className="mr-2">•</span>
//                   <span>
//                     Lisa will coordinate with Josh (Creative Lead) to confirm
//                     production timelines.
//                   </span>
//                 </li>
//                 <li className="flex">
//                   <span className="mr-2">•</span>
//                   <span>
//                     Instagram captions from last quarter will be updated to
//                     reflect a more playful tone.
//                   </span>
//                 </li>
//                 <li className="flex">
//                   <span className="mr-2">•</span>
//                   <span>
//                     Charlie will update the Asana board to reflect the new
//                     video-first strategy.
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Outline */}
//             <div>
//               <h3 className="text-base font-semibold text-gray-900 mb-4">
//                 Outline
//               </h3>

//               <div className="space-y-4">
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-900 mb-2">
//                     Campaign Brief Review
//                   </h4>
//                   <ul className="space-y-1 text-sm text-gray-700">
//                     <li className="flex">
//                       <span className="mr-2">•</span>
//                       <span>
//                         Lisa confirms she reviewed the Q3 campaign brief
//                       </span>
//                     </li>
//                     <li className="flex">
//                       <span className="mr-2">•</span>
//                       <span>Positive feedback on influencer focus</span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-900 mb-2">
//                     Content Calendar Feedback
//                   </h4>
//                   <ul className="space-y-1 text-sm text-gray-700">
//                     <li className="flex">
//                       <span className="mr-2">•</span>
//                       <span>
//                         Lisa proposes reversing the order: launch video content
//                         before blog posts
//                       </span>
//                     </li>
//                     <li className="flex">
//                       <span className="mr-2">•</span>
//                       <span>
//                         Reason: drive early engagement and use momentum for blog
//                         traffic
//                       </span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-900 mb-2">
//                     Feasibility of Video-First Approach
//                   </h4>
//                   <ul className="space-y-1 text-sm text-gray-700">
//                     <li className="flex">
//                       <span className="mr-2">•</span>
//                       <span>
//                         Charlie checks if creative team can meet new timeline
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {/* Keywords */}
//             <div>
//               <h3 className="text-sm font-semibold text-gray-900 mb-2">
//                 Keywords
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 sessionScribe, meeting, notes, share, autopilot, recurring,
//                 channel, summary, conversation, action items, left navigation
//                 bar, calendar, call, transcript, people, join, couple different
//                 ways, audio recording, button, ai
//               </p>
//             </div>

//             {/* Speakers */}
//             <div>
//               <h3 className="text-sm font-semibold text-gray-900 mb-2">
//                 Speakers
//               </h3>
//               <p className="text-sm text-gray-600">Lisa (79%), Charlie (21%)</p>
//             </div>

//             {/* Transcript */}
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
//                   C
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="text-sm font-medium text-gray-900">
//                       Charlie
//                     </span>
//                     <span className="text-xs text-green-600">✓ 0:02</span>
//                   </div>
//                   <p className="text-sm text-gray-700">
//                     Alright, let's get started. Lisa, did you get a chance to
//                     review the campaign brief for Q3?
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-medium">
//                   L
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="text-sm font-medium text-gray-900">
//                       Lisa
//                     </span>
//                     <span className="text-xs text-green-600">✓ 0:05</span>
//                   </div>
//                   <p className="text-sm text-gray-700">
//                     Yes, I did. I think the overall direction looks good,
//                     especially the focus on influencer partnerships. But I have
//                     a few thoughts on the content calendar
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
//                   C
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="text-sm font-medium text-gray-900">
//                       Charlie
//                     </span>
//                     <span className="text-xs text-green-600">✓ 0:01</span>
//                   </div>
//                   <p className="text-sm text-gray-700">Let's hear them.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-medium">
//                   L
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="text-sm font-medium text-gray-900">
//                       Lisa
//                     </span>
//                     <span className="text-xs text-green-600">✓ 0:05</span>
//                   </div>
//                   <p className="text-sm text-gray-700">
//                     Well, the current timeline has us launching three blog posts
//                     before the video content goes live. I think we should
//                     reverse that. The videos will drive more engagement early
//                     on, and we can use that momentum to support the blog
//                     traffic.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Download, Trash2, Edit3, MessageCircle, Share, Play } from 'lucide-react';
// import axios from 'axios';

// export default function RecordingDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [recording, setRecording] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState('summary');

//   // Fetch recording data
//   useEffect(() => {
//     const fetchRecording = async () => {
//       try {
//         const response = await axios.get(
//           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
//           headers: {
//             Authorization: localStorage.getItem("token")
//           }
//         });
//         setRecording(response.data);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to fetch recording");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecording();
//   }, [id]);

//   // Format duration helper
//   const formatDuration = (seconds) => {
//     if (!seconds) return "0:00";
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   // Format date helper
//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // Get category title based on type
//   const getCategoryTitle = (type) => {
//     switch (type) {
//       case "audio-notes":
//         return "Audio Notes";
//       case "live-transcription":
//         return "Live Transcription";
//       default:
//         return "Meeting";
//     }
//   };

//   // Handle play recording
//   const handlePlay = () => {
//     if (recording.recordingVideoUrl) {
//       window.open(recording.recordingVideoUrl, '_blank');
//     } else if (recording.recordingAudioUrl) {
//       window.open(recording.recordingAudioUrl, '_blank');
//     }
//   };

//   // Handle download recording
//   const handleDownload = () => {
//     const url = recording.recordingVideoUrl || recording.recordingAudioUrl;
//     if (url) {
//       const link = document.createElement('a');
//       link.href = url;
//       const ext = recording.recordingVideoUrl ? 'webm' : 'webm';
//       link.download = `${recording.title}-recording.${ext}`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   // Handle delete recording
//   const handleDelete = async () => {
//     if (window.confirm('Are you sure you want to delete this recording?')) {
//       try {
//         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
//           headers: {
//             Authorization: localStorage.getItem("token")
//           }
//         });
//         navigate('/recordings');
//       } catch (error) {
//         console.error("Error deleting recording:", error);
//         alert("Failed to delete recording. Please try again.");
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//         <span className="ml-3 text-gray-600">Loading recording...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-red-500 text-lg">{error}</div>
//       </div>
//     );
//   }

//   if (!recording) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-gray-500 text-lg">Recording not found</div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
//         <div>
//           <h1 className="text-3xl font-medium text-[#9810fa]">
//             {getCategoryTitle(recording.type)}
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Created on {formatDate(recording.createdAt)}
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button 
//             onClick={handlePlay}
//             className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
//             title="Play Recording"
//           >
//             <Play size={20} />
//           </button>
//           <button 
//             onClick={handleDownload}
//             className="p-2 text-gray-600 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
//             title="Download Recording"
//           >
//             <Download size={20} />
//           </button>
//           <button 
//             onClick={handleDelete}
//             className="p-2 text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
//             title="Delete Recording"
//           >
//             <Trash2 size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Recording Info */}
//       <div className="p-6 bg-white border-b border-gray-200">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//           {recording.title}
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//           <div>
//             <h3 className="text-sm font-medium text-gray-500">Duration</h3>
//             <p className="text-gray-900">{formatDuration(recording.recordingLength)}</p>
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-gray-500">Participants</h3>
//             <p className="text-gray-900">
//               {recording.participants && recording.participants.length > 0 
//                 ? recording.participants.join(', ')
//                 : 'No participants'
//               }
//             </p>
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-gray-500">Agenda</h3>
//             <p className="text-gray-900">
//               {recording.agenda && recording.agenda.length > 0 
//                 ? recording.agenda.join(', ')
//                 : 'No agenda items'
//               }
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Tab Navigation */}
//       <div className="px-6 pt-6">
//         <div className="flex rounded-lg overflow-hidden border border-gray-200">
//           <button
//             onClick={() => setActiveTab('summary')}
//             className={`flex-1 py-3 px-4 text-sm font-medium ${
//               activeTab === 'summary'
//                 ? 'bg-purple-600 text-white'
//                 : 'bg-gray-50 text-black hover:bg-gray-100'
//             }`}
//           >
//             Summary
//           </button>
//           <button
//             onClick={() => setActiveTab('transcript')}
//             className={`flex-1 py-3 px-4 text-sm font-medium ${
//               activeTab === 'transcript'
//                 ? 'bg-purple-600 text-white'
//                 : 'bg-gray-50 text-black hover:bg-gray-100'
//             }`}
//           >
//             Transcript
//           </button>
//           <button
//             onClick={() => setActiveTab('minutes')}
//             className={`flex-1 py-3 px-4 text-sm font-medium ${
//               activeTab === 'minutes'
//                 ? 'bg-purple-600 text-white'
//                 : 'bg-gray-50 text-black hover:bg-gray-100'
//             }`}
//           >
//             Minutes
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         {activeTab === 'summary' ? (
//           <div className="space-y-6">
//             {/* Summary */}
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary</h3>
//               {recording.summary ? (
//                 <p className="text-gray-700 whitespace-pre-line">{recording.summary}</p>
//               ) : (
//                 <p className="text-gray-400">No summary available</p>
//               )}
//             </div>

//             {/* Keywords - Always shown even if empty */}
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Keywords</h3>
//               {recording.keywords ? (
//                 <p className="text-gray-700">{recording.keywords}</p>
//               ) : (
//                 <p className="text-gray-400">No keywords extracted</p>
//               )}
//             </div>

//             {/* Next Steps - Always shown even if empty */}
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
//               {recording.nextSteps && recording.nextSteps.length > 0 ? (
//                 <ul className="space-y-2">
//                   {recording.nextSteps.map((step, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="mr-2">•</span>
//                       <span className="text-gray-700">{step}</span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-400">No next steps identified</p>
//               )}
//             </div>
//           </div>
//         ) : activeTab === 'transcript' ? (
//           <div className="space-y-6">
//             {/* Speakers - Always shown */}
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Speakers</h3>
//               {recording.participants && recording.participants.length > 0 ? (
//                 <div className="flex flex-wrap gap-2">
//                   {recording.participants.map((participant, index) => (
//                     <span 
//                       key={index} 
//                       className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
//                     >
//                       {participant}
//                     </span>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-400">No speaker information available</p>
//               )}
//             </div>

//             {/* Transcript - Always shown even if empty */}
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Transcript</h3>
//               {recording.transcript && recording.transcript.length > 0 ? (
//                 <div className="space-y-4">
//                   {recording.transcript.map((item, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
//                         {item.speaker ? item.speaker.charAt(0) : '?'}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <span className="text-sm font-medium text-gray-900">
//                             {item.speaker || 'Unknown'}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-700 whitespace-pre-line">
//                           {item.text}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-400">No transcript available</p>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {/* Minutes - Always shown even if empty */}
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Meeting Minutes</h3>
//               {recording.minutes && recording.minutes.length > 0 ? (
//                 <div className="space-y-4">
//                   {recording.minutes.map((minute, index) => (
//                     <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
//                       <h4 className="text-md font-semibold text-gray-900 mb-1">
//                         {minute.topic || 'Untitled Topic'}
//                       </h4>
//                       <p className="text-gray-700 whitespace-pre-line">
//                         {minute.details || 'No details provided'}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-400">No meeting minutes available</p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Trash2, Edit3, MessageCircle, Share, Play } from 'lucide-react';
import axios from 'axios';

export default function RecordingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recording, setRecording] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('summary');

  // Fetch recording data
  useEffect(() => {
    const fetchRecording = async () => {
      try {
        const response = await axios.get(
          `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        setRecording(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch recording");
      } finally {
        setLoading(false);
      }
    };
    fetchRecording();
  }, [id]);

  // Format duration helper
  const formatDuration = (seconds) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get category title based on type
  const getCategoryTitle = (type) => {
    switch (type) {
      case "audio-notes":
        return "Audio Notes";
      case "live-transcription":
        return "Live Transcription";
      default:
        return "Meeting";
    }
  };

  // Handle play recording
  const handlePlay = () => {
    if (recording?.recordingAudioUrl) {
      window.open(recording.recordingAudioUrl, '_blank');
    }
  };

  // Handle download recording
  const handleDownload = () => {
    const url = recording?.recordingAudioUrl;
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = `${recording.title}-recording.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Handle delete recording
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this recording?')) {
      try {
        await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        navigate('/recordings');
      } catch (error) {
        console.error("Error deleting recording:", error);
        alert("Failed to delete recording. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        <span className="ml-3 text-gray-600">Loading recording...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  if (!recording) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-lg">Recording not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
        <div>
          <h1 className="text-3xl font-medium text-[#9810fa]">
            {getCategoryTitle(recording.type)}
          </h1>
          <p className="text-gray-500 mt-1">
            Created on {formatDate(recording.createdAt?.$date)}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlay}
            className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
            title="Play Recording"
          >
            <Play size={20} />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 text-gray-600 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
            title="Download Recording"
          >
            <Download size={20} />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
            title="Delete Recording"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {/* Recording Info */}
      <div className="p-6 bg-white border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {recording.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Duration</h3>
            <p className="text-gray-900">{formatDuration(recording.recordingLength)}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Participants</h3>
            <p className="text-gray-900">
              {recording.participants && recording.participants.length > 0
                ? recording.participants.join(', ')
                : 'No participants'
              }
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Agenda</h3>
            <p className="text-gray-900">
              {recording.agenda && recording.agenda.length > 0
                ? recording.agenda.join(', ')
                : 'No agenda items'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 pt-6">
        <div className="flex rounded-lg overflow-hidden border border-gray-200">
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'summary'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-50 text-black hover:bg-gray-100'
              }`}
          >
            Summary
          </button>
          <button
            onClick={() => setActiveTab('transcript')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'transcript'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-50 text-black hover:bg-gray-100'
              }`}
          >
            Transcript
          </button>
          <button
            onClick={() => setActiveTab('minutes')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'minutes'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-50 text-black hover:bg-gray-100'
              }`}
          >
            Minutes
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'summary' ? (
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary</h3>
              {recording.summary ? (
                <p className="text-gray-700 whitespace-pre-line">{recording.summary}</p>
              ) : (
                <p className="text-gray-400">No summary available</p>
              )}
            </div>

            {/* Next Steps */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
              {recording.nextSteps && recording.nextSteps.length > 0 ? (
                <ul className="space-y-4">
                  {recording.nextSteps.map((step, index) => (
                    <li key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-md font-semibold text-gray-900 mb-1">
                            {step.task}
                          </h4>
                          <p className="text-sm text-gray-600">
                            Assignee: {step.assignee || 'Unassigned'}
                          </p>
                        </div>
                        {step.due && (
                          <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
                            Due: {formatDate(step.due)}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No next steps identified</p>
              )}
            </div>
          </div>
        ) : activeTab === 'transcript' ? (
          <div className="space-y-6">
            {/* Speakers */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Speakers</h3>
              {recording.participants && recording.participants.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {recording.participants.map((participant, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {participant}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No speaker information available</p>
              )}
            </div>

            {/* Transcript */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Transcript</h3>
              {recording.transcript && recording.transcript.length > 0 ? (
                <div className="space-y-4">
                  {recording.transcript.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
                        {item.speaker ? item.speaker.charAt(0) : '?'}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-gray-900">
                            {item.speaker || 'Unknown'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 whitespace-pre-line">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No transcript available</p>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Minutes */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Meeting Minutes</h3>
              {recording.minutes && recording.minutes.length > 0 ? (
                <div className="space-y-4">
                  {recording.minutes.map((minute, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                      <h4 className="text-md font-semibold text-gray-900 mb-1">
                        {minute.topic || 'Untitled Topic'}
                      </h4>
                      <p className="text-gray-700 whitespace-pre-line">
                        {minute.details || 'No details provided'}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No meeting minutes available</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}