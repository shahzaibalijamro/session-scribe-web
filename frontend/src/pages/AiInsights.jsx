// // // // import React from 'react';
// // // // import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// // // // import { ChevronDown } from 'lucide-react';

// // // // const AIInsights = () => {
// // // //   const screenRecordingData = [
// // // //     { name: 'Balance', value: 30, color: '#8B5CF6' },
// // // //     { name: 'Meetings', value: 30, color: '#EC4899' },
// // // //     { name: 'Discussion', value: 10, color: '#06B6D4' },
// // // //     { name: 'Conversation', value: 20, color: '#EF4444' },
// // // //     { name: 'Others', value: 10, color: '#10B981' }
// // // //   ];

// // // //   const audioRecordingData = [
// // // //     { name: 'Balance', value: 30, color: '#8B5CF6' },
// // // //     { name: 'Meetings', value: 30, color: '#F97316' },
// // // //     { name: 'Discussion', value: 10, color: '#EF4444' },
// // // //     { name: 'Conversation', value: 20, color: '#EC4899' },
// // // //     { name: 'Others', value: 10, color: '#10B981' }
// // // //   ];

// // // //   const recentRecordings = [
// // // //     { totalTime: '6 min', startTime: '12:09 PM', endTime: '12:15 PM', speaker: 'Sarah Johnson,' },
// // // //     { totalTime: '6 min', startTime: '12:09 PM', endTime: '12:15 PM', speaker: 'Sarah Johnson,' },
// // // //     { totalTime: '6 min', startTime: '12:09 PM', endTime: '12:15 PM', speaker: 'Sarah Johnson,' }
// // // //   ];

// // // //   const CustomLabel = ({ value, count }) => (
// // // //     <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-center">
// // // //       <tspan x="50%" dy="-0.3em" className="text-2xl font-bold text-gray-800">{count}</tspan>
// // // //       <tspan x="50%" dy="1.2em" className="text-sm text-gray-600 font-medium">{value}</tspan>
// // // //     </text>
// // // //   );

// // // //   const LegendItem = ({ color, label, percentage }) => (
// // // //     <div className="flex items-center mb-2">
// // // //       <div 
// // // //         className="w-3 h-3 rounded-full mr-3"
// // // //         style={{ backgroundColor: color }}
// // // //       />
// // // //       <span className="text-sm text-gray-700 font-medium">{label}-{percentage}%</span>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // //       <div className="max-w-6xl mx-auto">
// // // //         <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>

// // // //         <div className="grid grid-cols-1 [@media(min-width:1150px)]:grid-cols-2 gap-6 mb-8">
// // // //           {/* Screen Recording Analysis */}
// // // //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// // // //             <h2 className="text-lg font-medium text-gray-600 mb-6">Screen Recording analysis</h2>
// // // //             <div className="flex items-center justify-between">
// // // //               <div className="relative w-48 h-48">
// // // //                 <ResponsiveContainer width="100%" height="100%">
// // // //                   <PieChart>
// // // //                     <Pie
// // // //                       data={screenRecordingData}
// // // //                       cx="50%"
// // // //                       cy="50%"
// // // //                       innerRadius={60}
// // // //                       outerRadius={90}
// // // //                       paddingAngle={2}
// // // //                       dataKey="value"
// // // //                       startAngle={90}
// // // //                       endAngle={450}
// // // //                     >
// // // //                       {screenRecordingData.map((entry, index) => (
// // // //                         <Cell key={`cell-${index}`} fill={entry.color} />
// // // //                       ))}
// // // //                     </Pie>
// // // //                   </PieChart>
// // // //                 </ResponsiveContainer>
// // // //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// // // //                   <div className="text-2xl font-bold text-gray-800">300</div>
// // // //                   <div className="text-sm text-gray-600 font-medium">Screen Recordings</div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="ml-8">
// // // //                 {screenRecordingData.map((item, index) => (
// // // //                   <LegendItem 
// // // //                     key={index}
// // // //                     color={item.color}
// // // //                     label={item.name}
// // // //                     percentage={item.value}
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Audio Recordings Analysis */}
// // // //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// // // //             <h2 className="text-lg font-medium text-gray-600 mb-6">Audio recordings analysis</h2>
// // // //             <div className="flex items-center justify-between">
// // // //               <div className="relative w-48 h-48">
// // // //                 <ResponsiveContainer width="100%" height="100%">
// // // //                   <PieChart>
// // // //                     <Pie
// // // //                       data={audioRecordingData}
// // // //                       cx="50%"
// // // //                       cy="50%"
// // // //                       innerRadius={60}
// // // //                       outerRadius={90}
// // // //                       paddingAngle={2}
// // // //                       dataKey="value"
// // // //                       startAngle={90}
// // // //                       endAngle={450}
// // // //                     >
// // // //                       {audioRecordingData.map((entry, index) => (
// // // //                         <Cell key={`cell-${index}`} fill={entry.color} />
// // // //                       ))}
// // // //                     </Pie>
// // // //                   </PieChart>
// // // //                 </ResponsiveContainer>
// // // //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// // // //                   <div className="text-2xl font-bold text-gray-800">300</div>
// // // //                   <div className="text-sm text-gray-600 font-medium">Audio recordings</div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="ml-8">
// // // //                 {audioRecordingData.map((item, index) => (
// // // //                   <LegendItem 
// // // //                     key={index}
// // // //                     color={item.color}
// // // //                     label={item.name}
// // // //                     percentage={item.value}
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Recent Recordings */}
// // // //         <div className="bg-white rounded-2xl p-6 shadow-sm">
// // // //           <div className="flex items-center justify-between mb-6">
// // // //             <h2 className="text-xl font-semibold text-gray-800">Recent Recordings</h2>
// // // //             <div className="flex items-center text-gray-500 cursor-pointer">
// // // //               <span className="text-sm mr-1">October</span>
// // // //               <ChevronDown size={16} />
// // // //             </div>
// // // //           </div>

// // // //           <div className="overflow-hidden">
// // // //             <div className="bg-purple-200 rounded-t-lg px-6 py-4">
// // // //               <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700">
// // // //                 <div>Total Time</div>
// // // //                 <div>Start Time</div>
// // // //                 <div>End Time</div>
// // // //                 <div>Speaker</div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="bg-white">
// // // //               {recentRecordings.map((recording, index) => (
// // // //                 <div key={index} className="px-6 py-4 border-b border-gray-100 last:border-b-0">
// // // //                   <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
// // // //                     <div className="font-medium">{recording.totalTime}</div>
// // // //                     <div>{recording.startTime}</div>
// // // //                     <div>{recording.endTime}</div>
// // // //                     <div>{recording.speaker}</div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AIInsights;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// // // // import { ChevronDown, Clock, TrendingUp, Users, Calendar, AlertCircle, BarChart3 } from 'lucide-react';

// // // // const AIInsights = () => {
// // // //   const [analyticsData, setAnalyticsData] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   // Fetch analytics data
// // // //   useEffect(() => {
// // // //     fetchAnalyticsData();
// // // //   }, []);

// // // //   const fetchAnalyticsData = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setError(null);

// // // //       const token = localStorage.getItem('token');
// // // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/analytics', {
// // // //         headers: {
// // // //           'Authorization': token,
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //       });

// // // //       const data = await response.json();

// // // //       if (data.success) {
// // // //         setAnalyticsData(data.analytics);
// // // //       } else {
// // // //         setError('Failed to load analytics data');
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Failed to fetch analytics:', err);
// // // //       setError('Unable to load analytics data');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const LegendItem = ({ color, label, percentage, minutes }) => (
// // // //     <div className="flex items-center justify-between mb-3 p-2 bg-gray-50 rounded-lg">
// // // //       <div className="flex items-center">
// // // //         <div 
// // // //           className="w-3 h-3 rounded-full mr-3"
// // // //           style={{ backgroundColor: color }}
// // // //         />
// // // //         <span className="text-sm text-gray-700 font-medium">{label}</span>
// // // //       </div>
// // // //       <div className="text-right">
// // // //         <div className="text-sm font-semibold text-gray-800">{percentage}%</div>
// // // //         <div className="text-xs text-gray-500">{minutes} min</div>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   const StatCard = ({ icon: Icon, title, value, subtitle, color = "bg-blue-500" }) => (
// // // //     <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
// // // //       <div className="flex items-center">
// // // //         <div className={`${color} rounded-lg p-3 mr-4`}>
// // // //           <Icon className="w-6 h-6 text-white" />
// // // //         </div>
// // // //         <div>
// // // //           <h3 className="text-sm font-medium text-gray-600">{title}</h3>
// // // //           <p className="text-2xl font-bold text-gray-900">{value}</p>
// // // //           {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   const EmptyState = () => (
// // // //     <div className="text-center py-16">
// // // //       <BarChart3 className="w-24 h-24 text-gray-300 mx-auto mb-6" />
// // // //       <h3 className="text-xl font-semibold text-gray-600 mb-2">No Usage Data Yet</h3>
// // // //       <p className="text-gray-500 mb-6 max-w-md mx-auto">
// // // //         Start recording meetings, audio notes, or live transcriptions to see your usage analytics and insights here.
// // // //       </p>
// // // //       <button 
// // // //         onClick={() => window.location.href = '/recorder'}
// // // //         className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
// // // //       >
// // // //         Start Recording
// // // //       </button>
// // // //     </div>
// // // //   );

