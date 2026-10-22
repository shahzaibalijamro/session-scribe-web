// // // // import { useState, useRef, useEffect } from 'react';
// // // // import { useParams, useLocation } from 'react-router-dom';
// // // // import { 
// // // //   Download, 
// // // //   Trash2, 
// // // //   SkipBack, 
// // // //   Play, 
// // // //   Pause, 
// // // //   SkipForward,
// // // //   Edit3,
// // // //   MessageCircle,
// // // //   Share2,
// // // //   ChevronDown
// // // // } from 'lucide-react';
// // // // import axios from 'axios';
// // // // import html2pdf from 'html2pdf.js';


// // // // export default function AudioAgendaPage() {
// // // //   const { id } = useParams();
// // // //   const location = useLocation();
// // // //   const [activeTab, setActiveTab] = useState('Summary');
// // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // //   const [currentTime, setCurrentTime] = useState(0);
// // // //   const [duration, setDuration] = useState(0);
// // // //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// // // //   const [meetingData, setMeetingData] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const audioRef = useRef(null);

// // // //   const handleDownloadPDF = () => {
// // // //       const element = document.getElementById("pdf-content");
// // // //       if (!element) return;

// // // //       const opt = {
// // // //         margin: 0.5,
// // // //         filename: `${"meeting-summary"}.pdf`,
// // // //         image: { type: 'jpeg', quality: 0.98 },
// // // //         html2canvas: { scale: 2, scrollY: 0 },
// // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // //       };

// // // //       html2pdf().set(opt).from(element).save();
// // // //     };

// // // //   // Fetch meeting data
// // // //   useEffect(() => {
// // // //     const fetchMeetingData = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         const response = await axios.get(
// // // //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// // // //           {
// // // //             headers: {
// // // //               Authorization: localStorage.getItem("token")
// // // //             }
// // // //           }
// // // //         );
// // // //         setMeetingData(response.data);
// // // //         // Ensure duration is a valid number
// // // //         const recordingLength = response.data.recordingLength || 0;
// // // //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// // // //       } catch (error) {
// // // //         console.error("Error fetching meeting data:", error);
// // // //         setError("Failed to load meeting data");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     if (id) {
// // // //       fetchMeetingData();
// // // //     }
// // // //   }, [id]);

// // // //   // Audio player effects
// // // //   useEffect(() => {
// // // //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// // // //       const audio = audioRef.current;

// // // //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// // // //       const updateDuration = () => {
// // // //         const audioDuration = audio.duration;
// // // //         const fallbackDuration = meetingData.recordingLength || 0;
// // // //         // Use audio duration if valid, otherwise fall back to recordingLength
// // // //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// // // //         setDuration(validDuration);
// // // //       };

// // // //       audio.addEventListener('timeupdate', updateTime);
// // // //       audio.addEventListener('loadedmetadata', updateDuration);
// // // //       audio.addEventListener('ended', () => setIsPlaying(false));

// // // //       return () => {
// // // //         audio.removeEventListener('timeupdate', updateTime);
// // // //         audio.removeEventListener('loadedmetadata', updateDuration);
// // // //         audio.removeEventListener('ended', () => setIsPlaying(false));
// // // //       };
// // // //     }
// // // //   }, [meetingData]);

// // // //   // Get page title based on meeting type
// // // //   const getPageTitle = () => {
// // // //     if (!meetingData) return 'Meeting Details';

// // // //     switch (meetingData.type) {
// // // //       case 'audio-notes':
// // // //         return 'Audio Notes';
// // // //       case 'live-transcription':
// // // //         return 'Live Transcription';
// // // //       case 'recording':
// // // //         return 'Meeting Recording';
// // // //       default:
// // // //         return 'Meeting Details';
// // // //     }
// // // //   };

// // // //   // Prepare summary data
// // // //   const getSummaryData = () => {
// // // //     if (!meetingData) return null;

// // // //     // Create bullet points from minutes
// // // //     const bulletPoints = meetingData.minutes?.map(minute => 
// // // //       `${minute.topic}: ${minute.details}`
// // // //     ) || [];

// // // //     // Add next steps as bullet points
// // // //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// // // //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// // // //     ) || [];

// // // //     // Create outline from minutes
// // // //     const outline = {};
// // // //     meetingData.minutes?.forEach(minute => {
// // // //       outline[minute.topic] = [minute.details];
// // // //     });

// // // //     // Add next steps section if available
// // // //     if (meetingData.nextSteps?.length > 0) {
// // // //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// // // //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// // // //       );
// // // //     }

// // // //     return {
// // // //       topic: meetingData.title,
// // // //       summary: meetingData.summary || 'No summary available',
// // // //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// // // //       outline
// // // //     };
// // // //   };

// // // //   // Prepare transcript data
// // // //   const getTranscriptData = () => {
// // // //     if (!meetingData) return null;

// // // //     // Generate speaker colors
// // // //     const speakerColors = [
// // // //       'bg-purple-500',
// // // //       'bg-pink-500', 
// // // //       'bg-blue-500',
// // // //       'bg-green-500',
// // // //       'bg-orange-500',
// // // //       'bg-red-500'
// // // //     ];

// // // //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// // // //     const speakerColorMap = {};
// // // //     uniqueSpeakers.forEach((speaker, index) => {
// // // //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// // // //     });

// // // //     // Calculate speaker percentages
// // // //     const speakerCounts = {};
// // // //     meetingData.transcript?.forEach(t => {
// // // //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// // // //     });

// // // //     const totalMessages = meetingData.transcript?.length || 0;
// // // //     const speakersString = Object.entries(speakerCounts)
// // // //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// // // //       .join(', ');

// // // //     return {
// // // //       keywords: 'No keywords available',
// // // //       speakers: speakersString || 'No speakers available',
// // // //       conversations: meetingData.transcript?.map((conv, index) => ({
// // // //         speaker: conv.speaker,
// // // //         text: conv.text,
// // // //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// // // //         // Since there's no time in schema, we can estimate based on position
// // // //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// // // //       })) || []
// // // //     };
// // // //   };

// // // //   const formatTime = (seconds) => {
// // // //     // Handle invalid numbers
// // // //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// // // //       return '0:00';
// // // //     }

// // // //     const mins = Math.floor(seconds / 60);
// // // //     const secs = Math.floor(seconds % 60);
// // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // //   };

// // // //   const handlePlayPause = () => {
// // // //     if (audioRef.current) {
// // // //       if (isPlaying) {
// // // //         audioRef.current.pause();
// // // //       } else {
// // // //         audioRef.current.play();
// // // //       }
// // // //       setIsPlaying(!isPlaying);
// // // //     }
// // // //   };

// // // //   const handleProgressClick = (e) => {
// // // //     if (audioRef.current) {
// // // //       const rect = e.currentTarget.getBoundingClientRect();
// // // //       const clickX = e.clientX - rect.left;
// // // //       const width = rect.width;
// // // //       const newTime = (clickX / width) * duration;
// // // //       audioRef.current.currentTime = newTime;
// // // //       setCurrentTime(newTime);
// // // //     }
// // // //   };

// // // //   const handleDelete = async () => {
// // // //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// // // //       try {
// // // //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// // // //           headers: {
// // // //             Authorization: localStorage.getItem("token")
// // // //           }
// // // //         });
// // // //         // Navigate back or show success message
// // // //         window.history.back();
// // // //       } catch (error) {
// // // //         console.error("Error deleting meeting:", error);
// // // //         alert("Failed to delete meeting. Please try again.");
// // // //       }
// // // //     }
// // // //   };

// // // //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// // // //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error || !meetingData) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // //         <div className="text-center">
// // // //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// // // //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const summaryData = getSummaryData();
// // // //   const transcriptData = getTranscriptData();
// // // //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // //       <div className="max-w-6xl mx-auto">
// // // //         {/* Header */}
// // // //         <div className="flex items-center justify-between mb-6">
// // // //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// // // //           <div className="flex items-center space-x-3">
// // // //             <button onClick={handleDownloadPDF} className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // //               <Download size={20} />
// // // //             </button>
// // // //             <button 
// // // //               onClick={handleDelete}
// // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// // // //             >
// // // //               <Trash2 size={16} />
// // // //               <span>Delete</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Audio Player - Only show for audio-notes type */}
// // // //         {shouldShowAudioPlayer && (
// // // //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// // // //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// // // //             {/* Progress Bar */}
// // // //             <div className="mb-4">
// // // //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// // // //                 <span>{formatTime(currentTime)}</span>
// // // //                 <span>{formatTime(duration)}</span>
// // // //               </div>
// // // //               <div 
// // // //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// // // //                 onClick={handleProgressClick}
// // // //               >
// // // //                 <div 
// // // //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// // // //                   style={{ width: `${progressPercentage}%` }}
// // // //                 ></div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Controls */}
// // // //             <div className="flex items-center justify-between">
// // // //               <div className="flex items-center space-x-4">
// // // //                 {/* Playback Controls */}
// // // //                 <button 
// // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // //                 >
// // // //                   <SkipBack size={20} />
// // // //                 </button>
// // // //                 <button 
// // // //                   onClick={handlePlayPause}
// // // //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// // // //                 >
// // // //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// // // //                 </button>
// // // //                 <button 
// // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // //                 >
// // // //                   <SkipForward size={20} />
// // // //                 </button>

// // // //                 {/* Speed Control */}
// // // //                 <div className="flex items-center space-x-1">
// // // //                   <button 
// // // //                     onClick={() => {
// // // //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// // // //                       setPlaybackSpeed(newSpeed);
// // // //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// // // //                     }}
// // // //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// // // //                   >
// // // //                     {playbackSpeed}x
// // // //                   </button>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Action Icons */}
// // // //               <div className="flex items-center space-x-2">
// // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // //                   <Edit3 size={20} />
// // // //                 </button>
// // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // //                   <MessageCircle size={20} />
// // // //                 </button>
// // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // //                   <Share2 size={20} />
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Tab Navigation */}
// // // //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// // // //           <div className="flex gap-1">
// // // //             <button
// // // //               onClick={() => setActiveTab('Summary')}
// // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // //                 activeTab === 'Summary'
// // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // //                   : 'text-gray-600 hover:text-purple-600'
// // // //               }`}
// // // //             >
// // // //               Summary
// // // //             </button>
// // // //             <button
// // // //               onClick={() => setActiveTab('Transcript')}
// // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // //                 activeTab === 'Transcript'
// // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // //                   : 'text-gray-600 hover:text-purple-600'
// // // //               }`}
// // // //             >
// // // //               Transcript
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Content Area */}
// // // //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// // // //           {activeTab === 'Summary' ? (
// // // //             <div id='pdf-content' className="p-6">
// // // //               {/* Topic */}
// // // //               <div className="mb-6">
// // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // //                   Topic: {summaryData.topic}
// // // //                 </h3>
// // // //                 {summaryData.summary && (
// // // //                   <p className="text-gray-700 leading-relaxed">{summaryData.summary}</p>
// // // //                 )}
// // // //               </div>

// // // //               {/* Participants */}
// // // //               {meetingData.participants && meetingData.participants.length > 0 && (
// // // //                 <div className="mb-6">
// // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// // // //                   <p className="text-gray-700">{meetingData.participants.join(', ')}</p>
// // // //                 </div>
// // // //               )}

// // // //               {/* Agenda */}
// // // //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // //                 <div className="mb-8">
// // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// // // //                   <ul className="space-y-2">
// // // //                     {meetingData.agenda.map((item, index) => (
// // // //                       <li key={index} className="flex items-start space-x-3">
// // // //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// // // //                         <p className="text-gray-700 leading-relaxed">{item}</p>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               )}

// // // //               {/* Main Points */}
// // // //               {summaryData.bulletPoints.length > 0 && (
// // // //                 <div className="mb-8">
// // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// // // //                   <ul className="space-y-3">
// // // //                     {summaryData.bulletPoints.map((point, index) => (
// // // //                       <li key={index} className="flex items-start space-x-3">
// // // //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// // // //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               )}

// // // //               {/* Outline */}
// // // //               {Object.keys(summaryData.outline).length > 0 && (
// // // //                 <div>
// // // //                   <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Outline</h3>
// // // //                   <div className="space-y-6">
// // // //                     {Object.entries(summaryData.outline).map(([section, points]) => (
// // // //                       <div key={section}>
// // // //                         <h4 className="text-lg font-medium text-gray-900 mb-3">{section}</h4>
// // // //                         <ul className="space-y-2 ml-4">
// // // //                           {points.map((point, index) => (
// // // //                             <li key={index} className="flex items-start space-x-3">
// // // //                               <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
// // // //                               <p className="text-gray-700">{point}</p>
// // // //                             </li>
// // // //                           ))}
// // // //                         </ul>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           ) : (
// // // //             <div className="p-6">
// // // //               {/* Keywords Section */}
// // // //               <div className="mb-6">
// // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// // // //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// // // //               </div>

// // // //               {/* Speakers Section */}
// // // //               <div className="mb-8">
// // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// // // //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// // // //               </div>

// // // //               {/* Conversation */}
// // // //               <div className="space-y-4">
// // // //                 {transcriptData.conversations.length > 0 ? (
// // // //                   transcriptData.conversations.map((conv, index) => (
// // // //                     <div key={index} className="flex items-start space-x-4">
// // // //                       {/* Speaker Avatar */}
// // // //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// // // //                         {conv.speaker.charAt(0)}
// // // //                       </div>

// // // //                       {/* Message Content */}
// // // //                       <div className="flex-1 min-w-0">
// // // //                         <div className="flex items-center space-x-2 mb-1">
// // // //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// // // //                           {shouldShowAudioPlayer && conv.time > 0 && (
// // // //                             <span className="text-sm text-green-600 flex items-center">
// // // //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// // // //                               {formatTime(conv.time)}
// // // //                             </span>
// // // //                           )}
// // // //                         </div>
// // // //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))
// // // //                 ) : (
// // // //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Scroll to bottom button */}
// // // //         <div className="fixed bottom-6 right-6">
// // // //           <button 
// // // //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// // // //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// // // //           >
// // // //             <ChevronDown size={20} />
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // // // // // // import { useState, useRef, useEffect } from 'react';
// // // // // // // // // // import { useParams, useLocation } from 'react-router-dom';
// // // // // // // // // // import { 
// // // // // // // // // //   Download, 
// // // // // // // // // //   Trash2, 
// // // // // // // // // //   SkipBack, 
// // // // // // // // // //   Play, 
// // // // // // // // // //   Pause, 
// // // // // // // // // //   SkipForward,
// // // // // // // // // //   Edit3,
// // // // // // // // // //   MessageCircle,
// // // // // // // // // //   Share2,
// // // // // // // // // //   ChevronDown,
// // // // // // // // // //   Mail
// // // // // // // // // // } from 'lucide-react';
// // // // // // // // // // import axios from 'axios';
// // // // // // // // // // import html2pdf from 'html2pdf.js';

// // // // // // // // // // export default function AudioAgendaPage() {
// // // // // // // // // //   const { id } = useParams();
// // // // // // // // // //   const location = useLocation();
// // // // // // // // // //   const [activeTab, setActiveTab] = useState('Summary');
// // // // // // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // // // // // //   const [currentTime, setCurrentTime] = useState(0);
// // // // // // // // // //   const [duration, setDuration] = useState(0);
// // // // // // // // // //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// // // // // // // // // //   const [meetingData, setMeetingData] = useState(null);
// // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // //   const [isSendingEmail, setIsSendingEmail] = useState(false);
// // // // // // // // // //   const [emailSent, setEmailSent] = useState(false);
// // // // // // // // // //   const [emailError, setEmailError] = useState(null);
// // // // // // // // // //   const audioRef = useRef(null);

// // // // // // // // // //   // Fetch meeting data
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchMeetingData = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         setLoading(true);
// // // // // // // // // //         const response = await axios.get(
// // // // // // // // // //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// // // // // // // // // //           {
// // // // // // // // // //             headers: {
// // // // // // // // // //               Authorization: localStorage.getItem("token")
// // // // // // // // // //             }
// // // // // // // // // //           }
// // // // // // // // // //         );
// // // // // // // // // //         setMeetingData(response.data);
// // // // // // // // // //         // Ensure duration is a valid number
// // // // // // // // // //         const recordingLength = response.data.recordingLength || 0;
// // // // // // // // // //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error fetching meeting data:", error);
// // // // // // // // // //         setError("Failed to load meeting data");
// // // // // // // // // //       } finally {
// // // // // // // // // //         setLoading(false);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     if (id) {
// // // // // // // // // //       fetchMeetingData();
// // // // // // // // // //     }
// // // // // // // // // //   }, [id]);

// // // // // // // // // //   // Audio player effects
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// // // // // // // // // //       const audio = audioRef.current;

// // // // // // // // // //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// // // // // // // // // //       const updateDuration = () => {
// // // // // // // // // //         const audioDuration = audio.duration;
// // // // // // // // // //         const fallbackDuration = meetingData.recordingLength || 0;
// // // // // // // // // //         // Use audio duration if valid, otherwise fall back to recordingLength
// // // // // // // // // //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// // // // // // // // // //         setDuration(validDuration);
// // // // // // // // // //       };

// // // // // // // // // //       audio.addEventListener('timeupdate', updateTime);
// // // // // // // // // //       audio.addEventListener('loadedmetadata', updateDuration);
// // // // // // // // // //       audio.addEventListener('ended', () => setIsPlaying(false));

// // // // // // // // // //       return () => {
// // // // // // // // // //         audio.removeEventListener('timeupdate', updateTime);
// // // // // // // // // //         audio.removeEventListener('loadedmetadata', updateDuration);
// // // // // // // // // //         audio.removeEventListener('ended', () => setIsPlaying(false));
// // // // // // // // // //       };
// // // // // // // // // //     }
// // // // // // // // // //   }, [meetingData]);

// // // // // // // // // //   // Get page title based on meeting type
// // // // // // // // // //   const getPageTitle = () => {
// // // // // // // // // //     if (!meetingData) return 'Meeting Details';

// // // // // // // // // //     switch (meetingData.type) {
// // // // // // // // // //       case 'audio-notes':
// // // // // // // // // //         return 'Audio Notes';
// // // // // // // // // //       case 'live-transcription':
// // // // // // // // // //         return 'Live Transcription';
// // // // // // // // // //       case 'recording':
// // // // // // // // // //         return 'Meeting Recording';
// // // // // // // // // //       default:
// // // // // // // // // //         return 'Meeting Details';
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // Prepare summary data
// // // // // // // // // //   const getSummaryData = () => {
// // // // // // // // // //     if (!meetingData) return null;

// // // // // // // // // //     // Create bullet points from minutes
// // // // // // // // // //     const bulletPoints = meetingData.minutes?.map(minute => 
// // // // // // // // // //       `${minute.topic}: ${minute.details}`
// // // // // // // // // //     ) || [];

// // // // // // // // // //     // Add next steps as bullet points
// // // // // // // // // //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// // // // // // // // // //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// // // // // // // // // //     ) || [];

// // // // // // // // // //     // Create outline from minutes
// // // // // // // // // //     const outline = {};
// // // // // // // // // //     meetingData.minutes?.forEach(minute => {
// // // // // // // // // //       outline[minute.topic] = [minute.details];
// // // // // // // // // //     });

// // // // // // // // // //     // Add next steps section if available
// // // // // // // // // //     if (meetingData.nextSteps?.length > 0) {
// // // // // // // // // //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// // // // // // // // // //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// // // // // // // // // //       );
// // // // // // // // // //     }

// // // // // // // // // //     return {
// // // // // // // // // //       topic: meetingData.title,
// // // // // // // // // //       summary: meetingData.summary || 'No summary available',
// // // // // // // // // //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// // // // // // // // // //       outline
// // // // // // // // // //     };
// // // // // // // // // //   };

// // // // // // // // // //   // Prepare transcript data
// // // // // // // // // //   const getTranscriptData = () => {
// // // // // // // // // //     if (!meetingData) return null;

// // // // // // // // // //     // Generate speaker colors
// // // // // // // // // //     const speakerColors = [
// // // // // // // // // //       'bg-purple-500',
// // // // // // // // // //       'bg-pink-500', 
// // // // // // // // // //       'bg-blue-500',
// // // // // // // // // //       'bg-green-500',
// // // // // // // // // //       'bg-orange-500',
// // // // // // // // // //       'bg-red-500'
// // // // // // // // // //     ];

// // // // // // // // // //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// // // // // // // // // //     const speakerColorMap = {};
// // // // // // // // // //     uniqueSpeakers.forEach((speaker, index) => {
// // // // // // // // // //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// // // // // // // // // //     });

// // // // // // // // // //     // Calculate speaker percentages
// // // // // // // // // //     const speakerCounts = {};
// // // // // // // // // //     meetingData.transcript?.forEach(t => {
// // // // // // // // // //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// // // // // // // // // //     });

// // // // // // // // // //     const totalMessages = meetingData.transcript?.length || 0;
// // // // // // // // // //     const speakersString = Object.entries(speakerCounts)
// // // // // // // // // //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// // // // // // // // // //       .join(', ');

// // // // // // // // // //     // Extract keywords from transcript (simple implementation)
// // // // // // // // // //     const allText = meetingData.transcript?.map(t => t.text).join(' ') || '';
// // // // // // // // // //     const words = allText.toLowerCase()
// // // // // // // // // //       .split(/\s+/)
// // // // // // // // // //       .filter(word => word.length > 3)
// // // // // // // // // //       .slice(0, 20); // Take first 20 words as keywords
// // // // // // // // // //     const keywords = [...new Set(words)].join(', ');

// // // // // // // // // //     return {
// // // // // // // // // //       keywords: keywords || 'No keywords available',
// // // // // // // // // //       speakers: speakersString || 'No speakers available',
// // // // // // // // // //       conversations: meetingData.transcript?.map((conv, index) => ({
// // // // // // // // // //         speaker: conv.speaker,
// // // // // // // // // //         text: conv.text,
// // // // // // // // // //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// // // // // // // // // //         // Since there's no time in schema, we can estimate based on position
// // // // // // // // // //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// // // // // // // // // //       })) || []
// // // // // // // // // //     };
// // // // // // // // // //   };

// // // // // // // // // //   const handleDownloadPDF = () => {
// // // // // // // // // //     const element = document.getElementById("pdf-content");
// // // // // // // // // //     if (!element) return;

// // // // // // // // // //     const opt = {
// // // // // // // // // //       margin: 0.5,
// // // // // // // // // //       filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // // // // // // //       image: { type: 'jpeg', quality: 0.98 },
// // // // // // // // // //       html2canvas: { scale: 2, scrollY: 0 },
// // // // // // // // // //       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // // // // // // //     };

// // // // // // // // // //     html2pdf().set(opt).from(element).save();
// // // // // // // // // //   };

// // // // // // // // // //   const handleSendEmailPDF = async () => {
// // // // // // // // // //     if (!meetingData?.emailRecipients || meetingData.emailRecipients.length === 0) {
// // // // // // // // // //       setEmailError("No email recipients found");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setIsSendingEmail(true);
// // // // // // // // // //     setEmailError(null);

// // // // // // // // // //     try {
// // // // // // // // // //       // Generate PDF as blob
// // // // // // // // // //       const element = document.getElementById("pdf-content");
// // // // // // // // // //       if (!element) {
// // // // // // // // // //         throw new Error("PDF content not found");
// // // // // // // // // //       }

// // // // // // // // // //       const opt = {
// // // // // // // // // //         margin: 0.5,
// // // // // // // // // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // // // // // // //         image: { type: 'jpeg', quality: 0.98 },
// // // // // // // // // //         html2canvas: { scale: 2, scrollY: 0 },
// // // // // // // // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // // // // // // //       };

// // // // // // // // // //       // Generate PDF as blob instead of downloading
// // // // // // // // // //       const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');

// // // // // // // // // //       // Create FormData to send PDF and email data
// // // // // // // // // //       const formData = new FormData();
// // // // // // // // // //       formData.append('pdf', pdfBlob, `${meetingData?.title || "meeting-summary"}.pdf`);
// // // // // // // // // //       formData.append('recipients', JSON.stringify(meetingData.emailRecipients));
// // // // // // // // // //       formData.append('meetingTitle', meetingData?.title || "Meeting Summary");
// // // // // // // // // //       formData.append('meetingId', meetingData?._id || '');

// // // // // // // // // //       // Send to your email API endpoint
// // // // // // // // // //       const response = await axios.post(
// // // // // // // // // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
// // // // // // // // // //         formData,
// // // // // // // // // //         {
// // // // // // // // // //           headers: {
// // // // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // // // //             Authorization: localStorage.getItem("token"),
// // // // // // // // // //           },
// // // // // // // // // //         }
// // // // // // // // // //       );

// // // // // // // // // //       if (response.data.success) {
// // // // // // // // // //         setEmailSent(true);
// // // // // // // // // //         setTimeout(() => setEmailSent(false), 5000); // Hide success message after 5 seconds
// // // // // // // // // //       } else {
// // // // // // // // // //         throw new Error(response.data.message || "Failed to send emails");
// // // // // // // // // //       }

// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error sending email:", error);
// // // // // // // // // //       setEmailError(error.message || "Failed to send emails. Please try again.");
// // // // // // // // // //       setTimeout(() => setEmailError(null), 5000); // Hide error message after 5 seconds
// // // // // // // // // //     } finally {
// // // // // // // // // //       setIsSendingEmail(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const formatTime = (seconds) => {
// // // // // // // // // //     // Handle invalid numbers
// // // // // // // // // //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// // // // // // // // // //       return '0:00';
// // // // // // // // // //     }

// // // // // // // // // //     const mins = Math.floor(seconds / 60);
// // // // // // // // // //     const secs = Math.floor(seconds % 60);
// // // // // // // // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // // // // // // // //   };

// // // // // // // // // //   const handlePlayPause = () => {
// // // // // // // // // //     if (audioRef.current) {
// // // // // // // // // //       if (isPlaying) {
// // // // // // // // // //         audioRef.current.pause();
// // // // // // // // // //       } else {
// // // // // // // // // //         audioRef.current.play();
// // // // // // // // // //       }
// // // // // // // // // //       setIsPlaying(!isPlaying);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleProgressClick = (e) => {
// // // // // // // // // //     if (audioRef.current) {
// // // // // // // // // //       const rect = e.currentTarget.getBoundingClientRect();
// // // // // // // // // //       const clickX = e.clientX - rect.left;
// // // // // // // // // //       const width = rect.width;
// // // // // // // // // //       const newTime = (clickX / width) * duration;
// // // // // // // // // //       audioRef.current.currentTime = newTime;
// // // // // // // // // //       setCurrentTime(newTime);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleDelete = async () => {
// // // // // // // // // //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// // // // // // // // // //       try {
// // // // // // // // // //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// // // // // // // // // //           headers: {
// // // // // // // // // //             Authorization: localStorage.getItem("token")
// // // // // // // // // //           }
// // // // // // // // // //         });
// // // // // // // // // //         // Navigate back or show success message
// // // // // // // // // //         window.history.back();
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error deleting meeting:", error);
// // // // // // // // // //         alert("Failed to delete meeting. Please try again.");
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// // // // // // // // // //   if (loading) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // // // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// // // // // // // // // //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   if (error || !meetingData) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // // // // // // //         <div className="text-center">
// // // // // // // // // //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// // // // // // // // // //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   const summaryData = getSummaryData();
// // // // // // // // // //   const transcriptData = getTranscriptData();
// // // // // // // // // //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // // // // // //       <div className="max-w-6xl mx-auto">
// // // // // // // // // //         {/* Header */}
// // // // // // // // // //         <div className="flex items-center justify-between mb-6">
// // // // // // // // // //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// // // // // // // // // //           <div className="flex items-center space-x-3">
// // // // // // // // // //             {/* Send Email Button - Only show if emailRecipients exist */}
// // // // // // // // // //             {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={handleSendEmailPDF}
// // // // // // // // // //                 disabled={isSendingEmail}
// // // // // // // // // //                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
// // // // // // // // // //                   isSendingEmail 
// // // // // // // // // //                     ? "bg-gray-400 cursor-not-allowed" 
// // // // // // // // // //                     : "bg-green-600 hover:bg-green-700"
// // // // // // // // // //                 } text-white`}
// // // // // // // // // //               >
// // // // // // // // // //                 <Mail size={16} />
// // // // // // // // // //                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
// // // // // // // // // //               </button>
// // // // // // // // // //             )}

// // // // // // // // // //             <button 
// // // // // // // // // //               onClick={handleDownloadPDF}
// // // // // // // // // //               className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // // // // // //             >
// // // // // // // // // //               <Download size={20} />
// // // // // // // // // //             </button>
// // // // // // // // // //             <button 
// // // // // // // // // //               onClick={handleDelete}
// // // // // // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// // // // // // // // // //             >
// // // // // // // // // //               <Trash2 size={16} />
// // // // // // // // // //               <span>Delete</span>
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Email Recipients Display */}
// // // // // // // // // //         {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // // // // // // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // // // // // // //             <h4 className="text-sm font-medium text-blue-800 mb-2">
// // // // // // // // // //               📧 Email Recipients ({meetingData.emailRecipients.length})
// // // // // // // // // //             </h4>
// // // // // // // // // //             <div className="text-sm text-blue-700">
// // // // // // // // // //               {meetingData.emailRecipients.join(", ")}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* Success/Error Messages */}
// // // // // // // // // //         {emailSent && (
// // // // // // // // // //           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // //               <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
// // // // // // // // // //                 <span className="text-white text-xs">✓</span>
// // // // // // // // // //               </div>
// // // // // // // // // //               <p className="text-green-800 font-medium">
// // // // // // // // // //                 Meeting summary sent successfully to all recipients!
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //         {emailError && (
// // // // // // // // // //           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// // // // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // // // //               <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// // // // // // // // // //                 <span className="text-white text-xs">!</span>
// // // // // // // // // //               </div>
// // // // // // // // // //               <p className="text-red-800 font-medium">
// // // // // // // // // //                 {emailError}
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* Audio Player - Only show for audio-notes type */}
// // // // // // // // // //         {shouldShowAudioPlayer && (
// // // // // // // // // //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// // // // // // // // // //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// // // // // // // // // //             {/* Progress Bar */}
// // // // // // // // // //             <div className="mb-4">
// // // // // // // // // //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// // // // // // // // // //                 <span>{formatTime(currentTime)}</span>
// // // // // // // // // //                 <span>{formatTime(duration)}</span>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div 
// // // // // // // // // //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// // // // // // // // // //                 onClick={handleProgressClick}
// // // // // // // // // //               >
// // // // // // // // // //                 <div 
// // // // // // // // // //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// // // // // // // // // //                   style={{ width: `${progressPercentage}%` }}
// // // // // // // // // //                 ></div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Controls */}
// // // // // // // // // //             <div className="flex items-center justify-between">
// // // // // // // // // //               <div className="flex items-center space-x-4">
// // // // // // // // // //                 {/* Playback Controls */}
// // // // // // // // // //                 <button 
// // // // // // // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// // // // // // // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // // // // // //                 >
// // // // // // // // // //                   <SkipBack size={20} />
// // // // // // // // // //                 </button>
// // // // // // // // // //                 <button 
// // // // // // // // // //                   onClick={handlePlayPause}
// // // // // // // // // //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// // // // // // // // // //                 >
// // // // // // // // // //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// // // // // // // // // //                 </button>
// // // // // // // // // //                 <button 
// // // // // // // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// // // // // // // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // // // // // //                 >
// // // // // // // // // //                   <SkipForward size={20} />
// // // // // // // // // //                 </button>

// // // // // // // // // //                 {/* Speed Control */}
// // // // // // // // // //                 <div className="flex items-center space-x-1">
// // // // // // // // // //                   <button 
// // // // // // // // // //                     onClick={() => {
// // // // // // // // // //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// // // // // // // // // //                       setPlaybackSpeed(newSpeed);
// // // // // // // // // //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// // // // // // // // // //                     }}
// // // // // // // // // //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// // // // // // // // // //                   >
// // // // // // // // // //                     {playbackSpeed}x
// // // // // // // // // //                   </button>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Action Icons */}
// // // // // // // // // //               <div className="flex items-center space-x-2">
// // // // // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // // // // //                   <Edit3 size={20} />
// // // // // // // // // //                 </button>
// // // // // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // // // // //                   <MessageCircle size={20} />
// // // // // // // // // //                 </button>
// // // // // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // // // // //                   <Share2 size={20} />
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* Tab Navigation */}
// // // // // // // // // //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// // // // // // // // // //           <div className="flex gap-1">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setActiveTab('Summary')}
// // // // // // // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // // // // // // //                 activeTab === 'Summary'
// // // // // // // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // // // // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // // // // // // //               }`}
// // // // // // // // // //             >
// // // // // // // // // //               Summary
// // // // // // // // // //             </button>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setActiveTab('Transcript')}
// // // // // // // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // // // // // // //                 activeTab === 'Transcript'
// // // // // // // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // // // // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // // // // // // //               }`}
// // // // // // // // // //             >
// // // // // // // // // //               Transcript
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Content Area */}
// // // // // // // // // //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// // // // // // // // // //           {activeTab === 'Summary' ? (
// // // // // // // // // //             <div id="pdf-content" className="p-6">
// // // // // // // // // //               {/* Meeting Title for PDF */}
// // // // // // // // // //               <div className="mb-6 border-b pb-4">
// // // // // // // // // //                 <h1 className="text-2xl font-bold text-gray-800">{meetingData.title}</h1>
// // // // // // // // // //                 <p className="text-sm text-gray-500 mt-1">
// // // // // // // // // //                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // // // // // // // // //                     year: 'numeric',
// // // // // // // // // //                     month: 'long',
// // // // // // // // // //                     day: 'numeric'
// // // // // // // // // //                   })}
// // // // // // // // // //                 </p>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Topic */}
// // // // // // // // // //               <div className="mb-6">
// // // // // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // // // // // // // //                   Topic: {summaryData.topic}
// // // // // // // // // //                 </h3>
// // // // // // // // // //                 {summaryData.summary && (
// // // // // // // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
// // // // // // // // // //                     <p>{summaryData.summary}</p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Participants */}
// // // // // // // // // //               {meetingData.participants && meetingData.participants.length > 0 && (
// // // // // // // // // //                 <div className="mb-6">
// // // // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// // // // // // // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
// // // // // // // // // //                     <p>{meetingData.participants.join(', ')}</p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}

