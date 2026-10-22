import { useState, useEffect } from "react";
import { Eye, MessageSquare, Clock, Users, ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { motion } from "framer-motion";


export default function Transcriptions() {
  const navigate = useNavigate(); // Uncomment when using react-router-dom
  const [meetingData, setMeetingData] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [latestMeeting, setLatestMeeting] = useState(null);
  const [error, setError] = useState(null);

  // Fetch meeting data from API
  useEffect(() => {
    const fetchMeetingData = async () => {
      setFetchingData(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/meeting-data",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        const meetings = response.data;

        // Temporary mock data for demonstration - REMOVE THIS BLOCK

        // END OF MOCK DATA BLOCK

        setMeetingData(meetings);

        // Set the latest meeting (first in the sorted array) as default
        if (meetings.length > 0) {
          setLatestMeeting(meetings[0]);
          setSelectedMeeting(meetings[0]);
        }
      } catch (error) {
        console.error("Error fetching meeting data:", error);
        setError("Failed to fetch meeting data. Please try again.");
      } finally {
        setFetchingData(false);
      }
    };

    fetchMeetingData();
  }, []);

  // Format date helper
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDelete = async (recording) => {
    if (window.confirm('Are you sure you want to delete this transcription?')) {
      try {
        await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${recording._id}`, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });

        // Filter out the deleted meeting
        const updatedMeetings = meetingData.filter(meeting => meeting._id !== recording._id);
        setMeetingData(updatedMeetings);

        // If the deleted meeting was the selected one, update selectedMeeting
        if (selectedMeeting?._id === recording._id) {
          if (updatedMeetings.length > 0) {
            setSelectedMeeting(updatedMeetings[0]);
            setLatestMeeting(updatedMeetings[0]);
          } else {
            setSelectedMeeting(null);
            setLatestMeeting(null);
          }
        }

      } catch (error) {
        console.error("Error deleting transcription:", error);
        alert("Failed to delete transcription. Please try again.");
      }
    }
  };

  // Format duration helper
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Get category from type
  const getCategory = (category) => {
    if (category === "live-transcription") {
      return "Live Transcription";
    }
    if (category === "audio-notes") {
      return "Audio Notes";
    }
    return "Meeting";
  };

  // Handle meeting selection
  const handleMeetingClick = (meeting) => {
    setSelectedMeeting(meeting);
  };

  const handleViewDetails = (recording) => {
    const encodedId = btoa(recording._id);
    navigate(`/transcriptions/${encodedId}`, {
      state: {
        recording: recording,
      },
    });
  };

  return (
    //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
    //       <div className="max-w-7xl mx-auto">
    //         {/* Header */}
    //         <h1 className="text-4xl font-bold text-[#9810fa] mb-8">
    //           Transcriptions
    //         </h1>

    //         {/* Loading State */}
    //         {fetchingData ? (
    //           <div className="flex justify-center items-center py-20">
    //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    //             <span className="ml-3 text-gray-600">
    //               Loading transcriptions...
    //             </span>
    //           </div>
    //         ) : error ? (
    //           <div className="text-center py-20">
    //             <div className="text-red-500 mb-4">
    //               <MessageSquare className="w-16 h-16 mx-auto mb-3" />
    //               <h3 className="text-lg font-medium mb-2">
    //                 Error Loading Transcriptions
    //               </h3>
    //               <p>{error}</p>
    //             </div>
    //             <button
    //               onClick={() => window.location.reload()}
    //               className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    //             >
    //               Retry
    //             </button>
    //           </div>
    //         ) : (
    //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    //             {/* Left Panel - Meetings List */}
    //             <motion.div custom={1}
    //   initial="hidden"
    //   whileInView="visible"
    //   viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
    //   variants={{
    //   hidden: { opacity: 0, y: -50 },
    //   visible: (i) => ({
    //     opacity: 1,
    //     y: 0,
    //     transition: {
    //       delay: i * 0.3, // delay based on index
    //       duration: 0.3,
    //       ease: "easeOut",
    //     },
    //   }),
    // }} className="lg:col-span-1 bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm">
    //               <div className="bg-purple-200 px-6 py-4">
    //                 <h2 className="text-lg font-semibold text-gray-700 flex items-center">
    //                   <MessageSquare className="mr-2" size={20} />
    //                   All Meetings
    //                 </h2>
    //               </div>

    //               <div className="max-h-96 overflow-y-auto">
    //                 {meetingData.length > 0 ? (
    //                   meetingData.map((meeting, index) => (
    //                     <div
    //                       key={meeting._id}
    //                       className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-purple-50 ${
    //                         selectedMeeting?._id === meeting._id
    //                           ? "bg-purple-100 border-l-4 border-l-purple-500"
    //                           : ""
    //                       }`}
    //                       onClick={() => handleMeetingClick(meeting)}
    //                     >
    //                       <div className="flex justify-between items-start">
    //                         <div className="flex-1 min-w-0">
    //                           <h3 className="font-medium text-gray-900 truncate">
    //                             {meeting.title}
    //                           </h3>
    //                           <div className="mt-1 flex items-center text-xs text-gray-500 space-x-2">
    //                             <span className="flex items-center">
    //                               <Clock size={12} className="mr-1" />
    //                               {formatDate(meeting.createdAt)}
    //                             </span>
    //                             <span>•</span>
    //                             <span>
    //                               {formatDuration(meeting.recordingLength || 0)}
    //                             </span>
    //                           </div>
    //                           <div className="mt-1">
    //                             <span className="inline-block bg-pink-400 text-white text-xs font-medium px-2 py-0.5 rounded-full">
    //                               {getCategory(meeting?.type)}
    //                             </span>
    //                           </div>
    //                           {meeting.participants &&
    //                             meeting.participants.length > 0 && (
    //                               <div className="mt-1 flex items-center text-xs text-gray-500">
    //                                 <Users size={12} className="mr-1" />
    //                                 <span className="truncate">
    //                                   {meeting.participants.slice(0, 2).join(", ")}
    //                                   {meeting.participants.length > 2 &&
    //                                     ` +${meeting.participants.length - 2}`}
    //                                 </span>
    //                               </div>
    //                             )}
    //                         </div>
    //                         <ChevronRight
    //                           size={16}
    //                           className={`ml-2 text-gray-400 transition-transform ${
    //                             selectedMeeting?._id === meeting._id
    //                               ? "rotate-90"
    //                               : ""
    //                           }`}
    //                         />
    //                       </div>
    //                     </div>
    //                   ))
    //                 ) : (
    //                   <div className="p-8 text-center text-gray-500">
    //                     <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-300" />
    //                     <p>No meetings found</p>
    //                   </div>
    //                 )}
    //               </div>
    //             </motion.div>

    //             {/* Right Panel - Transcription Display */}
    //             <motion.div  custom={1}
    //   initial="hidden"
    //   whileInView="visible"
    //   viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
    //   variants={{
    //   hidden: { opacity: 0, y: 50 },
    //   visible: (i) => ({
    //     opacity: 1,
    //     y: 0,
    //     transition: {
    //       delay: i * 0.5, // delay based on index
    //       duration: 0.3,
    //       ease: "easeOut",
    //     },
    //   }),
    // }} className="lg:col-span-2 bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm">
    //               {selectedMeeting ? (
    //                 <>
    //                   {/* Transcription Header */}
    //                   <div className="bg-purple-200 px-6 py-4">
    //                     <div className="flex justify-between items-start">
    //                       <div>
    //                         <h2 className="text-lg font-semibold text-gray-700">
    //                           {selectedMeeting.title}
    //                           {latestMeeting?._id === selectedMeeting._id && (
    //                             <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
    //                               Latest
    //                             </span>
    //                           )}
    //                         </h2>
    //                         <div className="mt-1 flex items-center text-sm text-gray-600 space-x-4">
    //                           <span>{formatDate(selectedMeeting.createdAt)}</span>
    //                           <span>•</span>
    //                           <span>
    //                             {formatDuration(
    //                               selectedMeeting.recordingLength || 0
    //                             )}
    //                           </span>
    //                           <span>•</span>
    //                           <span>{getCategory(selectedMeeting?.type)}</span>
    //                         </div>
    //                       </div>
    //                       <div className="flex items-stretch space-x-2">
    //                         <button
    //                           onClick={() => handleViewDetails(selectedMeeting)}
    //                           className="flex items-center px-3 cursor-pointer py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
    //                         >
    //                           <Eye size={14} className="mr-1" />
    //                           View Details
    //                         </button>
    //                         <button
    //                           onClick={() => handleDelete(selectedMeeting)}
    //                           className="flex items-center cursor-pointer px-3 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
    //                         >
    //                           <Trash2 size={14} />
    //                         </button>
    //                       </div>
    //                     </div>
    //                   </div>

    //                   {/* Transcription Content */}
    //                   <div className="p-6">
    //                     {selectedMeeting.transcript &&
    //                     selectedMeeting.transcript.length > 0 ? (
    //                       <div className="space-y-4 max-h-96 overflow-y-auto">
    //                         {selectedMeeting.transcript.map((entry, index) => (
    //                           <div
    //                             key={index}
    //                             className="flex space-x-3 p-3 bg-gray-50 rounded-lg"
    //                           >
    //                             <div className="flex-shrink-0">
    //                               <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
    //                                 <span className="text-white text-sm font-medium">
    //                                   {entry.speaker.charAt(0).toUpperCase()}
    //                                 </span>
    //                               </div>
    //                             </div>
    //                             <div className="flex-1 min-w-0">
    //                               <div className="text-sm font-medium text-gray-900 mb-1">
    //                                 {entry.speaker}
    //                               </div>
    //                               <div className="text-gray-700 leading-relaxed">
    //                                 {entry.text}
    //                               </div>
    //                             </div>
    //                           </div>
    //                         ))}
    //                       </div>
    //                     ) : (
    //                       <div className="text-center py-12">
    //                         <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
    //                         <h3 className="text-lg font-medium text-gray-500 mb-2">
    //                           No Transcription Available
    //                         </h3>
    //                         <p className="text-gray-400">
    //                           This meeting doesn't have a transcription yet.
    //                         </p>
    //                       </div>
    //                     )}
    //                   </div>

    //                   {/* Participants Info */}
    //                   {selectedMeeting.participants &&
    //                     selectedMeeting.participants.length > 0 && (
    //                       <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
    //                         <div className="flex items-center text-sm text-gray-600">
    //                           <Users size={16} className="mr-2" />
    //                           <span className="font-medium">Participants:</span>
    //                           <span className="ml-2">
    //                             {selectedMeeting.participants.join(", ")}
    //                           </span>
    //                         </div>
    //                       </div>
    //                     )}
    //                 </>
    //               ) : (
    //                 <div className="flex items-center justify-center h-96">
    //                   <div className="text-center">
    //                     <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
    //                     <h3 className="text-lg font-medium text-gray-500 mb-2">
    //                       Select a Meeting
    //                     </h3>
    //                     <p className="text-gray-400">
    //                       Choose a meeting from the list to view its transcription
    //                     </p>
    //                   </div>
    //                 </div>
    //               )}
    //             </motion.div>
    //           </div>
    //         )}

    //         {/* Statistics Footer */}
    //         {meetingData.length > 0 && (
    //           <div className="mt-6 text-center text-gray-500 text-sm">
    //             Total: {meetingData.length} meeting
    //             {meetingData.length !== 1 ? "s" : ""} with transcriptions
    //           </div>
    //         )}
    //       </div>
    //     </div>
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#9810fa]">
            Transcriptions
          </h1>
        </header>

        {/* Main Content */}
        <section role="main" aria-label="Meeting transcriptions">
          {/* Loading State */}
          {fetchingData ? (
            <div className="flex justify-center items-center py-20" role="status" aria-live="polite">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" aria-hidden="true"></div>
              <span className="ml-3 text-gray-600">
                Loading transcriptions...
              </span>
            </div>
          ) : error ? (
            <div className="text-center py-20" role="alert">
              <div className="text-red-500 mb-4">
                <MessageSquare className="w-16 h-16 mx-auto mb-3" aria-hidden="true" />
                <h2 className="text-lg font-medium mb-2">
                  Error Loading Transcriptions
                </h2>
                <p>{error}</p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                type="button"
                aria-label="Retry loading transcriptions"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Panel - Meetings List */}
              <aside className="lg:col-span-1" aria-labelledby="meetings-list-heading">
                <motion.div
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.3,
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }),
                  }}
                  className="bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm"
                >
                  <header className="bg-purple-200 px-6 py-4">
                    <h2 id="meetings-list-heading" className="text-lg font-semibold text-gray-700 flex items-center">
                      <MessageSquare className="mr-2" size={20} aria-hidden="true" />
                      All Meetings
                    </h2>
                  </header>

                  <nav className="max-h-96 overflow-y-auto" role="list" aria-label="Meeting list">
                    {meetingData.length > 0 ? (
                      meetingData.map((meeting, index) => (
                        <article
                          key={meeting._id}
                          className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-purple-50 ${selectedMeeting?._id === meeting._id
                            ? "bg-purple-100 border-l-4 border-l-purple-500"
                            : ""
                            }`}
                          onClick={() => handleMeetingClick(meeting)}
                          role="listitem"
                          tabIndex={0}
                          aria-selected={selectedMeeting?._id === meeting._id}
                          aria-label={`Meeting: ${meeting.title}, Click to view transcription`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-gray-900 truncate">
                                {meeting.title}
                              </h3>
                              <div className="mt-1 flex items-center text-xs text-gray-500 space-x-2">
                                <span className="flex items-center">
                                  <Clock size={12} className="mr-1" aria-hidden="true" />
                                  {formatDate(meeting.createdAt)}
                                </span>
                                <span aria-hidden="true">•</span>
                                <span>
                                  {formatDuration(meeting.recordingLength || 0)}
                                </span>
                              </div>
                              <div className="mt-1">
                                <span className="inline-block bg-pink-400 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                                  {getCategory(meeting?.type)}
                                </span>
                              </div>
                              {meeting.participants &&
                                meeting.participants.length > 0 && (
                                  <div className="mt-1 flex items-center text-xs text-gray-500">
                                    <Users size={12} className="mr-1" aria-hidden="true" />
                                    <span className="truncate">
                                      {meeting.participants.slice(0, 2).join(", ")}
                                      {meeting.participants.length > 2 &&
                                        ` +${meeting.participants.length - 2}`}
                                    </span>
                                  </div>
                                )}
                            </div>
                            <ChevronRight
                              size={16}
                              className={`ml-2 text-gray-400 transition-transform ${selectedMeeting?._id === meeting._id
                                ? "rotate-90"
                                : ""
                                }`}
                              aria-hidden="true"
                            />
                          </div>
                        </article>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-500" role="status">
                        <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-300" aria-hidden="true" />
                        <p>No meetings found</p>
                      </div>
                    )}
                  </nav>
                </motion.div>
              </aside>

              {/* Right Panel - Transcription Display */}
              <article className="lg:col-span-2" aria-labelledby="transcription-heading">
                <motion.div
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.5,
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }),
                  }}
                  className="bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm"
                >
                  {selectedMeeting ? (
                    <>
                      {/* Transcription Header */}
                      <header className="bg-purple-200 px-6 py-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 id="transcription-heading" className="text-lg font-semibold text-gray-700">
                              {selectedMeeting.title}
                              {latestMeeting?._id === selectedMeeting._id && (
                                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full" role="status">
                                  Latest
                                </span>
                              )}
                            </h2>
                            <div className="mt-1 flex items-center text-sm text-gray-600 space-x-4">
                              <span>{formatDate(selectedMeeting.createdAt)}</span>
                              <span aria-hidden="true">•</span>
                              <span>
                                {formatDuration(
                                  selectedMeeting.recordingLength || 0
                                )}
                              </span>
                              <span aria-hidden="true">•</span>
                              <span>{getCategory(selectedMeeting?.type)}</span>
                            </div>
                          </div>
                          <nav className="flex items-stretch space-x-2" aria-label="Transcription actions">
                            <button
                              onClick={() => handleViewDetails(selectedMeeting)}
                              className="flex items-center px-3 cursor-pointer py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
                              type="button"
                              aria-label={`View details for ${selectedMeeting.title}`}
                            >
                              <Eye size={14} className="mr-1" aria-hidden="true" />
                              View Details
                            </button>
                            <button
                              onClick={() => handleDelete(selectedMeeting)}
                              className="flex items-center cursor-pointer px-3 py-1.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                              type="button"
                              aria-label={`Delete transcription for ${selectedMeeting.title}`}
                            >
                              <Trash2 size={14} aria-hidden="true" />
                            </button>
                          </nav>
                        </div>
                      </header>

                      {/* Transcription Content */}
                      <section className="p-6" aria-label="Transcription content">
                        {selectedMeeting.transcript &&
                          selectedMeeting.transcript.length > 0 ? (
                          <div className="space-y-4 max-h-96 overflow-y-auto" role="log" aria-label="Meeting transcript">
                            {selectedMeeting.transcript.map((entry, index) => (
                              <article
                                key={index}
                                className="flex space-x-3 p-3 bg-gray-50 rounded-lg"
                              >
                                <figure className="flex-shrink-0">
                                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center" aria-hidden="true">
                                    <span className="text-white text-sm font-medium">
                                      {entry.speaker.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                </figure>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                                    {entry.speaker}
                                  </h4>
                                  <p className="text-gray-700 leading-relaxed">
                                    {entry.text}
                                  </p>
                                </div>
                              </article>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" aria-hidden="true" />
                            <h3 className="text-lg font-medium text-gray-500 mb-2">
                              No Transcription Available
                            </h3>
                            <p className="text-gray-400">
                              This meeting doesn't have a transcription yet.
                            </p>
                          </div>
                        )}
                      </section>

                      {/* Participants Info */}
                      {selectedMeeting.participants &&
                        selectedMeeting.participants.length > 0 && (
                          <footer className="px-6 py-4 bg-gray-50 border-t border-gray-200" role="contentinfo">
                            <div className="flex items-center text-sm text-gray-600">
                              <Users size={16} className="mr-2" aria-hidden="true" />
                              <span className="font-medium">Participants:</span>
                              <span className="ml-2">
                                {selectedMeeting.participants.join(", ")}
                              </span>
                            </div>
                          </footer>
                        )}
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-96">
                      <div className="text-center">
                        <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" aria-hidden="true" />
                        <h2 className="text-lg font-medium text-gray-500 mb-2">
                          Select a Meeting
                        </h2>
                        <p className="text-gray-400">
                          Choose a meeting from the list to view its transcription
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </article>
            </div>
          )}
        </section>

        {/* Statistics Footer */}
        {meetingData.length > 0 && (
          <aside
            className="mt-6 text-center text-gray-500 text-sm"
            role="complementary"
            aria-label="Transcription statistics"
          >
            Total: {meetingData.length} meeting
            {meetingData.length !== 1 ? "s" : ""} with transcriptions
          </aside>
        )}
      </div>
    </main>
  );
}
