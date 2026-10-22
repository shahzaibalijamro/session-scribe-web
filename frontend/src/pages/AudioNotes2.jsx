// // // // // import React from "react";
// // // // // import { Play, Pause, Square, Edit, MessageSquare, Share } from "lucide-react";
// // // // // import { Link } from "react-router-dom";

// // // // // export default function AudioNotesPage() {
// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 p-4">
// // // // //       <div className="max-w-6xl mx-auto flex gap-6">
// // // // //         {/* Left Panel - Audio Notes */}
// // // // //         <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
// // // // //           <h1 className="text-3xl font-light text-purple-400 mb-6">
// // // // //             Audio Notes
// // // // //           </h1>

// // // // //           <div className="space-y-4 mb-8">
// // // // //             {/* Charlie's first message */}
// // // // //             <div className="flex items-start gap-3">
// // // // //               <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
// // // // //                 c
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <div className="flex items-center gap-2 mb-1">
// // // // //                   <span className="font-medium text-gray-900">Charlie</span>
// // // // //                   <div className="flex items-center gap-1 text-xs text-gray-500">
// // // // //                     <div className="w-3 h-3 text-green-500">✓</div>
// // // // //                     <span>0:02</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <p className="text-sm text-gray-700 leading-relaxed">
// // // // //                   Alright, let's get started. Lisa, did you get a chance to
// // // // //                   review the campaign brief for Q3?
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Lisa's first message */}
// // // // //             <div className="flex items-start gap-3">
// // // // //               <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-medium">
// // // // //                 L
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <div className="flex items-center gap-2 mb-1">
// // // // //                   <span className="font-medium text-gray-900">Lisa</span>
// // // // //                   <div className="flex items-center gap-1 text-xs text-gray-500">
// // // // //                     <div className="w-3 h-3 text-green-500">✓</div>
// // // // //                     <span>0:05</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <p className="text-sm text-gray-700 leading-relaxed">
// // // // //                   Yes, I did. I think the overall direction looks good,
// // // // //                   especially the focus on influencer partnerships. But I have a
// // // // //                   few thoughts on the content calendar
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Charlie's second message */}
// // // // //             <div className="flex items-start gap-3">
// // // // //               <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
// // // // //                 c
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <div className="flex items-center gap-2 mb-1">
// // // // //                   <span className="font-medium text-gray-900">Charlie</span>
// // // // //                   <div className="flex items-center gap-1 text-xs text-gray-500">
// // // // //                     <div className="w-3 h-3 text-green-500">✓</div>
// // // // //                     <span>0:01</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <p className="text-sm text-gray-700 leading-relaxed">
// // // // //                   Let's hear them.
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Lisa's second message */}
// // // // //             <div className="flex items-start gap-3">
// // // // //               <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-medium">
// // // // //                 L
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <div className="flex items-center gap-2 mb-1">
// // // // //                   <span className="font-medium text-gray-900">Lisa</span>
// // // // //                   <div className="flex items-center gap-1 text-xs text-gray-500">
// // // // //                     <div className="w-3 h-3 text-green-500">✓</div>
// // // // //                     <span>0:05</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <p className="text-sm text-gray-700 leading-relaxed">
// // // // //                   Yes, I did. I think the overall direction looks good,
// // // // //                   especially the focus on influencer partnerships. But I have a
// // // // //                   few thoughts on the content calendar
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Charlie's third message */}
// // // // //             <div className="flex items-start gap-3">
// // // // //               <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
// // // // //                 c
// // // // //               </div>
// // // // //               <div className="flex-1">
// // // // //                 <div className="flex items-center gap-2 mb-1">
// // // // //                   <span className="font-medium text-gray-900">Charlie</span>
// // // // //                   <div className="flex items-center gap-1 text-xs text-gray-500">
// // // // //                     <div className="w-3 h-3 text-green-500">✓</div>
// // // // //                     <span>0:01</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <p className="text-sm text-gray-700 leading-relaxed">
// // // // //                   Let's hear them.
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Audio Controls */}
// // // // //           <div className="bg-purple-50 rounded-xl p-4">
// // // // //             <div className="flex items-center gap-4">
// // // // //               <button className="w-8 h-8 flex items-center justify-center">
// // // // //                 <Pause className="w-5 h-5 text-gray-700" />
// // // // //               </button>
// // // // //               <button className="w-6 h-6 flex items-center justify-center">
// // // // //                 <Square className="w-4 h-4 text-gray-700 fill-current" />
// // // // //               </button>
// // // // //               <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
// // // // //                 <div className="w-3 h-3 rounded-full bg-white"></div>
// // // // //               </div>
// // // // //               <div className="flex-1 mx-4">
// // // // //                 <div className="bg-purple-300 h-1 rounded-full relative">
// // // // //                   <div className="absolute left-0 top-0 h-full w-3/4 bg-purple-500 rounded-full"></div>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <span className="text-xs text-gray-500 min-w-[20px]">0:21</span>
// // // // //               <button className="w-6 h-6 flex items-center justify-center">
// // // // //                 <Edit className="w-4 h-4 text-gray-700" />
// // // // //               </button>
// // // // //               <button className="w-6 h-6 flex items-center justify-center">
// // // // //                 <MessageSquare className="w-4 h-4 text-gray-700" />
// // // // //               </button>
// // // // //               <button className="w-6 h-6 flex items-center justify-center">
// // // // //                 <Share className="w-4 h-4 text-gray-700" />
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Right Panel - Important Notes */}
// // // // //         <div className="w-80 bg-white rounded-2xl p-6 shadow-sm">
// // // // //           <div className="flex items-center gap-2 mb-4">
// // // // //             <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
// // // // //               <span className="text-purple-600 text-xs">📋</span>
// // // // //             </div>
// // // // //             <h2 className="text-lg font-medium text-gray-600">Audio Notes</h2>
// // // // //           </div>

// // // // //           <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-4 rounded-xl mb-6">
// // // // //             Audio Agenda
// // // // //           </button>

// // // // //           <div className="space-y-3 md:space-y-4">
// // // // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // // // //               <div className="flex items-center space-x-2 mb-3 md:mb-4">
// // // // //                 <MessageSquare
// // // // //                   size={16}
// // // // //                   className="text-gray-500 md:w-5 md:h-5"
// // // // //                 />
// // // // //                 <h3 className="text-base md:text-lg font-bold text-gray-700">
// // // // //                   Audio Notes
// // // // //                 </h3>
// // // // //               </div>

// // // // //               <Link to="/node-details" className="space-y-3 md:space-y-4">
// // // // //                 <div>
// // // // //                   <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // // //                     1. Meeting Summary
// // // // //                   </h4>
// // // // //                   <p className="font-semibold">12/6/25</p>
// // // // //                   <h4 className="font-semibold mt-5 text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // // //                     2. Meeting Summary
// // // // //                   </h4>
// // // // //                   <p className="font-semibold">12/6/25</p>
// // // // //                   <h4 className="font-semibold mt-5 text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // // //                     3. Meeting Summary
// // // // //                   </h4>
// // // // //                   <p className="font-semibold">12/6/25</p>
// // // // //                   {/* <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// // // // //                       <li>
// // // // //                         • Discussed current progress on the mobile app redesign
// // // // //                       </li>
// // // // //                       <li>• Identified key blockers in backend integration</li>
// // // // //                       <li>
// // // // //                         • Reviewed revised deadlines and next sprint goals
// // // // //                       </li>
// // // // //                     </ul> */}
// // // // //                 </div>

// // // // //                 {/* <div>
// // // // //                     <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // // //                       2. Action Item
// // // // //                     </h4>
// // // // //                     <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// // // // //                       <li className="flex items-center">
// // // // //                         <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-sm mr-1 md:mr-2"></div>
// // // // //                         Alex - Update Figma prototype by Wednesday
// // // // //                       </li>
// // // // //                       <li className="flex items-center">
// // // // //                         <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-sm mr-1 md:mr-2"></div>
// // // // //                         Jana - Follow up with backend team on API issues
// // // // //                       </li>
// // // // //                       <li className="flex items-center">
// // // // //                         <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-sm mr-1 md:mr-2"></div>
// // // // //                         Marco - Schedule client review call for next week
// // // // //                       </li>
// // // // //                     </ul>
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // // //                       3. Key Decisions
// // // // //                     </h4>
// // // // //                     <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// // // // //                       <li>• Move launch date to June 15</li>
// // // // //                       <li>• Drop legacy support for iOS 13</li>
// // // // //                     </ul>
// // // // //                   </div> */}
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }





// // // // import React, { useEffect, useState, useRef } from "react";
// // // // import { Play, Pause, Square, Edit, MessageSquare, Share, Mic } from "lucide-react";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import { useApp } from "../components/context/AppContext";
// // // // import { motion } from "framer-motion";

// // // // export default function AudioNotesPage() {
// // // //   const navigate = useNavigate();
// // // //   const { setLoading, loading, user } = useApp();

// // // //   // Recording states
// // // //   const [isRecording, setIsRecording] = useState(false);
// // // //   const [audioUrl, setAudioUrl] = useState(null);
// // // //   const [timer, setTimer] = useState(0);
// // // //   const [waveform, setWaveform] = useState(Array(20).fill(20));
// // // //   const [isTranscribing, setIsTranscribing] = useState(false);
// // // //   const [transcriptionError, setTranscriptionError] = useState(null);
// // // //   const [done, setDone] = useState(false);

// // // //   const audioRecorderRef = useRef(null);
// // // //   const audioChunksRef = useRef([]);
// // // //   const timerIntervalRef = useRef(null);
// // // //   const micStreamRef = useRef(null);

// // // //   // Transcript data state
// // // //   const [transcript, setTranscript] = useState([]);
// // // //   const [meetingData, setMeetingData] = useState(null);

// // // //   const formatTime = (seconds) => {
// // // //     const mins = Math.floor(seconds / 60);
// // // //     const secs = seconds % 60;
// // // //     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
// // // //   };

// // // //   useEffect(() => {
// // // //     if (isRecording) {
// // // //       timerIntervalRef.current = setInterval(() => {
// // // //         setTimer((prev) => prev + 1);
// // // //         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
// // // //       }, 1000);
// // // //     } else {
// // // //       clearInterval(timerIntervalRef.current);
// // // //     }

// // // //     return () => clearInterval(timerIntervalRef.current);
// // // //   }, [isRecording]);

// // // //   const setupAudioStream = async () => {
// // // //     try {
// // // //       const micStream = await navigator.mediaDevices.getUserMedia({
// // // //         audio: {
// // // //           echoCancellation: true,
// // // //           noiseSuppression: true,
// // // //           autoGainControl: true,
// // // //           sampleRate: 16000,
// // // //           channelCount: 1,
// // // //         },
// // // //       });
// // // //       micStreamRef.current = micStream;

// // // //       return micStream;
// // // //     } catch (error) {
// // // //       console.error("Error setting up audio stream:", error);
// // // //       throw error;
// // // //     }
// // // //   };

// // // //   const startRecording = async () => {
// // // //     try {
// // // //       audioChunksRef.current = [];
// // // //       setTranscript([]);
// // // //       setMeetingData(null);
// // // //       setDone(false);

// // // //       const audioStream = await setupAudioStream();

// // // //       const audioOptions = {
// // // //         mimeType: "audio/webm;codecs=opus",
// // // //         audioBitsPerSecond: 32000,
// // // //       };

// // // //       const audioRecorder = new MediaRecorder(audioStream, audioOptions);
// // // //       audioRecorderRef.current = audioRecorder;

// // // //       audioRecorder.ondataavailable = (event) => {
// // // //         if (event.data.size > 0) {
// // // //           audioChunksRef.current.push(event.data);
// // // //         }
// // // //       };

// // // //       audioRecorder.onstop = async () => {
// // // //         const audioBlob = new Blob(audioChunksRef.current, {
// // // //           type: "audio/webm",
// // // //         });
// // // //         const url = URL.createObjectURL(audioBlob);
// // // //         setAudioUrl(url);
// // // //         await processAudio(audioBlob);
// // // //       };

// // // //       audioRecorder.start();
// // // //       setTimer(0);
// // // //       setIsRecording(true);
// // // //     } catch (error) {
// // // //       console.error("Error starting recording: ", error);
// // // //       setTranscriptionError("Failed to start recording. Please try again.");
// // // //     }
// // // //   };

// // // //   const stopRecording = async () => {
// // // //     try {
// // // //       if (audioRecorderRef.current) {
// // // //         audioRecorderRef.current.stop();
// // // //       }

// // // //       if (micStreamRef.current) {
// // // //         micStreamRef.current.getTracks().forEach((track) => track.stop());
// // // //       }

// // // //       setIsRecording(false);
// // // //     } catch (error) {
// // // //       console.error("Error stopping recording:", error);
// // // //     }
// // // //   };

// // // //   const processAudio = async (audioBlob) => {
// // // //     setIsTranscribing(true);
// // // //     setTranscriptionError(null);

// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append("audioFile", audioBlob, "audio-notes.webm");
// // // //       formData.append("duration", timer.toString());
// // // //       formData.append("type", "audio-notes");

// // // //       setLoading(true);

// // // //       const { data } = await axios.post(
// // // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
// // // //         formData,
// // // //         {
// // // //           headers: {
// // // //             "Content-Type": "multipart/form-data",
// // // //             Authorization: localStorage.getItem("token"),
// // // //           },
// // // //         }
// // // //       );

// // // //       setMeetingData(data.meeting);
// // // //       setTranscript(data.meeting.transcript);
// // // //       setDone(true);
// // // //     } catch (error) {
// // // //       console.error("Error processing audio:", error);
// // // //       setTranscriptionError("Failed to process audio. Please try again.");
// // // //     } finally {
// // // //       setIsTranscribing(false);
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const resetRecording = () => {
// // // //     setAudioUrl(null);
// // // //     setTimer(0);
// // // //     setDone(false);
// // // //     setTranscript([]);
// // // //     setMeetingData(null);
// // // //     setTranscriptionError(null);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 p-4">
// // // //       <div className="max-w-6xl mx-auto flex gap-6">
// // // //         {/* Left Panel - Audio Notes */}
// // // //         <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
// // // //           <h1 className="text-3xl font-light text-purple-400 mb-6">
// // // //             Audio Notes
// // // //           </h1>

// // // //           {/* Recording Status */}
// // // //           {isRecording && (
// // // //             <div className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm">
// // // //               <div className="flex items-center justify-between">
// // // //                 <div className="flex items-center gap-4">
// // // //                   <div className="flex items-center gap-2">
// // // //                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
// // // //                     <span className="text-red-700 font-medium">Recording...</span>
// // // //                   </div>
// // // //                   <div className="text-2xl font-bold text-red-700">
// // // //                     {formatTime(timer)}
// // // //                   </div>
// // // //                 </div>
// // // //                 {/* Live waveform animation */}
// // // //                 <div className="flex items-center h-8 gap-1">
// // // //                   {waveform.map((height, index) => (
// // // //                     <motion.div
// // // //                       key={index}
// // // //                       className="w-1 bg-red-500 rounded-full"
// // // //                       animate={{ height }}
// // // //                       transition={{ duration: 0.2 }}
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {/* Transcript Display */}
// // // //           {transcript.length > 0 ? (
// // // //             <div className="space-y-4 mb-8">
// // // //               {transcript.map((item, index) => (
// // // //                 <div key={index} className="flex items-start gap-3">
// // // //                   <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
// // // //                     {item.speaker.charAt(0).toUpperCase()}
// // // //                   </div>
// // // //                   <div className="flex-1">
// // // //                     <div className="flex items-center gap-2 mb-1">
// // // //                       <span className="font-medium text-gray-900">
// // // //                         {item.speaker}
// // // //                       </span>
// // // //                     </div>
// // // //                     <p className="text-sm text-gray-700 leading-relaxed">
// // // //                       {item.text}
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           ) : isRecording ? (
// // // //             <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
// // // //               <p className="text-gray-500 text-center">
// // // //                 Recording in progress... Transcript will appear here after recording is processed.
// // // //               </p>
// // // //             </div>
// // // //           ) : (
// // // //             <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
// // // //               <p className="text-gray-500 text-center">
// // // //                 {audioUrl 
// // // //                   ? "Processing your audio notes..." 
// // // //                   : "Start recording to create audio notes"}
// // // //               </p>
// // // //             </div>
// // // //           )}

// // // //           {/* Audio Controls */}
// // // //           <div className="bg-purple-50 rounded-xl p-4">
// // // //             {!isRecording && !audioUrl ? (
// // // //               <button
// // // //                 onClick={startRecording}
// // // //                 disabled={loading}
// // // //                 className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
// // // //               >
// // // //                 <Mic className="w-5 h-5" />
// // // //                 Start Recording
// // // //               </button>
// // // //             ) : (
// // // //               <div className="flex items-center gap-4">
// // // //                 {audioUrl ? (
// // // //                   <>
// // // //                     <button 
// // // //                       onClick={() => {
// // // //                         const audio = new Audio(audioUrl);
// // // //                         audio.play();
// // // //                       }}
// // // //                       className="w-8 h-8 flex items-center justify-center"
// // // //                     >
// // // //                       <Play className="w-5 h-5 text-gray-700" />
// // // //                     </button>
// // // //                     <button 
// // // //                       onClick={resetRecording}
// // // //                       className="w-6 h-6 flex items-center justify-center"
// // // //                     >
// // // //                       <Square className="w-4 h-4 text-gray-700 fill-current" />
// // // //                     </button>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <button 
// // // //                       onClick={stopRecording}
// // // //                       className="w-8 h-8 flex items-center justify-center"
// // // //                     >
// // // //                       <Square className="w-5 h-5 text-gray-700 fill-current" />
// // // //                     </button>
// // // //                   </>
// // // //                 )}

// // // //                 <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
// // // //                   <div className="w-3 h-3 rounded-full bg-white"></div>
// // // //                 </div>

// // // //                 <div className="flex-1 mx-4">
// // // //                   <div className="bg-purple-300 h-1 rounded-full relative">
// // // //                     <div 
// // // //                       className="absolute left-0 top-0 h-full bg-purple-500 rounded-full"
// // // //                       style={{ width: audioUrl ? '100%' : `${(timer % 60) / 60 * 100}%` }}
// // // //                     ></div>
// // // //                   </div>
// // // //                 </div>

// // // //                 <span className="text-xs text-gray-500 min-w-[20px]">
// // // //                   {formatTime(timer)}
// // // //                 </span>

// // // //                 <button className="w-6 h-6 flex items-center justify-center">
// // // //                   <Edit className="w-4 h-4 text-gray-700" />
// // // //                 </button>
// // // //                 <button className="w-6 h-6 flex items-center justify-center">
// // // //                   <MessageSquare className="w-4 h-4 text-gray-700" />
// // // //                 </button>
// // // //                 <button className="w-6 h-6 flex items-center justify-center">
// // // //                   <Share className="w-4 h-4 text-gray-700" />
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Processing Status */}
// // // //           {(loading || isTranscribing) && (
// // // //             <div className="mt-4 text-center">
// // // //               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 inline-block"></div>
// // // //               <p className="text-gray-600 mt-2">
// // // //                 {isTranscribing ? "Processing your audio notes..." : "Uploading..."}
// // // //               </p>
// // // //             </div>
// // // //           )}

