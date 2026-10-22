// // // // import React from "react";
// // // // import { ChevronDown } from "lucide-react";

// // // // export default function LiveTranscriptionAndRecorder() {
// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 flex justify-center p-8">
// // // //       <div className="w-full max-w-6xl mt-10">
// // // //         {/* Main Heading */}
// // // //         <h1 className="text-4xl font-bold text-black text-center mb-16">
// // // //           Let us Scribe your Session
// // // //         </h1>

// // // //         <div className="flex gap-8">
// // // //           {/* Left Panel - Meeting Recorder */}
// // // //           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
// // // //             <div className="text-center">
// // // //               {/* Title */}
// // // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// // // //                 Meeting Recorder and Transcriber
// // // //               </h2>

// // // //               {/* Subtitle */}
// // // //               <p className="text-gray-500 mb-12 text-base leading-relaxed">
// // // //                 Record Your Meeting or give live
// // // //                 <br />
// // // //                 transcription with automatic language
// // // //                 <br />
// // // //                 detection
// // // //               </p>

// // // //               {/* Timer */}
// // // //               <div className="text-7xl font-light text-purple-500 mb-8 tracking-wide">
// // // //                 00:15
// // // //               </div>

// // // //               {/* Audio Waveform */}
// // // //               <div className="mb-8 flex justify-center">
// // // //                 <svg
// // // //                   width="300"
// // // //                   height="60"
// // // //                   viewBox="0 0 300 60"
// // // //                   className="opacity-80"
// // // //                 >
// // // //                   {/* Waveform bars with purple gradient */}
// // // //                   <defs>
// // // //                     <linearGradient
// // // //                       id="waveGradient"
// // // //                       x1="0%"
// // // //                       y1="0%"
// // // //                       x2="0%"
// // // //                       y2="100%"
// // // //                     >
// // // //                       <stop offset="0%" stopColor="#a855f7" />
// // // //                       <stop offset="100%" stopColor="#d8b4fe" />
// // // //                     </linearGradient>
// // // //                   </defs>

// // // //                   {/* Generate waveform bars */}
// // // //                   {Array.from({ length: 50 }, (_, i) => {
// // // //                     const heights = [
// // // //                       8, 15, 25, 12, 30, 18, 35, 22, 28, 16, 40, 25, 20, 35, 15,
// // // //                       45, 30, 18, 25, 12, 38, 20, 32, 15, 28, 22, 35, 18, 25,
// // // //                       30, 20, 35, 15, 28, 25, 18, 32, 20, 25, 15, 30, 22, 35,
// // // //                       18, 25, 20, 28, 15, 32, 25,
// // // //                     ];
// // // //                     const height = heights[i] || 15;
// // // //                     const x = i * 6;
// // // //                     const y = (60 - height) / 2;

// // // //                     return (
// // // //                       <rect
// // // //                         key={i}
// // // //                         x={x}
// // // //                         y={y}
// // // //                         width="3"
// // // //                         height={height}
// // // //                         fill="url(#waveGradient)"
// // // //                         rx="1.5"
// // // //                         className={i < 25 ? "opacity-100" : "opacity-40"}
// // // //                       />
// // // //                     );
// // // //                   })}
// // // //                 </svg>
// // // //               </div>

// // // //               {/* Control Buttons */}
// // // //               <div className="flex items-center justify-center gap-8">
// // // //                 {/* Record Button */}
// // // //                 <button className="w-16 h-16 bg-purple-500 rounded-full shadow-lg flex items-center justify-center relative">
// // // //                   <div className="w-6 h-6 bg-white rounded-full"></div>
// // // //                   {/* Pulsing ring */}
// // // //                   <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping"></div>
// // // //                 </button>

// // // //                 {/* CC Button */}
// // // //                 <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
// // // //                   <span className="text-gray-600 font-semibold text-sm">
// // // //                     CC
// // // //                   </span>
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Panel - Live Transcription */}
// // // //           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
// // // //             {/* Header */}
// // // //             <div className="flex justify-between items-center mb-8 border-purple-400 border-b-2 pb-4">
// // // //               <h3 className="text-xl font-semibold text-gray-900">Language</h3>
// // // //               <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
// // // //                 Translate
// // // //                 <ChevronDown className="w-4 h-4" />
// // // //               </button>
// // // //             </div>

// // // //             {/* Transcription Messages */}
// // // //             <div className="space-y-6">
// // // //               {/* Charlie's first message */}
// // // //               <div className="flex items-start gap-3">
// // // //                 <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">
// // // //                   C
// // // //                 </div>
// // // //                 <div className="flex-1">
// // // //                   <div className="flex items-center gap-2 mb-2">
// // // //                     <span className="font-semibold text-gray-900">Charlie</span>
// // // //                     <div className="flex items-center gap-1 text-sm text-gray-500">
// // // //                       <div className="w-3 h-3 text-green-500">✓</div>
// // // //                       <span>0:02</span>
// // // //                     </div>
// // // //                   </div>
// // // //                   <p className="text-gray-700 text-sm leading-relaxed">
// // // //                     Alright, let's get started. Lisa, did you get a chance to
// // // //                     review the campaign brief for Q3?
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Lisa's first message */}
// // // //               <div className="flex items-start gap-3">
// // // //                 <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-bold">
// // // //                   L
// // // //                 </div>
// // // //                 <div className="flex-1">
// // // //                   <div className="flex items-center gap-2 mb-2">
// // // //                     <span className="font-semibold text-gray-900">Lisa</span>
// // // //                     <div className="flex items-center gap-1 text-sm text-gray-500">
// // // //                       <div className="w-3 h-3 text-green-500">✓</div>
// // // //                       <span>0:05</span>
// // // //                     </div>
// // // //                   </div>
// // // //                   <p className="text-gray-700 text-sm leading-relaxed">
// // // //                     Yes, I did. I think the overall direction looks good,
// // // //                     especially the focus on influencer partnerships. But I have
// // // //                     a few thoughts on the content calendar
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Charlie's second message */}
// // // //               <div className="flex items-start gap-3">
// // // //                 <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">
// // // //                   C
// // // //                 </div>
// // // //                 <div className="flex-1">
// // // //                   <div className="flex items-center gap-2 mb-2">
// // // //                     <span className="font-semibold text-gray-900">Charlie</span>
// // // //                     <div className="flex items-center gap-1 text-sm text-gray-500">
// // // //                       <div className="w-3 h-3 text-green-500">✓</div>
// // // //                       <span>0:01</span>
// // // //                     </div>
// // // //                   </div>
// // // //                   <p className="text-gray-700 text-sm leading-relaxed">
// // // //                     Let's hear them.
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Lisa's second message */}
// // // //               <div className="flex items-start gap-3">
// // // //                 <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-bold">
// // // //                   L
// // // //                 </div>
// // // //                 <div className="flex-1">
// // // //                   <div className="flex items-center gap-2 mb-2">
// // // //                     <span className="font-semibold text-gray-900">Lisa</span>
// // // //                     <div className="flex items-center gap-1 text-sm text-gray-500">
// // // //                       <div className="w-3 h-3 text-green-500">✓</div>
// // // //                       <span>0:05</span>
// // // //                     </div>
// // // //                   </div>
// // // //                   <p className="text-gray-700 text-sm leading-relaxed">
// // // //                     Yes, I did. I think the overall direction looks good,
// // // //                     especially the focus on influencer partnerships. But I have
// // // //                     a few thoughts on the content calendar
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useState, useRef, useEffect } from "react";
// // // import { ChevronDown, Play, Square, Trash2, Download } from "lucide-react";
// // // import { motion } from "framer-motion";

// // // export default function LiveTranscriptionAndRecorder() {
// // //   // Live transcription states
// // //   const [isLiveTranscribing, setIsLiveTranscribing] = useState(false);
// // //   const [timer, setTimer] = useState(0);
// // //   const [waveform, setWaveform] = useState(Array(50).fill(15));
// // //   const [liveTranscripts, setLiveTranscripts] = useState([]);
// // //   const [transcriptionError, setTranscriptionError] = useState(null);

// // //   // Refs for managing streams and connections
// // //   const audioRecorderRef = useRef(null);
// // //   const timerIntervalRef = useRef(null);
// // //   const screenStreamRef = useRef(null);
// // //   const micStreamRef = useRef(null);
// // //   const deepgramSocketRef = useRef(null);

// // //   // Timer and waveform effect
// // //   useEffect(() => {
// // //     if (isLiveTranscribing) {
// // //       timerIntervalRef.current = setInterval(() => {
// // //         setTimer((prev) => prev + 1);
// // //         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
// // //       }, 1000);
// // //     } else {
// // //       clearInterval(timerIntervalRef.current);
// // //     }

// // //     return () => clearInterval(timerIntervalRef.current);
// // //   }, [isLiveTranscribing]);

// // //   // Cleanup on unmount
// // //   useEffect(() => {
// // //     return () => {
// // //       if (
// // //         deepgramSocketRef.current &&
// // //         deepgramSocketRef.current.readyState === WebSocket.OPEN
// // //       ) {
// // //         deepgramSocketRef.current.close();
// // //       }
// // //     };
// // //   }, []);

// // //   const formatTime = (seconds) => {
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = seconds % 60;
// // //     return `${mins.toString().padStart(2, "0")}:${secs
// // //       .toString()
// // //       .padStart(2, "0")}`;
// // //   };

// // //   // Setup combined audio stream for transcription
// // //   const setupCombinedAudioStream = async () => {
// // //     try {
// // //       const screenStream = await navigator.mediaDevices.getDisplayMedia({
// // //         video: true,
// // //         audio: {
// // //           sampleRate: 16000,
// // //           channelCount: 1,
// // //         },
// // //       });
// // //       screenStreamRef.current = screenStream;

// // //       const micStream = await navigator.mediaDevices.getUserMedia({
// // //         audio: {
// // //           echoCancellation: true,
// // //           noiseSuppression: true,
// // //           autoGainControl: true,
// // //         },
// // //       });
// // //       micStreamRef.current = micStream;

// // //       const audioContext = new AudioContext({ sampleRate: 16000 });
// // //       const destination = audioContext.createMediaStreamDestination();

// // //       const systemSource = audioContext.createMediaStreamSource(
// // //         new MediaStream(screenStream.getAudioTracks())
// // //       );
// // //       const micSource = audioContext.createMediaStreamSource(
// // //         new MediaStream(micStream.getAudioTracks())
// // //       );

// // //       systemSource.connect(destination);
// // //       micSource.connect(destination);

// // //       const combinedAudioStream = destination.stream;

// // //       return { combinedAudioStream };
// // //     } catch (error) {
// // //       console.error("Error setting up combined audio stream:", error);
// // //       throw error;
// // //     }
// // //   };

// // //   const getLanguageName = (code) => {
// // //     const languages = {
// // //       en: "English",
// // //       es: "Spanish",
// // //       fr: "French",
// // //       de: "German",
// // //       it: "Italian",
// // //       pt: "Portuguese",
// // //       zh: "Chinese",
// // //       ja: "Japanese",
// // //       ko: "Korean",
// // //       ar: "Arabic",
// // //       hi: "Hindi",
// // //       ru: "Russian",
// // //       nl: "Dutch",
// // //       sv: "Swedish",
// // //       no: "Norwegian",
// // //       da: "Danish",
// // //       fi: "Finnish",
// // //       pl: "Polish",
// // //       tr: "Turkish",
// // //       th: "Thai",
// // //       vi: "Vietnamese",
// // //       cs: "Czech",
// // //       hu: "Hungarian",
// // //       ro: "Romanian",
// // //       bg: "Bulgarian",
// // //       hr: "Croatian",
// // //       sk: "Slovak",
// // //       sl: "Slovenian",
// // //       et: "Estonian",
// // //       lv: "Latvian",
// // //       lt: "Lithuanian",
// // //       mt: "Maltese",
// // //       ga: "Irish",
// // //       cy: "Welsh",
// // //       eu: "Basque",
// // //       ca: "Catalan",
// // //       gl: "Galician",
// // //       is: "Icelandic",
// // //       mk: "Macedonian",
// // //       sq: "Albanian",
// // //       sr: "Serbian",
// // //       bs: "Bosnian",
// // //       me: "Montenegrin",
// // //       uk: "Ukrainian",
// // //       be: "Belarusian",
// // //       he: "Hebrew",
// // //       fa: "Persian",
// // //       ur: "Urdu",
// // //       bn: "Bengali",
// // //       ta: "Tamil",
// // //       te: "Telugu",
// // //       ml: "Malayalam",
// // //       kn: "Kannada",
// // //       gu: "Gujarati",
// // //       pa: "Punjabi",
// // //       ne: "Nepali",
// // //       si: "Sinhala",
// // //       my: "Burmese",
// // //       km: "Khmer",
// // //       lo: "Lao",
// // //       ka: "Georgian",
// // //       am: "Amharic",
// // //       sw: "Swahili",
// // //       zu: "Zulu",
// // //       af: "Afrikaans",
// // //       xh: "Xhosa",
// // //       ig: "Igbo",
// // //       yo: "Yoruba",
// // //       ha: "Hausa",
// // //     };
// // //     return languages[code] || code.toUpperCase();
// // //   };

// // //   const startLiveTranscription = async () => {
// // //     setLiveTranscripts([]);
// // //     setTranscriptionError(null);

// // //     try {
// // //       const { combinedAudioStream } = await setupCombinedAudioStream();

// // //       const DEEPGRAM_API_KEY =
// // //         import.meta.env.VITE_APP_DEEPGRAM_API_KEY || "YOUR_DEEPGRAM_API_KEY";
// // //       const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
// // //         "token",
// // //         DEEPGRAM_API_KEY,
// // //       ]);

// // //       deepgramSocketRef.current = socket;

// // //       socket.onopen = () => {
// // //         socket.send(
// // //           JSON.stringify({
// // //             type: "ParametersChange",
// // //             parameters: {
// // //               interim_results: true,
// // //               diarize: true,
// // //               punctuate: true,
// // //               endpointing: 100,
// // //               utterance_end_ms: 1000,
// // //               smart_format: true,
// // //               detect_language: true,
// // //               language: "auto",
// // //               detect_language_confidence: 0.1,
// // //               multichannel: false,
// // //               alternatives: 1,
// // //             },
// // //           })
// // //         );

// // //         const mediaRecorder = new MediaRecorder(combinedAudioStream, {
// // //           mimeType: "audio/webm;codecs=opus",
// // //           audioBitsPerSecond: 16000,
// // //         });

// // //         mediaRecorder.ondataavailable = (event) => {
// // //           if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
// // //             socket.send(event.data);
// // //           }
// // //         };

// // //         mediaRecorder.start(250);
// // //         audioRecorderRef.current = mediaRecorder;
// // //       };

// // //       socket.onmessage = (message) => {
// // //         const data = JSON.parse(message.data);

// // //         if (data.type === "Results") {
// // //           if (data.channel?.alternatives?.[0]) {
// // //             const transcript = data.channel.alternatives[0];

// // //             if (!data.is_final) return;

// // //             const detectedLanguage = data.language || "en";
// // //             const languageConfidence = data.language_confidence || 0;
// // //             const languageName = getLanguageName(detectedLanguage);

// // //             const newTranscript = {
// // //               text: transcript.transcript || "",
// // //               speaker: transcript.words?.[0]?.speaker
// // //                 ? `Speaker ${transcript.words[0].speaker}`
// // //                 : "Unknown",
// // //               isFinal: data.is_final,
// // //               timestamp: new Date().toISOString(),
// // //               language: detectedLanguage,
// // //               languageName: languageName,
// // //               confidence: languageConfidence,
// // //               languageConfidenceScore: Math.round(languageConfidence * 100),
// // //               id: Date.now() + Math.random(), // Unique ID for React keys
// // //             };

// // //             setLiveTranscripts((prev) => [...prev, newTranscript]);
// // //           }
// // //         }
// // //       };

// // //       socket.onerror = (error) => {
// // //         console.error("Deepgram WebSocket Error:", error);
// // //         setTranscriptionError("Error connecting to transcription service");
// // //       };

// // //       socket.onclose = () => {
// // //       };

// // //       setTimer(0);
// // //       setIsLiveTranscribing(true);
// // //     } catch (error) {
// // //       console.error("Error starting live transcription:", error);
// // //       setTranscriptionError("Failed to start live transcription");
// // //     }
// // //   };

// // //   const stopLiveTranscription = async () => {
// // //     try {
// // //       if (audioRecorderRef.current) {
// // //         audioRecorderRef.current.stop();
// // //       }

// // //       if (deepgramSocketRef.current) {
// // //         deepgramSocketRef.current.close();
// // //       }

// // //       if (screenStreamRef.current) {
// // //         screenStreamRef.current.getTracks().forEach((track) => track.stop());
// // //       }

// // //       if (micStreamRef.current) {
// // //         micStreamRef.current.getTracks().forEach((track) => track.stop());
// // //       }

// // //       setIsLiveTranscribing(false);
// // //     } catch (error) {
// // //       console.error("Error stopping live transcription:", error);
// // //     }
// // //   };

// // //   const clearTranscripts = () => {
// // //     setLiveTranscripts([]);
// // //     setTranscriptionError(null);
// // //   };

// // //   const downloadTranscripts = () => {
// // //     if (liveTranscripts.length === 0) return;

// // //     let content = "# Live Transcription\n\n";
// // //     content += `Date: ${new Date().toLocaleDateString()}\n`;
// // //     content += `Duration: ${formatTime(timer)}\n\n`;

// // //     liveTranscripts.forEach((transcript, index) => {
// // //       content += `${transcript.speaker} (${transcript.languageName}): ${transcript.text}\n\n`;
// // //     });

// // //     const blob = new Blob([content], { type: "text/plain" });
// // //     const url = URL.createObjectURL(blob);
// // //     const link = document.createElement("a");
// // //     link.href = url;
// // //     link.download = `live-transcript-${new Date().toISOString()}.txt`;
// // //     link.click();
// // //   };

// // //   // Get speaker color based on speaker name
// // //   const getSpeakerColor = (speaker) => {
// // //     const colors = [
// // //       "bg-purple-500",
// // //       "bg-pink-500", 
// // //       "bg-blue-500",
// // //       "bg-green-500",
// // //       "bg-yellow-500",
// // //       "bg-red-500",
// // //       "bg-indigo-500",
// // //       "bg-orange-500"
// // //     ];

// // //     // Simple hash function to consistently assign colors
// // //     let hash = 0;
// // //     for (let i = 0; i < speaker.length; i++) {
// // //       hash = speaker.charCodeAt(i) + ((hash << 5) - hash);
// // //     }
// // //     return colors[Math.abs(hash) % colors.length];
// // //   };