// // // //   const LoadingState = () => (
// // // //     <div className="text-center py-16">
// // // //       <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
// // // //       <p className="text-gray-600">Loading analytics data...</p>
// // // //     </div>
// // // //   );

// // // //   const ErrorState = () => (
// // // //     <div className="text-center py-16">
// // // //       <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
// // // //       <h3 className="text-lg font-semibold text-gray-600 mb-2">Failed to Load Analytics</h3>
// // // //       <p className="text-gray-500 mb-4">{error}</p>
// // // //       <button 
// // // //         onClick={fetchAnalyticsData}
// // // //         className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
// // // //       >
// // // //         Retry
// // // //       </button>
// // // //     </div>
// // // //   );

// // // //   if (loading) return <LoadingState />;
// // // //   if (error) return <ErrorState />;
// // // //   if (!analyticsData?.hasUsage) return <EmptyState />;

// // // //   const { usageBreakdown, recentMeetings, overallStats, meetingCounts } = analyticsData;

// // // //   // Prepare data for charts - separate by category
// // // //   const screenRecordingData = usageBreakdown.filter(item => item.name === 'Screen Recordings');
// // // //   const liveTranscriptionData = usageBreakdown.filter(item => item.name === 'Live Transcriptions');
// // // //   const audioNotesData = usageBreakdown.filter(item => item.name === 'Audio Notes');

// // // //   // If no data for a category, show placeholder
// // // //   const createPlaceholderData = (name, color) => [
// // // //     { name: 'No Usage', value: 100, color: '#E5E7EB' }
// // // //   ];

// // // //   const screenData = screenRecordingData.length > 0 ? [
// // // //     ...screenRecordingData,
// // // //     { name: 'Unused', value: Math.max(0, 100 - screenRecordingData[0].value), color: '#F3F4F6' }
// // // //   ] : createPlaceholderData('Screen Recordings', '#8B5CF6');

// // // //   const liveData = liveTranscriptionData.length > 0 ? [
// // // //     ...liveTranscriptionData,
// // // //     { name: 'Unused', value: Math.max(0, 100 - liveTranscriptionData[0].value), color: '#F3F4F6' }
// // // //   ] : createPlaceholderData('Live Transcriptions', '#EC4899');

// // // //   const audioData = audioNotesData.length > 0 ? [
// // // //     ...audioNotesData,
// // // //     { name: 'Unused', value: Math.max(0, 100 - audioNotesData[0].value), color: '#F3F4F6' }
// // // //   ] : createPlaceholderData('Audio Notes', '#06B6D4');

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // //       <div className="max-w-6xl mx-auto">
// // // //         <div className="flex items-center justify-between mb-8">
// // // //           <h1 className="text-3xl font-semibold text-purple-500">AI Insights</h1>
// // // //           <button 
// // // //             onClick={fetchAnalyticsData}
// // // //             className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
// // // //           >
// // // //             <TrendingUp className="w-4 h-4" />
// // // //             <span className="text-sm">Refresh Data</span>
// // // //           </button>
// // // //         </div>

// // // //         {/* Usage Overview Stats */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// // // //           <StatCard
// // // //             icon={Clock}
// // // //             title="Total Usage"
// // // //             value={`${overallStats.totalUsedMinutes} min`}
// // // //             subtitle={`${overallStats.percentageUsed}% of 100 min`}
// // // //             color="bg-purple-500"
// // // //           />
// // // //           <StatCard
// // // //             icon={BarChart3}
// // // //             title="Screen Recordings"
// // // //             value={overallStats.breakdown.recording.minutes}
// // // //             subtitle={`${meetingCounts.recording} recordings`}
// // // //             color="bg-blue-500"
// // // //           />
// // // //           <StatCard
// // // //             icon={Users}
// // // //             title="Live Sessions"
// // // //             value={overallStats.breakdown.liveTranscription.minutes}
// // // //             subtitle={`${meetingCounts.liveTranscription} sessions`}
// // // //             color="bg-pink-500"
// // // //           />
// // // //           <StatCard
// // // //             icon={Calendar}
// // // //             title="Audio Notes"
// // // //             value={overallStats.breakdown.audioNotes.minutes}
// // // //             subtitle={`${meetingCounts.audioNotes} notes`}
// // // //             color="bg-cyan-500"
// // // //           />
// // // //         </div>

// // // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
// // // //           {/* Screen Recording Analysis */}
// // // //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// // // //             <h2 className="text-lg font-medium text-gray-600 mb-6">Screen Recording Usage</h2>
// // // //             <div className="flex flex-col items-center">
// // // //               <div className="relative w-40 h-40 mb-4">
// // // //                 <ResponsiveContainer width="100%" height="100%">
// // // //                   <PieChart>
// // // //                     <Pie
// // // //                       data={screenData}
// // // //                       cx="50%"
// // // //                       cy="50%"
// // // //                       innerRadius={50}
// // // //                       outerRadius={80}
// // // //                       paddingAngle={2}
// // // //                       dataKey="value"
// // // //                       startAngle={90}
// // // //                       endAngle={450}
// // // //                     >
// // // //                       {screenData.map((entry, index) => (
// // // //                         <Cell key={`cell-${index}`} fill={entry.color} />
// // // //                       ))}
// // // //                     </Pie>
// // // //                   </PieChart>
// // // //                 </ResponsiveContainer>
// // // //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// // // //                   <div className="text-xl font-bold text-gray-800">
// // // //                     {overallStats.breakdown.recording.minutes}
// // // //                   </div>
// // // //                   <div className="text-xs text-gray-600 text-center">Minutes Used</div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="w-full">
// // // //                 {screenRecordingData.length > 0 ? (
// // // //                   screenRecordingData.map((item, index) => (
// // // //                     <LegendItem 
// // // //                       key={index}
// // // //                       color={item.color}
// // // //                       label={item.name}
// // // //                       percentage={overallStats.breakdown.recording.percentage}
// // // //                       minutes={item.minutes}
// // // //                     />
// // // //                   ))
// // // //                 ) : (
// // // //                   <p className="text-sm text-gray-500 text-center">No screen recordings yet</p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Live Transcription Analysis */}
// // // //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// // // //             <h2 className="text-lg font-medium text-gray-600 mb-6">Live Transcription Usage</h2>
// // // //             <div className="flex flex-col items-center">
// // // //               <div className="relative w-40 h-40 mb-4">
// // // //                 <ResponsiveContainer width="100%" height="100%">
// // // //                   <PieChart>
// // // //                     <Pie
// // // //                       data={liveData}
// // // //                       cx="50%"
// // // //                       cy="50%"
// // // //                       innerRadius={50}
// // // //                       outerRadius={80}
// // // //                       paddingAngle={2}
// // // //                       dataKey="value"
// // // //                       startAngle={90}
// // // //                       endAngle={450}
// // // //                     >
// // // //                       {liveData.map((entry, index) => (
// // // //                         <Cell key={`cell-${index}`} fill={entry.color} />
// // // //                       ))}
// // // //                     </Pie>
// // // //                   </PieChart>
// // // //                 </ResponsiveContainer>
// // // //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// // // //                   <div className="text-xl font-bold text-gray-800">
// // // //                     {overallStats.breakdown.liveTranscription.minutes}
// // // //                   </div>
// // // //                   <div className="text-xs text-gray-600 text-center">Minutes Used</div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="w-full">
// // // //                 {liveTranscriptionData.length > 0 ? (
// // // //                   liveTranscriptionData.map((item, index) => (
// // // //                     <LegendItem 
// // // //                       key={index}
// // // //                       color={item.color}
// // // //                       label={item.name}
// // // //                       percentage={overallStats.breakdown.liveTranscription.percentage}
// // // //                       minutes={item.minutes}
// // // //                     />
// // // //                   ))
// // // //                 ) : (
// // // //                   <p className="text-sm text-gray-500 text-center">No live transcriptions yet</p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Audio Notes Analysis */}
// // // //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// // // //             <h2 className="text-lg font-medium text-gray-600 mb-6">Audio Notes Usage</h2>
// // // //             <div className="flex flex-col items-center">
// // // //               <div className="relative w-40 h-40 mb-4">
// // // //                 <ResponsiveContainer width="100%" height="100%">
// // // //                   <PieChart>
// // // //                     <Pie
// // // //                       data={audioData}
// // // //                       cx="50%"
// // // //                       cy="50%"
// // // //                       innerRadius={50}
// // // //                       outerRadius={80}
// // // //                       paddingAngle={2}
// // // //                       dataKey="value"
// // // //                       startAngle={90}
// // // //                       endAngle={450}
// // // //                     >
// // // //                       {audioData.map((entry, index) => (
// // // //                         <Cell key={`cell-${index}`} fill={entry.color} />
// // // //                       ))}
// // // //                     </Pie>
// // // //                   </PieChart>
// // // //                 </ResponsiveContainer>
// // // //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// // // //                   <div className="text-xl font-bold text-gray-800">
// // // //                     {overallStats.breakdown.audioNotes.minutes}
// // // //                   </div>
// // // //                   <div className="text-xs text-gray-600 text-center">Minutes Used</div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="w-full">
// // // //                 {audioNotesData.length > 0 ? (
// // // //                   audioNotesData.map((item, index) => (
// // // //                     <LegendItem 
// // // //                       key={index}
// // // //                       color={item.color}
// // // //                       label={item.name}
// // // //                       percentage={overallStats.breakdown.audioNotes.percentage}
// // // //                       minutes={item.minutes}
// // // //                     />
// // // //                   ))
// // // //                 ) : (
// // // //                   <p className="text-sm text-gray-500 text-center">No audio notes yet</p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Recent Recordings */}
// // // //         <div className="bg-white rounded-2xl p-6 shadow-sm">
// // // //           <div className="flex items-center justify-between mb-6">
// // // //             <h2 className="text-xl font-semibold text-gray-800">Recent Recordings</h2>
// // // //             <div className="flex items-center text-gray-500">
// // // //               <span className="text-sm mr-1">Last {recentMeetings.length} recordings</span>
// // // //             </div>
// // // //           </div>