// // // // // // // // // //               {/* Agenda */}
// // // // // // // // // //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // // // // // // // //                 <div className="mb-8">
// // // // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// // // // // // // // // //                   {meetingData.agenda.map((item, index) => (
// // // // // // // // // //                     <div key={index} className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed">
// // // // // // // // // //                       <p>{index + 1}. {item}</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}

// // // // // // // // // //               {/* Minutes */}
// // // // // // // // // //               {meetingData.minutes && meetingData.minutes.length > 0 && (
// // // // // // // // // //                 <div className="mb-8">
// // // // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
// // // // // // // // // //                   {meetingData.minutes.map((minute, index) => (
// // // // // // // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // // // // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</p>
// // // // // // // // // //                       <p className="text-gray-600">{minute.details}</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}

// // // // // // // // // //               {/* Next Steps */}
// // // // // // // // // //               {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // // // // // // // // //                 <div className="mb-8">
// // // // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
// // // // // // // // // //                   {meetingData.nextSteps.map((step, index) => (
// // // // // // // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // // // // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</p>
// // // // // // // // // //                       <p className="text-gray-600">
// // // // // // // // // //                         <strong>Assignee:</strong> {step.assignee}<br />
// // // // // // // // // //                         <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // // // // // // // // //                       </p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}

// // // // // // // // // //               {/* Key Points - Only if no detailed minutes/next steps available */}
// // // // // // // // // //               {(!meetingData.minutes || meetingData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
// // // // // // // // // //                 <div className="mb-8">
// // // // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// // // // // // // // // //                   <ul className="space-y-3">
// // // // // // // // // //                     {summaryData.bulletPoints.map((point, index) => (
// // // // // // // // // //                       <li key={index} className="flex items-start space-x-3">
// // // // // // // // // //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// // // // // // // // // //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// // // // // // // // // //                       </li>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </ul>
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}
// // // // // // // // // //             </div>
// // // // // // // // // //           ) : (
// // // // // // // // // //             <div className="p-6">
// // // // // // // // // //               {/* Keywords Section */}
// // // // // // // // // //               <div className="mb-6">
// // // // // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// // // // // // // // // //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Speakers Section */}
// // // // // // // // // //               <div className="mb-8">
// // // // // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// // // // // // // // // //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Conversation */}
// // // // // // // // // //               <div className="space-y-4">
// // // // // // // // // //                 {transcriptData.conversations.length > 0 ? (
// // // // // // // // // //                   transcriptData.conversations.map((conv, index) => (
// // // // // // // // // //                     <div key={index} className="flex items-start space-x-4">
// // // // // // // // // //                       {/* Speaker Avatar */}
// // // // // // // // // //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// // // // // // // // // //                         {conv.speaker.charAt(0)}
// // // // // // // // // //                       </div>

// // // // // // // // // //                       {/* Message Content */}
// // // // // // // // // //                       <div className="flex-1 min-w-0">
// // // // // // // // // //                         <div className="flex items-center space-x-2 mb-1">
// // // // // // // // // //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// // // // // // // // // //                           {shouldShowAudioPlayer && conv.time > 0 && (
// // // // // // // // // //                             <span className="text-sm text-green-600 flex items-center">
// // // // // // // // // //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// // // // // // // // // //                               {formatTime(conv.time)}
// // // // // // // // // //                             </span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))
// // // // // // // // // //                 ) : (
// // // // // // // // // //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// // // // // // // // // //                 )}
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Scroll to bottom button */}
// // // // // // // // // //         <div className="fixed bottom-6 right-6">
// // // // // // // // // //           <button 
// // // // // // // // // //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// // // // // // // // // //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// // // // // // // // // //           >
// // // // // // // // // //             <ChevronDown size={20} />
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // import { useState, useRef, useEffect } from 'react';
// // // // // // // // import { useParams, useLocation } from 'react-router-dom';
// // // // // // // // import { 
// // // // // // // //   Download, 
// // // // // // // //   Trash2, 
// // // // // // // //   SkipBack, 
// // // // // // // //   Play, 
// // // // // // // //   Pause, 
// // // // // // // //   SkipForward,
// // // // // // // //   Edit3,
// // // // // // // //   MessageCircle,
// // // // // // // //   Share2,
// // // // // // // //   ChevronDown,
// // // // // // // //   Mail
// // // // // // // // } from 'lucide-react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import html2pdf from 'html2pdf.js';

// // // // // // // // export default function AudioAgendaPage() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const location = useLocation();
// // // // // // // //   const [activeTab, setActiveTab] = useState('Summary');
// // // // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // // // //   const [currentTime, setCurrentTime] = useState(0);
// // // // // // // //   const [duration, setDuration] = useState(0);
// // // // // // // //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// // // // // // // //   const [meetingData, setMeetingData] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [error, setError] = useState(null);
// // // // // // // //   const [isSendingEmail, setIsSendingEmail] = useState(false);
// // // // // // // //   const [emailSent, setEmailSent] = useState(false);
// // // // // // // //   const [emailError, setEmailError] = useState(null);
// // // // // // // //   const audioRef = useRef(null);

// // // // // // // //   // Fetch meeting data
// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchMeetingData = async () => {
// // // // // // // //       try {
// // // // // // // //         setLoading(true);
// // // // // // // //         const response = await axios.get(
// // // // // // // //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// // // // // // // //           {
// // // // // // // //             headers: {
// // // // // // // //               Authorization: localStorage.getItem("token")
// // // // // // // //             }
// // // // // // // //           }
// // // // // // // //         );
// // // // // // // //         setMeetingData(response.data);
// // // // // // // //         // Ensure duration is a valid number
// // // // // // // //         const recordingLength = response.data.recordingLength || 0;
// // // // // // // //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error fetching meeting data:", error);
// // // // // // // //         setError("Failed to load meeting data");
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     if (id) {
// // // // // // // //       fetchMeetingData();
// // // // // // // //     }
// // // // // // // //   }, [id]);

// // // // // // // //   // Audio player effects
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// // // // // // // //       const audio = audioRef.current;

// // // // // // // //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// // // // // // // //       const updateDuration = () => {
// // // // // // // //         const audioDuration = audio.duration;
// // // // // // // //         const fallbackDuration = meetingData.recordingLength || 0;
// // // // // // // //         // Use audio duration if valid, otherwise fall back to recordingLength
// // // // // // // //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// // // // // // // //         setDuration(validDuration);
// // // // // // // //       };

// // // // // // // //       audio.addEventListener('timeupdate', updateTime);
// // // // // // // //       audio.addEventListener('loadedmetadata', updateDuration);
// // // // // // // //       audio.addEventListener('ended', () => setIsPlaying(false));

// // // // // // // //       return () => {
// // // // // // // //         audio.removeEventListener('timeupdate', updateTime);
// // // // // // // //         audio.removeEventListener('loadedmetadata', updateDuration);
// // // // // // // //         audio.removeEventListener('ended', () => setIsPlaying(false));
// // // // // // // //       };
// // // // // // // //     }
// // // // // // // //   }, [meetingData]);

// // // // // // // //   // Get page title based on meeting type
// // // // // // // //   const getPageTitle = () => {
// // // // // // // //     if (!meetingData) return 'Meeting Details';

// // // // // // // //     switch (meetingData.type) {
// // // // // // // //       case 'audio-notes':
// // // // // // // //         return 'Audio Notes';
// // // // // // // //       case 'live-transcription':
// // // // // // // //         return 'Live Transcription';
// // // // // // // //       case 'recording':
// // // // // // // //         return 'Meeting Recording';
// // // // // // // //       default:
// // // // // // // //         return 'Meeting Details';
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Prepare summary data
// // // // // // // //   const getSummaryData = () => {
// // // // // // // //     if (!meetingData) return null;

// // // // // // // //     // Create bullet points from minutes
// // // // // // // //     const bulletPoints = meetingData.minutes?.map(minute => 
// // // // // // // //       `${minute.topic}: ${minute.details}`
// // // // // // // //     ) || [];

// // // // // // // //     // Add next steps as bullet points
// // // // // // // //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// // // // // // // //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// // // // // // // //     ) || [];

// // // // // // // //     // Create outline from minutes
// // // // // // // //     const outline = {};
// // // // // // // //     meetingData.minutes?.forEach(minute => {
// // // // // // // //       outline[minute.topic] = [minute.details];
// // // // // // // //     });

// // // // // // // //     // Add next steps section if available
// // // // // // // //     if (meetingData.nextSteps?.length > 0) {
// // // // // // // //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// // // // // // // //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// // // // // // // //       );
// // // // // // // //     }

// // // // // // // //     return {
// // // // // // // //       topic: meetingData.title,
// // // // // // // //       summary: meetingData.summary || 'No summary available',
// // // // // // // //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// // // // // // // //       outline
// // // // // // // //     };
// // // // // // // //   };

// // // // // // // //   // Prepare transcript data
// // // // // // // //   const getTranscriptData = () => {
// // // // // // // //     if (!meetingData) return null;

// // // // // // // //     // Generate speaker colors
// // // // // // // //     const speakerColors = [
// // // // // // // //       'bg-purple-500',
// // // // // // // //       'bg-pink-500', 
// // // // // // // //       'bg-blue-500',
// // // // // // // //       'bg-green-500',
// // // // // // // //       'bg-orange-500',
// // // // // // // //       'bg-red-500'
// // // // // // // //     ];

// // // // // // // //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// // // // // // // //     const speakerColorMap = {};
// // // // // // // //     uniqueSpeakers.forEach((speaker, index) => {
// // // // // // // //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// // // // // // // //     });

// // // // // // // //     // Calculate speaker percentages
// // // // // // // //     const speakerCounts = {};
// // // // // // // //     meetingData.transcript?.forEach(t => {
// // // // // // // //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// // // // // // // //     });

// // // // // // // //     const totalMessages = meetingData.transcript?.length || 0;
// // // // // // // //     const speakersString = Object.entries(speakerCounts)
// // // // // // // //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// // // // // // // //       .join(', ');

// // // // // // // //     // Extract keywords from transcript (simple implementation)
// // // // // // // //     const allText = meetingData.transcript?.map(t => t.text).join(' ') || '';
// // // // // // // //     const words = allText.toLowerCase()
// // // // // // // //       .split(/\s+/)
// // // // // // // //       .filter(word => word.length > 3)
// // // // // // // //       .slice(0, 20); // Take first 20 words as keywords
// // // // // // // //     const keywords = [...new Set(words)].join(', ');

// // // // // // // //     return {
// // // // // // // //       keywords: keywords || 'No keywords available',
// // // // // // // //       speakers: speakersString || 'No speakers available',
// // // // // // // //       conversations: meetingData.transcript?.map((conv, index) => ({
// // // // // // // //         speaker: conv.speaker,
// // // // // // // //         text: conv.text,
// // // // // // // //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// // // // // // // //         // Since there's no time in schema, we can estimate based on position
// // // // // // // //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// // // // // // // //       })) || []
// // // // // // // //     };
// // // // // // // //   };

// // // // // // // //   const handleDownloadPDF = () => {
// // // // // // // //     const element = document.getElementById("pdf-content");
// // // // // // // //     if (!element) return;

// // // // // // // //     const opt = {
// // // // // // // //       margin: 0.5,
// // // // // // // //       filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // // // // //       image: { type: 'jpeg', quality: 0.98 },
// // // // // // // //       html2canvas: { scale: 2, scrollY: 0 },
// // // // // // // //       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // // // // //     };

// // // // // // // //     html2pdf().set(opt).from(element).save();
// // // // // // // //   };

// // // // // // // //   const handleSendEmailPDF = async () => {
// // // // // // // //     if (!meetingData?.emailRecipients || meetingData.emailRecipients.length === 0) {
// // // // // // // //       setEmailError("No email recipients found");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setIsSendingEmail(true);
// // // // // // // //     setEmailError(null);

// // // // // // // //     try {
// // // // // // // //       // Generate PDF as blob
// // // // // // // //       const element = document.getElementById("pdf-content");
// // // // // // // //       if (!element) {
// // // // // // // //         throw new Error("PDF content not found");
// // // // // // // //       }

// // // // // // // //       const opt = {
// // // // // // // //         margin: 0.5,
// // // // // // // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // // // // //         image: { type: 'jpeg', quality: 0.98 },
// // // // // // // //         html2canvas: { scale: 2, scrollY: 0 },
// // // // // // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // // // // //       };

// // // // // // // //       // Generate PDF as blob instead of downloading
// // // // // // // //       const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');

// // // // // // // //       // Create FormData to send PDF and email data
// // // // // // // //       const formData = new FormData();
// // // // // // // //       formData.append('pdf', pdfBlob, `${meetingData?.title || "meeting-summary"}.pdf`);
// // // // // // // //       formData.append('recipients', JSON.stringify(meetingData.emailRecipients));
// // // // // // // //       formData.append('meetingTitle', meetingData?.title || "Meeting Summary");
// // // // // // // //       formData.append('meetingId', meetingData?._id || '');

// // // // // // // //       // Send to your email API endpoint
// // // // // // // //       const response = await axios.post(
// // // // // // // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
// // // // // // // //         formData,
// // // // // // // //         {
// // // // // // // //           headers: {
// // // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // // //             Authorization: localStorage.getItem("token"),
// // // // // // // //           },
// // // // // // // //         }
// // // // // // // //       );

// // // // // // // //       if (response.data.success) {
// // // // // // // //         setEmailSent(true);
// // // // // // // //         setTimeout(() => setEmailSent(false), 5000); // Hide success message after 5 seconds
// // // // // // // //       } else {
// // // // // // // //         throw new Error(response.data.message || "Failed to send emails");
// // // // // // // //       }

// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error sending email:", error);
// // // // // // // //       setEmailError(error.message || "Failed to send emails. Please try again.");
// // // // // // // //       setTimeout(() => setEmailError(null), 5000); // Hide error message after 5 seconds
// // // // // // // //     } finally {
// // // // // // // //       setIsSendingEmail(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const formatTime = (seconds) => {
// // // // // // // //     // Handle invalid numbers
// // // // // // // //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// // // // // // // //       return '0:00';
// // // // // // // //     }

// // // // // // // //     const mins = Math.floor(seconds / 60);
// // // // // // // //     const secs = Math.floor(seconds % 60);
// // // // // // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // // // // // //   };

// // // // // // // //   const handlePlayPause = () => {
// // // // // // // //     if (audioRef.current) {
// // // // // // // //       if (isPlaying) {
// // // // // // // //         audioRef.current.pause();
// // // // // // // //       } else {
// // // // // // // //         audioRef.current.play();
// // // // // // // //       }
// // // // // // // //       setIsPlaying(!isPlaying);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleProgressClick = (e) => {
// // // // // // // //     if (audioRef.current) {
// // // // // // // //       const rect = e.currentTarget.getBoundingClientRect();
// // // // // // // //       const clickX = e.clientX - rect.left;
// // // // // // // //       const width = rect.width;
// // // // // // // //       const newTime = (clickX / width) * duration;
// // // // // // // //       audioRef.current.currentTime = newTime;
// // // // // // // //       setCurrentTime(newTime);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleDelete = async () => {
// // // // // // // //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// // // // // // // //       try {
// // // // // // // //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// // // // // // // //           headers: {
// // // // // // // //             Authorization: localStorage.getItem("token")
// // // // // // // //           }
// // // // // // // //         });
// // // // // // // //         // Navigate back or show success message
// // // // // // // //         window.history.back();
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error deleting meeting:", error);
// // // // // // // //         alert("Failed to delete meeting. Please try again.");
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// // // // // // // //   if (loading) {
// // // // // // // //     return (
// // // // // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// // // // // // // //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   if (error || !meetingData) {
// // // // // // // //     return (
// // // // // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // // // // //         <div className="text-center">
// // // // // // // //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// // // // // // // //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   const summaryData = getSummaryData();
// // // // // // // //   const transcriptData = getTranscriptData();
// // // // // // // //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // // // //       <div className="max-w-6xl mx-auto">
// // // // // // // //         {/* Header */}
// // // // // // // //         <div className="flex items-center justify-between mb-6">
// // // // // // // //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// // // // // // // //           <div className="flex items-center space-x-3">
// // // // // // // //             {/* Send Email Button - Only show if emailRecipients exist */}
// // // // // // // //             {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // // // // //               <button
// // // // // // // //                 onClick={handleSendEmailPDF}
// // // // // // // //                 disabled={isSendingEmail}
// // // // // // // //                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
// // // // // // // //                   isSendingEmail 
// // // // // // // //                     ? "bg-gray-400 cursor-not-allowed" 
// // // // // // // //                     : "bg-green-600 hover:bg-green-700"
// // // // // // // //                 } text-white`}
// // // // // // // //               >
// // // // // // // //                 <Mail size={16} />
// // // // // // // //                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
// // // // // // // //               </button>
// // // // // // // //             )}

// // // // // // // //             <button 
// // // // // // // //               onClick={handleDownloadPDF}
// // // // // // // //               className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // // // //             >
// // // // // // // //               <Download size={20} />
// // // // // // // //             </button>
// // // // // // // //             <button 
// // // // // // // //               onClick={handleDelete}
// // // // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// // // // // // // //             >
// // // // // // // //               <Trash2 size={16} />
// // // // // // // //               <span>Delete</span>
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Email Recipients Display */}
// // // // // // // //         {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // // // // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // // // // //             <h4 className="text-sm font-medium text-blue-800 mb-2">
// // // // // // // //               📧 Email Recipients ({meetingData.emailRecipients.length})
// // // // // // // //             </h4>
// // // // // // // //             <div className="text-sm text-blue-700">
// // // // // // // //               {meetingData.emailRecipients.join(", ")}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Success/Error Messages */}
// // // // // // // //         {emailSent && (
// // // // // // // //           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // //               <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
// // // // // // // //                 <span className="text-white text-xs">✓</span>
// // // // // // // //               </div>
// // // // // // // //               <p className="text-green-800 font-medium">
// // // // // // // //                 Meeting summary sent successfully to all recipients!
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {emailError && (
// // // // // // // //           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// // // // // // // //             <div className="flex items-center gap-2">
// // // // // // // //               <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// // // // // // // //                 <span className="text-white text-xs">!</span>
// // // // // // // //               </div>
// // // // // // // //               <p className="text-red-800 font-medium">
// // // // // // // //                 {emailError}
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Audio Player - Only show for audio-notes type */}
// // // // // // // //         {shouldShowAudioPlayer && (
// // // // // // // //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// // // // // // // //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// // // // // // // //             {/* Progress Bar */}
// // // // // // // //             <div className="mb-4">
// // // // // // // //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// // // // // // // //                 <span>{formatTime(currentTime)}</span>
// // // // // // // //                 <span>{formatTime(duration)}</span>
// // // // // // // //               </div>
// // // // // // // //               <div 
// // // // // // // //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// // // // // // // //                 onClick={handleProgressClick}
// // // // // // // //               >
// // // // // // // //                 <div 
// // // // // // // //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// // // // // // // //                   style={{ width: `${progressPercentage}%` }}
// // // // // // // //                 ></div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Controls */}
// // // // // // // //             <div className="flex items-center justify-between">
// // // // // // // //               <div className="flex items-center space-x-4">
// // // // // // // //                 {/* Playback Controls */}
// // // // // // // //                 <button 
// // // // // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// // // // // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // // // //                 >
// // // // // // // //                   <SkipBack size={20} />
// // // // // // // //                 </button>
// // // // // // // //                 <button 
// // // // // // // //                   onClick={handlePlayPause}
// // // // // // // //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// // // // // // // //                 >
// // // // // // // //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// // // // // // // //                 </button>
// // // // // // // //                 <button 
// // // // // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// // // // // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // // // //                 >
// // // // // // // //                   <SkipForward size={20} />
// // // // // // // //                 </button>

// // // // // // // //                 {/* Speed Control */}
// // // // // // // //                 <div className="flex items-center space-x-1">
// // // // // // // //                   <button 
// // // // // // // //                     onClick={() => {
// // // // // // // //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// // // // // // // //                       setPlaybackSpeed(newSpeed);
// // // // // // // //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// // // // // // // //                     }}
// // // // // // // //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// // // // // // // //                   >
// // // // // // // //                     {playbackSpeed}x
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Action Icons */}
// // // // // // // //               <div className="flex items-center space-x-2">
// // // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // // //                   <Edit3 size={20} />
// // // // // // // //                 </button>
// // // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // // //                   <MessageCircle size={20} />
// // // // // // // //                 </button>
// // // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // // //                   <Share2 size={20} />
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Tab Navigation */}
// // // // // // // //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// // // // // // // //           <div className="flex gap-1">
// // // // // // // //             <button
// // // // // // // //               onClick={() => setActiveTab('Summary')}
// // // // // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // // // // //                 activeTab === 'Summary'
// // // // // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               Summary
// // // // // // // //             </button>
// // // // // // // //             <button
// // // // // // // //               onClick={() => setActiveTab('Transcript')}
// // // // // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // // // // //                 activeTab === 'Transcript'
// // // // // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               Transcript
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Content Area */}
// // // // // // // //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// // // // // // // //           {activeTab === 'Summary' ? (
// // // // // // // //             <div id="pdf-content" className="p-6">
// // // // // // // //               {/* Meeting Title for PDF */}
// // // // // // // //               <div className="mb-6 border-b pb-4">
// // // // // // // //                 <h1 className="text-2xl font-bold text-gray-800">{meetingData.title}</h1>
// // // // // // // //                 <p className="text-sm text-gray-500 mt-1">
// // // // // // // //                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // // // // // // //                     year: 'numeric',
// // // // // // // //                     month: 'long',
// // // // // // // //                     day: 'numeric'
// // // // // // // //                   })}
// // // // // // // //                 </p>
// // // // // // // //               </div>

// // // // // // // //               {/* Topic */}
// // // // // // // //               <div className="mb-6">
// // // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // // // // // //                   Topic: {summaryData.topic}
// // // // // // // //                 </h3>
// // // // // // // //                 {summaryData.summary && (
// // // // // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
// // // // // // // //                     <p>{summaryData.summary}</p>
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //               </div>

// // // // // // // //               {/* Participants */}
// // // // // // // //               {meetingData.participants && meetingData.participants.length > 0 && (
// // // // // // // //                 <div className="mb-6">
// // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// // // // // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
// // // // // // // //                     <p>{meetingData.participants.join(', ')}</p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {/* Agenda */}
// // // // // // // //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // // // // // //                 <div className="mb-8">
// // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// // // // // // // //                   {meetingData.agenda.map((item, index) => (
// // // // // // // //                     <div key={index} className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed">
// // // // // // // //                       <p>{index + 1}. {item}</p>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {/* Minutes */}
// // // // // // // //               {meetingData.minutes && meetingData.minutes.length > 0 && (
// // // // // // // //                 <div className="mb-8">
// // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
// // // // // // // //                   {meetingData.minutes.map((minute, index) => (
// // // // // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</p>
// // // // // // // //                       <p className="text-gray-600">{minute.details}</p>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {/* Next Steps */}
// // // // // // // //               {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // // // // // // //                 <div className="mb-8">
// // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
// // // // // // // //                   {meetingData.nextSteps.map((step, index) => (
// // // // // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</p>
// // // // // // // //                       <p className="text-gray-600">
// // // // // // // //                         <strong>Assignee:</strong> {step.assignee}<br />
// // // // // // // //                         <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // // // // // // //                       </p>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {/* Key Points - Only if no detailed minutes/next steps available */}
// // // // // // // //               {(!meetingData.minutes || meetingData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
// // // // // // // //                 <div className="mb-8">
// // // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// // // // // // // //                   <ul className="space-y-3">
// // // // // // // //                     {summaryData.bulletPoints.map((point, index) => (
// // // // // // // //                       <li key={index} className="flex items-start space-x-3">
// // // // // // // //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// // // // // // // //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// // // // // // // //                       </li>
// // // // // // // //                     ))}
// // // // // // // //                   </ul>
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //           ) : (
// // // // // // // //             <div className="p-6">
// // // // // // // //               {/* Keywords Section */}
// // // // // // // //               <div className="mb-6">
// // // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// // // // // // // //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// // // // // // // //               </div>

// // // // // // // //               {/* Speakers Section */}
// // // // // // // //               <div className="mb-8">
// // // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// // // // // // // //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// // // // // // // //               </div>

// // // // // // // //               {/* Conversation */}
// // // // // // // //               <div className="space-y-4">
// // // // // // // //                 {transcriptData.conversations.length > 0 ? (
// // // // // // // //                   transcriptData.conversations.map((conv, index) => (
// // // // // // // //                     <div key={index} className="flex items-start space-x-4">
// // // // // // // //                       {/* Speaker Avatar */}
// // // // // // // //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// // // // // // // //                         {conv.speaker.charAt(0)}
// // // // // // // //                       </div>

// // // // // // // //                       {/* Message Content */}
// // // // // // // //                       <div className="flex-1 min-w-0">
// // // // // // // //                         <div className="flex items-center space-x-2 mb-1">
// // // // // // // //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// // // // // // // //                           {shouldShowAudioPlayer && conv.time > 0 && (
// // // // // // // //                             <span className="text-sm text-green-600 flex items-center">
// // // // // // // //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// // // // // // // //                               {formatTime(conv.time)}
// // // // // // // //                             </span>
// // // // // // // //                           )}
// // // // // // // //                         </div>
// // // // // // // //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   ))
// // // // // // // //                 ) : (
// // // // // // // //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>

// // // // // // // //         {/* Scroll to bottom button */}
// // // // // // // //         <div className="fixed bottom-6 right-6">
// // // // // // // //           <button 
// // // // // // // //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// // // // // // // //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// // // // // // // //           >
// // // // // // // //             <ChevronDown size={20} />
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import { useState, useRef, useEffect } from 'react';
// // // // // // // import { useParams, useLocation } from 'react-router-dom';
// // // // // // // import { 
// // // // // // //   Download, 
// // // // // // //   Trash2, 
// // // // // // //   SkipBack, 
// // // // // // //   Play, 
// // // // // // //   Pause, 
// // // // // // //   SkipForward,
// // // // // // //   Edit3,
// // // // // // //   MessageCircle,
// // // // // // //   Share2,
// // // // // // //   ChevronDown,
// // // // // // //   Mail
// // // // // // // } from 'lucide-react';
// // // // // // // import axios from 'axios';
// // // // // // // import html2pdf from 'html2pdf.js';

// // // // // // // export default function AudioAgendaPage() {
// // // // // // //   const { id } = useParams();
// // // // // // //   const location = useLocation();
// // // // // // //   const [activeTab, setActiveTab] = useState('Summary');
// // // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // // //   const [currentTime, setCurrentTime] = useState(0);
// // // // // // //   const [duration, setDuration] = useState(0);
// // // // // // //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// // // // // // //   const [meetingData, setMeetingData] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [isSendingEmail, setIsSendingEmail] = useState(false);
// // // // // // //   const [emailSent, setEmailSent] = useState(false);
// // // // // // //   const [emailError, setEmailError] = useState(null);
// // // // // // //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// // // // // // //   const audioRef = useRef(null);