// // //   // Get speaker initials
// // //   const getSpeakerInitials = (speaker) => {
// // //     if (speaker === "Unknown") return "?";
// // //     if (speaker.startsWith("Speaker")) {
// // //       return speaker.replace("Speaker ", "S");
// // //     }
// // //     return speaker.split(" ").map(name => name[0]).join("").toUpperCase().slice(0, 2);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex justify-center p-8">
// // //       <div className="w-full max-w-6xl mt-10">
// // //         {/* Main Heading */}
// // //         <h1 className="text-4xl font-bold text-black text-center mb-16">
// // //           Live Transcription Session
// // //         </h1>

// // //         <div className="flex gap-8">
// // //           {/* Left Panel - Meeting Recorder */}
// // //           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
// // //             <div className="text-center">
// // //               {/* Title */}
// // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// // //                 Live Transcription
// // //               </h2>

// // //               {/* Subtitle */}
// // //               <p className="text-gray-500 mb-12 text-base leading-relaxed">
// // //                 {isLiveTranscribing 
// // //                   ? "Live transcription in progress with automatic language detection"
// // //                   : "Start live transcription with automatic language detection"
// // //                 }
// // //               </p>

// // //               {/* Timer */}
// // //               <motion.div 
// // //                 className={`text-7xl font-light mb-8 tracking-wide ${
// // //                   isLiveTranscribing ? 'text-red-500' : 'text-purple-500'
// // //                 }`}
// // //                 animate={{
// // //                   scale: isLiveTranscribing ? [1, 1.02, 1] : 1,
// // //                 }}
// // //                 transition={{
// // //                   repeat: isLiveTranscribing ? Infinity : 0,
// // //                   duration: 1,
// // //                 }}
// // //               >
// // //                 {formatTime(timer)}
// // //               </motion.div>

// // //               {/* Audio Waveform */}
// // //               <div className="mb-8 flex justify-center">
// // //                 {isLiveTranscribing ? (
// // //                   // Live animated waveform
// // //                   <div className="flex items-center justify-center h-16 gap-1">
// // //                     {waveform.map((height, index) => (
// // //                       <motion.div
// // //                         key={index}
// // //                         className={`w-1 rounded-full ${
// // //                           isLiveTranscribing ? 'bg-red-500' : 'bg-purple-500'
// // //                         }`}
// // //                         animate={{ height }}
// // //                         transition={{ duration: 0.2 }}
// // //                       />
// // //                     ))}
// // //                   </div>
// // //                 ) : (
// // //                   // Static waveform
// // //                   <svg
// // //                     width="300"
// // //                     height="60"
// // //                     viewBox="0 0 300 60"
// // //                     className="opacity-80"
// // //                   >
// // //                     <defs>
// // //                       <linearGradient
// // //                         id="waveGradient"
// // //                         x1="0%"
// // //                         y1="0%"
// // //                         x2="0%"
// // //                         y2="100%"
// // //                       >
// // //                         <stop offset="0%" stopColor="#a855f7" />
// // //                         <stop offset="100%" stopColor="#d8b4fe" />
// // //                       </linearGradient>
// // //                     </defs>

// // //                     {Array.from({ length: 50 }, (_, i) => {
// // //                       const heights = [
// // //                         8, 15, 25, 12, 30, 18, 35, 22, 28, 16, 40, 25, 20, 35, 15,
// // //                         45, 30, 18, 25, 12, 38, 20, 32, 15, 28, 22, 35, 18, 25,
// // //                         30, 20, 35, 15, 28, 25, 18, 32, 20, 25, 15, 30, 22, 35,
// // //                         18, 25, 20, 28, 15, 32, 25,
// // //                       ];
// // //                       const height = heights[i] || 15;
// // //                       const x = i * 6;
// // //                       const y = (60 - height) / 2;

// // //                       return (
// // //                         <rect
// // //                           key={i}
// // //                           x={x}
// // //                           y={y}
// // //                           width="3"
// // //                           height={height}
// // //                           fill="url(#waveGradient)"
// // //                           rx="1.5"
// // //                           className="opacity-60"
// // //                         />
// // //                       );
// // //                     })}
// // //                   </svg>
// // //                 )}
// // //               </div>

// // //               {/* Control Buttons */}
// // //               <div className="flex items-center justify-center gap-8 mb-8">
// // //                 {/* Start/Stop Button */}
// // //                 <motion.button 
// // //                   onClick={isLiveTranscribing ? stopLiveTranscription : startLiveTranscription}
// // //                   className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center relative ${
// // //                     isLiveTranscribing 
// // //                       ? 'bg-red-500 hover:bg-red-600' 
// // //                       : 'bg-purple-500 hover:bg-purple-600'
// // //                   }`}
// // //                   whileHover={{ scale: 1.05 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                 >
// // //                   {isLiveTranscribing ? (
// // //                     <Square className="w-6 h-6 text-white fill-current" />
// // //                   ) : (
// // //                     <div className="w-6 h-6 bg-white rounded-full"></div>
// // //                   )}

// // //                   {/* Pulsing ring when recording */}
// // //                   {isLiveTranscribing && (
// // //                     <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></div>
// // //                   )}
// // //                 </motion.button>

// // //                 {/* Additional Controls */}
// // //                 {liveTranscripts.length > 0 && !isLiveTranscribing && (
// // //                   <>
// // //                     <motion.button
// // //                       onClick={clearTranscripts}
// // //                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
// // //                       whileHover={{ scale: 1.05 }}
// // //                       whileTap={{ scale: 0.95 }}
// // //                     >
// // //                       <Trash2 className="w-4 h-4 text-gray-600" />
// // //                     </motion.button>
// // //                     <motion.button
// // //                       onClick={downloadTranscripts}
// // //                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
// // //                       whileHover={{ scale: 1.05 }}
// // //                       whileTap={{ scale: 0.95 }}
// // //                     >
// // //                       <Download className="w-4 h-4 text-gray-600" />
// // //                     </motion.button>
// // //                   </>
// // //                 )}
// // //               </div>

// // //               {/* Status Messages */}
// // //               {transcriptionError && (
// // //                 <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
// // //                   <p className="text-red-600 text-sm">{transcriptionError}</p>
// // //                 </div>
// // //               )}

// // //               {isLiveTranscribing && (
// // //                 <div className="bg-green-50 border border-green-200 rounded-lg p-3">
// // //                   <p className="text-green-600 text-sm font-medium">
// // //                     🎤 Live transcription active - Start speaking...
// // //                   </p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Right Panel - Live Transcription */}
// // //           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
// // //             {/* Header */}
// // //             <div className="flex justify-between items-center mb-8 border-purple-400 border-b-2 pb-4">
// // //               <h3 className="text-xl font-semibold text-gray-900">
// // //                 Live Transcription
// // //               </h3>
// // //               <div className="flex items-center gap-2">
// // //                 {liveTranscripts.length > 0 && (
// // //                   <span className="text-sm text-gray-500">
// // //                     {liveTranscripts.length} messages
// // //                   </span>
// // //                 )}
// // //                 <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium opacity-50 cursor-not-allowed">
// // //                   Translate
// // //                   <ChevronDown className="w-4 h-4" />
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Transcription Messages */}
// // //             <div className="space-y-6 max-h-96 overflow-y-auto">
// // //               {liveTranscripts.length > 0 ? (
// // //                 liveTranscripts.map((transcript) => (
// // //                   <motion.div
// // //                     key={transcript.id}
// // //                     className="flex items-start gap-3"
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.3 }}
// // //                   >
// // //                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${getSpeakerColor(transcript.speaker)}`}>
// // //                       {getSpeakerInitials(transcript.speaker)}
// // //                     </div>
// // //                     <div className="flex-1">
// // //                       <div className="flex items-center gap-2 mb-2">
// // //                         <span className="font-semibold text-gray-900">
// // //                           {transcript.speaker}
// // //                         </span>
// // //                         <div className="flex items-center gap-1 text-sm text-gray-500">
// // //                           <div className="w-3 h-3 text-green-500">✓</div>
// // //                           <span>{transcript.languageName}</span>
// // //                           {transcript.languageConfidenceScore && (
// // //                             <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
// // //                               {transcript.languageConfidenceScore}%
// // //                             </span>
// // //                           )}
// // //                         </div>
// // //                       </div>
// // //                       <p className="text-gray-700 text-sm leading-relaxed">
// // //                         {transcript.text}
// // //                       </p>
// // //                     </div>
// // //                   </motion.div>
// // //                 ))
// // //               ) : (
// // //                 <div className="text-center py-12">
// // //                   <div className="text-gray-400 mb-4">
// // //                     <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
// // //                     </svg>
// // //                   </div>
// // //                   <p className="text-gray-500 text-lg font-medium mb-2">
// // //                     {isLiveTranscribing 
// // //                       ? "Listening for speech..." 
// // //                       : "Start live transcription to see messages here"
// // //                     }
// // //                   </p>
// // //                   <p className="text-gray-400 text-sm">
// // //                     {isLiveTranscribing 
// // //                       ? "Speak in any language and see real-time transcription"
// // //                       : "Click the record button to begin"
// // //                     }
// // //                   </p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // import React, { useState, useRef, useEffect } from "react";
// // // import { ChevronDown, Play, Square, Trash2, Download, Lightbulb, Users, List } from "lucide-react";
// // // import { motion } from "framer-motion";
// // // import axios from "axios";

// // // export default function LiveTranscriptionAndRecorder() {
// // //   // Live transcription states
// // //   const [isLiveTranscribing, setIsLiveTranscribing] = useState(false);
// // //   const [timer, setTimer] = useState(0);
// // //   const [waveform, setWaveform] = useState(Array(50).fill(15));
// // //   const [liveTranscripts, setLiveTranscripts] = useState([]);
// // //   const [transcriptionError, setTranscriptionError] = useState(null);

// // //   // Live transcription summary state
// // //   const [liveTranscriptionSummary, setLiveTranscriptionSummary] = useState(null);
// // //   const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
// // //   const [summaryError, setSummaryError] = useState(null);

// // //   // Refs for managing streams and connections
// // //   const audioRecorderRef = useRef(null);
// // //   const timerIntervalRef = useRef(null);
// // //   const screenStreamRef = useRef(null);
// // //   const micStreamRef = useRef(null);
// // //   const deepgramSocketRef = useRef(null);

// // //   // Timer and waveform effect
// // //   useEffect(() => {
// // //     if (isLiveTranscribing) {
// // //       timerIntervalRef.current = setInterval(() => {
// // //         setTimer((prev) => prev + 1);
// // //         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
// // //       }, 1000);
// // //     } else {
// // //       clearInterval(timerIntervalRef.current);
// // //     }

// // //     return () => clearInterval(timerIntervalRef.current);
// // //   }, [isLiveTranscribing]);

// // //   // Cleanup on unmount
// // //   useEffect(() => {
// // //     return () => {
// // //       if (
// // //         deepgramSocketRef.current &&
// // //         deepgramSocketRef.current.readyState === WebSocket.OPEN
// // //       ) {
// // //         deepgramSocketRef.current.close();
// // //       }
// // //     };
// // //   }, []);

// // //   const formatTime = (seconds) => {
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = seconds % 60;
// // //     return `${mins.toString().padStart(2, "0")}:${secs
// // //       .toString()
// // //       .padStart(2, "0")}`;
// // //   };

// // //   // Setup combined audio stream for transcription
// // //   const setupCombinedAudioStream = async () => {
// // //     try {
// // //       const screenStream = await navigator.mediaDevices.getDisplayMedia({
// // //         video: true,
// // //         audio: {
// // //           sampleRate: 16000,
// // //           channelCount: 1,
// // //         },
// // //       });
// // //       screenStreamRef.current = screenStream;

// // //       const micStream = await navigator.mediaDevices.getUserMedia({
// // //         audio: {
// // //           echoCancellation: true,
// // //           noiseSuppression: true,
// // //           autoGainControl: true,
// // //         },
// // //       });
// // //       micStreamRef.current = micStream;

// // //       const audioContext = new AudioContext({ sampleRate: 16000 });
// // //       const destination = audioContext.createMediaStreamDestination();

// // //       const systemSource = audioContext.createMediaStreamSource(
// // //         new MediaStream(screenStream.getAudioTracks())
// // //       );
// // //       const micSource = audioContext.createMediaStreamSource(
// // //         new MediaStream(micStream.getAudioTracks())
// // //       );

// // //       systemSource.connect(destination);
// // //       micSource.connect(destination);

// // //       const combinedAudioStream = destination.stream;

// // //       return { combinedAudioStream };
// // //     } catch (error) {
// // //       console.error("Error setting up combined audio stream:", error);
// // //       throw error;
// // //     }
// // //   };

// // //   const getLanguageName = (code) => {
// // //     const languages = {
// // //       en: "English",
// // //       es: "Spanish",
// // //       fr: "French",
// // //       de: "German",
// // //       it: "Italian",
// // //       pt: "Portuguese",
// // //       zh: "Chinese",
// // //       ja: "Japanese",
// // //       ko: "Korean",
// // //       ar: "Arabic",
// // //       hi: "Hindi",
// // //       ru: "Russian",
// // //       nl: "Dutch",
// // //       sv: "Swedish",
// // //       no: "Norwegian",
// // //       da: "Danish",
// // //       fi: "Finnish",
// // //       pl: "Polish",
// // //       tr: "Turkish",
// // //       th: "Thai",
// // //       vi: "Vietnamese",
// // //       cs: "Czech",
// // //       hu: "Hungarian",
// // //       ro: "Romanian",
// // //       bg: "Bulgarian",
// // //       hr: "Croatian",
// // //       sk: "Slovak",
// // //       sl: "Slovenian",
// // //       et: "Estonian",
// // //       lv: "Latvian",
// // //       lt: "Lithuanian",
// // //       mt: "Maltese",
// // //       ga: "Irish",
// // //       cy: "Welsh",
// // //       eu: "Basque",
// // //       ca: "Catalan",
// // //       gl: "Galician",
// // //       is: "Icelandic",
// // //       mk: "Macedonian",
// // //       sq: "Albanian",
// // //       sr: "Serbian",
// // //       bs: "Bosnian",
// // //       me: "Montenegrin",
// // //       uk: "Ukrainian",
// // //       be: "Belarusian",
// // //       he: "Hebrew",
// // //       fa: "Persian",
// // //       ur: "Urdu",
// // //       bn: "Bengali",
// // //       ta: "Tamil",
// // //       te: "Telugu",
// // //       ml: "Malayalam",
// // //       kn: "Kannada",
// // //       gu: "Gujarati",
// // //       pa: "Punjabi",
// // //       ne: "Nepali",
// // //       si: "Sinhala",
// // //       my: "Burmese",
// // //       km: "Khmer",
// // //       lo: "Lao",
// // //       ka: "Georgian",
// // //       am: "Amharic",
// // //       sw: "Swahili",
// // //       zu: "Zulu",
// // //       af: "Afrikaans",
// // //       xh: "Xhosa",
// // //       ig: "Igbo",
// // //       yo: "Yoruba",
// // //       ha: "Hausa",
// // //     };
// // //     return languages[code] || code.toUpperCase();
// // //   };

// // //   const startLiveTranscription = async () => {
// // //     setLiveTranscripts([]);
// // //     setTranscriptionError(null);
// // //     // Reset summary state when starting new transcription
// // //     setLiveTranscriptionSummary(null);
// // //     setSummaryError(null);

// // //     try {
// // //       const { combinedAudioStream } = await setupCombinedAudioStream();

// // //       const DEEPGRAM_API_KEY =
// // //         import.meta.env.VITE_APP_DEEPGRAM_API_KEY || "YOUR_DEEPGRAM_API_KEY";
// // //       const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
// // //         "token",
// // //         DEEPGRAM_API_KEY,
// // //       ]);

// // //       deepgramSocketRef.current = socket;

// // //       socket.onopen = () => {

// // //         socket.send(
// // //           JSON.stringify({
// // //             type: "ParametersChange",
// // //             parameters: {
// // //               interim_results: true,
// // //               diarize: true,
// // //               punctuate: true,
// // //               endpointing: 100,
// // //               utterance_end_ms: 1000,
// // //               smart_format: true,
// // //               detect_language: true,
// // //               language: "auto",
// // //               detect_language_confidence: 0.1,
// // //               multichannel: false,
// // //               alternatives: 1,
// // //             },
// // //           })
// // //         );

// // //         const mediaRecorder = new MediaRecorder(combinedAudioStream, {
// // //           mimeType: "audio/webm;codecs=opus",
// // //           audioBitsPerSecond: 16000,
// // //         });

// // //         mediaRecorder.ondataavailable = (event) => {
// // //           if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
// // //             socket.send(event.data);
// // //           }
// // //         };

// // //         mediaRecorder.start(250);
// // //         audioRecorderRef.current = mediaRecorder;
// // //       };

// // //       socket.onmessage = (message) => {
// // //         const data = JSON.parse(message.data);

// // //         if (data.type === "Results") {
// // //           if (data.channel?.alternatives?.[0]) {
// // //             const transcript = data.channel.alternatives[0];

// // //             if (!data.is_final) return;

// // //             const detectedLanguage = data.language || "en";
// // //             const languageConfidence = data.language_confidence || 0;
// // //             const languageName = getLanguageName(detectedLanguage);

// // //             const newTranscript = {
// // //               text: transcript.transcript || "",
// // //               speaker: transcript.words?.[0]?.speaker
// // //                 ? `Speaker ${transcript.words[0].speaker}`
// // //                 : "Unknown",
// // //               isFinal: data.is_final,
// // //               timestamp: new Date().toISOString(),
// // //               language: detectedLanguage,
// // //               languageName: languageName,
// // //               confidence: languageConfidence,
// // //               languageConfidenceScore: Math.round(languageConfidence * 100),
// // //               id: Date.now() + Math.random(), // Unique ID for React keys
// // //             };

// // //             setLiveTranscripts((prev) => [...prev, newTranscript]);
// // //           }
// // //         }
// // //       };

// // //       socket.onerror = (error) => {
// // //         console.error("Deepgram WebSocket Error:", error);
// // //         setTranscriptionError("Error connecting to transcription service");
// // //       };

// // //       socket.onclose = () => {

// // //       };

// // //       setTimer(0);
// // //       setIsLiveTranscribing(true);
// // //     } catch (error) {
// // //       console.error("Error starting live transcription:", error);
// // //       setTranscriptionError("Failed to start live transcription");
// // //     }
// // //   };

// // //   // Generate live transcription summary
// // //   const generateLiveTranscriptionSummary = async () => {
// // //     if (!liveTranscripts || liveTranscripts.length === 0) {
// // //       setSummaryError("No transcripts available to summarize");
// // //       return;
// // //     }

// // //     setIsGeneratingSummary(true);
// // //     setSummaryError(null);

// // //     try {