// // // //           {recentMeetings.length > 0 ? (
// // // //             <div className="overflow-hidden">
// // // //               <div className="bg-purple-100 rounded-t-lg px-6 py-4">
// // // //                 <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-700">
// // // //                   <div>Title</div>
// // // //                   <div>Duration</div>
// // // //                   <div>Type</div>
// // // //                   <div>Start Time</div>
// // // //                   <div>End Time</div>
// // // //                   <div>Participants</div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="bg-white max-h-80 overflow-y-auto">
// // // //                 {recentMeetings.map((recording, index) => (
// // // //                   <div key={recording.id || index} className="px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
// // // //                     <div className="grid grid-cols-6 gap-4 text-sm text-gray-600">
// // // //                       <div className="font-medium text-gray-800 truncate" title={recording.title}>
// // // //                         {recording.title}
// // // //                       </div>
// // // //                       <div className="font-mono">{recording.totalTime}</div>
// // // //                       <div>
// // // //                         <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
// // // //                           recording.type === 'recording' 
// // // //                             ? 'bg-blue-100 text-blue-800'
// // // //                             : recording.type === 'live-transcription'
// // // //                             ? 'bg-pink-100 text-pink-800'
// // // //                             : 'bg-cyan-100 text-cyan-800'
// // // //                         }`}>
// // // //                           {recording.type === 'recording' 
// // // //                             ? 'Screen Recording'
// // // //                             : recording.type === 'live-transcription'
// // // //                             ? 'Live Session'
// // // //                             : 'Audio Notes'}
// // // //                         </span>
// // // //                       </div>
// // // //                       <div>{recording.startTime}</div>
// // // //                       <div>{recording.endTime}</div>
// // // //                       <div>{recording.participants} speaker{recording.participants !== 1 ? 's' : ''}</div>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           ) : (
// // // //             <div className="text-center py-8">
// // // //               <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
// // // //               <p className="text-gray-500">No recordings found</p>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Usage Summary */}
// // // //         <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
// // // //           <div className="flex items-center justify-between">
// // // //             <div>
// // // //               <h3 className="text-lg font-semibold mb-2">Usage Summary</h3>
// // // //               <p className="text-purple-100">
// // // //                 You've used {overallStats.totalUsedMinutes} minutes out of 100 minutes ({overallStats.percentageUsed}%)
// // // //               </p>
// // // //               <p className="text-purple-100 text-sm mt-1">
// // // //                 {overallStats.remainingMinutes} minutes remaining
// // // //               </p>
// // // //             </div>
// // // //             <div className="text-right">
// // // //               <div className="text-3xl font-bold">{overallStats.remainingMinutes}</div>
// // // //               <div className="text-purple-200 text-sm">Minutes Left</div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Progress bar */}
// // // //           <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
// // // //             <div 
// // // //               className="bg-white rounded-full h-2 transition-all duration-300"
// // // //               style={{ width: `${overallStats.percentageUsed}%` }}
// // // //             ></div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AIInsights;


// // // import React, { useState, useEffect } from 'react';
// // // import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// // // import { ChevronDown, AlertCircle } from 'lucide-react';

// // // const AIInsights = () => {
// // //   const [analyticsData, setAnalyticsData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // Fetch analytics data
// // //   useEffect(() => {
// // //     fetchAnalyticsData();
// // //   }, []);

// // //   const fetchAnalyticsData = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError(null);

// // //       const token = localStorage.getItem('token');
// // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/analytics', {
// // //         headers: {
// // //           'Authorization': token,
// // //           'Content-Type': 'application/json',
// // //         },
// // //       });

// // //       const data = await response.json();

// // //       if (data.success) {
// // //         setAnalyticsData(data.analytics);
// // //       } else {
// // //         setError('Failed to load analytics data');
// // //       }
// // //     } catch (err) {
// // //       console.error('Failed to fetch analytics:', err);
// // //       setError('Unable to load analytics data');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Transform real data into chart format
// // //   const getScreenRecordingData = () => {
// // //     if (!analyticsData?.hasUsage) {
// // //       return [
// // //         { name: 'No Data', value: 100, color: '#E5E7EB' }
// // //       ];
// // //     }

// // //     const { overallStats } = analyticsData;
// // //     const recordingPercentage = overallStats.breakdown.recording.percentage;
// // //     const remaining = Math.max(0, 100 - recordingPercentage);

// // //     if (recordingPercentage === 0) {
// // //       return [{ name: 'No Usage', value: 100, color: '#E5E7EB' }];
// // //     }

// // //     return [
// // //       { name: 'Screen Recordings', value: recordingPercentage, color: '#8B5CF6' },
// // //       { name: 'Remaining', value: remaining, color: '#F3F4F6' }
// // //     ];
// // //   };

// // //   const getAudioRecordingData = () => {
// // //     if (!analyticsData?.hasUsage) {
// // //       return [
// // //         { name: 'No Data', value: 100, color: '#E5E7EB' }
// // //       ];
// // //     }

// // //     const { overallStats } = analyticsData;
// // //     const liveTranscriptionPercentage = overallStats.breakdown.liveTranscription.percentage;
// // //     const audioNotesPercentage = overallStats.breakdown.audioNotes.percentage;
// // //     const combinedPercentage = liveTranscriptionPercentage + audioNotesPercentage;
// // //     const remaining = Math.max(0, 100 - combinedPercentage);

// // //     const data = [];

// // //     if (liveTranscriptionPercentage > 0) {
// // //       data.push({ name: 'Live Transcription', value: liveTranscriptionPercentage, color: '#EC4899' });
// // //     }

// // //     if (audioNotesPercentage > 0) {
// // //       data.push({ name: 'Audio Notes', value: audioNotesPercentage, color: '#06B6D4' });
// // //     }

// // //     if (data.length === 0) {
// // //       return [{ name: 'No Usage', value: 100, color: '#E5E7EB' }];
// // //     }

// // //     if (remaining > 0) {
// // //       data.push({ name: 'Remaining', value: remaining, color: '#F3F4F6' });
// // //     }

// // //     return data;
// // //   };

// // //   const CustomLabel = ({ value, count }) => (
// // //     <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-center">
// // //       <tspan x="50%" dy="-0.3em" className="text-2xl font-bold text-gray-800">{count}</tspan>
// // //       <tspan x="50%" dy="1.2em" className="text-sm text-gray-600 font-medium">{value}</tspan>
// // //     </text>
// // //   );

// // //   const LegendItem = ({ color, label, percentage }) => (
// // //     <div className="flex items-center mb-2">
// // //       <div 
// // //         className="w-3 h-3 rounded-full mr-3"
// // //         style={{ backgroundColor: color }}
// // //       />
// // //       <span className="text-sm text-gray-700 font-medium">{label}-{percentage}%</span>
// // //     </div>
// // //   );

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 p-6">
// // //         <div className="max-w-6xl mx-auto">
// // //           <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>
// // //           <div className="text-center py-16">
// // //             <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
// // //             <p className="text-gray-600">Loading analytics data...</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 p-6">
// // //         <div className="max-w-6xl mx-auto">
// // //           <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>
// // //           <div className="text-center py-16">
// // //             <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
// // //             <h3 className="text-lg font-semibold text-gray-600 mb-2">Failed to Load Analytics</h3>
// // //             <p className="text-gray-500 mb-4">{error}</p>
// // //             <button 
// // //               onClick={fetchAnalyticsData}
// // //               className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
// // //             >
// // //               Retry
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const screenRecordingData = getScreenRecordingData();
// // //   const audioRecordingData = getAudioRecordingData();

// // //   // Get the total counts and recent recordings
// // //   const screenRecordingCount = analyticsData?.meetingCounts?.recording || 0;
// // //   const audioRecordingCount = (analyticsData?.meetingCounts?.liveTranscription || 0) + 
// // //                               (analyticsData?.meetingCounts?.audioNotes || 0);

// // //   const recentRecordings = analyticsData?.recentMeetings?.slice(0, 10) || [];

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-6">
// // //       <div className="max-w-6xl mx-auto">
// // //         <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>

