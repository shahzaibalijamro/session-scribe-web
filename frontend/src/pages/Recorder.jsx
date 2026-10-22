import React, { useEffect, useState, useRef } from "react";
import { Download, Play, Radio, Square, Clock, AlertCircle, History, Settings, MessageSquare, Lightbulb, X, Loader, Copy, CheckCircle, Calendar } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMicrophone,
  FaStop,
  FaTrash,
  FaDownload,
  FaTimes,
} from "react-icons/fa";
import axios from "axios";
import { useApp } from "../components/context/AppContext";

export default function Recorder() {
  const navigate = useNavigate();
  const location = useLocation();
  const [emails, setEmails] = useState([]);

  // Recording states from ScreenRecorder
  const [isRecording, setIsRecording] = useState(false);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [combinedAudioUrl, setCombinedAudioUrl] = useState(null);
  const [timer, setTimer] = useState(0);
  const [waveform, setWaveform] = useState(Array(20).fill(20));
  const mediaRecorderRef = useRef(null);
  const [done, setDone] = useState(false);
  const audioRecorderRef = useRef(null);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcriptionError, setTranscriptionError] = useState(null);
  const mediaChunksRef = useRef([]);
  const audioChunksRef = useRef([]);
  const timerIntervalRef = useRef(null);
  const screenStreamRef = useRef(null);
  const micStreamRef = useRef(null);
  const combinedStreamRef = useRef(null);
  const { setLoading, loading, user } = useApp();

  // Live transcription states
  const [liveTranscripts, setLiveTranscripts] = useState([]);
  const deepgramSocketRef = useRef(null);

  // Add these state variables at the top of the Recorder component:
  const [scheduledMeeting, setScheduledMeeting] = useState(null);
  const [fromScheduled, setFromScheduled] = useState(false);

  // Updated suggestion states for single suggestion
  const [currentSuggestion, setCurrentSuggestion] = useState("");
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const [suggestionCopied, setSuggestionCopied] = useState(false);

  // Usage tracking states
  const [usageData, setUsageData] = useState(null);
  const [usageLoading, setUsageLoading] = useState(true);
  const [usageError, setUsageError] = useState(null);

  // Video upload progress state
  const [videoUploadProgress, setVideoUploadProgress] = useState(0);
  const [isUploadingVideo, setIsUploadingVideo] = useState(false);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [uploadedBytes, setUploadedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState(0);

  // Fetch usage status on component mount
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

  // Get emails from navigation state
  // useEffect(() => {
  //   if (location.state && location.state.emails) {
  //     setEmails(location.state.emails);
  //   }
  // }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.emails) {
      setEmails(location.state.emails);
    }

    // NEW: Check if coming from scheduled meeting
    if (location.state && location.state.scheduledMeeting && location.state.fromScheduled) {
      setScheduledMeeting(location.state.scheduledMeeting);
      setFromScheduled(true);

      // Pre-populate emails from scheduled meeting
      if (location.state.scheduledMeeting.emailRecipients) {
        setEmails(location.state.scheduledMeeting.emailRecipients);
      }
    }
  }, [location.state]);

  useEffect(() => {
    (async () => {
      await transcribeAudio();
    })();
  }, [combinedAudioUrl]);

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

  // Check if recording is allowed based on current timer and remaining usage
  const canStartRecording = () => {
    if (!usageData) return true;
    return usageData.status.canRecord && !loading && !isUploadingVideo;
  };

  // Get remaining time considering current recording
  const getRemainingTimeWithCurrentRecording = () => {
    if (!usageData) return 0;
    return Math.max(0, usageData.remaining.minutes - Math.ceil(timer / 60));
  };

  // Get language name function
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

  // Setup live transcription with Deepgram
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

  // Upload video directly to Cloudinary with real progress tracking
  const uploadVideoToCloudinary = async (videoBlob) => {
    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

      if (!cloudName || !uploadPreset) {
        throw new Error("Cloudinary configuration is missing. Please check your environment variables.");
      }

      setTotalBytes(videoBlob.size);
      setUploadedBytes(0);
      setVideoUploadProgress(0);
      setUploadSpeed(0);

      const formData = new FormData();
      formData.append("file", videoBlob);
      formData.append("upload_preset", uploadPreset);
      formData.append("resource_type", "video");

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const startTime = Date.now();

        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            const elapsedTime = (Date.now() - startTime) / 1000;
            const speed = elapsedTime > 0 ? event.loaded / elapsedTime : 0;

            setVideoUploadProgress(Math.round(percentComplete));
            setUploadedBytes(event.loaded);
            setUploadSpeed(speed);
          }
        });

        xhr.upload.addEventListener("loadstart", () => {
          setVideoUploadProgress(1);
        });

        xhr.upload.addEventListener("loadend", () => {
          setVideoUploadProgress(100);
        });

        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            // Cloudinary returns the secure_url which we can use as the videoUrl
            // public_id can be used as the videoKey
            resolve({ videoUrl: response.secure_url, videoKey: response.public_id });
          } else {
            reject(new Error(`Upload failed: ${xhr.statusText} - ${xhr.responseText}`));
          }
        });

        xhr.addEventListener("error", () => {
          reject(new Error("Upload failed due to network error"));
        });

        xhr.addEventListener("abort", () => {
          reject(new Error("Upload was aborted"));
        });

        const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;
        xhr.open("POST", cloudinaryUrl);
        xhr.send(formData);
      });
    } catch (error) {
      console.error("❌ Video upload failed:", error);
      throw error;
    }
  };


  // Setup combined audio stream
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
    setIsCancelled(false);

    if (!canStartRecording()) {
      if (!usageData?.status.canRecord) {
        alert("You have reached your 100-minute recording limit. Please upgrade to continue.");
        return;
      }
      return;
    }

    setLoading(false);
    setDone(false);
    setLiveTranscripts([]);
    setCurrentSuggestion("");

    setMediaUrl(null);
    setCombinedAudioUrl(null);

    try {
      mediaChunksRef.current = [];
      audioChunksRef.current = [];

      const { combinedStream, combinedAudioStream } =
        await setupCombinedAudioStream();

      await setupLiveTranscription(combinedAudioStream);

      const videoOptions = {
        mimeType: "video/webm;codecs=vp9,opus",
        videoBitsPerSecond: 2500000,
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
    }
  };

  // Updated function to get single suggestion
  const getSuggestion = async () => {
    if (liveTranscripts.length === 0) {
      alert("No transcript available yet. Please wait for some conversation to be transcribed.");
      return;
    }

    setLoadingSuggestion(true);
    setCurrentSuggestion("");
    setSuggestionCopied(false);

    try {
      const transcriptText = liveTranscripts.map(t => `${t.speaker}: ${t.text}`).join('\n');

      const response = await axios.post(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/get-suggestions",
        {
          transcript: transcriptText
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
          },
        }
      );

      if (response.data.success) {
        setCurrentSuggestion(response.data.suggestion);
      } else {
        throw new Error(response.data.error || 'Failed to get suggestion');
      }

    } catch (error) {
      console.error("❌ Error getting suggestion:", error);
      alert("Failed to get suggestion. Please try again.");
    } finally {
      setLoadingSuggestion(false);
    }
  };

  // Function to copy suggestion to clipboard
  const copySuggestion = async () => {
    try {
      await navigator.clipboard.writeText(currentSuggestion);
      setSuggestionCopied(true);
      setTimeout(() => setSuggestionCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy suggestion:", error);
    }
  };

  const transcribeAudio = async () => {
    if (!combinedAudioUrl || !mediaUrl || isCancelled) return;

    setIsTranscribing(true);
    setTranscriptionError(null);
    let startTime;

    try {
      const audioResponse = await fetch(combinedAudioUrl);
      const audioBlob = await audioResponse.blob();
      const videoResponse = await fetch(mediaUrl);
      const videoBlob = await videoResponse.blob();

      setIsUploadingVideo(true);
      setVideoUploadProgress(0);

      const { videoUrl, videoKey } = await uploadVideoToCloudinary(videoBlob);

      setIsUploadingVideo(false);

      const formData = new FormData();
      formData.append("audioFile", audioBlob, "audio-recording.webm");
      formData.append("duration", timer.toString());
      formData.append("videoUrl", videoUrl);
      formData.append("videoKey", videoKey);

      if (emails.length > 0) {
        formData.append("emails", JSON.stringify(emails));
      }

      formData.append("type", "recording");

      // NEW: Include scheduled meeting ID if recording from scheduled meeting
      if (fromScheduled && scheduledMeeting) {
        formData.append("scheduledMeetingId", scheduledMeeting._id);
        formData.append("fromScheduled", "true");
      }

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
          timeout: 300000,
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            const uploadedMB = (progressEvent.loaded / (1024 * 1024)).toFixed(2);
            const sizeMB = (audioBlob.size / (1024 * 1024)).toFixed(2);
            setTranscriptionError(
              `Uploading: ${percent}% (${uploadedMB}MB/${sizeMB}MB)`
            );
          },
        }
      );

      const uploadTime = Date.now() - startTime;
      console.log(`✅ [Recorder] Processing completed in ${uploadTime}ms`);

      await fetchUsageStatus();

    } catch (error) {
      const uploadTime = Date.now() - startTime;
      console.error("❌ UPLOAD FAILED AFTER", uploadTime, "ms");
      console.error("❌ Error:", error);

      if (error.response) {
        console.error("   Response status:", error.response.status);
        console.error("   Response data:", error.response.data);

        if (error.response.status === 403 && error.response.data?.error?.includes('limit')) {
          setTranscriptionError(`❌ ${error.response.data.message}`);
          await fetchUsageStatus();
          return;
        }
      }

      setTranscriptionError("Failed to save recording. Please try again.");
    } finally {
      setIsTranscribing(false);
      setIsUploadingVideo(false);
      setLoading(false);
      setDone(true);
      setVideoUploadProgress(0);
      setUploadedBytes(0);
      setTotalBytes(0);
      setUploadSpeed(0);
    }
  };

  const stopRecording = async () => {
    try {
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
      // await transcribeAudio();
    } catch (error) {
      console.error(error);
    }
  };

  const downloadRecordings = () => {
    if (mediaUrl) {
      const link = document.createElement("a");
      link.href = mediaUrl;
      link.download = `meeting-recording-${new Date().toISOString()}.webm`;
      link.click();
    }

    if (combinedAudioUrl) {
      const link = document.createElement("a");
      link.href = combinedAudioUrl;
      link.download = `meeting-audio-${new Date().toISOString()}.webm`;
      link.click();
    }
  };

  const resetRecording = () => {
    setMediaUrl(null);
    setCombinedAudioUrl(null);
    setTimer(0);
    setVideoUploadProgress(0);
    setUploadedBytes(0);
    setTotalBytes(0);
    setUploadSpeed(0);
    setDone(false);
    setTranscriptionError(null);
    setLiveTranscripts([]);
    setCurrentSuggestion("");
    setSuggestionCopied(false);
    setIsCancelled(false);
  };

  const cancelRecording = async () => {
    try {
      setIsCancelled(true);

      if (deepgramSocketRef.current) {
        deepgramSocketRef.current.close();
      }

      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }

      if (audioRecorderRef.current && audioRecorderRef.current.state === 'recording') {
        audioRecorderRef.current.stop();
      }

      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((track) => track.stop());
      }

      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((track) => track.stop());
      }

      setIsRecording(false);
      setTimer(0);
      setMediaUrl(null);
      setCombinedAudioUrl(null);
      setTranscriptionError(null);
      setLiveTranscripts([]);
      setCurrentSuggestion("");
      setSuggestionCopied(false);

      mediaChunksRef.current = [];
      audioChunksRef.current = [];

      console.log("Recording cancelled by user");
    } catch (error) {
      console.error("Error cancelling recording:", error);
    }
  };

  const handleStartRecording = () => {
    startRecordingProcess();
  };

  const handleLiveTranscription = () => {
    navigate("/live-transcription");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-8">
      <div className="w-full max-w-6xl mt-10">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-black text-center mb-8">
          Let us Scribe your Session
        </h1>

        {/* NEW: Scheduled Meeting Details */}
        {fromScheduled && scheduledMeeting && (
          <div className="mb-8 bg-blue-50 rounded-2xl border border-blue-200 p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Recording Scheduled Meeting
                  </h3>
                  <div className="space-y-2">
                    <p className="text-blue-800">
                      <strong>Title:</strong> {scheduledMeeting.title}
                    </p>
                    {scheduledMeeting.scheduledDateTime && (
                      <p className="text-blue-700 text-sm">
                        <strong>Scheduled for:</strong> {new Date(scheduledMeeting.scheduledDateTime).toLocaleString()}
                      </p>
                    )}
                    {scheduledMeeting.scheduledDuration && (
                      <p className="text-blue-700 text-sm">
                        <strong>Duration:</strong> {scheduledMeeting.scheduledDuration} minutes
                      </p>
                    )}
                    {scheduledMeeting.discussionTopics && scheduledMeeting.discussionTopics.length > 0 && (
                      <div className="mt-3">
                        <p className="text-blue-800 text-sm font-medium mb-2">Discussion Topics:</p>
                        <div className="flex flex-wrap gap-2">
                          {scheduledMeeting.discussionTopics.map((topic, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {scheduledMeeting.emailRecipients && scheduledMeeting.emailRecipients.length > 0 && (
                      <p className="text-blue-700 text-sm">
                        <strong>Participants:</strong> {scheduledMeeting.emailRecipients.join(", ")}
                      </p>
                    )}
                    {scheduledMeeting.location && (
                      <p className="text-blue-700 text-sm">
                        <strong>Location:</strong> {scheduledMeeting.location}
                      </p>
                    )}
                    {scheduledMeeting.meetingLink && (
                      <p className="text-blue-700 text-sm">
                        <strong>Meeting Link:</strong>
                        <a href={scheduledMeeting.meetingLink} target="_blank" rel="noopener noreferrer" className="ml-2 underline">
                          Join Meeting
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Ready to Record
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Prominent AI Suggestion Bar - Only show during recording */}
        <AnimatePresence>
          {isRecording && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      AI Response Suggestion
                    </h3>
                    <p className="text-sm text-blue-700">
                      Get intelligent response suggestions based on the conversation
                    </p>
                  </div>
                </div>
                <button
                  onClick={getSuggestion}
                  disabled={loadingSuggestion || liveTranscripts.length === 0}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${loadingSuggestion || liveTranscripts.length === 0
                    ? 'bg-gray-400 cursor-not-allowed opacity-50'
                    : 'bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    } text-white`}
                >
                  {loadingSuggestion ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Lightbulb className="w-4 h-4" />
                      Get Suggestion
                    </>
                  )}
                </button>
              </div>

              {/* Suggestion Display */}
              {loadingSuggestion ? (
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                    <span className="text-blue-600 font-medium">
                      Analyzing conversation and generating suggestion...
                    </span>
                  </div>
                </div>
              ) : currentSuggestion ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-green-700">
                          Suggested Response
                        </span>
                      </div>
                      <p className="text-gray-800 leading-relaxed text-base">
                        {currentSuggestion}
                      </p>
                    </div>
                    <button
                      onClick={copySuggestion}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${suggestionCopied
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                        }`}
                      title="Copy suggestion to clipboard"
                    >
                      {suggestionCopied ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white rounded-xl p-6 border border-blue-200 text-center">
                  <Lightbulb className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-blue-600 font-medium mb-1">
                    Ready to help with responses
                  </p>
                  <p className="text-blue-500 text-sm">
                    {liveTranscripts.length === 0
                      ? "Start speaking to get AI-powered response suggestions"
                      : "Click 'Get Suggestion' to analyze the conversation"
                    }
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Usage Status Display */}
        {usageLoading ? (
          <div className="mb-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
              <span className="ml-3 text-gray-600">Loading usage information...</span>
            </div>
          </div>
        ) : usageError ? (
          <div className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-red-700">{usageError}</span>
              <button
                onClick={fetchUsageStatus}
                className="ml-auto text-red-600 hover:text-red-800 underline"
              >
                Retry
              </button>
            </div>
          </div>
        ) : usageData ? (
          <div className={`mb-8 rounded-2xl p-6 border shadow-sm ${usageData.status.canRecord
            ? usageData.status.isNearLimit
              ? 'bg-yellow-50 border-yellow-200'
              : 'bg-green-50 border-green-200'
            : 'bg-red-50 border-red-200'
            }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Clock className={`w-6 h-6 ${usageData.status.canRecord
                  ? usageData.status.isNearLimit
                    ? 'text-yellow-600'
                    : 'text-green-600'
                  : 'text-red-600'
                  }`} />
                <div>
                  <h3 className={`text-lg font-semibold ${usageData.status.canRecord
                    ? usageData.status.isNearLimit
                      ? 'text-yellow-800'
                      : 'text-green-800'
                    : 'text-red-800'
                    }`}>
                    Recording Time Remaining
                  </h3>
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

                <div className="w-32 bg-gray-200 rounded-full h-2 mt-2">
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

            {!usageData.status.canRecord && (
              <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Recording limit reached</p>
                    <p className="text-red-700 text-sm mt-1">
                      You've used all 100 minutes of your recording time. Upgrade to a paid plan to continue recording meetings.
                    </p>
                    <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                      Upgrade Plan
                    </button>
                  </div>
                </div>
              </div>
            )}

            {usageData.status.canRecord && usageData.status.isNearLimit && (
              <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-medium">Almost at your limit</p>
                    <p className="text-yellow-700 text-sm mt-1">
                      You have less than 10 minutes remaining. Consider upgrading to avoid interruption.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}

        <div className="flex justify-end mb-6">
          <button
            onClick={handleLiveTranscription}
            disabled={usageData && !usageData.status.canRecord || isRecording || loading || isUploadingVideo}
            className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all border-0 ${usageData && !usageData.status.canRecord || isRecording || loading || isUploadingVideo
              ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              } relative overflow-hidden group`}
            title={
              isRecording || loading || isUploadingVideo
                ? "Live transcription disabled during recording/processing"
                : usageData && !usageData.status.canRecord
                  ? "Upgrade to use live transcription"
                  : "Start Live Transcription"
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center">
              <Radio className="w-5 h-5 mr-2 animate-pulse" />
              <span className="font-semibold text-sm">Try Live Transcription</span>
            </div>
            <div className="absolute -inset-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Display emails if any */}
        {emails.length > 0 && (
          <div className="mb-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Meeting summary will be sent to:
            </h3>
            <div className="flex flex-wrap gap-2">
              {emails.map((email, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                >
                  {email}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Recording Status */}
        {isRecording && (
          <div className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-700 font-medium">Recording...</span>
                </div>
                <div className="text-2xl font-bold text-red-700">
                  {formatTime(timer)}
                </div>
                {usageData && (
                  <div className="text-sm text-red-600">
                    ({getRemainingTimeWithCurrentRecording()} min remaining)
                  </div>
                )}
              </div>
              <div className="flex items-center h-8 gap-1">
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
          </div>
        )}

        {/* Main Recording Interface */}
        {!isRecording ? (
          <div className="bg-purple-50 rounded-3xl border-2 border-purple-600 p-16 shadow-sm">
            <div className="flex flex-col items-center">
              <div
                className={`relative mb-12 ${canStartRecording() ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                onClick={canStartRecording() ? handleStartRecording : undefined}
              >
                <div className="absolute inset-0 rounded-full bg-purple-300 opacity-30 blur-3xl scale-150"></div>
                <div className="absolute inset-0 rounded-full bg-purple-400 opacity-40 blur-2xl scale-125"></div>
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-50 blur-xl"></div>

                <div className="relative w-24 h-24 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
              </div>

              {/* <p className="text-lg text-gray-600 mb-12 font-semibold text-center">
                {!canStartRecording()
                  ? usageData?.status.canRecord
                    ? 'Please wait while processing completes'
                    : 'Recording disabled - upgrade to continue'
                  : 'Click to record your meeting with live transcription'
                }
                {emails.length > 0 && canStartRecording() && (
                  <span className="block text-sm text-purple-600 mt-2">
                    Summary will be sent to {emails.length} recipient{emails.length !== 1 ? 's' : ''}
                  </span>
                )}
              </p> */}

              <p className="text-lg text-gray-600 mb-12 font-semibold text-center">
                {!canStartRecording()
                  ? usageData?.status.canRecord
                    ? 'Please wait while processing completes'
                    : 'Recording disabled - upgrade to continue'
                  : fromScheduled && scheduledMeeting
                    ? `Click to start recording "${scheduledMeeting.title}"`
                    : 'Click to record your meeting with live transcription'
                }
                {emails.length > 0 && canStartRecording() && (
                  <span className="block text-sm text-purple-600 mt-2">
                    Summary will be sent to {emails.length} recipient{emails.length !== 1 ? 's' : ''}
                  </span>
                )}
              </p>

              <div className="flex items-center gap-6">
                <button
                  onClick={canStartRecording() ? handleStartRecording : undefined}
                  disabled={!canStartRecording()}
                  className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors bg-purple-500 hover:bg-purple-600 ${!canStartRecording() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  title={
                    !canStartRecording()
                      ? usageData?.status.canRecord
                        ? "Please wait while processing"
                        : "Upgrade to record"
                      : "Start recording with live transcription"
                  }
                >
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </button>

                <button
                  onClick={() => navigate("/transcriptions")}
                  className="w-14 h-14 bg-white rounded-full shadow-md border border-gray-200 transform hover:scale-110 flex items-center justify-center hover:shadow-lg transition-all"
                  title="View Previous Recordings"
                >
                  <History className="w-6 h-6 text-purple-500" />
                </button>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => navigate("/emails")}
                  className="px-6 py-2 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 transition-colors"
                >
                  Back to Email Setup
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Recording Interface with Live Transcription */
          <div className="bg-purple-50 rounded-3xl border-2 border-purple-600 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-purple-400 border-b-2 pb-4">
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

            <div className="space-y-6 max-h-96 overflow-y-auto">
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
        )}

        {/* Recording Control Buttons */}
        {isRecording && (
          <div className="mt-8 flex justify-center gap-6">
            <button
              onClick={cancelRecording}
              className="w-14 h-14 bg-gray-500 hover:bg-gray-600 rounded-full shadow-lg flex items-center justify-center transition-colors"
              title="Cancel recording"
            >
              <FaTimes className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={stopRecording}
              className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full shadow-lg flex items-center justify-center transition-colors"
              title="Stop recording"
            >
              <Square className="w-6 h-6 text-white fill-current" />
            </button>
          </div>
        )}

        {/* Processing Status */}
        {(loading || isUploadingVideo || done) && (
          <div className="mt-8 w-full max-w-md mx-auto">
            {(loading || isUploadingVideo) && (
              <div className="text-center flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>

                {isUploadingVideo && videoUploadProgress >= 0 && (
                  <div className="w-full space-y-3">
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${videoUploadProgress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${videoUploadProgress}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-600 font-medium">
                        Uploading: {videoUploadProgress}%
                      </span>
                      {uploadSpeed > 0 && (
                        <span className="text-gray-600">
                          {formatSpeed(uploadSpeed)}
                        </span>
                      )}
                    </div>

                    {totalBytes > 0 && (
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>
                          {formatBytes(uploadedBytes)} / {formatBytes(totalBytes)}
                        </span>
                        {videoUploadProgress > 0 && videoUploadProgress < 100 && (
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

                    <p className="text-sm text-blue-600 text-center">
                      {videoUploadProgress === 0
                        ? "Preparing upload..."
                        : videoUploadProgress < 100
                          ? "Uploading video to cloud storage..."
                          : "Upload complete! Processing..."}
                    </p>
                  </div>
                )}

                <p className="text-gray-700 text-sm mt-2 max-w-md text-center">
                  {isUploadingVideo
                    ? videoUploadProgress === 100
                      ? "Upload complete! Starting audio processing..."
                      : "Please don't leave this page while uploading..."
                    : "Processing audio, generating summary, agenda, title, and transcript..."}
                </p>
              </div>
            )}

            {done && !loading && !isUploadingVideo && (
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <h2 className="text-lg font-semibold text-green-600">
                  All done! You can now view the transcription and summary on their respective pages.
                </h2>
              </div>
            )}

            {transcriptionError && !done && (
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200 mt-4">
                <p className="text-yellow-700 text-sm">
                  {transcriptionError}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}