// // //       const response = await axios.post(
// // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/live-summary",
// // //         {
// // //           liveTranscripts: liveTranscripts,
// // //         },
// // //         {
// // //           headers: {
// // //             Authorization: localStorage.getItem("token"),
// // //             "Content-Type": "application/json",
// // //           },
// // //         }
// // //       );

// // //       if (response.data.success) {
// // //         setLiveTranscriptionSummary(response.data.summary);
// // //       } else {
// // //         throw new Error("Failed to generate summary");
// // //       }
// // //     } catch (error) {
// // //       console.error("❌ Error generating live transcription summary:", error);
// // //       setSummaryError("Failed to generate summary. Please try again.");
// // //     } finally {
// // //       setIsGeneratingSummary(false);
// // //     }
// // //   };

// // //   const stopLiveTranscription = async () => {
// // //     try {
// // //       if (audioRecorderRef.current) {
// // //         audioRecorderRef.current.stop();
// // //       }

// // //       if (deepgramSocketRef.current) {
// // //         deepgramSocketRef.current.close();
// // //       }

// // //       if (screenStreamRef.current) {
// // //         screenStreamRef.current.getTracks().forEach((track) => track.stop());
// // //       }

// // //       if (micStreamRef.current) {
// // //         micStreamRef.current.getTracks().forEach((track) => track.stop());
// // //       }

// // //       setIsLiveTranscribing(false);

// // //       // Automatically generate summary when stopping live transcription
// // //       if (liveTranscripts.length > 0) {
// // //         await generateLiveTranscriptionSummary();
// // //       }
// // //     } catch (error) {
// // //       console.error("Error stopping live transcription:", error);
// // //     }
// // //   };

// // //   const clearTranscripts = () => {
// // //     setLiveTranscripts([]);
// // //     setTranscriptionError(null);
// // //     // Also clear summary when clearing transcripts
// // //     setLiveTranscriptionSummary(null);
// // //     setSummaryError(null);
// // //   };

// // //   const downloadTranscripts = () => {
// // //     if (liveTranscripts.length === 0) return;

// // //     let content = "# Live Transcription\n\n";
// // //     content += `Date: ${new Date().toLocaleDateString()}\n`;
// // //     content += `Duration: ${formatTime(timer)}\n\n`;

// // //     liveTranscripts.forEach((transcript, index) => {
// // //       content += `${transcript.speaker} (${transcript.languageName}): ${transcript.text}\n\n`;
// // //     });

// // //     const blob = new Blob([content], { type: "text/plain" });
// // //     const url = URL.createObjectURL(blob);
// // //     const link = document.createElement("a");
// // //     link.href = url;
// // //     link.download = `live-transcript-${new Date().toISOString()}.txt`;
// // //     link.click();
// // //   };

// // //   // Get speaker color based on speaker name
// // //   const getSpeakerColor = (speaker) => {
// // //     const colors = [
// // //       "bg-purple-500",
// // //       "bg-pink-500", 
// // //       "bg-blue-500",
// // //       "bg-green-500",
// // //       "bg-yellow-500",
// // //       "bg-red-500",
// // //       "bg-indigo-500",
// // //       "bg-orange-500"
// // //     ];

// // //     // Simple hash function to consistently assign colors
// // //     let hash = 0;
// // //     for (let i = 0; i < speaker.length; i++) {
// // //       hash = speaker.charCodeAt(i) + ((hash << 5) - hash);
// // //     }
// // //     return colors[Math.abs(hash) % colors.length];
// // //   };

// // //   // Get speaker initials
// // //   const getSpeakerInitials = (speaker) => {
// // //     if (speaker === "Unknown") return "?";
// // //     if (speaker.startsWith("Speaker")) {
// // //       return speaker.replace("Speaker ", "S");
// // //     }
// // //     return speaker.split(" ").map(name => name[0]).join("").toUpperCase().slice(0, 2);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex justify-center p-8">
// // //       <div className="w-full max-w-6xl mt-10">
// // //         {/* Main Heading */}
// // //         <h1 className="text-4xl font-bold text-black text-center mb-16">
// // //           Live Transcription Session
// // //         </h1>

// // //         <div className="flex gap-8">
// // //           {/* Left Panel - Meeting Recorder */}
// // //           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
// // //             <div className="text-center">
// // //               {/* Title */}
// // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// // //                 Live Transcription
// // //               </h2>

// // //               {/* Subtitle */}
// // //               <p className="text-gray-500 mb-12 text-base leading-relaxed">
// // //                 {isLiveTranscribing 
// // //                   ? "Live transcription in progress with automatic language detection"
// // //                   : "Start live transcription with automatic language detection"
// // //                 }
// // //               </p>

// // //               {/* Timer */}
// // //               <motion.div 
// // //                 className={`text-7xl font-light mb-8 tracking-wide ${
// // //                   isLiveTranscribing ? 'text-red-500' : 'text-purple-500'
// // //                 }`}
// // //                 animate={{
// // //                   scale: isLiveTranscribing ? [1, 1.02, 1] : 1,
// // //                 }}
// // //                 transition={{
// // //                   repeat: isLiveTranscribing ? Infinity : 0,
// // //                   duration: 1,
// // //                 }}
// // //               >
// // //                 {formatTime(timer)}
// // //               </motion.div>

// // //               {/* Audio Waveform */}
// // //               <div className="mb-8 flex justify-center">
// // //                 {isLiveTranscribing ? (
// // //                   // Live animated waveform
// // //                   <div className="flex items-center justify-center h-16 gap-1">
// // //                     {waveform.map((height, index) => (
// // //                       <motion.div
// // //                         key={index}
// // //                         className={`w-1 rounded-full ${
// // //                           isLiveTranscribing ? 'bg-red-500' : 'bg-purple-500'
// // //                         }`}
// // //                         animate={{ height }}
// // //                         transition={{ duration: 0.2 }}
// // //                       />
// // //                     ))}
// // //                   </div>
// // //                 ) : (
// // //                   // Static waveform
// // //                   <svg
// // //                     width="300"
// // //                     height="60"
// // //                     viewBox="0 0 300 60"
// // //                     className="opacity-80"
// // //                   >
// // //                     <defs>
// // //                       <linearGradient
// // //                         id="waveGradient"
// // //                         x1="0%"
// // //                         y1="0%"
// // //                         x2="0%"
// // //                         y2="100%"
// // //                       >
// // //                         <stop offset="0%" stopColor="#a855f7" />
// // //                         <stop offset="100%" stopColor="#d8b4fe" />
// // //                       </linearGradient>
// // //                     </defs>

// // //                     {Array.from({ length: 50 }, (_, i) => {
// // //                       const heights = [
// // //                         8, 15, 25, 12, 30, 18, 35, 22, 28, 16, 40, 25, 20, 35, 15,
// // //                         45, 30, 18, 25, 12, 38, 20, 32, 15, 28, 22, 35, 18, 25,
// // //                         30, 20, 35, 15, 28, 25, 18, 32, 20, 25, 15, 30, 22, 35,
// // //                         18, 25, 20, 28, 15, 32, 25,
// // //                       ];
// // //                       const height = heights[i] || 15;
// // //                       const x = i * 6;
// // //                       const y = (60 - height) / 2;

// // //                       return (
// // //                         <rect
// // //                           key={i}
// // //                           x={x}
// // //                           y={y}
// // //                           width="3"
// // //                           height={height}
// // //                           fill="url(#waveGradient)"
// // //                           rx="1.5"
// // //                           className="opacity-60"
// // //                         />
// // //                       );
// // //                     })}
// // //                   </svg>
// // //                 )}
// // //               </div>

// // //               {/* Control Buttons */}
// // //               <div className="flex items-center justify-center gap-8 mb-8">
// // //                 {/* Start/Stop Button */}
// // //                 <motion.button 
// // //                   onClick={isLiveTranscribing ? stopLiveTranscription : startLiveTranscription}
// // //                   className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center relative ${
// // //                     isLiveTranscribing 
// // //                       ? 'bg-red-500 hover:bg-red-600' 
// // //                       : 'bg-purple-500 hover:bg-purple-600'
// // //                   }`}
// // //                   whileHover={{ scale: 1.05 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                 >
// // //                   {isLiveTranscribing ? (
// // //                     <Square className="w-6 h-6 text-white fill-current" />
// // //                   ) : (
// // //                     <div className="w-6 h-6 bg-white rounded-full"></div>
// // //                   )}

// // //                   {/* Pulsing ring when recording */}
// // //                   {isLiveTranscribing && (
// // //                     <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></div>
// // //                   )}
// // //                 </motion.button>

// // //                 {/* Additional Controls */}
// // //                 {liveTranscripts.length > 0 && !isLiveTranscribing && (
// // //                   <>
// // //                     <motion.button
// // //                       onClick={clearTranscripts}
// // //                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
// // //                       whileHover={{ scale: 1.05 }}
// // //                       whileTap={{ scale: 0.95 }}
// // //                     >
// // //                       <Trash2 className="w-4 h-4 text-gray-600" />
// // //                     </motion.button>
// // //                     <motion.button
// // //                       onClick={downloadTranscripts}
// // //                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
// // //                       whileHover={{ scale: 1.05 }}
// // //                       whileTap={{ scale: 0.95 }}
// // //                     >
// // //                       <Download className="w-4 h-4 text-gray-600" />
// // //                     </motion.button>
// // //                   </>
// // //                 )}
// // //               </div>

// // //               {/* Status Messages */}
// // //               {transcriptionError && (
// // //                 <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
// // //                   <p className="text-red-600 text-sm">{transcriptionError}</p>
// // //                 </div>
// // //               )}

// // //               {isLiveTranscribing && (
// // //                 <div className="bg-green-50 border border-green-200 rounded-lg p-3">
// // //                   <p className="text-green-600 text-sm font-medium">
// // //                     🎤 Live transcription active - Start speaking...
// // //                   </p>
// // //                 </div>
// // //               )}

// // //               {/* Summary Generation Status */}
// // //               {isGeneratingSummary && (
// // //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
// // //                   <div className="flex items-center justify-center">
// // //                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
// // //                     <p className="text-blue-600 text-sm font-medium">
// // //                       Generating summary...
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Right Panel - Live Transcription */}
// // //           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
// // //             {/* Header */}
// // //             <div className="flex justify-between items-center mb-8 border-purple-400 border-b-2 pb-4">
// // //               <h3 className="text-xl font-semibold text-gray-900">
// // //                 Live Transcription
// // //               </h3>
// // //               <div className="flex items-center gap-2">
// // //                 {liveTranscripts.length > 0 && (
// // //                   <span className="text-sm text-gray-500">
// // //                     {liveTranscripts.length} messages
// // //                   </span>
// // //                 )}
// // //                 <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium opacity-50 cursor-not-allowed">
// // //                   Translate
// // //                   <ChevronDown className="w-4 h-4" />
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Live Transcription Summary Section */}
// // //             {(liveTranscriptionSummary || isGeneratingSummary || summaryError) && (
// // //               <motion.div
// // //                 className="mb-6"
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //               >
// // //                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
// // //                   <div className="flex items-center mb-3">
// // //                     <Lightbulb className="w-4 h-4 text-blue-600 mr-2" />
// // //                     <h4 className="font-semibold text-blue-800">
// // //                       Session Summary
// // //                     </h4>
// // //                   </div>

// // //                   {isGeneratingSummary && (
// // //                     <div className="text-center py-3">
// // //                       <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
// // //                       <p className="text-blue-600 text-sm">
// // //                         Generating intelligent summary...
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {summaryError && (
// // //                     <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
// // //                       <p className="text-red-600 text-sm">{summaryError}</p>
// // //                       <button
// // //                         onClick={generateLiveTranscriptionSummary}
// // //                         className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200"
// // //                       >
// // //                         Try Again
// // //                       </button>
// // //                     </div>
// // //                   )}

// // //                   {liveTranscriptionSummary && (
// // //                     <div className="space-y-3">
// // //                       {/* Summary Text */}
// // //                       <div className="bg-white rounded-lg p-3 border border-blue-100">
// // //                         <h5 className="font-medium text-gray-800 mb-2 text-sm">
// // //                           📝 Summary
// // //                         </h5>
// // //                         <p className="text-gray-700 text-sm leading-relaxed">
// // //                           {liveTranscriptionSummary.summary}
// // //                         </p>
// // //                       </div>

// // //                       {/* Key Points */}
// // //                       {liveTranscriptionSummary.keyPoints &&
// // //                         liveTranscriptionSummary.keyPoints.length > 0 && (
// // //                           <div className="bg-white rounded-lg p-3 border border-blue-100">
// // //                             <div className="flex items-center mb-2">
// // //                               <List className="w-3 h-3 text-blue-600 mr-2" />
// // //                               <h5 className="font-medium text-gray-800 text-sm">
// // //                                 Key Points
// // //                               </h5>
// // //                             </div>
// // //                             <ul className="space-y-1">
// // //                               {liveTranscriptionSummary.keyPoints.map(
// // //                                 (point, index) => (
// // //                                   <li
// // //                                     key={index}
// // //                                     className="text-gray-700 text-sm flex items-start"
// // //                                   >
// // //                                     <span className="text-blue-500 mr-2 text-xs">•</span>
// // //                                     {point}
// // //                                   </li>
// // //                                 )
// // //                               )}
// // //                             </ul>
// // //                           </div>
// // //                         )}

// // //                       {/* Participants */}
// // //                       {liveTranscriptionSummary.participants &&
// // //                         liveTranscriptionSummary.participants.length > 0 && (
// // //                           <div className="bg-white rounded-lg p-3 border border-blue-100">
// // //                             <div className="flex items-center mb-2">
// // //                               <Users className="w-3 h-3 text-blue-600 mr-2" />
// // //                               <h5 className="font-medium text-gray-800 text-sm">
// // //                                 Participants
// // //                               </h5>
// // //                             </div>
// // //                             <div className="flex flex-wrap gap-1">
// // //                               {liveTranscriptionSummary.participants.map(
// // //                                 (participant, index) => (
// // //                                   <span
// // //                                     key={index}
// // //                                     className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
// // //                                   >
// // //                                     {participant}
// // //                                   </span>
// // //                                 )
// // //                               )}
// // //                             </div>
// // //                           </div>
// // //                         )}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </motion.div>
// // //             )}

// // //             {/* Transcription Messages */}
// // //             <div className="space-y-6 max-h-80 overflow-y-auto">
// // //               {liveTranscripts.length > 0 ? (
// // //                 liveTranscripts.map((transcript) => (
// // //                   <motion.div
// // //                     key={transcript.id}
// // //                     className="flex items-start gap-3"
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.3 }}
// // //                   >
// // //                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${getSpeakerColor(transcript.speaker)}`}>
// // //                       {getSpeakerInitials(transcript.speaker)}
// // //                     </div>
// // //                     <div className="flex-1">
// // //                       <div className="flex items-center gap-2 mb-2">
// // //                         <span className="font-semibold text-gray-900">
// // //                           {transcript.speaker}
// // //                         </span>
// // //                         <div className="flex items-center gap-1 text-sm text-gray-500">
// // //                           <div className="w-3 h-3 text-green-500">✓</div>
// // //                           <span>{transcript.languageName}</span>
// // //                           {transcript.languageConfidenceScore && (
// // //                             <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
// // //                               {transcript.languageConfidenceScore}%
// // //                             </span>
// // //                           )}
// // //                         </div>
// // //                       </div>
// // //                       <p className="text-gray-700 text-sm leading-relaxed">
// // //                         {transcript.text}
// // //                       </p>
// // //                     </div>
// // //                   </motion.div>
// // //                 ))
// // //               ) : (
// // //                 <div className="text-center py-12">
// // //                   <div className="text-gray-400 mb-4">
// // //                     <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
// // //                     </svg>
// // //                   </div>
// // //                   <p className="text-gray-500 text-lg font-medium mb-2">
// // //                     {isLiveTranscribing 
// // //                       ? "Listening for speech..." 
// // //                       : "Start live transcription to see messages here"
// // //                     }
// // //                   </p>
// // //                   <p className="text-gray-400 text-sm">
// // //                     {isLiveTranscribing 
// // //                       ? "Speak in any language and see real-time transcription"
// // //                       : "Click the record button to begin"
// // //                     }
// // //                   </p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useRef, useEffect } from "react";
// // import { ChevronDown, Play, Square, Trash2, Download, ArrowRight } from "lucide-react";
// // import { motion } from "framer-motion";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // export default function LiveTranscriptionAndRecorder() {
// //   const navigate = useNavigate();

// //   // Live transcription states
// //   const [isLiveTranscribing, setIsLiveTranscribing] = useState(false);
// //   const [timer, setTimer] = useState(0);
// //   const [waveform, setWaveform] = useState(Array(50).fill(15));
// //   const [liveTranscripts, setLiveTranscripts] = useState([]);
// //   const [transcriptionError, setTranscriptionError] = useState(null);

// //   // Live transcription summary state
// //   const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
// //   const [summaryGenerated, setSummaryGenerated] = useState(false);
// //   const [summaryError, setSummaryError] = useState(null);

// //   // Refs for managing streams and connections
// //   const audioRecorderRef = useRef(null);
// //   const timerIntervalRef = useRef(null);
// //   const screenStreamRef = useRef(null);
// //   const micStreamRef = useRef(null);
// //   const deepgramSocketRef = useRef(null);

// //   // Timer and waveform effect
// //   useEffect(() => {
// //     if (isLiveTranscribing) {
// //       timerIntervalRef.current = setInterval(() => {
// //         setTimer((prev) => prev + 1);
// //         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
// //       }, 1000);
// //     } else {
// //       clearInterval(timerIntervalRef.current);
// //     }

// //     return () => clearInterval(timerIntervalRef.current);
// //   }, [isLiveTranscribing]);

// //   // Cleanup on unmount
// //   useEffect(() => {
// //     return () => {
// //       if (
// //         deepgramSocketRef.current &&
// //         deepgramSocketRef.current.readyState === WebSocket.OPEN
// //       ) {
// //         deepgramSocketRef.current.close();
// //       }
// //     };
// //   }, []);

// //   const formatTime = (seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins.toString().padStart(2, "0")}:${secs
// //       .toString()
// //       .padStart(2, "0")}`;
// //   };

// //   // Setup combined audio stream for transcription
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

// //       return { combinedAudioStream };
// //     } catch (error) {
// //       console.error("Error setting up combined audio stream:", error);
// //       throw error;
// //     }
// //   };