// // //         <div className="grid grid-cols-1 [@media(min-width:1150px)]:grid-cols-2 gap-6 mb-8">
// // //           {/* Screen Recording Analysis */}
// // //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// // //             <h2 className="text-lg font-medium text-gray-600 mb-6">Screen Recording analysis</h2>
// // //             <div className="flex items-center justify-between">
// // //               <div className="relative w-48 h-48">
// // //                 <ResponsiveContainer width="100%" height="100%">
// // //                   <PieChart>
// // //                     <Pie
// // //                       data={screenRecordingData}
// // //                       cx="50%"
// // //                       cy="50%"
// // //                       innerRadius={60}
// // //                       outerRadius={90}
// // //                       paddingAngle={2}
// // //                       dataKey="value"
// // //                       startAngle={90}
// // //                       endAngle={450}
// // //                     >
// // //                       {screenRecordingData.map((entry, index) => (
// // //                         <Cell key={`cell-${index}`} fill={entry.color} />
// // //                       ))}
// // //                     </Pie>
// // //                   </PieChart>
// // //                 </ResponsiveContainer>
// // //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// // //                   <div className="text-2xl font-bold text-gray-800">{screenRecordingCount}</div>
// // //                   <div className="text-sm text-gray-600 font-medium">Screen Recordings</div>
// // //                 </div>
// // //               </div>

// // //               <div className="ml-8">
// // //                 {screenRecordingData
// // //                   .filter(item => item.name !== 'Remaining' && item.name !== 'No Data' && item.name !== 'No Usage')
// // //                   .map((item, index) => (
// // //                     <LegendItem 
// // //                       key={index}
// // //                       color={item.color}
// // //                       label={item.name}
// // //                       percentage={item.value}
// // //                     />
// // //                   ))}
// // //                 {screenRecordingData.some(item => item.name === 'No Usage' || item.name === 'No Data') && (
// // //                   <div className="text-sm text-gray-500 italic">No screen recordings yet</div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Audio Recordings Analysis */}
// // //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// // //             <h2 className="text-lg font-medium text-gray-600 mb-6">Audio recordings analysis</h2>
// // //             <div className="flex items-center justify-between">
// // //               <div className="relative w-48 h-48">
// // //                 <ResponsiveContainer width="100%" height="100%">
// // //                   <PieChart>
// // //                     <Pie
// // //                       data={audioRecordingData}
// // //                       cx="50%"
// // //                       cy="50%"
// // //                       innerRadius={60}
// // //                       outerRadius={90}
// // //                       paddingAngle={2}
// // //                       dataKey="value"
// // //                       startAngle={90}
// // //                       endAngle={450}
// // //                     >
// // //                       {audioRecordingData.map((entry, index) => (
// // //                         <Cell key={`cell-${index}`} fill={entry.color} />
// // //                       ))}
// // //                     </Pie>
// // //                   </PieChart>
// // //                 </ResponsiveContainer>
// // //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// // //                   <div className="text-2xl font-bold text-gray-800">{audioRecordingCount}</div>
// // //                   <div className="text-sm text-gray-600 font-medium">Audio recordings</div>
// // //                 </div>
// // //               </div>

// // //               <div className="ml-8">
// // //                 {audioRecordingData
// // //                   .filter(item => item.name !== 'Remaining' && item.name !== 'No Data' && item.name !== 'No Usage')
// // //                   .map((item, index) => (
// // //                     <LegendItem 
// // //                       key={index}
// // //                       color={item.color}
// // //                       label={item.name}
// // //                       percentage={item.value}
// // //                     />
// // //                   ))}
// // //                 {audioRecordingData.some(item => item.name === 'No Usage' || item.name === 'No Data') && (
// // //                   <div className="text-sm text-gray-500 italic">No audio recordings yet</div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Recent Recordings */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm">
// // //           <div className="flex items-center justify-between mb-6">
// // //             <h2 className="text-xl font-semibold text-gray-800">Recent Recordings</h2>
// // //             <div className="flex items-center text-gray-500 cursor-pointer" onClick={fetchAnalyticsData}>
// // //               <span className="text-sm mr-1">
// // //                 {recentRecordings.length > 0 ? `Latest ${recentRecordings.length}` : 'No recordings'}
// // //               </span>
// // //               <ChevronDown size={16} />
// // //             </div>
// // //           </div>

// // //           <div className="overflow-hidden">
// // //             <div className="bg-purple-200 rounded-t-lg px-6 py-4">
// // //               <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700">
// // //                 <div>Total Time</div>
// // //                 <div>Start Time</div>
// // //                 <div>End Time</div>
// // //                 <div>Speaker</div>
// // //               </div>
// // //             </div>

// // //             <div className="bg-white">
// // //               {recentRecordings.length > 0 ? recentRecordings.map((recording, index) => (
// // //                 <div key={recording.id || index} className="px-6 py-4 border-b border-gray-100 last:border-b-0">
// // //                   <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
// // //                     <div className="font-medium">{recording.totalTime}</div>
// // //                     <div>{recording.startTime}</div>
// // //                     <div>{recording.endTime}</div>
// // //                     <div>{recording.speaker}</div>
// // //                   </div>
// // //                 </div>
// // //               )) : (
// // //                 <div className="px-6 py-8 text-center text-gray-500">
// // //                   <p>No recordings found</p>
// // //                   <p className="text-sm mt-1">Start recording to see your sessions here</p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Usage Summary Footer */}
// // //         {analyticsData?.hasUsage && (
// // //           <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
// // //             <div className="flex items-center justify-between">
// // //               <div>
// // //                 <h3 className="text-lg font-semibold mb-1">Usage Summary</h3>
// // //                 <p className="text-purple-100">
// // //                   {analyticsData.overallStats.totalUsedMinutes} minutes used out of 100 minutes 
// // //                   ({analyticsData.overallStats.percentageUsed}%)
// // //                 </p>
// // //               </div>
// // //               <div className="text-right">
// // //                 <div className="text-3xl font-bold">{analyticsData.overallStats.remainingMinutes}</div>
// // //                 <div className="text-purple-200 text-sm">Minutes Remaining</div>
// // //               </div>
// // //             </div>

// // //             {/* Progress bar */}
// // //             <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
// // //               <div 
// // //                 className="bg-white rounded-full h-2 transition-all duration-300"
// // //                 style={{ width: `${analyticsData.overallStats.percentageUsed}%` }}
// // //               ></div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AIInsights;

// // import React, { useState, useEffect } from 'react';
// // import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// // import { ChevronDown, AlertCircle } from 'lucide-react';

// // const AIInsights = () => {
// //   const [analyticsData, setAnalyticsData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch analytics data
// //   useEffect(() => {
// //     fetchAnalyticsData();
// //   }, []);

// //   const fetchAnalyticsData = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);

// //       const token = localStorage.getItem('token');
// //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/analytics', {
// //         headers: {
// //           'Authorization': token,
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       const data = await response.json();

// //       if (data.success) {
// //         setAnalyticsData(data.analytics);
// //       } else {
// //         setError('Failed to load analytics data');
// //       }
// //     } catch (err) {
// //       console.error('Failed to fetch analytics:', err);
// //       setError('Unable to load analytics data');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const CustomLabel = ({ value, count }) => (
// //     <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-center">
// //       <tspan x="50%" dy="-0.3em" className="text-2xl font-bold text-gray-800">{count}</tspan>
// //       <tspan x="50%" dy="1.2em" className="text-sm text-gray-600 font-medium">{value}</tspan>
// //     </text>
// //   );

// //   const LegendItem = ({ color, label, value, unit = '%' }) => (
// //     <div className="flex items-center mb-2">
// //       <div 
// //         className="w-3 h-3 rounded-full mr-3"
// //         style={{ backgroundColor: color }}
// //       />
// //       <span className="text-sm text-gray-700 font-medium">{label}-{value}{unit}</span>
// //     </div>
// //   );

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 p-6">
// //         <div className="max-w-6xl mx-auto">
// //           <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>
// //           <div className="text-center py-16">
// //             <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
// //             <p className="text-gray-600">Loading analytics data...</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 p-6">
// //         <div className="max-w-6xl mx-auto">
// //           <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>
// //           <div className="text-center py-16">
// //             <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
// //             <h3 className="text-lg font-semibold text-gray-600 mb-2">Failed to Load Analytics</h3>
// //             <p className="text-gray-500 mb-4">{error}</p>
// //             <button 
// //               onClick={fetchAnalyticsData}
// //               className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
// //             >
// //               Retry
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Get chart data
// //   const dailyUsageData = analyticsData?.dailyUsageChartData || [];
// //   const weeklyMeetingsData = analyticsData?.weeklyMeetingsChartData || [];
// //   const recentRecordings = analyticsData?.recentMeetings?.slice(0, 10) || [];

// //   // Calculate totals for center display
// //   const totalDailyMinutes = dailyUsageData.reduce((sum, day) => sum + day.value, 0);
// //   const totalWeeklyMeetings = weeklyMeetingsData.length;

// //   // Create placeholder data when no usage
// //   const createNoDataPlaceholder = (message) => [
// //     { name: message, value: 100, color: '#E5E7EB' }
// //   ];

