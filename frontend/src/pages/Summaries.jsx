import { useState, useEffect } from 'react';
import { Play, Download, Trash2, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Summaries() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Audio');
    const [meetingData, setMeetingData] = useState([]);
    const [fetchingData, setFetchingData] = useState(false);
    const [showDropdown, setShowDropdown] = useState(null);

    // Fetch meeting data from API
    useEffect(() => {
        const fetchMeetingData = async () => {
            setFetchingData(true);
            try {
                const response = await axios.get(
                    "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/meeting-data", {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                setMeetingData(response.data);
            } catch (error) {
                console.error("Error fetching meeting data:", error);
            } finally {
                setFetchingData(false);
            }
        };
        fetchMeetingData();
    }, []);

    // Format date helper
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    // Format duration helper
    const formatDuration = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Get category from participants or default
    const getCategory = (category) => {
        if (category === "live-transcription") {
            return "Live Transcription";
        }
        if (category === "audio-notes") {
            return "Audio Notes";
        }

        return "Meeting";
    };

    // Handle play recording
    const handlePlay = (recording, e) => {
        e.stopPropagation();
        if (recording.recordingVideoUrl) {
            window.open(recording.recordingVideoUrl, '_blank');
        } else if (recording.recordingAudioUrl) {
            window.open(recording.recordingAudioUrl, '_blank');
        }
    };

    // Handle delete recording
    const handleDelete = async (recordingId, e) => {
        e.stopPropagation();
        if (window.confirm('Are you sure you want to delete this recording?')) {
            try {
                await axios.delete(`https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${recordingId}`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                // Remove from local state
                setMeetingData(meetingData.filter(meeting => meeting._id !== recordingId));
            } catch (error) {
                console.error("Error deleting recording:", error);
                alert("Failed to delete recording. Please try again.");
            }
        }
    };

    const handleViewDetails = (recording) => {
        // Navigate to detailed view page with recording data and current active tab
        const encodedId = btoa(recording._id);
        console.log(recording._id);
        console.log(encodedId);

        navigate(`/summaries/${encodedId}`, {
            state: {
                recording: recording,
                activeTab: activeTab
            }
        });
    };

    // Filter recordings based on active tab
    const filteredRecordings = meetingData.filter(recording => {
        return recording._id;
    });

    return (
        <main className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="mb-8">
                    <motion.h1
                        className="text-4xl font-bold text-[#9810fa]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Summaries
                    </motion.h1>
                </header>

                {/* Main Content */}
                <section role="main" aria-label="Meeting summaries">
                    {/* Loading State */}
                    {fetchingData ? (
                        <div className="flex justify-center items-center py-20" role="status" aria-live="polite">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" aria-hidden="true"></div>
                            <span className="ml-3 text-gray-600">Loading summaries...</span>
                        </div>
                    ) : (
                        <>
                            {/* Table Container */}
                            <motion.div
                                className="bg-white rounded-lg border border-purple-200 overflow-hidden shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {/* Table Header */}
                                <div className="bg-purple-200 px-6 py-4">
                                    <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-700 uppercase tracking-wide">
                                        <div className="col-span-4 md:col-span-3">Title</div>
                                        <div className="col-span-2 hidden md:block">Date</div>
                                        <div className="col-span-2 hidden md:block">Duration</div>
                                        <div className="col-span-2 text-center hidden md:block">Category</div>
                                        <div className="col-span-3 text-center md:col-span-3">Actions</div>
                                    </div>
                                </div>

                                {/* Table Body */}
                                <div className="divide-y divide-gray-100" role="table" aria-label="Meeting summaries list">
                                    {filteredRecordings.length > 0 ? (
                                        filteredRecordings.map((recording, index) => (
                                            <motion.div
                                                key={recording._id}
                                                className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => handleViewDetails(recording)}
                                                role="row"
                                                tabIndex={0}
                                                aria-label={`Summary: ${recording.title}, Click to view details`}
                                            >
                                                <div className="grid grid-cols-12 gap-4 items-center">
                                                    {/* Title Column */}
                                                    <div className="col-span-8 md:col-span-3 flex items-center space-x-3" role="cell">
                                                        <div className="min-w-0">
                                                            <div className="font-medium text-gray-900 truncate">
                                                                {recording.title}
                                                            </div>
                                                            <div className="text-sm text-gray-500 truncate">
                                                                {recording.participants && recording.participants.length > 0
                                                                    ? recording.participants.join(', ')
                                                                    : 'No participants'
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Date Column - Hidden on mobile */}
                                                    <div className="col-span-2 hidden md:block text-sm text-gray-700" role="cell">
                                                        {formatDate(recording.createdAt)}
                                                    </div>

                                                    {/* Duration Column - Hidden on mobile */}
                                                    <div className="col-span-2 hidden md:block text-sm text-gray-700" role="cell">
                                                        {formatDuration(recording.recordingLength || 0)}
                                                    </div>

                                                    {/* Category Column - Hidden on mobile */}
                                                    <div className="col-span-2 text-center py-1.5 hidden md:block" role="cell">
                                                        <span className="block bg-pink-400 py-2 text-white text-xs font-medium px-3 rounded-full">
                                                            {getCategory(recording?.type)}
                                                        </span>
                                                    </div>

                                                    {/* Mobile Info - Visible on mobile only */}
                                                    <div className="col-span-4 md:hidden" role="cell">
                                                        <div className="text-xs text-gray-500 mb-1">{formatDate(recording.createdAt)}</div>
                                                        <div className="text-xs text-gray-500 mb-1">{formatDuration(recording.recordingLength || 0)}</div>
                                                        <span className="inline-block bg-pink-400 text-white text-xs font-medium px-2 py-1 rounded-full">
                                                            {getCategory(recording?.type)}
                                                        </span>
                                                    </div>

                                                    {/* Actions Column */}
                                                    <div className="col-span-4 md:col-span-3 flex items-center justify-center space-x-2" role="cell">
                                                        <button
                                                            onClick={(e) => handlePlay(recording, e)}
                                                            className="p-2 cursor-pointer text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
                                                            title="Play Recording"
                                                            type="button"
                                                            aria-label={`Play recording for summary: ${recording.title}`}
                                                        >
                                                            <Play size={16} fill="currentColor" aria-hidden="true" />
                                                        </button>

                                                        <button
                                                            className="p-2 cursor-pointer text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                                                            title="View Details"
                                                            type="button"
                                                            aria-label={`View details for summary: ${recording.title}`}
                                                        >
                                                            <Eye size={16} aria-hidden="true" />
                                                        </button>

                                                        <button
                                                            onClick={(e) => handleDelete(recording._id, e)}
                                                            className="p-2 cursor-pointer text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                                                            title="Delete Recording"
                                                            type="button"
                                                            aria-label={`Delete summary: ${recording.title}`}
                                                        >
                                                            <Trash2 size={16} aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="px-6 py-12 text-center" role="row">
                                            <div role="cell">
                                                <div className="text-gray-400 mb-4" aria-hidden="true">
                                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                                    </svg>
                                                </div>
                                                <h2 className="text-lg font-medium text-gray-500 mb-2">
                                                    No summaries found
                                                </h2>
                                                <p className="text-gray-400">
                                                    Start recording to see your summary files here
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Statistics Footer */}
                            {filteredRecordings.length > 0 && (
                                <aside
                                    className="mt-6 text-center text-gray-500 text-sm"
                                    role="complementary"
                                    aria-label="Summary statistics"
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Showing {filteredRecordings.length} {filteredRecordings.length > 1 ? 'summaries' : 'summary'}
                                        {meetingData.length > 0 && (
                                            <span> • Total: {meetingData.length} {meetingData.length !== 1 ? 'summaries' : 'summary'}</span>
                                        )}
                                    </motion.div>
                                </aside>
                            )}
                        </>
                    )}
                </section>
            </div>
        </main>
    );
}