// // // // // // //   // Fetch meeting data
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchMeetingData = async () => {
// // // // // // //       try {
// // // // // // //         setLoading(true);
// // // // // // //         const response = await axios.get(
// // // // // // //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// // // // // // //           {
// // // // // // //             headers: {
// // // // // // //               Authorization: localStorage.getItem("token")
// // // // // // //             }
// // // // // // //           }
// // // // // // //         );
// // // // // // //         setMeetingData(response.data);
// // // // // // //         // Ensure duration is a valid number
// // // // // // //         const recordingLength = response.data.recordingLength || 0;
// // // // // // //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching meeting data:", error);
// // // // // // //         setError("Failed to load meeting data");
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     if (id) {
// // // // // // //       fetchMeetingData();
// // // // // // //     }
// // // // // // //   }, [id]);

// // // // // // //   // Audio player effects
// // // // // // //   useEffect(() => {
// // // // // // //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// // // // // // //       const audio = audioRef.current;

// // // // // // //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// // // // // // //       const updateDuration = () => {
// // // // // // //         const audioDuration = audio.duration;
// // // // // // //         const fallbackDuration = meetingData.recordingLength || 0;
// // // // // // //         // Use audio duration if valid, otherwise fall back to recordingLength
// // // // // // //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// // // // // // //         setDuration(validDuration);
// // // // // // //       };

// // // // // // //       audio.addEventListener('timeupdate', updateTime);
// // // // // // //       audio.addEventListener('loadedmetadata', updateDuration);
// // // // // // //       audio.addEventListener('ended', () => setIsPlaying(false));

// // // // // // //       return () => {
// // // // // // //         audio.removeEventListener('timeupdate', updateTime);
// // // // // // //         audio.removeEventListener('loadedmetadata', updateDuration);
// // // // // // //         audio.removeEventListener('ended', () => setIsPlaying(false));
// // // // // // //       };
// // // // // // //     }
// // // // // // //   }, [meetingData]);

// // // // // // //   // Get page title based on meeting type
// // // // // // //   const getPageTitle = () => {
// // // // // // //     if (!meetingData) return 'Meeting Details';

// // // // // // //     switch (meetingData.type) {
// // // // // // //       case 'audio-notes':
// // // // // // //         return 'Audio Notes';
// // // // // // //       case 'live-transcription':
// // // // // // //         return 'Live Transcription';
// // // // // // //       case 'recording':
// // // // // // //         return 'Meeting Recording';
// // // // // // //       default:
// // // // // // //         return 'Meeting Details';
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Prepare summary data
// // // // // // //   const getSummaryData = () => {
// // // // // // //     if (!meetingData) return null;

// // // // // // //     // Create bullet points from minutes
// // // // // // //     const bulletPoints = meetingData.minutes?.map(minute => 
// // // // // // //       `${minute.topic}: ${minute.details}`
// // // // // // //     ) || [];

// // // // // // //     // Add next steps as bullet points
// // // // // // //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// // // // // // //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// // // // // // //     ) || [];

// // // // // // //     // Create outline from minutes
// // // // // // //     const outline = {};
// // // // // // //     meetingData.minutes?.forEach(minute => {
// // // // // // //       outline[minute.topic] = [minute.details];
// // // // // // //     });

// // // // // // //     // Add next steps section if available
// // // // // // //     if (meetingData.nextSteps?.length > 0) {
// // // // // // //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// // // // // // //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// // // // // // //       );
// // // // // // //     }

// // // // // // //     return {
// // // // // // //       topic: meetingData.title,
// // // // // // //       summary: meetingData.summary || 'No summary available',
// // // // // // //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// // // // // // //       outline
// // // // // // //     };
// // // // // // //   };

// // // // // // //   // Prepare transcript data
// // // // // // //   const getTranscriptData = () => {
// // // // // // //     if (!meetingData) return null;

// // // // // // //     // Generate speaker colors
// // // // // // //     const speakerColors = [
// // // // // // //       'bg-purple-500',
// // // // // // //       'bg-pink-500', 
// // // // // // //       'bg-blue-500',
// // // // // // //       'bg-green-500',
// // // // // // //       'bg-orange-500',
// // // // // // //       'bg-red-500'
// // // // // // //     ];

// // // // // // //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// // // // // // //     const speakerColorMap = {};
// // // // // // //     uniqueSpeakers.forEach((speaker, index) => {
// // // // // // //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// // // // // // //     });

// // // // // // //     // Calculate speaker percentages
// // // // // // //     const speakerCounts = {};
// // // // // // //     meetingData.transcript?.forEach(t => {
// // // // // // //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// // // // // // //     });

// // // // // // //     const totalMessages = meetingData.transcript?.length || 0;
// // // // // // //     const speakersString = Object.entries(speakerCounts)
// // // // // // //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// // // // // // //       .join(', ');

// // // // // // //     // Extract keywords from transcript (simple implementation)
// // // // // // //     const allText = meetingData.transcript?.map(t => t.text).join(' ') || '';
// // // // // // //     const words = allText.toLowerCase()
// // // // // // //       .split(/\s+/)
// // // // // // //       .filter(word => word.length > 3)
// // // // // // //       .slice(0, 20); // Take first 20 words as keywords
// // // // // // //     const keywords = [...new Set(words)].join(', ');

// // // // // // //     return {
// // // // // // //       keywords: keywords || 'No keywords available',
// // // // // // //       speakers: speakersString || 'No speakers available',
// // // // // // //       conversations: meetingData.transcript?.map((conv, index) => ({
// // // // // // //         speaker: conv.speaker,
// // // // // // //         text: conv.text,
// // // // // // //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// // // // // // //         // Since there's no time in schema, we can estimate based on position
// // // // // // //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// // // // // // //       })) || []
// // // // // // //     };
// // // // // // //   };

// // // // // // //   const handleDownloadPDF = async () => {
// // // // // // //     const element = document.getElementById("pdf-content");
// // // // // // //     if (!element) {
// // // // // // //       alert("PDF content not found");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setIsGeneratingPDF(true);

// // // // // // //     try {
// // // // // // //       // Add a small delay to allow UI to update
// // // // // // //       await new Promise(resolve => setTimeout(resolve, 100));

// // // // // // //       const opt = {
// // // // // // //         margin: 0.5,
// // // // // // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // // // //         image: { type: 'jpeg', quality: 0.7 }, // Reduced quality
// // // // // // //         html2canvas: { 
// // // // // // //           scale: 1, // Reduced scale significantly
// // // // // // //           scrollY: 0,
// // // // // // //           useCORS: true,
// // // // // // //           allowTaint: true,
// // // // // // //           backgroundColor: '#ffffff',
// // // // // // //           logging: false // Disable logging
// // // // // // //         },
// // // // // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // // // //       };

// // // // // // //       // Generate PDF asynchronously
// // // // // // //       await html2pdf().set(opt).from(element).save();

// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error generating PDF:", error);
// // // // // // //       alert("Failed to generate PDF. Please try again.");
// // // // // // //     } finally {
// // // // // // //       setIsGeneratingPDF(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleSendEmailPDF = async () => {
// // // // // // //     if (!meetingData?.emailRecipients || meetingData.emailRecipients.length === 0) {
// // // // // // //       setEmailError("No email recipients found");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setIsSendingEmail(true);
// // // // // // //     setEmailError(null);

// // // // // // //     try {
// // // // // // //       // Generate PDF as blob
// // // // // // //       const element = document.getElementById("pdf-content");
// // // // // // //       if (!element) {
// // // // // // //         throw new Error("PDF content not found");
// // // // // // //       }

// // // // // // //       const opt = {
// // // // // // //         margin: 0.5,
// // // // // // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // // // //         image: { type: 'jpeg', quality: 0.7 }, // Reduced quality
// // // // // // //         html2canvas: { 
// // // // // // //           scale: 1, // Reduced scale significantly
// // // // // // //           scrollY: 0,
// // // // // // //           useCORS: true,
// // // // // // //           allowTaint: true,
// // // // // // //           backgroundColor: '#ffffff',
// // // // // // //           logging: false
// // // // // // //         },
// // // // // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // // // //       };

// // // // // // //       // Generate PDF as blob instead of downloading
// // // // // // //       const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');

// // // // // // //       // Create FormData to send PDF and email data
// // // // // // //       const formData = new FormData();
// // // // // // //       formData.append('pdf', pdfBlob, `${meetingData?.title || "meeting-summary"}.pdf`);
// // // // // // //       formData.append('recipients', JSON.stringify(meetingData.emailRecipients));
// // // // // // //       formData.append('meetingTitle', meetingData?.title || "Meeting Summary");
// // // // // // //       formData.append('meetingId', meetingData?._id || '');

// // // // // // //       // Send to your email API endpoint
// // // // // // //       const response = await axios.post(
// // // // // // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
// // // // // // //         formData,
// // // // // // //         {
// // // // // // //           headers: {
// // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // //             Authorization: localStorage.getItem("token"),
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );

// // // // // // //       if (response.data.success) {
// // // // // // //         setEmailSent(true);
// // // // // // //         setTimeout(() => setEmailSent(false), 5000); // Hide success message after 5 seconds
// // // // // // //       } else {
// // // // // // //         throw new Error(response.data.message || "Failed to send emails");
// // // // // // //       }

// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error sending email:", error);
// // // // // // //       setEmailError(error.message || "Failed to send emails. Please try again.");
// // // // // // //       setTimeout(() => setEmailError(null), 5000); // Hide error message after 5 seconds
// // // // // // //     } finally {
// // // // // // //       setIsSendingEmail(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const formatTime = (seconds) => {
// // // // // // //     // Handle invalid numbers
// // // // // // //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// // // // // // //       return '0:00';
// // // // // // //     }

// // // // // // //     const mins = Math.floor(seconds / 60);
// // // // // // //     const secs = Math.floor(seconds % 60);
// // // // // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // // // // //   };

// // // // // // //   const handlePlayPause = () => {
// // // // // // //     if (audioRef.current) {
// // // // // // //       if (isPlaying) {
// // // // // // //         audioRef.current.pause();
// // // // // // //       } else {
// // // // // // //         audioRef.current.play();
// // // // // // //       }
// // // // // // //       setIsPlaying(!isPlaying);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleProgressClick = (e) => {
// // // // // // //     if (audioRef.current) {
// // // // // // //       const rect = e.currentTarget.getBoundingClientRect();
// // // // // // //       const clickX = e.clientX - rect.left;
// // // // // // //       const width = rect.width;
// // // // // // //       const newTime = (clickX / width) * duration;
// // // // // // //       audioRef.current.currentTime = newTime;
// // // // // // //       setCurrentTime(newTime);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDelete = async () => {
// // // // // // //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// // // // // // //       try {
// // // // // // //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// // // // // // //           headers: {
// // // // // // //             Authorization: localStorage.getItem("token")
// // // // // // //           }
// // // // // // //         });
// // // // // // //         // Navigate back or show success message
// // // // // // //         window.history.back();
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error deleting meeting:", error);
// // // // // // //         alert("Failed to delete meeting. Please try again.");
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// // // // // // //   if (loading) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// // // // // // //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (error || !meetingData) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // // // //         <div className="text-center">
// // // // // // //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// // // // // // //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   const summaryData = getSummaryData();
// // // // // // //   const transcriptData = getTranscriptData();
// // // // // // //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // // //       <div className="max-w-6xl mx-auto">
// // // // // // //         {/* Header */}
// // // // // // //         <div className="flex items-center justify-between mb-6">
// // // // // // //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// // // // // // //           <div className="flex items-center space-x-3">
// // // // // // //             {/* Send Email Button - Only show if emailRecipients exist */}
// // // // // // //             {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // // // //               <button
// // // // // // //                 onClick={handleSendEmailPDF}
// // // // // // //                 disabled={isSendingEmail}
// // // // // // //                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
// // // // // // //                   isSendingEmail 
// // // // // // //                     ? "bg-gray-400 cursor-not-allowed" 
// // // // // // //                     : "bg-green-600 hover:bg-green-700"
// // // // // // //                 } text-white`}
// // // // // // //               >
// // // // // // //                 <Mail size={16} />
// // // // // // //                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
// // // // // // //               </button>
// // // // // // //             )}

// // // // // // //             <button 
// // // // // // //               onClick={handleDownloadPDF}
// // // // // // //               disabled={isGeneratingPDF}
// // // // // // //               className={`p-2 transition-colors ${
// // // // // // //                 isGeneratingPDF 
// // // // // // //                   ? "text-gray-400 cursor-not-allowed" 
// // // // // // //                   : "text-gray-600 hover:text-purple-600"
// // // // // // //               }`}
// // // // // // //               title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
// // // // // // //             >
// // // // // // //               {isGeneratingPDF ? (
// // // // // // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
// // // // // // //               ) : (
// // // // // // //                 <Download size={20} />
// // // // // // //               )}
// // // // // // //             </button>
// // // // // // //             <button 
// // // // // // //               onClick={handleDelete}
// // // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// // // // // // //             >
// // // // // // //               <Trash2 size={16} />
// // // // // // //               <span>Delete</span>
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* PDF Generation Loading Message */}
// // // // // // //         {isGeneratingPDF && (
// // // // // // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // // // //             <div className="flex items-center gap-2">
// // // // // // //               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
// // // // // // //               <p className="text-blue-800 font-medium">
// // // // // // //                 Generating PDF... This may take a few seconds.
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Email Recipients Display */}
// // // // // // //         {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // // // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // // // //             <h4 className="text-sm font-medium text-blue-800 mb-2">
// // // // // // //               📧 Email Recipients ({meetingData.emailRecipients.length})
// // // // // // //             </h4>
// // // // // // //             <div className="text-sm text-blue-700">
// // // // // // //               {meetingData.emailRecipients.join(", ")}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Success/Error Messages */}
// // // // // // //         {emailSent && (
// // // // // // //           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// // // // // // //             <div className="flex items-center gap-2">
// // // // // // //               <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
// // // // // // //                 <span className="text-white text-xs">✓</span>
// // // // // // //               </div>
// // // // // // //               <p className="text-green-800 font-medium">
// // // // // // //                 Meeting summary sent successfully to all recipients!
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {emailError && (
// // // // // // //           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// // // // // // //             <div className="flex items-center gap-2">
// // // // // // //               <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// // // // // // //                 <span className="text-white text-xs">!</span>
// // // // // // //               </div>
// // // // // // //               <p className="text-red-800 font-medium">
// // // // // // //                 {emailError}
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Audio Player - Only show for audio-notes type */}
// // // // // // //         {shouldShowAudioPlayer && (
// // // // // // //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// // // // // // //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// // // // // // //             {/* Progress Bar */}
// // // // // // //             <div className="mb-4">
// // // // // // //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// // // // // // //                 <span>{formatTime(currentTime)}</span>
// // // // // // //                 <span>{formatTime(duration)}</span>
// // // // // // //               </div>
// // // // // // //               <div 
// // // // // // //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// // // // // // //                 onClick={handleProgressClick}
// // // // // // //               >
// // // // // // //                 <div 
// // // // // // //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// // // // // // //                   style={{ width: `${progressPercentage}%` }}
// // // // // // //                 ></div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Controls */}
// // // // // // //             <div className="flex items-center justify-between">
// // // // // // //               <div className="flex items-center space-x-4">
// // // // // // //                 {/* Playback Controls */}
// // // // // // //                 <button 
// // // // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// // // // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // // //                 >
// // // // // // //                   <SkipBack size={20} />
// // // // // // //                 </button>
// // // // // // //                 <button 
// // // // // // //                   onClick={handlePlayPause}
// // // // // // //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// // // // // // //                 >
// // // // // // //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// // // // // // //                 </button>
// // // // // // //                 <button 
// // // // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// // // // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // // //                 >
// // // // // // //                   <SkipForward size={20} />
// // // // // // //                 </button>

// // // // // // //                 {/* Speed Control */}
// // // // // // //                 <div className="flex items-center space-x-1">
// // // // // // //                   <button 
// // // // // // //                     onClick={() => {
// // // // // // //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// // // // // // //                       setPlaybackSpeed(newSpeed);
// // // // // // //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// // // // // // //                     }}
// // // // // // //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// // // // // // //                   >
// // // // // // //                     {playbackSpeed}x
// // // // // // //                   </button>
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Action Icons */}
// // // // // // //               <div className="flex items-center space-x-2">
// // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // //                   <Edit3 size={20} />
// // // // // // //                 </button>
// // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // //                   <MessageCircle size={20} />
// // // // // // //                 </button>
// // // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // // //                   <Share2 size={20} />
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Tab Navigation */}
// // // // // // //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// // // // // // //           <div className="flex gap-1">
// // // // // // //             <button
// // // // // // //               onClick={() => setActiveTab('Summary')}
// // // // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // // // //                 activeTab === 'Summary'
// // // // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               Summary
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={() => setActiveTab('Transcript')}
// // // // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // // // //                 activeTab === 'Transcript'
// // // // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               Transcript
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Content Area */}
// // // // // // //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// // // // // // //           {activeTab === 'Summary' ? (
// // // // // // //             <div className="p-6">
// // // // // // //               {/* Hidden PDF Content with Inline Styles */}
// // // // // // //               <div id="pdf-content" style={{ 
// // // // // // //                 display: 'none',
// // // // // // //                 padding: '20px', 
// // // // // // //                 backgroundColor: '#ffffff', 
// // // // // // //                 fontFamily: 'Arial, sans-serif',
// // // // // // //                 fontSize: '14px',
// // // // // // //                 lineHeight: '1.6',
// // // // // // //                 color: '#333333'
// // // // // // //               }}>
// // // // // // //                 {/* Meeting Title */}
// // // // // // //                 <div style={{ marginBottom: '20px', borderBottom: '2px solid #e5e7eb', paddingBottom: '15px' }}>
// // // // // // //                   <h1 style={{ 
// // // // // // //                     fontSize: '24px', 
// // // // // // //                     fontWeight: 'bold', 
// // // // // // //                     color: '#1f2937', 
// // // // // // //                     margin: '0 0 8px 0' 
// // // // // // //                   }}>
// // // // // // //                     {meetingData.title}
// // // // // // //                   </h1>
// // // // // // //                   <p style={{ 
// // // // // // //                     fontSize: '12px', 
// // // // // // //                     color: '#6b7280', 
// // // // // // //                     margin: '0' 
// // // // // // //                   }}>
// // // // // // //                     {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // // // // // //                       year: 'numeric',
// // // // // // //                       month: 'long',
// // // // // // //                       day: 'numeric'
// // // // // // //                     })}
// // // // // // //                   </p>
// // // // // // //                 </div>

// // // // // // //                 {/* Summary */}
// // // // // // //                 {summaryData.summary && (
// // // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // // //                     <h3 style={{ 
// // // // // // //                       fontSize: '16px', 
// // // // // // //                       fontWeight: 'bold', 
// // // // // // //                       color: '#1f2937', 
// // // // // // //                       margin: '0 0 8px 0' 
// // // // // // //                     }}>
// // // // // // //                       Summary
// // // // // // //                     </h3>
// // // // // // //                     <div style={{ 
// // // // // // //                       backgroundColor: '#f9fafb', 
// // // // // // //                       padding: '12px', 
// // // // // // //                       borderRadius: '6px',
// // // // // // //                       border: '1px solid #e5e7eb' 
// // // // // // //                     }}>
// // // // // // //                       {summaryData.summary}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 {/* Participants */}
// // // // // // //                 {meetingData.participants && meetingData.participants.length > 0 && (
// // // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // // //                     <h3 style={{ 
// // // // // // //                       fontSize: '16px', 
// // // // // // //                       fontWeight: 'bold', 
// // // // // // //                       color: '#1f2937', 
// // // // // // //                       margin: '0 0 8px 0' 
// // // // // // //                     }}>
// // // // // // //                       Participants
// // // // // // //                     </h3>
// // // // // // //                     <div style={{ 
// // // // // // //                       backgroundColor: '#f9fafb', 
// // // // // // //                       padding: '12px', 
// // // // // // //                       borderRadius: '6px',
// // // // // // //                       border: '1px solid #e5e7eb' 
// // // // // // //                     }}>
// // // // // // //                       {meetingData.participants.join(', ')}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 {/* Agenda */}
// // // // // // //                 {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // // //                     <h3 style={{ 
// // // // // // //                       fontSize: '16px', 
// // // // // // //                       fontWeight: 'bold', 
// // // // // // //                       color: '#1f2937', 
// // // // // // //                       margin: '0 0 8px 0' 
// // // // // // //                     }}>
// // // // // // //                       Agenda
// // // // // // //                     </h3>
// // // // // // //                     {meetingData.agenda.map((item, index) => (
// // // // // // //                       <div key={index} style={{ 
// // // // // // //                         backgroundColor: '#f9fafb', 
// // // // // // //                         padding: '10px', 
// // // // // // //                         margin: '5px 0',
// // // // // // //                         borderRadius: '4px',
// // // // // // //                         border: '1px solid #e5e7eb' 
// // // // // // //                       }}>
// // // // // // //                         {index + 1}. {item}
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 {/* Minutes */}
// // // // // // //                 {meetingData.minutes && meetingData.minutes.length > 0 && (
// // // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // // //                     <h3 style={{ 
// // // // // // //                       fontSize: '16px', 
// // // // // // //                       fontWeight: 'bold', 
// // // // // // //                       color: '#1f2937', 
// // // // // // //                       margin: '0 0 8px 0' 
// // // // // // //                     }}>
// // // // // // //                       Minutes
// // // // // // //                     </h3>
// // // // // // //                     {meetingData.minutes.map((minute, index) => (
// // // // // // //                       <div key={index} style={{ 
// // // // // // //                         backgroundColor: '#ffffff', 
// // // // // // //                         padding: '12px', 
// // // // // // //                         margin: '5px 0',
// // // // // // //                         borderRadius: '4px',
// // // // // // //                         border: '1px solid #d1d5db' 
// // // // // // //                       }}>
// // // // // // //                         <p style={{ 
// // // // // // //                           fontWeight: 'bold', 
// // // // // // //                           color: '#1f2937', 
// // // // // // //                           margin: '0 0 5px 0' 
// // // // // // //                         }}>
// // // // // // //                           {index + 1}. {minute.topic}
// // // // // // //                         </p>
// // // // // // //                         <p style={{ 
// // // // // // //                           color: '#6b7280', 
// // // // // // //                           margin: '0' 
// // // // // // //                         }}>
// // // // // // //                           {minute.details}
// // // // // // //                         </p>
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 {/* Next Steps */}
// // // // // // //                 {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // // //                     <h3 style={{ 
// // // // // // //                       fontSize: '16px', 
// // // // // // //                       fontWeight: 'bold', 
// // // // // // //                       color: '#1f2937', 
// // // // // // //                       margin: '0 0 8px 0' 
// // // // // // //                     }}>
// // // // // // //                       Next Steps
// // // // // // //                     </h3>
// // // // // // //                     {meetingData.nextSteps.map((step, index) => (
// // // // // // //                       <div key={index} style={{ 
// // // // // // //                         backgroundColor: '#ffffff', 
// // // // // // //                         padding: '12px', 
// // // // // // //                         margin: '5px 0',
// // // // // // //                         borderRadius: '4px',
// // // // // // //                         border: '1px solid #d1d5db' 
// // // // // // //                       }}>
// // // // // // //                         <p style={{ 
// // // // // // //                           fontWeight: 'bold', 
// // // // // // //                           color: '#1f2937', 
// // // // // // //                           margin: '0 0 5px 0' 
// // // // // // //                         }}>
// // // // // // //                           {index + 1}. {step.task}
// // // // // // //                         </p>
// // // // // // //                         <p style={{ 
// // // // // // //                           color: '#6b7280', 
// // // // // // //                           margin: '0' 
// // // // // // //                         }}>
// // // // // // //                           <strong>Assignee:</strong> {step.assignee}<br />
// // // // // // //                           <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // // // // // //                         </p>
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>

// // // // // // //               {/* Visible Content Area */}
// // // // // // //               <div className="mb-6 border-b pb-4">
// // // // // // //                 <h1 className="text-2xl font-bold text-gray-800">{meetingData.title}</h1>
// // // // // // //                 <p className="text-sm text-gray-500 mt-1">
// // // // // // //                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // // // // // //                     year: 'numeric',
// // // // // // //                     month: 'long',
// // // // // // //                     day: 'numeric'
// // // // // // //                   })}
// // // // // // //                 </p>
// // // // // // //               </div>

// // // // // // //               {/* Topic */}
// // // // // // //               <div className="mb-6">
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // // // // //                   Topic: {summaryData.topic}
// // // // // // //                 </h3>
// // // // // // //                 {summaryData.summary && (
// // // // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
// // // // // // //                     <p>{summaryData.summary}</p>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>

// // // // // // //               {/* Participants */}
// // // // // // //               {meetingData.participants && meetingData.participants.length > 0 && (
// // // // // // //                 <div className="mb-6">
// // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// // // // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
// // // // // // //                     <p>{meetingData.participants.join(', ')}</p>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* Agenda */}
// // // // // // //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // // // // //                 <div className="mb-8">
// // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// // // // // // //                   {meetingData.agenda.map((item, index) => (
// // // // // // //                     <div key={index} className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed">
// // // // // // //                       <p>{index + 1}. {item}</p>
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* Minutes */}
// // // // // // //               {meetingData.minutes && meetingData.minutes.length > 0 && (
// // // // // // //                 <div className="mb-8">
// // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
// // // // // // //                   {meetingData.minutes.map((minute, index) => (
// // // // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</p>
// // // // // // //                       <p className="text-gray-600">{minute.details}</p>
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* Next Steps */}
// // // // // // //               {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // // // // // //                 <div className="mb-8">
// // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
// // // // // // //                   {meetingData.nextSteps.map((step, index) => (
// // // // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</p>
// // // // // // //                       <p className="text-gray-600">
// // // // // // //                         <strong>Assignee:</strong> {step.assignee}<br />
// // // // // // //                         <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // // // // // //                       </p>
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* Key Points - Only if no detailed minutes/next steps available */}
// // // // // // //               {(!meetingData.minutes || meetingData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
// // // // // // //                 <div className="mb-8">
// // // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// // // // // // //                   <ul className="space-y-3">
// // // // // // //                     {summaryData.bulletPoints.map((point, index) => (
// // // // // // //                       <li key={index} className="flex items-start space-x-3">
// // // // // // //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// // // // // // //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// // // // // // //                       </li>
// // // // // // //                     ))}
// // // // // // //                   </ul>
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           ) : (
// // // // // // //             <div className="p-6">
// // // // // // //               {/* Keywords Section */}
// // // // // // //               <div className="mb-6">
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// // // // // // //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// // // // // // //               </div>

// // // // // // //               {/* Speakers Section */}
// // // // // // //               <div className="mb-8">
// // // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// // // // // // //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// // // // // // //               </div>

// // // // // // //               {/* Conversation */}
// // // // // // //               <div className="space-y-4">
// // // // // // //                 {transcriptData.conversations.length > 0 ? (
// // // // // // //                   transcriptData.conversations.map((conv, index) => (
// // // // // // //                     <div key={index} className="flex items-start space-x-4">
// // // // // // //                       {/* Speaker Avatar */}
// // // // // // //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// // // // // // //                         {conv.speaker.charAt(0)}
// // // // // // //                       </div>

// // // // // // //                       {/* Message Content */}
// // // // // // //                       <div className="flex-1 min-w-0">
// // // // // // //                         <div className="flex items-center space-x-2 mb-1">
// // // // // // //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// // // // // // //                           {shouldShowAudioPlayer && conv.time > 0 && (
// // // // // // //                             <span className="text-sm text-green-600 flex items-center">
// // // // // // //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// // // // // // //                               {formatTime(conv.time)}
// // // // // // //                             </span>
// // // // // // //                           )}
// // // // // // //                         </div>
// // // // // // //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   ))
// // // // // // //                 ) : (
// // // // // // //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {/* Scroll to bottom button */}
// // // // // // //         <div className="fixed bottom-6 right-6">
// // // // // // //           <button 
// // // // // // //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// // // // // // //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// // // // // // //           >
// // // // // // //             <ChevronDown size={20} />
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // ///////////////////////////////////////////////////////////////////////////

// // // // // // import { useState, useRef, useEffect } from 'react';
// // // // // // import { useParams, useLocation } from 'react-router-dom';
// // // // // // import { 
// // // // // //   Download, 
// // // // // //   Trash2, 
// // // // // //   SkipBack, 
// // // // // //   Play, 
// // // // // //   Pause, 
// // // // // //   SkipForward,
// // // // // //   Edit3,
// // // // // //   MessageCircle,
// // // // // //   Share2,
// // // // // //   ChevronDown,
// // // // // //   Mail
// // // // // // } from 'lucide-react';
// // // // // // import axios from 'axios';
// // // // // // import html2pdf from 'html2pdf.js';

// // // // // // export default function AudioAgendaPage() {
// // // // // //   const { id } = useParams();
// // // // // //   const location = useLocation();
// // // // // //   const [activeTab, setActiveTab] = useState('Summary');
// // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // //   const [currentTime, setCurrentTime] = useState(0);
// // // // // //   const [duration, setDuration] = useState(0);
// // // // // //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// // // // // //   const [meetingData, setMeetingData] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [isSendingEmail, setIsSendingEmail] = useState(false);
// // // // // //   const [emailSent, setEmailSent] = useState(false);
// // // // // //   const [emailError, setEmailError] = useState(null);
// // // // // //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// // // // // //   const audioRef = useRef(null);

// // // // // //   // Fetch meeting data
// // // // // //   useEffect(() => {
// // // // // //     const fetchMeetingData = async () => {
// // // // // //       try {
// // // // // //         setLoading(true);
// // // // // //         const response = await axios.get(
// // // // // //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// // // // // //           {
// // // // // //             headers: {
// // // // // //               Authorization: localStorage.getItem("token")
// // // // // //             }
// // // // // //           }
// // // // // //         );
// // // // // //         setMeetingData(response.data);
// // // // // //         // Ensure duration is a valid number
// // // // // //         const recordingLength = response.data.recordingLength || 0;
// // // // // //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching meeting data:", error);
// // // // // //         setError("Failed to load meeting data");
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     if (id) {
// // // // // //       fetchMeetingData();
// // // // // //     }
// // // // // //   }, [id]);

// // // // // //   // Audio player effects
// // // // // //   useEffect(() => {
// // // // // //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// // // // // //       const audio = audioRef.current;

// // // // // //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// // // // // //       const updateDuration = () => {
// // // // // //         const audioDuration = audio.duration;
// // // // // //         const fallbackDuration = meetingData.recordingLength || 0;
// // // // // //         // Use audio duration if valid, otherwise fall back to recordingLength
// // // // // //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// // // // // //         setDuration(validDuration);
// // // // // //       };

// // // // // //       audio.addEventListener('timeupdate', updateTime);
// // // // // //       audio.addEventListener('loadedmetadata', updateDuration);
// // // // // //       audio.addEventListener('ended', () => setIsPlaying(false));

// // // // // //       return () => {
// // // // // //         audio.removeEventListener('timeupdate', updateTime);
// // // // // //         audio.removeEventListener('loadedmetadata', updateDuration);
// // // // // //         audio.removeEventListener('ended', () => setIsPlaying(false));
// // // // // //       };
// // // // // //     }
// // // // // //   }, [meetingData]);

// // // // // //   // Get page title based on meeting type
// // // // // //   const getPageTitle = () => {
// // // // // //     if (!meetingData) return 'Meeting Details';

// // // // // //     switch (meetingData.type) {
// // // // // //       case 'audio-notes':
// // // // // //         return 'Audio Notes';
// // // // // //       case 'live-transcription':
// // // // // //         return 'Live Transcription';
// // // // // //       case 'recording':
// // // // // //         return 'Meeting Recording';
// // // // // //       default:
// // // // // //         return 'Meeting Details';
// // // // // //     }
// // // // // //   };

// // // // // //   // Prepare summary data
// // // // // //   const getSummaryData = () => {
// // // // // //     if (!meetingData) return null;

// // // // // //     // Create bullet points from minutes
// // // // // //     const bulletPoints = meetingData.minutes?.map(minute => 
// // // // // //       `${minute.topic}: ${minute.details}`
// // // // // //     ) || [];

// // // // // //     // Add next steps as bullet points
// // // // // //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// // // // // //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// // // // // //     ) || [];

// // // // // //     // Create outline from minutes
// // // // // //     const outline = {};
// // // // // //     meetingData.minutes?.forEach(minute => {
// // // // // //       outline[minute.topic] = [minute.details];
// // // // // //     });

// // // // // //     // Add next steps section if available
// // // // // //     if (meetingData.nextSteps?.length > 0) {
// // // // // //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// // // // // //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// // // // // //       );
// // // // // //     }

// // // // // //     return {
// // // // // //       topic: meetingData.title,
// // // // // //       summary: meetingData.summary || 'No summary available',
// // // // // //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// // // // // //       outline
// // // // // //     };
// // // // // //   };

// // // // // //   // Prepare transcript data
// // // // // //   const getTranscriptData = () => {
// // // // // //     if (!meetingData) return null;

// // // // // //     // Generate speaker colors
// // // // // //     const speakerColors = [
// // // // // //       'bg-purple-500',
// // // // // //       'bg-pink-500', 
// // // // // //       'bg-blue-500',
// // // // // //       'bg-green-500',
// // // // // //       'bg-orange-500',
// // // // // //       'bg-red-500'
// // // // // //     ];

// // // // // //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// // // // // //     const speakerColorMap = {};
// // // // // //     uniqueSpeakers.forEach((speaker, index) => {
// // // // // //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// // // // // //     });

// // // // // //     // Calculate speaker percentages
// // // // // //     const speakerCounts = {};
// // // // // //     meetingData.transcript?.forEach(t => {
// // // // // //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// // // // // //     });

// // // // // //     const totalMessages = meetingData.transcript?.length || 0;
// // // // // //     const speakersString = Object.entries(speakerCounts)
// // // // // //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// // // // // //       .join(', ');

// // // // // //     // Extract keywords from transcript (simple implementation)
// // // // // //     const allText = meetingData.transcript?.map(t => t.text).join(' ') || '';
// // // // // //     const words = allText.toLowerCase()
// // // // // //       .split(/\s+/)
// // // // // //       .filter(word => word.length > 3)
// // // // // //       .slice(0, 20); // Take first 20 words as keywords
// // // // // //     const keywords = [...new Set(words)].join(', ');

// // // // // //     return {
// // // // // //       keywords: keywords || 'No keywords available',
// // // // // //       speakers: speakersString || 'No speakers available',
// // // // // //       conversations: meetingData.transcript?.map((conv, index) => ({
// // // // // //         speaker: conv.speaker,
// // // // // //         text: conv.text,
// // // // // //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// // // // // //         // Since there's no time in schema, we can estimate based on position
// // // // // //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// // // // // //       })) || []
// // // // // //     };
// // // // // //   };

// // // // // //   const handleDownloadPDF = async () => {
// // // // // //     const element = document.getElementById("pdf-content");
// // // // // //     if (!element) {
// // // // // //       alert("PDF content not found");
// // // // // //       return;
// // // // // //     }

// // // // // //     setIsGeneratingPDF(true);

// // // // // //     try {
// // // // // //       // Temporarily show the PDF content for capture
// // // // // //       element.style.display = 'block';
// // // // // //       element.style.position = 'absolute';
// // // // // //       element.style.left = '-9999px';
// // // // // //       element.style.top = '0';
// // // // // //       element.style.zIndex = '-1000';

// // // // // //       // Add a small delay to allow rendering
// // // // // //       await new Promise(resolve => setTimeout(resolve, 200));

// // // // // //       const opt = {
// // // // // //         margin: 0.5,
// // // // // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // // //         image: { type: 'jpeg', quality: 0.7 },
// // // // // //         html2canvas: { 
// // // // // //           scale: 1,
// // // // // //           scrollY: 0,
// // // // // //           useCORS: true,
// // // // // //           allowTaint: true,
// // // // // //           backgroundColor: '#ffffff',
// // // // // //           logging: false,
// // // // // //           width: element.scrollWidth,
// // // // // //           height: element.scrollHeight
// // // // // //         },
// // // // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // // //       };

// // // // // //       // Generate PDF asynchronously
// // // // // //       await html2pdf().set(opt).from(element).save();

// // // // // //     } catch (error) {
// // // // // //       console.error("Error generating PDF:", error);
// // // // // //       alert("Failed to generate PDF. Please try again.");
// // // // // //     } finally {
// // // // // //       // Hide the PDF content again
// // // // // //       element.style.display = 'none';
// // // // // //       element.style.position = '';
// // // // // //       element.style.left = '';
// // // // // //       element.style.top = '';
// // // // // //       element.style.zIndex = '';
// // // // // //       setIsGeneratingPDF(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSendEmailPDF = async () => {
// // // // // //     if (!meetingData?.emailRecipients || meetingData.emailRecipients.length === 0) {
// // // // // //       setEmailError("No email recipients found");
// // // // // //       return;
// // // // // //     }

// // // // // //     setIsSendingEmail(true);
// // // // // //     setEmailError(null);

// // // // // //     try {
// // // // // //       // Generate PDF as blob
// // // // // //       const element = document.getElementById("pdf-content");
// // // // // //       if (!element) {
// // // // // //         throw new Error("PDF content not found");
// // // // // //       }

// // // // // //       // Temporarily show the PDF content for capture
// // // // // //       element.style.display = 'block';
// // // // // //       element.style.position = 'absolute';
// // // // // //       element.style.left = '-9999px';
// // // // // //       element.style.top = '0';
// // // // // //       element.style.zIndex = '-1000';

// // // // // //       // Add a small delay to allow rendering
// // // // // //       await new Promise(resolve => setTimeout(resolve, 200));

// // // // // //       const opt = {
// // // // // //         margin: 0.5,
// // // // // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // // //         image: { type: 'jpeg', quality: 0.7 },
// // // // // //         html2canvas: { 
// // // // // //           scale: 1,
// // // // // //           scrollY: 0,
// // // // // //           useCORS: true,
// // // // // //           allowTaint: true,
// // // // // //           backgroundColor: '#ffffff',
// // // // // //           logging: false,
// // // // // //           width: element.scrollWidth,
// // // // // //           height: element.scrollHeight
// // // // // //         },
// // // // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // // //       };

// // // // // //       // Generate PDF as blob instead of downloading
// // // // // //       const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');

// // // // // //       // Hide the PDF content again
// // // // // //       element.style.display = 'none';
// // // // // //       element.style.position = '';
// // // // // //       element.style.left = '';
// // // // // //       element.style.top = '';
// // // // // //       element.style.zIndex = '';

// // // // // //       // Create FormData to send PDF and email data
// // // // // //       const formData = new FormData();
// // // // // //       formData.append('pdf', pdfBlob, `${meetingData?.title || "meeting-summary"}.pdf`);
// // // // // //       formData.append('recipients', JSON.stringify(meetingData.emailRecipients));
// // // // // //       formData.append('meetingTitle', meetingData?.title || "Meeting Summary");
// // // // // //       formData.append('meetingId', meetingData?._id || '');

// // // // // //       // Send to your email API endpoint
// // // // // //       const response = await axios.post(
// // // // // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
// // // // // //         formData,
// // // // // //         {
// // // // // //           headers: {
// // // // // //             "Content-Type": "multipart/form-data",
// // // // // //             Authorization: localStorage.getItem("token"),
// // // // // //           },
// // // // // //         }
// // // // // //       );

// // // // // //       if (response.data.success) {
// // // // // //         setEmailSent(true);
// // // // // //         setTimeout(() => setEmailSent(false), 5000); // Hide success message after 5 seconds
// // // // // //       } else {
// // // // // //         throw new Error(response.data.message || "Failed to send emails");
// // // // // //       }

// // // // // //     } catch (error) {
// // // // // //       console.error("Error sending email:", error);
// // // // // //       setEmailError(error.message || "Failed to send emails. Please try again.");
// // // // // //       setTimeout(() => setEmailError(null), 5000); // Hide error message after 5 seconds

// // // // // //       // Make sure to hide PDF content even if there's an error
// // // // // //       const element = document.getElementById("pdf-content");
// // // // // //       if (element) {
// // // // // //         element.style.display = 'none';
// // // // // //         element.style.position = '';
// // // // // //         element.style.left = '';
// // // // // //         element.style.top = '';
// // // // // //         element.style.zIndex = '';
// // // // // //       }
// // // // // //     } finally {
// // // // // //       setIsSendingEmail(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const formatTime = (seconds) => {
// // // // // //     // Handle invalid numbers
// // // // // //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// // // // // //       return '0:00';
// // // // // //     }

// // // // // //     const mins = Math.floor(seconds / 60);
// // // // // //     const secs = Math.floor(seconds % 60);
// // // // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // // // //   };

// // // // // //   const handlePlayPause = () => {
// // // // // //     if (audioRef.current) {
// // // // // //       if (isPlaying) {
// // // // // //         audioRef.current.pause();
// // // // // //       } else {
// // // // // //         audioRef.current.play();
// // // // // //       }
// // // // // //       setIsPlaying(!isPlaying);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleProgressClick = (e) => {
// // // // // //     if (audioRef.current) {
// // // // // //       const rect = e.currentTarget.getBoundingClientRect();
// // // // // //       const clickX = e.clientX - rect.left;
// // // // // //       const width = rect.width;
// // // // // //       const newTime = (clickX / width) * duration;
// // // // // //       audioRef.current.currentTime = newTime;
// // // // // //       setCurrentTime(newTime);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDelete = async () => {
// // // // // //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// // // // // //       try {
// // // // // //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// // // // // //           headers: {
// // // // // //             Authorization: localStorage.getItem("token")
// // // // // //           }
// // // // // //         });
// // // // // //         // Navigate back or show success message
// // // // // //         window.history.back();
// // // // // //       } catch (error) {
// // // // // //         console.error("Error deleting meeting:", error);
// // // // // //         alert("Failed to delete meeting. Please try again.");
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// // // // // //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (error || !meetingData) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // // //         <div className="text-center">
// // // // // //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// // // // // //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   const summaryData = getSummaryData();
// // // // // //   const transcriptData = getTranscriptData();
// // // // // //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // //       <div className="max-w-6xl mx-auto">
// // // // // //         {/* Header */}
// // // // // //         <div className="flex items-center justify-between mb-6">
// // // // // //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// // // // // //           <div className="flex items-center space-x-3">
// // // // // //             {/* Send Email Button - Only show if emailRecipients exist */}
// // // // // //             {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // // //               <button
// // // // // //                 onClick={handleSendEmailPDF}
// // // // // //                 disabled={isSendingEmail}
// // // // // //                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
// // // // // //                   isSendingEmail 
// // // // // //                     ? "bg-gray-400 cursor-not-allowed" 
// // // // // //                     : "bg-green-600 hover:bg-green-700"
// // // // // //                 } text-white`}
// // // // // //               >
// // // // // //                 <Mail size={16} />
// // // // // //                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
// // // // // //               </button>
// // // // // //             )}

// // // // // //             <button 
// // // // // //               onClick={handleDownloadPDF}
// // // // // //               disabled={isGeneratingPDF}
// // // // // //               className={`p-2 transition-colors ${
// // // // // //                 isGeneratingPDF 
// // // // // //                   ? "text-gray-400 cursor-not-allowed" 
// // // // // //                   : "text-gray-600 hover:text-purple-600"
// // // // // //               }`}
// // // // // //               title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
// // // // // //             >
// // // // // //               {isGeneratingPDF ? (
// // // // // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
// // // // // //               ) : (
// // // // // //                 <Download size={20} />
// // // // // //               )}
// // // // // //             </button>
// // // // // //             <button 
// // // // // //               onClick={handleDelete}
// // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// // // // // //             >
// // // // // //               <Trash2 size={16} />
// // // // // //               <span>Delete</span>
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* PDF Generation Loading Message */}
// // // // // //         {isGeneratingPDF && (
// // // // // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
// // // // // //               <p className="text-blue-800 font-medium">
// // // // // //                 Generating PDF... This may take a few seconds.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Email Recipients Display */}
// // // // // //         {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // // //             <h4 className="text-sm font-medium text-blue-800 mb-2">
// // // // // //               📧 Email Recipients ({meetingData.emailRecipients.length})
// // // // // //             </h4>
// // // // // //             <div className="text-sm text-blue-700">
// // // // // //               {meetingData.emailRecipients.join(", ")}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Success/Error Messages */}
// // // // // //         {emailSent && (
// // // // // //           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
// // // // // //                 <span className="text-white text-xs">✓</span>
// // // // // //               </div>
// // // // // //               <p className="text-green-800 font-medium">
// // // // // //                 Meeting summary sent successfully to all recipients!
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {emailError && (
// // // // // //           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// // // // // //                 <span className="text-white text-xs">!</span>
// // // // // //               </div>
// // // // // //               <p className="text-red-800 font-medium">
// // // // // //                 {emailError}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Audio Player - Only show for audio-notes type */}
// // // // // //         {shouldShowAudioPlayer && (
// // // // // //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// // // // // //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// // // // // //             {/* Progress Bar */}
// // // // // //             <div className="mb-4">
// // // // // //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// // // // // //                 <span>{formatTime(currentTime)}</span>
// // // // // //                 <span>{formatTime(duration)}</span>
// // // // // //               </div>
// // // // // //               <div 
// // // // // //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// // // // // //                 onClick={handleProgressClick}
// // // // // //               >
// // // // // //                 <div 
// // // // // //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// // // // // //                   style={{ width: `${progressPercentage}%` }}
// // // // // //                 ></div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Controls */}
// // // // // //             <div className="flex items-center justify-between">
// // // // // //               <div className="flex items-center space-x-4">
// // // // // //                 {/* Playback Controls */}
// // // // // //                 <button 
// // // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// // // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // //                 >
// // // // // //                   <SkipBack size={20} />
// // // // // //                 </button>
// // // // // //                 <button 
// // // // // //                   onClick={handlePlayPause}
// // // // // //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// // // // // //                 >
// // // // // //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// // // // // //                 </button>
// // // // // //                 <button 
// // // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// // // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // // //                 >
// // // // // //                   <SkipForward size={20} />
// // // // // //                 </button>

// // // // // //                 {/* Speed Control */}
// // // // // //                 <div className="flex items-center space-x-1">
// // // // // //                   <button 
// // // // // //                     onClick={() => {
// // // // // //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// // // // // //                       setPlaybackSpeed(newSpeed);
// // // // // //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// // // // // //                     }}
// // // // // //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// // // // // //                   >
// // // // // //                     {playbackSpeed}x
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Action Icons */}
// // // // // //               <div className="flex items-center space-x-2">
// // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // //                   <Edit3 size={20} />
// // // // // //                 </button>
// // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // //                   <MessageCircle size={20} />
// // // // // //                 </button>
// // // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // // //                   <Share2 size={20} />
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Tab Navigation */}
// // // // // //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// // // // // //           <div className="flex gap-1">
// // // // // //             <button
// // // // // //               onClick={() => setActiveTab('Summary')}
// // // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // // //                 activeTab === 'Summary'
// // // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // // //               }`}
// // // // // //             >
// // // // // //               Summary
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={() => setActiveTab('Transcript')}
// // // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // // //                 activeTab === 'Transcript'
// // // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // // //               }`}
// // // // // //             >
// // // // // //               Transcript
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Content Area */}
// // // // // //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// // // // // //           {activeTab === 'Summary' ? (
// // // // // //             <div className="p-6">
// // // // // //               {/* Hidden PDF Content with Inline Styles */}
// // // // // //               <div id="pdf-content" style={{ 
// // // // // //                 display: 'none',
// // // // // //                 padding: '20px', 
// // // // // //                 backgroundColor: '#ffffff', 
// // // // // //                 fontFamily: 'Arial, sans-serif',
// // // // // //                 fontSize: '14px',
// // // // // //                 lineHeight: '1.6',
// // // // // //                 color: '#333333'
// // // // // //               }}>
// // // // // //                 {/* Meeting Title */}
// // // // // //                 <div style={{ marginBottom: '20px', borderBottom: '2px solid #e5e7eb', paddingBottom: '15px' }}>
// // // // // //                   <h1 style={{ 
// // // // // //                     fontSize: '24px', 
// // // // // //                     fontWeight: 'bold', 
// // // // // //                     color: '#1f2937', 
// // // // // //                     margin: '0 0 8px 0' 
// // // // // //                   }}>
// // // // // //                     {meetingData.title}
// // // // // //                   </h1>
// // // // // //                   <p style={{ 
// // // // // //                     fontSize: '12px', 
// // // // // //                     color: '#6b7280', 
// // // // // //                     margin: '0' 
// // // // // //                   }}>
// // // // // //                     {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // // // // //                       year: 'numeric',
// // // // // //                       month: 'long',
// // // // // //                       day: 'numeric'
// // // // // //                     })}
// // // // // //                   </p>
// // // // // //                 </div>