// // // //           {done && !loading && !isTranscribing && (
// // // //             <div className="mt-4 p-3 bg-green-50 rounded-lg text-green-700 text-center">
// // // //               Audio notes processed successfully!
// // // //             </div>
// // // //           )}

// // // //           {transcriptionError && (
// // // //             <div className="mt-4 p-3 bg-red-50 rounded-lg text-red-700 text-center">
// // // //               {transcriptionError}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Right Panel - Important Notes */}
// // // //         <div className="w-80 bg-white rounded-2xl p-6 shadow-sm">
// // // //           <div className="flex items-center gap-2 mb-4">
// // // //             <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
// // // //               <span className="text-purple-600 text-xs">📋</span>
// // // //             </div>
// // // //             <h2 className="text-lg font-medium text-gray-600">Audio Notes</h2>
// // // //           </div>

// // // //           <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-4 rounded-xl mb-6">
// // // //             Audio Agenda
// // // //           </button>

// // // //           <div className="space-y-3 md:space-y-4">
// // // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // // //               <div className="flex items-center space-x-2 mb-3 md:mb-4">
// // // //                 <MessageSquare size={16} className="text-gray-500 md:w-5 md:h-5" />
// // // //                 <h3 className="text-base md:text-lg font-bold text-gray-700">
// // // //                   Audio Notes
// // // //                 </h3>
// // // //               </div>

// // // //               <div className="space-y-3 md:space-y-4">
// // // //                 {meetingData ? (
// // // //                   <>
// // // //                     <div>
// // // //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // //                         1. Meeting Summary
// // // //                       </h4>
// // // //                       <p className="text-xs md:text-sm text-gray-600">
// // // //                         {meetingData.summary || "No summary available"}
// // // //                       </p>
// // // //                     </div>
// // // //                     <div>
// // // //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // //                         2. Key Points
// // // //                       </h4>
// // // //                       <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// // // //                         {meetingData.minutes?.map((item, index) => (
// // // //                           <li key={index}>• {item.topic}: {item.details}</li>
// // // //                         ))}
// // // //                       </ul>
// // // //                     </div>
// // // //                     <div>
// // // //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // //                         3. Next Steps
// // // //                       </h4>
// // // //                       <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// // // //                         {meetingData.nextSteps?.map((item, index) => (
// // // //                           <li key={index} className="flex items-center">
// // // //                             <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-sm mr-1 md:mr-2"></div>
// // // //                             {item.task} (Assigned to: {item.assignee})
// // // //                           </li>
// // // //                         ))}
// // // //                       </ul>
// // // //                     </div>
// // // //                   </>
// // // //                 ) : (
// // // //                   <p className="text-xs md:text-sm text-gray-500">
// // // //                     Record audio notes to see summary here
// // // //                   </p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useEffect, useState, useRef } from "react";
// // // import { Play, Pause, Square, Edit, MessageSquare, Share, Mic } from "lucide-react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import { useApp } from "../components/context/AppContext";
// // // import { motion } from "framer-motion";

// // // export default function AudioNotesPage() {
// // //   const navigate = useNavigate();
// // //   const { setLoading, loading, user } = useApp();

// // //   // Recording states
// // //   const [isRecording, setIsRecording] = useState(false);
// // //   const [audioUrl, setAudioUrl] = useState(null);
// // //   const [timer, setTimer] = useState(0);
// // //   const [waveform, setWaveform] = useState(Array(20).fill(20));
// // //   const [isTranscribing, setIsTranscribing] = useState(false);
// // //   const [transcriptionError, setTranscriptionError] = useState(null);
// // //   const [done, setDone] = useState(false);

// // //   const audioRecorderRef = useRef(null);
// // //   const audioChunksRef = useRef([]);
// // //   const timerIntervalRef = useRef(null);
// // //   const micStreamRef = useRef(null);

// // //   // Transcript data state
// // //   const [transcript, setTranscript] = useState([]);
// // //   const [meetingData, setMeetingData] = useState(null);

// // //   const formatTime = (seconds) => {
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = seconds % 60;
// // //     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
// // //   };

// // //   useEffect(() => {
// // //     if (isRecording) {
// // //       timerIntervalRef.current = setInterval(() => {
// // //         setTimer((prev) => prev + 1);
// // //         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
// // //       }, 1000);
// // //     } else {
// // //       clearInterval(timerIntervalRef.current);
// // //     }

// // //     return () => clearInterval(timerIntervalRef.current);
// // //   }, [isRecording]);

// // //   useEffect(() => {
// // //     (async () => {
// // //       await transcribeAudio();
// // //     })();
// // //   }, [audioUrl]);

// // //   // Helper function to format bytes
// // //   const formatBytes = (bytes) => {
// // //     if (bytes === 0) return "0 Bytes";
// // //     const k = 1024;
// // //     const sizes = ["Bytes", "KB", "MB", "GB"];
// // //     const i = Math.floor(Math.log(bytes) / Math.log(k));
// // //     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
// // //   };

// // //   const setupAudioStream = async () => {
// // //     try {
// // //       const micStream = await navigator.mediaDevices.getUserMedia({
// // //         audio: {
// // //           echoCancellation: true,
// // //           noiseSuppression: true,
// // //           autoGainControl: true,
// // //           sampleRate: 16000,
// // //           channelCount: 1,
// // //         },
// // //       });
// // //       micStreamRef.current = micStream;

// // //       return micStream;
// // //     } catch (error) {
// // //       console.error("Error setting up audio stream:", error);
// // //       throw error;
// // //     }
// // //   };

// // //   const startRecording = async () => {
// // //     setLoading(false);
// // //     setDone(false);

// // //     try {
// // //       audioChunksRef.current = [];
// // //       setTranscript([]);
// // //       setMeetingData(null);

// // //       const audioStream = await setupAudioStream();

// // //       const audioOptions = {
// // //         mimeType: "audio/webm;codecs=opus",
// // //         audioBitsPerSecond: 32000,
// // //       };

// // //       const audioRecorder = new MediaRecorder(audioStream, audioOptions);
// // //       audioRecorderRef.current = audioRecorder;

// // //       audioRecorder.ondataavailable = (event) => {
// // //         if (event.data.size > 0) {
// // //           audioChunksRef.current.push(event.data);
// // //         }
// // //       };

// // //       audioRecorder.onstop = async () => {
// // //         const audioBlob = new Blob(audioChunksRef.current, {
// // //           type: "audio/webm",
// // //         });
// // //         const url = URL.createObjectURL(audioBlob);
// // //         setAudioUrl(url);
// // //       };

// // //       audioRecorder.start();
// // //       setTimer(0);
// // //       setIsRecording(true);
// // //     } catch (error) {
// // //       console.error("Error starting recording: ", error);
// // //       setTranscriptionError("Failed to start recording. Please try again.");
// // //     }
// // //   };

// // //   const stopRecording = async () => {
// // //     try {
// // //       if (audioRecorderRef.current) {
// // //         audioRecorderRef.current.stop();
// // //       }

// // //       if (micStreamRef.current) {
// // //         micStreamRef.current.getTracks().forEach((track) => track.stop());
// // //       }

// // //       setIsRecording(false);
// // //     } catch (error) {
// // //       console.error("Error stopping recording:", error);
// // //     }
// // //   };

// // //   const transcribeAudio = async () => {
// // //     if (!audioUrl) return;

// // //     setIsTranscribing(true);
// // //     setTranscriptionError(null);
// // //     let startTime;

// // //     try {
// // //       console.log("🔍 DEBUGGING AUDIO RECORDING PROCESSING");
// // //       console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
// // //       console.log("1. Audio URL exists:", !!audioUrl);
// // //       console.log("   URL length:", audioUrl?.length);
// // //       console.log("2. Fetching audio blob...");

// // //       const audioResponse = await fetch(audioUrl);
// // //       console.log("3. Fetch response status:", audioResponse.status);
// // //       console.log(
// // //         "   Response headers:",
// // //         Object.fromEntries(audioResponse.headers.entries())
// // //       );

// // //       const audioBlob = await audioResponse.blob();

// // //       // Step 3: Detailed file analysis
// // //       const sizeBytes = audioBlob.size;
// // //       const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
// // //       const durationMinutes = timer / 60;
// // //       const actualBitrate = Math.round(
// // //         (sizeBytes * 8) / (durationMinutes * 60)
// // //       );

// // //       console.log("4. AUDIO BLOB ANALYSIS:");
// // //       console.log("   Duration:", durationMinutes.toFixed(2), "minutes");
// // //       console.log("   File size:", sizeMB, "MB");
// // //       console.log("   File size (bytes):", sizeBytes.toLocaleString());
// // //       console.log("   Blob type:", audioBlob.type);
// // //       console.log("   Actual bitrate:", actualBitrate, "bps");
// // //       console.log(
// // //         "   Expected size (32kbps):",
// // //         ((32000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// // //         "MB"
// // //       );

// // //       // Step 4: Check if the blob is actually valid
// // //       if (sizeBytes === 0) {
// // //         console.error("❌ ISSUE FOUND: Audio blob is empty!");
// // //         setTranscriptionError(
// // //           "Recording failed - audio file is empty. Try recording again."
// // //         );
// // //         return;
// // //       }

// // //       if (sizeBytes < 1000) {
// // //         console.error("❌ ISSUE FOUND: Audio blob suspiciously small!");
// // //         setTranscriptionError(
// // //           "Recording may have failed - file too small. Try recording again."
// // //         );
// // //         return;
// // //       }

// // //       // Step 5: Check for corruption by trying to create another blob
// // //       try {
// // //         const testBlob = new Blob([audioBlob], { type: "audio/webm" });
// // //         console.log("5. Blob integrity check: PASSED");
// // //       } catch (error) {
// // //         console.error("❌ ISSUE FOUND: Blob corruption detected!", error);
// // //         setTranscriptionError("Audio file corrupted. Try recording again.");
// // //         return;
// // //       }

// // //       // 🔍 DEBUG: Analyze file size
// // //       const fileAnalysis = debugFileSize(audioBlob, timer);

// // //       // Show analysis in UI
// // //       setTranscriptionError(
// // //         `File: ${fileAnalysis.sizeMB}MB, Bitrate: ~${fileAnalysis.actualBitrate}bps`
// // //       );

// // //       // Warn if file seems too large
// // //       if (!fileAnalysis.isUnderLimit) {
// // //         setTranscriptionError(
// // //           `⚠️ File too large: ${fileAnalysis.sizeMB}MB. Try reducing bitrate.`
// // //         );
// // //         return;
// // //       }

// // //       console.log("6. Creating FormData...");

// // //       // Prepare form data with audio only (no video URL, no emails)
// // //       const formData = new FormData();
// // //       formData.append("audioFile", audioBlob, "audio-notes.webm");
// // //       formData.append("duration", timer.toString());
// // //       formData.append("type", "audio-notes");

// // //       console.log("   FormData entries:");
// // //       for (let [key, value] of formData.entries()) {
// // //         if (value instanceof File) {
// // //           console.log(
// // //             `   ${key}: File(${value.name}, ${value.size} bytes, ${value.type})`
// // //           );
// // //         } else {
// // //           console.log(`   ${key}: ${value}`);
// // //         }
// // //       }

// // //       setLoading(true);
// // //       console.log("7. Starting upload...");
// // //       startTime = Date.now();

// // //       const { data } = await axios.post(
// // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
// // //         formData,
// // //         {
// // //           headers: {
// // //             "Content-Type": "multipart/form-data",
// // //             Authorization: localStorage.getItem("token"),
// // //           },
// // //           timeout: 300000, // 5 minutes
// // //           onUploadProgress: (progressEvent) => {
// // //             const percent = Math.round(
// // //               (progressEvent.loaded * 100) / progressEvent.total
// // //             );
// // //             const uploadedMB = (progressEvent.loaded / (1024 * 1024)).toFixed(
// // //               2
// // //             );
// // //             console.log(
// // //               `   Upload progress: ${percent}% (${uploadedMB}MB/${sizeMB}MB)`
// // //             );
// // //             setTranscriptionError(
// // //               `Uploading: ${percent}% (${uploadedMB}MB/${sizeMB}MB)`
// // //             );
// // //           },
// // //           // Add request transformation logging
// // //           transformRequest: [
// // //             function (data, headers) {
// // //               console.log("   Request headers:", headers);
// // //               console.log("   Request data type:", typeof data);
// // //               return data;
// // //             },
// // //           ],
// // //         }
// // //       );

// // //       const uploadTime = Date.now() - startTime;
// // //       console.log("✅ Upload successful!");
// // //       console.log("   Upload time:", uploadTime, "ms");
// // //       console.log("   Response:", data);

// // //       // Set the meeting data and transcript
// // //       setMeetingData(data.meeting);
// // //       setTranscript(data.meeting.transcript);
// // //       setDone(true);

// // //     } catch (error) {
// // //       const uploadTime = Date.now() - startTime;
// // //       console.error("❌ UPLOAD FAILED AFTER", uploadTime, "ms");
// // //       console.error("   Error type:", error.constructor.name);
// // //       console.error("   Error message:", error.message);
// // //       console.error("   Error code:", error.code);
// // //       console.error("❌ Error:", error);

// // //       if (error.response) {
// // //         console.error("   Response status:", error.response.status);
// // //         console.error("   Response headers:", error.response.headers);
// // //         console.error("   Response data:", error.response.data);
// // //       }

// // //       if (error.request) {
// // //         console.error("   Request details:", {
// // //           timeout: error.request.timeout,
// // //           readyState: error.request.readyState,
// // //           status: error.request.status,
// // //         });
// // //       }

// // //       // Specific error analysis
// // //       if (error.response?.status === 413) {
// // //         console.error("🔍 413 ERROR ANALYSIS:");
// // //         console.error("   This should NOT happen with a", sizeMB, "MB file");
// // //         console.error("   Possible causes:");
// // //         console.error("   - Server limits not applied correctly");
// // //         console.error("   - Nginx config not reloaded");
// // //         console.error("   - Different server handling the request");
// // //         console.error("   - Request timeout being treated as size limit");
// // //         setTranscriptionError(
// // //           `Server rejected ${sizeMB}MB file (should be allowed). ` +
// // //             `Check server configuration or try a shorter recording.`
// // //         );
// // //       } else if (error.code === "ECONNABORTED") {
// // //         console.error("🔍 TIMEOUT ERROR ANALYSIS:");
// // //         console.error("   Upload timeout after", uploadTime, "ms");
// // //         console.error("   File size:", sizeMB, "MB should upload quickly");
// // //         console.error("   Possible causes:");
// // //         console.error("   - Slow network connection");
// // //         console.error("   - Server processing timeout");
// // //         console.error("   - Stuck request somewhere in the chain");
// // //         setTranscriptionError(
// // //           `Upload timeout (${uploadTime}ms). Try shorter recordings or check connection.`
// // //         );
// // //       } else {
// // //         setTranscriptionError(`Upload failed: ${error.message}`);
// // //       }

// // //       setTranscriptionError("Failed to process audio. Please try again.");
// // //     } finally {
// // //       setIsTranscribing(false);
// // //       setLoading(false);
// // //       setDone(true);
// // //     }
// // //   };

// // //   const debugFileSize = (audioBlob, recordingDuration) => {
// // //     const sizeBytes = audioBlob.size;
// // //     const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
// // //     const durationMinutes = recordingDuration / 60;

// // //     // Calculate actual bitrate
// // //     const actualBitrate = Math.round((sizeBytes * 8) / (durationMinutes * 60));

// // //     // Calculate expected sizes at different bitrates
// // //     const expectedSizes = {
// // //       "16kbps": ((16000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// // //       "32kbps": ((32000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// // //       "64kbps": ((64000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// // //       "128kbps": ((128000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// // //     };

// // //     console.log("📊 FILE SIZE ANALYSIS:");
// // //     console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
// // //     console.log(`🎵 File: ${audioBlob.type}`);
// // //     console.log(`⏱️  Duration: ${durationMinutes.toFixed(2)} minutes`);
// // //     console.log(`📏 Actual Size: ${sizeMB} MB (${sizeBytes} bytes)`);
// // //     console.log(`🔊 Actual Bitrate: ~${actualBitrate} bps`);
// // //     console.log("");
// // //     console.log("📊 Expected sizes at different bitrates:");

// // //     Object.entries(expectedSizes).forEach(([bitrate, size]) => {
// // //       const indicator =
// // //         Math.abs(parseFloat(size) - parseFloat(sizeMB)) < 0.5
// // //           ? " ← CLOSE MATCH"
// // //           : "";
// // //       console.log(`   ${bitrate}: ${size} MB${indicator}`);
// // //     });

// // //     console.log("");
// // //     console.log(
// // //       `✅ Under 50MB limit: ${parseFloat(sizeMB) < 50 ? "YES" : "NO"}`
// // //     );
// // //     console.log(
// // //       `⚠️  Under 25MB (Whisper): ${parseFloat(sizeMB) < 25 ? "YES" : "NO"}`
// // //     );
// // //     console.log(
// // //       `🚨 Under 10MB (safe): ${parseFloat(sizeMB) < 10 ? "YES" : "NO"}`
// // //     );