// //   const getLanguageName = (code) => {
// //     const languages = {
// //       en: "English",
// //       es: "Spanish",
// //       fr: "French",
// //       de: "German",
// //       it: "Italian",
// //       pt: "Portuguese",
// //       zh: "Chinese",
// //       ja: "Japanese",
// //       ko: "Korean",
// //       ar: "Arabic",
// //       hi: "Hindi",
// //       ru: "Russian",
// //       nl: "Dutch",
// //       sv: "Swedish",
// //       no: "Norwegian",
// //       da: "Danish",
// //       fi: "Finnish",
// //       pl: "Polish",
// //       tr: "Turkish",
// //       th: "Thai",
// //       vi: "Vietnamese",
// //       cs: "Czech",
// //       hu: "Hungarian",
// //       ro: "Romanian",
// //       bg: "Bulgarian",
// //       hr: "Croatian",
// //       sk: "Slovak",
// //       sl: "Slovenian",
// //       et: "Estonian",
// //       lv: "Latvian",
// //       lt: "Lithuanian",
// //       mt: "Maltese",
// //       ga: "Irish",
// //       cy: "Welsh",
// //       eu: "Basque",
// //       ca: "Catalan",
// //       gl: "Galician",
// //       is: "Icelandic",
// //       mk: "Macedonian",
// //       sq: "Albanian",
// //       sr: "Serbian",
// //       bs: "Bosnian",
// //       me: "Montenegrin",
// //       uk: "Ukrainian",
// //       be: "Belarusian",
// //       he: "Hebrew",
// //       fa: "Persian",
// //       ur: "Urdu",
// //       bn: "Bengali",
// //       ta: "Tamil",
// //       te: "Telugu",
// //       ml: "Malayalam",
// //       kn: "Kannada",
// //       gu: "Gujarati",
// //       pa: "Punjabi",
// //       ne: "Nepali",
// //       si: "Sinhala",
// //       my: "Burmese",
// //       km: "Khmer",
// //       lo: "Lao",
// //       ka: "Georgian",
// //       am: "Amharic",
// //       sw: "Swahili",
// //       zu: "Zulu",
// //       af: "Afrikaans",
// //       xh: "Xhosa",
// //       ig: "Igbo",
// //       yo: "Yoruba",
// //       ha: "Hausa",
// //     };
// //     return languages[code] || code.toUpperCase();
// //   };

// //   const startLiveTranscription = async () => {
// //     setLiveTranscripts([]);
// //     setTranscriptionError(null);
// //     // Reset summary state when starting new transcription
// //     setSummaryGenerated(false);
// //     setSummaryError(null);

// //     try {
// //       const { combinedAudioStream } = await setupCombinedAudioStream();

// //       const DEEPGRAM_API_KEY =
// //         import.meta.env.VITE_APP_DEEPGRAM_API_KEY || "YOUR_DEEPGRAM_API_KEY";
// //       const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
// //         "token",
// //         DEEPGRAM_API_KEY,
// //       ]);

// //       deepgramSocketRef.current = socket;

// //       socket.onopen = () => {

// //         socket.send(
// //           JSON.stringify({
// //             type: "ParametersChange",
// //             parameters: {
// //               interim_results: true,
// //               diarize: true,
// //               punctuate: true,
// //               endpointing: 100,
// //               utterance_end_ms: 1000,
// //               smart_format: true,
// //               detect_language: true,
// //               language: "auto",
// //               detect_language_confidence: 0.1,
// //               multichannel: false,
// //               alternatives: 1,
// //             },
// //           })
// //         );

// //         const mediaRecorder = new MediaRecorder(combinedAudioStream, {
// //           mimeType: "audio/webm;codecs=opus",
// //           audioBitsPerSecond: 16000,
// //         });

// //         mediaRecorder.ondataavailable = (event) => {
// //           if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
// //             socket.send(event.data);
// //           }
// //         };

// //         mediaRecorder.start(250);
// //         audioRecorderRef.current = mediaRecorder;
// //       };

// //       socket.onmessage = (message) => {
// //         const data = JSON.parse(message.data);

// //         if (data.type === "Results") {
// //           if (data.channel?.alternatives?.[0]) {
// //             const transcript = data.channel.alternatives[0];

// //             if (!data.is_final) return;

// //             const detectedLanguage = data.language || "en";
// //             const languageConfidence = data.language_confidence || 0;
// //             const languageName = getLanguageName(detectedLanguage);

// //             const newTranscript = {
// //               text: transcript.transcript || "",
// //               speaker: transcript.words?.[0]?.speaker
// //                 ? `Speaker ${transcript.words[0].speaker}`
// //                 : "Unknown",
// //               isFinal: data.is_final,
// //               timestamp: new Date().toISOString(),
// //               language: detectedLanguage,
// //               languageName: languageName,
// //               confidence: languageConfidence,
// //               languageConfidenceScore: Math.round(languageConfidence * 100),
// //               id: Date.now() + Math.random(), // Unique ID for React keys
// //             };

// //             setLiveTranscripts((prev) => [...prev, newTranscript]);
// //           }
// //         }
// //       };

// //       socket.onerror = (error) => {
// //         console.error("Deepgram WebSocket Error:", error);
// //         setTranscriptionError("Error connecting to transcription service");
// //       };

// //       socket.onclose = () => {
// //       };

// //       setTimer(0);
// //       setIsLiveTranscribing(true);
// //     } catch (error) {
// //       console.error("Error starting live transcription:", error);
// //       setTranscriptionError("Failed to start live transcription");
// //     }
// //   };

// //   // Generate live transcription summary
// //   const generateLiveTranscriptionSummary = async () => {
// //     if (!liveTranscripts || liveTranscripts.length === 0) {
// //       setSummaryError("No transcripts available to summarize");
// //       return;
// //     }

// //     setIsGeneratingSummary(true);
// //     setSummaryError(null);

// //     try {