// // // // // //                 {/* Summary */}
// // // // // //                 {summaryData.summary && (
// // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // //                     <h3 style={{ 
// // // // // //                       fontSize: '16px', 
// // // // // //                       fontWeight: 'bold', 
// // // // // //                       color: '#1f2937', 
// // // // // //                       margin: '0 0 8px 0' 
// // // // // //                     }}>
// // // // // //                       Summary
// // // // // //                     </h3>
// // // // // //                     <div style={{ 
// // // // // //                       backgroundColor: '#f9fafb', 
// // // // // //                       padding: '12px', 
// // // // // //                       borderRadius: '6px',
// // // // // //                       border: '1px solid #e5e7eb' 
// // // // // //                     }}>
// // // // // //                       {summaryData.summary}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {/* Participants */}
// // // // // //                 {meetingData.participants && meetingData.participants.length > 0 && (
// // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // //                     <h3 style={{ 
// // // // // //                       fontSize: '16px', 
// // // // // //                       fontWeight: 'bold', 
// // // // // //                       color: '#1f2937', 
// // // // // //                       margin: '0 0 8px 0' 
// // // // // //                     }}>
// // // // // //                       Participants
// // // // // //                     </h3>
// // // // // //                     <div style={{ 
// // // // // //                       backgroundColor: '#f9fafb', 
// // // // // //                       padding: '12px', 
// // // // // //                       borderRadius: '6px',
// // // // // //                       border: '1px solid #e5e7eb' 
// // // // // //                     }}>
// // // // // //                       {meetingData.participants.join(', ')}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {/* Agenda */}
// // // // // //                 {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // //                     <h3 style={{ 
// // // // // //                       fontSize: '16px', 
// // // // // //                       fontWeight: 'bold', 
// // // // // //                       color: '#1f2937', 
// // // // // //                       margin: '0 0 8px 0' 
// // // // // //                     }}>
// // // // // //                       Agenda
// // // // // //                     </h3>
// // // // // //                     {meetingData.agenda.map((item, index) => (
// // // // // //                       <div key={index} style={{ 
// // // // // //                         backgroundColor: '#f9fafb', 
// // // // // //                         padding: '10px', 
// // // // // //                         margin: '5px 0',
// // // // // //                         borderRadius: '4px',
// // // // // //                         border: '1px solid #e5e7eb' 
// // // // // //                       }}>
// // // // // //                         {index + 1}. {item}
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {/* Minutes */}
// // // // // //                 {meetingData.minutes && meetingData.minutes.length > 0 && (
// // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // //                     <h3 style={{ 
// // // // // //                       fontSize: '16px', 
// // // // // //                       fontWeight: 'bold', 
// // // // // //                       color: '#1f2937', 
// // // // // //                       margin: '0 0 8px 0' 
// // // // // //                     }}>
// // // // // //                       Minutes
// // // // // //                     </h3>
// // // // // //                     {meetingData.minutes.map((minute, index) => (
// // // // // //                       <div key={index} style={{ 
// // // // // //                         backgroundColor: '#ffffff', 
// // // // // //                         padding: '12px', 
// // // // // //                         margin: '5px 0',
// // // // // //                         borderRadius: '4px',
// // // // // //                         border: '1px solid #d1d5db' 
// // // // // //                       }}>
// // // // // //                         <p style={{ 
// // // // // //                           fontWeight: 'bold', 
// // // // // //                           color: '#1f2937', 
// // // // // //                           margin: '0 0 5px 0' 
// // // // // //                         }}>
// // // // // //                           {index + 1}. {minute.topic}
// // // // // //                         </p>
// // // // // //                         <p style={{ 
// // // // // //                           color: '#6b7280', 
// // // // // //                           margin: '0' 
// // // // // //                         }}>
// // // // // //                           {minute.details}
// // // // // //                         </p>
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {/* Next Steps */}
// // // // // //                 {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // // //                     <h3 style={{ 
// // // // // //                       fontSize: '16px', 
// // // // // //                       fontWeight: 'bold', 
// // // // // //                       color: '#1f2937', 
// // // // // //                       margin: '0 0 8px 0' 
// // // // // //                     }}>
// // // // // //                       Next Steps
// // // // // //                     </h3>
// // // // // //                     {meetingData.nextSteps.map((step, index) => (
// // // // // //                       <div key={index} style={{ 
// // // // // //                         backgroundColor: '#ffffff', 
// // // // // //                         padding: '12px', 
// // // // // //                         margin: '5px 0',
// // // // // //                         borderRadius: '4px',
// // // // // //                         border: '1px solid #d1d5db' 
// // // // // //                       }}>
// // // // // //                         <p style={{ 
// // // // // //                           fontWeight: 'bold', 
// // // // // //                           color: '#1f2937', 
// // // // // //                           margin: '0 0 5px 0' 
// // // // // //                         }}>
// // // // // //                           {index + 1}. {step.task}
// // // // // //                         </p>
// // // // // //                         <p style={{ 
// // // // // //                           color: '#6b7280', 
// // // // // //                           margin: '0' 
// // // // // //                         }}>
// // // // // //                           <strong>Assignee:</strong> {step.assignee}<br />
// // // // // //                           <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // // // // //                         </p>
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </div>

// // // // // //               {/* Visible Content Area */}
// // // // // //               <div className="mb-6 border-b pb-4">
// // // // // //                 <h1 className="text-2xl font-bold text-gray-800">{meetingData.title}</h1>
// // // // // //                 <p className="text-sm text-gray-500 mt-1">
// // // // // //                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // // // // //                     year: 'numeric',
// // // // // //                     month: 'long',
// // // // // //                     day: 'numeric'
// // // // // //                   })}
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               {/* Topic */}
// // // // // //               <div className="mb-6">
// // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // // // //                   Topic: {summaryData.topic}
// // // // // //                 </h3>
// // // // // //                 {summaryData.summary && (
// // // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
// // // // // //                     <p>{summaryData.summary}</p>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </div>

// // // // // //               {/* Participants */}
// // // // // //               {meetingData.participants && meetingData.participants.length > 0 && (
// // // // // //                 <div className="mb-6">
// // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// // // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
// // // // // //                     <p>{meetingData.participants.join(', ')}</p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Agenda */}
// // // // // //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // // // //                 <div className="mb-8">
// // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// // // // // //                   {meetingData.agenda.map((item, index) => (
// // // // // //                     <div key={index} className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed">
// // // // // //                       <p>{index + 1}. {item}</p>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Minutes */}
// // // // // //               {meetingData.minutes && meetingData.minutes.length > 0 && (
// // // // // //                 <div className="mb-8">
// // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
// // // // // //                   {meetingData.minutes.map((minute, index) => (
// // // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</p>
// // // // // //                       <p className="text-gray-600">{minute.details}</p>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Next Steps */}
// // // // // //               {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // // // // //                 <div className="mb-8">
// // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
// // // // // //                   {meetingData.nextSteps.map((step, index) => (
// // // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</p>
// // // // // //                       <p className="text-gray-600">
// // // // // //                         <strong>Assignee:</strong> {step.assignee}<br />
// // // // // //                         <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Key Points - Only if no detailed minutes/next steps available */}
// // // // // //               {(!meetingData.minutes || meetingData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
// // // // // //                 <div className="mb-8">
// // // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// // // // // //                   <ul className="space-y-3">
// // // // // //                     {summaryData.bulletPoints.map((point, index) => (
// // // // // //                       <li key={index} className="flex items-start space-x-3">
// // // // // //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// // // // // //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// // // // // //                       </li>
// // // // // //                     ))}
// // // // // //                   </ul>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <div className="p-6">
// // // // // //               {/* Keywords Section */}
// // // // // //               <div className="mb-6">
// // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// // // // // //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// // // // // //               </div>

// // // // // //               {/* Speakers Section */}
// // // // // //               <div className="mb-8">
// // // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// // // // // //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// // // // // //               </div>

// // // // // //               {/* Conversation */}
// // // // // //               <div className="space-y-4">
// // // // // //                 {transcriptData.conversations.length > 0 ? (
// // // // // //                   transcriptData.conversations.map((conv, index) => (
// // // // // //                     <div key={index} className="flex items-start space-x-4">
// // // // // //                       {/* Speaker Avatar */}
// // // // // //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// // // // // //                         {conv.speaker.charAt(0)}
// // // // // //                       </div>

// // // // // //                       {/* Message Content */}
// // // // // //                       <div className="flex-1 min-w-0">
// // // // // //                         <div className="flex items-center space-x-2 mb-1">
// // // // // //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// // // // // //                           {shouldShowAudioPlayer && conv.time > 0 && (
// // // // // //                             <span className="text-sm text-green-600 flex items-center">
// // // // // //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// // // // // //                               {formatTime(conv.time)}
// // // // // //                             </span>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   ))
// // // // // //                 ) : (
// // // // // //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Scroll to bottom button */}
// // // // // //         <div className="fixed bottom-6 right-6">
// // // // // //           <button 
// // // // // //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// // // // // //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// // // // // //           >
// // // // // //             <ChevronDown size={20} />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import { useState, useRef, useEffect } from 'react';
// // // // // import { useParams, useLocation } from 'react-router-dom';
// // // // // import { 
// // // // //   Download, 
// // // // //   Trash2, 
// // // // //   SkipBack, 
// // // // //   Play, 
// // // // //   Pause, 
// // // // //   SkipForward,
// // // // //   Edit3,
// // // // //   MessageCircle,
// // // // //   Share2,
// // // // //   ChevronDown,
// // // // //   Mail
// // // // // } from 'lucide-react';
// // // // // import axios from 'axios';
// // // // // import html2pdf from 'html2pdf.js';

// // // // // export default function AudioAgendaPage() {
// // // // //   const { id } = useParams();
// // // // //   const location = useLocation();
// // // // //   const [activeTab, setActiveTab] = useState('Summary');
// // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // //   const [currentTime, setCurrentTime] = useState(0);
// // // // //   const [duration, setDuration] = useState(0);
// // // // //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// // // // //   const [meetingData, setMeetingData] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [isSendingEmail, setIsSendingEmail] = useState(false);
// // // // //   const [emailSent, setEmailSent] = useState(false);
// // // // //   const [emailError, setEmailError] = useState(null);
// // // // //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// // // // //   const audioRef = useRef(null);

// // // // //   // Fetch meeting data
// // // // //   useEffect(() => {
// // // // //     const fetchMeetingData = async () => {
// // // // //       try {
// // // // //         setLoading(true);
// // // // //         const response = await axios.get(
// // // // //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// // // // //           {
// // // // //             headers: {
// // // // //               Authorization: localStorage.getItem("token")
// // // // //             }
// // // // //           }
// // // // //         );
// // // // //         setMeetingData(response.data);
// // // // //         // Ensure duration is a valid number
// // // // //         const recordingLength = response.data.recordingLength || 0;
// // // // //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching meeting data:", error);
// // // // //         setError("Failed to load meeting data");
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     if (id) {
// // // // //       fetchMeetingData();
// // // // //     }
// // // // //   }, [id]);

// // // // //   // Audio player effects
// // // // //   useEffect(() => {
// // // // //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// // // // //       const audio = audioRef.current;

// // // // //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// // // // //       const updateDuration = () => {
// // // // //         const audioDuration = audio.duration;
// // // // //         const fallbackDuration = meetingData.recordingLength || 0;
// // // // //         // Use audio duration if valid, otherwise fall back to recordingLength
// // // // //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// // // // //         setDuration(validDuration);
// // // // //       };

// // // // //       audio.addEventListener('timeupdate', updateTime);
// // // // //       audio.addEventListener('loadedmetadata', updateDuration);
// // // // //       audio.addEventListener('ended', () => setIsPlaying(false));

// // // // //       return () => {
// // // // //         audio.removeEventListener('timeupdate', updateTime);
// // // // //         audio.removeEventListener('loadedmetadata', updateDuration);
// // // // //         audio.removeEventListener('ended', () => setIsPlaying(false));
// // // // //       };
// // // // //     }
// // // // //   }, [meetingData]);

// // // // //   // Get page title based on meeting type
// // // // //   const getPageTitle = () => {
// // // // //     if (!meetingData) return 'Meeting Details';

// // // // //     switch (meetingData.type) {
// // // // //       case 'audio-notes':
// // // // //         return 'Audio Notes';
// // // // //       case 'live-transcription':
// // // // //         return 'Live Transcription';
// // // // //       case 'recording':
// // // // //         return 'Meeting Recording';
// // // // //       default:
// // // // //         return 'Meeting Details';
// // // // //     }
// // // // //   };

// // // // //   // Prepare summary data
// // // // //   const getSummaryData = () => {
// // // // //     if (!meetingData) return null;

// // // // //     // Create bullet points from minutes
// // // // //     const bulletPoints = meetingData.minutes?.map(minute => 
// // // // //       `${minute.topic}: ${minute.details}`
// // // // //     ) || [];

// // // // //     // Add next steps as bullet points
// // // // //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// // // // //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// // // // //     ) || [];

// // // // //     // Create outline from minutes
// // // // //     const outline = {};
// // // // //     meetingData.minutes?.forEach(minute => {
// // // // //       outline[minute.topic] = [minute.details];
// // // // //     });

// // // // //     // Add next steps section if available
// // // // //     if (meetingData.nextSteps?.length > 0) {
// // // // //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// // // // //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// // // // //       );
// // // // //     }

// // // // //     return {
// // // // //       topic: meetingData.title,
// // // // //       summary: meetingData.summary || 'No summary available',
// // // // //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// // // // //       outline
// // // // //     };
// // // // //   };

// // // // //   // Prepare transcript data
// // // // //   const getTranscriptData = () => {
// // // // //     if (!meetingData) return null;

// // // // //     // Generate speaker colors
// // // // //     const speakerColors = [
// // // // //       'bg-purple-500',
// // // // //       'bg-pink-500', 
// // // // //       'bg-blue-500',
// // // // //       'bg-green-500',
// // // // //       'bg-orange-500',
// // // // //       'bg-red-500'
// // // // //     ];

// // // // //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// // // // //     const speakerColorMap = {};
// // // // //     uniqueSpeakers.forEach((speaker, index) => {
// // // // //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// // // // //     });

// // // // //     // Calculate speaker percentages
// // // // //     const speakerCounts = {};
// // // // //     meetingData.transcript?.forEach(t => {
// // // // //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// // // // //     });

// // // // //     const totalMessages = meetingData.transcript?.length || 0;
// // // // //     const speakersString = Object.entries(speakerCounts)
// // // // //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// // // // //       .join(', ');

// // // // //     // Extract keywords from transcript (simple implementation)
// // // // //     const allText = meetingData.transcript?.map(t => t.text).join(' ') || '';
// // // // //     const words = allText.toLowerCase()
// // // // //       .split(/\s+/)
// // // // //       .filter(word => word.length > 3)
// // // // //       .slice(0, 20); // Take first 20 words as keywords
// // // // //     const keywords = [...new Set(words)].join(', ');

// // // // //     return {
// // // // //       keywords: keywords || 'No keywords available',
// // // // //       speakers: speakersString || 'No speakers available',
// // // // //       conversations: meetingData.transcript?.map((conv, index) => ({
// // // // //         speaker: conv.speaker,
// // // // //         text: conv.text,
// // // // //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// // // // //         // Since there's no time in schema, we can estimate based on position
// // // // //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// // // // //       })) || []
// // // // //     };
// // // // //   };

// // // // //   const handleDownloadPDF = async () => {
// // // // //     const element = document.getElementById("pdf-content");
// // // // //     if (!element) {
// // // // //       alert("PDF content not found");
// // // // //       return;
// // // // //     }

// // // // //     setIsGeneratingPDF(true);

// // // // //     try {
// // // // //       // Show the PDF content in viewport temporarily
// // // // //       element.style.display = 'block';
// // // // //       element.style.position = 'fixed';
// // // // //       element.style.top = '0';
// // // // //       element.style.left = '0';
// // // // //       element.style.width = '100vw';
// // // // //       element.style.height = 'auto';
// // // // //       element.style.zIndex = '9999';
// // // // //       element.style.backgroundColor = '#ffffff';
// // // // //       element.style.overflow = 'auto';

// // // // //       // Add overlay to prevent user interaction
// // // // //       const overlay = document.createElement('div');
// // // // //       overlay.style.position = 'fixed';
// // // // //       overlay.style.top = '0';
// // // // //       overlay.style.left = '0';
// // // // //       overlay.style.width = '100vw';
// // // // //       overlay.style.height = '100vh';
// // // // //       overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
// // // // //       overlay.style.zIndex = '9998';
// // // // //       overlay.style.display = 'flex';
// // // // //       overlay.style.alignItems = 'center';
// // // // //       overlay.style.justifyContent = 'center';
// // // // //       overlay.style.color = 'white';
// // // // //       overlay.style.fontSize = '18px';
// // // // //       overlay.innerHTML = '<div>Generating PDF... Please wait</div>';
// // // // //       document.body.appendChild(overlay);

// // // // //       // Add a delay to allow rendering
// // // // //       await new Promise(resolve => setTimeout(resolve, 500));

// // // // //       const opt = {
// // // // //         margin: 0.5,
// // // // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // //         image: { type: 'jpeg', quality: 0.8 },
// // // // //         html2canvas: { 
// // // // //           scale: 1.2,
// // // // //           scrollY: 0,
// // // // //           useCORS: true,
// // // // //           allowTaint: true,
// // // // //           backgroundColor: '#ffffff',
// // // // //           logging: false,
// // // // //           width: element.scrollWidth,
// // // // //           height: element.scrollHeight
// // // // //         },
// // // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // //       };

// // // // //       // Generate PDF asynchronously
// // // // //       await html2pdf().set(opt).from(element).save();

// // // // //     } catch (error) {
// // // // //       console.error("Error generating PDF:", error);
// // // // //       alert("Failed to generate PDF. Please try again.");
// // // // //     } finally {
// // // // //       // Remove overlay
// // // // //       const overlay = document.querySelector('div[style*="rgba(0,0,0,0.8)"]');
// // // // //       if (overlay) {
// // // // //         overlay.remove();
// // // // //       }

// // // // //       // Hide the PDF content again
// // // // //       element.style.display = 'none';
// // // // //       element.style.position = '';
// // // // //       element.style.top = '';
// // // // //       element.style.left = '';
// // // // //       element.style.width = '';
// // // // //       element.style.height = '';
// // // // //       element.style.zIndex = '';
// // // // //       element.style.backgroundColor = '';
// // // // //       element.style.overflow = '';
// // // // //       setIsGeneratingPDF(false);
// // // // //     }
// // // // //   };

// // // // //   const handleSendEmailPDF = async () => {
// // // // //     if (!meetingData?.emailRecipients || meetingData.emailRecipients.length === 0) {
// // // // //       setEmailError("No email recipients found");
// // // // //       return;
// // // // //     }

// // // // //     setIsSendingEmail(true);
// // // // //     setEmailError(null);

// // // // //     try {
// // // // //       // Generate PDF as blob
// // // // //       const element = document.getElementById("pdf-content");
// // // // //       if (!element) {
// // // // //         throw new Error("PDF content not found");
// // // // //       }

// // // // //       // Show the PDF content in viewport temporarily
// // // // //       element.style.display = 'block';
// // // // //       element.style.position = 'fixed';
// // // // //       element.style.top = '0';
// // // // //       element.style.left = '0';
// // // // //       element.style.width = '100vw';
// // // // //       element.style.height = 'auto';
// // // // //       element.style.zIndex = '9999';
// // // // //       element.style.backgroundColor = '#ffffff';
// // // // //       element.style.overflow = 'auto';

// // // // //       // Add overlay to prevent user interaction
// // // // //       const overlay = document.createElement('div');
// // // // //       overlay.style.position = 'fixed';
// // // // //       overlay.style.top = '0';
// // // // //       overlay.style.left = '0';
// // // // //       overlay.style.width = '100vw';
// // // // //       overlay.style.height = '100vh';
// // // // //       overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
// // // // //       overlay.style.zIndex = '9998';
// // // // //       overlay.style.display = 'flex';
// // // // //       overlay.style.alignItems = 'center';
// // // // //       overlay.style.justifyContent = 'center';
// // // // //       overlay.style.color = 'white';
// // // // //       overlay.style.fontSize = '18px';
// // // // //       overlay.innerHTML = '<div>Generating PDF for email... Please wait</div>';
// // // // //       document.body.appendChild(overlay);

// // // // //       // Add a delay to allow rendering
// // // // //       await new Promise(resolve => setTimeout(resolve, 500));

// // // // //       const opt = {
// // // // //         margin: 0.5,
// // // // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // // // //         image: { type: 'jpeg', quality: 0.8 },
// // // // //         html2canvas: { 
// // // // //           scale: 1.2,
// // // // //           scrollY: 0,
// // // // //           useCORS: true,
// // // // //           allowTaint: true,
// // // // //           backgroundColor: '#ffffff',
// // // // //           logging: false,
// // // // //           width: element.scrollWidth,
// // // // //           height: element.scrollHeight
// // // // //         },
// // // // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // // // //       };

// // // // //       // Generate PDF as blob instead of downloading
// // // // //       const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');

// // // // //       // Remove overlay and hide PDF content
// // // // //       const overlayElement = document.querySelector('div[style*="rgba(0,0,0,0.8)"]');
// // // // //       if (overlayElement) {
// // // // //         overlayElement.remove();
// // // // //       }

// // // // //       element.style.display = 'none';
// // // // //       element.style.position = '';
// // // // //       element.style.top = '';
// // // // //       element.style.left = '';
// // // // //       element.style.width = '';
// // // // //       element.style.height = '';
// // // // //       element.style.zIndex = '';
// // // // //       element.style.backgroundColor = '';
// // // // //       element.style.overflow = '';

// // // // //       // Create FormData to send PDF and email data
// // // // //       const formData = new FormData();
// // // // //       formData.append('pdf', pdfBlob, `${meetingData?.title || "meeting-summary"}.pdf`);
// // // // //       formData.append('recipients', JSON.stringify(meetingData.emailRecipients));
// // // // //       formData.append('meetingTitle', meetingData?.title || "Meeting Summary");
// // // // //       formData.append('meetingId', meetingData?._id || '');

// // // // //       // Send to your email API endpoint
// // // // //       const response = await axios.post(
// // // // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
// // // // //         formData,
// // // // //         {
// // // // //           headers: {
// // // // //             "Content-Type": "multipart/form-data",
// // // // //             Authorization: localStorage.getItem("token"),
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       if (response.data.success) {
// // // // //         setEmailSent(true);
// // // // //         setTimeout(() => setEmailSent(false), 5000); // Hide success message after 5 seconds
// // // // //       } else {
// // // // //         throw new Error(response.data.message || "Failed to send emails");
// // // // //       }

// // // // //     } catch (error) {
// // // // //       console.error("Error sending email:", error);
// // // // //       setEmailError(error.message || "Failed to send emails. Please try again.");
// // // // //       setTimeout(() => setEmailError(null), 5000); // Hide error message after 5 seconds

// // // // //       // Make sure to clean up even if there's an error
// // // // //       const overlay = document.querySelector('div[style*="rgba(0,0,0,0.8)"]');
// // // // //       if (overlay) {
// // // // //         overlay.remove();
// // // // //       }

// // // // //       const element = document.getElementById("pdf-content");
// // // // //       if (element) {
// // // // //         element.style.display = 'none';
// // // // //         element.style.position = '';
// // // // //         element.style.top = '';
// // // // //         element.style.left = '';
// // // // //         element.style.width = '';
// // // // //         element.style.height = '';
// // // // //         element.style.zIndex = '';
// // // // //         element.style.backgroundColor = '';
// // // // //         element.style.overflow = '';
// // // // //       }
// // // // //     } finally {
// // // // //       setIsSendingEmail(false);
// // // // //     }
// // // // //   };

// // // // //   const formatTime = (seconds) => {
// // // // //     // Handle invalid numbers
// // // // //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// // // // //       return '0:00';
// // // // //     }

// // // // //     const mins = Math.floor(seconds / 60);
// // // // //     const secs = Math.floor(seconds % 60);
// // // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // // //   };

// // // // //   const handlePlayPause = () => {
// // // // //     if (audioRef.current) {
// // // // //       if (isPlaying) {
// // // // //         audioRef.current.pause();
// // // // //       } else {
// // // // //         audioRef.current.play();
// // // // //       }
// // // // //       setIsPlaying(!isPlaying);
// // // // //     }
// // // // //   };

// // // // //   const handleProgressClick = (e) => {
// // // // //     if (audioRef.current) {
// // // // //       const rect = e.currentTarget.getBoundingClientRect();
// // // // //       const clickX = e.clientX - rect.left;
// // // // //       const width = rect.width;
// // // // //       const newTime = (clickX / width) * duration;
// // // // //       audioRef.current.currentTime = newTime;
// // // // //       setCurrentTime(newTime);
// // // // //     }
// // // // //   };

// // // // //   const handleDelete = async () => {
// // // // //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// // // // //       try {
// // // // //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// // // // //           headers: {
// // // // //             Authorization: localStorage.getItem("token")
// // // // //           }
// // // // //         });
// // // // //         // Navigate back or show success message
// // // // //         window.history.back();
// // // // //       } catch (error) {
// // // // //         console.error("Error deleting meeting:", error);
// // // // //         alert("Failed to delete meeting. Please try again.");
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// // // // //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (error || !meetingData) {
// // // // //     return (
// // // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // // //         <div className="text-center">
// // // // //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// // // // //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   const summaryData = getSummaryData();
// // // // //   const transcriptData = getTranscriptData();
// // // // //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // //       <div className="max-w-6xl mx-auto">
// // // // //         {/* Header */}
// // // // //         <div className="flex items-center justify-between mb-6">
// // // // //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// // // // //           <div className="flex items-center space-x-3">
// // // // //             {/* Send Email Button - Only show if emailRecipients exist */}
// // // // //             {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // //               <button
// // // // //                 onClick={handleSendEmailPDF}
// // // // //                 disabled={isSendingEmail}
// // // // //                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
// // // // //                   isSendingEmail 
// // // // //                     ? "bg-gray-400 cursor-not-allowed" 
// // // // //                     : "bg-green-600 hover:bg-green-700"
// // // // //                 } text-white`}
// // // // //               >
// // // // //                 <Mail size={16} />
// // // // //                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
// // // // //               </button>
// // // // //             )}

// // // // //             <button 
// // // // //               onClick={handleDownloadPDF}
// // // // //               disabled={isGeneratingPDF}
// // // // //               className={`p-2 transition-colors ${
// // // // //                 isGeneratingPDF 
// // // // //                   ? "text-gray-400 cursor-not-allowed" 
// // // // //                   : "text-gray-600 hover:text-purple-600"
// // // // //               }`}
// // // // //               title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
// // // // //             >
// // // // //               {isGeneratingPDF ? (
// // // // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
// // // // //               ) : (
// // // // //                 <Download size={20} />
// // // // //               )}
// // // // //             </button>
// // // // //             <button 
// // // // //               onClick={handleDelete}
// // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// // // // //             >
// // // // //               <Trash2 size={16} />
// // // // //               <span>Delete</span>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* PDF Generation Loading Message */}
// // // // //         {isGeneratingPDF && (
// // // // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // //             <div className="flex items-center gap-2">
// // // // //               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
// // // // //               <p className="text-blue-800 font-medium">
// // // // //                 Generating PDF... This may take a few seconds.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Email Recipients Display */}
// // // // //         {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // // // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // //             <h4 className="text-sm font-medium text-blue-800 mb-2">
// // // // //               📧 Email Recipients ({meetingData.emailRecipients.length})
// // // // //             </h4>
// // // // //             <div className="text-sm text-blue-700">
// // // // //               {meetingData.emailRecipients.join(", ")}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Success/Error Messages */}
// // // // //         {emailSent && (
// // // // //           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// // // // //             <div className="flex items-center gap-2">
// // // // //               <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
// // // // //                 <span className="text-white text-xs">✓</span>
// // // // //               </div>
// // // // //               <p className="text-green-800 font-medium">
// // // // //                 Meeting summary sent successfully to all recipients!
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {emailError && (
// // // // //           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// // // // //             <div className="flex items-center gap-2">
// // // // //               <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// // // // //                 <span className="text-white text-xs">!</span>
// // // // //               </div>
// // // // //               <p className="text-red-800 font-medium">
// // // // //                 {emailError}
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Audio Player - Only show for audio-notes type */}
// // // // //         {shouldShowAudioPlayer && (
// // // // //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// // // // //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// // // // //             {/* Progress Bar */}
// // // // //             <div className="mb-4">
// // // // //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// // // // //                 <span>{formatTime(currentTime)}</span>
// // // // //                 <span>{formatTime(duration)}</span>
// // // // //               </div>
// // // // //               <div 
// // // // //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// // // // //                 onClick={handleProgressClick}
// // // // //               >
// // // // //                 <div 
// // // // //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// // // // //                   style={{ width: `${progressPercentage}%` }}
// // // // //                 ></div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Controls */}
// // // // //             <div className="flex items-center justify-between">
// // // // //               <div className="flex items-center space-x-4">
// // // // //                 {/* Playback Controls */}
// // // // //                 <button 
// // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // //                 >
// // // // //                   <SkipBack size={20} />
// // // // //                 </button>
// // // // //                 <button 
// // // // //                   onClick={handlePlayPause}
// // // // //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// // // // //                 >
// // // // //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// // // // //                 </button>
// // // // //                 <button 
// // // // //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// // // // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // // // //                 >
// // // // //                   <SkipForward size={20} />
// // // // //                 </button>

// // // // //                 {/* Speed Control */}
// // // // //                 <div className="flex items-center space-x-1">
// // // // //                   <button 
// // // // //                     onClick={() => {
// // // // //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// // // // //                       setPlaybackSpeed(newSpeed);
// // // // //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// // // // //                     }}
// // // // //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// // // // //                   >
// // // // //                     {playbackSpeed}x
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Action Icons */}
// // // // //               <div className="flex items-center space-x-2">
// // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // //                   <Edit3 size={20} />
// // // // //                 </button>
// // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // //                   <MessageCircle size={20} />
// // // // //                 </button>
// // // // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // // // //                   <Share2 size={20} />
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Tab Navigation */}
// // // // //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// // // // //           <div className="flex gap-1">
// // // // //             <button
// // // // //               onClick={() => setActiveTab('Summary')}
// // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // //                 activeTab === 'Summary'
// // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // //               }`}
// // // // //             >
// // // // //               Summary
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setActiveTab('Transcript')}
// // // // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // // // //                 activeTab === 'Transcript'
// // // // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // // // //                   : 'text-gray-600 hover:text-purple-600'
// // // // //               }`}
// // // // //             >
// // // // //               Transcript
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Content Area */}
// // // // //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// // // // //           {activeTab === 'Summary' ? (
// // // // //             <div className="p-6">
// // // // //               {/* Hidden PDF Content with Inline Styles */}
// // // // //               <div id="pdf-content" style={{ 
// // // // //                 display: 'none',
// // // // //                 padding: '20px', 
// // // // //                 backgroundColor: '#ffffff', 
// // // // //                 fontFamily: 'Arial, sans-serif',
// // // // //                 fontSize: '14px',
// // // // //                 lineHeight: '1.6',
// // // // //                 color: '#333333'
// // // // //               }}>
// // // // //                 {/* Meeting Title */}
// // // // //                 <div style={{ marginBottom: '20px', borderBottom: '2px solid #e5e7eb', paddingBottom: '15px' }}>
// // // // //                   <h1 style={{ 
// // // // //                     fontSize: '24px', 
// // // // //                     fontWeight: 'bold', 
// // // // //                     color: '#1f2937', 
// // // // //                     margin: '0 0 8px 0' 
// // // // //                   }}>
// // // // //                     {meetingData.title}
// // // // //                   </h1>
// // // // //                   <p style={{ 
// // // // //                     fontSize: '12px', 
// // // // //                     color: '#6b7280', 
// // // // //                     margin: '0' 
// // // // //                   }}>
// // // // //                     {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // // // //                       year: 'numeric',
// // // // //                       month: 'long',
// // // // //                       day: 'numeric'
// // // // //                     })}
// // // // //                   </p>
// // // // //                 </div>