// //   const finalDailyData = dailyUsageData.length > 0 ? dailyUsageData : createNoDataPlaceholder('No Usage');
// //   const finalWeeklyData = weeklyMeetingsData.length > 0 ? weeklyMeetingsData : createNoDataPlaceholder('No Meetings');

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-6">
// //       <div className="max-w-6xl mx-auto">
// //         <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>

// //         <div className="grid grid-cols-1 [@media(min-width:1150px)]:grid-cols-2 gap-6 mb-8">
// //           {/* Daily Usage Analysis */}
// //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// //             <h2 className="text-lg font-medium text-gray-600 mb-6">Daily Usage Analysis</h2>
// //             <div className="flex items-center justify-between">
// //               <div className="relative w-48 h-48">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <PieChart>
// //                     <Pie
// //                       data={finalDailyData}
// //                       cx="50%"
// //                       cy="50%"
// //                       innerRadius={60}
// //                       outerRadius={90}
// //                       paddingAngle={2}
// //                       dataKey="value"
// //                       startAngle={90}
// //                       endAngle={450}
// //                     >
// //                       {finalDailyData.map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={entry.color} />
// //                       ))}
// //                     </Pie>
// //                   </PieChart>
// //                 </ResponsiveContainer>
// //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// //                   <div className="text-2xl font-bold text-gray-800">{totalDailyMinutes}</div>
// //                   <div className="text-sm text-gray-600 font-medium">Minutes Used</div>
// //                 </div>
// //               </div>

// //               <div className="ml-8 max-h-48 overflow-y-auto">
// //                 {dailyUsageData.length > 0 ? (
// //                   dailyUsageData.map((day, index) => (
// //                     <LegendItem 
// //                       key={index}
// //                       color={day.color}
// //                       label={day.name}
// //                       value={day.value}
// //                       unit=" min"
// //                     />
// //                   ))
// //                 ) : (
// //                   <div className="text-sm text-gray-500 italic">No daily usage data yet</div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Recent Meetings Analysis */}
// //           <div className="bg-white rounded-2xl p-6 shadow-sm">
// //             <h2 className="text-lg font-medium text-gray-600 mb-6">Recent Meetings (Last Week)</h2>
// //             <div className="flex items-center justify-between">
// //               <div className="relative w-48 h-48">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <PieChart>
// //                     <Pie
// //                       data={finalWeeklyData}
// //                       cx="50%"
// //                       cy="50%"
// //                       innerRadius={60}
// //                       outerRadius={90}
// //                       paddingAngle={2}
// //                       dataKey="value"
// //                       startAngle={90}
// //                       endAngle={450}
// //                     >
// //                       {finalWeeklyData.map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={entry.color} />
// //                       ))}
// //                     </Pie>
// //                   </PieChart>
// //                 </ResponsiveContainer>
// //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
// //                   <div className="text-2xl font-bold text-gray-800">{totalWeeklyMeetings}</div>
// //                   <div className="text-sm text-gray-600 font-medium">Meetings</div>
// //                 </div>
// //               </div>

// //               <div className="ml-8 max-h-48 overflow-y-auto">
// //                 {weeklyMeetingsData.length > 0 ? (
// //                   weeklyMeetingsData.map((meeting, index) => (
// //                     <div key={index} className="flex items-center mb-2">
// //                       <div 
// //                         className="w-3 h-3 rounded-full mr-3"
// //                         style={{ backgroundColor: meeting.color }}
// //                       />
// //                       <div className="text-sm text-gray-700">
// //                         <div className="font-medium" title={meeting.fullTitle}>
// //                           {meeting.name}
// //                         </div>
// //                         <div className="text-xs text-gray-500">
// //                           {meeting.duration} min • {meeting.type === 'recording' ? 'Screen Recording' : 
// //                            meeting.type === 'live-transcription' ? 'Live Session' : 'Audio Notes'}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <div className="text-sm text-gray-500 italic">No meetings this week</div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recent Recordings */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm">
// //           <div className="flex items-center justify-between mb-6">
// //             <h2 className="text-xl font-semibold text-gray-800">Recent Recordings</h2>
// //             <div className="flex items-center text-gray-500 cursor-pointer" onClick={fetchAnalyticsData}>
// //               <span className="text-sm mr-1">
// //                 {recentRecordings.length > 0 ? `Latest ${recentRecordings.length}` : 'No recordings'}
// //               </span>
// //               <ChevronDown size={16} />
// //             </div>
// //           </div>

// //           <div className="overflow-hidden">
// //             <div className="bg-purple-200 rounded-t-lg px-6 py-4">
// //               <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700">
// //                 <div>Total Time</div>
// //                 <div>Start Time</div>
// //                 <div>End Time</div>
// //                 <div>Speaker</div>
// //               </div>
// //             </div>

// //             <div className="bg-white">
// //               {recentRecordings.length > 0 ? recentRecordings.map((recording, index) => (
// //                 <div key={recording.id || index} className="px-6 py-4 border-b border-gray-100 last:border-b-0">
// //                   <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
// //                     <div className="font-medium">{recording.totalTime}</div>
// //                     <div>{recording.startTime}</div>
// //                     <div>{recording.endTime}</div>
// //                     <div>{recording.speaker}</div>
// //                   </div>
// //                 </div>
// //               )) : (
// //                 <div className="px-6 py-8 text-center text-gray-500">
// //                   <p>No recordings found</p>
// //                   <p className="text-sm mt-1">Start recording to see your sessions here</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Usage Summary Footer */}
// //         {analyticsData?.hasUsage && (
// //           <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <h3 className="text-lg font-semibold mb-1">Usage Summary</h3>
// //                 <p className="text-purple-100">
// //                   {analyticsData.overallStats.totalUsedMinutes} minutes used out of 100 minutes 
// //                   ({analyticsData.overallStats.percentageUsed}%)
// //                 </p>
// //                 <div className="flex items-center space-x-4 mt-2 text-sm text-purple-200">
// //                   <span>📹 {analyticsData.overallStats.breakdown.recording.minutes} min recordings</span>
// //                   <span>🎙️ {analyticsData.overallStats.breakdown.liveTranscription.minutes} min live</span>
// //                   <span>🎵 {analyticsData.overallStats.breakdown.audioNotes.minutes} min audio</span>
// //                 </div>
// //               </div>
// //               <div className="text-right">
// //                 <div className="text-3xl font-bold">{analyticsData.overallStats.remainingMinutes}</div>
// //                 <div className="text-purple-200 text-sm">Minutes Remaining</div>
// //               </div>
// //             </div>

// //             {/* Progress bar */}
// //             <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
// //               <div 
// //                 className="bg-white rounded-full h-2 transition-all duration-300"
// //                 style={{ width: `${analyticsData.overallStats.percentageUsed}%` }}
// //               ></div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AIInsights;


// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// import { ChevronDown, AlertCircle } from 'lucide-react';

// const AIInsights = () => {
//   const [analyticsData, setAnalyticsData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch analytics data
//   useEffect(() => {
//     fetchAnalyticsData();
//   }, []);