// //       const response = await axios.post(
// //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/live-summary",
// //         {
// //           liveTranscripts: liveTranscripts,
// //         },
// //         {
// //           headers: {
// //             Authorization: localStorage.getItem("token"),
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       if (response.data.success) {
// //         setSummaryGenerated(true);
// //       } else {
// //         throw new Error("Failed to generate summary");
// //       }
// //     } catch (error) {
// //       console.error("❌ Error generating live transcription summary:", error);
// //       setSummaryError("Failed to generate summary. Please try again.");
// //     } finally {
// //       setIsGeneratingSummary(false);
// //     }
// //   };

// //   const stopLiveTranscription = async () => {
// //     try {
// //       if (audioRecorderRef.current) {
// //         audioRecorderRef.current.stop();
// //       }

// //       if (deepgramSocketRef.current) {
// //         deepgramSocketRef.current.close();
// //       }

// //       if (screenStreamRef.current) {
// //         screenStreamRef.current.getTracks().forEach((track) => track.stop());
// //       }

// //       if (micStreamRef.current) {
// //         micStreamRef.current.getTracks().forEach((track) => track.stop());
// //       }

// //       setIsLiveTranscribing(false);

// //       // Automatically generate summary when stopping live transcription
// //       if (liveTranscripts.length > 0) {
// //         await generateLiveTranscriptionSummary();
// //       }
// //     } catch (error) {
// //       console.error("Error stopping live transcription:", error);
// //     }
// //   };

// //   const clearTranscripts = () => {
// //     setLiveTranscripts([]);
// //     setTranscriptionError(null);
// //     // Also clear summary when clearing transcripts
// //     setSummaryGenerated(false);
// //     setSummaryError(null);
// //   };

// //   const downloadTranscripts = () => {
// //     if (liveTranscripts.length === 0) return;

// //     let content = "# Live Transcription\n\n";
// //     content += `Date: ${new Date().toLocaleDateString()}\n`;
// //     content += `Duration: ${formatTime(timer)}\n\n`;

// //     liveTranscripts.forEach((transcript, index) => {
// //       content += `${transcript.speaker} (${transcript.languageName}): ${transcript.text}\n\n`;
// //     });

// //     const blob = new Blob([content], { type: "text/plain" });
// //     const url = URL.createObjectURL(blob);
// //     const link = document.createElement("a");
// //     link.href = url;
// //     link.download = `live-transcript-${new Date().toISOString()}.txt`;
// //     link.click();
// //   };

// //   // Get speaker color based on speaker name
// //   const getSpeakerColor = (speaker) => {
// //     const colors = [
// //       "bg-purple-500",
// //       "bg-pink-500", 
// //       "bg-blue-500",
// //       "bg-green-500",
// //       "bg-yellow-500",
// //       "bg-red-500",
// //       "bg-indigo-500",
// //       "bg-orange-500"
// //     ];

// //     // Simple hash function to consistently assign colors
// //     let hash = 0;
// //     for (let i = 0; i < speaker.length; i++) {
// //       hash = speaker.charCodeAt(i) + ((hash << 5) - hash);
// //     }
// //     return colors[Math.abs(hash) % colors.length];
// //   };

// //   // Get speaker initials
// //   const getSpeakerInitials = (speaker) => {
// //     if (speaker === "Unknown") return "?";
// //     if (speaker.startsWith("Speaker")) {
// //       return speaker.replace("Speaker ", "S");
// //     }
// //     return speaker.split(" ").map(name => name[0]).join("").toUpperCase().slice(0, 2);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex justify-center p-8">
// //       <div className="w-full max-w-6xl mt-10">
// //         {/* Main Heading */}
// //         <h1 className="text-4xl font-bold text-black text-center mb-16">
// //           Live Transcription Session
// //         </h1>

// //         <div className="flex gap-8">
// //           {/* Left Panel - Meeting Recorder */}
// //           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
// //             <div className="text-center">
// //               {/* Title */}
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Live Transcription
// //               </h2>

// //               {/* Subtitle */}
// //               <p className="text-gray-500 mb-12 text-base leading-relaxed">
// //                 {isLiveTranscribing 
// //                   ? "Live transcription in progress with automatic language detection"
// //                   : "Start live transcription with automatic language detection"
// //                 }
// //               </p>

// //               {/* Timer */}
// //               <motion.div 
// //                 className={`text-7xl font-light mb-8 tracking-wide ${
// //                   isLiveTranscribing ? 'text-red-500' : 'text-purple-500'
// //                 }`}
// //                 animate={{
// //                   scale: isLiveTranscribing ? [1, 1.02, 1] : 1,
// //                 }}
// //                 transition={{
// //                   repeat: isLiveTranscribing ? Infinity : 0,
// //                   duration: 1,
// //                 }}
// //               >
// //                 {formatTime(timer)}
// //               </motion.div>

// //               {/* Audio Waveform */}
// //               <div className="mb-8 flex justify-center">
// //                 {isLiveTranscribing ? (
// //                   // Live animated waveform
// //                   <div className="flex items-center justify-center h-16 gap-1">
// //                     {waveform.map((height, index) => (
// //                       <motion.div
// //                         key={index}
// //                         className={`w-1 rounded-full ${
// //                           isLiveTranscribing ? 'bg-red-500' : 'bg-purple-500'
// //                         }`}
// //                         animate={{ height }}
// //                         transition={{ duration: 0.2 }}
// //                       />
// //                     ))}
// //                   </div>
// //                 ) : (
// //                   // Static waveform
// //                   <svg
// //                     width="300"
// //                     height="60"
// //                     viewBox="0 0 300 60"
// //                     className="opacity-80"
// //                   >
// //                     <defs>
// //                       <linearGradient
// //                         id="waveGradient"
// //                         x1="0%"
// //                         y1="0%"
// //                         x2="0%"
// //                         y2="100%"
// //                       >
// //                         <stop offset="0%" stopColor="#a855f7" />
// //                         <stop offset="100%" stopColor="#d8b4fe" />
// //                       </linearGradient>
// //                     </defs>

// //                     {Array.from({ length: 50 }, (_, i) => {
// //                       const heights = [
// //                         8, 15, 25, 12, 30, 18, 35, 22, 28, 16, 40, 25, 20, 35, 15,
// //                         45, 30, 18, 25, 12, 38, 20, 32, 15, 28, 22, 35, 18, 25,
// //                         30, 20, 35, 15, 28, 25, 18, 32, 20, 25, 15, 30, 22, 35,
// //                         18, 25, 20, 28, 15, 32, 25,
// //                       ];
// //                       const height = heights[i] || 15;
// //                       const x = i * 6;
// //                       const y = (60 - height) / 2;

// //                       return (
// //                         <rect
// //                           key={i}
// //                           x={x}
// //                           y={y}
// //                           width="3"
// //                           height={height}
// //                           fill="url(#waveGradient)"
// //                           rx="1.5"
// //                           className="opacity-60"
// //                         />
// //                       );
// //                     })}
// //                   </svg>
// //                 )}
// //               </div>

// //               {/* Control Buttons */}
// //               <div className="flex items-center justify-center gap-8 mb-8">
// //                 {/* Start/Stop Button */}
// //                 <motion.button 
// //                   onClick={isLiveTranscribing ? stopLiveTranscription : startLiveTranscription}
// //                   className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center relative ${
// //                     isLiveTranscribing 
// //                       ? 'bg-red-500 hover:bg-red-600' 
// //                       : 'bg-purple-500 hover:bg-purple-600'
// //                   }`}
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   {isLiveTranscribing ? (
// //                     <Square className="w-6 h-6 text-white fill-current" />
// //                   ) : (
// //                     <div className="w-6 h-6 bg-white rounded-full"></div>
// //                   )}

// //                   {/* Pulsing ring when recording */}
// //                   {isLiveTranscribing && (
// //                     <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></div>
// //                   )}
// //                 </motion.button>

// //                 {/* Additional Controls */}
// //                 {liveTranscripts.length > 0 && !isLiveTranscribing && (
// //                   <>
// //                     <motion.button
// //                       onClick={clearTranscripts}
// //                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
// //                       whileHover={{ scale: 1.05 }}
// //                       whileTap={{ scale: 0.95 }}
// //                     >
// //                       <Trash2 className="w-4 h-4 text-gray-600" />
// //                     </motion.button>
// //                     <motion.button
// //                       onClick={downloadTranscripts}
// //                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
// //                       whileHover={{ scale: 1.05 }}
// //                       whileTap={{ scale: 0.95 }}
// //                     >
// //                       <Download className="w-4 h-4 text-gray-600" />
// //                     </motion.button>
// //                   </>
// //                 )}
// //               </div>

// //               {/* Status Messages */}
// //               {transcriptionError && (
// //                 <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
// //                   <p className="text-red-600 text-sm">{transcriptionError}</p>
// //                 </div>
// //               )}

// //               {isLiveTranscribing && (
// //                 <div className="bg-green-50 border border-green-200 rounded-lg p-3">
// //                   <p className="text-green-600 text-sm font-medium">
// //                     🎤 Live transcription active - Start speaking...
// //                   </p>
// //                 </div>
// //               )}

// //               {/* Summary Generation Status */}
// //               {isGeneratingSummary && (
// //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
// //                   <div className="flex items-center justify-center">
// //                     <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
// //                     <div className="text-center">
// //                       <p className="text-blue-600 text-sm font-medium">
// //                         Processing transcription...
// //                       </p>
// //                       <p className="text-blue-500 text-xs mt-1">
// //                         Generating summary and analysis
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Summary Generated - Navigate to Recordings */}
// //               {summaryGenerated && !isGeneratingSummary && (
// //                 <motion.div
// //                   initial={{ opacity: 0, scale: 0.95 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   className="bg-green-50 border border-green-200 rounded-lg p-4"
// //                 >
// //                   <div className="text-center">
// //                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                       <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                       </svg>
// //                     </div>
// //                     <p className="text-green-600 text-sm font-medium mb-2">
// //                       Summary Generated Successfully!
// //                     </p>
// //                     <p className="text-green-500 text-xs mb-4">
// //                       Your transcription has been processed and saved
// //                     </p>
// //                     <button
// //                       onClick={() => navigate('/recordings')}
// //                       className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
// //                     >
// //                       View in Recordings
// //                       <ArrowRight className="w-4 h-4 ml-2" />
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Right Panel - Live Transcription */}
// //           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
// //             {/* Header */}
// //             <div className="flex justify-between items-center mb-8 border-purple-400 border-b-2 pb-4">
// //               <h3 className="text-xl font-semibold text-gray-900">
// //                 Live Transcription
// //               </h3>
// //               <div className="flex items-center gap-2">
// //                 {liveTranscripts.length > 0 && (
// //                   <span className="text-sm text-gray-500">
// //                     {liveTranscripts.length} messages
// //                   </span>
// //                 )}
// //                 <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium opacity-50 cursor-not-allowed">
// //                   Translate
// //                   <ChevronDown className="w-4 h-4" />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Transcription Messages */}
// //             <div className="space-y-6 max-h-80 overflow-y-auto">
// //               {liveTranscripts.length > 0 ? (
// //                 liveTranscripts.map((transcript) => (
// //                   <motion.div
// //                     key={transcript.id}
// //                     className="flex items-start gap-3"
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                   >
// //                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${getSpeakerColor(transcript.speaker)}`}>
// //                       {getSpeakerInitials(transcript.speaker)}
// //                     </div>
// //                     <div className="flex-1">
// //                       <div className="flex items-center gap-2 mb-2">
// //                         <span className="font-semibold text-gray-900">
// //                           {transcript.speaker}
// //                         </span>
// //                         <div className="flex items-center gap-1 text-sm text-gray-500">
// //                           <div className="w-3 h-3 text-green-500">✓</div>
// //                           <span>{transcript.languageName}</span>
// //                           {transcript.languageConfidenceScore && (
// //                             <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
// //                               {transcript.languageConfidenceScore}%
// //                             </span>
// //                           )}
// //                         </div>
// //                       </div>
// //                       <p className="text-gray-700 text-sm leading-relaxed">
// //                         {transcript.text}
// //                       </p>
// //                     </div>
// //                   </motion.div>
// //                 ))
// //               ) : (
// //                 <div className="text-center py-12">
// //                   <div className="text-gray-400 mb-4">
// //                     <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
// //                     </svg>
// //                   </div>
// //                   <p className="text-gray-500 text-lg font-medium mb-2">
// //                     {isLiveTranscribing 
// //                       ? "Listening for speech..." 
// //                       : "Start live transcription to see messages here"
// //                     }
// //                   </p>
// //                   <p className="text-gray-400 text-sm">
// //                     {isLiveTranscribing 
// //                       ? "Speak in any language and see real-time transcription"
// //                       : "Click the record button to begin"
// //                     }
// //                   </p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown, Play, Square, Trash2, Download, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function LiveTranscriptionAndRecorder() {
//   const navigate = useNavigate();

//   // Live transcription states
//   const [isLiveTranscribing, setIsLiveTranscribing] = useState(false);
//   const [timer, setTimer] = useState(0);
//   const [waveform, setWaveform] = useState(Array(50).fill(15));
//   const [liveTranscripts, setLiveTranscripts] = useState([]);
//   const [transcriptionError, setTranscriptionError] = useState(null);

//   // Live transcription summary state
//   const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
//   const [summaryGenerated, setSummaryGenerated] = useState(false);
//   const [summaryError, setSummaryError] = useState(null);

//   // Audio upload states
//   const [audioUploadProgress, setAudioUploadProgress] = useState(0);
//   const [isUploadingAudio, setIsUploadingAudio] = useState(false);
//   const [uploadSpeed, setUploadSpeed] = useState(0);
//   const [uploadedBytes, setUploadedBytes] = useState(0);
//   const [totalBytes, setTotalBytes] = useState(0);

//   // Refs for managing streams and connections
//   const audioRecorderRef = useRef(null);
//   const timerIntervalRef = useRef(null);
//   const screenStreamRef = useRef(null);
//   const micStreamRef = useRef(null);
//   const deepgramSocketRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   // Timer and waveform effect
//   useEffect(() => {
//     if (isLiveTranscribing) {
//       timerIntervalRef.current = setInterval(() => {
//         setTimer((prev) => prev + 1);
//         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
//       }, 1000);
//     } else {
//       clearInterval(timerIntervalRef.current);
//     }

//     return () => clearInterval(timerIntervalRef.current);
//   }, [isLiveTranscribing]);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (
//         deepgramSocketRef.current &&
//         deepgramSocketRef.current.readyState === WebSocket.OPEN
//       ) {
//         deepgramSocketRef.current.close();
//       }
//     };
//   }, []);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   // Helper function to format bytes
//   const formatBytes = (bytes) => {
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
//   };

//   // Helper function to format speed
//   const formatSpeed = (bytesPerSecond) => {
//     return formatBytes(bytesPerSecond) + "/s";
//   };

//   // Upload audio with presigned URL
//   const uploadAudioWithPresignedUrl = async (audioBlob) => {
//     try {

//       // Step 1: Get presigned URL from backend
//       const presignedResponse = await axios.post(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/generate-upload-url",
//         {
//           fileName: "live-transcription-audio.webm",
//           fileType: "audio/webm",
//         },
//         {
//           headers: {
//             Authorization: localStorage.getItem("token"),
//           },
//         }
//       );

//       const { presignedUrl, videoUrl: audioUrl } = presignedResponse.data;


//       // Set initial upload state
//       setTotalBytes(audioBlob.size);
//       setUploadedBytes(0);
//       setAudioUploadProgress(0);
//       setUploadSpeed(0);

//       // Step 2: Upload audio directly to S3 using XMLHttpRequest for progress tracking
//       return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         const startTime = Date.now();

//         xhr.upload.addEventListener("progress", (event) => {
//           if (event.lengthComputable) {
//             const percentComplete = (event.loaded / event.total) * 100;
//             const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
//             const speed = elapsedTime > 0 ? event.loaded / elapsedTime : 0;

//             setAudioUploadProgress(Math.round(percentComplete));
//             setUploadedBytes(event.loaded);
//             setUploadSpeed(speed);
//           }
//         });

//         xhr.upload.addEventListener("loadstart", () => {
//           setAudioUploadProgress(1);
//         });

//         xhr.upload.addEventListener("loadend", () => {
//           setAudioUploadProgress(100);
//         });

//         xhr.addEventListener("load", () => {
//           if (xhr.status >= 200 && xhr.status < 300) {
//             resolve({ audioUrl });
//           } else {
//             reject(new Error(`Upload failed: ${xhr.statusText}`));
//           }
//         });

//         xhr.addEventListener("error", () => {
//           reject(new Error("Upload failed due to network error"));
//         });

//         xhr.addEventListener("abort", () => {
//           reject(new Error("Upload was aborted"));
//         });

//         xhr.open("PUT", presignedUrl);
//         xhr.setRequestHeader("Content-Type", "audio/webm");
//         xhr.send(audioBlob);
//       });
//     } catch (error) {
//       console.error("❌ Audio upload failed:", error);
//       throw error;
//     }
//   };

//   // Setup combined audio stream for transcription
//   const setupCombinedAudioStream = async () => {
//     try {
//       const screenStream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//         audio: {
//           sampleRate: 16000,
//           channelCount: 1,
//           echoCancellation: true,
//           noiseSuppression: true,
//           autoGainControl: true,
//         },
//       });
//       screenStreamRef.current = screenStream;

//       const micStream = await navigator.mediaDevices.getUserMedia({
//         audio: {
//           echoCancellation: true,
//           noiseSuppression: true,
//           autoGainControl: true,
//           sampleRate: 16000,
//           channelCount: 1
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

//       return { combinedAudioStream };
//     } catch (error) {
//       console.error("Error setting up combined audio stream:", error);
//       throw error;
//     }
//   };

//   const getLanguageName = (code) => {
//     const languages = {
//       en: "English",
//       es: "Spanish",
//       fr: "French",
//       de: "German",
//       it: "Italian",
//       pt: "Portuguese",
//       zh: "Chinese",
//       ja: "Japanese",
//       ko: "Korean",
//       ar: "Arabic",
//       hi: "Hindi",
//       ru: "Russian",
//       nl: "Dutch",
//       sv: "Swedish",
//       no: "Norwegian",
//       da: "Danish",
//       fi: "Finnish",
//       pl: "Polish",
//       tr: "Turkish",
//       th: "Thai",
//       vi: "Vietnamese",
//       cs: "Czech",
//       hu: "Hungarian",
//       ro: "Romanian",
//       bg: "Bulgarian",
//       hr: "Croatian",
//       sk: "Slovak",
//       sl: "Slovenian",
//       et: "Estonian",
//       lv: "Latvian",
//       lt: "Lithuanian",
//       mt: "Maltese",
//       ga: "Irish",
//       cy: "Welsh",
//       eu: "Basque",
//       ca: "Catalan",
//       gl: "Galician",
//       is: "Icelandic",
//       mk: "Macedonian",
//       sq: "Albanian",
//       sr: "Serbian",
//       bs: "Bosnian",
//       me: "Montenegrin",
//       uk: "Ukrainian",
//       be: "Belarusian",
//       he: "Hebrew",
//       fa: "Persian",
//       ur: "Urdu",
//       bn: "Bengali",
//       ta: "Tamil",
//       te: "Telugu",
//       ml: "Malayalam",
//       kn: "Kannada",
//       gu: "Gujarati",
//       pa: "Punjabi",
//       ne: "Nepali",
//       si: "Sinhala",
//       my: "Burmese",
//       km: "Khmer",
//       lo: "Lao",
//       ka: "Georgian",
//       am: "Amharic",
//       sw: "Swahili",
//       zu: "Zulu",
//       af: "Afrikaans",
//       xh: "Xhosa",
//       ig: "Igbo",
//       yo: "Yoruba",
//       ha: "Hausa",
//     };
//     return languages[code] || code.toUpperCase();
//   };

//   const startLiveTranscription = async () => {
//     setLiveTranscripts([]);
//     setTranscriptionError(null);
//     // Reset summary state when starting new transcription
//     setSummaryGenerated(false);
//     setSummaryError(null);
//     audioChunksRef.current = [];

//     try {
//       const { combinedAudioStream } = await setupCombinedAudioStream();

//       // Setup audio recorder for saving to S3
//       const audioOptions = {
//         mimeType: "audio/webm;codecs=opus",
//         audioBitsPerSecond: 32000,
//       };
//       const audioRecorder = new MediaRecorder(combinedAudioStream, audioOptions);
//       audioRecorderRef.current = audioRecorder;

//       audioRecorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           audioChunksRef.current.push(event.data);
//         }
//       };

//       audioRecorder.start(250); // Collect data every 250ms

//       const DEEPGRAM_API_KEY =
//         import.meta.env.VITE_APP_DEEPGRAM_API_KEY || "YOUR_DEEPGRAM_API_KEY";
//       const socket = new WebSocket("wss://api.deepgram.com/v1/listen?model=nova-3-general&language=multi", [
//         "token",
//         DEEPGRAM_API_KEY,
//       ]);

//       deepgramSocketRef.current = socket;

//       socket.onopen = () => {

//         socket.send(
//           JSON.stringify({
//             type: "ParametersChange",
//             parameters: {
//               model: "nova-3",
//               interim_results: true,
//               diarize: true,
//               punctuate: true,
//               endpointing: 100,
//               utterance_end_ms: 1000,
//               smart_format: true,
//               detect_language: true,
//               language: null,
//               // detect_language_confidence: 0.6,
//               multichannel: false,
//               alternatives: 1,
//             },
//           })
//         );

//         const mediaRecorder = new MediaRecorder(combinedAudioStream, {
//           mimeType: "audio/webm;codecs=opus",
//           audioBitsPerSecond: 16000,
//         });

//         mediaRecorder.ondataavailable = (event) => {
//           if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
//             socket.send(event.data);
//           }
//         };

//         mediaRecorder.start(250);
//       };

//       socket.onmessage = (message) => {
//         const data = JSON.parse(message.data);

//         if (data.type === "Results") {
//           if (data.channel?.alternatives?.[0]) {
//             const transcript = data.channel.alternatives[0];

//             if (!data.is_final) return;

//             const detectedLanguage = data.language || "en";
//             const languageConfidence = data.language_confidence || 0;
//             const languageName = getLanguageName(detectedLanguage);

//             const newTranscript = {
//               text: transcript.transcript || "",
//               speaker: transcript.words?.[0]?.speaker
//                 ? `Speaker ${transcript.words[0].speaker}`
//                 : "Unknown",
//               isFinal: data.is_final,
//               timestamp: new Date().toISOString(),
//               language: detectedLanguage,
//               languageName: languageName,
//               confidence: languageConfidence,
//               languageConfidenceScore: Math.round(languageConfidence * 100),
//               id: Date.now() + Math.random(), // Unique ID for React keys
//             };

//             setLiveTranscripts((prev) => [...prev, newTranscript]);
//           }
//         }
//       };

//       socket.onerror = (error) => {
//         console.error("Deepgram WebSocket Error:", error);
//         setTranscriptionError("Error connecting to transcription service");
//       };

//       socket.onclose = () => {
//       };

//       setTimer(0);
//       setIsLiveTranscribing(true);
//     } catch (error) {
//       console.error("Error starting live transcription:", error);
//       setTranscriptionError("Failed to start live transcription");
//     }
//   };

//   // Generate live transcription summary
//   const generateLiveTranscriptionSummary = async () => {
//     if (!liveTranscripts || liveTranscripts.length === 0) {
//       setSummaryError("No transcripts available to summarize");
//       return;
//     }

//     setIsGeneratingSummary(true);
//     setSummaryError(null);

//     try {

//       // First, upload the audio to S3
//       setIsUploadingAudio(true);
//       const audioBlob = new Blob(audioChunksRef.current, {
//         type: "audio/webm",
//       });

//       const { audioUrl } = await uploadAudioWithPresignedUrl(audioBlob);
//       setIsUploadingAudio(false);

//       const response = await axios.post(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting",
//         {
//           type: 'live-transcription',
//           liveTranscripts: JSON.stringify(liveTranscripts),
//           audioUrl: audioUrl,
//           duration: timer.toString(),
//         },
//         {
//           headers: {
//             Authorization: localStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data.success) {
//         setSummaryGenerated(true);
//       } else {
//         throw new Error("Failed to generate summary");
//       }
//     } catch (error) {
//       console.error("❌ Error generating live transcription summary:", error);
//       setSummaryError("Failed to generate summary. Please try again.");
//     } finally {
//       setIsGeneratingSummary(false);
//     }
//   };

//   const stopLiveTranscription = async () => {
//     try {
//       if (audioRecorderRef.current) {
//         audioRecorderRef.current.stop();
//       }

//       if (deepgramSocketRef.current) {
//         deepgramSocketRef.current.close();
//       }

//       if (screenStreamRef.current) {
//         screenStreamRef.current.getTracks().forEach((track) => track.stop());
//       }

//       if (micStreamRef.current) {
//         micStreamRef.current.getTracks().forEach((track) => track.stop());
//       }

//       setIsLiveTranscribing(false);

//       // Automatically generate summary when stopping live transcription
//       if (liveTranscripts.length > 0) {
//         await generateLiveTranscriptionSummary();
//       }
//     } catch (error) {
//       console.error("Error stopping live transcription:", error);
//     }
//   };

//   const clearTranscripts = () => {
//     setLiveTranscripts([]);
//     setTranscriptionError(null);
//     // Also clear summary when clearing transcripts
//     setSummaryGenerated(false);
//     setSummaryError(null);
//   };

//   const downloadTranscripts = () => {
//     if (liveTranscripts.length === 0) return;

//     let content = "# Live Transcription\n\n";
//     content += `Date: ${new Date().toLocaleDateString()}\n`;
//     content += `Duration: ${formatTime(timer)}\n\n`;

//     liveTranscripts.forEach((transcript, index) => {
//       content += `${transcript.speaker} (${transcript.languageName}): ${transcript.text}\n\n`;
//     });

//     const blob = new Blob([content], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `live-transcript-${new Date().toISOString()}.txt`;
//     link.click();
//   };

//   // Get speaker color based on speaker name
//   const getSpeakerColor = (speaker) => {
//     const colors = [
//       "bg-purple-500",
//       "bg-pink-500",
//       "bg-blue-500",
//       "bg-green-500",
//       "bg-yellow-500",
//       "bg-red-500",
//       "bg-indigo-500",
//       "bg-orange-500"
//     ];

//     // Simple hash function to consistently assign colors
//     let hash = 0;
//     for (let i = 0; i < speaker.length; i++) {
//       hash = speaker.charCodeAt(i) + ((hash << 5) - hash);
//     }
//     return colors[Math.abs(hash) % colors.length];
//   };

//   // Get speaker initials
//   const getSpeakerInitials = (speaker) => {
//     if (speaker === "Unknown") return "?";
//     if (speaker.startsWith("Speaker")) {
//       return speaker.replace("Speaker ", "S");
//     }
//     return speaker.split(" ").map(name => name[0]).join("").toUpperCase().slice(0, 2);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center p-8">
//       <div className="w-full max-w-6xl mt-10">
//         {/* Main Heading */}
//         <h1 className="text-4xl font-bold text-black text-center mb-16">
//           Live Transcription Session
//         </h1>

//         <div className="flex gap-8">
//           {/* Left Panel - Meeting Recorder */}
//           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
//             <div className="text-center">
//               {/* Title */}
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Live Transcription
//               </h2>

//               {/* Subtitle */}
//               <p className="text-gray-500 mb-12 text-base leading-relaxed">
//                 {isLiveTranscribing
//                   ? "Live transcription in progress with automatic language detection"
//                   : "Start live transcription with automatic language detection"
//                 }
//               </p>

//               {/* Timer */}
//               <motion.div
//                 className={`text-7xl font-light mb-8 tracking-wide ${isLiveTranscribing ? 'text-red-500' : 'text-purple-500'
//                   }`}
//                 animate={{
//                   scale: isLiveTranscribing ? [1, 1.02, 1] : 1,
//                 }}
//                 transition={{
//                   repeat: isLiveTranscribing ? Infinity : 0,
//                   duration: 1,
//                 }}
//               >
//                 {formatTime(timer)}
//               </motion.div>

//               {/* Audio Waveform */}
//               <div className="mb-8 flex justify-center">
//                 {isLiveTranscribing ? (
//                   // Live animated waveform
//                   <div className="flex items-center justify-center h-16 gap-1">
//                     {waveform.map((height, index) => (
//                       <motion.div
//                         key={index}
//                         className={`w-1 rounded-full ${isLiveTranscribing ? 'bg-red-500' : 'bg-purple-500'
//                           }`}
//                         animate={{ height }}
//                         transition={{ duration: 0.2 }}
//                       />
//                     ))}
//                   </div>
//                 ) : (
//                   // Static waveform
//                   <svg
//                     width="300"
//                     height="60"
//                     viewBox="0 0 300 60"
//                     className="opacity-80"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="waveGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="0%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="#a855f7" />
//                         <stop offset="100%" stopColor="#d8b4fe" />
//                       </linearGradient>
//                     </defs>

//                     {Array.from({ length: 50 }, (_, i) => {
//                       const heights = [
//                         8, 15, 25, 12, 30, 18, 35, 22, 28, 16, 40, 25, 20, 35, 15,
//                         45, 30, 18, 25, 12, 38, 20, 32, 15, 28, 22, 35, 18, 25,
//                         30, 20, 35, 15, 28, 25, 18, 32, 20, 25, 15, 30, 22, 35,
//                         18, 25, 20, 28, 15, 32, 25,
//                       ];
//                       const height = heights[i] || 15;
//                       const x = i * 6;
//                       const y = (60 - height) / 2;

//                       return (
//                         <rect
//                           key={i}
//                           x={x}
//                           y={y}
//                           width="3"
//                           height={height}
//                           fill="url(#waveGradient)"
//                           rx="1.5"
//                           className="opacity-60"
//                         />
//                       );
//                     })}
//                   </svg>
//                 )}
//               </div>

//               {/* Control Buttons */}
//               <div className="flex items-center justify-center gap-8 mb-8">
//                 {/* Start/Stop Button */}
//                 <motion.button
//                   onClick={isLiveTranscribing ? stopLiveTranscription : startLiveTranscription}
//                   className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center relative ${isLiveTranscribing
//                       ? 'bg-red-500 hover:bg-red-600'
//                       : 'bg-purple-500 hover:bg-purple-600'
//                     }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   disabled={isUploadingAudio || isGeneratingSummary}
//                 >
//                   {isLiveTranscribing ? (
//                     <Square className="w-6 h-6 text-white fill-current" />
//                   ) : (
//                     <div className="w-6 h-6 bg-white rounded-full"></div>
//                   )}

//                   {/* Pulsing ring when recording */}
//                   {isLiveTranscribing && (
//                     <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></div>
//                   )}
//                 </motion.button>

//                 {/* Additional Controls */}
//                 {liveTranscripts.length > 0 && !isLiveTranscribing && (
//                   <>
//                     <motion.button
//                       onClick={clearTranscripts}
//                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Trash2 className="w-4 h-4 text-gray-600" />
//                     </motion.button>
//                     <motion.button
//                       onClick={downloadTranscripts}
//                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Download className="w-4 h-4 text-gray-600" />
//                     </motion.button>
//                   </>
//                 )}
//               </div>

//               {/* Status Messages */}
//               {transcriptionError && (
//                 <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
//                   <p className="text-red-600 text-sm">{transcriptionError}</p>
//                 </div>
//               )}

//               {isLiveTranscribing && (
//                 <div className="bg-green-50 border border-green-200 rounded-lg p-3">
//                   <p className="text-green-600 text-sm font-medium">
//                     🎤 Live transcription active - Start speaking...
//                   </p>
//                 </div>
//               )}

//               {/* Audio Upload Progress */}
//               {isUploadingAudio && (
//                 <div className="w-full space-y-3 mt-4">
//                   {/* Progress Bar */}
//                   <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
//                     <motion.div
//                       className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
//                       style={{ width: `${audioUploadProgress}%` }}
//                       initial={{ width: 0 }}
//                       animate={{ width: `${audioUploadProgress}%` }}
//                     />
//                   </div>

//                   {/* Upload Stats */}
//                   <div className="flex justify-between items-center text-sm">
//                     <span className="text-blue-600 font-medium">
//                       Uploading Audio: {audioUploadProgress}%
//                     </span>
//                     {uploadSpeed > 0 && (
//                       <span className="text-gray-600">
//                         {formatSpeed(uploadSpeed)}
//                       </span>
//                     )}
//                   </div>

//                   {/* File Size Information */}
//                   {totalBytes > 0 && (
//                     <div className="flex justify-between items-center text-xs text-gray-500">
//                       <span>
//                         {formatBytes(uploadedBytes)} / {formatBytes(totalBytes)}
//                       </span>
//                       {audioUploadProgress > 0 && audioUploadProgress < 100 && (
//                         <span>
//                           ETA:{" "}
//                           {uploadSpeed > 0
//                             ? Math.round(
//                               (totalBytes - uploadedBytes) / uploadSpeed
//                             )
//                             : "?"}
//                           s
//                         </span>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* Summary Generation Status */}
//               {isGeneratingSummary && !isUploadingAudio && (
//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                   <div className="flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
//                     <div className="text-center">
//                       <p className="text-blue-600 text-sm font-medium">
//                         Processing transcription...
//                       </p>
//                       <p className="text-blue-500 text-xs mt-1">
//                         Generating summary and analysis
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Summary Generated - Navigate to Recordings */}
//               {summaryGenerated && !isGeneratingSummary && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="bg-green-50 border border-green-200 rounded-lg p-4"
//                 >
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="text-green-600 text-sm font-medium mb-2">
//                       Summary Generated Successfully!
//                     </p>
//                     <p className="text-green-500 text-xs mb-4">
//                       Your transcription has been processed and saved
//                     </p>
//                     <button
//                       onClick={() => navigate('/recordings')}
//                       className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
//                     >
//                       View in Recordings
//                       <ArrowRight className="w-4 h-4 ml-2" />
//                     </button>
//                   </div>
//                 </motion.div>
//               )}

