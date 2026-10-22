import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Download, Calendar, Clock, Users, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RecordingDetailsPage() {
    const { id: encodedId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [recording, setRecording] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [activeTab, setActiveTab] = useState('Audio');
    const id = atob(encodedId);


    // Fetch recording data
    useEffect(() => {
        const fetchRecording = async () => {
            // First check if we have data from navigation state
            if (location.state?.recording) {
                setRecording(location.state.recording);
                // Set active tab based on available media
                if (location.state.recording.recordingVideoUrl && !location.state.recording.recordingAudioUrl) {
                    setActiveTab('Screen');
                } else if (location.state.activeTab) {
                    setActiveTab(location.state.activeTab);
                }
                setLoading(false);
                return;
            }

            // If no state data, fetch from API
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
                setRecording(response.data);
                // Set active tab based on available media
                if (response.data.recordingVideoUrl && !response.data.recordingAudioUrl) {
                    setActiveTab('Screen');
                }
            } catch (error) {
                console.error("Error fetching recording:", error);
                setError("Failed to load recording details");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchRecording();
        }
    }, [id, location.state]);

    // Format date helper
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Format time helper
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    // Format duration helper
    const formatDuration = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${mins}:${secs.toString().padStart(2, '0')}`;
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

    // Handle download
    const handleDownload = () => {
        const url = activeTab === 'Screen' ? recording.recordingVideoUrl : recording.recordingAudioUrl;
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.download = `${recording.title}-${activeTab.toLowerCase()}.webm`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    // Handle back navigation
    const handleBack = () => {
        navigate('/recordings');
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading recording details...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error || !recording) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Recording Not Found</h2>
                    <p className="text-gray-600 mb-4">{error || "The requested recording could not be found."}</p>
                    <button
                        onClick={handleBack}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        Back to Recordings
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleBack}
                            className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{recording.title}</h1>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <Calendar size={14} />
                                    <span>{formatDate(recording.createdAt)}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Clock size={14} />
                                    <span>{formatDuration(recording.recordingLength)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Tab Navigation */}
                        <motion.div
                            className="bg-purple-50 rounded-lg border border-purple-200 mb-6 overflow-hidden p-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setActiveTab('Audio')}
                                    className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${activeTab === 'Audio'
                                        ? 'bg-white text-purple-600 shadow-sm'
                                        : 'text-gray-600 hover:text-purple-600'
                                        }`}
                                >
                                    Audio
                                </button>
                                <button
                                    onClick={() => setActiveTab('Screen')}
                                    className={`flex-1 py-3 px-6 text-lg font-medium transition-colors rounded-md ${activeTab === 'Screen'
                                        ? 'bg-white text-purple-600 shadow-sm'
                                        : 'text-gray-600 hover:text-purple-600'
                                        }`}
                                >
                                    Screen
                                </button>
                            </div>
                        </motion.div>

                        {/* Media Player */}
                        <motion.div
                            className="bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="p-6">
                                {activeTab === 'Screen' ? (
                                    <div className="aspect-video bg-black rounded-lg overflow-hidden">
                                        {recording.recordingVideoUrl ? (
                                            <video
                                                controls
                                                className="w-full h-full"
                                                onLoadedMetadata={(e) => setDuration(e.target.duration)}
                                                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                                                onPlay={() => setIsPlaying(true)}
                                                onPause={() => setIsPlaying(false)}
                                            >
                                                <source src={recording.recordingVideoUrl} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <div className="text-center">
                                                    <div className="text-6xl mb-4">📹</div>
                                                    <p>No screen recording available</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-8 text-white">
                                        <div className="text-center">
                                            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                                        {isPlaying ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" />}
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">Audio Recording</h3>
                                            <p className="text-purple-100 mb-6">{recording.title}</p>
                                        </div>

                                        {recording.recordingAudioUrl ? (
                                            <audio
                                                controls
                                                className="w-full"
                                                onLoadedMetadata={(e) => setDuration(e.target.duration)}
                                                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                                                onPlay={() => setIsPlaying(true)}
                                                onPause={() => setIsPlaying(false)}
                                            >
                                                <source src={recording.recordingAudioUrl} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        ) : (
                                            <div className="text-center text-purple-100">
                                                <p>No audio recording available</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Recording Info */}
                        <motion.div
                            className="bg-white rounded-lg border border-purple-200 p-6 shadow-sm"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recording Details</h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Calendar className="text-gray-400 mt-0.5" size={16} />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Date & Time</p>
                                        <p className="text-sm text-gray-600">{formatDate(recording.createdAt)}</p>
                                        <p className="text-sm text-gray-500">{formatTime(recording.createdAt)}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Clock className="text-gray-400 mt-0.5" size={16} />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Duration</p>
                                        <p className="text-sm text-gray-600">{formatDuration(recording.recordingLength)}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Tag className="text-gray-400 mt-0.5" size={16} />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Category</p>
                                        <span className="inline-block bg-pink-400 text-white text-xs font-medium px-2 py-1 rounded-full mt-1">
                                            {getCategory(recording.type)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Users className="text-gray-400 mt-0.5" size={16} />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Participants</p>
                                        <div className="mt-1">
                                            {recording.participants && recording.participants.length > 0 ? (
                                                recording.participants.map((participant, index) => (
                                                    <span key={index} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-2 mb-1">
                                                        {participant}
                                                    </span>
                                                ))
                                            ) : (
                                                <p className="text-sm text-gray-600">No participants</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Actions */}
                        {/* <motion.div
                            className="bg-white rounded-lg border border-purple-200 p-6 shadow-sm"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>

                            <div className="space-y-3">
                                <button
                                    onClick={handleDownload}
                                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    <Download size={16} />
                                    <span>Download {activeTab}</span>
                                </button>

                                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span>Share Recording</span>
                                </button>
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}