// // //     return {
// // //       sizeMB: parseFloat(sizeMB),
// // //       sizeBytes,
// // //       actualBitrate,
// // //       durationMinutes,
// // //       isUnderLimit: parseFloat(sizeMB) < 50,
// // //     };
// // //   };

// // //   const resetRecording = () => {
// // //     setAudioUrl(null);
// // //     setTimer(0);
// // //     setDone(false);
// // //     setTranscript([]);
// // //     setMeetingData(null);
// // //     setTranscriptionError(null);
// // //   };

// // //   const downloadRecording = () => {
// // //     if (audioUrl) {
// // //       const link = document.createElement("a");
// // //       link.href = audioUrl;
// // //       link.download = `audio-notes-${new Date().toISOString()}.webm`;
// // //       link.click();
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-4">
// // //       <div className="max-w-6xl mx-auto flex gap-6">
// // //         {/* Left Panel - Audio Notes */}
// // //         <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
// // //           <h1 className="text-3xl font-light text-purple-400 mb-6">
// // //             Audio Notes
// // //           </h1>

// // //           {/* Recording Status */}
// // //           {isRecording && (
// // //             <div className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm">
// // //               <div className="flex items-center justify-between">
// // //                 <div className="flex items-center gap-4">
// // //                   <div className="flex items-center gap-2">
// // //                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
// // //                     <span className="text-red-700 font-medium">Recording...</span>
// // //                   </div>
// // //                   <div className="text-2xl font-bold text-red-700">
// // //                     {formatTime(timer)}
// // //                   </div>
// // //                 </div>
// // //                 {/* Live waveform animation */}
// // //                 <div className="flex items-center h-8 gap-1">
// // //                   {waveform.map((height, index) => (
// // //                     <motion.div
// // //                       key={index}
// // //                       className="w-1 bg-red-500 rounded-full"
// // //                       animate={{ height }}
// // //                       transition={{ duration: 0.2 }}
// // //                     />
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Transcript Display */}
// // //           {transcript.length > 0 ? (
// // //             <div className="space-y-4 mb-8">
// // //               {transcript.map((item, index) => (
// // //                 <div key={index} className="flex items-start gap-3">
// // //                   <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
// // //                     {item.speaker.charAt(0).toUpperCase()}
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <div className="flex items-center gap-2 mb-1">
// // //                       <span className="font-medium text-gray-900">
// // //                         {item.speaker}
// // //                       </span>
// // //                     </div>
// // //                     <p className="text-sm text-gray-700 leading-relaxed">
// // //                       {item.text}
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           ) : isRecording ? (
// // //             <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
// // //               <p className="text-gray-500 text-center">
// // //                 Recording in progress... Transcript will appear here after recording is processed.
// // //               </p>
// // //             </div>
// // //           ) : (
// // //             <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
// // //               <p className="text-gray-500 text-center">
// // //                 {audioUrl 
// // //                   ? "Processing your audio notes..." 
// // //                   : "Start recording to create audio notes"}
// // //               </p>
// // //             </div>
// // //           )}

// // //           {/* Audio Controls */}
// // //           <div className="bg-purple-50 rounded-xl p-4">
// // //             {!isRecording && !audioUrl ? (
// // //               <button
// // //                 onClick={startRecording}
// // //                 disabled={loading}
// // //                 className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
// // //               >
// // //                 <Mic className="w-5 h-5" />
// // //                 Start Recording
// // //               </button>
// // //             ) : (
// // //               <div className="flex items-center gap-4">
// // //                 {audioUrl ? (
// // //                   <>
// // //                     <button 
// // //                       onClick={() => {
// // //                         const audio = new Audio(audioUrl);
// // //                         audio.play();
// // //                       }}
// // //                       className="w-8 h-8 flex items-center justify-center"
// // //                     >
// // //                       <Play className="w-5 h-5 text-gray-700" />
// // //                     </button>
// // //                     <button 
// // //                       onClick={resetRecording}
// // //                       className="w-6 h-6 flex items-center justify-center"
// // //                     >
// // //                       <Square className="w-4 h-4 text-gray-700 fill-current" />
// // //                     </button>
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <button 
// // //                       onClick={stopRecording}
// // //                       className="w-8 h-8 flex items-center justify-center"
// // //                     >
// // //                       <Square className="w-5 h-5 text-gray-700 fill-current" />
// // //                     </button>
// // //                   </>
// // //                 )}

// // //                 <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
// // //                   <div className="w-3 h-3 rounded-full bg-white"></div>
// // //                 </div>

// // //                 <div className="flex-1 mx-4">
// // //                   <div className="bg-purple-300 h-1 rounded-full relative">
// // //                     <div 
// // //                       className="absolute left-0 top-0 h-full bg-purple-500 rounded-full"
// // //                       style={{ width: audioUrl ? '100%' : `${(timer % 60) / 60 * 100}%` }}
// // //                     ></div>
// // //                   </div>
// // //                 </div>

// // //                 <span className="text-xs text-gray-500 min-w-[20px]">
// // //                   {formatTime(timer)}
// // //                 </span>

// // //                 <button 
// // //                   onClick={downloadRecording}
// // //                   disabled={!audioUrl}
// // //                   className="w-6 h-6 flex items-center justify-center"
// // //                 >
// // //                   <Edit className="w-4 h-4 text-gray-700" />
// // //                 </button>
// // //                 <button className="w-6 h-6 flex items-center justify-center">
// // //                   <MessageSquare className="w-4 h-4 text-gray-700" />
// // //                 </button>
// // //                 <button className="w-6 h-6 flex items-center justify-center">
// // //                   <Share className="w-4 h-4 text-gray-700" />
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Processing Status */}
// // //           {(loading || isTranscribing) && (
// // //             <div className="mt-4 text-center">
// // //               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 inline-block"></div>
// // //               <p className="text-gray-600 mt-2">
// // //                 {isTranscribing ? "Processing your audio notes..." : "Uploading..."}
// // //               </p>
// // //             </div>
// // //           )}

// // //           {done && !loading && !isTranscribing && (
// // //             <div className="mt-4 p-3 bg-green-50 rounded-lg text-green-700 text-center">
// // //               Audio notes processed successfully!
// // //             </div>
// // //           )}

// // //           {transcriptionError && (
// // //             <div className="mt-4 p-3 bg-red-50 rounded-lg text-red-700 text-center">
// // //               {transcriptionError}
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Right Panel - Important Notes */}
// // //         <div className="w-80 bg-white rounded-2xl p-6 shadow-sm">
// // //           <div className="flex items-center gap-2 mb-4">
// // //             <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
// // //               <span className="text-purple-600 text-xs">📋</span>
// // //             </div>
// // //             <h2 className="text-lg font-medium text-gray-600">Audio Notes</h2>
// // //           </div>

// // //           <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-4 rounded-xl mb-6">
// // //             Audio Agenda
// // //           </button>

// // //           <div className="space-y-3 md:space-y-4">
// // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // //               <div className="flex items-center space-x-2 mb-3 md:mb-4">
// // //                 <MessageSquare size={16} className="text-gray-500 md:w-5 md:h-5" />
// // //                 <h3 className="text-base md:text-lg font-bold text-gray-700">
// // //                   Audio Notes
// // //                 </h3>
// // //               </div>

// // //               <div className="space-y-3 md:space-y-4">
// // //                 {meetingData ? (
// // //                   <>
// // //                     <div>
// // //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // //                         1. Meeting Summary
// // //                       </h4>
// // //                       <p className="text-xs md:text-sm text-gray-600">
// // //                         {meetingData.summary || "No summary available"}
// // //                       </p>
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // //                         2. Key Points
// // //                       </h4>
// // //                       <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// // //                         {meetingData.minutes?.map((item, index) => (
// // //                           <li key={index}>• {item.topic}: {item.details}</li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // //                         3. Next Steps
// // //                       </h4>
// // //                       <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// // //                         {meetingData.nextSteps?.map((item, index) => (
// // //                           <li key={index} className="flex items-center">
// // //                             <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-sm mr-1 md:mr-2"></div>
// // //                             {item.task} (Assigned to: {item.assignee})
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>
// // //                   </>
// // //                 ) : (
// // //                   <p className="text-xs md:text-sm text-gray-500">
// // //                     Record audio notes to see summary here
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useEffect, useState, useRef } from "react";
// // import { Play, Pause, Square, Edit, MessageSquare, Share, Mic } from "lucide-react";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { useApp } from "../components/context/AppContext";
// // import { motion } from "framer-motion";

// // export default function AudioNotesPage() {
// //   const navigate = useNavigate();
// //   const { setLoading, loading, user } = useApp();

// //   // Recording states
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [mediaUrl, setMediaUrl] = useState(null);
// //   const [combinedAudioUrl, setCombinedAudioUrl] = useState(null);
// //   const [timer, setTimer] = useState(0);
// //   const [waveform, setWaveform] = useState(Array(20).fill(20));
// //   const [isTranscribing, setIsTranscribing] = useState(false);
// //   const [transcriptionError, setTranscriptionError] = useState(null);
// //   const [done, setDone] = useState(false);

// //   const mediaRecorderRef = useRef(null);
// //   const audioRecorderRef = useRef(null);
// //   const mediaChunksRef = useRef([]);
// //   const audioChunksRef = useRef([]);
// //   const timerIntervalRef = useRef(null);
// //   const screenStreamRef = useRef(null);
// //   const micStreamRef = useRef(null);
// //   const combinedStreamRef = useRef(null);

// //   // Transcript data state
// //   const [transcript, setTranscript] = useState([]);
// //   const [meetingData, setMeetingData] = useState(null);

// //   const formatTime = (seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
// //   };

// //   useEffect(() => {
// //     if (isRecording) {
// //       timerIntervalRef.current = setInterval(() => {
// //         setTimer((prev) => prev + 1);
// //         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
// //       }, 1000);
// //     } else {
// //       clearInterval(timerIntervalRef.current);
// //     }

// //     return () => clearInterval(timerIntervalRef.current);
// //   }, [isRecording]);

// //   useEffect(() => {
// //     (async () => {
// //       await transcribeAudio();
// //     })();
// //   }, [combinedAudioUrl]);

// //   // Helper function to format bytes
// //   const formatBytes = (bytes) => {
// //     if (bytes === 0) return "0 Bytes";
// //     const k = 1024;
// //     const sizes = ["Bytes", "KB", "MB", "GB"];
// //     const i = Math.floor(Math.log(bytes) / Math.log(k));
// //     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
// //   };

// //   // Setup combined audio stream (same as Recorder)
// //   const setupCombinedAudioStream = async () => {
// //     try {
// //       const screenStream = await navigator.mediaDevices.getDisplayMedia({
// //         video: true,
// //         audio: {
// //           sampleRate: 16000,
// //           channelCount: 1,
// //         },
// //       });
// //       screenStreamRef.current = screenStream;

// //       const micStream = await navigator.mediaDevices.getUserMedia({
// //         audio: {
// //           echoCancellation: true,
// //           noiseSuppression: true,
// //           autoGainControl: true,
// //         },
// //       });
// //       micStreamRef.current = micStream;

// //       const audioContext = new AudioContext({ sampleRate: 16000 });
// //       const destination = audioContext.createMediaStreamDestination();

// //       const systemSource = audioContext.createMediaStreamSource(
// //         new MediaStream(screenStream.getAudioTracks())
// //       );
// //       const micSource = audioContext.createMediaStreamSource(
// //         new MediaStream(micStream.getAudioTracks())
// //       );

// //       systemSource.connect(destination);
// //       micSource.connect(destination);

// //       const combinedAudioStream = destination.stream;
// //       const combinedStream = new MediaStream([
// //         ...screenStream.getVideoTracks(),
// //         ...destination.stream.getTracks(),
// //       ]);

// //       combinedStreamRef.current = combinedStream;

// //       return { combinedStream, combinedAudioStream };
// //     } catch (error) {
// //       console.error("Error setting up combined audio stream:", error);
// //       throw error;
// //     }
// //   };

// //   const startRecordingProcess = async () => {
// //     setLoading(false);
// //     setDone(false);

// //     try {
// //       mediaChunksRef.current = [];
// //       audioChunksRef.current = [];
// //       setTranscript([]);
// //       setMeetingData(null);

// //       const { combinedStream, combinedAudioStream } =
// //         await setupCombinedAudioStream();

// //       const videoOptions = {
// //         mimeType: "video/webm;codecs=vp9,opus",
// //         videoBitsPerSecond: 2500000, // 1Mbps for smaller files
// //       };
// //       const mediaRecorder = new MediaRecorder(combinedStream, videoOptions);
// //       mediaRecorderRef.current = mediaRecorder;

// //       mediaRecorder.ondataavailable = (event) => {
// //         if (event.data.size > 0) {
// //           mediaChunksRef.current.push(event.data);
// //         }
// //       };

// //       const audioOptions = {
// //         mimeType: "audio/webm;codecs=opus",
// //         audioBitsPerSecond: 32000,
// //       };
// //       const audioRecorder = new MediaRecorder(
// //         combinedAudioStream,
// //         audioOptions
// //       );
// //       audioRecorderRef.current = audioRecorder;

// //       audioRecorder.ondataavailable = (event) => {
// //         if (event.data.size > 0) {
// //           audioChunksRef.current.push(event.data);
// //         }
// //       };

// //       mediaRecorder.onstop = () => {
// //         const videoBlob = new Blob(mediaChunksRef.current, {
// //           type: "video/webm",
// //         });
// //         const url = URL.createObjectURL(videoBlob);
// //         setMediaUrl(url);
// //       };

// //       audioRecorder.onstop = () => {
// //         const audioBlob = new Blob(audioChunksRef.current, {
// //           type: "audio/webm",
// //         });
// //         const url = URL.createObjectURL(audioBlob);
// //         setCombinedAudioUrl(url);
// //       };

// //       mediaRecorder.start();
// //       audioRecorder.start();

// //       setTimer(0);
// //       setIsRecording(true);
// //     } catch (error) {
// //       console.error("Error starting recording: ", error);
// //       setTranscriptionError("Failed to start recording. Please try again.");
// //     }
// //   };

// //   const transcribeAudio = async () => {
// //     if (!combinedAudioUrl || !mediaUrl) return;

// //     setIsTranscribing(true);
// //     setTranscriptionError(null);
// //     let startTime;

// //     try {
// //       console.log("🔍 DEBUGGING AUDIO RECORDING PROCESSING");
// //       console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
// //       console.log("1. Audio URL exists:", !!combinedAudioUrl);
// //       console.log("   URL length:", combinedAudioUrl?.length);
// //       console.log("2. Fetching audio blob...");

// //       const audioResponse = await fetch(combinedAudioUrl);
// //       console.log("3. Fetch response status:", audioResponse.status);
// //       console.log(
// //         "   Response headers:",
// //         Object.fromEntries(audioResponse.headers.entries())
// //       );

// //       const audioBlob = await audioResponse.blob();

// //       // Step 3: Detailed file analysis
// //       const sizeBytes = audioBlob.size;
// //       const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
// //       const durationMinutes = timer / 60;
// //       const actualBitrate = Math.round(
// //         (sizeBytes * 8) / (durationMinutes * 60)
// //       );

// //       console.log("4. AUDIO BLOB ANALYSIS:");
// //       console.log("   Duration:", durationMinutes.toFixed(2), "minutes");
// //       console.log("   File size:", sizeMB, "MB");
// //       console.log("   File size (bytes):", sizeBytes.toLocaleString());
// //       console.log("   Blob type:", audioBlob.type);
// //       console.log("   Actual bitrate:", actualBitrate, "bps");
// //       console.log(
// //         "   Expected size (32kbps):",
// //         ((32000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// //         "MB"
// //       );

// //       // Step 4: Check if the blob is actually valid
// //       if (sizeBytes === 0) {
// //         console.error("❌ ISSUE FOUND: Audio blob is empty!");
// //         setTranscriptionError(
// //           "Recording failed - audio file is empty. Try recording again."
// //         );
// //         return;
// //       }

// //       if (sizeBytes < 1000) {
// //         console.error("❌ ISSUE FOUND: Audio blob suspiciously small!");
// //         setTranscriptionError(
// //           "Recording may have failed - file too small. Try recording again."
// //         );
// //         return;
// //       }

// //       // Step 5: Check for corruption by trying to create another blob
// //       try {
// //         const testBlob = new Blob([audioBlob], { type: "audio/webm" });
// //         console.log("5. Blob integrity check: PASSED");
// //       } catch (error) {
// //         console.error("❌ ISSUE FOUND: Blob corruption detected!", error);
// //         setTranscriptionError("Audio file corrupted. Try recording again.");
// //         return;
// //       }

// //       // 🔍 DEBUG: Analyze file size
// //       const fileAnalysis = debugFileSize(audioBlob, timer);

// //       // Show analysis in UI
// //       setTranscriptionError(
// //         `File: ${fileAnalysis.sizeMB}MB, Bitrate: ~${fileAnalysis.actualBitrate}bps`
// //       );

// //       // Warn if file seems too large
// //       if (!fileAnalysis.isUnderLimit) {
// //         setTranscriptionError(
// //           `⚠️ File too large: ${fileAnalysis.sizeMB}MB. Try reducing bitrate.`
// //         );
// //         return;
// //       }

// //       console.log("6. Creating FormData...");

// //       // Prepare form data with audio only (no video URL, no emails)
// //       const formData = new FormData();
// //       formData.append("audioFile", audioBlob, "audio-notes.webm");
// //       formData.append("duration", timer.toString());
// //       formData.append("type", "audio-notes");

// //       console.log("   FormData entries:");
// //       for (let [key, value] of formData.entries()) {
// //         if (value instanceof File) {
// //           console.log(
// //             `   ${key}: File(${value.name}, ${value.size} bytes, ${value.type})`
// //           );
// //         } else {
// //           console.log(`   ${key}: ${value}`);
// //         }
// //       }

// //       setLoading(true);
// //       console.log("7. Starting upload...");
// //       startTime = Date.now();