//               {/* Summary Error */}
//               {summaryError && (
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
//                   <p className="text-yellow-700 text-sm">{summaryError}</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Panel - Live Transcription */}
//           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8 border-purple-400 border-b-2 pb-4">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Live Transcription
//               </h3>
//               <div className="flex items-center gap-2">
//                 {liveTranscripts.length > 0 && (
//                   <span className="text-sm text-gray-500">
//                     {liveTranscripts.length} messages
//                   </span>
//                 )}
//                 <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium opacity-50 cursor-not-allowed">
//                   Translate
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Transcription Messages */}
//             <div className="space-y-6 max-h-80 overflow-y-auto">
//               {liveTranscripts.length > 0 ? (
//                 liveTranscripts.map((transcript) => (
//                   <motion.div
//                     key={transcript.id}
//                     className="flex items-start gap-3"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${getSpeakerColor(transcript.speaker)}`}>
//                       {getSpeakerInitials(transcript.speaker)}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="font-semibold text-gray-900">
//                           {transcript.speaker}
//                         </span>
//                         <div className="flex items-center gap-1 text-sm text-gray-500">
//                           <div className="w-3 h-3 text-green-500">✓</div>
//                           <span>{transcript.languageName}</span>
//                           {transcript.languageConfidenceScore && (
//                             <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
//                               {transcript.languageConfidenceScore}%
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                       <p className="text-gray-700 text-sm leading-relaxed">
//                         {transcript.text}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))
//               ) : (
//                 <div className="text-center py-12">
//                   <div className="text-gray-400 mb-4">
//                     <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-500 text-lg font-medium mb-2">
//                     {isLiveTranscribing
//                       ? "Listening for speech..."
//                       : "Start live transcription to see messages here"
//                     }
//                   </p>
//                   <p className="text-gray-400 text-sm">
//                     {isLiveTranscribing
//                       ? "Speak in any language and see real-time transcription"
//                       : "Click the record button to begin"
//                     }
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown, Play, Square, Trash2, Download, ArrowRight, Globe, X, Check } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // Popular languages for translation
// const POPULAR_LANGUAGES = [
//   { code: 'es', name: 'Spanish', flag: '🇪🇸' },
//   { code: 'fr', name: 'French', flag: '🇫🇷' },
//   { code: 'de', name: 'German', flag: '🇩🇪' },
//   { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
//   { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
//   { code: 'ko', name: 'Korean', flag: '🇰🇷' },
//   { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
//   { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
//   { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
//   { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
//   { code: 'ru', name: 'Russian', flag: '🇷🇺' },
//   { code: 'it', name: 'Italian', flag: '🇮🇹' },
//   { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
//   { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
//   { code: 'th', name: 'Thai', flag: '🇹🇭' },
// ];

// export default function LiveTranscriptionAndRecorder() {
//   // Live transcription states
//   const [isLiveTranscribing, setIsLiveTranscribing] = useState(false);
//   const [timer, setTimer] = useState(0);
//   const [waveform, setWaveform] = useState(Array(50).fill(15));
//   const [liveTranscripts, setLiveTranscripts] = useState([]);
//   const [transcriptionError, setTranscriptionError] = useState(null);

//   // Translation states
//   const [showLanguageModal, setShowLanguageModal] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [isTranslationEnabled, setIsTranslationEnabled] = useState(false);
//   const [translatingMessages, setTranslatingMessages] = useState(new Set());

//   // Live transcription summary state
//   const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
//   const [summaryGenerated, setSummaryGenerated] = useState(false);
//   const [summaryError, setSummaryError] = useState(null);

//   // Audio upload states
//   const [audioUploadProgress, setAudioUploadProgress] = useState(0);
//   const [isUploadingAudio, setIsUploadingAudio] = useState(false);
//   const [uploadSpeed, setUploadSpeed] = useState(0);
//   const [uploadedBytes, setUploadedBytes] = useState(0);
//   const [totalBytes, setTotalBytes] = useState(0);

//   // Refs for managing streams and connections
//   const audioRecorderRef = useRef(null);
//   const timerIntervalRef = useRef(null);
//   const screenStreamRef = useRef(null);
//   const micStreamRef = useRef(null);
//   const deepgramSocketRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   // Timer and waveform effect
//   useEffect(() => {
//     if (isLiveTranscribing) {
//       timerIntervalRef.current = setInterval(() => {
//         setTimer((prev) => prev + 1);
//         setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
//       }, 1000);
//     } else {
//       clearInterval(timerIntervalRef.current);
//     }

//     return () => clearInterval(timerIntervalRef.current);
//   }, [isLiveTranscribing]);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (
//         deepgramSocketRef.current &&
//         deepgramSocketRef.current.readyState === WebSocket.OPEN
//       ) {
//         deepgramSocketRef.current.close();
//       }
//     };
//   }, []);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   // Helper function to format bytes
//   const formatBytes = (bytes) => {
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
//   };

//   // Helper function to format speed
//   const formatSpeed = (bytesPerSecond) => {
//     return formatBytes(bytesPerSecond) + "/s";
//   };

//   // Real translation function using API
//   const translateText = async (text, messageId) => {
//     if (!selectedLanguage || !text.trim()) return text;

//     try {
//       setTranslatingMessages(prev => new Set([...prev, messageId]));