// // // // //                 {/* Summary */}
// // // // //                 {summaryData.summary && (
// // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // //                     <h3 style={{ 
// // // // //                       fontSize: '16px', 
// // // // //                       fontWeight: 'bold', 
// // // // //                       color: '#1f2937', 
// // // // //                       margin: '0 0 8px 0' 
// // // // //                     }}>
// // // // //                       Summary
// // // // //                     </h3>
// // // // //                     <div style={{ 
// // // // //                       backgroundColor: '#f9fafb', 
// // // // //                       padding: '12px', 
// // // // //                       borderRadius: '6px',
// // // // //                       border: '1px solid #e5e7eb' 
// // // // //                     }}>
// // // // //                       {summaryData.summary}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {/* Participants */}
// // // // //                 {meetingData.participants && meetingData.participants.length > 0 && (
// // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // //                     <h3 style={{ 
// // // // //                       fontSize: '16px', 
// // // // //                       fontWeight: 'bold', 
// // // // //                       color: '#1f2937', 
// // // // //                       margin: '0 0 8px 0' 
// // // // //                     }}>
// // // // //                       Participants
// // // // //                     </h3>
// // // // //                     <div style={{ 
// // // // //                       backgroundColor: '#f9fafb', 
// // // // //                       padding: '12px', 
// // // // //                       borderRadius: '6px',
// // // // //                       border: '1px solid #e5e7eb' 
// // // // //                     }}>
// // // // //                       {meetingData.participants.join(', ')}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {/* Agenda */}
// // // // //                 {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // //                     <h3 style={{ 
// // // // //                       fontSize: '16px', 
// // // // //                       fontWeight: 'bold', 
// // // // //                       color: '#1f2937', 
// // // // //                       margin: '0 0 8px 0' 
// // // // //                     }}>
// // // // //                       Agenda
// // // // //                     </h3>
// // // // //                     {meetingData.agenda.map((item, index) => (
// // // // //                       <div key={index} style={{ 
// // // // //                         backgroundColor: '#f9fafb', 
// // // // //                         padding: '10px', 
// // // // //                         margin: '5px 0',
// // // // //                         borderRadius: '4px',
// // // // //                         border: '1px solid #e5e7eb' 
// // // // //                       }}>
// // // // //                         {index + 1}. {item}
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {/* Minutes */}
// // // // //                 {meetingData.minutes && meetingData.minutes.length > 0 && (
// // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // //                     <h3 style={{ 
// // // // //                       fontSize: '16px', 
// // // // //                       fontWeight: 'bold', 
// // // // //                       color: '#1f2937', 
// // // // //                       margin: '0 0 8px 0' 
// // // // //                     }}>
// // // // //                       Minutes
// // // // //                     </h3>
// // // // //                     {meetingData.minutes.map((minute, index) => (
// // // // //                       <div key={index} style={{ 
// // // // //                         backgroundColor: '#ffffff', 
// // // // //                         padding: '12px', 
// // // // //                         margin: '5px 0',
// // // // //                         borderRadius: '4px',
// // // // //                         border: '1px solid #d1d5db' 
// // // // //                       }}>
// // // // //                         <p style={{ 
// // // // //                           fontWeight: 'bold', 
// // // // //                           color: '#1f2937', 
// // // // //                           margin: '0 0 5px 0' 
// // // // //                         }}>
// // // // //                           {index + 1}. {minute.topic}
// // // // //                         </p>
// // // // //                         <p style={{ 
// // // // //                           color: '#6b7280', 
// // // // //                           margin: '0' 
// // // // //                         }}>
// // // // //                           {minute.details}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {/* Next Steps */}
// // // // //                 {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // // // //                   <div style={{ marginBottom: '20px' }}>
// // // // //                     <h3 style={{ 
// // // // //                       fontSize: '16px', 
// // // // //                       fontWeight: 'bold', 
// // // // //                       color: '#1f2937', 
// // // // //                       margin: '0 0 8px 0' 
// // // // //                     }}>
// // // // //                       Next Steps
// // // // //                     </h3>
// // // // //                     {meetingData.nextSteps.map((step, index) => (
// // // // //                       <div key={index} style={{ 
// // // // //                         backgroundColor: '#ffffff', 
// // // // //                         padding: '12px', 
// // // // //                         margin: '5px 0',
// // // // //                         borderRadius: '4px',
// // // // //                         border: '1px solid #d1d5db' 
// // // // //                       }}>
// // // // //                         <p style={{ 
// // // // //                           fontWeight: 'bold', 
// // // // //                           color: '#1f2937', 
// // // // //                           margin: '0 0 5px 0' 
// // // // //                         }}>
// // // // //                           {index + 1}. {step.task}
// // // // //                         </p>
// // // // //                         <p style={{ 
// // // // //                           color: '#6b7280', 
// // // // //                           margin: '0' 
// // // // //                         }}>
// // // // //                           <strong>Assignee:</strong> {step.assignee}<br />
// // // // //                           <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //               {/* Visible Content Area */}
// // // // //               <div className="mb-6 border-b pb-4">
// // // // //                 <h1 className="text-2xl font-bold text-gray-800">{meetingData.title}</h1>
// // // // //                 <p className="text-sm text-gray-500 mt-1">
// // // // //                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // // // //                     year: 'numeric',
// // // // //                     month: 'long',
// // // // //                     day: 'numeric'
// // // // //                   })}
// // // // //                 </p>
// // // // //               </div>

// // // // //               {/* Topic */}
// // // // //               <div className="mb-6">
// // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // // //                   Topic: {summaryData.topic}
// // // // //                 </h3>
// // // // //                 {summaryData.summary && (
// // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
// // // // //                     <p>{summaryData.summary}</p>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //               {/* Participants */}
// // // // //               {meetingData.participants && meetingData.participants.length > 0 && (
// // // // //                 <div className="mb-6">
// // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// // // // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
// // // // //                     <p>{meetingData.participants.join(', ')}</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Agenda */}
// // // // //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// // // // //                 <div className="mb-8">
// // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// // // // //                   {meetingData.agenda.map((item, index) => (
// // // // //                     <div key={index} className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed">
// // // // //                       <p>{index + 1}. {item}</p>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Minutes */}
// // // // //               {meetingData.minutes && meetingData.minutes.length > 0 && (
// // // // //                 <div className="mb-8">
// // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
// // // // //                   {meetingData.minutes.map((minute, index) => (
// // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</p>
// // // // //                       <p className="text-gray-600">{minute.details}</p>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Next Steps */}
// // // // //               {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // // // //                 <div className="mb-8">
// // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
// // // // //                   {meetingData.nextSteps.map((step, index) => (
// // // // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // // // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</p>
// // // // //                       <p className="text-gray-600">
// // // // //                         <strong>Assignee:</strong> {step.assignee}<br />
// // // // //                         <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Key Points - Only if no detailed minutes/next steps available */}
// // // // //               {(!meetingData.minutes || meetingData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
// // // // //                 <div className="mb-8">
// // // // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// // // // //                   <ul className="space-y-3">
// // // // //                     {summaryData.bulletPoints.map((point, index) => (
// // // // //                       <li key={index} className="flex items-start space-x-3">
// // // // //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// // // // //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// // // // //                       </li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div className="p-6">
// // // // //               {/* Keywords Section */}
// // // // //               <div className="mb-6">
// // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// // // // //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// // // // //               </div>

// // // // //               {/* Speakers Section */}
// // // // //               <div className="mb-8">
// // // // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// // // // //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// // // // //               </div>

// // // // //               {/* Conversation */}
// // // // //               <div className="space-y-4">
// // // // //                 {transcriptData.conversations.length > 0 ? (
// // // // //                   transcriptData.conversations.map((conv, index) => (
// // // // //                     <div key={index} className="flex items-start space-x-4">
// // // // //                       {/* Speaker Avatar */}
// // // // //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// // // // //                         {conv.speaker.charAt(0)}
// // // // //                       </div>

// // // // //                       {/* Message Content */}
// // // // //                       <div className="flex-1 min-w-0">
// // // // //                         <div className="flex items-center space-x-2 mb-1">
// // // // //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// // // // //                           {shouldShowAudioPlayer && conv.time > 0 && (
// // // // //                             <span className="text-sm text-green-600 flex items-center">
// // // // //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// // // // //                               {formatTime(conv.time)}
// // // // //                             </span>
// // // // //                           )}
// // // // //                         </div>
// // // // //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))
// // // // //                 ) : (
// // // // //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Scroll to bottom button */}
// // // // //         <div className="fixed bottom-6 right-6">
// // // // //           <button 
// // // // //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// // // // //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// // // // //           >
// // // // //             <ChevronDown size={20} />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // import { useState, useRef, useEffect } from 'react';
// // // import { useParams, useLocation } from 'react-router-dom';
// // // import { 
// // //   Download, 
// // //   Trash2, 
// // //   SkipBack, 
// // //   Play, 
// // //   Pause, 
// // //   SkipForward,
// // //   Edit3,
// // //   MessageCircle,
// // //   Share2,
// // //   ChevronDown,
// // //   Mail
// // // } from 'lucide-react';
// // // import axios from 'axios';
// // // import html2pdf from 'html2pdf.js';

// // // export default function AudioAgendaPage() {
// // //   const { id } = useParams();
// // //   const location = useLocation();
// // //   const [activeTab, setActiveTab] = useState('Summary');
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const [currentTime, setCurrentTime] = useState(0);
// // //   const [duration, setDuration] = useState(0);
// // //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// // //   const [meetingData, setMeetingData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [isSendingEmail, setIsSendingEmail] = useState(false);
// // //   const [emailSent, setEmailSent] = useState(false);
// // //   const [emailError, setEmailError] = useState(null);
// // //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// // //   const audioRef = useRef(null);

// // //   // Fetch meeting data
// // //   useEffect(() => {
// // //     const fetchMeetingData = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const response = await axios.get(
// // //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// // //           {
// // //             headers: {
// // //               Authorization: localStorage.getItem("token")
// // //             }
// // //           }
// // //         );
// // //         setMeetingData(response.data);
// // //         // Ensure duration is a valid number
// // //         const recordingLength = response.data.recordingLength || 0;
// // //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// // //       } catch (error) {
// // //         console.error("Error fetching meeting data:", error);
// // //         setError("Failed to load meeting data");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     if (id) {
// // //       fetchMeetingData();
// // //     }
// // //   }, [id]);

// // //   // Audio player effects
// // //   useEffect(() => {
// // //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// // //       const audio = audioRef.current;

// // //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// // //       const updateDuration = () => {
// // //         const audioDuration = audio.duration;
// // //         const fallbackDuration = meetingData.recordingLength || 0;
// // //         // Use audio duration if valid, otherwise fall back to recordingLength
// // //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// // //         setDuration(validDuration);
// // //       };

// // //       audio.addEventListener('timeupdate', updateTime);
// // //       audio.addEventListener('loadedmetadata', updateDuration);
// // //       audio.addEventListener('ended', () => setIsPlaying(false));

// // //       return () => {
// // //         audio.removeEventListener('timeupdate', updateTime);
// // //         audio.removeEventListener('loadedmetadata', updateDuration);
// // //         audio.removeEventListener('ended', () => setIsPlaying(false));
// // //       };
// // //     }
// // //   }, [meetingData]);

// // //   // Get page title based on meeting type
// // //   const getPageTitle = () => {
// // //     if (!meetingData) return 'Meeting Details';

// // //     switch (meetingData.type) {
// // //       case 'audio-notes':
// // //         return 'Audio Notes';
// // //       case 'live-transcription':
// // //         return 'Live Transcription';
// // //       case 'recording':
// // //         return 'Meeting Recording';
// // //       default:
// // //         return 'Meeting Details';
// // //     }
// // //   };

// // //   // Prepare summary data
// // //   const getSummaryData = () => {
// // //     if (!meetingData) return null;

// // //     // Create bullet points from minutes
// // //     const bulletPoints = meetingData.minutes?.map(minute => 
// // //       `${minute.topic}: ${minute.details}`
// // //     ) || [];

// // //     // Add next steps as bullet points
// // //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// // //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// // //     ) || [];

// // //     // Create outline from minutes
// // //     const outline = {};
// // //     meetingData.minutes?.forEach(minute => {
// // //       outline[minute.topic] = [minute.details];
// // //     });

// // //     // Add next steps section if available
// // //     if (meetingData.nextSteps?.length > 0) {
// // //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// // //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// // //       );
// // //     }

// // //     return {
// // //       topic: meetingData.title,
// // //       summary: meetingData.summary || 'No summary available',
// // //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// // //       outline
// // //     };
// // //   };

// // //   // Prepare transcript data
// // //   const getTranscriptData = () => {
// // //     if (!meetingData) return null;

// // //     // Generate speaker colors
// // //     const speakerColors = [
// // //       'bg-purple-500',
// // //       'bg-pink-500', 
// // //       'bg-blue-500',
// // //       'bg-green-500',
// // //       'bg-orange-500',
// // //       'bg-red-500'
// // //     ];

// // //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// // //     const speakerColorMap = {};
// // //     uniqueSpeakers.forEach((speaker, index) => {
// // //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// // //     });

// // //     // Calculate speaker percentages
// // //     const speakerCounts = {};
// // //     meetingData.transcript?.forEach(t => {
// // //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// // //     });

// // //     const totalMessages = meetingData.transcript?.length || 0;
// // //     const speakersString = Object.entries(speakerCounts)
// // //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// // //       .join(', ');

// // //     // Extract keywords from transcript (simple implementation)
// // //     const allText = meetingData.transcript?.map(t => t.text).join(' ') || '';
// // //     const words = allText.toLowerCase()
// // //       .split(/\s+/)
// // //       .filter(word => word.length > 3)
// // //       .slice(0, 20); // Take first 20 words as keywords
// // //     const keywords = [...new Set(words)].join(', ');

// // //     return {
// // //       keywords: keywords || 'No keywords available',
// // //       speakers: speakersString || 'No speakers available',
// // //       conversations: meetingData.transcript?.map((conv, index) => ({
// // //         speaker: conv.speaker,
// // //         text: conv.text,
// // //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// // //         // Since there's no time in schema, we can estimate based on position
// // //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// // //       })) || []
// // //     };
// // //   };

// // //   const handleDownloadPDF = async () => {
// // //     const element = document.getElementById("pdf-content");
// // //     if (!element) {
// // //       alert("PDF content not found");
// // //       return;
// // //     }

// // //     setIsGeneratingPDF(true);

// // //     try {
// // //       const opt = {
// // //         margin: 0.5,
// // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // //         image: { type: 'jpeg', quality: 0.8 },
// // //         html2canvas: { 
// // //           scale: 1.2,
// // //           scrollY: 0,
// // //           useCORS: true,
// // //           allowTaint: true,
// // //           backgroundColor: '#ffffff',
// // //           logging: false
// // //         },
// // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // //       };

// // //       // Generate PDF from visible content - no hiding/showing needed!
// // //       await html2pdf().set(opt).from(element).save();

// // //     } catch (error) {
// // //       console.error("Error generating PDF:", error);
// // //       alert("Failed to generate PDF. Please try again.");
// // //     } finally {
// // //       setIsGeneratingPDF(false);
// // //     }
// // //   };

// // //   const handleSendEmailPDF = async () => {
// // //     if (!meetingData?.emailRecipients || meetingData.emailRecipients.length === 0) {
// // //       setEmailError("No email recipients found");
// // //       return;
// // //     }

// // //     setIsSendingEmail(true);
// // //     setEmailError(null);

// // //     try {
// // //       const element = document.getElementById("pdf-content");
// // //       if (!element) {
// // //         throw new Error("PDF content not found");
// // //       }

// // //       const opt = {
// // //         margin: 0.5,
// // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // //         image: { type: 'jpeg', quality: 0.8 },
// // //         html2canvas: { 
// // //           scale: 1.2,
// // //           scrollY: 0,
// // //           useCORS: true,
// // //           allowTaint: true,
// // //           backgroundColor: '#ffffff',
// // //           logging: false
// // //         },
// // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // //       };

// // //       // Generate PDF from visible content - simple!
// // //       const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');

// // //       // Create FormData to send PDF and email data
// // //       const formData = new FormData();
// // //       formData.append('pdf', pdfBlob, `${meetingData?.title || "meeting-summary"}.pdf`);
// // //       formData.append('recipients', JSON.stringify(meetingData.emailRecipients));
// // //       formData.append('meetingTitle', meetingData?.title || "Meeting Summary");
// // //       formData.append('meetingId', meetingData?._id || '');

// // //       // Send to your email API endpoint
// // //       const response = await axios.post(
// // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
// // //         formData,
// // //         {
// // //           headers: {
// // //             "Content-Type": "multipart/form-data",
// // //             Authorization: localStorage.getItem("token"),
// // //           },
// // //         }
// // //       );

// // //       if (response.data.success) {
// // //         setEmailSent(true);
// // //         setTimeout(() => setEmailSent(false), 5000);
// // //       } else {
// // //         throw new Error(response.data.message || "Failed to send emails");
// // //       }

// // //     } catch (error) {
// // //       console.error("Error sending email:", error);
// // //       setEmailError(error.message || "Failed to send emails. Please try again.");
// // //       setTimeout(() => setEmailError(null), 5000);
// // //     } finally {
// // //       setIsSendingEmail(false);
// // //     }
// // //   };

// // //   const formatTime = (seconds) => {
// // //     // Handle invalid numbers
// // //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// // //       return '0:00';
// // //     }

// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = Math.floor(seconds % 60);
// // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // //   };

// // //   const handlePlayPause = () => {
// // //     if (audioRef.current) {
// // //       if (isPlaying) {
// // //         audioRef.current.pause();
// // //       } else {
// // //         audioRef.current.play();
// // //       }
// // //       setIsPlaying(!isPlaying);
// // //     }
// // //   };

// // //   const handleProgressClick = (e) => {
// // //     if (audioRef.current) {
// // //       const rect = e.currentTarget.getBoundingClientRect();
// // //       const clickX = e.clientX - rect.left;
// // //       const width = rect.width;
// // //       const newTime = (clickX / width) * duration;
// // //       audioRef.current.currentTime = newTime;
// // //       setCurrentTime(newTime);
// // //     }
// // //   };

// // //   const handleDelete = async () => {
// // //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// // //       try {
// // //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// // //           headers: {
// // //             Authorization: localStorage.getItem("token")
// // //           }
// // //         });
// // //         // Navigate back or show success message
// // //         window.history.back();
// // //       } catch (error) {
// // //         console.error("Error deleting meeting:", error);
// // //         alert("Failed to delete meeting. Please try again.");
// // //       }
// // //     }
// // //   };

// // //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// // //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// // //       </div>
// // //     );
// // //   }

// // //   if (error || !meetingData) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // //         <div className="text-center">
// // //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// // //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const summaryData = getSummaryData();
// // //   const transcriptData = getTranscriptData();
// // //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-6">
// // //       <div className="max-w-6xl mx-auto">
// // //         {/* Header */}
// // //         <div className="flex items-center justify-between mb-6">
// // //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// // //           <div className="flex items-center space-x-3">
// // //             {/* Send Email Button - Only show if emailRecipients exist */}
// // //             {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // //               <button
// // //                 onClick={handleSendEmailPDF}
// // //                 disabled={isSendingEmail}
// // //                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
// // //                   isSendingEmail 
// // //                     ? "bg-gray-400 cursor-not-allowed" 
// // //                     : "bg-green-600 hover:bg-green-700"
// // //                 } text-white`}
// // //               >
// // //                 <Mail size={16} />
// // //                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
// // //               </button>
// // //             )}

// // //             <button 
// // //               onClick={handleDownloadPDF}
// // //               disabled={isGeneratingPDF}
// // //               className={`p-2 transition-colors ${
// // //                 isGeneratingPDF 
// // //                   ? "text-gray-400 cursor-not-allowed" 
// // //                   : "text-gray-600 hover:text-purple-600"
// // //               }`}
// // //               title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
// // //             >
// // //               {isGeneratingPDF ? (
// // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
// // //               ) : (
// // //                 <Download size={20} />
// // //               )}
// // //             </button>
// // //             <button 
// // //               onClick={handleDelete}
// // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// // //             >
// // //               <Trash2 size={16} />
// // //               <span>Delete</span>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* PDF Generation Loading Message */}
// // //         {isGeneratingPDF && (
// // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // //             <div className="flex items-center gap-2">
// // //               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
// // //               <p className="text-blue-800 font-medium">
// // //                 Generating PDF...
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Email Recipients Display */}
// // //         {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// // //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // //             <h4 className="text-sm font-medium text-blue-800 mb-2">
// // //               📧 Email Recipients ({meetingData.emailRecipients.length})
// // //             </h4>
// // //             <div className="text-sm text-blue-700">
// // //               {meetingData.emailRecipients.join(", ")}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Success/Error Messages */}
// // //         {emailSent && (
// // //           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// // //             <div className="flex items-center gap-2">
// // //               <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
// // //                 <span className="text-white text-xs">✓</span>
// // //               </div>
// // //               <p className="text-green-800 font-medium">
// // //                 Meeting summary sent successfully to all recipients!
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {emailError && (
// // //           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// // //             <div className="flex items-center gap-2">
// // //               <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// // //                 <span className="text-white text-xs">!</span>
// // //               </div>
// // //               <p className="text-red-800 font-medium">
// // //                 {emailError}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Audio Player - Only show for audio-notes type */}
// // //         {shouldShowAudioPlayer && (
// // //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// // //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// // //             {/* Progress Bar */}
// // //             <div className="mb-4">
// // //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// // //                 <span>{formatTime(currentTime)}</span>
// // //                 <span>{formatTime(duration)}</span>
// // //               </div>
// // //               <div 
// // //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// // //                 onClick={handleProgressClick}
// // //               >
// // //                 <div 
// // //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// // //                   style={{ width: `${progressPercentage}%` }}
// // //                 ></div>
// // //               </div>
// // //             </div>

// // //             {/* Controls */}
// // //             <div className="flex items-center justify-between">
// // //               <div className="flex items-center space-x-4">
// // //                 {/* Playback Controls */}
// // //                 <button 
// // //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // //                 >
// // //                   <SkipBack size={20} />
// // //                 </button>
// // //                 <button 
// // //                   onClick={handlePlayPause}
// // //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// // //                 >
// // //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// // //                 </button>
// // //                 <button 
// // //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// // //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// // //                 >
// // //                   <SkipForward size={20} />
// // //                 </button>

// // //                 {/* Speed Control */}
// // //                 <div className="flex items-center space-x-1">
// // //                   <button 
// // //                     onClick={() => {
// // //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// // //                       setPlaybackSpeed(newSpeed);
// // //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// // //                     }}
// // //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// // //                   >
// // //                     {playbackSpeed}x
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* Action Icons */}
// // //               <div className="flex items-center space-x-2">
// // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // //                   <Edit3 size={20} />
// // //                 </button>
// // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // //                   <MessageCircle size={20} />
// // //                 </button>
// // //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// // //                   <Share2 size={20} />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Tab Navigation */}
// // //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// // //           <div className="flex gap-1">
// // //             <button
// // //               onClick={() => setActiveTab('Summary')}
// // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // //                 activeTab === 'Summary'
// // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // //                   : 'text-gray-600 hover:text-purple-600'
// // //               }`}
// // //             >
// // //               Summary
// // //             </button>
// // //             <button
// // //               onClick={() => setActiveTab('Transcript')}
// // //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// // //                 activeTab === 'Transcript'
// // //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// // //                   : 'text-gray-600 hover:text-purple-600'
// // //               }`}
// // //             >
// // //               Transcript
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Content Area */}
// // //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// // //           {activeTab === 'Summary' ? (
// // //             <div id="pdf-content" className="p-6">
// // //               {/* Meeting Title */}
// // //               <div className="mb-6 border-b pb-4">
// // //                 <h1 className="text-2xl font-bold text-gray-800">{meetingData.title}</h1>
// // //                 <p className="text-sm text-gray-500 mt-1">
// // //                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// // //                     year: 'numeric',
// // //                     month: 'long',
// // //                     day: 'numeric'
// // //                   })}
// // //                 </p>
// // //               </div>

