// import { useState, useEffect } from 'react';
// import { ArrowLeft, Calendar, Clock, Users, FileText, CheckSquare, ArrowRight, Download, Share, Trash2 } from 'lucide-react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';

// export default function SingleTranscription() {
//     const navigate = useNavigate();
//     const { meetingId } = useParams();

//     const location = useLocation();

//     const [meeting, setMeeting] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [activeTab, setActiveTab] = useState('transcript');

//     const handleDelete = async (recording) => {
//     if (window.confirm('Are you sure you want to delete this transcription?')) {
//         try {
//             await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${recording._id}`, {
//                 headers: {
//                     Authorization: localStorage.getItem("token")
//                 }
//             });

//             navigate('/transcriptions'); // Redirect to transcriptions list after deletion

//         } catch (error) {
//             console.error("Error deleting transcription:", error);
//             alert("Failed to delete transcription. Please try again.");
//         }
//     }
// };

//     useEffect(() => {
//         console.log(meetingId);
//         const fetchMeetingData = async () => {
//             setLoading(true);
//             setError(null);

//             try {

//                 if (location.state?.recording) {
//                     setMeeting(location.state.recording);
//                     setLoading(false);
//                     return;
//                 }

//                 // Option 2: Fetch by ID from API
//                 /*
//                 const response = await axios.get(
//                     `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${meetingId}`,
//                     {
//                         headers: {
//                             Authorization: localStorage.getItem("token")
//                         }
//                     }
//                 );
//                 setMeeting(response.data);
//                 */

//             } catch (error) {
//                 console.error("Error fetching meeting data:", error);
//                 setError("Failed to load meeting details. Please try again.");
//                 setLoading(false);
//             }
//         };

//         fetchMeetingData();
//     }, []);

//     // Format date helper
//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//         });
//     };

//     // Format duration helper
//     const formatDuration = (seconds) => {
//         const hours = Math.floor(seconds / 3600);
//         const mins = Math.floor((seconds % 3600) / 60);
//         const secs = seconds % 60;

//         if (hours > 0) {
//             return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//         }
//         return `${mins}:${secs.toString().padStart(2, '0')}`;
//     };

//     // Get category from type
//     const getCategory = (category) => {
//         if (category === "live-transcription") return "Live Transcription";
//         if (category === "audio-notes") return "Audio Notes";
//         return "Meeting Recording";
//     };

//     // Handle back navigation
//     const handleBack = () => {
//         navigate('/transcriptions'); // Uncomment for actual navigation
//     };

//     // Handle download
//     const handleDownload = () => {

//     };

//     // Handle share
//     const handleShare = () => {

//     };