//       // Make actual API call to backend
//       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/translate/live-text', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': localStorage.getItem('token'),
//         },
//         body: JSON.stringify({
//           text: text,
//           targetLanguage: selectedLanguage.code,
//           targetLanguageName: selectedLanguage.name
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (!data.success) {
//         throw new Error(data.error || 'Translation failed');
//       }
//       return data.translatedText;

//     } catch (error) {
//       console.error("Translation error:", error);

//       // Handle specific error types
//       if (error.message.includes('401') || error.message.includes('unauthorized')) {
//         setTranscriptionError('Authentication failed. Please log in again.');
//       } else if (error.message.includes('429') || error.message.includes('quota')) {
//         setTranscriptionError('Translation quota exceeded. Please try again later.');
//       } else if (error.message.includes('503') || error.message.includes('network')) {
//         setTranscriptionError('Translation service temporarily unavailable.');
//       } else {
//         console.warn('Translation failed, showing original text');
//       }

//       return text; // Return original text on error
//     } finally {
//       setTranslatingMessages(prev => {
//         const newSet = new Set(prev);
//         newSet.delete(messageId);
//         return newSet;
//       });
//     }
//   };

//   // Language selection handlers
//   const handleTranslateClick = () => {
//     if (isLiveTranscribing) return; // Prevent changing during recording
//     setShowLanguageModal(true);
//   };

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setIsTranslationEnabled(true);
//     setShowLanguageModal(false);
//   };

//   const clearLanguageSelection = () => {
//     setSelectedLanguage(null);
//     setIsTranslationEnabled(false);
//     setShowLanguageModal(false);
//   };

//   // Real upload function
//   const uploadAudioWithPresignedUrl = async (audioBlob) => {
//     try {

//       // Step 1: Get presigned URL from backend
//       const presignedResponse = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/generate-upload-url', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': localStorage.getItem('token'),
//         },
//         body: JSON.stringify({
//           fileName: "live-transcription-audio.webm",
//           fileType: "audio/webm",
//         }),
//       });

//       if (!presignedResponse.ok) {
//         throw new Error(`Failed to get presigned URL: ${presignedResponse.statusText}`);
//       }

//       const { presignedUrl, videoUrl: audioUrl } = await presignedResponse.json();

//       // Set initial upload state
//       setTotalBytes(audioBlob.size);
//       setUploadedBytes(0);
//       setAudioUploadProgress(0);
//       setUploadSpeed(0);

//       // Step 2: Upload audio directly to S3 using XMLHttpRequest for progress tracking
//       return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         const startTime = Date.now();

//         xhr.upload.addEventListener("progress", (event) => {
//           if (event.lengthComputable) {
//             const percentComplete = (event.loaded / event.total) * 100;
//             const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
//             const speed = elapsedTime > 0 ? event.loaded / elapsedTime : 0;

//             setAudioUploadProgress(Math.round(percentComplete));
//             setUploadedBytes(event.loaded);
//             setUploadSpeed(speed);

//           }
//         });

//         xhr.upload.addEventListener("loadstart", () => {
//           setAudioUploadProgress(1);
//         });

//         xhr.upload.addEventListener("loadend", () => {
//           setAudioUploadProgress(100);
//         });

//         xhr.addEventListener("load", () => {
//           if (xhr.status >= 200 && xhr.status < 300) {
//             resolve({ audioUrl });
//           } else {
//             reject(new Error(`Upload failed: ${xhr.statusText}`));
//           }
//         });

//         xhr.addEventListener("error", () => {
//           reject(new Error("Upload failed due to network error"));
//         });

//         xhr.addEventListener("abort", () => {
//           reject(new Error("Upload was aborted"));
//         });

//         xhr.open("PUT", presignedUrl);
//         xhr.setRequestHeader("Content-Type", "audio/webm");
//         xhr.send(audioBlob);
//       });
//     } catch (error) {
//       console.error("❌ Audio upload failed:", error);
//       throw error;
//     }
//   };

//   // Setup combined audio stream for transcription
//   const setupCombinedAudioStream = async () => {
//     try {
//       const screenStream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//         audio: {
//           sampleRate: 16000,
//           channelCount: 1,
//           echoCancellation: true,
//           noiseSuppression: true,
//           autoGainControl: true,
//         },
//       });
//       screenStreamRef.current = screenStream;

//       const micStream = await navigator.mediaDevices.getUserMedia({
//         audio: {
//           echoCancellation: true,
//           noiseSuppression: true,
//           autoGainControl: true,
//           sampleRate: 16000,
//           channelCount: 1
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

//       return { combinedAudioStream };
//     } catch (error) {
//       console.error("Error setting up combined audio stream:", error);
//       throw error;
//     }
//   };

//   const getLanguageName = (code) => {
//     const languages = {
//       en: "English",
//       es: "Spanish",
//       fr: "French",
//       de: "German",
//       it: "Italian",
//       pt: "Portuguese",
//       zh: "Chinese",
//       ja: "Japanese",
//       ko: "Korean",
//       ar: "Arabic",
//       hi: "Hindi",
//       ru: "Russian",
//       nl: "Dutch",
//       sv: "Swedish",
//       no: "Norwegian",
//       da: "Danish",
//       fi: "Finnish",
//       pl: "Polish",
//       tr: "Turkish",
//       th: "Thai",
//       vi: "Vietnamese",
//       cs: "Czech",
//       hu: "Hungarian",
//       ro: "Romanian",
//       bg: "Bulgarian",
//       hr: "Croatian",
//       sk: "Slovak",
//       sl: "Slovenian",
//       et: "Estonian",
//       lv: "Latvian",
//       lt: "Lithuanian",
//       mt: "Maltese",
//       ga: "Irish",
//       cy: "Welsh",
//       eu: "Basque",
//       ca: "Catalan",
//       gl: "Galician",
//       is: "Icelandic",
//       mk: "Macedonian",
//       sq: "Albanian",
//       sr: "Serbian",
//       bs: "Bosnian",
//       me: "Montenegrin",
//       uk: "Ukrainian",
//       be: "Belarusian",
//       he: "Hebrew",
//       fa: "Persian",
//       ur: "Urdu",
//       bn: "Bengali",
//       ta: "Tamil",
//       te: "Telugu",
//       ml: "Malayalam",
//       kn: "Kannada",
//       gu: "Gujarati",
//       pa: "Punjabi",
//       ne: "Nepali",
//       si: "Sinhala",
//       my: "Burmese",
//       km: "Khmer",
//       lo: "Lao",
//       ka: "Georgian",
//       am: "Amharic",
//       sw: "Swahili",
//       zu: "Zulu",
//       af: "Afrikaans",
//       xh: "Xhosa",
//       ig: "Igbo",
//       yo: "Yoruba",
//       ha: "Hausa",
//     };
//     return languages[code] || code.toUpperCase();
//   };

//   const startLiveTranscription = async () => {
//     setLiveTranscripts([]);
//     setTranscriptionError(null);
//     // Reset summary state when starting new transcription
//     setSummaryGenerated(false);
//     setSummaryError(null);
//     audioChunksRef.current = [];

//     try {
//       const { combinedAudioStream } = await setupCombinedAudioStream();

//       // Setup audio recorder for saving to S3
//       const audioOptions = {
//         mimeType: "audio/webm;codecs=opus",
//         audioBitsPerSecond: 32000,
//       };
//       const audioRecorder = new MediaRecorder(combinedAudioStream, audioOptions);
//       audioRecorderRef.current = audioRecorder;

//       audioRecorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           audioChunksRef.current.push(event.data);
//         }
//       };

//       audioRecorder.start(250); // Collect data every 250ms

//       const DEEPGRAM_API_KEY =
//         import.meta.env.VITE_APP_DEEPGRAM_API_KEY || "YOUR_DEEPGRAM_API_KEY";
//       const socket = new WebSocket("wss://api.deepgram.com/v1/listen?model=nova-3-general&language=multi", [
//         "token",
//         DEEPGRAM_API_KEY,
//       ]);

//       deepgramSocketRef.current = socket;

//       socket.onopen = () => {

//         socket.send(
//           JSON.stringify({
//             type: "ParametersChange",
//             parameters: {
//               model: "nova-3",
//               interim_results: true,
//               diarize: true,
//               punctuate: true,
//               endpointing: 100,
//               utterance_end_ms: 1000,
//               smart_format: true,
//               detect_language: true,
//               language: null,
//               multichannel: false,
//               alternatives: 1,
//             },
//           })
//         );

//         const mediaRecorder = new MediaRecorder(combinedAudioStream, {
//           mimeType: "audio/webm;codecs=opus",
//           audioBitsPerSecond: 16000,
//         });

//         mediaRecorder.ondataavailable = (event) => {
//           if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
//             socket.send(event.data);
//           }
//         };

//         mediaRecorder.start(250);
//       };

//       socket.onmessage = async (message) => {
//         const data = JSON.parse(message.data);

//         if (data.type === "Results") {
//           if (data.channel?.alternatives?.[0]) {
//             const transcript = data.channel.alternatives[0];

//             if (!data.is_final) return;

//             const detectedLanguage = data.language || "en";
//             const languageConfidence = data.language_confidence || 0;
//             const languageName = getLanguageName(detectedLanguage);

//             const messageId = Date.now() + Math.random();
//             const originalText = transcript.transcript || "";

//             const newTranscript = {
//               text: originalText,
//               originalText: originalText,
//               speaker: transcript.words?.[0]?.speaker
//                 ? `Speaker ${transcript.words[0].speaker}`
//                 : "Unknown",
//               isFinal: data.is_final,
//               timestamp: new Date().toISOString(),
//               language: detectedLanguage,
//               languageName: languageName,
//               confidence: languageConfidence,
//               languageConfidenceScore: Math.round(languageConfidence * 100),
//               id: messageId,
//               isTranslated: false,
//               isTranslating: false,
//             };

//             // Add the transcript first
//             setLiveTranscripts((prev) => [...prev, newTranscript]);

//             // If translation is enabled, translate the text
//             if (isTranslationEnabled && selectedLanguage && originalText.trim()) {
//               // Update the transcript to show it's being translated
//               setLiveTranscripts((prev) => 
//                 prev.map(t => 
//                   t.id === messageId 
//                     ? { ...t, isTranslating: true }
//                     : t
//                 )
//               );

//               try {
//                 const translatedText = await translateText(originalText, messageId);

//                 // Update with translated text
//                 setLiveTranscripts((prev) => 
//                   prev.map(t => 
//                     t.id === messageId 
//                       ? { 
//                           ...t, 
//                           text: translatedText, 
//                           isTranslated: true, 
//                           isTranslating: false 
//                         }
//                       : t
//                   )
//                 );
//               } catch (error) {
//                 console.error("Translation failed for message:", messageId, error);
//                 // Remove translating state on error
//                 setLiveTranscripts((prev) => 
//                   prev.map(t => 
//                     t.id === messageId 
//                       ? { ...t, isTranslating: false }
//                       : t
//                   )
//                 );
//               }
//             }
//           }
//         }
//       };

//       socket.onerror = (error) => {
//         console.error("Deepgram WebSocket Error:", error);
//         setTranscriptionError("Error connecting to transcription service");
//       };

//       socket.onclose = () => {
//       };

//       setTimer(0);
//       setIsLiveTranscribing(true);
//     } catch (error) {
//       console.error("Error starting live transcription:", error);
//       setTranscriptionError("Failed to start live transcription");
//     }
//   };

//   // Generate live transcription summary
//   const generateLiveTranscriptionSummary = async () => {
//     if (!liveTranscripts || liveTranscripts.length === 0) {
//       setSummaryError("No transcripts available to summarize");
//       return;
//     }

//     setIsGeneratingSummary(true);
//     setSummaryError(null);

//     try {

//       // First, upload the audio to S3
//       setIsUploadingAudio(true);
//       const audioBlob = new Blob(audioChunksRef.current, {
//         type: "audio/webm",
//       });

//       const { audioUrl } = await uploadAudioWithPresignedUrl(audioBlob);
//       setIsUploadingAudio(false);

//       // Simulate summary generation
//       await new Promise(resolve => setTimeout(resolve, 3000));

//       setSummaryGenerated(true);
//     } catch (error) {
//       console.error("❌ Error generating live transcription summary:", error);
//       setSummaryError("Failed to generate summary. Please try again.");
//     } finally {
//       setIsGeneratingSummary(false);
//     }
//   };

//   const stopLiveTranscription = async () => {
//     try {
//       if (audioRecorderRef.current) {
//         audioRecorderRef.current.stop();
//       }

//       if (deepgramSocketRef.current) {
//         deepgramSocketRef.current.close();
//       }

//       if (screenStreamRef.current) {
//         screenStreamRef.current.getTracks().forEach((track) => track.stop());
//       }

//       if (micStreamRef.current) {
//         micStreamRef.current.getTracks().forEach((track) => track.stop());
//       }

//       setIsLiveTranscribing(false);

//       // Automatically generate summary when stopping live transcription
//       if (liveTranscripts.length > 0) {
//         await generateLiveTranscriptionSummary();
//       }
//     } catch (error) {
//       console.error("Error stopping live transcription:", error);
//     }
//   };

//   const clearTranscripts = () => {
//     setLiveTranscripts([]);
//     setTranscriptionError(null);
//     // Also clear summary when clearing transcripts
//     setSummaryGenerated(false);
//     setSummaryError(null);
//   };

//   const downloadTranscripts = () => {
//     if (liveTranscripts.length === 0) return;

//     let content = "# Live Transcription\n\n";
//     content += `Date: ${new Date().toLocaleDateString()}\n`;
//     content += `Duration: ${formatTime(timer)}\n`;
//     if (isTranslationEnabled && selectedLanguage) {
//       content += `Translation: ${selectedLanguage.name}\n`;
//     }
//     content += "\n";

//     liveTranscripts.forEach((transcript, index) => {
//       if (isTranslationEnabled && transcript.isTranslated) {
//         content += `${transcript.speaker} (${transcript.languageName} → ${selectedLanguage.name}): ${transcript.text}\n`;
//         content += `Original: ${transcript.originalText}\n\n`;
//       } else {
//         content += `${transcript.speaker} (${transcript.languageName}): ${transcript.text}\n\n`;
//       }
//     });

//     const blob = new Blob([content], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `live-transcript-${new Date().toISOString()}.txt`;
//     link.click();
//   };

//   // Get speaker color based on speaker name
//   const getSpeakerColor = (speaker) => {
//     const colors = [
//       "bg-purple-500",
//       "bg-pink-500",
//       "bg-blue-500",
//       "bg-green-500",
//       "bg-yellow-500",
//       "bg-red-500",
//       "bg-indigo-500",
//       "bg-orange-500"
//     ];

//     // Simple hash function to consistently assign colors
//     let hash = 0;
//     for (let i = 0; i < speaker.length; i++) {
//       hash = speaker.charCodeAt(i) + ((hash << 5) - hash);
//     }
//     return colors[Math.abs(hash) % colors.length];
//   };

//   // Get speaker initials
//   const getSpeakerInitials = (speaker) => {
//     if (speaker === "Unknown") return "?";
//     if (speaker.startsWith("Speaker")) {
//       return speaker.replace("Speaker ", "S");
//     }
//     return speaker.split(" ").map(name => name[0]).join("").toUpperCase().slice(0, 2);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center p-8">
//       <div className="w-full max-w-6xl mt-10">
//         {/* Main Heading */}
//         <h1 className="text-4xl font-bold text-black text-center mb-16">
//           Live Transcription Session
//         </h1>

//         <div className="flex gap-8">
//           {/* Left Panel - Meeting Recorder */}
//           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
//             <div className="text-center">
//               {/* Title */}
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Live Transcription
//               </h2>

//               {/* Subtitle */}
//               <p className="text-gray-500 mb-12 text-base leading-relaxed">
//                 {isLiveTranscribing
//                   ? isTranslationEnabled 
//                     ? `Live transcription with translation to ${selectedLanguage.name}`
//                     : "Live transcription in progress with automatic language detection"
//                   : "Start live transcription with automatic language detection"
//                 }
//               </p>

//               {/* Timer */}
//               <motion.div
//                 className={`text-7xl font-light mb-8 tracking-wide ${isLiveTranscribing ? 'text-red-500' : 'text-purple-500'
//                   }`}
//                 animate={{
//                   scale: isLiveTranscribing ? [1, 1.02, 1] : 1,
//                 }}
//                 transition={{
//                   repeat: isLiveTranscribing ? Infinity : 0,
//                   duration: 1,
//                 }}
//               >
//                 {formatTime(timer)}
//               </motion.div>

//               {/* Audio Waveform */}
//               <div className="mb-8 flex justify-center">
//                 {isLiveTranscribing ? (
//                   // Live animated waveform
//                   <div className="flex items-center justify-center h-16 gap-1">
//                     {waveform.map((height, index) => (
//                       <motion.div
//                         key={index}
//                         className={`w-1 rounded-full ${isLiveTranscribing ? 'bg-red-500' : 'bg-purple-500'
//                           }`}
//                         animate={{ height }}
//                         transition={{ duration: 0.2 }}
//                       />
//                     ))}
//                   </div>
//                 ) : (
//                   // Static waveform
//                   <svg
//                     width="300"
//                     height="60"
//                     viewBox="0 0 300 60"
//                     className="opacity-80"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="waveGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="0%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="#a855f7" />
//                         <stop offset="100%" stopColor="#d8b4fe" />
//                       </linearGradient>
//                     </defs>

//                     {Array.from({ length: 50 }, (_, i) => {
//                       const heights = [
//                         8, 15, 25, 12, 30, 18, 35, 22, 28, 16, 40, 25, 20, 35, 15,
//                         45, 30, 18, 25, 12, 38, 20, 32, 15, 28, 22, 35, 18, 25,
//                         30, 20, 35, 15, 28, 25, 18, 32, 20, 25, 15, 30, 22, 35,
//                         18, 25, 20, 28, 15, 32, 25,
//                       ];
//                       const height = heights[i] || 15;
//                       const x = i * 6;
//                       const y = (60 - height) / 2;

//                       return (
//                         <rect
//                           key={i}
//                           x={x}
//                           y={y}
//                           width="3"
//                           height={height}
//                           fill="url(#waveGradient)"
//                           rx="1.5"
//                           className="opacity-60"
//                         />
//                       );
//                     })}
//                   </svg>
//                 )}
//               </div>

//               {/* Control Buttons */}
//               <div className="flex items-center justify-center gap-8 mb-8">
//                 {/* Start/Stop Button */}
//                 <motion.button
//                   onClick={isLiveTranscribing ? stopLiveTranscription : startLiveTranscription}
//                   className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center relative ${isLiveTranscribing
//                       ? 'bg-red-500 hover:bg-red-600'
//                       : 'bg-purple-500 hover:bg-purple-600'
//                     }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   disabled={isUploadingAudio || isGeneratingSummary}
//                 >
//                   {isLiveTranscribing ? (
//                     <Square className="w-6 h-6 text-white fill-current" />
//                   ) : (
//                     <div className="w-6 h-6 bg-white rounded-full"></div>
//                   )}

//                   {/* Pulsing ring when recording */}
//                   {isLiveTranscribing && (
//                     <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></div>
//                   )}
//                 </motion.button>

//                 {/* Additional Controls */}
//                 {liveTranscripts.length > 0 && !isLiveTranscribing && (
//                   <>
//                     <motion.button
//                       onClick={clearTranscripts}
//                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Trash2 className="w-4 h-4 text-gray-600" />
//                     </motion.button>
//                     <motion.button
//                       onClick={downloadTranscripts}
//                       className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Download className="w-4 h-4 text-gray-600" />
//                     </motion.button>
//                   </>
//                 )}
//               </div>

//               {/* Language Selection Status */}
//               {isTranslationEnabled && selectedLanguage && (
//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
//                   <div className="flex items-center justify-center gap-2">
//                     <Globe className="w-4 h-4 text-blue-600" />
//                     <span className="text-blue-600 text-sm font-medium">
//                       Translating to {selectedLanguage.flag} {selectedLanguage.name}
//                     </span>
//                     {!isLiveTranscribing && (
//                       <button
//                         onClick={clearLanguageSelection}
//                         className="ml-2 text-blue-400 hover:text-blue-600"
//                       >
//                         <X className="w-4 h-4" />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Status Messages */}
//               {transcriptionError && (
//                 <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
//                   <p className="text-red-600 text-sm">{transcriptionError}</p>
//                 </div>
//               )}

//               {isLiveTranscribing && (
//                 <div className="bg-green-50 border border-green-200 rounded-lg p-3">
//                   <p className="text-green-600 text-sm font-medium">
//                     🎤 Live transcription active - Start speaking...
//                   </p>
//                 </div>
//               )}

//               {/* Audio Upload Progress */}
//               {isUploadingAudio && (
//                 <div className="w-full space-y-3 mt-4">
//                   {/* Progress Bar */}
//                   <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
//                     <motion.div
//                       className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
//                       style={{ width: `${audioUploadProgress}%` }}
//                       initial={{ width: 0 }}
//                       animate={{ width: `${audioUploadProgress}%` }}
//                     />
//                   </div>

//                   {/* Upload Stats */}
//                   <div className="flex justify-between items-center text-sm">
//                     <span className="text-blue-600 font-medium">
//                       Uploading Audio: {audioUploadProgress}%
//                     </span>
//                     {uploadSpeed > 0 && (
//                       <span className="text-gray-600">
//                         {formatSpeed(uploadSpeed)}
//                       </span>
//                     )}
//                   </div>

//                   {/* File Size Information */}
//                   {totalBytes > 0 && (
//                     <div className="flex justify-between items-center text-xs text-gray-500">
//                       <span>
//                         {formatBytes(uploadedBytes)} / {formatBytes(totalBytes)}
//                       </span>
//                       {audioUploadProgress > 0 && audioUploadProgress < 100 && (
//                         <span>
//                           ETA:{" "}
//                           {uploadSpeed > 0
//                             ? Math.round(
//                               (totalBytes - uploadedBytes) / uploadSpeed
//                             )
//                             : "?"}
//                           s
//                         </span>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* Summary Generation Status */}
//               {isGeneratingSummary && !isUploadingAudio && (
//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                   <div className="flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
//                     <div className="text-center">
//                       <p className="text-blue-600 text-sm font-medium">
//                         Processing transcription...
//                       </p>
//                       <p className="text-blue-500 text-xs mt-1">
//                         Generating summary and analysis
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Summary Generated */}
//               {summaryGenerated && !isGeneratingSummary && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="bg-green-50 border border-green-200 rounded-lg p-4"
//                 >
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="text-green-600 text-sm font-medium mb-2">
//                       Summary Generated Successfully!
//                     </p>
//                     <p className="text-green-500 text-xs mb-4">
//                       Your transcription has been processed and saved
//                     </p>
//                     <button
//                       onClick={() => alert('Navigate to recordings page')}
//                       className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
//                     >
//                       View in Recordings
//                       <ArrowRight className="w-4 h-4 ml-2" />
//                     </button>
//                   </div>
//                 </motion.div>
//               )}

//               {/* Summary Error */}
//               {summaryError && (
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
//                   <p className="text-yellow-700 text-sm">{summaryError}</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Panel - Live Transcription */}
//           <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8 border-purple-400 border-b-2 pb-4">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Live Transcription
//               </h3>
//               <div className="flex items-center gap-2">
//                 {liveTranscripts.length > 0 && (
//                   <span className="text-sm text-gray-500">
//                     {liveTranscripts.length} messages
//                   </span>
//                 )}
//                 <button 
//                   onClick={handleTranslateClick}
//                   disabled={isLiveTranscribing}
//                   className={`text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${
//                     isLiveTranscribing 
//                       ? 'bg-gray-400 cursor-not-allowed opacity-50' 
//                       : isTranslationEnabled 
//                         ? 'bg-blue-500 hover:bg-blue-600' 
//                         : 'bg-pink-500 hover:bg-pink-600'
//                   }`}
//                 >
//                   <Globe className="w-4 h-4" />
//                   {isTranslationEnabled ? selectedLanguage.name : 'Translate'}
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Transcription Messages */}
//             <div className="space-y-6 max-h-80 overflow-y-auto">
//               {liveTranscripts.length > 0 ? (
//                 liveTranscripts.map((transcript) => (
//                   <motion.div
//                     key={transcript.id}
//                     className="flex items-start gap-3"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${getSpeakerColor(transcript.speaker)}`}>
//                       {getSpeakerInitials(transcript.speaker)}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="font-semibold text-gray-900">
//                           {transcript.speaker}
//                         </span>
//                         <div className="flex items-center gap-1 text-sm text-gray-500">
//                           <div className="w-3 h-3 text-green-500">✓</div>
//                           <span>{transcript.languageName}</span>
//                           {transcript.languageConfidenceScore && (
//                             <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
//                               {transcript.languageConfidenceScore}%
//                             </span>
//                           )}
//                           {transcript.isTranslated && (
//                             <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full flex items-center gap-1">
//                               <Globe className="w-3 h-3" />
//                               {selectedLanguage.name}
//                             </span>
//                           )}
//                           {transcript.isTranslating && (
//                             <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full flex items-center gap-1">
//                               <div className="w-3 h-3 border border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
//                               Translating...
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                       <p className="text-gray-700 text-sm leading-relaxed">
//                         {transcript.text}
//                       </p>
//                       {transcript.isTranslated && transcript.originalText && transcript.originalText !== transcript.text && (
//                         <p className="text-gray-500 text-xs mt-2 italic">
//                           Original: {transcript.originalText}
//                         </p>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))
//               ) : (
//                 <div className="text-center py-12">
//                   <div className="text-gray-400 mb-4">
//                     <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-500 text-lg font-medium mb-2">
//                     {isLiveTranscribing
//                       ? "Listening for speech..."
//                       : "Start live transcription to see messages here"
//                     }
//                   </p>
//                   <p className="text-gray-400 text-sm">
//                     {isLiveTranscribing
//                       ? "Speak in any language and see real-time transcription"
//                       : "Click the record button to begin"
//                     }
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Language Selection Modal */}
//       <AnimatePresence>
//         {showLanguageModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//             onClick={() => setShowLanguageModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900">Select Translation Language</h3>
//                 <button
//                   onClick={() => setShowLanguageModal(false)}
//                   className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>

//               <p className="text-gray-600 mb-6">
//                 Choose a language to translate your live transcription in real-time. You can change this before starting a new session.
//               </p>

//               {/* Current Selection */}
//               {isTranslationEnabled && selectedLanguage && (
//                 <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <span className="text-2xl">{selectedLanguage.flag}</span>
//                       <div>
//                         <p className="font-medium text-blue-900">{selectedLanguage.name}</p>
//                         <p className="text-sm text-blue-600">Currently selected</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={clearLanguageSelection}
//                       className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Disable Translation Option */}
//               <div className="mb-6">
//                 <button
//                   onClick={() => {
//                     clearLanguageSelection();
//                     setShowLanguageModal(false);
//                   }}
//                   className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
//                     !isTranslationEnabled 
//                       ? 'border-green-500 bg-green-50' 
//                       : 'border-gray-200 hover:border-gray-300'
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <span className="text-2xl">🌐</span>
//                       <div>
//                         <p className="font-medium text-gray-900">No Translation (Original Language)</p>
//                         <p className="text-sm text-gray-600">Show transcription in detected language</p>
//                       </div>
//                     </div>
//                     {!isTranslationEnabled && (
//                       <Check className="w-5 h-5 text-green-600" />
//                     )}
//                   </div>
//                 </button>
//               </div>

//               <h4 className="font-semibold text-gray-900 mb-4">Popular Languages</h4>

//               {/* Language Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {POPULAR_LANGUAGES.map((language) => (
//                   <button
//                     key={language.code}
//                     onClick={() => handleLanguageSelect(language)}
//                     className={`p-4 border-2 rounded-lg text-left transition-all ${
//                       selectedLanguage?.code === language.code 
//                         ? 'border-blue-500 bg-blue-50' 
//                         : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <span className="text-2xl">{language.flag}</span>
//                         <div>
//                           <p className="font-medium text-gray-900">{language.name}</p>
//                           <p className="text-sm text-gray-500">{language.code.toUpperCase()}</p>
//                         </div>
//                       </div>
//                       {selectedLanguage?.code === language.code && (
//                         <Check className="w-5 h-5 text-blue-600" />
//                       )}
//                     </div>
//                   </button>
//                 ))}
//               </div>

//               <div className="mt-6 pt-4 border-t border-gray-200">
//                 <p className="text-sm text-gray-500 text-center">
//                   Translation is powered by Gemini AI and works in real-time during your transcription session.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Play, Square, Trash2, Download, ArrowRight, Globe, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Popular languages for translation
const POPULAR_LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
];