// //       const { data } = await axios.post(
// //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
// //         formData,
// //         {
// //           headers: {
// //             "Content-Type": "multipart/form-data",
// //             Authorization: localStorage.getItem("token"),
// //           },
// //           timeout: 300000, // 5 minutes
// //           onUploadProgress: (progressEvent) => {
// //             const percent = Math.round(
// //               (progressEvent.loaded * 100) / progressEvent.total
// //             );
// //             const uploadedMB = (progressEvent.loaded / (1024 * 1024)).toFixed(
// //               2
// //             );
// //             console.log(
// //               `   Upload progress: ${percent}% (${uploadedMB}MB/${sizeMB}MB)`
// //             );
// //             setTranscriptionError(
// //               `Uploading: ${percent}% (${uploadedMB}MB/${sizeMB}MB)`
// //             );
// //           },
// //           // Add request transformation logging
// //           transformRequest: [
// //             function (data, headers) {
// //               console.log("   Request headers:", headers);
// //               console.log("   Request data type:", typeof data);
// //               return data;
// //             },
// //           ],
// //         }
// //       );

// //       const uploadTime = Date.now() - startTime;
// //       console.log("✅ Upload successful!");
// //       console.log("   Upload time:", uploadTime, "ms");
// //       console.log("   Response:", data);

// //       // Set the meeting data and transcript
// //       setMeetingData(data.meeting);
// //       setTranscript(data.meeting.transcript);
// //       setDone(true);

// //     } catch (error) {
// //       const uploadTime = Date.now() - startTime;
// //       console.error("❌ UPLOAD FAILED AFTER", uploadTime, "ms");
// //       console.error("   Error type:", error.constructor.name);
// //       console.error("   Error message:", error.message);
// //       console.error("   Error code:", error.code);
// //       console.error("❌ Error:", error);

// //       if (error.response) {
// //         console.error("   Response status:", error.response.status);
// //         console.error("   Response headers:", error.response.headers);
// //         console.error("   Response data:", error.response.data);
// //       }

// //       if (error.request) {
// //         console.error("   Request details:", {
// //           timeout: error.request.timeout,
// //           readyState: error.request.readyState,
// //           status: error.request.status,
// //         });
// //       }

// //       // Specific error analysis
// //       if (error.response?.status === 413) {
// //         console.error("🔍 413 ERROR ANALYSIS:");
// //         console.error("   This should NOT happen with a", sizeMB, "MB file");
// //         console.error("   Possible causes:");
// //         console.error("   - Server limits not applied correctly");
// //         console.error("   - Nginx config not reloaded");
// //         console.error("   - Different server handling the request");
// //         console.error("   - Request timeout being treated as size limit");
// //         setTranscriptionError(
// //           `Server rejected ${sizeMB}MB file (should be allowed). ` +
// //             `Check server configuration or try a shorter recording.`
// //         );
// //       } else if (error.code === "ECONNABORTED") {
// //         console.error("🔍 TIMEOUT ERROR ANALYSIS:");
// //         console.error("   Upload timeout after", uploadTime, "ms");
// //         console.error("   File size:", sizeMB, "MB should upload quickly");
// //         console.error("   Possible causes:");
// //         console.error("   - Slow network connection");
// //         console.error("   - Server processing timeout");
// //         console.error("   - Stuck request somewhere in the chain");
// //         setTranscriptionError(
// //           `Upload timeout (${uploadTime}ms). Try shorter recordings or check connection.`
// //         );
// //       } else {
// //         setTranscriptionError(`Upload failed: ${error.message}`);
// //       }

// //       setTranscriptionError("Failed to process audio. Please try again.");
// //     } finally {
// //       setIsTranscribing(false);
// //       setLoading(false);
// //       setDone(true);
// //     }
// //   };

// //   const debugFileSize = (audioBlob, recordingDuration) => {
// //     const sizeBytes = audioBlob.size;
// //     const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
// //     const durationMinutes = recordingDuration / 60;

// //     // Calculate actual bitrate
// //     const actualBitrate = Math.round((sizeBytes * 8) / (durationMinutes * 60));

// //     // Calculate expected sizes at different bitrates
// //     const expectedSizes = {
// //       "16kbps": ((16000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// //       "32kbps": ((32000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// //       "64kbps": ((64000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// //       "128kbps": ((128000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
// //     };

// //     console.log("📊 FILE SIZE ANALYSIS:");
// //     console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
// //     console.log(`🎵 File: ${audioBlob.type}`);
// //     console.log(`⏱️  Duration: ${durationMinutes.toFixed(2)} minutes`);
// //     console.log(`📏 Actual Size: ${sizeMB} MB (${sizeBytes} bytes)`);
// //     console.log(`🔊 Actual Bitrate: ~${actualBitrate} bps`);
// //     console.log("");
// //     console.log("📊 Expected sizes at different bitrates:");

// //     Object.entries(expectedSizes).forEach(([bitrate, size]) => {
// //       const indicator =
// //         Math.abs(parseFloat(size) - parseFloat(sizeMB)) < 0.5
// //           ? " ← CLOSE MATCH"
// //           : "";
// //       console.log(`   ${bitrate}: ${size} MB${indicator}`);
// //     });

// //     console.log("");
// //     console.log(
// //       `✅ Under 50MB limit: ${parseFloat(sizeMB) < 50 ? "YES" : "NO"}`
// //     );
// //     console.log(
// //       `⚠️  Under 25MB (Whisper): ${parseFloat(sizeMB) < 25 ? "YES" : "NO"}`
// //     );
// //     console.log(
// //       `🚨 Under 10MB (safe): ${parseFloat(sizeMB) < 10 ? "YES" : "NO"}`
// //     );

// //     return {
// //       sizeMB: parseFloat(sizeMB),
// //       sizeBytes,
// //       actualBitrate,
// //       durationMinutes,
// //       isUnderLimit: parseFloat(sizeMB) < 50,
// //     };
// //   };

// //   const stopRecording = async () => {
// //     try {
// //       if (mediaRecorderRef.current) {
// //         mediaRecorderRef.current.stop();
// //       }

// //       if (audioRecorderRef.current) {
// //         audioRecorderRef.current.stop();
// //       }

// //       if (screenStreamRef.current) {
// //         screenStreamRef.current.getTracks().forEach((track) => track.stop());
// //       }

// //       if (micStreamRef.current) {
// //         micStreamRef.current.getTracks().forEach((track) => track.stop());
// //       }

// //       setIsRecording(false);
// //     } catch (error) {
// //       console.error("Error stopping recording:", error);
// //     }
// //   };

// //   const resetRecording = () => {
// //     setMediaUrl(null);
// //     setCombinedAudioUrl(null);
// //     setTimer(0);
// //     setDone(false);
// //     setTranscript([]);
// //     setMeetingData(null);
// //     setTranscriptionError(null);
// //   };

// //   const downloadRecordings = () => {
// //     if (mediaUrl) {
// //       const link = document.createElement("a");
// //       link.href = mediaUrl;
// //       link.download = `screen-recording-${new Date().toISOString()}.webm`;
// //       link.click();
// //     }

// //     if (combinedAudioUrl) {
// //       const link = document.createElement("a");
// //       link.href = combinedAudioUrl;
// //       link.download = `audio-notes-${new Date().toISOString()}.webm`;
// //       link.click();
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4">
// //       <div className="max-w-6xl mx-auto flex gap-6">
// //         {/* Left Panel - Audio Notes */}
// //         <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
// //           <h1 className="text-3xl font-light text-purple-400 mb-6">
// //             Audio Notes
// //           </h1>

// //           {/* Recording Status */}
// //           {isRecording && (
// //             <div className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm">
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-4">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
// //                     <span className="text-red-700 font-medium">Recording...</span>
// //                   </div>
// //                   <div className="text-2xl font-bold text-red-700">
// //                     {formatTime(timer)}
// //                   </div>
// //                 </div>
// //                 {/* Live waveform animation */}
// //                 <div className="flex items-center h-8 gap-1">
// //                   {waveform.map((height, index) => (
// //                     <motion.div
// //                       key={index}
// //                       className="w-1 bg-red-500 rounded-full"
// //                       animate={{ height }}
// //                       transition={{ duration: 0.2 }}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Recording Results */}
// //           {mediaUrl && !isRecording && (
// //             <div className="mb-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
// //               <h3 className="text-lg font-medium text-gray-700 mb-4">
// //                 Recording Complete
// //               </h3>
// //               <div className="space-y-4">
// //                 <div className="bg-gray-50 rounded-lg p-4">
// //                   <p className="text-sm font-medium text-gray-700 mb-2">
// //                     Screen Recording
// //                   </p>
// //                   <video src={mediaUrl} controls className="w-full" />
// //                 </div>

// //                 {combinedAudioUrl && (
// //                   <div className="bg-gray-50 rounded-lg p-4">
// //                     <p className="text-sm font-medium text-gray-700 mb-2">
// //                       Audio Only Version
// //                     </p>
// //                     <audio src={combinedAudioUrl} controls className="w-full" />
// //                     <p className="text-xs text-gray-500 mt-2">
// //                       Combined audio from both your microphone and system audio
// //                     </p>
// //                   </div>
// //                 )}

// //                 <div className="flex gap-3">
// //                   <button
// //                     onClick={downloadRecordings}
// //                     className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// //                   >
// //                     <Edit className="w-4 h-4" />
// //                     Download
// //                   </button>
// //                   <button
// //                     onClick={resetRecording}
// //                     className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
// //                   >
// //                     <Square className="w-4 h-4" />
// //                     Reset
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Transcript Display */}
// //           {transcript.length > 0 ? (
// //             <div className="space-y-4 mb-8">
// //               {transcript.map((item, index) => (
// //                 <div key={index} className="flex items-start gap-3">
// //                   <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
// //                     {item.speaker.charAt(0).toUpperCase()}
// //                   </div>
// //                   <div className="flex-1">
// //                     <div className="flex items-center gap-2 mb-1">
// //                       <span className="font-medium text-gray-900">
// //                         {item.speaker}
// //                       </span>
// //                     </div>
// //                     <p className="text-sm text-gray-700 leading-relaxed">
// //                       {item.text}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : isRecording ? (
// //             <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
// //               <p className="text-gray-500 text-center">
// //                 Recording in progress... Transcript will appear here after recording is processed.
// //               </p>
// //             </div>
// //           ) : (
// //             <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
// //               <p className="text-gray-500 text-center">
// //                 {combinedAudioUrl 
// //                   ? "Processing your audio notes..." 
// //                   : "Start recording to create audio notes"}
// //               </p>
// //             </div>
// //           )}

// //           {/* Audio Controls */}
// //           <div className="bg-purple-50 rounded-xl p-4">
// //             {!isRecording && !mediaUrl ? (
// //               <button
// //                 onClick={startRecordingProcess}
// //                 disabled={loading}
// //                 className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
// //               >
// //                 <Mic className="w-5 h-5" />
// //                 Start Recording
// //               </button>
// //             ) : (
// //               <div className="flex items-center gap-4">
// //                 {mediaUrl ? (
// //                   <>
// //                     <button 
// //                       onClick={() => {
// //                         const audio = new Audio(combinedAudioUrl);
// //                         audio.play();
// //                       }}
// //                       className="w-8 h-8 flex items-center justify-center"
// //                     >
// //                       <Play className="w-5 h-5 text-gray-700" />
// //                     </button>
// //                     <button 
// //                       onClick={resetRecording}
// //                       className="w-6 h-6 flex items-center justify-center"
// //                     >
// //                       <Square className="w-4 h-4 text-gray-700 fill-current" />
// //                     </button>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <button 
// //                       onClick={stopRecording}
// //                       className="w-8 h-8 flex items-center justify-center"
// //                     >
// //                       <Square className="w-5 h-5 text-gray-700 fill-current" />
// //                     </button>
// //                   </>
// //                 )}

// //                 <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
// //                   <div className="w-3 h-3 rounded-full bg-white"></div>
// //                 </div>

// //                 <div className="flex-1 mx-4">
// //                   <div className="bg-purple-300 h-1 rounded-full relative">
// //                     <div 
// //                       className="absolute left-0 top-0 h-full bg-purple-500 rounded-full"
// //                       style={{ width: mediaUrl ? '100%' : `${(timer % 60) / 60 * 100}%` }}
// //                     ></div>
// //                   </div>
// //                 </div>

// //                 <span className="text-xs text-gray-500 min-w-[20px]">
// //                   {formatTime(timer)}
// //                 </span>

// //                 <button 
// //                   onClick={downloadRecordings}
// //                   disabled={!mediaUrl}
// //                   className="w-6 h-6 flex items-center justify-center"
// //                 >
// //                   <Edit className="w-4 h-4 text-gray-700" />
// //                 </button>
// //                 <button className="w-6 h-6 flex items-center justify-center">
// //                   <MessageSquare className="w-4 h-4 text-gray-700" />
// //                 </button>
// //                 <button className="w-6 h-6 flex items-center justify-center">
// //                   <Share className="w-4 h-4 text-gray-700" />
// //                 </button>
// //               </div>
// //             )}
// //           </div>

// //           {/* Processing Status */}
// //           {(loading || isTranscribing) && (
// //             <div className="mt-4 text-center">
// //               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 inline-block"></div>
// //               <p className="text-gray-600 mt-2">
// //                 {isTranscribing ? "Processing your audio notes..." : "Uploading..."}
// //               </p>
// //             </div>
// //           )}

// //           {done && !loading && !isTranscribing && (
// //             <div className="mt-4 p-3 bg-green-50 rounded-lg text-green-700 text-center">
// //               Audio notes processed successfully!
// //             </div>
// //           )}

// //           {transcriptionError && (
// //             <div className="mt-4 p-3 bg-red-50 rounded-lg text-red-700 text-center">
// //               {transcriptionError}
// //             </div>
// //           )}
// //         </div>

// //         {/* Right Panel - Important Notes */}
// //         <div className="w-80 bg-white rounded-2xl p-6 shadow-sm">
// //           <div className="flex items-center gap-2 mb-4">
// //             <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
// //               <span className="text-purple-600 text-xs">📋</span>
// //             </div>
// //             <h2 className="text-lg font-medium text-gray-600">Audio Notes</h2>
// //           </div>

// //           <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-4 rounded-xl mb-6">
// //             Audio Agenda
// //           </button>

// //           <div className="space-y-3 md:space-y-4">
// //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// //               <div className="flex items-center space-x-2 mb-3 md:mb-4">
// //                 <MessageSquare size={16} className="text-gray-500 md:w-5 md:h-5" />
// //                 <h3 className="text-base md:text-lg font-bold text-gray-700">
// //                   Audio Notes
// //                 </h3>
// //               </div>

// //               <div className="space-y-3 md:space-y-4">
// //                 {meetingData ? (
// //                   <>
// //                     <div>
// //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// //                         1. Meeting Summary
// //                       </h4>
// //                       <p className="text-xs md:text-sm text-gray-600">
// //                         {meetingData.summary || "No summary available"}
// //                       </p>
// //                     </div>
// //                     <div>
// //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// //                         2. Key Points
// //                       </h4>
// //                       <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// //                         {meetingData.minutes?.map((item, index) => (
// //                           <li key={index}>• {item.topic}: {item.details}</li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                     <div>
// //                       <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// //                         3. Next Steps
// //                       </h4>
// //                       <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// //                         {meetingData.nextSteps?.map((item, index) => (
// //                           <li key={index} className="flex items-center">
// //                             <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-sm mr-1 md:mr-2"></div>
// //                             {item.task} (Assigned to: {item.assignee})
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   </>
// //                 ) : (
// //                   <p className="text-xs md:text-sm text-gray-500">
// //                     Record audio notes to see summary here
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState, useRef } from "react";
// import { Play, Pause, Square, Edit, MessageSquare, Share, Mic, Clock, Upload, FileAudio, AlertCircle } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useApp } from "../components/context/AppContext";
// import { motion } from "framer-motion";

// export default function AudioNotesPage() {
//   const navigate = useNavigate();
//   const { setLoading, loading, user } = useApp();
//   const fileInputRef = useRef(null);

//   // Recording states
//   const [isRecording, setIsRecording] = useState(false);
//   const [mediaUrl, setMediaUrl] = useState(null);
//   const [combinedAudioUrl, setCombinedAudioUrl] = useState(null);
//   const [timer, setTimer] = useState(0);
//   const [waveform, setWaveform] = useState(Array(20).fill(20));
//   const [isTranscribing, setIsTranscribing] = useState(false);
//   const [transcriptionError, setTranscriptionError] = useState(null);
//   const [done, setDone] = useState(false);
//   const [activeTab, setActiveTab] = useState("record"); // 'record' or 'upload'
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileDuration, setFileDuration] = useState(0);

//   const mediaRecorderRef = useRef(null);
//   const audioRecorderRef = useRef(null);
//   const mediaChunksRef = useRef([]);
//   const audioChunksRef = useRef([]);
//   const timerIntervalRef = useRef(null);
//   const screenStreamRef = useRef(null);
//   const micStreamRef = useRef(null);
//   const combinedStreamRef = useRef(null);

//   const [usageData, setUsageData] = useState(null);
//     const [usageLoading, setUsageLoading] = useState(true);
//     const [usageError, setUsageError] = useState(null);

//   // Transcript data state
//   const [transcript, setTranscript] = useState([]);
//   const [meetingData, setMeetingData] = useState(null);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // Validate file type
//     const validTypes = ['audio/mpeg', 'audio/wav', 'audio/webm', 'audio/ogg'];
//     if (!validTypes.includes(file.type)) {
//       setTranscriptionError("Invalid file type. Please upload an audio file (MP3, WAV, WEBM, OGG).");
//       return;
//     }

//     // Check file size (limit to 50MB)
//     if (file.size > 50 * 1024 * 1024) {
//       setTranscriptionError("File too large. Maximum size is 50MB.");
//       return;
//     }

//     setSelectedFile(file);
//     setTranscriptionError(null);

//     // Calculate duration for the file
//     const audio = new Audio();
//     audio.src = URL.createObjectURL(file);
//     audio.onloadedmetadata = () => {
//       setFileDuration(Math.round(audio.duration));
//     };
//   };