//     if (loading) {
//         return (
//             <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
//                     <p className="mt-4 text-gray-600">Loading meeting details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="text-red-500 mb-4">
//                         <FileText className="w-16 h-16 mx-auto mb-3" />
//                         <h3 className="text-lg font-medium mb-2">Error Loading Meeting</h3>
//                         <p>{error}</p>
//                     </div>
//                     <button
//                         onClick={() => window.location.reload()}
//                         className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//                     >
//                         Retry
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     if (!meeting) {
//         return (
//             <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//                 <div className="text-center">
//                     <FileText className="w-16 h-16 mx-auto mb-3 text-gray-300" />
//                     <h3 className="text-lg font-medium text-gray-500 mb-2">Meeting Not Found</h3>
//                     <p className="text-gray-400 mb-4">The requested meeting could not be found.</p>
//                     <button
//                         onClick={handleBack}
//                         className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//                     >
//                         Back to Transcriptions
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//             <div className="max-w-5xl mx-auto">
//                 {/* Header */}
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-8">
//                     <div className="flex items-center space-x-4">
//                         <button
//                             onClick={handleBack}
//                             className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
//                         >
//                             <ArrowLeft size={24} />
//                         </button>
//                         <div>
//                             <h1 className="text-3xl font-bold text-[#9810fa]">{meeting.title}</h1>
//                             <div className="flex items-center space-x-4 mt-2 text-gray-600">
//                                 <span className="flex items-center">
//                                     <Calendar size={16} className="mr-1" />
//                                     {formatDate(meeting.createdAt)}
//                                 </span>
//                                 <span className="flex items-center">
//                                     <Clock size={16} className="mr-1" />
//                                     {formatDuration(meeting.recordingLength)}
//                                 </span>
//                                 <span className="bg-pink-400 text-white text-xs font-medium px-2 py-1 rounded-full">
//                                     {getCategory(meeting.type)}
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex items-center space-x-3">
//                         <button
//                             onClick={() => handleDelete(meeting)}
//                             className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                         >
//                             <Trash2 size={16} className="mr-2" />
//                             Delete
//                         </button>
//                     </div>
//                 </div>

//                 {/* Participants */}
//                 {meeting.participants && meeting.participants.length > 0 && (
//                     <div className="bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm">
//                         <div className="flex items-center mb-3">
//                             <Users className="mr-2 text-purple-600" size={20} />
//                             <h3 className="text-lg font-semibold text-gray-700">Participants</h3>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                             {meeting.participants.map((participant, index) => (
//                                 <span
//                                     key={index}
//                                     className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
//                                 >
//                                     <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
//                                         <span className="text-white text-xs font-medium">
//                                             {participant.charAt(0).toUpperCase()}
//                                         </span>
//                                     </div>
//                                     {participant}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* Tab Navigation */}
//                 <div className="bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm">
//                     <div className="border-b border-gray-200">
//                         <nav className="flex space-x-8 px-6">
//                             {['transcript', 'summary', 'minutes', 'nextSteps'].map((tab) => (
//                                 <button
//                                     key={tab}
//                                     onClick={() => setActiveTab(tab)}
//                                     className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//                                         activeTab === tab
//                                             ? 'border-purple-500 text-purple-600'
//                                             : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                                     }`}
//                                 >
//                                     {tab === 'transcript' && 'Transcript'}
//                                     {tab === 'summary' && 'Summary'}
//                                     {tab === 'minutes' && 'Minutes'}
//                                     {tab === 'nextSteps' && 'Next Steps'}
//                                 </button>
//                             ))}
//                         </nav>
//                     </div>

//                     {/* Tab Content */}
//                     <div className="p-6">
//                         {activeTab === 'transcript' && (
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
//                                     <FileText className="mr-2" size={20} />
//                                     Full Transcript
//                                 </h3>
//                                 {meeting.transcript && meeting.transcript.length > 0 ? (
//                                     <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//                                         {meeting.transcript.map((entry, index) => (
//                                             <div key={index} className="flex space-x-3 p-4 bg-gray-50 rounded-lg">
//                                                 <div className="flex-shrink-0">
//                                                     <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
//                                                         <span className="text-white text-sm font-medium">
//                                                             {entry.speaker.charAt(0).toUpperCase()}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flex-1 min-w-0">
//                                                     <div className="text-sm font-medium text-gray-900 mb-1">
//                                                         {entry.speaker}
//                                                     </div>
//                                                     <div className="text-gray-700 leading-relaxed">
//                                                         {entry.text}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-gray-500 text-center py-8">No transcript available for this meeting.</p>
//                                 )}
//                             </div>
//                         )}

//                         {activeTab === 'summary' && (
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Meeting Summary</h3>
//                                 {meeting.summary ? (
//                                     <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                                         <p className="text-gray-700 leading-relaxed">{meeting.summary}</p>
//                                     </div>
//                                 ) : (
//                                     <p className="text-gray-500 text-center py-8">No summary available for this meeting.</p>
//                                 )}

//                                 {meeting.agenda && meeting.agenda.length > 0 && (
//                                     <div className="mt-6">
//                                         <h4 className="text-md font-semibold text-gray-700 mb-3">Meeting Agenda</h4>
//                                         <ul className="space-y-2">
//                                             {meeting.agenda.map((item, index) => (
//                                                 <li key={index} className="flex items-start">
//                                                     <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
//                                                         {index + 1}
//                                                     </span>
//                                                     <span className="text-gray-700">{item}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 )}
//                             </div>
//                         )}

//                         {activeTab === 'minutes' && (
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-4">Meeting Minutes</h3>
//                                 {meeting.minutes && meeting.minutes.length > 0 ? (
//                                     <div className="space-y-4">
//                                         {meeting.minutes.map((minute, index) => (
//                                             <div key={index} className="border border-gray-200 rounded-lg p-4">
//                                                 <h4 className="font-semibold text-gray-800 mb-2">{minute.topic}</h4>
//                                                 <p className="text-gray-600 leading-relaxed">{minute.details}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-gray-500 text-center py-8">No meeting minutes available.</p>
//                                 )}
//                             </div>
//                         )}

//                         {activeTab === 'nextSteps' && (
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
//                                     <CheckSquare className="mr-2" size={20} />
//                                     Next Steps & Action Items
//                                 </h3>
//                                 {meeting.nextSteps && meeting.nextSteps.length > 0 ? (
//                                     <div className="space-y-3">
//                                         {meeting.nextSteps.map((step, index) => (
//                                             <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                                                 <ArrowRight className="text-yellow-600 mt-0.5 flex-shrink-0" size={16} />
//                                                 <div className="flex-1">
//                                                     <p className="text-gray-800 font-medium">{step.task}</p>
//                                                     <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
//                                                         <span className="flex items-center">
//                                                             <Users size={14} className="mr-1" />
//                                                             <strong>Assignee:</strong> {step.assignee}
//                                                         </span>
//                                                         {step.due && (
//                                                             <span className="flex items-center">
//                                                                 <Calendar size={14} className="mr-1" />
//                                                                 <strong>Due:</strong> {new Date(step.due).toLocaleDateString()}
//                                                             </span>
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-gray-500 text-center py-8">No action items defined for this meeting.</p>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  FileText,
  CheckSquare,
  ArrowRight,
  Download,
  Share,
  Trash2,
} from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import MeetingSummaryPDF from "../components/MeetingSummaryPDF"; // We'll create this component
import TranscriptPDF from "../components/MeetingTranscriptPDF";