// // //               {/* Topic */}
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // //                   Topic: {summaryData.topic}
// // //                 </h3>
// // //                 {summaryData.summary && (
// // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
// // //                     <p>{summaryData.summary}</p>
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Participants */}
// // //               {meetingData.participants && meetingData.participants.length > 0 && (
// // //                 <div className="mb-6">
// // //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// // //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
// // //                     <p>{meetingData.participants.join(', ')}</p>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {/* Agenda */}
// // //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// // //                 <div className="mb-8">
// // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// // //                   {meetingData.agenda.map((item, index) => (
// // //                     <div key={index} className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed">
// // //                       <p>{index + 1}. {item}</p>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {/* Minutes */}
// // //               {meetingData.minutes && meetingData.minutes.length > 0 && (
// // //                 <div className="mb-8">
// // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
// // //                   {meetingData.minutes.map((minute, index) => (
// // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</p>
// // //                       <p className="text-gray-600">{minute.details}</p>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {/* Next Steps */}
// // //               {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// // //                 <div className="mb-8">
// // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
// // //                   {meetingData.nextSteps.map((step, index) => (
// // //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// // //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</p>
// // //                       <p className="text-gray-600">
// // //                         <strong>Assignee:</strong> {step.assignee}<br />
// // //                         <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// // //                       </p>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {/* Key Points - Only if no detailed minutes/next steps available */}
// // //               {(!meetingData.minutes || meetingData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
// // //                 <div className="mb-8">
// // //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// // //                   <ul className="space-y-3">
// // //                     {summaryData.bulletPoints.map((point, index) => (
// // //                       <li key={index} className="flex items-start space-x-3">
// // //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// // //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ) : (
// // //             <div className="p-6">
// // //               {/* Keywords Section */}
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// // //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// // //               </div>

// // //               {/* Speakers Section */}
// // //               <div className="mb-8">
// // //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// // //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// // //               </div>

// // //               {/* Conversation */}
// // //               <div className="space-y-4">
// // //                 {transcriptData.conversations.length > 0 ? (
// // //                   transcriptData.conversations.map((conv, index) => (
// // //                     <div key={index} className="flex items-start space-x-4">
// // //                       {/* Speaker Avatar */}
// // //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// // //                         {conv.speaker.charAt(0)}
// // //                       </div>

// // //                       {/* Message Content */}
// // //                       <div className="flex-1 min-w-0">
// // //                         <div className="flex items-center space-x-2 mb-1">
// // //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// // //                           {shouldShowAudioPlayer && conv.time > 0 && (
// // //                             <span className="text-sm text-green-600 flex items-center">
// // //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// // //                               {formatTime(conv.time)}
// // //                             </span>
// // //                           )}
// // //                         </div>
// // //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// // //                       </div>
// // //                     </div>
// // //                   ))
// // //                 ) : (
// // //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Scroll to bottom button */}
// // //         <div className="fixed bottom-6 right-6">
// // //           <button 
// // //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// // //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// // //           >
// // //             <ChevronDown size={20} />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useState, useRef, useEffect } from 'react';
// // import { useParams, useLocation } from 'react-router-dom';
// // import { 
// //   Download, 
// //   Trash2, 
// //   SkipBack, 
// //   Play, 
// //   Pause, 
// //   SkipForward,
// //   Edit3,
// //   MessageCircle,
// //   Share2,
// //   ChevronDown,
// //   Mail
// // } from 'lucide-react';
// // import axios from 'axios';
// // import html2pdf from 'html2pdf.js';

// // export default function AudioAgendaPage() {
// //   const { id } = useParams();
// //   const location = useLocation();
// //   const [activeTab, setActiveTab] = useState('Summary');
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [currentTime, setCurrentTime] = useState(0);
// //   const [duration, setDuration] = useState(0);
// //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// //   const [meetingData, setMeetingData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isSendingEmail, setIsSendingEmail] = useState(false);
// //   const [emailSent, setEmailSent] = useState(false);
// //   const [emailError, setEmailError] = useState(null);
// //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// //   const audioRef = useRef(null);

// //   // Fetch meeting data
// //   useEffect(() => {
// //     const fetchMeetingData = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(
// //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// //           {
// //             headers: {
// //               Authorization: localStorage.getItem("token")
// //             }
// //           }
// //         );
// //         setMeetingData(response.data);
// //         // Ensure duration is a valid number
// //         const recordingLength = response.data.recordingLength || 0;
// //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// //       } catch (error) {
// //         console.error("Error fetching meeting data:", error);
// //         setError("Failed to load meeting data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (id) {
// //       fetchMeetingData();
// //     }
// //   }, [id]);

// //   // Audio player effects
// //   useEffect(() => {
// //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// //       const audio = audioRef.current;

// //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// //       const updateDuration = () => {
// //         const audioDuration = audio.duration;
// //         const fallbackDuration = meetingData.recordingLength || 0;
// //         // Use audio duration if valid, otherwise fall back to recordingLength
// //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// //         setDuration(validDuration);
// //       };

// //       audio.addEventListener('timeupdate', updateTime);
// //       audio.addEventListener('loadedmetadata', updateDuration);
// //       audio.addEventListener('ended', () => setIsPlaying(false));

// //       return () => {
// //         audio.removeEventListener('timeupdate', updateTime);
// //         audio.removeEventListener('loadedmetadata', updateDuration);
// //         audio.removeEventListener('ended', () => setIsPlaying(false));
// //       };
// //     }
// //   }, [meetingData]);

// //   // Get page title based on meeting type
// //   const getPageTitle = () => {
// //     if (!meetingData) return 'Meeting Details';

// //     switch (meetingData.type) {
// //       case 'audio-notes':
// //         return 'Audio Notes';
// //       case 'live-transcription':
// //         return 'Live Transcription';
// //       case 'recording':
// //         return 'Meeting Recording';
// //       default:
// //         return 'Meeting Details';
// //     }
// //   };

// //   // Prepare summary data
// //   const getSummaryData = () => {
// //     if (!meetingData) return null;

// //     // Create bullet points from minutes
// //     const bulletPoints = meetingData.minutes?.map(minute => 
// //       `${minute.topic}: ${minute.details}`
// //     ) || [];

// //     // Add next steps as bullet points
// //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// //     ) || [];

// //     // Create outline from minutes
// //     const outline = {};
// //     meetingData.minutes?.forEach(minute => {
// //       outline[minute.topic] = [minute.details];
// //     });

// //     // Add next steps section if available
// //     if (meetingData.nextSteps?.length > 0) {
// //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// //       );
// //     }

// //     return {
// //       topic: meetingData.title,
// //       summary: meetingData.summary || 'No summary available',
// //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// //       outline
// //     };
// //   };

// //   // Prepare transcript data
// //   const getTranscriptData = () => {
// //     if (!meetingData) return null;

// //     // Generate speaker colors
// //     const speakerColors = [
// //       'bg-purple-500',
// //       'bg-pink-500', 
// //       'bg-blue-500',
// //       'bg-green-500',
// //       'bg-orange-500',
// //       'bg-red-500'
// //     ];

// //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// //     const speakerColorMap = {};
// //     uniqueSpeakers.forEach((speaker, index) => {
// //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// //     });

// //     // Calculate speaker percentages
// //     const speakerCounts = {};
// //     meetingData.transcript?.forEach(t => {
// //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// //     });

// //     const totalMessages = meetingData.transcript?.length || 0;
// //     const speakersString = Object.entries(speakerCounts)
// //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// //       .join(', ');

// //     // Extract keywords from transcript (simple implementation)
// //     const allText = meetingData.transcript?.map(t => t.text).join(' ') || '';
// //     const words = allText.toLowerCase()
// //       .split(/\s+/)
// //       .filter(word => word.length > 3)
// //       .slice(0, 20); // Take first 20 words as keywords
// //     const keywords = [...new Set(words)].join(', ');

// //     return {
// //       keywords: keywords || 'No keywords available',
// //       speakers: speakersString || 'No speakers available',
// //       conversations: meetingData.transcript?.map((conv, index) => ({
// //         speaker: conv.speaker,
// //         text: conv.text,
// //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// //         // Since there's no time in schema, we can estimate based on position
// //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// //       })) || []
// //     };
// //   };

// // //   const handleDownloadPDF = async () => {
// // //     const element = document.getElementById("pdf-content");
// // //     if (!element) {
// // //       alert("PDF content not found");
// // //       return;
// // //     }

// // //     setIsGeneratingPDF(true);

// // //     try {
// // //       const opt = {
// // //         margin: 0.5,
// // //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// // //         image: { type: 'jpeg', quality: 0.8 },
// // //         html2canvas: { 
// // //           scale: 1.2,
// // //           scrollY: 0,
// // //           useCORS: true,
// // //           allowTaint: true,
// // //           backgroundColor: '#ffffff',
// // //           logging: false,
// // //           foreignObjectRendering: false, // Disable to avoid CSS parsing issues
// // //           onclone: function(clonedDoc) {
// // //             // Remove any elements that might cause color parsing issues
// // //             const clonedElement = clonedDoc.getElementById("pdf-content");
// // //             if (clonedElement) {
// // //               // Force basic styling to avoid oklch color issues
// // //               clonedElement.style.color = '#333333';
// // //               clonedElement.style.backgroundColor = '#ffffff';

// // //               // Find all elements and normalize their colors
// // //               const allElements = clonedElement.querySelectorAll('*');
// // //               allElements.forEach(el => {
// // //                 // Remove any potential oklch styling
// // //                 const computedStyle = window.getComputedStyle(el);
// // //                 if (computedStyle.color && computedStyle.color.includes('oklch')) {
// // //                   el.style.color = '#333333';
// // //                 }
// // //                 if (computedStyle.backgroundColor && computedStyle.backgroundColor.includes('oklch')) {
// // //                   el.style.backgroundColor = 'transparent';
// // //                 }
// // //                 if (computedStyle.borderColor && computedStyle.borderColor.includes('oklch')) {
// // //                   el.style.borderColor = '#e5e7eb';
// // //                 }
// // //               });
// // //             }
// // //           }
// // //         },
// // //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// // //       };

// // //       // Generate PDF from visible content
// // //       await html2pdf().set(opt).from(element).save();

// // //     } catch (error) {
// // //       console.error("Error generating PDF:", error);
// // //       alert("Failed to generate PDF. Please try again.");
// // //     } finally {
// // //       setIsGeneratingPDF(false);
// // //     }
// // //   };

// //     const handleDownloadPDF = async () => {
// //   const element = document.getElementById("pdf-content");
// //   if (!element) {
// //     alert("PDF content not found");
// //     return;
// //   }

// //   setIsGeneratingPDF(true);

// //   try {
// //     const opt = {
// //       margin: 0.5,
// //       filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// //       image: { type: 'jpeg', quality: 0.8 },
// //       html2canvas: { 
// //         scale: 1.2,
// //         scrollY: 0,
// //         useCORS: true,
// //         allowTaint: true,
// //         backgroundColor: '#ffffff',
// //         logging: false,
// //         // Add this to ignore problematic elements
// //         ignoreElements: (element) => {
// //           // Ignore elements with unsupported color formats
// //           const style = window.getComputedStyle(element);
// //           return (
// //             style.color.includes('oklch') || 
// //             style.backgroundColor.includes('oklch') ||
// //             style.borderColor.includes('oklch')
// //           );
// //         },
// //         onclone: function(clonedDoc) {
// //           // Remove any elements that might cause color parsing issues
// //           const clonedElement = clonedDoc.getElementById("pdf-content");
// //           if (clonedElement) {
// //             // Force basic styling to avoid oklch color issues
// //             clonedElement.style.color = '#333333';
// //             clonedElement.style.backgroundColor = '#ffffff';

// //             // Find all elements and normalize their colors
// //             const allElements = clonedElement.querySelectorAll('*');
// //             allElements.forEach(el => {
// //               // Remove any potential oklch styling
// //               const computedStyle = window.getComputedStyle(el);
// //               if (computedStyle.color && computedStyle.color.includes('oklch')) {
// //                 el.style.color = '#333333';
// //               }
// //               if (computedStyle.backgroundColor && computedStyle.backgroundColor.includes('oklch')) {
// //                 el.style.backgroundColor = 'transparent';
// //               }
// //               if (computedStyle.borderColor && computedStyle.borderColor.includes('oklch')) {
// //                 el.style.borderColor = '#e5e7eb';
// //               }
// //             });
// //           }
// //         }
// //       },
// //       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// //     };

// //     // Generate PDF from visible content
// //     await html2pdf().set(opt).from(element).save();

// //   } catch (error) {
// //     console.error("Error generating PDF:", error);
// //     alert("Failed to generate PDF. Please try again.");
// //   } finally {
// //     setIsGeneratingPDF(false);
// //   }
// // };

// //   const handleSendEmailPDF = async () => {
// //     if (!meetingData?.emailRecipients || meetingData.emailRecipients.length === 0) {
// //       setEmailError("No email recipients found");
// //       return;
// //     }

// //     setIsSendingEmail(true);
// //     setEmailError(null);

// //     try {
// //       const element = document.getElementById("pdf-content");
// //       if (!element) {
// //         throw new Error("PDF content not found");
// //       }

// //       const opt = {
// //         margin: 0.5,
// //         filename: `${meetingData?.title || "meeting-summary"}.pdf`,
// //         image: { type: 'jpeg', quality: 0.8 },
// //         html2canvas: { 
// //           scale: 1.2,
// //           scrollY: 0,
// //           useCORS: true,
// //           allowTaint: true,
// //           backgroundColor: '#ffffff',
// //           logging: false,
// //           foreignObjectRendering: false, // Disable to avoid CSS parsing issues
// //           onclone: function(clonedDoc) {
// //             // Remove any elements that might cause color parsing issues
// //             const clonedElement = clonedDoc.getElementById("pdf-content");
// //             if (clonedElement) {
// //               // Force basic styling to avoid oklch color issues
// //               clonedElement.style.color = '#333333';
// //               clonedElement.style.backgroundColor = '#ffffff';

// //               // Find all elements and normalize their colors
// //               const allElements = clonedElement.querySelectorAll('*');
// //               allElements.forEach(el => {
// //                 // Remove any potential oklch styling
// //                 const computedStyle = window.getComputedStyle(el);
// //                 if (computedStyle.color && computedStyle.color.includes('oklch')) {
// //                   el.style.color = '#333333';
// //                 }
// //                 if (computedStyle.backgroundColor && computedStyle.backgroundColor.includes('oklch')) {
// //                   el.style.backgroundColor = 'transparent';
// //                 }
// //                 if (computedStyle.borderColor && computedStyle.borderColor.includes('oklch')) {
// //                   el.style.borderColor = '#e5e7eb';
// //                 }
// //               });
// //             }
// //           }
// //         },
// //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// //       };

// //       // Generate PDF from visible content
// //       const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');

// //       // Create FormData to send PDF and email data
// //       const formData = new FormData();
// //       formData.append('pdf', pdfBlob, `${meetingData?.title || "meeting-summary"}.pdf`);
// //       formData.append('recipients', JSON.stringify(meetingData.emailRecipients));
// //       formData.append('meetingTitle', meetingData?.title || "Meeting Summary");
// //       formData.append('meetingId', meetingData?._id || '');

// //       // Send to your email API endpoint
// //       const response = await axios.post(
// //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
// //         formData,
// //         {
// //           headers: {
// //             "Content-Type": "multipart/form-data",
// //             Authorization: localStorage.getItem("token"),
// //           },
// //         }
// //       );

// //       if (response.data.success) {
// //         setEmailSent(true);
// //         setTimeout(() => setEmailSent(false), 5000);
// //       } else {
// //         throw new Error(response.data.message || "Failed to send emails");
// //       }

// //     } catch (error) {
// //       console.error("Error sending email:", error);
// //       setEmailError(error.message || "Failed to send emails. Please try again.");
// //       setTimeout(() => setEmailError(null), 5000);
// //     } finally {
// //       setIsSendingEmail(false);
// //     }
// //   };

// //   const formatTime = (seconds) => {
// //     // Handle invalid numbers
// //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// //       return '0:00';
// //     }