//   const handleFileUpload = async () => {
//     if (!selectedFile) {
//       setTranscriptionError("Please select an audio file first.");
//       return;
//     }

//     setLoading(true);
//     setIsTranscribing(true);
//     setTranscriptionError(null);
//     setDone(false);
//     setTimer(fileDuration);

//     const formData = new FormData();
//     formData.append("audioFile", selectedFile);
//     formData.append("duration", fileDuration.toString());
//     formData.append("type", "audio-notes");

//     try {
//       const { data } = await axios.post(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: localStorage.getItem("token"),
//           },
//           onUploadProgress: (progressEvent) => {
//             const percent = Math.round(
//               (progressEvent.loaded * 100) / progressEvent.total
//             );
//             setUploadProgress(percent);
//           },
//         }
//       );

//       await fetchUsageStatus();
//       setMeetingData(data.meeting);
//       setTranscript(data.meeting.transcript);
//       setDone(true);
//     } catch (error) {
//       console.error("Upload failed:", error);
//       setTranscriptionError("Failed to process audio. Please try again.");
//     } finally {
//       setLoading(false);
//       setIsTranscribing(false);
//     }
//   };

//   useEffect(() => {
//       fetchUsageStatus();
//     }, []);

//     const fetchUsageStatus = async () => {
//       try {
//         setUsageLoading(true);
//         setUsageError(null);

//         const response = await axios.get(
//           "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/users/usage-status",
//           {
//             headers: {
//               Authorization: localStorage.getItem("token"),
//             },
//           }
//         );

//         if (response.data.success) {
//           setUsageData(response.data.usage);
//         }
//       } catch (error) {
//         console.error("❌ Failed to fetch usage status:", error);
//         setUsageError("Failed to load usage information");
//       } finally {
//         setUsageLoading(false);
//       }
//     };

//   useEffect(() => {
//     if (isRecording) {
//       timerIntervalRef.current = setInterval(() => {
//         setTimer((prev) => prev + 1);
//         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
//       }, 1000);
//     } else {
//       clearInterval(timerIntervalRef.current);
//     }

//     return () => clearInterval(timerIntervalRef.current);
//   }, [isRecording]);

//   useEffect(() => {
//     (async () => {
//       await transcribeAudio();
//     })();
//   }, [combinedAudioUrl]);

//   // Helper function to format bytes
//   const formatBytes = (bytes) => {
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
//   };

//   // Setup combined audio stream (same as Recorder)
//   const setupCombinedAudioStream = async () => {
//     try {
//       const screenStream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//         audio: {
//           sampleRate: 16000,
//           channelCount: 1,
//         },
//       });
//       screenStreamRef.current = screenStream;

//       const micStream = await navigator.mediaDevices.getUserMedia({
//         audio: {
//           echoCancellation: true,
//           noiseSuppression: true,
//           autoGainControl: true,
//         },
//       });
//       micStreamRef.current = micStream;

//       const audioContext = new AudioContext({ sampleRate: 16000 });
//       const destination = audioContext.createMediaStreamDestination();

//       const systemSource = audioContext.createMediaStreamSource(
//         new MediaStream(screenStream.getAudioTracks())
//       );
//       const micSource = audioContext.createMediaStreamSource(
//         new MediaStream(micStream.getAudioTracks())
//       );

//       systemSource.connect(destination);
//       micSource.connect(destination);

//       const combinedAudioStream = destination.stream;
//       const combinedStream = new MediaStream([
//         ...screenStream.getVideoTracks(),
//         ...destination.stream.getTracks(),
//       ]);

//       combinedStreamRef.current = combinedStream;

//       return { combinedStream, combinedAudioStream };
//     } catch (error) {
//       console.error("Error setting up combined audio stream:", error);
//       throw error;
//     }
//   };

//   const startRecordingProcess = async () => {
//     setLoading(false);
//     setDone(false);

//     try {
//       mediaChunksRef.current = [];
//       audioChunksRef.current = [];
//       setTranscript([]);
//       setMeetingData(null);

//       const { combinedStream, combinedAudioStream } =
//         await setupCombinedAudioStream();

//       const videoOptions = {
//         mimeType: "video/webm;codecs=vp9,opus",
//         videoBitsPerSecond: 2500000, // 1Mbps for smaller files
//       };
//       const mediaRecorder = new MediaRecorder(combinedStream, videoOptions);
//       mediaRecorderRef.current = mediaRecorder;

//       mediaRecorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           mediaChunksRef.current.push(event.data);
//         }
//       };

//       const audioOptions = {
//         mimeType: "audio/webm;codecs=opus",
//         audioBitsPerSecond: 32000,
//       };
//       const audioRecorder = new MediaRecorder(
//         combinedAudioStream,
//         audioOptions
//       );
//       audioRecorderRef.current = audioRecorder;

//       audioRecorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           audioChunksRef.current.push(event.data);
//         }
//       };

//       mediaRecorder.onstop = () => {
//         const videoBlob = new Blob(mediaChunksRef.current, {
//           type: "video/webm",
//         });
//         const url = URL.createObjectURL(videoBlob);
//         setMediaUrl(url);
//       };

//       audioRecorder.onstop = () => {
//         const audioBlob = new Blob(audioChunksRef.current, {
//           type: "audio/webm",
//         });
//         const url = URL.createObjectURL(audioBlob);
//         setCombinedAudioUrl(url);
//       };

//       mediaRecorder.start();
//       audioRecorder.start();

//       setTimer(0);
//       setIsRecording(true);
//     } catch (error) {
//       console.error("Error starting recording: ", error);
//       setTranscriptionError("Failed to start recording. Please try again.");
//     }
//   };

//   const canStartRecording = () => {
//     if (!usageData) return true; // Allow if usage data not loaded yet
//     return usageData.status.canRecord && !loading;
//   };

//   const getRemainingTimeWithCurrentRecording = () => {
//     if (!usageData) return 0;
//     return Math.max(0, usageData.remaining.minutes - Math.ceil(timer / 60));
//   };

//   const transcribeAudio = async () => {
//     if (!combinedAudioUrl || !mediaUrl) return;

//     setIsTranscribing(true);
//     setTranscriptionError(null);
//     let startTime;

//     try {

//       const audioResponse = await fetch(combinedAudioUrl);

//       const audioBlob = await audioResponse.blob();

//       // Step 3: Detailed file analysis
//       const sizeBytes = audioBlob.size;
//       const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
//       const durationMinutes = timer / 60;
//       const actualBitrate = Math.round(
//         (sizeBytes * 8) / (durationMinutes * 60)
//       );

//       // Step 4: Check if the blob is actually valid
//       if (sizeBytes === 0) {
//         console.error("❌ ISSUE FOUND: Audio blob is empty!");
//         setTranscriptionError(
//           "Recording failed - audio file is empty. Try recording again."
//         );
//         return;
//       }

//       if (sizeBytes < 1000) {
//         console.error("❌ ISSUE FOUND: Audio blob suspiciously small!");
//         setTranscriptionError(
//           "Recording may have failed - file too small. Try recording again."
//         );
//         return;
//       }

//       // Step 5: Check for corruption by trying to create another blob
//       try {
//         const testBlob = new Blob([audioBlob], { type: "audio/webm" });
//       } catch (error) {
//         console.error("❌ ISSUE FOUND: Blob corruption detected!", error);
//         setTranscriptionError("Audio file corrupted. Try recording again.");
//         return;
//       }

//       // 🔍 DEBUG: Analyze file size
//       const fileAnalysis = debugFileSize(audioBlob, timer);

//       // Show analysis in UI
//       setTranscriptionError(
//         `File: ${fileAnalysis.sizeMB}MB, Bitrate: ~${fileAnalysis.actualBitrate}bps`
//       );

//       // Warn if file seems too large
//       if (!fileAnalysis.isUnderLimit) {
//         setTranscriptionError(
//           `⚠️ File too large: ${fileAnalysis.sizeMB}MB. Try reducing bitrate.`
//         );
//         return;
//       }


//       // Prepare form data with audio only (no video URL, no emails)
//       const formData = new FormData();
//       formData.append("audioFile", audioBlob, "audio-notes.webm");
//       formData.append("duration", timer.toString());
//       formData.append("type", "audio-notes");

//       setLoading(true);
//       startTime = Date.now();

//       const { data } = await axios.post(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: localStorage.getItem("token"),
//           },
//           timeout: 300000, // 5 minutes
//           onUploadProgress: (progressEvent) => {
//             const percent = Math.round(
//               (progressEvent.loaded * 100) / progressEvent.total
//             );
//             const uploadedMB = (progressEvent.loaded / (1024 * 1024)).toFixed(
//               2
//             );
//             setTranscriptionError(
//               `Uploading: ${percent}% (${uploadedMB}MB/${sizeMB}MB)`
//             );
//           },
//           // Add request transformation logging
//           transformRequest: [
//             function (data, headers) {
//               return data;
//             },
//           ],
//         }
//       );

//       const uploadTime = Date.now() - startTime;

//       // Set the meeting data and transcript
//       await fetchUsageStatus();
//       setMeetingData(data.meeting);
//       setTranscript(data.meeting.transcript);
//       setDone(true);

//     } catch (error) {
//       const uploadTime = Date.now() - startTime;
//       console.error("❌ UPLOAD FAILED AFTER", uploadTime, "ms");
//       console.error("   Error type:", error.constructor.name);
//       console.error("   Error message:", error.message);
//       console.error("   Error code:", error.code);
//       console.error("❌ Error:", error);

//       if (error.response) {
//         console.error("   Response status:", error.response.status);
//         console.error("   Response headers:", error.response.headers);
//         console.error("   Response data:", error.response.data);
//       }

//       if (error.request) {
//         console.error("   Request details:", {
//           timeout: error.request.timeout,
//           readyState: error.request.readyState,
//           status: error.request.status,
//         });
//       }

//       // Specific error analysis
//       if (error.response?.status === 413) {
//         console.error("🔍 413 ERROR ANALYSIS:");
//         console.error("   This should NOT happen with a", sizeMB, "MB file");
//         console.error("   Possible causes:");
//         console.error("   - Server limits not applied correctly");
//         console.error("   - Nginx config not reloaded");
//         console.error("   - Different server handling the request");
//         console.error("   - Request timeout being treated as size limit");
//         setTranscriptionError(
//           `Server rejected ${sizeMB}MB file (should be allowed). ` +
//           `Check server configuration or try a shorter recording.`
//         );
//       } else if (error.code === "ECONNABORTED") {
//         console.error("🔍 TIMEOUT ERROR ANALYSIS:");
//         console.error("   Upload timeout after", uploadTime, "ms");
//         console.error("   File size:", sizeMB, "MB should upload quickly");
//         console.error("   Possible causes:");
//         console.error("   - Slow network connection");
//         console.error("   - Server processing timeout");
//         console.error("   - Stuck request somewhere in the chain");
//         setTranscriptionError(
//           `Upload timeout (${uploadTime}ms). Try shorter recordings or check connection.`
//         );
//       } else {
//         setTranscriptionError(`Upload failed: ${error.message}`);
//       }

//       setTranscriptionError("Failed to process audio. Please try again.");
//     } finally {
//       setIsTranscribing(false);
//       setLoading(false);
//       setDone(true);
//     }
//   };

//   const debugFileSize = (audioBlob, recordingDuration) => {
//     const sizeBytes = audioBlob.size;
//     const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
//     const durationMinutes = recordingDuration / 60;

//     // Calculate actual bitrate
//     const actualBitrate = Math.round((sizeBytes * 8) / (durationMinutes * 60));

//     // Calculate expected sizes at different bitrates
//     const expectedSizes = {
//       "16kbps": ((16000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
//       "32kbps": ((32000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
//       "64kbps": ((64000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
//       "128kbps": ((128000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
//     };

//     Object.entries(expectedSizes).forEach(([bitrate, size]) => {
//       const indicator =
//         Math.abs(parseFloat(size) - parseFloat(sizeMB)) < 0.5
//           ? " ← CLOSE MATCH"
//           : "";
//     });
//     return {
//       sizeMB: parseFloat(sizeMB),
//       sizeBytes,
//       actualBitrate,
//       durationMinutes,
//       isUnderLimit: parseFloat(sizeMB) < 50,
//     };
//   };

//   const stopRecording = async () => {
//     try {
//       if (mediaRecorderRef.current) {
//         mediaRecorderRef.current.stop();
//       }

//       if (audioRecorderRef.current) {
//         audioRecorderRef.current.stop();
//       }

//       if (screenStreamRef.current) {
//         screenStreamRef.current.getTracks().forEach((track) => track.stop());
//       }

//       if (micStreamRef.current) {
//         micStreamRef.current.getTracks().forEach((track) => track.stop());
//       }

//       setIsRecording(false);
//     } catch (error) {
//       console.error("Error stopping recording:", error);
//     }
//   };

//   const resetRecording = () => {
//     setMediaUrl(null);
//     setCombinedAudioUrl(null);
//     setTimer(0);
//     setDone(false);
//     setTranscript([]);
//     setMeetingData(null);
//     setTranscriptionError(null);
//   };

//   const downloadRecordings = () => {
//     if (mediaUrl) {
//       const link = document.createElement("a");
//       link.href = mediaUrl;
//       link.download = `screen-recording-${new Date().toISOString()}.webm`;
//       link.click();
//     }

//     if (combinedAudioUrl) {
//       const link = document.createElement("a");
//       link.href = combinedAudioUrl;
//       link.download = `audio-notes-${new Date().toISOString()}.webm`;
//       link.click();
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 p-4">
//       {/* Usage Status Display */}
//       <section aria-live="polite" aria-label="Usage status">
//         {usageLoading ? (
//           <aside className="mb-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm" role="status">
//             <div className="flex items-center justify-center">
//               <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500" aria-hidden="true"></div>
//               <span className="ml-3 text-gray-600">Loading usage information...</span>
//             </div>
//           </aside>
//         ) : usageError ? (
//           <aside className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm" role="alert">
//             <div className="flex items-center">
//               <AlertCircle className="w-5 h-5 text-red-500 mr-3" aria-hidden="true" />
//               <span className="text-red-700">{usageError}</span>
//               <button 
//                 onClick={fetchUsageStatus}
//                 className="ml-auto text-red-600 hover:text-red-800 underline"
//                 type="button"
//                 aria-label="Retry loading usage information"
//               >
//                 Retry
//               </button>
//             </div>
//           </aside>
//         ) : usageData ? (
//           <aside className={`mb-8 rounded-2xl p-6 border shadow-sm ${
//             usageData.status.canRecord 
//               ? usageData.status.isNearLimit 
//                 ? 'bg-yellow-50 border-yellow-200'
//                 : 'bg-green-50 border-green-200'
//               : 'bg-red-50 border-red-200'
//           }`} role="complementary" aria-labelledby="usage-heading">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <Clock className={`w-6 h-6 ${
//                   usageData.status.canRecord 
//                     ? usageData.status.isNearLimit 
//                       ? 'text-yellow-600'
//                       : 'text-green-600'
//                     : 'text-red-600'
//                 }`} aria-hidden="true" />
//                 <div>
//                   <h2 id="usage-heading" className={`text-lg font-semibold ${
//                     usageData.status.canRecord 
//                       ? usageData.status.isNearLimit 
//                         ? 'text-yellow-800'
//                         : 'text-green-800'
//                       : 'text-red-800'
//                   }`}>
//                     Recording Time Remaining
//                   </h2>
//                   <p className={`text-sm ${
//                     usageData.status.canRecord 
//                       ? usageData.status.isNearLimit 
//                         ? 'text-yellow-700'
//                         : 'text-green-700'
//                       : 'text-red-700'
//                   }`}>
//                     {usageData.status.canRecord 
//                       ? `${isRecording ? getRemainingTimeWithCurrentRecording() : usageData.remaining.minutes} minutes left`
//                       : 'You have reached your 100-minute limit'
//                     }
//                   </p>
//                 </div>
//               </div>

//               <div className="text-right">
//                 <div className={`text-2xl font-bold ${
//                   usageData.status.canRecord 
//                     ? usageData.status.isNearLimit 
//                       ? 'text-yellow-800'
//                       : 'text-green-800'
//                     : 'text-red-800'
//                 }`}>
//                   {isRecording ? getRemainingTimeWithCurrentRecording() : usageData.remaining.minutes}min
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   {usageData.totalUsed.minutes} / {usageData.limits.maxMinutes} used
//                 </div>

//                 {/* Progress Bar */}
//                 <div 
//                   className="w-32 bg-gray-200 rounded-full h-2 mt-2"
//                   role="progressbar"
//                   aria-valuenow={usageData.status.percentageUsed}
//                   aria-valuemin={0}
//                   aria-valuemax={100}
//                   aria-label={`${usageData.status.percentageUsed}% of recording time used`}
//                 >
//                   <div 
//                     className={`h-2 rounded-full transition-all duration-300 ${
//                       usageData.status.percentageUsed >= 90 
//                         ? 'bg-red-500'
//                         : usageData.status.percentageUsed >= 80
//                         ? 'bg-yellow-500'
//                         : 'bg-green-500'
//                     }`}
//                     style={{ width: `${Math.min(usageData.status.percentageUsed, 100)}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             {/* Limit reached warning */}
//             {!usageData.status.canRecord && (
//               <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg" role="alert">
//                 <div className="flex items-start">
//                   <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" aria-hidden="true" />
//                   <div>
//                     <p className="text-red-800 font-medium">Recording limit reached</p>
//                     <p className="text-red-700 text-sm mt-1">
//                       You've used all 100 minutes of your recording time. Upgrade to a paid plan to continue recording meetings.
//                     </p>
//                     <button 
//                       className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
//                       type="button"
//                       aria-label="Upgrade to paid plan"
//                     >
//                       Upgrade Plan
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Near limit warning */}
//             {usageData.status.canRecord && usageData.status.isNearLimit && (
//               <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg" role="alert">
//                 <div className="flex items-start">
//                   <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" aria-hidden="true" />
//                   <div>
//                     <p className="text-yellow-800 font-medium">Almost at your limit</p>
//                     <p className="text-yellow-700 text-sm mt-1">
//                       You have less than 10 minutes remaining. Consider upgrading to avoid interruption.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </aside>
//         ) : null}
//       </section>