export default function SingleTranscription() {
  const navigate = useNavigate();
  const { id: encodedId } = useParams();

  const location = useLocation();

  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("transcript");
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const id = atob(encodedId);

  const handleDelete = async (recording) => {
    if (window.confirm("Are you sure you want to delete this transcription?")) {
      try {
        await axios.delete(
          `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${recording._id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        navigate("/transcriptions"); // Redirect to transcriptions list after deletion
      } catch (error) {
        console.error("Error deleting transcription:", error);
        alert("Failed to delete transcription. Please try again.");
      }
    }
  };

  // PDF generation function - copied from Audio Agenda page
  const handleDownloadPDF = async () => {
    if (!meeting) {
      alert("No meeting data available");
      return;
    }

    setIsGeneratingPDF(true);

    try {
      // Generate PDF blob
      const blob = await pdf(<TranscriptPDF meetingData={meeting} />).toBlob();

      // Save the PDF
      const fileName = `${meeting?.title || "meeting-summary"}.pdf`;
      saveAs(blob, fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  useEffect(() => {
    const fetchMeetingData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (location.state?.recording) {
          setMeeting(location.state.recording);
          setLoading(false);
          return;
        }

        // Option 2: Fetch by ID from API
        /*
                const response = await axios.get(
                    `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${meetingId}`,
                    {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    }
                );
                setMeeting(response.data);
                */
      } catch (error) {
        console.error("Error fetching meeting data:", error);
        setError("Failed to load meeting details. Please try again.");
        setLoading(false);
      }
    };

    fetchMeetingData();
  }, []);

  // Format date helper
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Format duration helper
  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Get category from type
  const getCategory = (category) => {
    if (category === "live-transcription") return "Live Transcription";
    if (category === "audio-notes") return "Audio Notes";
    return "Meeting Recording";
  };

  // Handle back navigation
  const handleBack = () => {
    navigate("/transcriptions"); // Uncomment for actual navigation
  };

  // Handle share
  const handleShare = () => { };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading meeting details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <FileText className="w-16 h-16 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-2">Error Loading Meeting</h3>
            <p>{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!meeting) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 mx-auto mb-3 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-500 mb-2">
            Meeting Not Found
          </h3>
          <p className="text-gray-400 mb-4">
            The requested meeting could not be found.
          </p>
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Transcriptions
          </button>
        </div>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-gray-50 p-4 md:p-8">
    //     <div className="max-w-5xl mx-auto">
    //         {/* Header */}
    //         {/* Header */}
    //         <div className="flex items-center justify-between mb-8">
    //             <div className="flex items-center space-x-4">
    //                 <button
    //                     onClick={handleBack}
    //                     className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
    //                 >
    //                     <ArrowLeft size={24} />
    //                 </button>
    //                 <div>
    //                     <h1 className="text-3xl font-bold text-[#9810fa]">{meeting.title}</h1>
    //                     <div className="flex items-center space-x-4 mt-2 text-gray-600">
    //                         <span className="flex items-center">
    //                             <Calendar size={16} className="mr-1" />
    //                             {formatDate(meeting.createdAt)}
    //                         </span>
    //                         <span className="flex items-center">
    //                             <Clock size={16} className="mr-1" />
    //                             {formatDuration(meeting.recordingLength)}
    //                         </span>
    //                         <span className="bg-pink-400 text-white text-xs font-medium px-2 py-1 rounded-full">
    //                             {getCategory(meeting.type)}
    //                         </span>
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* Action Buttons */}
    //             <div className="flex items-center space-x-3">
    //                 <button
    //                     onClick={handleDownloadPDF}
    //                     disabled={isGeneratingPDF}
    //                     className={`p-2 transition-colors ${
    //                         isGeneratingPDF
    //                             ? "text-gray-400 cursor-not-allowed"
    //                             : "text-gray-600 hover:text-purple-600"
    //                     }`}
    //                     title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
    //                 >
    //                     {isGeneratingPDF ? (
    //                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
    //                     ) : (
    //                         <Download size={20} />
    //                     )}
    //                 </button>
    //                 <button
    //                     onClick={() => handleDelete(meeting)}
    //                     className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    //                 >
    //                     <Trash2 size={16} className="mr-2" />
    //                     Delete
    //                 </button>
    //             </div>
    //         </div>

    //         {/* PDF Generation Loading Message */}
    //         {isGeneratingPDF && (
    //             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
    //                 <div className="flex items-center gap-2">
    //                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
    //                     <p className="text-blue-800 font-medium">
    //                         Generating PDF...
    //                     </p>
    //                 </div>
    //             </div>
    //         )}

    //         {/* Participants */}
    //         {meeting.participants && meeting.participants.length > 0 && (
    //             <div className="bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm">
    //                 <div className="flex items-center mb-3">
    //                     <Users className="mr-2 text-purple-600" size={20} />
    //                     <h3 className="text-lg font-semibold text-gray-700">Participants</h3>
    //                 </div>
    //                 <div className="flex flex-wrap gap-2">
    //                     {meeting.participants.map((participant, index) => (
    //                         <span
    //                             key={index}
    //                             className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
    //                         >
    //                             <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
    //                                 <span className="text-white text-xs font-medium">
    //                                     {participant.charAt(0).toUpperCase()}
    //                                 </span>
    //                             </div>
    //                             {participant}
    //                         </span>
    //                     ))}
    //                 </div>
    //             </div>
    //         )}

    //         {/* Tab Navigation */}
    //         <div className="bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm">
    //             <div className="border-b border-gray-200">
    //                 <nav className="flex space-x-8 px-6">
    //                     {['transcript', 'summary', 'minutes', 'nextSteps'].map((tab) => (
    //                         <button
    //                             key={tab}
    //                             onClick={() => setActiveTab(tab)}
    //                             className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
    //                                 activeTab === tab
    //                                     ? 'border-purple-500 text-purple-600'
    //                                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    //                             }`}
    //                         >
    //                             {tab === 'transcript' && 'Transcript'}
    //                             {tab === 'summary' && 'Summary'}
    //                             {tab === 'minutes' && 'Minutes'}
    //                             {tab === 'nextSteps' && 'Next Steps'}
    //                         </button>
    //                     ))}
    //                 </nav>
    //             </div>

    //             {/* Tab Content */}
    //             <div className="p-6">
    //                 {activeTab === 'transcript' && (
    //                     <div>
    //                         <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
    //                             <FileText className="mr-2" size={20} />
    //                             Full Transcript
    //                         </h3>
    //                         {meeting.transcript && meeting.transcript.length > 0 ? (
    //                             <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
    //                                 {meeting.transcript.map((entry, index) => (
    //                                     <div key={index} className="flex space-x-3 p-4 bg-gray-50 rounded-lg">
    //                                         <div className="flex-shrink-0">
    //                                             <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
    //                                                 <span className="text-white text-sm font-medium">
    //                                                     {entry.speaker.charAt(0).toUpperCase()}
    //                                                 </span>
    //                                             </div>
    //                                         </div>
    //                                         <div className="flex-1 min-w-0">
    //                                             <div className="text-sm font-medium text-gray-900 mb-1">
    //                                                 {entry.speaker}
    //                                             </div>
    //                                             <div className="text-gray-700 leading-relaxed">
    //                                                 {entry.text}
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         ) : (
    //                             <p className="text-gray-500 text-center py-8">No transcript available for this meeting.</p>
    //                         )}
    //                     </div>
    //                 )}

    //                 {activeTab === 'summary' && (
    //                     <div>
    //                         <h3 className="text-lg font-semibold text-gray-700 mb-4">Meeting Summary</h3>
    //                         {meeting.summary ? (
    //                             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
    //                                 <p className="text-gray-700 leading-relaxed">{meeting.summary}</p>
    //                             </div>
    //                         ) : (
    //                             <p className="text-gray-500 text-center py-8">No summary available for this meeting.</p>
    //                         )}

    //                         {meeting.agenda && meeting.agenda.length > 0 && (
    //                             <div className="mt-6">
    //                                 <h4 className="text-md font-semibold text-gray-700 mb-3">Meeting Agenda</h4>
    //                                 <ul className="space-y-2">
    //                                     {meeting.agenda.map((item, index) => (
    //                                         <li key={index} className="flex items-start">
    //                                             <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
    //                                                 {index + 1}
    //                                             </span>
    //                                             <span className="text-gray-700">{item}</span>
    //                                         </li>
    //                                     ))}
    //                                 </ul>
    //                             </div>
    //                         )}
    //                     </div>
    //                 )}

    //                 {activeTab === 'minutes' && (
    //                     <div>
    //                         <h3 className="text-lg font-semibold text-gray-700 mb-4">Meeting Minutes</h3>
    //                         {meeting.minutes && meeting.minutes.length > 0 ? (
    //                             <div className="space-y-4">
    //                                 {meeting.minutes.map((minute, index) => (
    //                                     <div key={index} className="border border-gray-200 rounded-lg p-4">
    //                                         <h4 className="font-semibold text-gray-800 mb-2">{minute.topic}</h4>
    //                                         <p className="text-gray-600 leading-relaxed">{minute.details}</p>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         ) : (
    //                             <p className="text-gray-500 text-center py-8">No meeting minutes available.</p>
    //                         )}
    //                     </div>
    //                 )}

    //                 {activeTab === 'nextSteps' && (
    //                     <div>
    //                         <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
    //                             <CheckSquare className="mr-2" size={20} />
    //                             Next Steps & Action Items
    //                         </h3>
    //                         {meeting.nextSteps && meeting.nextSteps.length > 0 ? (
    //                             <div className="space-y-3">
    //                                 {meeting.nextSteps.map((step, index) => (
    //                                     <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
    //                                         <ArrowRight className="text-yellow-600 mt-0.5 flex-shrink-0" size={16} />
    //                                         <div className="flex-1">
    //                                             <p className="text-gray-800 font-medium">{step.task}</p>
    //                                             <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
    //                                                 <span className="flex items-center">
    //                                                     <Users size={14} className="mr-1" />
    //                                                     <strong>Assignee:</strong> {step.assignee}
    //                                                 </span>
    //                                                 {step.due && (
    //                                                     <span className="flex items-center">
    //                                                         <Calendar size={14} className="mr-1" />
    //                                                         <strong>Due:</strong> {new Date(step.due).toLocaleDateString()}
    //                                                     </span>
    //                                                 )}
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         ) : (
    //                             <p className="text-gray-500 text-center py-8">No action items defined for this meeting.</p>
    //                         )}
    //                     </div>
    //                 )}
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBack}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
              type="button"
              aria-label="Go back to previous page"
            >
              <ArrowLeft size={24} aria-hidden="true" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-[#9810fa]">
                {meeting.title}
              </h1>
              <div className="flex items-center space-x-4 mt-2 text-gray-600">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" aria-hidden="true" />
                  {formatDate(meeting.createdAt)}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" aria-hidden="true" />
                  {formatDuration(meeting.recordingLength)}
                </span>
                <span
                  className="bg-pink-400 text-white text-xs font-medium px-2 py-1 rounded-full"
                  role="status"
                >
                  {getCategory(meeting.type)}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <nav
            className="flex items-center space-x-3"
            aria-label="Meeting actions"
          >
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className={`p-2 transition-colors ${isGeneratingPDF
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:text-purple-600"
                }`}
              title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
              type="button"
              aria-label="Download meeting transcript as PDF"
            >
              {isGeneratingPDF ? (
                <div
                  className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"
                  aria-hidden="true"
                ></div>
              ) : (
                <Download size={20} aria-hidden="true" />
              )}
            </button>
            <button
              onClick={() => handleDelete(meeting)}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              type="button"
              aria-label={`Delete meeting: ${meeting.title}`}
            >
              <Trash2 size={16} className="mr-2" aria-hidden="true" />
              Delete
            </button>
          </nav>
        </header>

        {/* Status Messages */}
        <section aria-live="polite" aria-label="Status notifications">
          {/* PDF Generation Loading Message */}
          {isGeneratingPDF && (
            <aside
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
              role="status"
            >
              <div className="flex items-center gap-2">
                <div
                  className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"
                  aria-hidden="true"
                ></div>
                <p className="text-blue-800 font-medium">Generating PDF...</p>
              </div>
            </aside>
          )}
        </section>

        {/* Participants */}
        {meeting.participants && meeting.participants.length > 0 && (
          <section
            className="bg-white rounded-lg border border-purple-200 p-6 mb-6 shadow-sm"
            aria-labelledby="participants-heading"
          >
            <header className="flex items-center mb-3">
              <Users
                className="mr-2 text-purple-600"
                size={20}
                aria-hidden="true"
              />
              <h2
                id="participants-heading"
                className="text-lg font-semibold text-gray-700"
              >
                Participants
              </h2>
            </header>
            <div
              className="flex flex-wrap gap-2"
              role="list"
              aria-label="Meeting participants"
            >
              {meeting.participants.map((participant, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  role="listitem"
                >
                  <div
                    className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-white text-xs font-medium">
                      {participant.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  {participant}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Tab Navigation */}
        <article className="bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm">
          <div className="border-b border-gray-200">
            <nav
              className="flex space-x-8 px-6"
              role="tablist"
              aria-label="Meeting content sections"
            >
              {["transcript", "summary", "minutes", "nextSteps"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={`${tab}-panel`}
                  id={`${tab}-tab`}
                >
                  {tab === "transcript" && "Transcript"}
                  {tab === "summary" && "Summary"}
                  {tab === "minutes" && "Minutes"}
                  {tab === "nextSteps" && "Next Steps"}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "transcript" && (
              <section
                id="transcript-panel"
                role="tabpanel"
                aria-labelledby="transcript-tab"
              >
                <header className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-700 flex items-center">
                    <FileText className="mr-2" size={20} aria-hidden="true" />
                    Full Transcript
                  </h2>
                </header>
                {meeting.transcript && meeting.transcript.length > 0 ? (
                  <div
                    className="space-y-4 max-h-96 overflow-y-auto pr-2"
                    role="log"
                    aria-label="Meeting transcript"
                  >
                    {meeting.transcript.map((entry, index) => (
                      <article
                        key={index}
                        className="flex space-x-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <figure className="flex-shrink-0">
                          <div
                            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center"
                            aria-hidden="true"
                          >
                            <span className="text-white text-sm font-medium">
                              {entry.speaker.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </figure>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 mb-1">
                            {entry.speaker}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {entry.text}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No transcript available for this meeting.
                  </p>
                )}
              </section>
            )}

            {activeTab === "summary" && (
              <section
                id="summary-panel"
                role="tabpanel"
                aria-labelledby="summary-tab"
              >
                <header className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">
                    Meeting Summary
                  </h2>
                </header>
                {meeting.summary ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      {meeting.summary}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No summary available for this meeting.
                  </p>
                )}

                {meeting.agenda && meeting.agenda.length > 0 && (
                  <section className="mt-6" aria-labelledby="agenda-heading">
                    <h3
                      id="agenda-heading"
                      className="text-md font-semibold text-gray-700 mb-3"
                    >
                      Meeting Agenda
                    </h3>
                    <ol className="space-y-2" role="list">
                      {meeting.agenda.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                          role="listitem"
                        >
                          <span
                            className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5"
                            aria-hidden="true"
                          >
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
              </section>
            )}

            {activeTab === "minutes" && (
              <section
                id="minutes-panel"
                role="tabpanel"
                aria-labelledby="minutes-tab"
              >
                <header className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">
                    Meeting Minutes
                  </h2>
                </header>
                {meeting.minutes && meeting.minutes.length > 0 ? (
                  <div className="space-y-4" role="list">
                    {meeting.minutes.map((minute, index) => (
                      <article
                        key={index}
                        className="border border-gray-200 rounded-lg p-4"
                        role="listitem"
                      >
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {minute.topic}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {minute.details}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No meeting minutes available.
                  </p>
                )}
              </section>
            )}

            {activeTab === "nextSteps" && (
              <section
                id="nextSteps-panel"
                role="tabpanel"
                aria-labelledby="nextSteps-tab"
              >
                <header className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-700 flex items-center">
                    <CheckSquare
                      className="mr-2"
                      size={20}
                      aria-hidden="true"
                    />
                    Next Steps & Action Items
                  </h2>
                </header>
                {meeting.nextSteps && meeting.nextSteps.length > 0 ? (
                  <div className="space-y-3" role="list">
                    {meeting.nextSteps.map((step, index) => (
                      <article
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                        role="listitem"
                      >
                        <ArrowRight
                          className="text-yellow-600 mt-0.5 flex-shrink-0"
                          size={16}
                          aria-hidden="true"
                        />
                        <div className="flex-1">
                          <h3 className="text-gray-800 font-medium">
                            {step.task}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Users
                                size={14}
                                className="mr-1"
                                aria-hidden="true"
                              />
                              <strong>Assignee:</strong> {step.assignee}
                            </span>
                            {step.due && (
                              <span className="flex items-center">
                                <Calendar
                                  size={14}
                                  className="mr-1"
                                  aria-hidden="true"
                                />
                                <strong>Due:</strong>{" "}
                                {new Date(step.due).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No action items defined for this meeting.
                  </p>
                )}
              </section>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