export default function LiveTranscriptionAndRecorder() {
  const navigate = useNavigate();
  // Live transcription states
  const [isLiveTranscribing, setIsLiveTranscribing] = useState(false);
  const [timer, setTimer] = useState(0);
  const [waveform, setWaveform] = useState(Array(50).fill(15));
  const [liveTranscripts, setLiveTranscripts] = useState([]);
  const [transcriptionError, setTranscriptionError] = useState(null);

  // Translation states
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isTranslationEnabled, setIsTranslationEnabled] = useState(false);
  const [translatingMessages, setTranslatingMessages] = useState(new Set());

  // Live transcription summary state
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [summaryGenerated, setSummaryGenerated] = useState(false);
  const [summaryError, setSummaryError] = useState(null);

  // Audio upload states
  const [audioUploadProgress, setAudioUploadProgress] = useState(0);
  const [isUploadingAudio, setIsUploadingAudio] = useState(false);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [uploadedBytes, setUploadedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState(0);

  // Refs for managing streams and connections
  const audioRecorderRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const screenStreamRef = useRef(null);
  const micStreamRef = useRef(null);
  const deepgramSocketRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Timer and waveform effect
  useEffect(() => {
    if (isLiveTranscribing) {
      timerIntervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
        setWaveform((prev) => prev.map(() => Math.random() * 40 + 10));
      }, 1000);
    } else {
      clearInterval(timerIntervalRef.current);
    }

    return () => clearInterval(timerIntervalRef.current);
  }, [isLiveTranscribing]);

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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Helper function to format bytes
  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Helper function to format speed
  const formatSpeed = (bytesPerSecond) => {
    return formatBytes(bytesPerSecond) + "/s";
  };

  // Real translation function using API
  const translateText = async (text, messageId) => {
    if (!selectedLanguage || !text.trim()) return text;

    try {
      setTranslatingMessages(prev => new Set([...prev, messageId]));

      // Make actual API call to backend
      const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/translate/live-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          text: text,
          targetLanguage: selectedLanguage.code,
          targetLanguageName: selectedLanguage.name
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Translation failed');
      }

      return data.translatedText;

    } catch (error) {
      console.error("Translation error:", error);

      // Handle specific error types
      if (error.message.includes('401') || error.message.includes('unauthorized')) {
        setTranscriptionError('Authentication failed. Please log in again.');
      } else if (error.message.includes('429') || error.message.includes('quota')) {
        setTranscriptionError('Translation quota exceeded. Please try again later.');
      } else if (error.message.includes('503') || error.message.includes('network')) {
        setTranscriptionError('Translation service temporarily unavailable.');
      } else {
        console.warn('Translation failed, showing original text');
      }

      return text; // Return original text on error
    } finally {
      setTranslatingMessages(prev => {
        const newSet = new Set(prev);
        newSet.delete(messageId);
        return newSet;
      });
    }
  };

  // Language selection handlers
  const handleTranslateClick = () => {
    if (isLiveTranscribing) return; // Prevent changing during recording
    setShowLanguageModal(true);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsTranslationEnabled(true);
    setShowLanguageModal(false);
  };

  const clearLanguageSelection = () => {
    setSelectedLanguage(null);
    setIsTranslationEnabled(false);
    setShowLanguageModal(false);
  };

  // Real upload function
  const uploadAudioWithPresignedUrl = async (audioBlob) => {
    try {

      // Step 1: Get presigned URL from backend
      const presignedResponse = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/generate-upload-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          fileName: "live-transcription-audio.webm",
          fileType: "audio/webm",
        }),
      });

      if (!presignedResponse.ok) {
        throw new Error(`Failed to get presigned URL: ${presignedResponse.statusText}`);
      }

      const { presignedUrl, videoUrl: audioUrl } = await presignedResponse.json();


      // Set initial upload state
      setTotalBytes(audioBlob.size);
      setUploadedBytes(0);
      setAudioUploadProgress(0);
      setUploadSpeed(0);

      // Step 2: Upload audio directly to S3 using XMLHttpRequest for progress tracking
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const startTime = Date.now();

        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
            const speed = elapsedTime > 0 ? event.loaded / elapsedTime : 0;

            setAudioUploadProgress(Math.round(percentComplete));
            setUploadedBytes(event.loaded);
            setUploadSpeed(speed);

          }
        });

        xhr.upload.addEventListener("loadstart", () => {
          setAudioUploadProgress(1);
        });

        xhr.upload.addEventListener("loadend", () => {
          setAudioUploadProgress(100);
        });

        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve({ audioUrl });
          } else {
            reject(new Error(`Upload failed: ${xhr.statusText}`));
          }
        });

        xhr.addEventListener("error", () => {
          reject(new Error("Upload failed due to network error"));
        });

        xhr.addEventListener("abort", () => {
          reject(new Error("Upload was aborted"));
        });

        xhr.open("PUT", presignedUrl);
        xhr.setRequestHeader("Content-Type", "audio/webm");
        xhr.send(audioBlob);
      });
    } catch (error) {
      console.error("❌ Audio upload failed:", error);
      throw error;
    }
  };

  // Setup combined audio stream for transcription
  const setupCombinedAudioStream = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      screenStreamRef.current = screenStream;

      const micStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 16000,
          channelCount: 1
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

      return { combinedAudioStream };
    } catch (error) {
      console.error("Error setting up combined audio stream:", error);
      throw error;
    }
  };

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

  const startLiveTranscription = async () => {
    setLiveTranscripts([]);
    setTranscriptionError(null);
    // Reset summary state when starting new transcription
    setSummaryGenerated(false);
    setSummaryError(null);
    audioChunksRef.current = [];

    try {
      const { combinedAudioStream } = await setupCombinedAudioStream();

      // Setup audio recorder for saving to S3
      const audioOptions = {
        mimeType: "audio/webm;codecs=opus",
        audioBitsPerSecond: 32000,
      };
      const audioRecorder = new MediaRecorder(combinedAudioStream, audioOptions);
      audioRecorderRef.current = audioRecorder;

      audioRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      audioRecorder.start(250); // Collect data every 250ms

      const DEEPGRAM_API_KEY =
        import.meta.env.VITE_APP_DEEPGRAM_API_KEY || "YOUR_DEEPGRAM_API_KEY";
      const socket = new WebSocket("wss://api.deepgram.com/v1/listen?model=nova-3-general&language=multi", [
        "token",
        DEEPGRAM_API_KEY,
      ]);

      deepgramSocketRef.current = socket;

      socket.onopen = () => {

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

            // Add the transcript first
            setLiveTranscripts((prev) => [...prev, newTranscript]);

            // If translation is enabled, translate the text
            if (isTranslationEnabled && selectedLanguage && originalText.trim()) {
              // Update the transcript to show it's being translated
              setLiveTranscripts((prev) =>
                prev.map(t =>
                  t.id === messageId
                    ? { ...t, isTranslating: true }
                    : t
                )
              );

              try {
                const translatedText = await translateText(originalText, messageId);

                // Update with translated text
                setLiveTranscripts((prev) =>
                  prev.map(t =>
                    t.id === messageId
                      ? {
                        ...t,
                        text: translatedText,
                        isTranslated: true,
                        isTranslating: false
                      }
                      : t
                  )
                );
              } catch (error) {
                console.error("Translation failed for message:", messageId, error);
                // Remove translating state on error
                setLiveTranscripts((prev) =>
                  prev.map(t =>
                    t.id === messageId
                      ? { ...t, isTranslating: false }
                      : t
                  )
                );
              }
            }
          }
        }
      };

      socket.onerror = (error) => {
        console.error("Deepgram WebSocket Error:", error);
        setTranscriptionError("Error connecting to transcription service");
      };

      socket.onclose = () => {
      };

      setTimer(0);
      setIsLiveTranscribing(true);
    } catch (error) {
      console.error("Error starting live transcription:", error);
      setTranscriptionError("Failed to start live transcription");
    }
  };

  // Generate live transcription summary with real API
  const generateLiveTranscriptionSummary = async () => {
    if (!liveTranscripts || liveTranscripts.length === 0) {
      setSummaryError("No transcripts available to summarize");
      return;
    }

    setIsGeneratingSummary(true);
    setSummaryError(null);

    try {

      // First, upload the audio to S3
      setIsUploadingAudio(true);
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/webm",
      });

      const { audioUrl } = await uploadAudioWithPresignedUrl(audioBlob);
      setIsUploadingAudio(false);

      // Use original text for summary if available, otherwise use translated text
      const transcriptsForSummary = liveTranscripts.map(t => ({
        ...t,
        text: t.originalText || t.text
      }));

      const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          type: 'live-transcription',
          liveTranscripts: JSON.stringify(transcriptsForSummary),
          audioUrl: audioUrl,
          duration: timer.toString(),
          translationInfo: isTranslationEnabled ? {
            targetLanguage: selectedLanguage.code,
            targetLanguageName: selectedLanguage.name
          } : null
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate summary: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to generate summary");
      }

      setSummaryGenerated(true);
    } catch (error) {
      console.error("❌ Error generating live transcription summary:", error);
      setSummaryError("Failed to generate summary. Please try again.");
    } finally {
      setIsGeneratingSummary(false);
    }
  };

  const stopLiveTranscription = async () => {
    try {
      if (audioRecorderRef.current) {
        audioRecorderRef.current.stop();
      }

      if (deepgramSocketRef.current) {
        deepgramSocketRef.current.close();
      }

      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((track) => track.stop());
      }

      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((track) => track.stop());
      }

      setIsLiveTranscribing(false);

      // Automatically generate summary when stopping live transcription
      if (liveTranscripts.length > 0) {
        await generateLiveTranscriptionSummary();
      }
    } catch (error) {
      console.error("Error stopping live transcription:", error);
    }
  };

  const clearTranscripts = () => {
    setLiveTranscripts([]);
    setTranscriptionError(null);
    // Also clear summary when clearing transcripts
    setSummaryGenerated(false);
    setSummaryError(null);
  };

  const downloadTranscripts = () => {
    if (liveTranscripts.length === 0) return;

    let content = "# Live Transcription\n\n";
    content += `Date: ${new Date().toLocaleDateString()}\n`;
    content += `Duration: ${formatTime(timer)}\n`;
    if (isTranslationEnabled && selectedLanguage) {
      content += `Translation: ${selectedLanguage.name}\n`;
    }
    content += "\n";

    liveTranscripts.forEach((transcript, index) => {
      if (isTranslationEnabled && transcript.isTranslated) {
        content += `${transcript.speaker} (${transcript.languageName} → ${selectedLanguage.name}): ${transcript.text}\n`;
        content += `Original: ${transcript.originalText}\n\n`;
      } else {
        content += `${transcript.speaker} (${transcript.languageName}): ${transcript.text}\n\n`;
      }
    });

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `live-transcript-${new Date().toISOString()}.txt`;
    link.click();
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

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-8">
      <div className="w-full max-w-6xl mt-10">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-black text-center mb-16">
          Live Transcription Session
        </h1>

        <div className="flex gap-8">
          {/* Left Panel - Meeting Recorder */}
          <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
            <div className="text-center">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Live Transcription
              </h2>

              {/* Subtitle */}
              <p className="text-gray-500 mb-12 text-base leading-relaxed">
                {isLiveTranscribing
                  ? isTranslationEnabled
                    ? `Live transcription with translation to ${selectedLanguage.name}`
                    : "Live transcription in progress with automatic language detection"
                  : "Start live transcription with automatic language detection"
                }
              </p>

              {/* Timer */}
              <motion.div
                className={`text-7xl font-light mb-8 tracking-wide ${isLiveTranscribing ? 'text-red-500' : 'text-purple-500'
                  }`}
                animate={{
                  scale: isLiveTranscribing ? [1, 1.02, 1] : 1,
                }}
                transition={{
                  repeat: isLiveTranscribing ? Infinity : 0,
                  duration: 1,
                }}
              >
                {formatTime(timer)}
              </motion.div>

              {/* Audio Waveform */}
              <div className="mb-8 flex justify-center">
                {isLiveTranscribing ? (
                  // Live animated waveform
                  <div className="flex items-center justify-center h-16 gap-1">
                    {waveform.map((height, index) => (
                      <motion.div
                        key={index}
                        className={`w-1 rounded-full ${isLiveTranscribing ? 'bg-red-500' : 'bg-purple-500'
                          }`}
                        animate={{ height }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                ) : (
                  // Static waveform
                  <svg
                    width="300"
                    height="60"
                    viewBox="0 0 300 60"
                    className="opacity-80"
                  >
                    <defs>
                      <linearGradient
                        id="waveGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#d8b4fe" />
                      </linearGradient>
                    </defs>

                    {Array.from({ length: 50 }, (_, i) => {
                      const heights = [
                        8, 15, 25, 12, 30, 18, 35, 22, 28, 16, 40, 25, 20, 35, 15,
                        45, 30, 18, 25, 12, 38, 20, 32, 15, 28, 22, 35, 18, 25,
                        30, 20, 35, 15, 28, 25, 18, 32, 20, 25, 15, 30, 22, 35,
                        18, 25, 20, 28, 15, 32, 25,
                      ];
                      const height = heights[i] || 15;
                      const x = i * 6;
                      const y = (60 - height) / 2;

                      return (
                        <rect
                          key={i}
                          x={x}
                          y={y}
                          width="3"
                          height={height}
                          fill="url(#waveGradient)"
                          rx="1.5"
                          className="opacity-60"
                        />
                      );
                    })}
                  </svg>
                )}
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center gap-8 mb-8">
                {/* Start/Stop Button */}
                <motion.button
                  onClick={isLiveTranscribing ? stopLiveTranscription : startLiveTranscription}
                  className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center relative ${isLiveTranscribing
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-purple-500 hover:bg-purple-600'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isUploadingAudio || isGeneratingSummary}
                >
                  {isLiveTranscribing ? (
                    <Square className="w-6 h-6 text-white fill-current" />
                  ) : (
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  )}

                  {/* Pulsing ring when recording */}
                  {isLiveTranscribing && (
                    <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></div>
                  )}
                </motion.button>

                {/* Additional Controls */}
                {liveTranscripts.length > 0 && !isLiveTranscribing && (
                  <>
                    <motion.button
                      onClick={clearTranscripts}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Trash2 className="w-4 h-4 text-gray-600" />
                    </motion.button>
                    <motion.button
                      onClick={downloadTranscripts}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-4 h-4 text-gray-600" />
                    </motion.button>
                  </>
                )}
              </div>

              {/* Language Selection Status */}
              {isTranslationEnabled && selectedLanguage && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 text-sm font-medium">
                      Translating to {selectedLanguage.flag} {selectedLanguage.name}
                    </span>
                    {!isLiveTranscribing && (
                      <button
                        onClick={clearLanguageSelection}
                        className="ml-2 text-blue-400 hover:text-blue-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Status Messages */}
              {transcriptionError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-600 text-sm">{transcriptionError}</p>
                </div>
              )}

              {isLiveTranscribing && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-600 text-sm font-medium">
                    🎤 Live transcription active - Start speaking...
                  </p>
                </div>
              )}

              {/* Audio Upload Progress */}
              {isUploadingAudio && (
                <div className="w-full space-y-3 mt-4">
                  {/* Progress Bar */}
                  <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${audioUploadProgress}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${audioUploadProgress}%` }}
                    />
                  </div>

                  {/* Upload Stats */}
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-600 font-medium">
                      Uploading Audio: {audioUploadProgress}%
                    </span>
                    {uploadSpeed > 0 && (
                      <span className="text-gray-600">
                        {formatSpeed(uploadSpeed)}
                      </span>
                    )}
                  </div>

                  {/* File Size Information */}
                  {totalBytes > 0 && (
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>
                        {formatBytes(uploadedBytes)} / {formatBytes(totalBytes)}
                      </span>
                      {audioUploadProgress > 0 && audioUploadProgress < 100 && (
                        <span>
                          ETA:{" "}
                          {uploadSpeed > 0
                            ? Math.round(
                              (totalBytes - uploadedBytes) / uploadSpeed
                            )
                            : "?"}
                          s
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Summary Generation Status */}
              {isGeneratingSummary && !isUploadingAudio && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                    <div className="text-center">
                      <p className="text-blue-600 text-sm font-medium">
                        Processing transcription...
                      </p>
                      <p className="text-blue-500 text-xs mt-1">
                        Generating summary and analysis
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Summary Generated */}
              {summaryGenerated && !isGeneratingSummary && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-green-600 text-sm font-medium mb-2">
                      Summary Generated Successfully!
                    </p>
                    <p className="text-green-500 text-xs mb-4">
                      Your transcription has been processed and saved
                    </p>
                    <button
                      onClick={() => navigate("/recordings")}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                    >
                      View in Recordings
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Summary Error */}
              {summaryError && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-yellow-700 text-sm">{summaryError}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Live Transcription */}
          <div className="flex-1 bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-purple-400 border-b-2 pb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Live Transcription
              </h3>
              <div className="flex items-center gap-2">
                {liveTranscripts.length > 0 && (
                  <span className="text-sm text-gray-500">
                    {liveTranscripts.length} messages
                  </span>
                )}
                <button
                  onClick={handleTranslateClick}
                  disabled={isLiveTranscribing}
                  className={`text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${isLiveTranscribing
                    ? 'bg-gray-400 cursor-not-allowed opacity-50'
                    : isTranslationEnabled
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-pink-500 hover:bg-pink-600'
                    }`}
                >
                  <Globe className="w-4 h-4" />
                  {isTranslationEnabled ? selectedLanguage.name : 'Translate'}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Transcription Messages */}
            <div className="space-y-6 max-h-80 overflow-y-auto">
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
                          {transcript.isTranslated && (
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              {selectedLanguage.name}
                            </span>
                          )}
                          {transcript.isTranslating && (
                            <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full flex items-center gap-1">
                              <div className="w-3 h-3 border border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
                              Translating...
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {transcript.text}
                      </p>
                      {transcript.isTranslated && transcript.originalText && transcript.originalText !== transcript.text && (
                        <p className="text-gray-500 text-xs mt-2 italic">
                          Original: {transcript.originalText}
                        </p>
                      )}
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
                    {isLiveTranscribing
                      ? "Listening for speech..."
                      : "Start live transcription to see messages here"
                    }
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isLiveTranscribing
                      ? "Speak in any language and see real-time transcription"
                      : "Click the record button to begin"
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Language Selection Modal */}
      <AnimatePresence>
        {showLanguageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowLanguageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Select Translation Language</h3>
                <button
                  onClick={() => setShowLanguageModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Choose a language to translate your live transcription in real-time. You can change this before starting a new session.
              </p>

              {/* Current Selection */}
              {isTranslationEnabled && selectedLanguage && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{selectedLanguage.flag}</span>
                      <div>
                        <p className="font-medium text-blue-900">{selectedLanguage.name}</p>
                        <p className="text-sm text-blue-600">Currently selected</p>
                      </div>
                    </div>
                    <button
                      onClick={clearLanguageSelection}
                      className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}

              {/* Disable Translation Option */}
              <div className="mb-6">
                <button
                  onClick={() => {
                    clearLanguageSelection();
                    setShowLanguageModal(false);
                  }}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${!isTranslationEnabled
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌐</span>
                      <div>
                        <p className="font-medium text-gray-900">No Translation (Original Language)</p>
                        <p className="text-sm text-gray-600">Show transcription in detected language</p>
                      </div>
                    </div>
                    {!isTranslationEnabled && (
                      <Check className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                </button>
              </div>

              <h4 className="font-semibold text-gray-900 mb-4">Popular Languages</h4>

              {/* Language Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {POPULAR_LANGUAGES.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${selectedLanguage?.code === language.code
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{language.flag}</span>
                        <div>
                          <p className="font-medium text-gray-900">{language.name}</p>
                          <p className="text-sm text-gray-500">{language.code.toUpperCase()}</p>
                        </div>
                      </div>
                      {selectedLanguage?.code === language.code && (
                        <Check className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Translation is powered by Gemini AI and works in real-time during your transcription session.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}