//       <div className="max-w-6xl mx-auto flex gap-6">
//         {/* Left Panel - Audio Notes */}
//         <section className="flex-1 bg-white rounded-2xl p-6 shadow-sm" aria-labelledby="audio-transcripts-heading">
//           <header className="mb-6">
//             <h1 id="audio-transcripts-heading" className="text-3xl font-light text-purple-400">
//               Audio Transcripts
//             </h1>
//           </header>

//           {/* Tab Selector */}
//           <nav className="flex mb-6 border-b border-gray-200" role="tablist" aria-label="Audio transcript options">
//             <button
//               className={`px-4 py-2 font-medium ${activeTab === 'record' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
//               onClick={() => setActiveTab('record')}
//               type="button"
//               role="tab"
//               aria-selected={activeTab === 'record'}
//               aria-controls="record-panel"
//               id="record-tab"
//             >
//               <div className="flex items-center gap-2">
//                 <Mic className="w-4 h-4" aria-hidden="true" />
//                 Record Audio
//               </div>
//             </button>
//             <button
//               className={`px-4 py-2 font-medium ${activeTab === 'upload' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
//               onClick={() => setActiveTab('upload')}
//               type="button"
//               role="tab"
//               aria-selected={activeTab === 'upload'}
//               aria-controls="upload-panel"
//               id="upload-tab"
//             >
//               <div className="flex items-center gap-2">
//                 <Upload className="w-4 h-4" aria-hidden="true" />
//                 Upload Audio
//               </div>
//             </button>
//           </nav>

//           {/* Recording Tab Content */}
//           {activeTab === 'record' && (
//             <div id="record-panel" role="tabpanel" aria-labelledby="record-tab">
//               {/* Recording Status */}
//               {isRecording && (
//                 <aside className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm" role="status" aria-live="polite">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div className="flex items-center gap-2">
//                         <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></div>
//                         <span className="text-red-700 font-medium">Recording...</span>
//                       </div>
//                       <div className="text-2xl font-bold text-red-700" aria-live="polite" aria-label={`Recording time: ${formatTime(timer)}`}>
//                         {formatTime(timer)}
//                       </div>
//                     </div>
//                     {/* Live waveform animation */}
//                     <div className="flex items-center h-8 gap-1" aria-hidden="true">
//                       {waveform.map((height, index) => (
//                         <motion.div
//                           key={index}
//                           className="w-1 bg-red-500 rounded-full"
//                           animate={{ height }}
//                           transition={{ duration: 0.2 }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </aside>
//               )}

//               {/* Audio Controls */}
//               <div className="bg-purple-50 rounded-xl p-4" role="region" aria-labelledby="audio-controls-heading">
//                 <h2 id="audio-controls-heading" className="sr-only">Audio Recording Controls</h2>
//                 {!isRecording && !mediaUrl ? (
//                   <button
//                     onClick={startRecordingProcess}
//                     disabled={loading || !canStartRecording()}
//                     className="w-full flex cursor-pointer items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
//                     type="button"
//                     aria-label="Start audio recording"
//                   >
//                     <Mic className="w-5 h-5" aria-hidden="true" />
//                     Start Recording
//                   </button>
//                 ) : (
//                   <div className="flex items-center gap-4" role="group" aria-label="Recording controls">
//                     {mediaUrl ? (
//                       <>
//                         <button
//                           onClick={() => {
//                             const audio = new Audio(combinedAudioUrl);
//                             audio.play();
//                           }}
//                           className="w-8 h-8 flex items-center justify-center"
//                           type="button"
//                           aria-label="Play recorded audio"
//                         >
//                           <Play className="w-5 h-5 text-gray-700" aria-hidden="true" />
//                         </button>
//                         <button
//                           onClick={resetRecording}
//                           className="w-6 h-6 flex items-center justify-center"
//                           type="button"
//                           aria-label="Reset recording"
//                         >
//                           <Square className="w-4 h-4 text-gray-700 fill-current" aria-hidden="true" />
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button
//                           onClick={stopRecording}
//                           className="w-8 h-8 flex items-center justify-center"
//                           type="button"
//                           aria-label="Stop recording"
//                         >
//                           <Square className="w-5 h-5 text-gray-700 fill-current" aria-hidden="true" />
//                         </button>
//                       </>
//                     )}

//                     <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center" aria-hidden="true">
//                       <div className="w-3 h-3 rounded-full bg-white"></div>
//                     </div>

//                     <div className="flex-1 mx-4">
//                       <div 
//                         className="bg-purple-300 h-1 rounded-full relative"
//                         role="progressbar"
//                         aria-valuenow={mediaUrl ? 100 : (timer % 60) / 60 * 100}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                         aria-label="Recording progress"
//                       >
//                         <div
//                           className="absolute left-0 top-0 h-full bg-purple-500 rounded-full"
//                           style={{ width: mediaUrl ? '100%' : `${(timer % 60) / 60 * 100}%` }}
//                         ></div>
//                       </div>
//                     </div>

//                     <span className="text-xs text-gray-500 min-w-[20px]" aria-live="polite">
//                       {formatTime(timer)}
//                     </span>

//                     <button
//                       onClick={downloadRecordings}
//                       disabled={!mediaUrl}
//                       className="w-6 h-6 flex items-center justify-center"
//                       type="button"
//                       aria-label="Download recording"
//                     >
//                       <Edit className="w-4 h-4 text-gray-700" aria-hidden="true" />
//                     </button>
//                     <button 
//                       className="w-6 h-6 flex items-center justify-center"
//                       type="button"
//                       aria-label="Add comment"
//                     >
//                       <MessageSquare className="w-4 h-4 text-gray-700" aria-hidden="true" />
//                     </button>
//                     <button 
//                       className="w-6 h-6 flex items-center justify-center"
//                       type="button"
//                       aria-label="Share recording"
//                     >
//                       <Share className="w-4 h-4 text-gray-700" aria-hidden="true" />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Upload Tab Content */}
//           {activeTab === 'upload' && (
//             <div id="upload-panel" role="tabpanel" aria-labelledby="upload-tab">
//               <div className="mb-6">
//                 <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
//                   <div className="flex flex-col items-center justify-center gap-4">
//                     <FileAudio className="w-10 h-10 text-gray-400" aria-hidden="true" />
//                     <p className="text-gray-600">
//                       {selectedFile 
//                         ? selectedFile.name 
//                         : "Drag & drop an audio file here, or click to browse"}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Supported formats: MP3, WAV, WEBM, OGG (max 50MB)
//                     </p>
//                     <button
//                       onClick={() => fileInputRef.current.click()}
//                       className="mt-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
//                       type="button"
//                       aria-label="Select audio file"
//                     >
//                       Select File
//                     </button>
//                     <input
//                       type="file"
//                       ref={fileInputRef}
//                       onChange={handleFileChange}
//                       accept="audio/*"
//                       className="hidden"
//                       aria-label="Audio file input"
//                     />
//                   </div>
//                 </div>

//                 {selectedFile && (
//                   <div className="mt-4 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <FileAudio className="w-5 h-5 text-purple-500" aria-hidden="true" />
//                         <div>
//                           <p className="font-medium text-gray-800">{selectedFile.name}</p>
//                           <p className="text-sm text-gray-500">
//                             {formatBytes(selectedFile.size)} • {formatTime(fileDuration)}
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => setSelectedFile(null)}
//                         className="text-gray-400 hover:text-gray-600"
//                         type="button"
//                         aria-label="Remove selected file"
//                       >
//                         ×
//                       </button>
//                     </div>

//                     {uploadProgress > 0 && uploadProgress < 100 && (
//                       <div className="mb-4">
//                         <div 
//                           className="w-full bg-gray-200 rounded-full h-2"
//                           role="progressbar"
//                           aria-valuenow={uploadProgress}
//                           aria-valuemin={0}
//                           aria-valuemax={100}
//                           aria-label={`Upload progress: ${uploadProgress}%`}
//                         >
//                           <div
//                             className="bg-purple-500 h-2 rounded-full"
//                             style={{ width: `${uploadProgress}%` }}
//                           ></div>
//                         </div>
//                         <p className="text-xs text-gray-500 mt-1 text-right" aria-live="polite">
//                           Uploading... {uploadProgress}%
//                         </p>
//                       </div>
//                     )}

//                     <button
//                       onClick={handleFileUpload}
//                       disabled={loading || isTranscribing}
//                       className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
//                       type="button"
//                       aria-label="Upload and process audio file"
//                     >
//                       {loading || isTranscribing ? (
//                         <>
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></div>
//                           Processing...
//                         </>
//                       ) : (
//                         <>
//                           <Upload className="w-5 h-5" aria-hidden="true" />
//                           Upload & Process
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Transcript Display (shared between both tabs) */}
//           <section aria-labelledby="transcript-heading">
//             {transcript.length > 0 ? (
//               <div className="mb-8">
//                 <h2 id="transcript-heading" className="text-lg font-medium text-gray-700 mb-4">Transcript</h2>
//                 <div className="max-h-96 overflow-y-auto bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4" role="log" aria-label="Audio transcript">
//                   {transcript.map((item, index) => (
//                     <article key={index} className="flex items-start gap-3">
//                       <figure className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium" aria-hidden="true">
//                         {item.speaker.charAt(0).toUpperCase()}
//                       </figure>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <h3 className="font-medium text-gray-900">
//                             {item.speaker}
//                           </h3>
//                         </div>
//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           {item.text}
//                         </p>
//                       </div>
//                     </article>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
//                 <p className="text-gray-500 text-center">
//                   {activeTab === 'record'
//                     ? (isRecording
//                         ? "Recording in progress... Transcript will appear here after recording is processed."
//                         : "Start recording to create audio transcript")
//                     : (selectedFile
//                         ? "Upload and process your audio file to see the transcript here"
//                         : "Upload an audio file to create notes")}
//                 </p>
//               </div>
//             )}
//           </section>

//           {/* Processing Status (shared between both tabs) */}
//           <section aria-live="polite" aria-label="Processing status">
//             {(loading || isTranscribing) && (
//               <div className="mt-4 text-center" role="status">
//                 <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 inline-block" aria-hidden="true"></div>
//                 <p className="text-gray-600 mt-2">
//                   {isTranscribing ? "Processing your audio transcript..." : "Uploading..."}
//                 </p>
//               </div>
//             )}

//             {done && !loading && !isTranscribing && (
//               <div className="mt-4 p-3 bg-green-50 rounded-lg text-green-700 text-center" role="alert">
//                 Audio transcript processed successfully!
//               </div>
//             )}

//             {transcriptionError && !done && (
//               <div className="mt-4 p-3 bg-red-50 rounded-lg text-red-700 text-center" role="alert">
//                 {transcriptionError}
//               </div>
//             )}
//           </section>
//         </section>

//         {/* Right Panel - Important Notes */}
//         <aside className="w-80 bg-white rounded-2xl p-6 shadow-sm" aria-labelledby="audio-transcript-info-heading">
//           <header className="flex items-center gap-2">
//             <button 
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-4 rounded-xl mb-6"
//               type="button"
//               aria-label="Audio transcript options"
//             >
//               Audio Transcript
//             </button>
//           </header>

//           {meetingData?.title && (
//             <button 
//               className="w-full text-xl text-pink-500 font-medium py-3 px-4 rounded-xl mb-6"
//               type="button"
//               aria-label={`View meeting: ${meetingData.title}`}
//             >
//               {meetingData.title}
//             </button>
//           )}

//           <div 
//             onClick={() => meetingData?._id && navigate(`/summaries/${meetingData._id}`)} 
//             className="space-y-3 md:space-y-4 cursor-pointer"
//             role="button"
//             tabIndex={0}
//             aria-label="View meeting summary details"
//           >
//             <article className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
//               <header className="flex items-center space-x-2 mb-3 md:mb-4">
//                 <MessageSquare size={16} className="text-gray-500 md:w-5 md:h-5" aria-hidden="true" />
//                 <h2 id="audio-transcript-info-heading" className="text-base md:text-lg font-bold text-gray-700">
//                   Audio Transcript
//                 </h2>
//               </header>