//   const fetchAnalyticsData = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const token = localStorage.getItem('token');
//       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/analytics', {
//         headers: {
//           'Authorization': token,
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (data.success) {
//         setAnalyticsData(data.analytics);
//       } else {
//         setError('Failed to load analytics data');
//       }
//     } catch (err) {
//       console.error('Failed to fetch analytics:', err);
//       setError('Unable to load analytics data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const CustomLabel = ({ value, count }) => (
//     <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-center">
//       <tspan x="50%" dy="-0.3em" className="text-2xl font-bold text-gray-800">{count}</tspan>
//       <tspan x="50%" dy="1.2em" className="text-sm text-gray-600 font-medium">{value}</tspan>
//     </text>
//   );

//   const LegendItem = ({ color, label, value, unit = '%' }) => (
//     <div className="flex items-center mb-2">
//       <div 
//         className="w-3 h-3 rounded-full mr-3"
//         style={{ backgroundColor: color }}
//       />
//       <span className="text-sm text-gray-700 font-medium">{label}-{value}{unit}</span>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-6">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>
//           <div className="text-center py-16">
//             <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading analytics data...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-6">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>
//           <div className="text-center py-16">
//             <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-600 mb-2">Failed to Load Analytics</h3>
//             <p className="text-gray-500 mb-4">{error}</p>
//             <button 
//               onClick={fetchAnalyticsData}
//               className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//             >
//               Retry
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Get chart data
//   const dailyUsageData = analyticsData?.dailyUsageChartData || [];
//   const weeklyMeetingsData = analyticsData?.weeklyMeetingsChartData || [];
//   const recentRecordings = analyticsData?.recentMeetings?.slice(0, 10) || [];

//   // Calculate totals for center display
//   const totalDailyMinutes = dailyUsageData.reduce((sum, day) => sum + day.value, 0);
//   const totalWeeklyMeetings = weeklyMeetingsData.length;

//   // Group meetings by type for display
//   const getMeetingTypeCounts = (meetings) => {
//     const typeCounts = {};
//     const typeColors = {};

//     meetings.forEach(meeting => {
//       const type = meeting.type === 'recording' ? 'Screen Recording' : 
//                    meeting.type === 'live-transcription' ? 'Live Session' : 'Audio Notes';

//       if (!typeCounts[type]) {
//         typeCounts[type] = 0;
//         typeColors[type] = meeting.color;
//       }
//       typeCounts[type]++;
//     });

//     return Object.entries(typeCounts).map(([type, count]) => ({
//       type,
//       count,
//       color: typeColors[type]
//     }));
//   };

//   const meetingTypeCounts = getMeetingTypeCounts(weeklyMeetingsData);

//   // Create placeholder data when no usage
//   const createNoDataPlaceholder = (message) => [
//     { name: message, value: 100, color: '#E5E7EB' }
//   ];

//   const finalDailyData = dailyUsageData.length > 0 ? dailyUsageData : createNoDataPlaceholder('No Usage');
//   const finalWeeklyData = weeklyMeetingsData.length > 0 ? weeklyMeetingsData : createNoDataPlaceholder('No Meetings');

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>

//         <div className="grid grid-cols-1 [@media(min-width:1150px)]:grid-cols-2 gap-6 mb-8">
//           {/* Daily Usage Analysis */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm">
//             <h2 className="text-lg font-medium text-gray-600 mb-6">Daily Usage Analysis</h2>
//             <div className="flex items-center justify-between">
//               <div className="relative w-48 h-48">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={finalDailyData}
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={60}
//                       outerRadius={90}
//                       paddingAngle={2}
//                       dataKey="value"
//                       startAngle={90}
//                       endAngle={450}
//                     >
//                       {finalDailyData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <div className="text-2xl font-bold text-gray-800">{totalDailyMinutes}</div>
//                   <div className="text-sm text-gray-600 font-medium">Minutes Used</div>
//                 </div>
//               </div>

//               <div className="ml-8 max-h-48 overflow-y-auto">
//                 {dailyUsageData.length > 0 ? (
//                   dailyUsageData.map((day, index) => (
//                     <LegendItem 
//                       key={index}
//                       color={day.color}
//                       label={day.name}
//                       value={day.value}
//                       unit=" min"
//                     />
//                   ))
//                 ) : (
//                   <div className="text-sm text-gray-500 italic">No daily usage data yet</div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Recent Meetings Analysis */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm">
//             <h2 className="text-lg font-medium text-gray-600 mb-6">Recent Meetings (Last Week)</h2>
//             <div className="flex items-center justify-between">
//               <div className="relative w-48 h-48">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={finalWeeklyData}
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={60}
//                       outerRadius={90}
//                       paddingAngle={2}
//                       dataKey="value"
//                       startAngle={90}
//                       endAngle={450}
//                     >
//                       {finalWeeklyData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <div className="text-2xl font-bold text-gray-800">{totalWeeklyMeetings}</div>
//                   <div className="text-sm text-gray-600 font-medium">Meetings</div>
//                 </div>
//               </div>

//               <div className="ml-8 max-h-48 overflow-y-auto">
//                 {meetingTypeCounts.length > 0 ? (
//                   meetingTypeCounts.map((typeData, index) => (
//                     <div key={index} className="flex items-center mb-2">
//                       <div 
//                         className="w-3 h-3 rounded-full mr-3"
//                         style={{ backgroundColor: typeData.color }}
//                       />
//                       <span className="text-sm text-gray-700 font-medium">
//                         {typeData.type} - {typeData.count}
//                       </span>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-sm text-gray-500 italic">No meetings this week</div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Recent Recordings */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Recent Recordings</h2>
//             <div className="flex items-center text-gray-500 cursor-pointer" onClick={fetchAnalyticsData}>
//               <span className="text-sm mr-1">
//                 {recentRecordings.length > 0 ? `Latest ${recentRecordings.length}` : 'No recordings'}
//               </span>
//               <ChevronDown size={16} />
//             </div>
//           </div>

//           <div className="overflow-hidden">
//             <div className="bg-purple-200 rounded-t-lg px-6 py-4">
//               <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700">
//                 <div>Total Time</div>
//                 <div>Start Time</div>
//                 <div>End Time</div>
//                 <div>Speaker</div>
//               </div>
//             </div>

//             <div className="bg-white">
//               {recentRecordings.length > 0 ? recentRecordings.map((recording, index) => (
//                 <div key={recording.id || index} className="px-6 py-4 border-b border-gray-100 last:border-b-0">
//                   <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
//                     <div className="font-medium">{recording.totalTime}</div>
//                     <div>{recording.startTime}</div>
//                     <div>{recording.endTime}</div>
//                     <div>{recording.speaker}</div>
//                   </div>
//                 </div>
//               )) : (
//                 <div className="px-6 py-8 text-center text-gray-500">
//                   <p>No recordings found</p>
//                   <p className="text-sm mt-1">Start recording to see your sessions here</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Usage Summary Footer */}
//         {analyticsData?.hasUsage && (
//           <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold mb-1">Usage Summary</h3>
//                 <p className="text-purple-100">
//                   {analyticsData.overallStats.totalUsedMinutes} minutes used out of 100 minutes 
//                   ({analyticsData.overallStats.percentageUsed}%)
//                 </p>
//                 <div className="flex items-center space-x-4 mt-2 text-sm text-purple-200">
//                   <span>📹 {analyticsData.overallStats.breakdown.recording.minutes} min recordings</span>
//                   <span>🎙️ {analyticsData.overallStats.breakdown.liveTranscription.minutes} min live</span>
//                   <span>🎵 {analyticsData.overallStats.breakdown.audioNotes.minutes} min audio</span>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="text-3xl font-bold">{analyticsData.overallStats.remainingMinutes}</div>
//                 <div className="text-purple-200 text-sm">Minutes Remaining</div>
//               </div>
//             </div>

//             {/* Progress bar */}
//             <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
//               <div 
//                 className="bg-white rounded-full h-2 transition-all duration-300"
//                 style={{ width: `${analyticsData.overallStats.percentageUsed}%` }}
//               ></div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AIInsights;









import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChevronDown, AlertCircle } from 'lucide-react';