// //     const mins = Math.floor(seconds / 60);
// //     const secs = Math.floor(seconds % 60);
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   const handlePlayPause = () => {
// //     if (audioRef.current) {
// //       if (isPlaying) {
// //         audioRef.current.pause();
// //       } else {
// //         audioRef.current.play();
// //       }
// //       setIsPlaying(!isPlaying);
// //     }
// //   };

// //   const handleProgressClick = (e) => {
// //     if (audioRef.current) {
// //       const rect = e.currentTarget.getBoundingClientRect();
// //       const clickX = e.clientX - rect.left;
// //       const width = rect.width;
// //       const newTime = (clickX / width) * duration;
// //       audioRef.current.currentTime = newTime;
// //       setCurrentTime(newTime);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// //       try {
// //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// //           headers: {
// //             Authorization: localStorage.getItem("token")
// //           }
// //         });
// //         // Navigate back or show success message
// //         window.history.back();
// //       } catch (error) {
// //         console.error("Error deleting meeting:", error);
// //         alert("Failed to delete meeting. Please try again.");
// //       }
// //     }
// //   };

// //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// //       </div>
// //     );
// //   }

// //   if (error || !meetingData) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const summaryData = getSummaryData();
// //   const transcriptData = getTranscriptData();
// //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-6">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header */}
// //         <div className="flex items-center justify-between mb-6">
// //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// //           <div className="flex items-center space-x-3">
// //             {/* Send Email Button - Only show if emailRecipients exist */}
// //             {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// //               <button
// //                 onClick={handleSendEmailPDF}
// //                 disabled={isSendingEmail}
// //                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
// //                   isSendingEmail 
// //                     ? "bg-gray-400 cursor-not-allowed" 
// //                     : "bg-green-600 hover:bg-green-700"
// //                 } text-white`}
// //               >
// //                 <Mail size={16} />
// //                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
// //               </button>
// //             )}

// //             <button 
// //               onClick={handleDownloadPDF}
// //               disabled={isGeneratingPDF}
// //               className={`p-2 transition-colors ${
// //                 isGeneratingPDF 
// //                   ? "text-gray-400 cursor-not-allowed" 
// //                   : "text-gray-600 hover:text-purple-600"
// //               }`}
// //               title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
// //             >
// //               {isGeneratingPDF ? (
// //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
// //               ) : (
// //                 <Download size={20} />
// //               )}
// //             </button>
// //             <button 
// //               onClick={handleDelete}
// //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// //             >
// //               <Trash2 size={16} />
// //               <span>Delete</span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* PDF Generation Loading Message */}
// //         {isGeneratingPDF && (
// //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// //             <div className="flex items-center gap-2">
// //               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
// //               <p className="text-blue-800 font-medium">
// //                 Generating PDF...
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {/* Email Recipients Display */}
// //         {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// //             <h4 className="text-sm font-medium text-blue-800 mb-2">
// //               📧 Email Recipients ({meetingData.emailRecipients.length})
// //             </h4>
// //             <div className="text-sm text-blue-700">
// //               {meetingData.emailRecipients.join(", ")}
// //             </div>
// //           </div>
// //         )}

// //         {/* Success/Error Messages */}
// //         {emailSent && (
// //           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// //             <div className="flex items-center gap-2">
// //               <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
// //                 <span className="text-white text-xs">✓</span>
// //               </div>
// //               <p className="text-green-800 font-medium">
// //                 Meeting summary sent successfully to all recipients!
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {emailError && (
// //           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// //             <div className="flex items-center gap-2">
// //               <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// //                 <span className="text-white text-xs">!</span>
// //               </div>
// //               <p className="text-red-800 font-medium">
// //                 {emailError}
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {/* Audio Player - Only show for audio-notes type */}
// //         {shouldShowAudioPlayer && (
// //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// //             {/* Progress Bar */}
// //             <div className="mb-4">
// //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// //                 <span>{formatTime(currentTime)}</span>
// //                 <span>{formatTime(duration)}</span>
// //               </div>
// //               <div 
// //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// //                 onClick={handleProgressClick}
// //               >
// //                 <div 
// //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// //                   style={{ width: `${progressPercentage}%` }}
// //                 ></div>
// //               </div>
// //             </div>

// //             {/* Controls */}
// //             <div className="flex items-center justify-between">
// //               <div className="flex items-center space-x-4">
// //                 {/* Playback Controls */}
// //                 <button 
// //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// //                 >
// //                   <SkipBack size={20} />
// //                 </button>
// //                 <button 
// //                   onClick={handlePlayPause}
// //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// //                 >
// //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// //                 </button>
// //                 <button 
// //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// //                 >
// //                   <SkipForward size={20} />
// //                 </button>

// //                 {/* Speed Control */}
// //                 <div className="flex items-center space-x-1">
// //                   <button 
// //                     onClick={() => {
// //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// //                       setPlaybackSpeed(newSpeed);
// //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// //                     }}
// //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// //                   >
// //                     {playbackSpeed}x
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Action Icons */}
// //               <div className="flex items-center space-x-2">
// //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// //                   <Edit3 size={20} />
// //                 </button>
// //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// //                   <MessageCircle size={20} />
// //                 </button>
// //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// //                   <Share2 size={20} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Tab Navigation */}
// //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// //           <div className="flex gap-1">
// //             <button
// //               onClick={() => setActiveTab('Summary')}
// //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// //                 activeTab === 'Summary'
// //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// //                   : 'text-gray-600 hover:text-purple-600'
// //               }`}
// //             >
// //               Summary
// //             </button>
// //             <button
// //               onClick={() => setActiveTab('Transcript')}
// //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// //                 activeTab === 'Transcript'
// //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// //                   : 'text-gray-600 hover:text-purple-600'
// //               }`}
// //             >
// //               Transcript
// //             </button>
// //           </div>
// //         </div>

// //         {/* Content Area */}
// //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// //           {activeTab === 'Summary' ? (
// //             <div id="pdf-content" className="p-6">
// //               {/* Meeting Title */}
// //               <div className="mb-6 border-b pb-4">
// //                 <h1 className="text-2xl font-bold text-gray-800">{meetingData.title}</h1>
// //                 <p className="text-sm text-gray-500 mt-1">
// //                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// //                     year: 'numeric',
// //                     month: 'long',
// //                     day: 'numeric'
// //                   })}
// //                 </p>
// //               </div>

// //               {/* Topic */}
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// //                   Topic: {summaryData.topic}
// //                 </h3>
// //                 {summaryData.summary && (
// //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
// //                     <p>{summaryData.summary}</p>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Participants */}
// //               {meetingData.participants && meetingData.participants.length > 0 && (
// //                 <div className="mb-6">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
// //                     <p>{meetingData.participants.join(', ')}</p>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Agenda */}
// //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// //                 <div className="mb-8">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// //                   {meetingData.agenda.map((item, index) => (
// //                     <div key={index} className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed">
// //                       <p>{index + 1}. {item}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Minutes */}
// //               {meetingData.minutes && meetingData.minutes.length > 0 && (
// //                 <div className="mb-8">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
// //                   {meetingData.minutes.map((minute, index) => (
// //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</p>
// //                       <p className="text-gray-600">{minute.details}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Next Steps */}
// //               {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// //                 <div className="mb-8">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
// //                   {meetingData.nextSteps.map((step, index) => (
// //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</p>
// //                       <p className="text-gray-600">
// //                         <strong>Assignee:</strong> {step.assignee}<br />
// //                         <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// //                       </p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Key Points - Only if no detailed minutes/next steps available */}
// //               {(!meetingData.minutes || meetingData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
// //                 <div className="mb-8">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// //                   <ul className="space-y-3">
// //                     {summaryData.bulletPoints.map((point, index) => (
// //                       <li key={index} className="flex items-start space-x-3">
// //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <div className="p-6">
// //               {/* Keywords Section */}
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// //               </div>

// //               {/* Speakers Section */}
// //               <div className="mb-8">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// //               </div>

// //               {/* Conversation */}
// //               <div className="space-y-4">
// //                 {transcriptData.conversations.length > 0 ? (
// //                   transcriptData.conversations.map((conv, index) => (
// //                     <div key={index} className="flex items-start space-x-4">
// //                       {/* Speaker Avatar */}
// //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// //                         {conv.speaker.charAt(0)}
// //                       </div>

// //                       {/* Message Content */}
// //                       <div className="flex-1 min-w-0">
// //                         <div className="flex items-center space-x-2 mb-1">
// //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// //                           {shouldShowAudioPlayer && conv.time > 0 && (
// //                             <span className="text-sm text-green-600 flex items-center">
// //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// //                               {formatTime(conv.time)}
// //                             </span>
// //                           )}
// //                         </div>
// //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Scroll to bottom button */}
// //         <div className="fixed bottom-6 right-6">
// //           <button 
// //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// //           >
// //             <ChevronDown size={20} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // import { useState, useRef, useEffect } from 'react';
// // import { useParams, useLocation } from 'react-router-dom';
// // import { 
// //   Download, 
// //   Trash2, 
// //   SkipBack, 
// //   Play, 
// //   Pause, 
// //   SkipForward,
// //   Edit3,
// //   MessageCircle,
// //   Share2,
// //   ChevronDown,
// //   Mail
// // } from 'lucide-react';
// // import axios from 'axios';
// // import { pdf } from '@react-pdf/renderer';
// // import { saveAs } from 'file-saver';
// // import MeetingSummaryPDF from '../components/MeetingSummaryPDF'; // We'll create this component

// // export default function AudioAgendaPage() {
// //   const { id } = useParams();
// //   const location = useLocation();
// //   const [activeTab, setActiveTab] = useState('Summary');
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [currentTime, setCurrentTime] = useState(0);
// //   const [duration, setDuration] = useState(0);
// //   const [playbackSpeed, setPlaybackSpeed] = useState(1);
// //   const [meetingData, setMeetingData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isSendingEmail, setIsSendingEmail] = useState(false);
// //   const [emailSent, setEmailSent] = useState(false);
// //   const [emailError, setEmailError] = useState(null);
// //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// //   const audioRef = useRef(null);

// //   // Fetch meeting data
// //   useEffect(() => {
// //     const fetchMeetingData = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(
// //           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
// //           {
// //             headers: {
// //               Authorization: localStorage.getItem("token")
// //             }
// //           }
// //         );
// //         setMeetingData(response.data);
// //         // Ensure duration is a valid number
// //         const recordingLength = response.data.recordingLength || 0;
// //         setDuration(isFinite(recordingLength) ? recordingLength : 0);
// //       } catch (error) {
// //         console.error("Error fetching meeting data:", error);
// //         setError("Failed to load meeting data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (id) {
// //       fetchMeetingData();
// //     }
// //   }, [id]);

// //   // Audio player effects
// //   useEffect(() => {
// //     if (audioRef.current && meetingData?.recordingAudioUrl) {
// //       const audio = audioRef.current;

// //       const updateTime = () => setCurrentTime(audio.currentTime || 0);
// //       const updateDuration = () => {
// //         const audioDuration = audio.duration;
// //         const fallbackDuration = meetingData.recordingLength || 0;
// //         // Use audio duration if valid, otherwise fall back to recordingLength
// //         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
// //         setDuration(validDuration);
// //       };

// //       audio.addEventListener('timeupdate', updateTime);
// //       audio.addEventListener('loadedmetadata', updateDuration);
// //       audio.addEventListener('ended', () => setIsPlaying(false));

// //       return () => {
// //         audio.removeEventListener('timeupdate', updateTime);
// //         audio.removeEventListener('loadedmetadata', updateDuration);
// //         audio.removeEventListener('ended', () => setIsPlaying(false));
// //       };
// //     }
// //   }, [meetingData]);

// //   // Get page title based on meeting type
// //   const getPageTitle = () => {
// //     if (!meetingData) return 'Meeting Details';

// //     switch (meetingData.type) {
// //       case 'audio-notes':
// //         return 'Audio Notes';
// //       case 'live-transcription':
// //         return 'Live Transcription';
// //       case 'recording':
// //         return 'Meeting Recording';
// //       default:
// //         return 'Meeting Details';
// //     }
// //   };

// //   // Prepare summary data
// //   const getSummaryData = () => {
// //     if (!meetingData) return null;

// //     // Create bullet points from minutes
// //     const bulletPoints = meetingData.minutes?.map(minute => 
// //       `${minute.topic}: ${minute.details}`
// //     ) || [];

// //     // Add next steps as bullet points
// //     const nextStepsBullets = meetingData.nextSteps?.map(step => 
// //       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
// //     ) || [];

// //     // Create outline from minutes
// //     const outline = {};
// //     meetingData.minutes?.forEach(minute => {
// //       outline[minute.topic] = [minute.details];
// //     });

// //     // Add next steps section if available
// //     if (meetingData.nextSteps?.length > 0) {
// //       outline['Next Steps'] = meetingData.nextSteps.map(step => 
// //         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
// //       );
// //     }

// //     return {
// //       topic: meetingData.title,
// //       summary: meetingData.summary || 'No summary available',
// //       bulletPoints: [...bulletPoints, ...nextStepsBullets],
// //       outline
// //     };
// //   };

// //   // Prepare transcript data
// //   const getTranscriptData = () => {
// //     if (!meetingData) return null;

// //     // Generate speaker colors
// //     const speakerColors = [
// //       'bg-purple-500',
// //       'bg-pink-500', 
// //       'bg-blue-500',
// //       'bg-green-500',
// //       'bg-orange-500',
// //       'bg-red-500'
// //     ];

// //     const uniqueSpeakers = [...new Set(meetingData.transcript?.map(t => t.speaker) || [])];
// //     const speakerColorMap = {};
// //     uniqueSpeakers.forEach((speaker, index) => {
// //       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
// //     });

// //     // Calculate speaker percentages
// //     const speakerCounts = {};
// //     meetingData.transcript?.forEach(t => {
// //       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
// //     });

// //     const totalMessages = meetingData.transcript?.length || 0;
// //     const speakersString = Object.entries(speakerCounts)
// //       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
// //       .join(', ');


// //     return {
// //       keywords: 'No keywords available',
// //       speakers: speakersString || 'No speakers available',
// //       conversations: meetingData.transcript?.map((conv, index) => ({
// //         speaker: conv.speaker,
// //         text: conv.text,
// //         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
// //         // Since there's no time in schema, we can estimate based on position
// //         time: Math.floor((index / (meetingData.transcript.length - 1)) * duration)
// //       })) || []
// //     };
// //   };

// //   // New PDF generation function using @react-pdf/renderer
// //   const handleDownloadPDF = async () => {
// //     if (!meetingData) {
// //       alert("No meeting data available");
// //       return;
// //     }

// //     setIsGeneratingPDF(true);

// //     try {
// //       // Generate PDF blob
// //       const blob = await pdf(<MeetingSummaryPDF meetingData={meetingData} />).toBlob();

// //       // Save the PDF
// //       saveAs(blob, `${meetingData?.title || "meeting-summary"}.pdf`);

// //     } catch (error) {
// //       console.error("Error generating PDF:", error);
// //       alert("Failed to generate PDF. Please try again.");
// //     } finally {
// //       setIsGeneratingPDF(false);
// //     }
// //   };

// //   const handleSendEmailPDF = async () => {
// //     if (!meetingData?.emailRecipients || meetingData.emailRecipients.length === 0) {
// //       setEmailError("No email recipients found");
// //       return;
// //     }

// //     setIsSendingEmail(true);
// //     setEmailError(null);

// //     try {
// //       // Generate PDF blob
// //       const pdfBlob = await pdf(<MeetingSummaryPDF meetingData={meetingData} />).toBlob();

// //       // Create FormData to send PDF and email data
// //       const formData = new FormData();
// //       formData.append('pdf', pdfBlob, `${meetingData?.title || "meeting-summary"}.pdf`);
// //       formData.append('recipients', JSON.stringify(meetingData.emailRecipients));
// //       formData.append('meetingTitle', meetingData?.title || "Meeting Summary");
// //       formData.append('meetingId', meetingData?._id || '');

// //       // Send to your email API endpoint
// //       const response = await axios.post(
// //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
// //         formData,
// //         {
// //           headers: {
// //             "Content-Type": "multipart/form-data",
// //             Authorization: localStorage.getItem("token"),
// //           },
// //         }
// //       );

// //       if (response.data.success) {
// //         setEmailSent(true);
// //         setTimeout(() => setEmailSent(false), 5000);
// //       } else {
// //         throw new Error(response.data.message || "Failed to send emails");
// //       }

// //     } catch (error) {
// //       console.error("Error sending email:", error);
// //       setEmailError(error.message || "Failed to send emails. Please try again.");
// //       setTimeout(() => setEmailError(null), 5000);
// //     } finally {
// //       setIsSendingEmail(false);
// //     }
// //   };

// //   const formatTime = (seconds) => {
// //     // Handle invalid numbers
// //     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
// //       return '0:00';
// //     }

// //     const mins = Math.floor(seconds / 60);
// //     const secs = Math.floor(seconds % 60);
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   const handlePlayPause = () => {
// //     if (audioRef.current) {
// //       if (isPlaying) {
// //         audioRef.current.pause();
// //       } else {
// //         audioRef.current.play();
// //       }
// //       setIsPlaying(!isPlaying);
// //     }
// //   };

// //   const handleProgressClick = (e) => {
// //     if (audioRef.current) {
// //       const rect = e.currentTarget.getBoundingClientRect();
// //       const clickX = e.clientX - rect.left;
// //       const width = rect.width;
// //       const newTime = (clickX / width) * duration;
// //       audioRef.current.currentTime = newTime;
// //       setCurrentTime(newTime);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (window.confirm('Are you sure you want to delete this meeting?')) {
// //       try {
// //         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
// //           headers: {
// //             Authorization: localStorage.getItem("token")
// //           }
// //         });
// //         // Navigate back or show success message
// //         window.history.back();
// //       } catch (error) {
// //         console.error("Error deleting meeting:", error);
// //         alert("Failed to delete meeting. Please try again.");
// //       }
// //     }
// //   };

// //   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// //         <span className="ml-3 text-gray-600">Loading meeting data...</span>
// //       </div>
// //     );
// //   }

// //   if (error || !meetingData) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
// //           <p className="text-gray-600">{error || 'Meeting not found'}</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const summaryData = getSummaryData();
// //   const transcriptData = getTranscriptData();
// //   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-6">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header */}
// //         <div className="flex items-center justify-between mb-6">
// //           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
// //           <div className="flex items-center space-x-3">
// //             {/* Send Email Button - Only show if emailRecipients exist */}
// //             {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// //               <button
// //                 onClick={handleSendEmailPDF}
// //                 disabled={isSendingEmail}
// //                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
// //                   isSendingEmail 
// //                     ? "bg-gray-400 cursor-not-allowed" 
// //                     : "bg-green-600 hover:bg-green-700"
// //                 } text-white`}
// //               >
// //                 <Mail size={16} />
// //                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
// //               </button>
// //             )}

// //             <button 
// //               onClick={handleDownloadPDF}
// //               disabled={isGeneratingPDF}
// //               className={`p-2 transition-colors ${
// //                 isGeneratingPDF 
// //                   ? "text-gray-400 cursor-not-allowed" 
// //                   : "text-gray-600 hover:text-purple-600"
// //               }`}
// //               title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
// //             >
// //               {isGeneratingPDF ? (
// //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
// //               ) : (
// //                 <Download size={20} />
// //               )}
// //             </button>
// //             <button 
// //               onClick={handleDelete}
// //               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
// //             >
// //               <Trash2 size={16} />
// //               <span>Delete</span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* PDF Generation Loading Message */}
// //         {isGeneratingPDF && (
// //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// //             <div className="flex items-center gap-2">
// //               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
// //               <p className="text-blue-800 font-medium">
// //                 Generating PDF...
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {/* Email Recipients Display */}
// //         {meetingData?.emailRecipients && meetingData.emailRecipients.length > 0 && (
// //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// //             <h4 className="text-sm font-medium text-blue-800 mb-2">
// //               📧 Email Recipients ({meetingData.emailRecipients.length})
// //             </h4>
// //             <div className="text-sm text-blue-700">
// //               {meetingData.emailRecipients.join(", ")}
// //             </div>
// //           </div>
// //         )}

// //         {/* Success/Error Messages */}
// //         {emailSent && (
// //           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// //             <div className="flex items-center gap-2">
// //               <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
// //                 <span className="text-white text-xs">✓</span>
// //               </div>
// //               <p className="text-green-800 font-medium">
// //                 Meeting summary sent successfully to all recipients!
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {emailError && (
// //           <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// //             <div className="flex items-center gap-2">
// //               <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
// //                 <span className="text-white text-xs">!</span>
// //               </div>
// //               <p className="text-red-800 font-medium">
// //                 {emailError}
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {/* Audio Player - Only show for audio-notes type */}
// //         {shouldShowAudioPlayer && (
// //           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
// //             <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

// //             {/* Progress Bar */}
// //             <div className="mb-4">
// //               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
// //                 <span>{formatTime(currentTime)}</span>
// //                 <span>{formatTime(duration)}</span>
// //               </div>
// //               <div 
// //                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
// //                 onClick={handleProgressClick}
// //               >
// //                 <div 
// //                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
// //                   style={{ width: `${progressPercentage}%` }}
// //                 ></div>
// //               </div>
// //             </div>

// //             {/* Controls */}
// //             <div className="flex items-center justify-between">
// //               <div className="flex items-center space-x-4">
// //                 {/* Playback Controls */}
// //                 <button 
// //                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
// //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// //                 >
// //                   <SkipBack size={20} />
// //                 </button>
// //                 <button 
// //                   onClick={handlePlayPause}
// //                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
// //                 >
// //                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
// //                 </button>
// //                 <button 
// //                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
// //                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
// //                 >
// //                   <SkipForward size={20} />
// //                 </button>

// //                 {/* Speed Control */}
// //                 <div className="flex items-center space-x-1">
// //                   <button 
// //                     onClick={() => {
// //                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
// //                       setPlaybackSpeed(newSpeed);
// //                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
// //                     }}
// //                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
// //                   >
// //                     {playbackSpeed}x
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Action Icons */}
// //               <div className="flex items-center space-x-2">
// //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// //                   <Edit3 size={20} />
// //                 </button>
// //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// //                   <MessageCircle size={20} />
// //                 </button>
// //                 <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
// //                   <Share2 size={20} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Tab Navigation */}
// //         <div className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
// //           <div className="flex gap-1">
// //             <button
// //               onClick={() => setActiveTab('Summary')}
// //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// //                 activeTab === 'Summary'
// //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// //                   : 'text-gray-600 hover:text-purple-600'
// //               }`}
// //             >
// //               Summary
// //             </button>
// //             <button
// //               onClick={() => setActiveTab('Transcript')}
// //               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
// //                 activeTab === 'Transcript'
// //                   ? 'bg-purple-300 text-purple-800 shadow-sm'
// //                   : 'text-gray-600 hover:text-purple-600'
// //               }`}
// //             >
// //               Transcript
// //             </button>
// //           </div>
// //         </div>

// //         {/* Content Area */}
// //         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
// //           {activeTab === 'Summary' ? (
// //             <div className="p-6">
// //               {/* Meeting Title */}
// //               <div className="mb-6 border-b pb-4">
// //                 <h1 className="text-2xl font-bold text-gray-800">{meetingData.title}</h1>
// //                 <p className="text-sm text-gray-500 mt-1">
// //                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
// //                     year: 'numeric',
// //                     month: 'long',
// //                     day: 'numeric'
// //                   })}
// //                 </p>
// //               </div>

// //               {/* Topic */}
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
// //                   Topic: {summaryData.topic}
// //                 </h3>
// //                 {summaryData.summary && (
// //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
// //                     <p>{summaryData.summary}</p>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Participants */}
// //               {meetingData.participants && meetingData.participants.length > 0 && (
// //                 <div className="mb-6">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
// //                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
// //                     <p>{meetingData.participants.join(', ')}</p>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Agenda */}
// //               {meetingData.agenda && meetingData.agenda.length > 0 && (
// //                 <div className="mb-8">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
// //                   {meetingData.agenda.map((item, index) => (
// //                     <div key={index} className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed">
// //                       <p>{index + 1}. {item}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Minutes */}
// //               {meetingData.minutes && meetingData.minutes.length > 0 && (
// //                 <div className="mb-8">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
// //                   {meetingData.minutes.map((minute, index) => (
// //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</p>
// //                       <p className="text-gray-600">{minute.details}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Next Steps */}
// //               {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
// //                 <div className="mb-8">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
// //                   {meetingData.nextSteps.map((step, index) => (
// //                     <div key={index} className="bg-white rounded-lg p-4 mt-2 text-gray-700 text-sm leading-relaxed shadow-sm border">
// //                       <p className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</p>
// //                       <p className="text-gray-600">
// //                         <strong>Assignee:</strong> {step.assignee}<br />
// //                         <strong>Due:</strong> {step.due ? new Date(step.due).toLocaleDateString() : "Not specified"}
// //                       </p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Key Points - Only if no detailed minutes/next steps available */}
// //               {(!meetingData.minutes || meetingData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
// //                 <div className="mb-8">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
// //                   <ul className="space-y-3">
// //                     {summaryData.bulletPoints.map((point, index) => (
// //                       <li key={index} className="flex items-start space-x-3">
// //                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
// //                         <p className="text-gray-700 leading-relaxed">{point}</p>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <div className="p-6">
// //               {/* Keywords Section */}
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
// //                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
// //               </div>

// //               {/* Speakers Section */}
// //               <div className="mb-8">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
// //                 <p className="text-gray-600">{transcriptData.speakers}</p>
// //               </div>

// //               {/* Conversation */}
// //               <div className="space-y-4">
// //                 {transcriptData.conversations.length > 0 ? (
// //                   transcriptData.conversations.map((conv, index) => (
// //                     <div key={index} className="flex items-start space-x-4">
// //                       {/* Speaker Avatar */}
// //                       <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
// //                         {conv.speaker.charAt(0)}
// //                       </div>

// //                       {/* Message Content */}
// //                       <div className="flex-1 min-w-0">
// //                         <div className="flex items-center space-x-2 mb-1">
// //                           <span className="font-medium text-gray-900">{conv.speaker}</span>
// //                           {shouldShowAudioPlayer && conv.time > 0 && (
// //                             <span className="text-sm text-green-600 flex items-center">
// //                               <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
// //                               {formatTime(conv.time)}
// //                             </span>
// //                           )}
// //                         </div>
// //                         <p className="text-gray-700 leading-relaxed">{conv.text}</p>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <p className="text-gray-500 text-center py-8">No transcript available</p>
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Scroll to bottom button */}
// //         <div className="fixed bottom-6 right-6">
// //           <button 
// //             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// //             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
// //           >
// //             <ChevronDown size={20} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState, useRef, useEffect } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import { 
//   Download, 
//   Trash2, 
//   SkipBack, 
//   Play, 
//   Pause, 
//   SkipForward,
//   Edit3,
//   MessageCircle,
//   Share2,
//   ChevronDown,
//   Mail,
//   Languages,
//   ToggleLeft,
//   ToggleRight
// } from 'lucide-react';
// import axios from 'axios';
// import { pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import MeetingSummaryPDF from '../components/MeetingSummaryPDF'; // We'll create this component

// const SUPPORTED_LANGUAGES = [
//   { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
//   { code: 'es', name: 'Spanish', flag: '🇪🇸' },
//   { code: 'fr', name: 'French', flag: '🇫🇷' },
//   { code: 'de', name: 'German', flag: '🇩🇪' },
//   { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
//   { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
//   { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
//   { code: 'ko', name: 'Korean', flag: '🇰🇷' },
//   { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
//   { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
//   { code: 'ru', name: 'Russian', flag: '🇷🇺' },
//   { code: 'it', name: 'Italian', flag: '🇮🇹' }
// ];

// export default function AudioAgendaPage() {
//   const { id: encodedId } = useParams();
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState('Summary');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);
//   const [meetingData, setMeetingData] = useState(null);
//   const [translatedMeetingData, setTranslatedMeetingData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isSendingEmail, setIsSendingEmail] = useState(false);
//   const [emailSent, setEmailSent] = useState(false);
//   const [emailError, setEmailError] = useState(null);
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

//   // Translation states
//   const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
//   const [isTranslating, setIsTranslating] = useState(false);
//   const [translationError, setTranslationError] = useState(null);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [showTranslated, setShowTranslated] = useState(false);
//   const id = atob(encodedId);
//   console.log(meetingData);


//   const audioRef = useRef(null);

//   // Fetch meeting data
//   useEffect(() => {
//     const fetchMeetingData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
//           {
//             headers: {
//               Authorization: localStorage.getItem("token")
//             }
//           }
//         );
//         setMeetingData(response.data);
//         // Ensure duration is a valid number
//         const recordingLength = response.data.recordingLength || 0;
//         setDuration(isFinite(recordingLength) ? recordingLength : 0);
//       } catch (error) {
//         console.error("Error fetching meeting data:", error);
//         setError("Failed to load meeting data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchMeetingData();
//     }
//   }, [id]);

//   // Audio player effects
//   useEffect(() => {
//     if (audioRef.current && meetingData?.recordingAudioUrl) {
//       const audio = audioRef.current;

//       const updateTime = () => setCurrentTime(audio.currentTime || 0);
//       const updateDuration = () => {
//         const audioDuration = audio.duration;
//         const fallbackDuration = meetingData.recordingLength || 0;
//         // Use audio duration if valid, otherwise fall back to recordingLength
//         const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
//         setDuration(validDuration);
//       };

//       audio.addEventListener('timeupdate', updateTime);
//       audio.addEventListener('loadedmetadata', updateDuration);
//       audio.addEventListener('ended', () => setIsPlaying(false));

//       return () => {
//         audio.removeEventListener('timeupdate', updateTime);
//         audio.removeEventListener('loadedmetadata', updateDuration);
//         audio.removeEventListener('ended', () => setIsPlaying(false));
//       };
//     }
//   }, [meetingData]);

//   // Handle translation
//   const handleTranslate = async (languageCode, languageName) => {
//     setIsTranslating(true);
//     setTranslationError(null);
//     setShowLanguageDropdown(false);

//     try {
//       const response = await axios.post(
//         `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meetingtranslate/${id}/translate`,
//         {
//           targetLanguage: languageCode,
//           languageName: languageName
//         },
//         {
//           headers: {
//             Authorization: localStorage.getItem("token"),
//             "Content-Type": "application/json"
//           }
//         }
//       );

//       if (response.data.success) {
//         setTranslatedMeetingData(response.data.translatedMeeting);
//         setSelectedLanguage({ code: languageCode, name: languageName });
//         setShowTranslated(true);
//       } else {
//         throw new Error(response.data.message || "Translation failed");
//       }

//     } catch (error) {
//       console.error("Translation error:", error);
//       setTranslationError(error.response?.data?.message || error.message || "Failed to translate meeting");
//       setTimeout(() => setTranslationError(null), 5000);
//     } finally {
//       setIsTranslating(false);
//     }
//   };

//   // Toggle between original and translated
//   const handleToggleTranslation = () => {
//     setShowTranslated(!showTranslated);
//   };

//   // Get current meeting data (original or translated)
//   const getCurrentMeetingData = () => {
//     return showTranslated && translatedMeetingData ? translatedMeetingData : meetingData;
//   };

//   // Get page title based on meeting type
//   const getPageTitle = () => {
//     const currentData = getCurrentMeetingData();
//     if (!currentData) return 'Meeting Details';

//     const baseTitle = (() => {
//       switch (currentData.type || meetingData?.type) {
//         case 'audio-notes':
//           return 'Audio Notes';
//         case 'live-transcription':
//           return 'Live Transcription';
//         case 'recording':
//           return 'Meeting Recording';
//         default:
//           return 'Meeting Details';
//       }
//     })();

//     if (showTranslated && selectedLanguage) {
//       return `${baseTitle} (${selectedLanguage.name})`;
//     }

//     return baseTitle;
//   };

//   // Prepare summary data
//   const getSummaryData = () => {
//     const currentData = getCurrentMeetingData();
//     if (!currentData) return null;

//     // Create bullet points from minutes
//     const bulletPoints = currentData.minutes?.map(minute => 
//       `${minute.topic}: ${minute.details}`
//     ) || [];

//     // Add next steps as bullet points
//     const nextStepsBullets = currentData.nextSteps?.map(step => 
//       `${step.task} (Assignee: ${step.assignee}${step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})`
//     ) || [];

//     // Create outline from minutes
//     const outline = {};
//     currentData.minutes?.forEach(minute => {
//       outline[minute.topic] = [minute.details];
//     });

//     // Add next steps section if available
//     if (currentData.nextSteps?.length > 0) {
//       outline['Next Steps'] = currentData.nextSteps.map(step => 
//         `${step.task} - Assigned to: ${step.assignee}${step.due ? ` (Due: ${new Date(step.due).toLocaleDateString()})` : ''}`
//       );
//     }

//     return {
//       topic: currentData.title,
//       summary: currentData.summary || 'No summary available',
//       bulletPoints: [...bulletPoints, ...nextStepsBullets],
//       outline
//     };
//   };

//   // Prepare transcript data
//   const getTranscriptData = () => {
//     const currentData = getCurrentMeetingData();
//     if (!currentData) return null;

//     // Generate speaker colors
//     const speakerColors = [
//       'bg-purple-500',
//       'bg-pink-500', 
//       'bg-blue-500',
//       'bg-green-500',
//       'bg-orange-500',
//       'bg-red-500'
//     ];

//     const uniqueSpeakers = [...new Set(currentData.transcript?.map(t => t.speaker) || [])];
//     const speakerColorMap = {};
//     uniqueSpeakers.forEach((speaker, index) => {
//       speakerColorMap[speaker] = speakerColors[index % speakerColors.length];
//     });

//     // Calculate speaker percentages
//     const speakerCounts = {};
//     currentData.transcript?.forEach(t => {
//       speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
//     });

//     const totalMessages = currentData.transcript?.length || 0;
//     const speakersString = Object.entries(speakerCounts)
//       .map(([speaker, count]) => `${speaker} (${Math.round((count / totalMessages) * 100)}%)`)
//       .join(', ');

//     return {
//       keywords: 'No keywords available',
//       speakers: speakersString || 'No speakers available',
//       conversations: currentData.transcript?.map((conv, index) => ({
//         speaker: conv.speaker,
//         text: conv.text,
//         color: speakerColorMap[conv.speaker] || 'bg-gray-500',
//         // Since there's no time in schema, we can estimate based on position
//         time: Math.floor((index / (currentData.transcript.length - 1)) * duration)
//       })) || []
//     };
//   };

//   // New PDF generation function using @react-pdf/renderer
//   const handleDownloadPDF = async () => {
//     const currentData = getCurrentMeetingData();
//     if (!currentData) {
//       alert("No meeting data available");
//       return;
//     }

//     setIsGeneratingPDF(true);

//     try {
//       // Generate PDF blob
//       const blob = await pdf(<MeetingSummaryPDF meetingData={currentData} />).toBlob();

//       // Save the PDF
//       const fileName = showTranslated && selectedLanguage 
//         ? `${currentData?.title || "meeting-summary"}-${selectedLanguage.name}.pdf`
//         : `${currentData?.title || "meeting-summary"}.pdf`;
//       saveAs(blob, fileName);

//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("Failed to generate PDF. Please try again.");
//     } finally {
//       setIsGeneratingPDF(false);
//     }
//   };

//   const handleSendEmailPDF = async () => {
//     const currentData = getCurrentMeetingData();
//     if (!currentData?.emailRecipients || currentData.emailRecipients.length === 0) {
//       setEmailError("No email recipients found");
//       return;
//     }

//     setIsSendingEmail(true);
//     setEmailError(null);

//     try {
//       // Generate PDF blob
//       const pdfBlob = await pdf(<MeetingSummaryPDF meetingData={currentData} />).toBlob();

//       // Create FormData to send PDF and email data
//       const formData = new FormData();
//       const fileName = showTranslated && selectedLanguage 
//         ? `${currentData?.title || "meeting-summary"}-${selectedLanguage.name}.pdf`
//         : `${currentData?.title || "meeting-summary"}.pdf`;
//       formData.append('pdf', pdfBlob, fileName);
//       formData.append('recipients', JSON.stringify(currentData.emailRecipients));
//       formData.append('meetingTitle', currentData?.title || "Meeting Summary");
//       formData.append('meetingId', currentData?._id || meetingData?._id || '');

//       // Send to your email API endpoint
//       const response = await axios.post(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: localStorage.getItem("token"),
//           },
//         }
//       );

//       if (response.data.success) {
//         setEmailSent(true);
//         setTimeout(() => setEmailSent(false), 5000);
//       } else {
//         throw new Error(response.data.message || "Failed to send emails");
//       }

//     } catch (error) {
//       console.error("Error sending email:", error);
//       setEmailError(error.message || "Failed to send emails. Please try again.");
//       setTimeout(() => setEmailError(null), 5000);
//     } finally {
//       setIsSendingEmail(false);
//     }
//   };

//   const formatTime = (seconds) => {
//     // Handle invalid numbers
//     if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
//       return '0:00';
//     }

//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   const handlePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleProgressClick = (e) => {
//     if (audioRef.current) {
//       const rect = e.currentTarget.getBoundingClientRect();
//       const clickX = e.clientX - rect.left;
//       const width = rect.width;
//       const newTime = (clickX / width) * duration;
//       audioRef.current.currentTime = newTime;
//       setCurrentTime(newTime);
//     }
//   };

//   const handleDelete = async () => {
//     if (window.confirm('Are you sure you want to delete this meeting?')) {
//       try {
//         await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
//           headers: {
//             Authorization: localStorage.getItem("token")
//           }
//         });
//         // Navigate back or show success message
//         window.history.back();
//       } catch (error) {
//         console.error("Error deleting meeting:", error);
//         alert("Failed to delete meeting. Please try again.");
//       }
//     }
//   };

//   const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//         <span className="ml-3 text-gray-600">Loading meeting data...</span>
//       </div>
//     );
//   }

//   if (error || !meetingData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
//           <p className="text-gray-600">{error || 'Meeting not found'}</p>
//         </div>
//       </div>
//     );
//   }

//   const summaryData = getSummaryData();
//   const transcriptData = getTranscriptData();
//   const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;
//   const currentData = getCurrentMeetingData();

//   return (
//     <main className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between mb-6">
//           <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
//           <nav className="flex items-center space-x-3" aria-label="Meeting actions">
//             {/* Translation Toggle - Show only when translation is available */}
//             {translatedMeetingData && selectedLanguage && (
//               <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg" role="status" aria-label="Translation status">
//                 <span className="text-sm text-blue-700">
//                   {showTranslated ? selectedLanguage.name : 'Original'}
//                 </span>
//                 <button
//                   onClick={handleToggleTranslation}
//                   className="text-blue-600 hover:text-blue-800 transition-colors"
//                   type="button"
//                   aria-label={`Switch to ${showTranslated ? 'original' : 'translated'} version`}
//                 >
//                   {showTranslated ? <ToggleRight size={20} aria-hidden="true" /> : <ToggleLeft size={20} aria-hidden="true" />}
//                 </button>
//               </div>
//             )}

//             {/* Translation Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
//                 disabled={isTranslating}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
//                   isTranslating 
//                     ? "bg-gray-400 cursor-not-allowed" 
//                     : "bg-blue-600 hover:bg-blue-700"
//                 } text-white`}
//                 type="button"
//                 aria-label="Translate meeting content"
//                 aria-expanded={showLanguageDropdown}
//                 aria-haspopup="true"
//               >
//                 <Languages size={16} aria-hidden="true" />
//                 <span>{isTranslating ? "Translating..." : "Translate"}</span>
//                 {isTranslating && (
//                   <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" aria-hidden="true"></div>
//                 )}
//               </button>

//               {/* Language Dropdown */}
//               {showLanguageDropdown && (
//                 <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-60 overflow-y-auto" role="menu" aria-label="Language selection">
//                   <div className="p-2">
//                     <div className="text-xs font-medium text-gray-500 px-2 py-1 mb-1">
//                       Select Language
//                     </div>
//                     {SUPPORTED_LANGUAGES.map((language) => (
//                       <button
//                         key={language.code}
//                         onClick={() => handleTranslate(language.code, language.name)}
//                         className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors flex items-center space-x-2"
//                         type="button"
//                         role="menuitem"
//                         aria-label={`Translate to ${language.name}`}
//                       >
//                         <span className="text-lg" aria-hidden="true">{language.flag}</span>
//                         <span>{language.name}</span>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Send Email Button - Only show if emailRecipients exist */}
//             {currentData?.emailRecipients && currentData.emailRecipients.length > 0 && (
//               <button
//                 onClick={handleSendEmailPDF}
//                 disabled={isSendingEmail}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
//                   isSendingEmail 
//                     ? "bg-gray-400 cursor-not-allowed" 
//                     : "bg-green-600 hover:bg-green-700"
//                 } text-white`}
//                 type="button"
//                 aria-label={`Send PDF to ${currentData.emailRecipients.length} recipient${currentData.emailRecipients.length > 1 ? 's' : ''}`}
//               >
//                 <Mail size={16} aria-hidden="true" />
//                 <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
//               </button>
//             )}

//             <button 
//               onClick={handleDownloadPDF}
//               disabled={isGeneratingPDF}
//               className={`p-2 transition-colors ${
//                 isGeneratingPDF 
//                   ? "text-gray-400 cursor-not-allowed" 
//                   : "text-gray-600 hover:text-purple-600"
//               }`}
//               title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
//               type="button"
//               aria-label="Download meeting summary as PDF"
//             >
//               {isGeneratingPDF ? (
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600" aria-hidden="true"></div>
//               ) : (
//                 <Download size={20} aria-hidden="true" />
//               )}
//             </button>
//             <button 
//               onClick={handleDelete}
//               className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
//               type="button"
//               aria-label="Delete this meeting"
//             >
//               <Trash2 size={16} aria-hidden="true" />
//               <span>Delete</span>
//             </button>
//           </nav>
//         </header>

//         {/* Status Messages */}
//         <section aria-live="polite" aria-label="Status notifications">
//           {/* Translation Status Messages */}
//           {isTranslating && (
//             <aside className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6" role="status">
//               <div className="flex items-center gap-2">
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600" aria-hidden="true"></div>
//                 <p className="text-blue-800 font-medium">
//                   Translating meeting content...
//                 </p>
//               </div>
//             </aside>
//           )}

//           {translationError && (
//             <aside className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6" role="alert">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center" aria-hidden="true">
//                   <span className="text-white text-xs">!</span>
//                 </div>
//                 <p className="text-red-800 font-medium">
//                   {translationError}
//                 </p>
//               </div>
//             </aside>
//           )}

//           {/* PDF Generation Loading Message */}
//           {isGeneratingPDF && (
//             <aside className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6" role="status">
//               <div className="flex items-center gap-2">
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600" aria-hidden="true"></div>
//                 <p className="text-blue-800 font-medium">
//                   Generating PDF...
//                 </p>
//               </div>
//             </aside>
//           )}

//           {/* Email Recipients Display */}
//           {currentData?.emailRecipients && currentData.emailRecipients.length > 0 && (
//             <aside className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6" role="complementary" aria-labelledby="email-recipients-heading">
//               <h2 id="email-recipients-heading" className="text-sm font-medium text-blue-800 mb-2">
//                 📧 Email Recipients ({currentData.emailRecipients.length})
//               </h2>
//               <div className="text-sm text-blue-700">
//                 {currentData.emailRecipients.join(", ")}
//               </div>
//             </aside>
//           )}

//           {/* Success/Error Messages */}
//           {emailSent && (
//             <aside className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6" role="alert">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center" aria-hidden="true">
//                   <span className="text-white text-xs">✓</span>
//                 </div>
//                 <p className="text-green-800 font-medium">
//                   Meeting summary sent successfully to all recipients!
//                 </p>
//               </div>
//             </aside>
//           )}

//           {emailError && (
//             <aside className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6" role="alert">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center" aria-hidden="true">
//                   <span className="text-white text-xs">!</span>
//                 </div>
//                 <p className="text-red-800 font-medium">
//                   {emailError}
//                 </p>
//               </div>
//             </aside>
//           )}
//         </section>

//         {/* Audio Player - Only show for audio-notes type */}
//         {shouldShowAudioPlayer && (
//           <figure className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm" role="region" aria-labelledby="audio-player-heading">
//             <h2 id="audio-player-heading" className="sr-only">Audio Player</h2>
//             <audio ref={audioRef} src={meetingData.recordingAudioUrl} aria-label="Meeting audio recording" />

//             {/* Progress Bar */}
//             <div className="mb-4">
//               <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
//                 <span aria-label="Current time">{formatTime(currentTime)}</span>
//                 <span aria-label="Total duration">{formatTime(duration)}</span>
//               </div>
//               <div 
//                 className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
//                 onClick={handleProgressClick}
//                 role="progressbar"
//                 aria-valuenow={progressPercentage}
//                 aria-valuemin={0}
//                 aria-valuemax={100}
//                 aria-label="Audio progress"
//                 tabIndex={0}
//               >
//                 <div 
//                   className="h-full bg-purple-500 rounded-full transition-all duration-300"
//                   style={{ width: `${progressPercentage}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Controls */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4" role="group" aria-label="Audio controls">
//                 {/* Playback Controls */}
//                 <button 
//                   onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
//                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
//                   type="button"
//                   aria-label="Skip back 10 seconds"
//                 >
//                   <SkipBack size={20} aria-hidden="true" />
//                 </button>
//                 <button 
//                   onClick={handlePlayPause}
//                   className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
//                   type="button"
//                   aria-label={isPlaying ? "Pause audio" : "Play audio"}
//                 >
//                   {isPlaying ? <Pause size={20} aria-hidden="true" /> : <Play size={20} aria-hidden="true" />}
//                 </button>
//                 <button 
//                   onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
//                   className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
//                   type="button"
//                   aria-label="Skip forward 10 seconds"
//                 >
//                   <SkipForward size={20} aria-hidden="true" />
//                 </button>

//                 {/* Speed Control */}
//                 <div className="flex items-center space-x-1">
//                   <button 
//                     onClick={() => {
//                       const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
//                       setPlaybackSpeed(newSpeed);
//                       if (audioRef.current) audioRef.current.playbackRate = newSpeed;
//                     }}
//                     className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
//                     type="button"
//                     aria-label={`Change playback speed, currently ${playbackSpeed}x`}
//                   >
//                     {playbackSpeed}x
//                   </button>
//                 </div>
//               </div>


//             </div>
//           </figure>
//         )}

//         {/* Tab Navigation */}
//         <nav className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1" role="tablist" aria-label="Content sections">
//           <div className="flex gap-1">
//             <button
//               onClick={() => setActiveTab('Summary')}
//               className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${
//                 activeTab === 'Summary'
//                   ? 'bg-purple-300 text-purple-800 shadow-sm'
//                   : 'text-gray-600 hover:text-purple-600'
//               }`}
//               type="button"
//               role="tab"
//               aria-selected={activeTab === 'Summary'}
//               aria-controls="content-panel"
//             >
//               Summary
//             </button>
//           </div>
//         </nav>

//         {/* Content Area */}
//         <article className="bg-white rounded-lg border border-gray-200 shadow-sm" id="content-panel" role="tabpanel" aria-labelledby="summary-tab">
//           {activeTab === 'Summary' ? (
//             <div className="p-6">
//               {/* Meeting Title */}
//               <header className="mb-6 border-b pb-4">
//                 <h2 className="text-2xl font-bold text-gray-800">{currentData.title}</h2>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                   })}
//                 </p>
//               </header>

//               {/* Topic */}
//               <section className="mb-6" aria-labelledby="topic-heading">
//                 <h3 id="topic-heading" className="text-lg font-semibold text-gray-900 mb-2">
//                   Topic: {summaryData.topic}
//                 </h3>
//                 {summaryData.summary && (
//                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed">
//                     <p>{summaryData.summary}</p>
//                   </div>
//                 )}
//               </section>

//               {/* Participants */}
//               {currentData.participants && currentData.participants.length > 0 && (
//                 <section className="mb-6" aria-labelledby="participants-heading">
//                   <h3 id="participants-heading" className="text-lg font-semibold text-gray-900 mb-2">Participants</h3>
//                   <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm">
//                     <p>{currentData.participants.join(', ')}</p>
//                   </div>
//                 </section>
//               )}

//               {/* Agenda */}
//               {currentData.agenda && currentData.agenda.length > 0 && (
//                 <section className="mb-8" aria-labelledby="agenda-heading">
//                   <h3 id="agenda-heading" className="text-lg font-semibold text-gray-900 mb-3">Agenda</h3>
//                   <ol className="space-y-2" role="list">
//                     {currentData.agenda.map((item, index) => (
//                       <li key={index} className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed" role="listitem">
//                         <p>{index + 1}. {item}</p>
//                       </li>
//                     ))}
//                   </ol>
//                 </section>
//               )}

//               {/* Minutes */}
//               {currentData.minutes && currentData.minutes.length > 0 && (
//                 <section className="mb-8" aria-labelledby="minutes-heading">
//                   <h3 id="minutes-heading" className="text-lg font-semibold text-gray-900 mb-3">Minutes</h3>
//                   <div className="space-y-2" role="list">
//                     {currentData.minutes.map((minute, index) => (
//                       <article key={index} className="bg-white rounded-lg p-4 text-gray-700 text-sm leading-relaxed shadow-sm border" role="listitem">
//                         <h4 className="font-medium text-gray-800 mb-1">{index + 1}. {minute.topic}</h4>
//                         <p className="text-gray-600">{minute.details}</p>
//                       </article>
//                     ))}
//                   </div>
//                 </section>
//               )}

//               {/* Next Steps */}
//               {currentData.nextSteps && currentData.nextSteps.length > 0 && (
//                 <section className="mb-8" aria-labelledby="next-steps-heading">
//                   <h3 id="next-steps-heading" className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
//                   <div className="space-y-2" role="list">
//                     {currentData.nextSteps.map((step, index) => (
//                       <article key={index} className="bg-white rounded-lg p-4 text-gray-700 text-sm leading-relaxed shadow-sm border" role="listitem">
//                         <h4 className="font-medium text-gray-800 mb-1">{index + 1}. {step.task}</h4>
//                         <p className="text-gray-600">
//                           <strong>Assignee:</strong> {step.assignee}<br />
//                           <strong>Due:</strong> {step.due ? step.due : "Not specified"}
//                         </p>
//                       </article>
//                     ))}
//                   </div>
//                 </section>
//               )}

//               {/* Key Points - Only if no detailed minutes/next steps available */}
//               {(!currentData.minutes || currentData.minutes.length === 0) && summaryData.bulletPoints.length > 0 && (
//                 <section className="mb-8" aria-labelledby="key-points-heading">
//                   <h3 id="key-points-heading" className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
//                   <ul className="space-y-3" role="list">
//                     {summaryData.bulletPoints.map((point, index) => (
//                       <li key={index} className="flex items-start space-x-3" role="listitem">
//                         <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
//                         <p className="text-gray-700 leading-relaxed">{point}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </section>
//               )}
//             </div>
//           ) : (
//             <div className="p-6">
//               {/* Keywords Section */}
//               <section className="mb-6" aria-labelledby="keywords-heading">
//                 <h3 id="keywords-heading" className="text-lg font-semibold text-gray-900 mb-2">Keywords</h3>
//                 <p className="text-gray-600 leading-relaxed">{transcriptData.keywords}</p>
//               </section>

//               {/* Speakers Section */}
//               <section className="mb-8" aria-labelledby="speakers-heading">
//                 <h3 id="speakers-heading" className="text-lg font-semibold text-gray-900 mb-2">Speakers</h3>
//                 <p className="text-gray-600">{transcriptData.speakers}</p>
//               </section>

//               {/* Conversation */}
//               <section aria-labelledby="conversation-heading">
//                 <h3 id="conversation-heading" className="sr-only">Conversation Transcript</h3>
//                 <div className="space-y-4" role="log" aria-label="Meeting conversation">
//                   {transcriptData.conversations.length > 0 ? (
//                     transcriptData.conversations.map((conv, index) => (
//                       <article key={index} className="flex items-start space-x-4">
//                         {/* Speaker Avatar */}
//                         <figure className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`} aria-hidden="true">
//                           {conv.speaker.charAt(0)}
//                         </figure>

//                         {/* Message Content */}
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center space-x-2 mb-1">
//                             <h4 className="font-medium text-gray-900">{conv.speaker}</h4>
//                             {shouldShowAudioPlayer && conv.time > 0 && (
//                               <span className="text-sm text-green-600 flex items-center">
//                                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1" aria-hidden="true"></span>
//                                 {formatTime(conv.time)}
//                               </span>
//                             )}
//                           </div>
//                           <p className="text-gray-700 leading-relaxed">{conv.text}</p>
//                         </div>
//                       </article>
//                     ))
//                   ) : (
//                     <p className="text-gray-500 text-center py-8">No transcript available</p>
//                   )}
//                 </div>
//               </section>
//             </div>
//           )}
//         </article>

//         {/* Scroll to bottom button */}
//         <aside className="fixed bottom-6 right-6">
//           <button 
//             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
//             className="w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors flex items-center justify-center"
//             type="button"
//             aria-label="Scroll to bottom of page"
//           >
//             <ChevronDown size={20} aria-hidden="true" />
//           </button>
//         </aside>

//         {/* Click outside to close dropdown */}
//         {showLanguageDropdown && (
//           <div 
//             className="fixed inset-0 z-40" 
//             onClick={() => setShowLanguageDropdown(false)}
//             aria-hidden="true"
//           />
//         )}
//       </div>
//     </main>
//   );
// }


import { useState, useRef, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  Download,
  Trash2,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Edit3,
  MessageCircle,
  Share2,
  ChevronDown,
  Mail,
  Languages,
  ToggleLeft,
  ToggleRight,
  Target,
  CheckSquare,
  Users,
  Calendar,
  AlertTriangle,
  FileText,
  Lightbulb,
  Flag,
  BarChart3,
  Clock,
  TrendingDown,
  Minus,
  TrendingUp,
  CheckCircle,
  XCircle
} from 'lucide-react';
import axios from 'axios';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import MeetingSummaryPDF from '../components/MeetingSummaryPDF';

const SUPPORTED_LANGUAGES = [
  { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' }
];

// Discussion Level Badge Component
const DiscussionLevelBadge = ({ level }) => {
  const configs = {
    'comprehensive': {
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'bg-green-100 text-green-800 border-green-200',
      text: 'Comprehensive'
    },
    'partial': {
      icon: <Minus className="w-4 h-4" />,
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      text: 'Partial'
    },
    'minimal': {
      icon: <TrendingDown className="w-4 h-4" />,
      color: 'bg-orange-100 text-orange-800 border-orange-200',
      text: 'Minimal'
    },
    'not-discussed': {
      icon: <XCircle className="w-4 h-4" />,
      color: 'bg-red-100 text-red-800 border-red-200',
      text: 'Not Discussed'
    }
  };

  const config = configs[level] || configs['not-discussed'];

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded border ${config.color}`}>
      {config.icon}
      {config.text}
    </span>
  );
};

// Priority badge component
const PriorityBadge = ({ priority }) => {
  const colors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${colors[priority] || colors.medium}`}>
      {priority}
    </span>
  );
};

// Category badge component
const CategoryBadge = ({ category }) => {
  const colors = {
    task: 'bg-blue-100 text-blue-800',
    activity: 'bg-purple-100 text-purple-800',
    project: 'bg-orange-100 text-orange-800',
    'follow-up': 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded ${colors[category] || colors.task}`}>
      {category}
    </span>
  );
};

// Impact badge component
const ImpactBadge = ({ impact }) => {
  const colors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded ${colors[impact] || colors.medium}`}>
      {impact} impact
    </span>
  );
};