//               <div className="space-y-3 md:space-y-4">
//                 {meetingData ? (
//                   <section className="mb-6" aria-labelledby="agenda-section-heading">
//                     <h3 id="agenda-section-heading" className="text-lg font-medium text-gray-700 mb-3">Agenda</h3>
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       {meetingData.agenda && meetingData.agenda.length > 0 ? (
//                         <ul className="space-y-2" role="list">
//                           {meetingData.agenda.map((item, index) => (
//                             <li key={index} className="text-sm text-gray-700 flex items-start" role="listitem">
//                               <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       ) : (
//                         <p className="text-sm text-gray-500 italic">No agenda available</p>
//                       )}
//                     </div>
//                   </section>
//                 ) : (
//                   <p className="text-xs md:text-sm text-gray-500">
//                     {activeTab === 'record' ? "Record audio transcript" : "Upload an audio file"} to see agenda here
//                   </p>
//                 )}
//               </div>
//             </article>
//           </div>
//         </aside>
//       </div>
//     </main>
//   );
// }








import React, { useEffect, useState, useRef } from "react";
import { Play, Pause, Square, Edit, MessageSquare, Share, Mic, Clock, Upload, FileAudio, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useApp } from "../components/context/AppContext";
import { motion } from "framer-motion";

export default function AudioNotesPage() {
  const navigate = useNavigate();
  const { setLoading, loading, user } = useApp();
  const fileInputRef = useRef(null);

  // Recording states
  const [isRecording, setIsRecording] = useState(false);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [combinedAudioUrl, setCombinedAudioUrl] = useState(null);
  const [timer, setTimer] = useState(0);
  const [waveform, setWaveform] = useState(Array(20).fill(20));
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcriptionError, setTranscriptionError] = useState(null);
  const [done, setDone] = useState(false);
  const [activeTab, setActiveTab] = useState("record"); // 'record' or 'upload'
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileDuration, setFileDuration] = useState(0);

  const mediaRecorderRef = useRef(null);
  const audioRecorderRef = useRef(null);
  const mediaChunksRef = useRef([]);
  const audioChunksRef = useRef([]);
  const timerIntervalRef = useRef(null);
  const screenStreamRef = useRef(null);
  const micStreamRef = useRef(null);
  const combinedStreamRef = useRef(null);

  // Live transcription states (copied from Recorder)
  const [liveTranscripts, setLiveTranscripts] = useState([]);
  const deepgramSocketRef = useRef(null);

  const [usageData, setUsageData] = useState(null);
  const [usageLoading, setUsageLoading] = useState(true);
  const [usageError, setUsageError] = useState(null);

  // Transcript data state
  const [transcript, setTranscript] = useState([]);
  const [meetingData, setMeetingData] = useState(null);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Helper functions for live transcription (copied from Recorder)
  const getLanguageName = (code) => {
    const languages = {
      en: "English",
      es: "Spanish",
      fr: "French",
      de: "German",
      it: "Italian",
      pt: "Portuguese",
      zh: "Chinese",
      ja: "Japanese",
      ko: "Korean",
      ar: "Arabic",
      hi: "Hindi",
      ru: "Russian",
      nl: "Dutch",
      sv: "Swedish",
      no: "Norwegian",
      da: "Danish",
      fi: "Finnish",
      pl: "Polish",
      tr: "Turkish",
      th: "Thai",
      vi: "Vietnamese",
      cs: "Czech",
      hu: "Hungarian",
      ro: "Romanian",
      bg: "Bulgarian",
      hr: "Croatian",
      sk: "Slovak",
      sl: "Slovenian",
      et: "Estonian",
      lv: "Latvian",
      lt: "Lithuanian",
      mt: "Maltese",
      ga: "Irish",
      cy: "Welsh",
      eu: "Basque",
      ca: "Catalan",
      gl: "Galician",
      is: "Icelandic",
      mk: "Macedonian",
      sq: "Albanian",
      sr: "Serbian",
      bs: "Bosnian",
      me: "Montenegrin",
      uk: "Ukrainian",
      be: "Belarusian",
      he: "Hebrew",
      fa: "Persian",
      ur: "Urdu",
      bn: "Bengali",
      ta: "Tamil",
      te: "Telugu",
      ml: "Malayalam",
      kn: "Kannada",
      gu: "Gujarati",
      pa: "Punjabi",
      ne: "Nepali",
      si: "Sinhala",
      my: "Burmese",
      km: "Khmer",
      lo: "Lao",
      ka: "Georgian",
      am: "Amharic",
      sw: "Swahili",
      zu: "Zulu",
      af: "Afrikaans",
      xh: "Xhosa",
      ig: "Igbo",
      yo: "Yoruba",
      ha: "Hausa",
    };
    return languages[code] || code.toUpperCase();
  };

  // Get speaker color based on speaker name
  const getSpeakerColor = (speaker) => {
    const colors = [
      "bg-purple-500",
      "bg-pink-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-indigo-500",
      "bg-orange-500"
    ];

    // Simple hash function to consistently assign colors
    let hash = 0;
    for (let i = 0; i < speaker.length; i++) {
      hash = speaker.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Get speaker initials
  const getSpeakerInitials = (speaker) => {
    if (speaker === "Unknown") return "?";
    if (speaker.startsWith("Speaker")) {
      return speaker.replace("Speaker ", "S");
    }
    return speaker.split(" ").map(name => name[0]).join("").toUpperCase().slice(0, 2);
  };

  // Setup live transcription with Deepgram (copied from Recorder)
  const setupLiveTranscription = async (combinedAudioStream) => {
    try {
      const DEEPGRAM_API_KEY =
        import.meta.env.VITE_APP_DEEPGRAM_API_KEY || "YOUR_DEEPGRAM_API_KEY";
      const socket = new WebSocket("wss://api.deepgram.com/v1/listen?model=nova-3-general&language=multi", [
        "token",
        DEEPGRAM_API_KEY,
      ]);

      deepgramSocketRef.current = socket;

      socket.onopen = () => {
        console.log("🎙️ Deepgram connection opened for live transcription");

        socket.send(
          JSON.stringify({
            type: "ParametersChange",
            parameters: {
              model: "nova-3",
              interim_results: true,
              diarize: true,
              punctuate: true,
              endpointing: 100,
              utterance_end_ms: 1000,
              smart_format: true,
              detect_language: true,
              language: null,
              multichannel: false,
              alternatives: 1,
            },
          })
        );

        const mediaRecorder = new MediaRecorder(combinedAudioStream, {
          mimeType: "audio/webm;codecs=opus",
          audioBitsPerSecond: 16000,
        });

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
            socket.send(event.data);
          }
        };

        mediaRecorder.start(250);
      };

      socket.onmessage = async (message) => {
        const data = JSON.parse(message.data);

        if (data.type === "Results") {
          if (data.channel?.alternatives?.[0]) {
            const transcript = data.channel.alternatives[0];

            if (!data.is_final) return;

            const detectedLanguage = data.language || "en";
            const languageConfidence = data.language_confidence || 0;
            const languageName = getLanguageName(detectedLanguage);

            const messageId = Date.now() + Math.random();
            const originalText = transcript.transcript || "";

            const newTranscript = {
              text: originalText,
              originalText: originalText,
              speaker: transcript.words?.[0]?.speaker
                ? `Speaker ${transcript.words[0].speaker}`
                : "Unknown",
              isFinal: data.is_final,
              timestamp: new Date().toISOString(),
              language: detectedLanguage,
              languageName: languageName,
              confidence: languageConfidence,
              languageConfidenceScore: Math.round(languageConfidence * 100),
              id: messageId,
              isTranslated: false,
              isTranslating: false,
            };

            // Add the transcript
            setLiveTranscripts((prev) => [...prev, newTranscript]);
          }
        }
      };

      socket.onerror = (error) => {
        console.error("Deepgram WebSocket Error:", error);
        setTranscriptionError("Error connecting to transcription service");
      };

      socket.onclose = () => {
        console.log("🎙️ Deepgram connection closed");
      };

    } catch (error) {
      console.error("Error setting up live transcription:", error);
      setTranscriptionError("Failed to start live transcription");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['audio/mpeg', 'audio/wav', 'audio/webm', 'audio/ogg'];
    if (!validTypes.includes(file.type)) {
      setTranscriptionError("Invalid file type. Please upload an audio file (MP3, WAV, WEBM, OGG).");
      return;
    }

    // Check file size (limit to 50MB)
    if (file.size > 50 * 1024 * 1024) {
      setTranscriptionError("File too large. Maximum size is 50MB.");
      return;
    }

    setSelectedFile(file);
    setTranscriptionError(null);

    // Calculate duration for the file
    const audio = new Audio();
    audio.src = URL.createObjectURL(file);
    audio.onloadedmetadata = () => {
      setFileDuration(Math.round(audio.duration));
    };
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setTranscriptionError("Please select an audio file first.");
      return;
    }

    setLoading(true);
    setIsTranscribing(true);
    setTranscriptionError(null);
    setDone(false);
    setTimer(fileDuration);

    const formData = new FormData();
    formData.append("audioFile", selectedFile);
    formData.append("duration", fileDuration.toString());
    formData.append("type", "audio-notes");

    try {
      const { data } = await axios.post(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        }
      );

      await fetchUsageStatus();
      setMeetingData(data.meeting);
      setTranscript(data.meeting.transcript);
      setDone(true);
    } catch (error) {
      console.error("Upload failed:", error);
      setTranscriptionError("Failed to process audio. Please try again.");
    } finally {
      setLoading(false);
      setIsTranscribing(false);
    }
  };

  useEffect(() => {
    fetchUsageStatus();
  }, []);

  const fetchUsageStatus = async () => {
    try {
      setUsageLoading(true);
      setUsageError(null);

      const response = await axios.get(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/users/usage-status",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response.data.success) {
        setUsageData(response.data.usage);
      }
    } catch (error) {
      console.error("❌ Failed to fetch usage status:", error);
      setUsageError("Failed to load usage information");
    } finally {
      setUsageLoading(false);
    }
  };

  useEffect(() => {
    if (isRecording) {
      timerIntervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
        setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
      }, 1000);
    } else {
      clearInterval(timerIntervalRef.current);
    }

    return () => clearInterval(timerIntervalRef.current);
  }, [isRecording]);

  useEffect(() => {
    (async () => {
      await transcribeAudio();
    })();
  }, [combinedAudioUrl]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (
        deepgramSocketRef.current &&
        deepgramSocketRef.current.readyState === WebSocket.OPEN
      ) {
        deepgramSocketRef.current.close();
      }
    };
  }, []);

  // Helper function to format bytes
  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Setup combined audio stream (same as Recorder)
  const setupCombinedAudioStream = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: {
          sampleRate: 16000,
          channelCount: 1,
        },
      });
      screenStreamRef.current = screenStream;

      const micStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      micStreamRef.current = micStream;

      const audioContext = new AudioContext({ sampleRate: 16000 });
      const destination = audioContext.createMediaStreamDestination();

      const systemSource = audioContext.createMediaStreamSource(
        new MediaStream(screenStream.getAudioTracks())
      );
      const micSource = audioContext.createMediaStreamSource(
        new MediaStream(micStream.getAudioTracks())
      );

      systemSource.connect(destination);
      micSource.connect(destination);

      const combinedAudioStream = destination.stream;
      const combinedStream = new MediaStream([
        ...screenStream.getVideoTracks(),
        ...destination.stream.getTracks(),
      ]);

      combinedStreamRef.current = combinedStream;

      return { combinedStream, combinedAudioStream };
    } catch (error) {
      console.error("Error setting up combined audio stream:", error);
      throw error;
    }
  };

  const startRecordingProcess = async () => {
    setLoading(false);
    setDone(false);
    setLiveTranscripts([]); // Reset live transcripts when starting new recording

    try {
      mediaChunksRef.current = [];
      audioChunksRef.current = [];
      setTranscript([]);
      setMeetingData(null);

      const { combinedStream, combinedAudioStream } =
        await setupCombinedAudioStream();

      // Setup live transcription with the combined audio stream
      await setupLiveTranscription(combinedAudioStream);

      const videoOptions = {
        mimeType: "video/webm;codecs=vp9,opus",
        videoBitsPerSecond: 2500000, // 1Mbps for smaller files
      };
      const mediaRecorder = new MediaRecorder(combinedStream, videoOptions);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          mediaChunksRef.current.push(event.data);
        }
      };

      const audioOptions = {
        mimeType: "audio/webm;codecs=opus",
        audioBitsPerSecond: 32000,
      };
      const audioRecorder = new MediaRecorder(
        combinedAudioStream,
        audioOptions
      );
      audioRecorderRef.current = audioRecorder;

      audioRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const videoBlob = new Blob(mediaChunksRef.current, {
          type: "video/webm",
        });
        const url = URL.createObjectURL(videoBlob);
        setMediaUrl(url);
      };

      audioRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const url = URL.createObjectURL(audioBlob);
        setCombinedAudioUrl(url);
      };

      mediaRecorder.start();
      audioRecorder.start();

      setTimer(0);
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording: ", error);
      setTranscriptionError("Failed to start recording. Please try again.");
    }
  };

  const canStartRecording = () => {
    if (!usageData) return true; // Allow if usage data not loaded yet
    return usageData.status.canRecord && !loading;
  };

  const getRemainingTimeWithCurrentRecording = () => {
    if (!usageData) return 0;
    return Math.max(0, usageData.remaining.minutes - Math.ceil(timer / 60));
  };

  // const transcribeAudio = async () => {
  //   if (!combinedAudioUrl || !mediaUrl) return;

  //   setIsTranscribing(true);
  //   setTranscriptionError(null);
  //   let startTime;

  //   try {

  //     const audioResponse = await fetch(combinedAudioUrl);

  //     const audioBlob = await audioResponse.blob();

  //     // Step 3: Detailed file analysis
  //     const sizeBytes = audioBlob.size;
  //     const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
  //     const durationMinutes = timer / 60;
  //     const actualBitrate = Math.round(
  //       (sizeBytes * 8) / (durationMinutes * 60)
  //     );

  //     // Step 4: Check if the blob is actually valid
  //     if (sizeBytes === 0) {
  //       console.error("❌ ISSUE FOUND: Audio blob is empty!");
  //       setTranscriptionError(
  //         "Recording failed - audio file is empty. Try recording again."
  //       );
  //       return;
  //     }

  //     if (sizeBytes < 1000) {
  //       console.error("❌ ISSUE FOUND: Audio blob suspiciously small!");
  //       setTranscriptionError(
  //         "Recording may have failed - file too small. Try recording again."
  //       );
  //       return;
  //     }

  //     // Step 5: Check for corruption by trying to create another blob
  //     try {
  //       const testBlob = new Blob([audioBlob], { type: "audio/webm" });
  //     } catch (error) {
  //       console.error("❌ ISSUE FOUND: Blob corruption detected!", error);
  //       setTranscriptionError("Audio file corrupted. Try recording again.");
  //       return;
  //     }

  //     // 🔍 DEBUG: Analyze file size
  //     const fileAnalysis = debugFileSize(audioBlob, timer);

  //     // Show analysis in UI
  //     setTranscriptionError(
  //       `File: ${fileAnalysis.sizeMB}MB, Bitrate: ~${fileAnalysis.actualBitrate}bps`
  //     );

  //     // Warn if file seems too large
  //     if (!fileAnalysis.isUnderLimit) {
  //       setTranscriptionError(
  //         `⚠️ File too large: ${fileAnalysis.sizeMB}MB. Try reducing bitrate.`
  //       );
  //       return;
  //     }


  //     // Prepare form data with audio only (no video URL, no emails)
  //     const formData = new FormData();
  //     formData.append("audioFile", audioBlob, "audio-notes.webm");
  //     formData.append("duration", timer.toString());
  //     formData.append("type", "audio-notes");

  //     setLoading(true);
  //     startTime = Date.now();

  //     const { data } = await axios.post(
  //       "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: localStorage.getItem("token"),
  //         },
  //         timeout: 300000, // 5 minutes
  //         onUploadProgress: (progressEvent) => {
  //           const percent = Math.round(
  //             (progressEvent.loaded * 100) / progressEvent.total
  //           );
  //           const uploadedMB = (progressEvent.loaded / (1024 * 1024)).toFixed(
  //             2
  //           );
  //           setTranscriptionError(
  //             `Uploading: ${percent}% (${uploadedMB}MB/${sizeMB}MB)`
  //           );
  //         },
  //         // Add request transformation logging
  //         transformRequest: [
  //           function (data, headers) {
  //             return data;
  //           },
  //         ],
  //       }
  //     );

  //     const uploadTime = Date.now() - startTime;

  //     // Set the meeting data and transcript
  //     await fetchUsageStatus();
  //     setMeetingData(data.meeting);
  //     setTranscript(data.meeting.transcript);
  //     setDone(true);

  //   } catch (error) {
  //     const uploadTime = Date.now() - startTime;
  //     console.error("❌ UPLOAD FAILED AFTER", uploadTime, "ms");
  //     console.error("   Error type:", error.constructor.name);
  //     console.error("   Error message:", error.message);
  //     console.error("   Error code:", error.code);
  //     console.error("❌ Error:", error);

  //     if (error.response) {
  //       console.error("   Response status:", error.response.status);
  //       console.error("   Response headers:", error.response.headers);
  //       console.error("   Response data:", error.response.data);
  //     }

  //     if (error.request) {
  //       console.error("   Request details:", {
  //         timeout: error.request.timeout,
  //         readyState: error.request.readyState,
  //         status: error.request.status,
  //       });
  //     }

  //     // Specific error analysis
  //     if (error.response?.status === 413) {
  //       console.error("🔍 413 ERROR ANALYSIS:");
  //       console.error("   This should NOT happen with a", sizeMB, "MB file");
  //       console.error("   Possible causes:");
  //       console.error("   - Server limits not applied correctly");
  //       console.error("   - Nginx config not reloaded");
  //       console.error("   - Different server handling the request");
  //       console.error("   - Request timeout being treated as size limit");
  //       setTranscriptionError(
  //         `Server rejected ${sizeMB}MB file (should be allowed). ` +
  //         `Check server configuration or try a shorter recording.`
  //       );
  //     } else if (error.code === "ECONNABORTED") {
  //       console.error("🔍 TIMEOUT ERROR ANALYSIS:");
  //       console.error("   Upload timeout after", uploadTime, "ms");
  //       console.error("   File size:", sizeMB, "MB should upload quickly");
  //       console.error("   Possible causes:");
  //       console.error("   - Slow network connection");
  //       console.error("   - Server processing timeout");
  //       console.error("   - Stuck request somewhere in the chain");
  //       setTranscriptionError(
  //         `Upload timeout (${uploadTime}ms). Try shorter recordings or check connection.`
  //       );
  //     } else {
  //       setTranscriptionError(`Upload failed: ${error.message}`);
  //     }

  //     setTranscriptionError("Failed to process audio. Please try again.");
  //   } finally {
  //     setIsTranscribing(false);
  //     setLoading(false);
  //     setDone(true);
  //   }
  // };

  const transcribeAudio = async () => {
    if (!combinedAudioUrl || !mediaUrl) return;

    setIsTranscribing(true);
    setTranscriptionError(null);
    let startTime;

    try {
      const audioResponse = await fetch(combinedAudioUrl);
      const audioBlob = await audioResponse.blob();

      // Step 3: Detailed file analysis
      const sizeBytes = audioBlob.size;
      const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
      const durationMinutes = timer / 60;
      const actualBitrate = Math.round((sizeBytes * 8) / (durationMinutes * 60));

      // Step 4: Check if the blob is actually valid
      if (sizeBytes === 0) {
        console.error("❌ ISSUE FOUND: Audio blob is empty!");
        setTranscriptionError(
          "Recording failed - audio file is empty. Try recording again."
        );
        return;
      }

      if (sizeBytes < 1000) {
        console.error("❌ ISSUE FOUND: Audio blob suspiciously small!");
        setTranscriptionError(
          "Recording may have failed - file too small. Try recording again."
        );
        return;
      }

      // Step 5: Check for corruption by trying to create another blob
      try {
        const testBlob = new Blob([audioBlob], { type: "audio/webm" });
      } catch (error) {
        console.error("❌ ISSUE FOUND: Blob corruption detected!", error);
        setTranscriptionError("Audio file corrupted. Try recording again.");
        return;
      }

      // 🔍 DEBUG: Analyze file size
      const fileAnalysis = debugFileSize(audioBlob, timer);

      // Show analysis in UI
      setTranscriptionError(
        `File: ${fileAnalysis.sizeMB}MB, Bitrate: ~${fileAnalysis.actualBitrate}bps`
      );

      // Warn if file seems too large
      if (!fileAnalysis.isUnderLimit) {
        setTranscriptionError(
          `⚠ File too large: ${fileAnalysis.sizeMB}MB. Try reducing bitrate.`
        );
        return;
      }

      // Prepare form data with audio only (no video URL, no emails)
      const formData = new FormData();
      formData.append("audioFile", audioBlob, "audio-notes.webm");
      formData.append("duration", timer.toString());

      // // **NEW: Add live transcripts if available**
      // if (liveTranscripts && liveTranscripts.length > 0) {
      //   formData.append("liveTranscripts", JSON.stringify(liveTranscripts));
      //   formData.append("type", "audio-notes-with-live-transcripts");
      //   console.log(`🎙 [AudioNotes] Using ${liveTranscripts.length} live transcript items from Deepgram`);
      // } else {
      formData.append("type", "audio-notes");
      // console.log("🎙 [AudioNotes] No live transcripts available, will use Whisper transcription");
      // }

      setLoading(true);
      startTime = Date.now();

      const { data } = await axios.post(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
          timeout: 300000, // 5 minutes
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            const uploadedMB = (progressEvent.loaded / (1024 * 1024)).toFixed(2);
            setTranscriptionError(
              `Uploading: ${percent}% (${uploadedMB}MB/${sizeMB}MB)`
            );
          },
        }
      );

      const uploadTime = Date.now() - startTime;
      console.log(`✅ [AudioNotes] Processing completed in ${uploadTime}ms`);

      // Set the meeting data and transcript
      await fetchUsageStatus();
      setMeetingData(data.meeting);
      setTranscript(data.meeting.transcript);
      setDone(true);

    } catch (error) {
      const uploadTime = Date.now() - startTime;
      console.error("❌ UPLOAD FAILED AFTER", uploadTime, "ms");
      console.error("❌ Error:", error);

      if (error.response) {
        console.error("   Response status:", error.response.status);
        console.error("   Response data:", error.response.data);
      }

      setTranscriptionError("Failed to process audio. Please try again.");
    } finally {
      setIsTranscribing(false);
      setLoading(false);
      setDone(true);
    }
  };

  const debugFileSize = (audioBlob, recordingDuration) => {
    const sizeBytes = audioBlob.size;
    const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(2);
    const durationMinutes = recordingDuration / 60;

    // Calculate actual bitrate
    const actualBitrate = Math.round((sizeBytes * 8) / (durationMinutes * 60));

    // Calculate expected sizes at different bitrates
    const expectedSizes = {
      "16kbps": ((16000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
      "32kbps": ((32000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
      "64kbps": ((64000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
      "128kbps": ((128000 * durationMinutes * 60) / 8 / (1024 * 1024)).toFixed(2),
    };

    Object.entries(expectedSizes).forEach(([bitrate, size]) => {
      const indicator =
        Math.abs(parseFloat(size) - parseFloat(sizeMB)) < 0.5
          ? " ← CLOSE MATCH"
          : "";
    });
    return {
      sizeMB: parseFloat(sizeMB),
      sizeBytes,
      actualBitrate,
      durationMinutes,
      isUnderLimit: parseFloat(sizeMB) < 50,
    };
  };

  const stopRecording = async () => {
    try {
      // Close live transcription connection
      if (deepgramSocketRef.current) {
        deepgramSocketRef.current.close();
      }

      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }

      if (audioRecorderRef.current) {
        audioRecorderRef.current.stop();
      }

      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((track) => track.stop());
      }

      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((track) => track.stop());
      }

      setIsRecording(false);
    } catch (error) {
      console.error("Error stopping recording:", error);
    }
  };

  const resetRecording = () => {
    setMediaUrl(null);
    setCombinedAudioUrl(null);
    setTimer(0);
    setDone(false);
    setTranscript([]);
    setMeetingData(null);
    setTranscriptionError(null);
    setLiveTranscripts([]); // Reset live transcripts
  };

  const downloadRecordings = () => {
    if (mediaUrl) {
      const link = document.createElement("a");
      link.href = mediaUrl;
      link.download = `screen-recording-${new Date().toISOString()}.webm`;
      link.click();
    }

    if (combinedAudioUrl) {
      const link = document.createElement("a");
      link.href = combinedAudioUrl;
      link.download = `audio-notes-${new Date().toISOString()}.webm`;
      link.click();
    }
  };

  const navigateToSingleSummary = (meetingData) => {
    const encodedId = btoa(meetingData._id);
    navigate(`/summaries/${encodedId}`, {
      state: {
        recording: meetingData
      },
    })
  }

  return (
    <div className="flex flex-col bg-gray-50 overflow-hidden">
      {/* Usage Status Display */}
      <div className="flex-shrink-0 p-4">
        <section aria-live="polite" aria-label="Usage status">
          {usageLoading ? (
            <aside className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm" role="status">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500" aria-hidden="true"></div>
                <span className="ml-3 text-gray-600">Loading usage information...</span>
              </div>
            </aside>
          ) : usageError ? (
            <aside className="bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm" role="alert">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" aria-hidden="true" />
                <span className="text-red-700">{usageError}</span>
                <button
                  onClick={fetchUsageStatus}
                  className="ml-auto text-red-600 hover:text-red-800 underline"
                  type="button"
                  aria-label="Retry loading usage information"
                >
                  Retry
                </button>
              </div>
            </aside>
          ) : usageData ? (
            <aside className={`rounded-2xl p-6 border shadow-sm ${usageData.status.canRecord
              ? usageData.status.isNearLimit
                ? 'bg-yellow-50 border-yellow-200'
                : 'bg-green-50 border-green-200'
              : 'bg-red-50 border-red-200'
              }`} role="complementary" aria-labelledby="usage-heading">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Clock className={`w-6 h-6 ${usageData.status.canRecord
                    ? usageData.status.isNearLimit
                      ? 'text-yellow-600'
                      : 'text-green-600'
                    : 'text-red-600'
                    }`} aria-hidden="true" />
                  <div>
                    <h2 id="usage-heading" className={`text-lg font-semibold ${usageData.status.canRecord
                      ? usageData.status.isNearLimit
                        ? 'text-yellow-800'
                        : 'text-green-800'
                      : 'text-red-800'
                      }`}>
                      Recording Time Remaining
                    </h2>
                    <p className={`text-sm ${usageData.status.canRecord
                      ? usageData.status.isNearLimit
                        ? 'text-yellow-700'
                        : 'text-green-700'
                      : 'text-red-700'
                      }`}>
                      {usageData.status.canRecord
                        ? `${isRecording ? getRemainingTimeWithCurrentRecording() : usageData.remaining.minutes} minutes left`
                        : 'You have reached your 100-minute limit'
                      }
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-2xl font-bold ${usageData.status.canRecord
                    ? usageData.status.isNearLimit
                      ? 'text-yellow-800'
                      : 'text-green-800'
                    : 'text-red-800'
                    }`}>
                    {isRecording ? getRemainingTimeWithCurrentRecording() : usageData.remaining.minutes}min
                  </div>
                  <div className="text-sm text-gray-600">
                    {usageData.totalUsed.minutes} / {usageData.limits.maxMinutes} used
                  </div>

                  {/* Progress Bar */}
                  <div
                    className="w-32 bg-gray-200 rounded-full h-2 mt-2"
                    role="progressbar"
                    aria-valuenow={usageData.status.percentageUsed}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${usageData.status.percentageUsed}% of recording time used`}
                  >
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${usageData.status.percentageUsed >= 90
                        ? 'bg-red-500'
                        : usageData.status.percentageUsed >= 80
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                        }`}
                      style={{ width: `${Math.min(usageData.status.percentageUsed, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Limit reached warning */}
              {!usageData.status.canRecord && (
                <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg" role="alert">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-red-800 font-medium">Recording limit reached</p>
                      <p className="text-red-700 text-sm mt-1">
                        You've used all 100 minutes of your recording time. Upgrade to a paid plan to continue recording meetings.
                      </p>
                      <button
                        className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                        type="button"
                        aria-label="Upgrade to paid plan"
                      >
                        Upgrade Plan
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Near limit warning */}
              {usageData.status.canRecord && usageData.status.isNearLimit && (
                <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg" role="alert">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-yellow-800 font-medium">Almost at your limit</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        You have less than 10 minutes remaining. Consider upgrading to avoid interruption.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </aside>
          ) : null}
        </section>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 px-4 pb-4 min-h-0">
        <div className="max-w-6xl mx-auto flex gap-6 w-full">
          {/* Left Panel - Audio Notes */}
          <section className="flex-1 bg-white rounded-2xl shadow-sm flex flex-col min-h-0" aria-labelledby="audio-transcripts-heading">
            {/* Header and Tabs - Fixed */}
            <div className="flex-shrink-0 p-6 border-b border-gray-100">
              <header className="mb-6">
                <h1 id="audio-transcripts-heading" className="text-3xl font-light text-purple-400">
                  Audio Transcripts
                </h1>
              </header>

              {/* Tab Selector */}
              <nav className="flex border-b border-gray-200" role="tablist" aria-label="Audio transcript options">
                <button
                  className={`px-4 py-2 font-medium ${activeTab === 'record' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('record')}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'record'}
                  aria-controls="record-panel"
                  id="record-tab"
                >
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4" aria-hidden="true" />
                    Record Audio
                  </div>
                </button>
                <button
                  className={`px-4 py-2 font-medium ${activeTab === 'upload' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('upload')}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'upload'}
                  aria-controls="upload-panel"
                  id="upload-tab"
                >
                  <div className="flex items-center gap-2">
                    <Upload className="w-4 h-4" aria-hidden="true" />
                    Upload Audio
                  </div>
                </button>
              </nav>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                {/* Recording Tab Content */}
                {activeTab === 'record' && (
                  <div id="record-panel" role="tabpanel" aria-labelledby="record-tab">
                    {/* Recording Status */}
                    {isRecording && (
                      <aside className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm" role="status" aria-live="polite">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></div>
                              <span className="text-red-700 font-medium">Recording...</span>
                            </div>
                            <div className="text-2xl font-bold text-red-700" aria-live="polite" aria-label={`Recording time: ${formatTime(timer)}`}>
                              {formatTime(timer)}
                            </div>
                          </div>
                          {/* Live waveform animation */}
                          <div className="flex items-center h-8 gap-1" aria-hidden="true">
                            {waveform.map((height, index) => (
                              <motion.div
                                key={index}
                                className="w-1 bg-red-500 rounded-full"
                                animate={{ height }}
                                transition={{ duration: 0.2 }}
                              />
                            ))}
                          </div>
                        </div>
                      </aside>
                    )}

                    {/* Live Transcription Display - Only show when recording */}
                    {isRecording && (
                      <div className="mb-8 bg-purple-50 rounded-2xl border border-purple-200 shadow-sm">
                        <div className="p-6 border-b border-purple-200">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-gray-900">
                              Live Transcription
                            </h3>
                            <div className="flex items-center gap-2">
                              {liveTranscripts.length > 0 && (
                                <span className="text-sm text-gray-500">
                                  {liveTranscripts.length} messages
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Fixed height scrollable area for live transcripts */}
                        <div className="h-80 overflow-y-auto p-6">
                          <div className="space-y-4">
                            {liveTranscripts.length > 0 ? (
                              liveTranscripts.map((transcript) => (
                                <motion.div
                                  key={transcript.id}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${getSpeakerColor(transcript.speaker)}`}>
                                    {getSpeakerInitials(transcript.speaker)}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="font-semibold text-gray-900">
                                        {transcript.speaker}
                                      </span>
                                      <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <div className="w-3 h-3 text-green-500">✓</div>
                                        <span>{transcript.languageName}</span>
                                        {transcript.languageConfidenceScore && (
                                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                                            {transcript.languageConfidenceScore}%
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {transcript.text}
                                    </p>
                                  </div>
                                </motion.div>
                              ))
                            ) : (
                              <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                  </svg>
                                </div>
                                <p className="text-gray-500 text-lg font-medium mb-2">
                                  Listening for speech...
                                </p>
                                <p className="text-gray-400 text-sm">
                                  Speak in any language and see real-time transcription
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Audio Controls */}
                    <div className="bg-purple-50 rounded-xl p-4" role="region" aria-labelledby="audio-controls-heading">
                      <h2 id="audio-controls-heading" className="sr-only">Audio Recording Controls</h2>
                      {!isRecording && !mediaUrl ? (
                        <button
                          onClick={startRecordingProcess}
                          disabled={loading || !canStartRecording()}
                          className="w-full flex cursor-pointer items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
                          type="button"
                          aria-label="Start audio recording"
                        >
                          <Mic className="w-5 h-5" aria-hidden="true" />
                          Start Recording
                        </button>
                      ) : (
                        <div className="flex items-center gap-4" role="group" aria-label="Recording controls">
                          {mediaUrl ? (
                            <>
                              <button
                                onClick={() => {
                                  const audio = new Audio(combinedAudioUrl);
                                  audio.play();
                                }}
                                className="w-8 h-8 flex items-center justify-center"
                                type="button"
                                aria-label="Play recorded audio"
                              >
                                <Play className="w-5 h-5 text-gray-700" aria-hidden="true" />
                              </button>
                              <button
                                onClick={resetRecording}
                                className="w-6 h-6 flex items-center justify-center"
                                type="button"
                                aria-label="Reset recording"
                              >
                                <Square className="w-4 h-4 text-gray-700 fill-current" aria-hidden="true" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={stopRecording}
                                className="w-8 h-8 flex items-center justify-center"
                                type="button"
                                aria-label="Stop recording"
                              >
                                <Square className="w-5 h-5 text-gray-700 fill-current" aria-hidden="true" />
                              </button>
                            </>
                          )}

                          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center" aria-hidden="true">
                            <div className="w-3 h-3 rounded-full bg-white"></div>
                          </div>

                          <div className="flex-1 mx-4">
                            <div
                              className="bg-purple-300 h-1 rounded-full relative"
                              role="progressbar"
                              aria-valuenow={mediaUrl ? 100 : (timer % 60) / 60 * 100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-label="Recording progress"
                            >
                              <div
                                className="absolute left-0 top-0 h-full bg-purple-500 rounded-full"
                                style={{ width: mediaUrl ? '100%' : `${(timer % 60) / 60 * 100}%` }}
                              ></div>
                            </div>
                          </div>

                          <span className="text-xs text-gray-500 min-w-[20px]" aria-live="polite">
                            {formatTime(timer)}
                          </span>

                          <button
                            onClick={downloadRecordings}
                            disabled={!mediaUrl}
                            className="w-6 h-6 flex items-center justify-center"
                            type="button"
                            aria-label="Download recording"
                          >
                            <Edit className="w-4 h-4 text-gray-700" aria-hidden="true" />
                          </button>
                          <button
                            className="w-6 h-6 flex items-center justify-center"
                            type="button"
                            aria-label="Add comment"
                          >
                            <MessageSquare className="w-4 h-4 text-gray-700" aria-hidden="true" />
                          </button>
                          <button
                            className="w-6 h-6 flex items-center justify-center"
                            type="button"
                            aria-label="Share recording"
                          >
                            <Share className="w-4 h-4 text-gray-700" aria-hidden="true" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Upload Tab Content */}
                {activeTab === 'upload' && (
                  <div id="upload-panel" role="tabpanel" aria-labelledby="upload-tab">
                    <div className="mb-6">
                      <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
                        <div className="flex flex-col items-center justify-center gap-4">
                          <FileAudio className="w-10 h-10 text-gray-400" aria-hidden="true" />
                          <p className="text-gray-600">
                            {selectedFile
                              ? selectedFile.name
                              : "Drag & drop an audio file here, or click to browse"}
                          </p>
                          <p className="text-sm text-gray-500">
                            Supported formats: MP3, WAV, WEBM, OGG (max 50MB)
                          </p>
                          <button
                            onClick={() => fileInputRef.current.click()}
                            className="mt-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            type="button"
                            aria-label="Select audio file"
                          >
                            Select File
                          </button>
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="audio/*"
                            className="hidden"
                            aria-label="Audio file input"
                          />
                        </div>
                      </div>

                      {selectedFile && (
                        <div className="mt-4 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <FileAudio className="w-5 h-5 text-purple-500" aria-hidden="true" />
                              <div>
                                <p className="font-medium text-gray-800">{selectedFile.name}</p>
                                <p className="text-sm text-gray-500">
                                  {formatBytes(selectedFile.size)} • {formatTime(fileDuration)}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => setSelectedFile(null)}
                              className="text-gray-400 hover:text-gray-600"
                              type="button"
                              aria-label="Remove selected file"
                            >
                              ×
                            </button>
                          </div>

                          {uploadProgress > 0 && uploadProgress < 100 && (
                            <div className="mb-4">
                              <div
                                className="w-full bg-gray-200 rounded-full h-2"
                                role="progressbar"
                                aria-valuenow={uploadProgress}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`Upload progress: ${uploadProgress}%`}
                              >
                                <div
                                  className="bg-purple-500 h-2 rounded-full"
                                  style={{ width: `${uploadProgress}%` }}
                                ></div>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 text-right" aria-live="polite">
                                Uploading... {uploadProgress}%
                              </p>
                            </div>
                          )}

                          <button
                            onClick={handleFileUpload}
                            disabled={loading || isTranscribing}
                            className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
                            type="button"
                            aria-label="Upload and process audio file"
                          >
                            {loading || isTranscribing ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></div>
                                Processing...
                              </>
                            ) : (
                              <>
                                <Upload className="w-5 h-5" aria-hidden="true" />
                                Upload & Process
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Transcript Display (shared between both tabs) */}
                <section aria-labelledby="transcript-heading">
                  {transcript.length > 0 ? (
                    <div className="mb-8">
                      <h2 id="transcript-heading" className="text-lg font-medium text-gray-700 mb-4">Transcript</h2>
                      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4" role="log" aria-label="Audio transcript">
                        {transcript.map((item, index) => (
                          <article key={index} className="flex items-start gap-3">
                            <figure className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium" aria-hidden="true">
                              {item.speaker.charAt(0).toUpperCase()}
                            </figure>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-medium text-gray-900">
                                  {item.speaker}
                                </h3>
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {item.text}
                              </p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
                      <p className="text-gray-500 text-center">
                        {activeTab === 'record'
                          ? (isRecording
                            ? "Recording in progress... Transcript will appear here after recording is processed."
                            : "Start recording to create audio transcript")
                          : (selectedFile
                            ? "Upload and process your audio file to see the transcript here"
                            : "Upload an audio file to create notes")}
                      </p>
                    </div>
                  )}
                </section>

                {/* Processing Status (shared between both tabs) */}
                <section aria-live="polite" aria-label="Processing status">
                  {(loading || isTranscribing) && (
                    <div className="mt-4 text-center" role="status">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 inline-block" aria-hidden="true"></div>
                      <p className="text-gray-600 mt-2">
                        {isTranscribing ? "Processing your audio transcript..." : "Uploading..."}
                      </p>
                    </div>
                  )}

                  {done && !loading && !isTranscribing && (
                    <div className="mt-4 p-3 bg-green-50 rounded-lg text-green-700 text-center" role="alert">
                      Audio transcript processed successfully!
                    </div>
                  )}

                  {transcriptionError && !done && (
                    <div className="mt-4 p-3 bg-red-50 rounded-lg text-red-700 text-center" role="alert">
                      {transcriptionError}
                    </div>
                  )}
                </section>
              </div>
            </div>
          </section>

          {/* Right Panel - Important Notes */}
          <aside className="w-80 bg-white rounded-2xl shadow-sm flex flex-col" aria-labelledby="audio-transcript-info-heading">
            <div className="flex-shrink-0 p-6">
              <header className="flex items-center gap-2">
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-4 rounded-xl"
                  type="button"
                  aria-label="Audio transcript options"
                >
                  Audio Transcript
                </button>
              </header>

              {meetingData?.title && (
                <button
                  className="w-full text-xl text-pink-500 font-medium py-3 px-4 rounded-xl mt-6"
                  type="button"
                  aria-label={`View meeting: ${meetingData.title}`}
                >
                  {meetingData.title}
                </button>
              )}
            </div>

            <div className="flex-1 p-6 pt-0">
              <div
                onClick={() => meetingData?._id && navigateToSingleSummary(meetingData)}
                className="space-y-3 md:space-y-4 cursor-pointer h-full"
                role="button"
                tabIndex={0}
                aria-label="View meeting summary details"
              >
                <article className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 h-full">
                  <header className="flex items-center space-x-2 mb-3 md:mb-4">
                    <MessageSquare size={16} className="text-gray-500 md:w-5 md:h-5" aria-hidden="true" />
                    <h2 id="audio-transcript-info-heading" className="text-base md:text-lg font-bold text-gray-700">
                      Audio Transcript
                    </h2>
                  </header>

                  <div className="space-y-3 md:space-y-4">
                    {meetingData ? (
                      <section className="mb-6" aria-labelledby="agenda-section-heading">
                        <h3 id="agenda-section-heading" className="text-lg font-medium text-gray-700 mb-3">Agenda</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                          {meetingData.agenda && meetingData.agenda.length > 0 ? (
                            <ul className="space-y-2" role="list">
                              {meetingData.agenda.map((item, index) => (
                                <li key={index} className="text-sm text-gray-700 flex items-start" role="listitem">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500 italic">No agenda available</p>
                          )}
                        </div>
                      </section>
                    ) : (
                      <p className="text-xs md:text-sm text-gray-500">
                        {activeTab === 'record' ? "Record audio transcript" : "Upload an audio file"} to see agenda here
                      </p>
                    )}
                  </div>
                </article>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}