const AIInsights = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch analytics data
  useEffect(() => {
    fetchAnalyticsData();
    fetchUserHistory();
  }, []);

  const fetchUserHistory = async () => {
    try {
      setHistoryLoading(true);

      const token = localStorage.getItem('token');
      const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/history/user?limit=10', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        setUserHistory(data.data.history);
      } else {
        console.error('Failed to load user history');
      }
    } catch (err) {
      console.error('Failed to fetch user history:', err);
    } finally {
      setHistoryLoading(false);
    }
  };

  // Helper functions for activity display
  const getActivityIcon = (action, targetType) => {
    const iconMap = {
      'created': {
        'Meeting': '🎥',
        'SupportRequest': '🎫',
        'Feedback': '💬',
        'User': '👤'
      },
      'updated': {
        'Meeting': '✏️',
        'SupportRequest': '📝',
        'Feedback': '📤',
        'User': '🔄'
      },
      'deleted': {
        'Meeting': '🗑️',
        'SupportRequest': '❌',
        'Feedback': '💔',
        'User': '👋'
      },
      'submitted': {
        'SupportRequest': '📋',
        'Feedback': '⭐',
        'ContactQuery': '📧'
      },
      'shared': {
        'MeetingSummary': '📤'
      },
      'self-registered': {
        'User': '🎉'
      }
    };

    return (
      <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full text-lg">
        {iconMap[action]?.[targetType] || '📌'}
      </div>
    );
  };

  const formatActivityTitle = (activity) => {
    const { action, targetType, details } = activity;

    if (action === 'created' && targetType === 'Meeting') {
      return details.meeting?.title || 'Meeting Created';
    }

    if (action === 'submitted' && targetType === 'SupportRequest') {
      return `${details.supportRequest?.category || 'Support'} Request Submitted`;
    }

    if (action === 'submitted' && targetType === 'Feedback') {
      return `Feedback Submitted (${details.feedback?.rating || 'N/A'} stars)`;
    }

    if (action === 'shared' && targetType === 'MeetingSummary') {
      return `Meeting Summary Shared`;
    }

    if (action === 'self-registered' && targetType === 'User') {
      return 'Account Created';
    }

    // Fallback
    return `${action.charAt(0).toUpperCase() + action.slice(1)} ${targetType}`;
  };

  const formatActivityDescription = (activity) => {
    const { action, targetType, details } = activity;

    if (action === 'created' && targetType === 'Meeting') {
      const meeting = details.meeting;
      return `${meeting?.type || 'meeting'} session • ${meeting?.recordingLengthMinutes || 0} minutes • ${meeting?.transcriptItems || 0} transcript items`;
    }

    if (action === 'submitted' && targetType === 'SupportRequest') {
      return `Category: ${details.supportRequest?.category || 'General'} • Status: ${details.supportRequest?.status || 'Pending'}`;
    }

    if (action === 'submitted' && targetType === 'Feedback') {
      return `Rating: ${details.feedback?.rating || 'N/A'}/5 stars • ${details.feedback?.messageLength || 0} characters`;
    }

    if (action === 'shared' && targetType === 'MeetingSummary') {
      const email = details.emailActivity;
      return `Sent to ${email?.totalRecipients || 0} recipients • ${email?.successfulDeliveries || 0} delivered successfully`;
    }

    if (action === 'self-registered') {
      return `Welcome to the platform! Account created successfully.`;
    }

    return details.summary || `${action} operation on ${targetType}`;
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return date.toLocaleDateString();
  };

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/analytics', {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        setAnalyticsData(data.analytics);
      } else {
        setError('Failed to load analytics data');
      }
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
      setError('Unable to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  const CustomLabel = ({ value, count }) => (
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-center">
      <tspan x="50%" dy="-0.3em" className="text-2xl font-bold text-gray-800">{count}</tspan>
      <tspan x="50%" dy="1.2em" className="text-sm text-gray-600 font-medium">{value}</tspan>
    </text>
  );

  const LegendItem = ({ color, label, value, unit = '%' }) => (
    <div className="flex items-center mb-2">
      <div
        className="w-3 h-3 rounded-full mr-3"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm text-gray-700 font-medium">{label}-{value}{unit}</span>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading analytics data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>
          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Failed to Load Analytics</h3>
            <p className="text-gray-500 mb-4">{error}</p>
            <button
              onClick={fetchAnalyticsData}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get chart data
  const dailyUsageData = analyticsData?.dailyUsageChartData || [];
  const weeklyMeetingsData = analyticsData?.weeklyMeetingsChartData || [];

  // Calculate totals for center display
  const totalDailyMinutes = dailyUsageData.reduce((sum, day) => sum + day.value, 0);
  const totalWeeklyMeetings = weeklyMeetingsData.length;

  // Group meetings by type for display
  const getMeetingTypeCounts = (meetings) => {
    const typeCounts = {};
    const typeColors = {};

    meetings.forEach(meeting => {
      const type = meeting.type === 'recording' ? 'Screen Recording' :
        meeting.type === 'live-transcription' ? 'Live Session' : 'Audio Notes';

      if (!typeCounts[type]) {
        typeCounts[type] = 0;
        typeColors[type] = meeting.color;
      }
      typeCounts[type]++;
    });

    return Object.entries(typeCounts).map(([type, count]) => ({
      type,
      count,
      color: typeColors[type]
    }));
  };

  const meetingTypeCounts = getMeetingTypeCounts(weeklyMeetingsData);

  // Create placeholder data when no usage
  const createNoDataPlaceholder = (message) => [
    { name: message, value: 100, color: '#E5E7EB' }
  ];

  const finalDailyData = dailyUsageData.length > 0 ? dailyUsageData : createNoDataPlaceholder('No Usage');
  const finalWeeklyData = weeklyMeetingsData.length > 0 ? weeklyMeetingsData : createNoDataPlaceholder('No Meetings');

  return (
    //     <div className="min-h-screen bg-gray-50 p-6">
    //       <div className="max-w-6xl mx-auto">
    //         <h1 className="text-3xl font-semibold text-purple-500 mb-8">AI Insights</h1>

    //         <div className="grid grid-cols-1 [@media(min-width:1150px)]:grid-cols-2 gap-6 mb-8">
    //           {/* Daily Usage Analysis */}
    //           <div className="bg-white rounded-2xl p-6 shadow-sm">
    //             <h2 className="text-lg font-medium text-gray-600 mb-6">Daily Usage Analysis</h2>
    //             <div className="flex items-center justify-between">
    //               <div className="relative w-48 h-48">
    //                 <ResponsiveContainer width="100%" height="100%">
    //                   <PieChart>
    //                     <Pie
    //                       data={finalDailyData}
    //                       cx="50%"
    //                       cy="50%"
    //                       innerRadius={60}
    //                       outerRadius={90}
    //                       paddingAngle={2}
    //                       dataKey="value"
    //                       startAngle={90}
    //                       endAngle={450}
    //                     >
    //                       {finalDailyData.map((entry, index) => (
    //                         <Cell key={`cell-${index}`} fill={entry.color} />
    //                       ))}
    //                     </Pie>
    //                   </PieChart>
    //                 </ResponsiveContainer>
    //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
    //                   <div className="text-2xl font-bold text-gray-800">{totalDailyMinutes}</div>
    //                   <div className="text-sm text-gray-600 font-medium">Minutes Used</div>
    //                 </div>
    //               </div>

    //               <div className="ml-8 max-h-48 overflow-y-auto">
    //                 {dailyUsageData.length > 0 ? (
    //                   dailyUsageData.map((day, index) => (
    //                     <LegendItem 
    //                       key={index}
    //                       color={day.color}
    //                       label={day.name}
    //                       value={day.value}
    //                       unit=" min"
    //                     />
    //                   ))
    //                 ) : (
    //                   <div className="text-sm text-gray-500 italic">No daily usage data yet</div>
    //                 )}
    //               </div>
    //             </div>
    //           </div>

    //           {/* Recent Meetings Analysis */}
    //           <div className="bg-white rounded-2xl p-6 shadow-sm">
    //             <h2 className="text-lg font-medium text-gray-600 mb-6">Recent Meetings (Last Week)</h2>
    //             <div className="flex items-center justify-between">
    //               <div className="relative w-48 h-48">
    //                 <ResponsiveContainer width="100%" height="100%">
    //                   <PieChart>
    //                     <Pie
    //                       data={finalWeeklyData}
    //                       cx="50%"
    //                       cy="50%"
    //                       innerRadius={60}
    //                       outerRadius={90}
    //                       paddingAngle={2}
    //                       dataKey="value"
    //                       startAngle={90}
    //                       endAngle={450}
    //                     >
    //                       {finalWeeklyData.map((entry, index) => (
    //                         <Cell key={`cell-${index}`} fill={entry.color} />
    //                       ))}
    //                     </Pie>
    //                   </PieChart>
    //                 </ResponsiveContainer>
    //                 <div className="absolute inset-0 flex flex-col items-center justify-center">
    //                   <div className="text-2xl font-bold text-gray-800">{totalWeeklyMeetings}</div>
    //                   <div className="text-sm text-gray-600 font-medium">Meetings</div>
    //                 </div>
    //               </div>

    //               <div className="ml-8 max-h-48 overflow-y-auto">
    //                 {meetingTypeCounts.length > 0 ? (
    //                   meetingTypeCounts.map((typeData, index) => (
    //                     <div key={index} className="flex items-center mb-2">
    //                       <div 
    //                         className="w-3 h-3 rounded-full mr-3"
    //                         style={{ backgroundColor: typeData.color }}
    //                       />
    //                       <span className="text-sm text-gray-700 font-medium">
    //                         {typeData.type} - {typeData.count}
    //                       </span>
    //                     </div>
    //                   ))
    //                 ) : (
    //                   <div className="text-sm text-gray-500 italic">No meetings this week</div>
    //                 )}
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Activity History */}
    //         <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
    //           <div className="flex items-center justify-between mb-6">
    //             <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
    //             <div className="flex items-center text-gray-500 cursor-pointer" onClick={fetchUserHistory}>
    //               <span className="text-sm mr-1">
    //                 {userHistory.length > 0 ? `Latest ${userHistory.length}` : 'No activity'}
    //               </span>
    //               <ChevronDown size={16} />
    //             </div>
    //           </div>

    //           <div className="space-y-4">
    //             {userHistory.length > 0 ? userHistory.map((activity, index) => (
    //               <div key={activity._id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    //                 <div className="flex-shrink-0">
    //                   {getActivityIcon(activity.action, activity.targetType)}
    //                 </div>
    //                 <div className="flex-grow min-w-0">
    //                   <div className="flex items-center justify-between">
    //                     <h3 className="text-sm font-medium text-gray-900 truncate">
    //                       {formatActivityTitle(activity)}
    //                     </h3>
    //                     <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
    //                       {formatTimeAgo(activity.createdAt)}
    //                     </span>
    //                   </div>
    //                   <p className="text-sm text-gray-600 mt-1">
    //                     {formatActivityDescription(activity)}
    //                   </p>
    //                   {activity.details?.meeting?.recordingLengthMinutes && (
    //                     <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
    //                       <span>📅 {activity.details.meeting.recordingLengthMinutes} min</span>
    //                       <span>🎯 {activity.details.meeting.type}</span>
    //                       {activity.details.meeting.participants?.length > 0 && (
    //                         <span>👥 {activity.details.meeting.participants.length} participants</span>
    //                       )}
    //                     </div>
    //                   )}
    //                 </div>
    //               </div>
    //             )) : historyLoading ? <div className='m-h-[200px] flex justify-center items-center'>
    //               <div className="spinner w-8 h-8 border-4 border-[#8200DB] border-t-transparent rounded-full animate-spin"></div>
    //               </div>
    //  : (
    //               <div className="text-center py-8 text-gray-500">
    //                 <div className="w-16 h-16 mx-auto mb-4 text-gray-300 text-6xl">
    //                   📋
    //                 </div>
    //                 <p>No recent activity found</p>
    //                 <p className="text-sm mt-1">Your actions will appear here</p>
    //               </div>
    //             )}
    //           </div>

    //           {userHistory.length >= 10 && (
    //             <div className="mt-6 text-center">
    //               <button 
    //                 onClick={() => {/* Navigate to full history page */}}
    //                 className="text-purple-600 hover:text-purple-700 text-sm font-medium"
    //               >
    //                 View All Activity →
    //               </button>
    //             </div>
    //           )}
    //         </div>

    //         {/* Usage Summary Footer */}
    //         {analyticsData?.hasUsage && (
    //           <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <h3 className="text-lg font-semibold mb-1">Usage Summary</h3>
    //                 <p className="text-purple-100">
    //                   {analyticsData.overallStats.totalUsedMinutes} minutes used out of 100 minutes 
    //                   ({analyticsData.overallStats.percentageUsed}%)
    //                 </p>
    //                 <div className="flex items-center space-x-4 mt-2 text-sm text-purple-200">
    //                   <span>📹 {analyticsData.overallStats.breakdown.recording.minutes} min recordings</span>
    //                   <span>🎙️ {analyticsData.overallStats.breakdown.liveTranscription.minutes} min live</span>
    //                   <span>🎵 {analyticsData.overallStats.breakdown.audioNotes.minutes} min audio</span>
    //                 </div>
    //               </div>
    //               <div className="text-right">
    //                 <div className="text-3xl font-bold">{analyticsData.overallStats.remainingMinutes}</div>
    //                 <div className="text-purple-200 text-sm">Minutes Remaining</div>
    //               </div>
    //             </div>

    //             {/* Progress bar */}
    //             <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
    //               <div 
    //                 className="bg-white rounded-full h-2 transition-all duration-300"
    //                 style={{ width: `${analyticsData.overallStats.percentageUsed}%` }}
    //               ></div>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-purple-500">AI Insights</h1>
        </header>

        <section className="grid grid-cols-1 [@media(min-width:1150px)]:grid-cols-2 gap-6 mb-8" aria-label="Usage analytics">
          {/* Daily Usage Analysis */}
          <article className="bg-white rounded-2xl p-6 shadow-sm" aria-labelledby="daily-usage-heading">
            <header className="mb-6">
              <h2 id="daily-usage-heading" className="text-lg font-medium text-gray-600">Daily Usage Analysis</h2>
            </header>
            <div className="flex items-center justify-between">
              <figure className="relative w-48 h-48" role="img" aria-labelledby="daily-chart-label">
                <h3 id="daily-chart-label" className="sr-only">
                  Daily usage pie chart showing {totalDailyMinutes} total minutes used
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={finalDailyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      startAngle={90}
                      endAngle={450}
                      aria-label="Daily usage distribution"
                    >
                      {finalDailyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true">
                  <div className="text-2xl font-bold text-gray-800">{totalDailyMinutes}</div>
                  <div className="text-sm text-gray-600 font-medium">Minutes Used</div>
                </div>
              </figure>

              <div className="ml-8 max-h-48 overflow-y-auto" role="list" aria-label="Daily usage breakdown">
                {dailyUsageData.length > 0 ? (
                  dailyUsageData.map((day, index) => (
                    <div key={index} role="listitem">
                      <LegendItem
                        color={day.color}
                        label={day.name}
                        value={day.value}
                        unit=" min"
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 italic" role="status">No daily usage data yet</div>
                )}
              </div>
            </div>
          </article>

          {/* Recent Meetings Analysis */}
          <article className="bg-white rounded-2xl p-6 shadow-sm" aria-labelledby="meetings-analysis-heading">
            <header className="mb-6">
              <h2 id="meetings-analysis-heading" className="text-lg font-medium text-gray-600">Recent Meetings (Last Week)</h2>
            </header>
            <div className="flex items-center justify-between">
              <figure className="relative w-48 h-48" role="img" aria-labelledby="meetings-chart-label">
                <h3 id="meetings-chart-label" className="sr-only">
                  Weekly meetings pie chart showing {totalWeeklyMeetings} total meetings
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={finalWeeklyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      startAngle={90}
                      endAngle={450}
                      aria-label="Weekly meetings distribution"
                    >
                      {finalWeeklyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true">
                  <div className="text-2xl font-bold text-gray-800">{totalWeeklyMeetings}</div>
                  <div className="text-sm text-gray-600 font-medium">Meetings</div>
                </div>
              </figure>

              <div className="ml-8 max-h-48 overflow-y-auto" role="list" aria-label="Meeting types breakdown">
                {meetingTypeCounts.length > 0 ? (
                  meetingTypeCounts.map((typeData, index) => (
                    <div key={index} className="flex items-center mb-2" role="listitem">
                      <div
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: typeData.color }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        {typeData.type} - {typeData.count}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 italic" role="status">No meetings this week</div>
                )}
              </div>
            </div>
          </article>
        </section>

        {/* Activity History */}
        <section className="bg-white rounded-2xl p-6 shadow-sm mb-8" aria-labelledby="activity-history-heading">
          <header className="flex items-center justify-between mb-6">
            <h2 id="activity-history-heading" className="text-xl font-semibold text-gray-800">Recent Activity</h2>
            <button
              className="flex items-center text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
              onClick={fetchUserHistory}
              type="button"
              aria-label="Refresh activity history"
            >
              <span className="text-sm mr-1">
                {userHistory.length > 0 ? `Latest ${userHistory.length}` : 'No activity'}
              </span>
              <ChevronDown size={16} aria-hidden="true" />
            </button>
          </header>

          <div className="space-y-4" role="list" aria-label="Recent activities">
            {userHistory.length > 0 ? userHistory.map((activity, index) => (
              <article key={activity._id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" role="listitem">
                <figure className="flex-shrink-0" aria-hidden="true">
                  {getActivityIcon(activity.action, activity.targetType)}
                </figure>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {formatActivityTitle(activity)}
                    </h3>
                    <time className="text-xs text-gray-500 flex-shrink-0 ml-2" dateTime={activity.createdAt}>
                      {formatTimeAgo(activity.createdAt)}
                    </time>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {formatActivityDescription(activity)}
                  </p>
                  {activity.details?.meeting?.recordingLengthMinutes && (
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span aria-label={`Duration: ${activity.details.meeting.recordingLengthMinutes} minutes`}>
                        📅 {activity.details.meeting.recordingLengthMinutes} min
                      </span>
                      <span aria-label={`Type: ${activity.details.meeting.type}`}>
                        🎯 {activity.details.meeting.type}
                      </span>
                      {activity.details.meeting.participants?.length > 0 && (
                        <span aria-label={`Participants: ${activity.details.meeting.participants.length}`}>
                          👥 {activity.details.meeting.participants.length} participants
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </article>
            )) : historyLoading ? (
              <div className='m-h-[200px] flex justify-center items-center' role="status" aria-live="polite">
                <div className="spinner w-8 h-8 border-4 border-[#8200DB] border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                <span className="sr-only">Loading activity history...</span>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500" role="status">
                <div className="w-16 h-16 mx-auto mb-4 text-gray-300 text-6xl" aria-hidden="true">
                  📋
                </div>
                <p>No recent activity found</p>
                <p className="text-sm mt-1">Your actions will appear here</p>
              </div>
            )}
          </div>

          {userHistory.length >= 10 && (
            <nav className="mt-6 text-center">
              <button
                onClick={() => {/* Navigate to full history page */ }}
                className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                type="button"
                aria-label="View complete activity history"
              >
                View All Activity →
              </button>
            </nav>
          )}
        </section>

        {/* Usage Summary Footer */}
        {analyticsData?.hasUsage && (
          <aside className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white" role="complementary" aria-labelledby="usage-summary-heading">
            <div className="flex items-center justify-between">
              <div>
                <h2 id="usage-summary-heading" className="text-lg font-semibold mb-1">Usage Summary</h2>
                <p className="text-purple-100">
                  {analyticsData.overallStats.totalUsedMinutes} minutes used out of 100 minutes
                  ({analyticsData.overallStats.percentageUsed}%)
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-purple-200" role="list" aria-label="Usage breakdown by type">
                  <span role="listitem" aria-label={`Recordings: ${analyticsData.overallStats.breakdown.recording.minutes} minutes`}>
                    📹 {analyticsData.overallStats.breakdown.recording.minutes} min recordings
                  </span>
                  <span role="listitem" aria-label={`Live transcription: ${analyticsData.overallStats.breakdown.liveTranscription.minutes} minutes`}>
                    🎙️ {analyticsData.overallStats.breakdown.liveTranscription.minutes} min live
                  </span>
                  <span role="listitem" aria-label={`Audio notes: ${analyticsData.overallStats.breakdown.audioNotes.minutes} minutes`}>
                    🎵 {analyticsData.overallStats.breakdown.audioNotes.minutes} min audio
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold" aria-label={`${analyticsData.overallStats.remainingMinutes} minutes remaining`}>
                  {analyticsData.overallStats.remainingMinutes}
                </div>
                <div className="text-purple-200 text-sm">Minutes Remaining</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div
                className="bg-white bg-opacity-20 rounded-full h-2"
                role="progressbar"
                aria-valuenow={analyticsData.overallStats.percentageUsed}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Usage progress: ${analyticsData.overallStats.percentageUsed}% of total minutes used`}
              >
                <div
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${analyticsData.overallStats.percentageUsed}%` }}
                ></div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </main>
  );
};

export default AIInsights;