export default function AudioAgendaPage() {
  const { id: encodedId } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Overview');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [meetingData, setMeetingData] = useState(null);
  const [translatedMeetingData, setTranslatedMeetingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Translation states
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showTranslated, setShowTranslated] = useState(false);
  const id = atob(encodedId);

  const audioRef = useRef(null);

  // Get available tabs based on meeting data
  const getAvailableTabs = () => {
    const currentData = getCurrentMeetingData();
    if (!currentData) return ['Overview'];

    const tabs = ['Overview'];

    // Always show Minutes if available
    if (currentData.minutes && currentData.minutes.length > 0) {
      tabs.push('Minutes');
    }

    if (currentData.hasDiscussionAnalysis && currentData.discussionTopicsAnalysis) {
      tabs.push('Discussion Analysis');
    }

    // Show Action Items if nextSteps exist
    if (currentData.nextSteps && currentData.nextSteps.length > 0) {
      tabs.push('Action Items');
    }

    // Show Projects if they exist
    if (currentData.projects && currentData.projects.length > 0) {
      tabs.push('Projects');
    }

    // Show Strategic if we have initiatives, implementation plan, or decisions
    if ((currentData.keyInitiatives && currentData.keyInitiatives.length > 0) ||
      (currentData.implementationPlan && currentData.implementationPlan.objectives && currentData.implementationPlan.objectives.length > 0) ||
      (currentData.decisionsMade && currentData.decisionsMade.length > 0)) {
      tabs.push('Strategic');
    }

    // Show Risks if challenges/risks exist
    if (currentData.challengesAndRisks && currentData.challengesAndRisks.length > 0) {
      tabs.push('Risks & Challenges');
    }

    // Always show Transcript
    tabs.push('Transcript');

    return tabs;
  };

  // Fetch meeting data
  useEffect(() => {
    const fetchMeetingData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }
        );
        setMeetingData(response.data);
        const recordingLength = response.data.recordingLength || 0;
        setDuration(isFinite(recordingLength) ? recordingLength : 0);
      } catch (error) {
        console.error("Error fetching meeting data:", error);
        setError("Failed to load meeting data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMeetingData();
    }
  }, [id]);

  // Audio player effects
  useEffect(() => {
    if (audioRef.current && meetingData?.recordingAudioUrl) {
      const audio = audioRef.current;

      const updateTime = () => setCurrentTime(audio.currentTime || 0);
      const updateDuration = () => {
        const audioDuration = audio.duration;
        const fallbackDuration = meetingData.recordingLength || 0;
        const validDuration = (isFinite(audioDuration) && audioDuration > 0) ? audioDuration : fallbackDuration;
        setDuration(validDuration);
      };

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [meetingData]);

  // Handle translation
  const handleTranslate = async (languageCode, languageName) => {
    setIsTranslating(true);
    setTranslationError(null);
    setShowLanguageDropdown(false);

    try {
      const response = await axios.post(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meetingtranslate/${id}/translate`,
        {
          targetLanguage: languageCode,
          languageName: languageName
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data.success) {
        setTranslatedMeetingData(response.data.translatedMeeting);
        setSelectedLanguage({ code: languageCode, name: languageName });
        setShowTranslated(true);
      } else {
        throw new Error(response.data.message || "Translation failed");
      }

    } catch (error) {
      console.error("Translation error:", error);
      setTranslationError(error.response?.data?.message || error.message || "Failed to translate meeting");
      setTimeout(() => setTranslationError(null), 5000);
    } finally {
      setIsTranslating(false);
    }
  };

  // Toggle between original and translated
  const handleToggleTranslation = () => {
    setShowTranslated(!showTranslated);
  };

  // Get current meeting data (original or translated)
  const getCurrentMeetingData = () => {
    return showTranslated && translatedMeetingData ? translatedMeetingData : meetingData;
  };

  // Get page title based on meeting type
  const getPageTitle = () => {
    const currentData = getCurrentMeetingData();
    if (!currentData) return 'Meeting Details';

    const baseTitle = (() => {
      switch (currentData.type || meetingData?.type) {
        case 'audio-notes':
          return 'Audio Notes';
        case 'live-transcription':
          return 'Live Transcription';
        case 'recording':
          return 'Meeting Recording';
        default:
          return 'Meeting Details';
      }
    })();

    if (showTranslated && selectedLanguage) {
      return `${baseTitle} (${selectedLanguage.name})`;
    }

    return baseTitle;
  };

  // Tab icons
  const getTabIcon = (tabName) => {
    switch (tabName) {
      case 'Overview': return <FileText size={16} />;
      case 'Minutes': return <Edit3 size={16} />;
      case 'Action Items': return <CheckSquare size={16} />;
      case 'Projects': return <Target size={16} />;
      case 'Strategic': return <Lightbulb size={16} />;
      case 'Risks & Challenges': return <AlertTriangle size={16} />;
      case 'Transcript': return <MessageCircle size={16} />;
      default: return <FileText size={16} />;
    }
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // PDF and email handlers remain the same...
  const handleDownloadPDF = async () => {
    const currentData = getCurrentMeetingData();
    if (!currentData) {
      alert("No meeting data available");
      return;
    }

    setIsGeneratingPDF(true);

    try {
      const blob = await pdf(<MeetingSummaryPDF meetingData={currentData} />).toBlob();
      const fileName = showTranslated && selectedLanguage
        ? `${currentData?.title || "meeting-summary"}-${selectedLanguage.name}.pdf`
        : `${currentData?.title || "meeting-summary"}.pdf`;
      saveAs(blob, fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleSendEmailPDF = async () => {
    const currentData = getCurrentMeetingData();
    if (!currentData?.emailRecipients || currentData.emailRecipients.length === 0) {
      setEmailError("No email recipients found");
      return;
    }

    setIsSendingEmail(true);
    setEmailError(null);

    try {
      const pdfBlob = await pdf(<MeetingSummaryPDF meetingData={currentData} />).toBlob();
      const formData = new FormData();
      const fileName = showTranslated && selectedLanguage
        ? `${currentData?.title || "meeting-summary"}-${selectedLanguage.name}.pdf`
        : `${currentData?.title || "meeting-summary"}.pdf`;
      formData.append('pdf', pdfBlob, fileName);
      formData.append('recipients', JSON.stringify(currentData.emailRecipients));
      formData.append('meetingTitle', currentData?.title || "Meeting Summary");
      formData.append('meetingId', currentData?._id || meetingData?._id || '');

      const response = await axios.post(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/send-meeting-summary",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response.data.success) {
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 5000);
      } else {
        throw new Error(response.data.message || "Failed to send emails");
      }

    } catch (error) {
      console.error("Error sending email:", error);
      setEmailError(error.message || "Failed to send emails. Please try again.");
      setTimeout(() => setEmailError(null), 5000);
    } finally {
      setIsSendingEmail(false);
    }
  };

  const formatTime = (seconds) => {
    if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
      return '0:00';
    }
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this meeting?')) {
      try {
        await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        window.history.back();
      } catch (error) {
        console.error("Error deleting meeting:", error);
        alert("Failed to delete meeting. Please try again.");
      }
    }
  };

  const progressPercentage = (duration > 0 && isFinite(duration) && isFinite(currentTime)) ? (currentTime / duration) * 100 : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        <span className="ml-3 text-gray-600">Loading meeting data...</span>
      </div>
    );
  }

  if (error || !meetingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600">{error || 'Meeting not found'}</p>
        </div>
      </div>
    );
  }

  const shouldShowAudioPlayer = meetingData.type === 'audio-notes' && meetingData.recordingAudioUrl;
  const currentData = getCurrentMeetingData();
  const availableTabs = getAvailableTabs();

  // Ensure activeTab is valid
  if (!availableTabs.includes(activeTab)) {
    setActiveTab(availableTabs[0]);
  }

  // Render tab content
  const renderTabContent = () => {
    const currentData = getCurrentMeetingData();
    if (!currentData) return null;

    switch (activeTab) {
      case 'Overview':
        return (
          <div className="p-6">
            {/* Meeting Header */}
            <header className="mb-6 border-b pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{currentData.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(meetingData.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                    {currentData.meetingType || 'general'}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {formatTime(meetingData.recordingLength)}
                  </span>
                </div>
              </div>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">Participants</span>
                </div>
                <p className="text-lg font-semibold text-purple-900 mt-1">
                  {currentData.participants?.length || 0}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Action Items</span>
                </div>
                <p className="text-lg font-semibold text-blue-900 mt-1">
                  {currentData.nextSteps?.length || 0}
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Projects</span>
                </div>
                <p className="text-lg font-semibold text-green-900 mt-1">
                  {currentData.projects?.length || 0}
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-800">Risks</span>
                </div>
                <p className="text-lg font-semibold text-orange-900 mt-1">
                  {currentData.challengesAndRisks?.length || 0}
                </p>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
              <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
                <p>{currentData.summary || 'No summary available'}</p>
              </div>
            </section>

            {/* Participants */}
            {currentData.participants && currentData.participants.length > 0 && (
              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Participants</h3>
                <div className="flex flex-wrap gap-2">
                  {currentData.participants.map((participant, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {participant}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Agenda */}
            {currentData.agenda && currentData.agenda.length > 0 && (
              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Agenda Topics</h3>
                <div className="space-y-2">
                  {currentData.agenda.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        );

      case 'Discussion Analysis':
        return (
          <div className="p-6">
            <header className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Discussion Analysis</h3>
              <p className="text-sm text-gray-600 mt-1">How well did the meeting follow the planned discussion topics?</p>
            </header>

            {currentData.hasDiscussionAnalysis && currentData.discussionTopicsAnalysis ? (
              <div className="space-y-6">
                {/* Overall Score Card */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900">Overall Discussion Score</h4>
                      <p className="text-sm text-blue-700 mt-1">Percentage of planned topics that were discussed</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-900">
                        {currentData.discussionMatchScore || 0}%
                      </div>
                      <div className="flex items-center mt-1">
                        {(currentData.discussionMatchScore || 0) >= 80 ? (
                          <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        ) : (currentData.discussionMatchScore || 0) >= 50 ? (
                          <Minus className="w-4 h-4 text-yellow-600 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                        )}
                        <span className={`text-sm font-medium ${(currentData.discussionMatchScore || 0) >= 80 ? 'text-green-600' :
                          (currentData.discussionMatchScore || 0) >= 50 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                          {(currentData.discussionMatchScore || 0) >= 80 ? 'Excellent' :
                            (currentData.discussionMatchScore || 0) >= 50 ? 'Moderate' : 'Poor'} adherence
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-blue-200 rounded-full h-3 mb-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${(currentData.discussionMatchScore || 0) >= 80 ? 'bg-green-500' :
                        (currentData.discussionMatchScore || 0) >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                      style={{ width: `${currentData.discussionMatchScore || 0}%` }}
                    ></div>
                  </div>

                  {currentData.discussionSummary && (
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h5 className="font-medium text-blue-900 mb-2">Summary</h5>
                      <p className="text-blue-800 text-sm leading-relaxed">{currentData.discussionSummary}</p>
                    </div>
                  )}
                </div>

                {/* Individual Topic Analysis */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Topic-by-Topic Analysis ({currentData.discussionTopicsAnalysis.length} planned topics)
                  </h4>

                  {currentData.discussionTopicsAnalysis.map((topic, index) => (
                    <article key={index} className={`border rounded-xl p-5 ${topic.wasDiscussed
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                      }`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">{topic.scheduledTopic}</h5>
                          <div className="flex items-center gap-3 mb-2">
                            <DiscussionLevelBadge level={topic.discussionLevel} />
                            {topic.timeSpentPercentage > 0 && (
                              <span className="text-sm text-gray-600 flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                ~{topic.timeSpentPercentage}% of meeting time
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className={`text-sm leading-relaxed ${topic.wasDiscussed ? 'text-green-800' : 'text-red-800'
                          }`}>
                          {topic.summary}
                        </p>
                      </div>

                      {/* Evidence from transcript */}
                      {topic.transcriptEvidence && topic.transcriptEvidence.length > 0 && (
                        <div className="mt-4 p-3 bg-white rounded-lg border">
                          <h6 className="font-medium text-gray-700 mb-2 text-sm">Evidence from Transcript:</h6>
                          <div className="space-y-2">
                            {topic.transcriptEvidence.slice(0, 3).map((evidence, evidenceIndex) => (
                              <blockquote key={evidenceIndex} className="text-sm text-gray-600 italic border-l-2 border-gray-300 pl-3">
                                "{evidence}"
                              </blockquote>
                            ))}
                            {topic.transcriptEvidence.length > 3 && (
                              <p className="text-xs text-gray-500">
                                + {topic.transcriptEvidence.length - 3} more references...
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </article>
                  ))}
                </div>

                {/* Additional Topics */}
                {currentData.additionalTopicsDiscussed && currentData.additionalTopicsDiscussed.length > 0 && (
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Additional Topics Discussed
                    </h4>
                    <p className="text-sm text-purple-700 mb-3">
                      Important topics that came up during the meeting but weren't originally planned:
                    </p>
                    <div className="space-y-2">
                      {currentData.additionalTopicsDiscussed.map((topic, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-purple-800 font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Statistics Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {currentData.discussionTopicsAnalysis.filter(t => t.wasDiscussed).length}
                    </div>
                    <div className="text-sm text-gray-600">Topics Discussed</div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {currentData.discussionTopicsAnalysis.filter(t => t.discussionLevel === 'comprehensive').length}
                    </div>
                    <div className="text-sm text-gray-600">Comprehensive Coverage</div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">
                      {currentData.discussionTopicsAnalysis.filter(t => !t.wasDiscussed).length}
                    </div>
                    <div className="text-sm text-gray-600">Topics Missed</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <BarChart3 className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">No Discussion Analysis Available</h4>
                <p className="text-sm">
                  This meeting either wasn't scheduled with discussion topics or the analysis couldn't be completed.
                </p>
              </div>
            )}
          </div>
        );

      case 'Minutes':
        return (
          <div className="p-6">
            <header className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Meeting Minutes</h3>
              <p className="text-sm text-gray-600 mt-1">Key discussion points and outcomes</p>
            </header>

            {currentData.minutes && currentData.minutes.length > 0 ? (
              <div className="space-y-4">
                {currentData.minutes.map((minute, index) => (
                  <article key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{minute.topic}</h4>
                        <p className="text-gray-700 leading-relaxed">{minute.details}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <FileText className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <p>No meeting minutes available</p>
              </div>
            )}
          </div>
        );

      case 'Action Items':
        return (
          <div className="p-6">
            <header className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Action Items</h3>
              <p className="text-sm text-gray-600 mt-1">Tasks and follow-ups from the meeting</p>
            </header>

            {currentData.nextSteps && currentData.nextSteps.length > 0 ? (
              <div className="space-y-4">
                {currentData.nextSteps.map((step, index) => (
                  <article key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 flex-1 pr-4">{step.task}</h4>
                      <div className="flex gap-2 flex-shrink-0">
                        <PriorityBadge priority={step.priority} />
                        <CategoryBadge category={step.category} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 pt-3 border-t border-gray-100 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Assignee:</span>
                        <p className="text-gray-900 mt-1">{step.assignee}</p>
                      </div>

                      {step.assignedBy && (
                        <div>
                          <span className="font-medium text-gray-600">Assigned by:</span>
                          <p className="text-gray-900 mt-1">{step.assignedBy}</p>
                        </div>
                      )}

                      <div>
                        <span className="font-medium text-gray-600">Due:</span>
                        <p className="text-gray-900 mt-1">
                          {step.parsedDueDate ? formatDate(step.parsedDueDate) : (step.due || 'Not specified')}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CheckSquare className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <p>No action items recorded</p>
              </div>
            )}
          </div>
        );

      case 'Projects':
        return (
          <div className="p-6">
            <header className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Projects</h3>
              <p className="text-sm text-gray-600 mt-1">Larger initiatives and multi-step efforts</p>
            </header>

            {currentData.projects && currentData.projects.length > 0 ? (
              <div className="space-y-6">
                {currentData.projects.map((project, index) => (
                  <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <header className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                      <p className="text-gray-700 mt-2 leading-relaxed">{project.description}</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="font-medium text-gray-600">Assignee:</span>
                        <p className="text-gray-900 mt-1">{project.assignee}</p>
                      </div>

                      {project.deadline && (
                        <div>
                          <span className="font-medium text-gray-600">Deadline:</span>
                          <p className="text-gray-900 mt-1">{project.deadline}</p>
                        </div>
                      )}
                    </div>

                    {project.scope && project.scope.length > 0 && (
                      <div>
                        <span className="font-medium text-gray-600 block mb-2">Scope:</span>
                        <ul className="space-y-1">
                          {project.scope.map((item, scopeIndex) => (
                            <li key={scopeIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Target className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <p>No projects identified</p>
              </div>
            )}
          </div>
        );

      case 'Strategic':
        return (
          <div className="p-6">
            <header className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Strategic Overview</h3>
              <p className="text-sm text-gray-600 mt-1">Key initiatives, implementation plans, and important decisions</p>
            </header>

            {/* Key Initiatives */}
            {currentData.keyInitiatives && currentData.keyInitiatives.length > 0 && (
              <section className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                  Key Initiatives
                </h4>
                <div className="space-y-4">
                  {currentData.keyInitiatives.map((initiative, index) => (
                    <article key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-5">
                      <h5 className="font-semibold text-gray-900 mb-2">{initiative.title}</h5>
                      <p className="text-gray-700 mb-3 leading-relaxed">{initiative.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-600">Objective:</span>
                          <p className="text-gray-900 mt-1">{initiative.objective}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Ownership:</span>
                          <p className="text-gray-900 mt-1">{initiative.ownership}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Implementation Plan */}
            {currentData.implementationPlan && (currentData.implementationPlan.objectives?.length > 0 || currentData.implementationPlan.timeline?.length > 0) && (
              <section className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  Implementation Plan
                </h4>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  {currentData.implementationPlan.objectives && currentData.implementationPlan.objectives.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-blue-900 mb-2">🎯 Objectives:</h5>
                      <ul className="space-y-2">
                        {currentData.implementationPlan.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-blue-800">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentData.implementationPlan.timeline && currentData.implementationPlan.timeline.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-blue-900 mb-2">🗓️ Timeline:</h5>
                      <ul className="space-y-2">
                        {currentData.implementationPlan.timeline.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-blue-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Decisions Made */}
            {currentData.decisionsMade && currentData.decisionsMade.length > 0 && (
              <section className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Flag className="h-5 w-5 text-green-500 mr-2" />
                  Decisions Made
                </h4>
                <div className="space-y-4">
                  {currentData.decisionsMade.map((decision, index) => (
                    <article key={index} className="bg-green-50 border border-green-200 rounded-lg p-5">
                      <h5 className="font-semibold text-green-900 mb-2">📌 {decision.decision}</h5>

                      {decision.context && (
                        <div className="mb-3">
                          <span className="font-medium text-green-800">Context:</span>
                          <p className="text-green-700 mt-1">{decision.context}</p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        {decision.impact && (
                          <div>
                            <span className="font-medium text-green-800">Impact:</span>
                            <p className="text-green-700 mt-1">{decision.impact}</p>
                          </div>
                        )}
                        {decision.decidedBy && (
                          <div>
                            <span className="font-medium text-green-800">Decided by:</span>
                            <p className="text-green-700 mt-1">{decision.decidedBy}</p>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Empty state if no strategic content */}
            {(!currentData.keyInitiatives || currentData.keyInitiatives.length === 0) &&
              (!currentData.implementationPlan || (!currentData.implementationPlan.objectives?.length && !currentData.implementationPlan.timeline?.length)) &&
              (!currentData.decisionsMade || currentData.decisionsMade.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  <Lightbulb className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                  <p>No strategic information recorded</p>
                </div>
              )}
          </div>
        );

      case 'Risks & Challenges':
        return (
          <div className="p-6">
            <header className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Risks & Challenges</h3>
              <p className="text-sm text-gray-600 mt-1">Identified risks and current challenges</p>
            </header>

            {currentData.challengesAndRisks && currentData.challengesAndRisks.length > 0 ? (
              <div className="space-y-4">
                {currentData.challengesAndRisks.map((item, index) => (
                  <article key={index} className={`border rounded-lg p-5 ${item.type === 'risk'
                    ? 'bg-red-50 border-red-200'
                    : 'bg-orange-50 border-orange-200'
                    }`}>
                    <div className="flex items-start justify-between mb-3">
                      <h4 className={`font-semibold flex items-center ${item.type === 'risk' ? 'text-red-900' : 'text-orange-900'
                        }`}>
                        {item.type === 'risk' ? (
                          <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                        )}
                        {item.type === 'risk' ? 'Risk' : 'Challenge'}
                      </h4>
                      <ImpactBadge impact={item.impact} />
                    </div>

                    <p className={`mb-3 leading-relaxed ${item.type === 'risk' ? 'text-red-800' : 'text-orange-800'
                      }`}>
                      {item.description}
                    </p>

                    {item.mitigation && (
                      <div className={`p-3 rounded border-l-4 ${item.type === 'risk'
                        ? 'bg-red-100 border-red-400'
                        : 'bg-orange-100 border-orange-400'
                        }`}>
                        <span className={`font-medium text-sm ${item.type === 'risk' ? 'text-red-800' : 'text-orange-800'
                          }`}>
                          Mitigation:
                        </span>
                        <p className={`mt-1 text-sm ${item.type === 'risk' ? 'text-red-700' : 'text-orange-700'
                          }`}>
                          {item.mitigation}
                        </p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <AlertTriangle className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <p>No risks or challenges identified</p>
              </div>
            )}
          </div>
        );

      case 'Transcript':
        return (
          <div className="p-6">
            <header className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Conversation Transcript</h3>
              <p className="text-sm text-gray-600 mt-1">Full conversation record</p>
            </header>

            {/* Speaker Statistics */}
            {currentData.transcript && currentData.transcript.length > 0 && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Speaker Breakdown</h4>
                {(() => {
                  const speakerCounts = {};
                  currentData.transcript.forEach(t => {
                    speakerCounts[t.speaker] = (speakerCounts[t.speaker] || 0) + 1;
                  });
                  const total = currentData.transcript.length;

                  return (
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(speakerCounts).map(([speaker, count]) => (
                        <span key={speaker} className="text-sm text-gray-600">
                          <span className="font-medium">{speaker}:</span> {Math.round((count / total) * 100)}% ({count} messages)
                        </span>
                      ))}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Conversation */}
            {currentData.transcript && currentData.transcript.length > 0 ? (
              <div className="space-y-4">
                {currentData.transcript.map((conv, index) => {
                  // Generate consistent colors for speakers
                  const speakerColors = [
                    'bg-purple-500', 'bg-pink-500', 'bg-blue-500',
                    'bg-green-500', 'bg-orange-500', 'bg-red-500'
                  ];
                  const uniqueSpeakers = [...new Set(currentData.transcript.map(t => t.speaker))];
                  const speakerIndex = uniqueSpeakers.indexOf(conv.speaker);
                  const colorClass = speakerColors[speakerIndex % speakerColors.length];

                  return (
                    <article key={index} className="flex items-start space-x-4">
                      <figure className={`w-10 h-10 ${colorClass} rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
                        {conv.speaker.charAt(0)}
                      </figure>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">{conv.speaker}</h4>
                          {shouldShowAudioPlayer && (
                            <span className="text-sm text-green-600 flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                              {formatTime(Math.floor((index / (currentData.transcript.length - 1)) * duration))}
                            </span>
                          )}
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-700 leading-relaxed">{conv.text}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MessageCircle className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <p>No transcript available</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-purple-500">{getPageTitle()}</h1>
          <nav className="flex items-center space-x-3">
            {/* Translation Toggle */}
            {translatedMeetingData && selectedLanguage && (
              <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="text-sm text-blue-700">
                  {showTranslated ? selectedLanguage.name : 'Original'}
                </span>
                <button
                  onClick={handleToggleTranslation}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  type="button"
                >
                  {showTranslated ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                </button>
              </div>
            )}

            {/* Translation Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                disabled={isTranslating}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${isTranslating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                type="button"
              >
                <Languages size={16} />
                <span>{isTranslating ? "Translating..." : "Translate"}</span>
                {isTranslating && (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                )}
              </button>

              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-60 overflow-y-auto">
                  <div className="p-2">
                    <div className="text-xs font-medium text-gray-500 px-2 py-1 mb-1">
                      Select Language
                    </div>
                    {SUPPORTED_LANGUAGES.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleTranslate(language.code, language.name)}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors flex items-center space-x-2"
                        type="button"
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Send Email Button */}
            {currentData?.emailRecipients && currentData.emailRecipients.length > 0 && (
              <button
                onClick={handleSendEmailPDF}
                disabled={isSendingEmail}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${isSendingEmail
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
                  } text-white`}
                type="button"
              >
                <Mail size={16} />
                <span>{isSendingEmail ? "Sending..." : "Send PDF"}</span>
              </button>
            )}

            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className={`p-2 transition-colors ${isGeneratingPDF
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:text-purple-600"
                }`}
              title={isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
              type="button"
            >
              {isGeneratingPDF ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
              ) : (
                <Download size={20} />
              )}
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              type="button"
            >
              <Trash2 size={16} />
              <span>Delete</span>
            </button>
          </nav>
        </header>

        {/* Status Messages */}
        <section aria-live="polite">
          {isTranslating && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <p className="text-blue-800 font-medium">Translating meeting content...</p>
              </div>
            </div>
          )}

          {translationError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">!</span>
                </div>
                <p className="text-red-800 font-medium">{translationError}</p>
              </div>
            </div>
          )}

          {isGeneratingPDF && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <p className="text-blue-800 font-medium">Generating PDF...</p>
              </div>
            </div>
          )}

          {currentData?.emailRecipients && currentData.emailRecipients.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h2 className="text-sm font-medium text-blue-800 mb-2">
                📧 Email Recipients ({currentData.emailRecipients.length})
              </h2>
              <div className="text-sm text-blue-700">
                {currentData.emailRecipients.join(", ")}
              </div>
            </div>
          )}

          {emailSent && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-green-800 font-medium">
                  Meeting summary sent successfully to all recipients!
                </p>
              </div>
            </div>
          )}

          {emailError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">!</span>
                </div>
                <p className="text-red-800 font-medium">{emailError}</p>
              </div>
            </div>
          )}
        </section>

        {/* Audio Player */}
        {shouldShowAudioPlayer && (
          <figure className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
            <audio ref={audioRef} src={meetingData.recordingAudioUrl} />

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div
                className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
                  className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                  type="button"
                >
                  <SkipBack size={20} />
                </button>
                <button
                  onClick={handlePlayPause}
                  className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
                  type="button"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button
                  onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
                  className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                  type="button"
                >
                  <SkipForward size={20} />
                </button>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => {
                      const newSpeed = playbackSpeed === 2 ? 0.5 : playbackSpeed + 0.25;
                      setPlaybackSpeed(newSpeed);
                      if (audioRef.current) audioRef.current.playbackRate = newSpeed;
                    }}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                    type="button"
                  >
                    {playbackSpeed}x
                  </button>
                </div>
              </div>
            </div>
          </figure>
        )}

        {/* Tab Navigation */}
        <nav className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1">
          <div className="flex gap-1 overflow-x-auto">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center space-x-2 py-3 px-4 text-sm font-medium transition-colors rounded-md whitespace-nowrap ${activeTab === tab
                  ? 'bg-purple-300 text-purple-800 shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
                  }`}
                type="button"
              >
                {getTabIcon(tab)}
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <article className="bg-white rounded-lg border border-gray-200 shadow-sm">
          {renderTabContent()}
        </article>

        {/* Click outside to close dropdown */}
        {showLanguageDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowLanguageDropdown(false)}
          />
        )}
      </div>
    </main>
  );
};