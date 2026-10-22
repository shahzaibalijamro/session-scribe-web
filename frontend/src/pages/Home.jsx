// // // // // import React from "react";
// // // // // import { Clock, ChevronDown, MessageSquare } from "lucide-react";
// // // // // import Sidebar from "../components/Sidebar"; // Import the Sidebar component
// // // // // import RobotLogo from "../assets/session scribe logo (10) 1.png"; // Import the robot logo
// // // // // import { Link } from "react-router-dom";

// // // // // const HomePage = () => {
// // // // //   return (
// // // // //     <div className="flex bg-gray-50 min-h-screen">
// // // // //       {/* Sidebar would go here if needed */}
// // // // //       <div className="flex-1 overflow-auto">
// // // // //         <div className="p-4 md:p-8">
// // // // //           {/* Stats Cards */}
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
// // // // //             {/* Total Recordings */}
// // // // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // // // //               <div className="flex items-center justify-between mb-3 md:mb-4">
// // // // //                 <h3 className="text-gray-600 text-sm md:text-base font-medium">
// // // // //                   Total Recordings
// // // // //                 </h3>
// // // // //                 <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-bold">
// // // // //                   +REC
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
// // // // //                 100
// // // // //               </div>
// // // // //               <div className="flex items-center text-purple-600 text-xs md:text-sm">
// // // // //                 <Clock size={14} className="mr-1 md:mr-2" />
// // // // //                 <span>Waiting To start recording</span>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Total Usage */}
// // // // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // // // //               <div className="flex items-center justify-between mb-3 md:mb-4">
// // // // //                 <h3 className="text-gray-600 text-sm md:text-base font-medium">
// // // // //                   Total Usage
// // // // //                 </h3>
// // // // //                 <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
// // // // //                   <Clock size={16} className="text-orange-500" />
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
// // // // //                 00:03:36
// // // // //               </div>
// // // // //               <div className="flex items-center text-orange-600 text-xs md:text-sm">
// // // // //                 <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full mr-1 md:mr-2"></div>
// // // // //                 <span>Time since meeting started</span>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="flex items-center justify-center p-4 md:p-6">
// // // // //               <div className="  z-50 hidden sm:block">
// // // // //                 <img
// // // // //                   src={RobotLogo}
// // // // //                   alt="AI Assistant Robot"
// // // // //                   className="w-20 h-28 md:w-32 md:h-40 object-contain"
// // // // //                 />
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
// // // // //             {/* Recent Recordings */}
// // // // //             <div className="lg:col-span-2">
// // // // //               <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100">
// // // // //                 <div className="p-4 md:p-6 border-b border-gray-100">
// // // // //                   <div className="flex items-center justify-between">
// // // // //                     <h3 className="text-lg md:text-xl font-bold text-gray-900">
// // // // //                       Recent Recordings
// // // // //                     </h3>
// // // // //                     <div className="flex items-center space-x-1 md:space-x-2 text-gray-500 cursor-pointer">
// // // // //                       <span className="text-xs md:text-sm">October</span>
// // // // //                       <ChevronDown size={14} className="md:w-4 md:h-4" />
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <div className="overflow-x-auto">
// // // // //                   <table className="w-full min-w-[500px]">
// // // // //                     <thead className="bg-gray-50">
// // // // //                       <tr>
// // // // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                           Total Time
// // // // //                         </th>
// // // // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                           Start Time
// // // // //                         </th>
// // // // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                           End Time
// // // // //                         </th>
// // // // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // //                           Speaker
// // // // //                         </th>
// // // // //                       </tr>
// // // // //                     </thead>
// // // // //                     <tbody className="bg-white divide-y divide-gray-200">
// // // // //                       <tr>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           6 min
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           12:09 PM
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           12:15 PM
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           Sarah Johnson
// // // // //                         </td>
// // // // //                       </tr>
// // // // //                       <tr>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           6 min
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           12:09 PM
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           12:15 PM
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           Sarah Johnson
// // // // //                         </td>
// // // // //                       </tr>
// // // // //                       <tr>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           6 min
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           12:09 PM
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           12:15 PM
// // // // //                         </td>
// // // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // // //                           Sarah Johnson
// // // // //                         </td>
// // // // //                       </tr>
// // // // //                     </tbody>
// // // // //                   </table>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Important Notes */}
// // // // //             <div className="space-y-3 md:space-y-4">
// // // // //               <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // // // //                 <div className="flex items-center space-x-2 mb-3 md:mb-4">
// // // // //                   <MessageSquare
// // // // //                     size={16}
// // // // //                     className="text-gray-500 md:w-5 md:h-5"
// // // // //                   />
// // // // //                   <h3 className="text-base md:text-lg font-bold text-gray-700">
// // // // //                     Audio Notes
// // // // //                   </h3>
// // // // //                 </div>

// // // // //                 <Link to="/audio" className="space-y-3 md:space-y-4">
// // // // //                   <div>
// // // // //                     <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // // //                       1. Meeting Summary
// // // // //                     </h4>
// // // // //                     <p className="font-semibold">12/6/25</p>
// // // // //                     {/* <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-3 md:ml-4">
// // // // //                       <li>
// // // // //                         • Discussed current progress on the mobile app redesign
// // // // //                       </li>
// // // // //                       <li>• Identified key blockers in backend integration</li>
// // // // //                       <li>
// // // // //                         • Reviewed revised deadlines and next sprint goals
// // // // //                       </li>
// // // // //                     </ul> */}
// // // // //                   </div>

// // // // //                   {/* <div>
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
// // // // //                 </Link>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Floating Robot - Hidden on small screens */}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HomePage;

// // // // import React, { useState, useEffect } from "react";
// // // // import { Clock, ChevronDown, MessageSquare } from "lucide-react";
// // // // import axios from "axios";
// // // // import { Link } from "react-router-dom";
// // // // import RobotLogo from "../assets/session scribe logo (10) 1.png";

// // // // const HomePage = () => {
// // // //   const [meetingCount, setMeetingCount] = useState(0);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchMeetingCount = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         const response = await axios.get("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/meetingCount", {
// // // //           headers: {
// // // //             Authorization: token,
// // // //           },
// // // //         });
// // // //         setMeetingCount(response.data.meetingCount);
// // // //       } catch (err) {
// // // //         console.error("Error fetching meeting count:", err);
// // // //         setError(err.message || "Failed to fetch meeting count");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchMeetingCount();
// // // //   }, []);

// // // //   return (
// // // //     <div className="flex bg-gray-50 min-h-screen">
// // // //       <div className="flex-1 overflow-auto">
// // // //         <div className="p-4 md:p-8">
// // // //           {/* Stats Cards */}
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
// // // //             {/* Total Recordings */}
// // // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // // //               <div className="flex items-center justify-between mb-3 md:mb-4">
// // // //                 <h3 className="text-gray-600 text-sm md:text-base font-medium">
// // // //                   Total Recordings
// // // //                 </h3>
// // // //                 <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-bold">
// // // //                   +REC
// // // //                 </div>
// // // //               </div>
// // // //               {loading ? (
// // // //                 <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2 animate-pulse">
// // // //                   ...
// // // //                 </div>
// // // //               ) : error ? (
// // // //                 <div className="text-sm text-red-500">{error}</div>
// // // //               ) : (
// // // //                 <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
// // // //                   {meetingCount}
// // // //                 </div>
// // // //               )}
// // // //               <div className="flex items-center text-purple-600 text-xs md:text-sm">
// // // //                 <Clock size={14} className="mr-1 md:mr-2" />
// // // //                 <span>Waiting To start recording</span>
// // // //               </div>
// // // //             </div>

// // // //             {/* Total Usage */}
// // // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // // //               <div className="flex items-center justify-between mb-3 md:mb-4">
// // // //                 <h3 className="text-gray-600 text-sm md:text-base font-medium">
// // // //                   Total Usage
// // // //                 </h3>
// // // //                 <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
// // // //                   <Clock size={16} className="text-orange-500" />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
// // // //                 00:03:36
// // // //               </div>
// // // //               <div className="flex items-center text-orange-600 text-xs md:text-sm">
// // // //                 <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full mr-1 md:mr-2"></div>
// // // //                 <span>Time since meeting started</span>
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex items-center justify-center p-4 md:p-6">
// // // //               <div className="z-50 hidden sm:block">
// // // //                 <img
// // // //                   src={RobotLogo}
// // // //                   alt="AI Assistant Robot"
// // // //                   className="w-20 h-28 md:w-32 md:h-40 object-contain"
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
// // // //             {/* Recent Recordings */}
// // // //             <div className="lg:col-span-2">
// // // //               <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100">
// // // //                 <div className="p-4 md:p-6 border-b border-gray-100">
// // // //                   <div className="flex items-center justify-between">
// // // //                     <h3 className="text-lg md:text-xl font-bold text-gray-900">
// // // //                       Recent Recordings
// // // //                     </h3>
// // // //                     <div className="flex items-center space-x-1 md:space-x-2 text-gray-500 cursor-pointer">
// // // //                       <span className="text-xs md:text-sm">October</span>
// // // //                       <ChevronDown size={14} className="md:w-4 md:h-4" />
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="overflow-x-auto">
// // // //                   <table className="w-full min-w-[500px]">
// // // //                     <thead className="bg-gray-50">
// // // //                       <tr>
// // // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                           Total Time
// // // //                         </th>
// // // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                           Start Time
// // // //                         </th>
// // // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                           End Time
// // // //                         </th>
// // // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //                           Speaker
// // // //                         </th>
// // // //                       </tr>
// // // //                     </thead>
// // // //                     <tbody className="bg-white divide-y divide-gray-200">
// // // //                       <tr>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           6 min
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           12:09 PM
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           12:15 PM
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           Sarah Johnson
// // // //                         </td>
// // // //                       </tr>
// // // //                       <tr>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           6 min
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           12:09 PM
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           12:15 PM
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           Sarah Johnson
// // // //                         </td>
// // // //                       </tr>
// // // //                       <tr>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           6 min
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           12:09 PM
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           12:15 PM
// // // //                         </td>
// // // //                         <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // // //                           Sarah Johnson
// // // //                         </td>
// // // //                       </tr>
// // // //                     </tbody>
// // // //                   </table>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="space-y-3 md:space-y-4">
// // // //               <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // // //                 <div className="flex items-center space-x-2 mb-3 md:mb-4">
// // // //                   <MessageSquare
// // // //                     size={16}
// // // //                     className="text-gray-500 md:w-5 md:h-5"
// // // //                   />
// // // //                   <h3 className="text-base md:text-lg font-bold text-gray-700">
// // // //                     Audio Notes
// // // //                   </h3>
// // // //                 </div>
// // // //                 <Link to="/audio" className="space-y-3 md:space-y-4">
// // // //                   <div>
// // // //                     <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // // //                       1. Meeting Summary
// // // //                     </h4>
// // // //                     <p className="font-semibold">12/6/25</p>
// // // //                   </div>
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;

// // // import React, { useState, useEffect } from "react";
// // // import { Clock, ChevronDown, MessageSquare } from "lucide-react";
// // // import axios from "axios";
// // // import { Link } from "react-router-dom";
// // // import RobotLogo from "../assets/session scribe logo (10) 1.png";

// // // const HomePage = () => {
// // //   const [meetingCount, setMeetingCount] = useState(0);
// // //   const [recentMeetings, setRecentMeetings] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [meetingsLoading, setMeetingsLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [meetingsError, setMeetingsError] = useState(null);
// // //   const [totalUsage, setTotalUsage] = useState(0);
// // //   const [usageLoading, setUsageLoading] = useState(true);
// // //   const [usageError, setUsageError] = useState(null);

// // //   // Function to format recording length (assuming it's in seconds)
// // //   // const formatDuration = (seconds) => {
// // //   //   if (!seconds) return "0 min";
// // //   //   const minutes = Math.floor(seconds / 60);
// // //   //   const remainingSeconds = seconds % 60;
// // //   //   if (minutes > 0) {
// // //   //     return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes} min`;
// // //   //   }
// // //   //   return `${remainingSeconds}s`;
// // //   // };

// // //   // Function to format recording length (assuming it's in seconds)
// // //   const formatDuration = (seconds) => {
// // //     if (!seconds) return "00:00:00";
// // //     const hours = Math.floor(seconds / 3600);
// // //     const minutes = Math.floor((seconds % 3600) / 60);
// // //     const remainingSeconds = seconds % 60;

// // //     // For total usage, show HH:MM:SS format
// // //     if (hours > 0) {
// // //       return `${hours.toString().padStart(2, "0")}:${minutes
// // //         .toString()
// // //         .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
// // //     }
// // //     return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
// // //       .toString()
// // //       .padStart(2, "0")}`;
// // //   };

// // //   const fetchTotalUsage = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const response = await axios.get(
// // //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/totalUsage",
// // //         {
// // //           headers: {
// // //             Authorization: token,
// // //           },
// // //         }
// // //       );
// // //       setTotalUsage(response.data.totalSecondsUsed);
// // //     } catch (err) {
// // //       console.error("Error fetching total usage:", err);
// // //       setUsageError(err.message || "Failed to fetch total usage");
// // //     } finally {
// // //       setUsageLoading(false);
// // //     }
// // //   };

// // //   // Function to format recording type for display
// // //   const formatRecordingType = (type) => {
// // //     switch (type) {
// // //       case "recording":
// // //         return "Recording";
// // //       case "live-transcription":
// // //         return "Live Transcription";
// // //       case "audio-notes":
// // //         return "Audio Notes";
// // //       default:
// // //         return "Recording";
// // //     }
// // //   };

// // //   // Function to get display name (first participant or "Unknown")
// // //   const getDisplayName = (participants) => {
// // //     if (participants && participants.length > 0) {
// // //       return participants[0];
// // //     }
// // //     return "Unknown";
// // //   };

// // //   useEffect(() => {
// // //     const fetchMeetingCount = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const response = await axios.get(
// // //           "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/meetingCount",
// // //           {
// // //             headers: {
// // //               Authorization: token,
// // //             },
// // //           }
// // //         );
// // //         setMeetingCount(response.data.meetingCount);
// // //       } catch (err) {
// // //         console.error("Error fetching meeting count:", err);
// // //         setError(err.message || "Failed to fetch meeting count");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     const fetchRecentMeetings = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const response = await axios.get(
// // //           "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/lasttenmeetings",
// // //           {
// // //             headers: {
// // //               Authorization: token,
// // //             },
// // //           }
// // //         );
// // //         setRecentMeetings(response.data);
// // //       } catch (err) {
// // //         console.error("Error fetching recent meetings:", err);
// // //         setMeetingsError(err.message || "Failed to fetch recent meetings");
// // //       } finally {
// // //         setMeetingsLoading(false);
// // //       }
// // //     };

// // //     fetchMeetingCount();
// // //     fetchRecentMeetings();
// // //     fetchTotalUsage();
// // //   }, []);

// // //   return (
// // //     <div className="flex bg-gray-50 min-h-screen">
// // //       <div className="flex-1 overflow-auto">
// // //         <div className="p-4 md:p-8">
// // //           {/* Stats Cards */}
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
// // //             {/* Total Recordings */}
// // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // //               <div className="flex items-center justify-between mb-3 md:mb-4">
// // //                 <h3 className="text-gray-600 text-sm md:text-base font-medium">
// // //                   Total Recordings
// // //                 </h3>
// // //                 <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-bold">
// // //                   +REC
// // //                 </div>
// // //               </div>
// // //               {loading ? (
// // //                 <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2 animate-pulse">
// // //                   ...
// // //                 </div>
// // //               ) : error ? (
// // //                 <div className="text-sm text-red-500">{error}</div>
// // //               ) : (
// // //                 <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
// // //                   {meetingCount}
// // //                 </div>
// // //               )}
// // //               <div className="flex items-center text-purple-600 text-xs md:text-sm">
// // //                 <Clock size={14} className="mr-1 md:mr-2" />
// // //                 <span>Waiting To start recording</span>
// // //               </div>
// // //             </div>

// // //             {/* Total Usage */}
// // //             {/* Total Usage */}
// // //             <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // //               <div className="flex items-center justify-between mb-3 md:mb-4">
// // //                 <h3 className="text-gray-600 text-sm md:text-base font-medium">
// // //                   Total Usage
// // //                 </h3>
// // //                 <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
// // //                   <Clock size={16} className="text-orange-500" />
// // //                 </div>
// // //               </div>
// // //               {usageLoading ? (
// // //                 <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2 animate-pulse">
// // //                   ...
// // //                 </div>
// // //               ) : usageError ? (
// // //                 <div className="text-sm text-red-500">{usageError}</div>
// // //               ) : (
// // //                 <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
// // //                   {formatDuration(totalUsage)}
// // //                 </div>
// // //               )}
// // //               <div className="flex items-center text-orange-600 text-xs md:text-sm">
// // //                 <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full mr-1 md:mr-2"></div>
// // //                 <span>Total recording time</span>
// // //               </div>
// // //             </div>
// // //             <div className="flex items-center justify-center p-4 md:p-6">
// // //               <div className="z-50 hidden sm:block">
// // //                 <img
// // //                   src={RobotLogo}
// // //                   alt="AI Assistant Robot"
// // //                   className="w-20 h-28 md:w-32 md:h-40 object-contain"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
// // //             {/* Recent Recordings */}
// // //             <div className="lg:col-span-2">
// // //               <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100">
// // //                 <div className="p-4 md:p-6 border-b border-gray-100">
// // //                   <div className="flex items-center justify-between">
// // //                     <h3 className="text-lg md:text-xl font-bold text-gray-900">
// // //                       Recent Recordings
// // //                     </h3>
// // //                     <div className="flex items-center space-x-1 md:space-x-2 text-gray-500 cursor-pointer">
// // //                       <span className="text-xs md:text-sm">Recent</span>
// // //                       <ChevronDown size={14} className="md:w-4 md:h-4" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="overflow-x-auto">
// // //                   <table className="w-full min-w-[600px]">
// // //                     <thead className="bg-gray-50">
// // //                       <tr>
// // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                           Title
// // //                         </th>
// // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                           Duration
// // //                         </th>
// // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                           Participants
// // //                         </th>
// // //                         <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                           Recording Type
// // //                         </th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody className="bg-white divide-y divide-gray-200">
// // //                       {meetingsLoading ? (
// // //                         <tr>
// // //                           <td
// // //                             colSpan="4"
// // //                             className="px-4 py-8 text-center text-gray-500"
// // //                           >
// // //                             <div className="animate-pulse">
// // //                               Loading recent meetings...
// // //                             </div>
// // //                           </td>
// // //                         </tr>
// // //                       ) : meetingsError ? (
// // //                         <tr>
// // //                           <td
// // //                             colSpan="4"
// // //                             className="px-4 py-8 text-center text-red-500"
// // //                           >
// // //                             {meetingsError}
// // //                           </td>
// // //                         </tr>
// // //                       ) : recentMeetings.length === 0 ? (
// // //                         <tr>
// // //                           <td
// // //                             colSpan="4"
// // //                             className="px-4 py-8 text-center text-gray-500"
// // //                           >
// // //                             No meetings found. Start your first recording!
// // //                           </td>
// // //                         </tr>
// // //                       ) : (
// // //                         recentMeetings.map((meeting) => (
// // //                           <tr key={meeting._id} className="hover:bg-gray-50">
// // //                             <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // //                               {meeting.title.slice(0, 15) + ' ...' || "Untitled"}
// // //                             </td>
// // //                             <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // //                               {formatDuration(meeting.recordingLength)}
// // //                             </td>
// // //                             <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // //                               {meeting.participants
// // //                                 ? meeting.participants.length
// // //                                 : 0}{" "}
// // //                               participants
// // //                             </td>
// // //                             <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
// // //                               <span
// // //                                 className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
// // //                                   meeting.type === "recording"
// // //                                     ? "bg-blue-100 text-blue-800"
// // //                                     : meeting.type === "live-transcription"
// // //                                     ? "bg-green-100 text-green-800"
// // //                                     : "bg-purple-100 text-purple-800"
// // //                                 }`}
// // //                               >
// // //                                 {formatRecordingType(meeting.type)}
// // //                               </span>
// // //                             </td>
// // //                           </tr>
// // //                         ))
// // //                       )}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="space-y-3 md:space-y-4">
// // //               <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
// // //                 <div className="flex items-center space-x-2 mb-3 md:mb-4">
// // //                   <MessageSquare
// // //                     size={16}
// // //                     className="text-gray-500 md:w-5 md:h-5"
// // //                   />
// // //                   <h3 className="text-base md:text-lg font-bold text-gray-700">
// // //                     Audio Notes
// // //                   </h3>
// // //                 </div>
// // //                 <Link to="/audio" className="space-y-3 md:space-y-4">
// // //                   <div>
// // //                     <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2">
// // //                       1. Meeting Summary
// // //                     </h4>
// // //                     <p className="font-semibold">12/6/25</p>
// // //                   </div>
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HomePage;

// // import React, { useState, useEffect } from "react";
// // import { Clock, ChevronDown, MessageSquare, TrendingUp, PlayCircle, Users, Calendar } from "lucide-react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import RobotLogo from "../assets/session scribe logo (10) 1.png";

// // const HomePage = () => {
// //   const [meetingCount, setMeetingCount] = useState(0);
// //   const [recentMeetings, setRecentMeetings] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [meetingsLoading, setMeetingsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [meetingsError, setMeetingsError] = useState(null);
// //   const [totalUsage, setTotalUsage] = useState(0);
// //   const [usageLoading, setUsageLoading] = useState(true);
// //   const [usageError, setUsageError] = useState(null);

// //   // Function to format recording length (assuming it's in seconds)
// //   const formatDuration = (seconds) => {
// //     if (!seconds) return "00:00";
// //     const hours = Math.floor(seconds / 3600);
// //     const minutes = Math.floor((seconds % 3600) / 60);
// //     const remainingSeconds = seconds % 60;

// //     // For dashboard, show MM:SS for under an hour, HH:MM:SS for over an hour
// //     if (hours > 0) {
// //       return `${hours.toString().padStart(2, "0")}:${minutes
// //         .toString()
// //         .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
// //     }
// //     return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
// //       .toString()
// //       .padStart(2, "0")}`;
// //   };

// //   const fetchTotalUsage = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const response = await axios.get(
// //         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/totalUsage",
// //         {
// //           headers: {
// //             Authorization: token,
// //           },
// //         }
// //       );
// //       setTotalUsage(response.data.totalSecondsUsed);
// //     } catch (err) {
// //       console.error("Error fetching total usage:", err);
// //       setUsageError(err.message || "Failed to fetch total usage");
// //     } finally {
// //       setUsageLoading(false);
// //     }
// //   };

// //   // Function to format recording type for display
// //   const formatRecordingType = (type) => {
// //     switch (type) {
// //       case "recording":
// //         return "Recording";
// //       case "live-transcription":
// //         return "Live Transcription";
// //       case "audio-notes":
// //         return "Audio Notes";
// //       default:
// //         return "Recording";
// //     }
// //   };

// //   // Calculate usage percentage out of 100 minutes (6000 seconds)
// //   const getUsagePercentage = () => {
// //     const maxSeconds = 6000; // 100 minutes
// //     return Math.min((totalUsage / maxSeconds) * 100, 100);
// //   };

// //   // Get remaining time
// //   const getRemainingTime = () => {
// //     const maxSeconds = 6000; // 100 minutes
// //     const remaining = Math.max(maxSeconds - totalUsage, 0);
// //     return formatDuration(remaining);
// //   };

// //   useEffect(() => {
// //     const fetchMeetingCount = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const response = await axios.get(
// //           "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/meetingCount",
// //           {
// //             headers: {
// //               Authorization: token,
// //             },
// //           }
// //         );
// //         setMeetingCount(response.data.meetingCount);
// //       } catch (err) {
// //         console.error("Error fetching meeting count:", err);
// //         setError(err.message || "Failed to fetch meeting count");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     const fetchRecentMeetings = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const response = await axios.get(
// //           "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/lasttenmeetings",
// //           {
// //             headers: {
// //               Authorization: token,
// //             },
// //           }
// //         );
// //         setRecentMeetings(response.data);
// //       } catch (err) {
// //         console.error("Error fetching recent meetings:", err);
// //         setMeetingsError(err.message || "Failed to fetch recent meetings");
// //       } finally {
// //         setMeetingsLoading(false);
// //       }
// //     };

// //     fetchMeetingCount();
// //     fetchRecentMeetings();
// //     fetchTotalUsage();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
// //       <div className="p-6 lg:p-8 max-w-7xl mx-auto">
// //         {/* Welcome Header */}
// //         {/* <div className="mb-8">
// //           <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
// //             Welcome back! 👋
// //           </h1>
// //           <p className="text-gray-600 text-lg">
// //             Here's what's happening with your recordings today.
// //           </p>
// //         </div> */}

// //         {/* Stats Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// //           {/* Total Recordings Card */}
// //           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
// //             <div className="flex items-center justify-between mb-4">
// //               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
// //                 <PlayCircle className="w-6 h-6 text-purple-600" />
// //               </div>
// //               <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
// //                 +REC
// //               </div>
// //             </div>
// //             <div className="space-y-1">
// //               <h3 className="text-gray-600 text-sm font-medium">Total Recordings</h3>
// //               {loading ? (
// //                 <div className="text-3xl font-bold text-gray-900 animate-pulse">...</div>
// //               ) : error ? (
// //                 <div className="text-sm text-red-500">{error}</div>
// //               ) : (
// //                 <div className="text-3xl font-bold text-gray-900">{meetingCount}</div>
// //               )}
// //               <div className="flex items-center text-purple-600 text-sm">
// //                 <TrendingUp className="w-4 h-4 mr-2" />
// //                 <span>Ready to record</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Total Usage Card */}
// //           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
// //             <div className="flex items-center justify-between mb-4">
// //               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
// //                 <Clock className="w-6 h-6 text-orange-600" />
// //               </div>
// //               <div className="text-sm text-gray-500">
// //                 {getUsagePercentage().toFixed(0)}% used
// //               </div>
// //             </div>
// //             <div className="space-y-3">
// //               <h3 className="text-gray-600 text-sm font-medium">Total Usage</h3>
// //               {usageLoading ? (
// //                 <div className="text-3xl font-bold text-gray-900 animate-pulse">...</div>
// //               ) : usageError ? (
// //                 <div className="text-sm text-red-500">{usageError}</div>
// //               ) : (
// //                 <div className="text-3xl font-bold text-gray-900">{formatDuration(totalUsage)}</div>
// //               )}

// //               {/* Usage Progress Bar */}
// //               <div className="space-y-2">
// //                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                   <div
// //                     className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-300"
// //                     style={{ width: `${getUsagePercentage()}%` }}
// //                   ></div>
// //                 </div>
// //                 <div className="flex justify-between text-xs text-gray-500">
// //                   <span>Used: {formatDuration(totalUsage)}</span>
// //                   <span>Remaining: {getRemainingTime()}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* AI Assistant Card */}
// //           <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-md transition-shadow">
// //             <div className="flex items-center justify-between h-full">
// //               <div className="space-y-3">
// //                 <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center">
// //                   <span className="text-2xl">🤖</span>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-purple-900 font-semibold text-lg">AI Assistant</h3>
// //                   <p className="text-purple-700 text-sm">Ready to help you transcribe</p>
// //                 </div>
// //                 <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
// //                   Start Recording
// //                 </button>
// //               </div>
// //               <div className="hidden sm:block">
// //                 <img
// //                   src={RobotLogo}
// //                   alt="AI Assistant Robot"
// //                   className="w-20 h-28 object-contain opacity-80"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
// //           {/* Recent Recordings - Takes 3 columns */}
// //           <div className="lg:col-span-3">
// //             <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
// //               {/* Header */}
// //               <div className="p-6 border-b border-gray-100">
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center space-x-3">
// //                     <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
// //                       <Calendar className="w-4 h-4 text-gray-600" />
// //                     </div>
// //                     <h3 className="text-xl font-bold text-gray-900">Recent Recordings</h3>
// //                   </div>
// //                   <div className="flex items-center space-x-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
// //                     <span className="text-sm">View all</span>
// //                     <ChevronDown className="w-4 h-4" />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Table */}
// //               <div className="overflow-x-auto">
// //                 <table className="w-full">
// //                   <thead>
// //                     <tr className="bg-gray-50">
// //                       <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                         Title
// //                       </th>
// //                       <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                         Duration
// //                       </th>
// //                       <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                         Participants
// //                       </th>
// //                       <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                         Recording Type
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="bg-white divide-y divide-gray-100">
// //                     {meetingsLoading ? (
// //                       <tr>
// //                         <td colSpan="4" className="px-6 py-12 text-center">
// //                           <div className="flex flex-col items-center space-y-3">
// //                             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
// //                             <span className="text-gray-500">Loading recent meetings...</span>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     ) : meetingsError ? (
// //                       <tr>
// //                         <td colSpan="4" className="px-6 py-12 text-center text-red-500">
// //                           {meetingsError}
// //                         </td>
// //                       </tr>
// //                     ) : recentMeetings.length === 0 ? (
// //                       <tr>
// //                         <td colSpan="4" className="px-6 py-12 text-center">
// //                           <div className="flex flex-col items-center space-y-3">
// //                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
// //                               <PlayCircle className="w-8 h-8 text-gray-400" />
// //                             </div>
// //                             <div className="space-y-1">
// //                               <p className="text-gray-900 font-medium">No recordings yet</p>
// //                               <p className="text-gray-500 text-sm">Start your first recording to see it here</p>
// //                             </div>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     ) : (
// //                       recentMeetings.map((meeting, index) => (
// //                         <tr key={meeting._id} className="hover:bg-gray-50 transition-colors">
// //                           <td className="px-6 py-4">
// //                             <div className="flex items-center space-x-3">
// //                               <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
// //                               <span className="text-sm font-medium text-gray-900 truncate max-w-xs">
// //                                 {meeting.title || "Untitled"}
// //                               </span>
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4">
// //                             <span className="text-sm text-gray-900 font-mono">
// //                               {formatDuration(meeting.recordingLength)}
// //                             </span>
// //                           </td>
// //                           <td className="px-6 py-4">
// //                             <div className="flex items-center space-x-2">
// //                               <Users className="w-4 h-4 text-gray-400" />
// //                               <span className="text-sm text-gray-900">
// //                                 {meeting.participants ? meeting.participants.length : 0}
// //                               </span>
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4">
// //                             <span
// //                               className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
// //                                 meeting.type === "recording"
// //                                   ? "bg-blue-100 text-blue-800"
// //                                   : meeting.type === "live-transcription"
// //                                   ? "bg-green-100 text-green-800"
// //                                   : "bg-purple-100 text-purple-800"
// //                               }`}
// //                             >
// //                               {formatRecordingType(meeting.type)}
// //                             </span>
// //                           </td>
// //                         </tr>
// //                       ))
// //                     )}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Audio Notes Sidebar - Takes 1 column */}
// //           <div className="lg:col-span-1">
// //             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit">
// //               <div className="flex items-center space-x-3 mb-6">
// //                 <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
// //                   <MessageSquare className="w-4 h-4 text-purple-600" />
// //                 </div>
// //                 <h3 className="text-lg font-bold text-gray-900">Audio Notes</h3>
// //               </div>

// //               <Link
// //                 to="/audio"
// //                 className="block p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200 border border-purple-200"
// //               >
// //                 <div className="space-y-3">
// //                   <div className="flex items-center justify-between">
// //                     <span className="text-purple-700 text-sm font-medium">Latest Session</span>
// //                     <span className="text-xs text-purple-600 bg-purple-200 px-2 py-1 rounded-full">New</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-semibold text-gray-900 mb-1">Meeting Summary</h4>
// //                     <p className="text-gray-600 text-sm">December 6, 2025</p>
// //                   </div>
// //                   <div className="flex items-center text-purple-600 text-sm">
// //                     <Clock className="w-4 h-4 mr-2" />
// //                     <span>2 minutes ago</span>
// //                   </div>
// //                 </div>
// //               </Link>

// //               <div className="mt-4 pt-4 border-t border-gray-100">
// //                 <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
// //                   <MessageSquare className="w-4 h-4" />
// //                   <span>Create Audio Note</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;

// import React, { useState, useEffect } from "react";
// import { Clock, ChevronDown, MessageSquare, TrendingUp, PlayCircle, Users, Calendar } from "lucide-react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import RobotLogo from "../assets/session scribe logo (10) 1.png";

// const HomePage = () => {
//   const [meetingCount, setMeetingCount] = useState(0);
//   const [recentMeetings, setRecentMeetings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [meetingsLoading, setMeetingsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [meetingsError, setMeetingsError] = useState(null);
//   const [totalUsage, setTotalUsage] = useState(0);
//   const [usageLoading, setUsageLoading] = useState(true);
//   const [usageError, setUsageError] = useState(null);

//   // Function to format recording length (assuming it's in seconds)
//   const formatDuration = (seconds) => {
//     if (!seconds) return "00:00";
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;

//     // For dashboard, show MM:SS for under an hour, HH:MM:SS for over an hour
//     if (hours > 0) {
//       return `${hours.toString().padStart(2, "0")}:${minutes
//         .toString()
//         .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
//     }
//     return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const fetchTotalUsage = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/totalUsage",
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setTotalUsage(response.data.totalSecondsUsed);
//     } catch (err) {
//       console.error("Error fetching total usage:", err);
//       setUsageError(err.message || "Failed to fetch total usage");
//     } finally {
//       setUsageLoading(false);
//     }
//   };

//   // Function to format recording type for display
//   const formatRecordingType = (type) => {
//     switch (type) {
//       case "recording":
//         return "Recording";
//       case "live-transcription":
//         return "Live Transcription";
//       case "audio-notes":
//         return "Audio Notes";
//       default:
//         return "Recording";
//     }
//   };

//   // Calculate usage percentage out of 100 minutes (6000 seconds)
//   const getUsagePercentage = () => {
//     const maxSeconds = 6000; // 100 minutes
//     return Math.min((totalUsage / maxSeconds) * 100, 100);
//   };

//   // Get remaining time
//   const getRemainingTime = () => {
//     const maxSeconds = 6000; // 100 minutes
//     const remaining = Math.max(maxSeconds - totalUsage, 0);
//     return formatDuration(remaining);
//   };

//   useEffect(() => {
//     const fetchMeetingCount = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/meetingCount",
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         setMeetingCount(response.data.meetingCount);
//       } catch (err) {
//         console.error("Error fetching meeting count:", err);
//         setError(err.message || "Failed to fetch meeting count");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchRecentMeetings = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/lasttenmeetings",
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         setRecentMeetings(response.data);
//       } catch (err) {
//         console.error("Error fetching recent meetings:", err);
//         setMeetingsError(err.message || "Failed to fetch recent meetings");
//       } finally {
//         setMeetingsLoading(false);
//       }
//     };

//     fetchMeetingCount();
//     fetchRecentMeetings();
//     fetchTotalUsage();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="p-6 lg:p-8 max-w-7xl mx-auto">
//         {/* Welcome Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
//             Welcome back! 👋
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Here's what's happening with your recordings today.
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {/* Total Recordings Card */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                 <PlayCircle className="w-6 h-6 text-purple-600" />
//               </div>
//               <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
//                 +REC
//               </div>
//             </div>
//             <div className="space-y-1">
//               <h3 className="text-gray-600 text-sm font-medium">Total Recordings</h3>
//               {loading ? (
//                 <div className="text-3xl font-bold text-gray-900 animate-pulse">...</div>
//               ) : error ? (
//                 <div className="text-sm text-red-500">{error}</div>
//               ) : (
//                 <div className="text-3xl font-bold text-gray-900">{meetingCount}</div>
//               )}
//               <div className="flex items-center text-purple-600 text-sm">
//                 <TrendingUp className="w-4 h-4 mr-2" />
//                 <span>Ready to record</span>
//               </div>
//             </div>
//           </div>

//           {/* Total Usage Card */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                 <Clock className="w-6 h-6 text-orange-600" />
//               </div>
//               <div className="text-sm text-gray-500">
//                 {getUsagePercentage().toFixed(0)}% used
//               </div>
//             </div>
//             <div className="space-y-3">
//               <h3 className="text-gray-600 text-sm font-medium">Total Usage</h3>
//               {usageLoading ? (
//                 <div className="text-3xl font-bold text-gray-900 animate-pulse">...</div>
//               ) : usageError ? (
//                 <div className="text-sm text-red-500">{usageError}</div>
//               ) : (
//                 <div className="text-3xl font-bold text-gray-900">{formatDuration(totalUsage)}</div>
//               )}

//               {/* Usage Progress Bar */}
//               <div className="space-y-2">
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-300"
//                     style={{ width: `${getUsagePercentage()}%` }}
//                   ></div>
//                 </div>
//                 <div className="flex justify-between text-xs text-gray-500">
//                   <span>Used: {formatDuration(totalUsage)}</span>
//                   <span>Remaining: {getRemainingTime()}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* AI Assistant Card */}
//           <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between h-full">
//               <div className="space-y-3">
//                 <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center">
//                   <span className="text-2xl">🤖</span>
//                 </div>
//                 <div>
//                   <h3 className="text-purple-900 font-semibold text-lg">AI Assistant</h3>
//                   <p className="text-purple-700 text-sm">Ready to help you transcribe</p>
//                 </div>
//                 <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
//                   Start Recording
//                 </button>
//               </div>
//               <div className="hidden sm:block">
//                 <img
//                   src={RobotLogo}
//                   alt="AI Assistant Robot"
//                   className="w-20 h-28 object-contain opacity-80"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           {/* Recent Recordings - Takes 3 columns */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
//               {/* Header */}
//               <div className="p-6 border-b border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
//                       <Calendar className="w-4 h-4 text-gray-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900">Recent Recordings</h3>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
//                     <span className="text-sm">View all</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Table */}
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                         Title
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                         Duration
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                         Participants
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                         Recording Type
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-100">
//                     {meetingsLoading ? (
//                       <tr>
//                         <td colSpan="4" className="px-6 py-12 text-center">
//                           <div className="flex flex-col items-center space-y-3">
//                             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
//                             <span className="text-gray-500">Loading recent meetings...</span>
//                           </div>
//                         </td>
//                       </tr>
//                     ) : meetingsError ? (
//                       <tr>
//                         <td colSpan="4" className="px-6 py-12 text-center text-red-500">
//                           {meetingsError}
//                         </td>
//                       </tr>
//                     ) : recentMeetings.length === 0 ? (
//                       <tr>
//                         <td colSpan="4" className="px-6 py-12 text-center">
//                           <div className="flex flex-col items-center space-y-3">
//                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
//                               <PlayCircle className="w-8 h-8 text-gray-400" />
//                             </div>
//                             <div className="space-y-1">
//                               <p className="text-gray-900 font-medium">No recordings yet</p>
//                               <p className="text-gray-500 text-sm">Start your first recording to see it here</p>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     ) : (
//                       recentMeetings.map((meeting, index) => (
//                         <tr key={meeting._id} className="hover:bg-gray-50 transition-colors">
//                           <td className="px-6 py-4">
//                             <div className="flex items-center space-x-3">
//                               <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
//                               <span className="text-sm font-medium text-gray-900 truncate max-w-xs">
//                                 {meeting.title || "Untitled"}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4">
//                             <span className="text-sm text-gray-900 font-mono">
//                               {formatDuration(meeting.recordingLength)}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4">
//                             <div className="flex items-center space-x-2">
//                               <Users className="w-4 h-4 text-gray-400" />
//                               <span className="text-sm text-gray-900">
//                                 {meeting.participants ? meeting.participants.length : 0}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4">
//                             <span
//                               className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
//                                 meeting.type === "recording"
//                                   ? "bg-blue-100 text-blue-800"
//                                   : meeting.type === "live-transcription"
//                                   ? "bg-green-100 text-green-800"
//                                   : "bg-purple-100 text-purple-800"
//                               }`}
//                             >
//                               {formatRecordingType(meeting.type)}
//                             </span>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Dynamic Latest Session Sidebar - Takes 1 column */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit">
//               {(() => {
//                 // Get the latest meeting (first in the array since it's sorted by most recent)
//                 const latestMeeting = recentMeetings.length > 0 ? recentMeetings[0] : null;

//                 // Define card configurations based on meeting type
//                 const getCardConfig = (type) => {
//                   switch (type) {
//                     case "audio-notes":
//                       return {
//                         title: "Audio Notes",
//                         icon: MessageSquare,
//                         iconColor: "text-purple-600",
//                         iconBg: "bg-purple-100",
//                         gradientFrom: "from-purple-50",
//                         gradientTo: "to-purple-100",
//                         hoverFrom: "hover:from-purple-100",
//                         hoverTo: "hover:to-purple-200",
//                         borderColor: "border-purple-200",
//                         textColor: "text-purple-700",
//                         badgeColor: "bg-purple-200 text-purple-600",
//                         buttonColor: "bg-purple-600 hover:bg-purple-700",
//                         actionText: "Create Audio Note",
//                         link: "/audionotes"
//                       };
//                     case "live-transcription":
//                       return {
//                         title: "Live Transcription",
//                         icon: Users,
//                         iconColor: "text-green-600",
//                         iconBg: "bg-green-100",
//                         gradientFrom: "from-green-50",
//                         gradientTo: "to-green-100",
//                         hoverFrom: "hover:from-green-100",
//                         hoverTo: "hover:to-green-200",
//                         borderColor: "border-green-200",
//                         textColor: "text-green-700",
//                         badgeColor: "bg-green-200 text-green-600",
//                         buttonColor: "bg-green-600 hover:bg-green-700",
//                         actionText: "Start Live Session",
//                         link: "/live-transcription"
//                       };
//                     case "recording":
//                     default:
//                       return {
//                         title: "Meeting Recording",
//                         icon: PlayCircle,
//                         iconColor: "text-blue-600",
//                         iconBg: "bg-blue-100",
//                         gradientFrom: "from-blue-50",
//                         gradientTo: "to-blue-100",
//                         hoverFrom: "hover:from-blue-100",
//                         hoverTo: "hover:to-blue-200",
//                         borderColor: "border-blue-200",
//                         textColor: "text-blue-700",
//                         badgeColor: "bg-blue-200 text-blue-600",
//                         buttonColor: "bg-blue-600 hover:bg-blue-700",
//                         actionText: "Start Recording",
//                         link: "/emails"
//                       };
//                   }
//                 };

//                 const config = getCardConfig(latestMeeting?.type);
//                 const IconComponent = config.icon;

//                 // Format the date of the latest meeting
//                 const formatRelativeTime = (dateString) => {
//                   const now = new Date();
//                   const date = new Date(dateString);
//                   const diffInSeconds = Math.floor((now - date) / 1000);

//                   if (diffInSeconds < 60) return 'just now';
//                   if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
//                   if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
//                   if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

//                   return date.toLocaleDateString();
//                 };

//                 return (
//                   <>
//                     <div className="flex items-center space-x-3 mb-6">
//                       <div className={`w-8 h-8 ${config.iconBg} rounded-lg flex items-center justify-center`}>
//                         <IconComponent className={`w-4 h-4 ${config.iconColor}`} />
//                       </div>
//                       <h3 className="text-lg font-bold text-gray-900">{config.title}</h3>
//                     </div>

//                     {latestMeeting ? (
//                       <Link
//                         to={config.link}
//                         className={`block p-4 bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} rounded-xl ${config.hoverFrom} ${config.hoverTo} transition-all duration-200 border ${config.borderColor}`}
//                       >
//                         <div className="space-y-3">
//                           <div className="flex items-center justify-between">
//                             <span className={`${config.textColor} text-sm font-medium`}>Latest Session</span>
//                             <span className={`text-xs ${config.badgeColor} px-2 py-1 rounded-full`}>
//                               {formatRecordingType(latestMeeting.type)}
//                             </span>
//                           </div>
//                           <div>
//                             <h4 className="font-semibold text-gray-900 mb-1 truncate">
//                               {latestMeeting.title || "Untitled Session"}
//                             </h4>
//                             <p className="text-gray-600 text-sm">
//                               Duration: {formatDuration(latestMeeting.recordingLength)}
//                             </p>
//                           </div>
//                           <div className={`flex items-center ${config.textColor} text-sm`}>
//                             <Clock className="w-4 h-4 mr-2" />
//                             <span>{formatRelativeTime(latestMeeting.createdAt)}</span>
//                           </div>
//                         </div>
//                       </Link>
//                     ) : loading ? <div>
//                       <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
//                         <div className="flex items-center justify-center space-x-2">
//                           <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
//                           <div className="space-y-2">
//                             <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
//                             <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div> : (
//                       <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
//                         <div className="text-center space-y-2">
//                           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
//                             <IconComponent className="w-6 h-6 text-gray-400" />
//                           </div>
//                           <p className="text-gray-500 text-sm">No sessions yet</p>
//                           <p className="text-gray-400 text-xs">Your latest session will appear here</p>
//                         </div>
//                       </div>
//                     )}

//                     <div className="mt-4 pt-4 border-t border-gray-100">
//                       <Link
//                         to={config.link}
//                         className={`w-full ${config.buttonColor} text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2`}
//                       >
//                         <IconComponent className="w-4 h-4" />
//                         <span>{config.actionText}</span>
//                       </Link>
//                     </div>
//                   </>
//                 );
//               })()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from "react";
import {
  Clock,
  ChevronDown,
  MessageSquare,
  TrendingUp,
  PlayCircle,
  Users,
  Calendar,
  Bell,
  CheckCircle,
  X,
  AlertTriangle,
} from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import RobotLogo from "../assets/session scribe logo (10) 1.png";
import { motion } from "framer-motion";

const HomePage = () => {
  const [meetingCount, setMeetingCount] = useState(0);
  const [recentMeetings, setRecentMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meetingsLoading, setMeetingsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meetingsError, setMeetingsError] = useState(null);
  const [totalUsage, setTotalUsage] = useState(0);
  const [usageLoading, setUsageLoading] = useState(true);
  const [usageError, setUsageError] = useState(null);

  // NEW: Meeting reminders state
  const [meetingReminders, setMeetingReminders] = useState([]);
  const [remindersLoading, setRemindersLoading] = useState(true);
  const [dismissedReminders, setDismissedReminders] = useState(new Set());

  const navigate = useNavigate();

  // Function to format recording length (assuming it's in seconds)
  const formatDuration = (seconds) => {
    if (!seconds) return "00:00";
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0)
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleViewDetails = (recording) => {
    navigate(`/recordings/${recording._id}`, {
      state: {
        recording: recording,
        activeTab: "Audio",
      },
    });
  };

  const fetchTotalUsage = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/user/totalUsage",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTotalUsage(response.data.totalSecondsUsed);
    } catch (err) {
      console.error("Error fetching total usage:", err);
      setUsageError(err.message || "Failed to fetch total usage");
    } finally {
      setUsageLoading(false);
    }
  };

  // NEW: Fetch today's meeting reminders
  const fetchMeetingReminders = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/today-reminders",
        {
          headers: { Authorization: token },
        }
      );
      setMeetingReminders(response.data.reminders || []);
    } catch (err) {
      console.error("Error fetching meeting reminders:", err);
    } finally {
      setRemindersLoading(false);
    }
  };

  // NEW: Mark meeting as attended
  const handleMarkAttended = async (meetingId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/${meetingId}/attend`,
        {},
        {
          headers: { Authorization: token },
        }
      );
      // Remove from reminders after marking as attended
      setMeetingReminders(prev => prev.filter(m => m._id !== meetingId));
    } catch (err) {
      console.error("Error marking meeting as attended:", err);
      alert("Failed to mark meeting as attended");
    }
  };

  // NEW: Dismiss reminder
  const handleDismissReminder = (meetingId) => {
    setDismissedReminders(prev => new Set(prev).add(meetingId));
  };

  // Function to format recording type for display
  const formatRecordingType = (type) => {
    switch (type) {
      case "recording":
        return "Recording";
      case "live-transcription":
        return "Live Transcription";
      case "audio-notes":
        return "Audio Notes";
      default:
        return "Recording";
    }
  };

  // Calculate usage percentage out of 100 minutes (6000 seconds)
  const getUsagePercentage = () => {
    const maxSeconds = 6000; // 100 minutes
    return Math.min((totalUsage / maxSeconds) * 100, 100);
  };

  // Get remaining time
  const getRemainingTime = () => {
    const maxSeconds = 6000; // 100 minutes
    const remaining = Math.max(maxSeconds - totalUsage, 0);
    return formatDuration(remaining);
  };

  // NEW: Format time for meeting reminders
  const formatMeetingTime = (dateTime) => {
    const date = new Date(dateTime);
    const now = new Date();
    const diffInMinutes = Math.floor((date - now) / (1000 * 60));

    if (diffInMinutes < 0) {
      return "Started";
    } else if (diffInMinutes === 0) {
      return "Starting now";
    } else if (diffInMinutes < 60) {
      return `in ${diffInMinutes} min`;
    } else {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };

  // NEW: Get meeting urgency level
  const getMeetingUrgency = (dateTime) => {
    const date = new Date(dateTime);
    const now = new Date();
    const diffInMinutes = Math.floor((date - now) / (1000 * 60));

    if (diffInMinutes <= 0) return 'urgent'; // Started or starting now
    if (diffInMinutes <= 15) return 'high'; // Within 15 minutes
    if (diffInMinutes <= 60) return 'medium'; // Within 1 hour
    return 'low'; // More than 1 hour
  };

  useEffect(() => {
    const fetchMeetingCount = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/meeting/meetingCount",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setMeetingCount(response.data.meetingCount);
      } catch (err) {
        console.error("Error fetching meeting count:", err);
        setError(err.message || "Failed to fetch meeting count");
      } finally {
        setLoading(false);
      }
    };

    const fetchRecentMeetings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/lasttenmeetings",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setRecentMeetings(response.data);
      } catch (err) {
        console.error("Error fetching recent meetings:", err);
        setMeetingsError(err.message || "Failed to fetch recent meetings");
      } finally {
        setMeetingsLoading(false);
      }
    };

    fetchMeetingCount();
    fetchRecentMeetings();
    fetchTotalUsage();
    fetchMeetingReminders(); // NEW: Fetch meeting reminders
  }, []);

  // Filter visible reminders (not dismissed and not passed)
  const visibleReminders = meetingReminders.filter(
    meeting => !dismissedReminders.has(meeting._id)
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="p-[55px] lg:p-8 max-w-7xl mx-auto">
        {/* NEW: Meeting Reminders Section */}
        {!remindersLoading && visibleReminders.length > 0 && (
          <section className="mb-6" aria-label="Meeting reminders">
            <div className="space-y-3">
              {/* {visibleReminders.map((meeting) => {
                const urgency = getMeetingUrgency(meeting.scheduledDateTime);
                const urgencyColors = {
                  urgent: 'bg-red-50 border-red-200 text-red-800',
                  high: 'bg-orange-50 border-orange-200 text-orange-800',
                  medium: 'bg-yellow-50 border-yellow-200 text-yellow-800',
                  low: 'bg-blue-50 border-blue-200 text-blue-800'
                };
                
                return (
                  <motion.div
                    key={meeting._id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${urgencyColors[urgency]} border-2 rounded-xl p-4 shadow-sm`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Bell className="w-5 h-5" />
                          {urgency === 'urgent' && <AlertTriangle className="w-5 h-5 text-red-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{meeting.title}</h3>
                          <p className="text-sm opacity-80">
                            {urgency === 'urgent' ? 'Meeting starting now!' : `Meeting ${formatMeetingTime(meeting.scheduledDateTime)}`}
                          </p>
                          {meeting.discussionTopics && meeting.discussionTopics.length > 0 && (
                            <p className="text-xs mt-1 opacity-70">
                              Topics: {meeting.discussionTopics.slice(0, 2).join(', ')}
                              {meeting.discussionTopics.length > 2 && '...'}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleMarkAttended(meeting._id)}
                          className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center space-x-1"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Mark Attended</span>
                        </button>
                        <button
                          onClick={() => handleDismissReminder(meeting._id)}
                          className="p-2 hover:bg-black hover:bg-opacity-10 rounded-lg transition-colors"
                          aria-label="Dismiss reminder"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })} */}
              {visibleReminders.map((meeting) => {
                const urgency = getMeetingUrgency(meeting.scheduledDateTime);
                const urgencyColors = {
                  urgent: 'bg-red-50 border-red-200 text-red-800',
                  high: 'bg-orange-50 border-orange-200 text-orange-800',
                  medium: 'bg-yellow-50 border-yellow-200 text-yellow-800',
                  low: 'bg-blue-50 border-blue-200 text-blue-800'
                };

                return (
                  <motion.div
                    key={meeting._id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${urgencyColors[urgency]} border-2 rounded-xl p-4 shadow-sm`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Bell className="w-5 h-5" />
                          {urgency === 'urgent' && <AlertTriangle className="w-5 h-5 text-red-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{meeting.title}</h3>
                          <p className="text-sm opacity-80">
                            {urgency === 'urgent' ? 'Meeting starting now!' : `Meeting ${formatMeetingTime(meeting.scheduledDateTime)}`}
                          </p>
                          {meeting.discussionTopics && meeting.discussionTopics.length > 0 && (
                            <p className="text-xs mt-1 opacity-70">
                              Topics: {meeting.discussionTopics.slice(0, 2).join(', ')}
                              {meeting.discussionTopics.length > 2 && '...'}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* NEW: Start Recording Button */}
                        <button
                          onClick={() => navigate("/recorder", {
                            state: {
                              scheduledMeeting: meeting,
                              fromScheduled: true
                            }
                          })}
                          className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center space-x-1"
                        >
                          <PlayCircle className="w-4 h-4" />
                          <span>Start Recording</span>
                        </button>

                        <button
                          onClick={() => handleMarkAttended(meeting._id)}
                          className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center space-x-1"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Mark Attended</span>
                        </button>
                        <button
                          onClick={() => handleDismissReminder(meeting._id)}
                          className="p-2 hover:bg-black hover:bg-opacity-10 rounded-lg transition-colors"
                          aria-label="Dismiss reminder"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}
        {/* Stats Cards */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          aria-label="Dashboard statistics"
        >
          {/* Total Recordings Card */}
          <article
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            role="region"
            aria-labelledby="total-recordings-heading"
          >
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: (i) => ({
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.3,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              <header className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <PlayCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold"
                  role="status"
                >
                  +REC
                </div>
              </header>
              <div className="space-y-1">
                <h2
                  id="total-recordings-heading"
                  className="text-gray-600 text-sm font-medium"
                >
                  Total Recordings
                </h2>
                {loading ? (
                  <div
                    className="text-3xl font-bold text-gray-900 animate-pulse"
                    aria-live="polite"
                    aria-label="Loading recordings count"
                  >
                    ...
                  </div>
                ) : error ? (
                  <div className="text-sm text-red-500" role="alert">
                    {error}
                  </div>
                ) : (
                  <div
                    className="text-3xl font-bold text-gray-900"
                    aria-live="polite"
                  >
                    {meetingCount}
                  </div>
                )}
                <div
                  className="flex items-center text-purple-600 text-sm"
                  role="status"
                >
                  <TrendingUp className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span>Ready to record</span>
                </div>
              </div>
            </motion.div>
          </article>

          {/* Total Usage Card */}
          <article
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            role="region"
            aria-labelledby="total-usage-heading"
          >
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
                    delay: i * 0.5,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              <header className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div
                  className="text-sm text-gray-500"
                  role="status"
                  aria-label={`${getUsagePercentage().toFixed(
                    0
                  )} percent of total usage consumed`}
                >
                  {getUsagePercentage().toFixed(0)}% used
                </div>
              </header>
              <div className="space-y-3">
                <h2
                  id="total-usage-heading"
                  className="text-gray-600 text-sm font-medium"
                >
                  Total Usage
                </h2>
                {usageLoading ? (
                  <div
                    className="text-3xl font-bold text-gray-900 animate-pulse"
                    aria-live="polite"
                    aria-label="Loading usage statistics"
                  >
                    ...
                  </div>
                ) : usageError ? (
                  <div className="text-sm text-red-500" role="alert">
                    {usageError}
                  </div>
                ) : (
                  <div
                    className="text-3xl font-bold text-gray-900"
                    aria-live="polite"
                  >
                    {formatDuration(totalUsage)}
                  </div>
                )}

                {/* Usage Progress Bar */}
                <div className="space-y-2">
                  <div
                    className="w-full bg-gray-200 rounded-full h-2"
                    role="progressbar"
                    aria-valuenow={getUsagePercentage()}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="Usage progress"
                  >
                    <div
                      className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getUsagePercentage()}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Used: {formatDuration(totalUsage)}</span>
                    <span>Remaining: {getRemainingTime()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </article>

          {/* AI Assistant Card */}
          <article
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-md transition-shadow"
            role="region"
            aria-labelledby="ai-assistant-heading"
          >
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: (i) => ({
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.7,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }),
              }}
              className="flex items-center justify-between h-full"
            >
              <div className="space-y-3">
                <div
                  className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    className="text-2xl"
                    role="img"
                    aria-label="Robot emoji"
                  >
                    🤖
                  </span>
                </div>
                <div>
                  <h2
                    id="ai-assistant-heading"
                    className="text-purple-900 font-semibold text-lg"
                  >
                    AI Assistant
                  </h2>
                  <p className="text-purple-700 text-sm">
                    Ready to help you transcribe
                  </p>
                </div>
                <button
                  onClick={() => navigate("/chat")}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm font-medium hover:bg-purple-700 transition-colors"
                  type="button"
                  aria-label="Start conversation with AI assistant"
                >
                  Let's Talk
                </button>
              </div>
              <figure className="hidden sm:block">
                <img
                  src={RobotLogo}
                  alt="AI Assistant Robot illustration"
                  className="w-30 h-48 object-contain opacity-80"
                />
              </figure>
            </motion.div>
          </article>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Recent Recordings - Takes 3 columns */}
          <section
            className="lg:col-span-3"
            aria-labelledby="recent-recordings-heading"
          >
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
                    delay: i * 0.9,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }),
              }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              {/* Header */}
              <header className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Calendar className="w-4 h-4 text-gray-600" />
                    </div>
                    <h2
                      id="recent-recordings-heading"
                      className="text-xl font-bold text-gray-900"
                    >
                      Recent Recordings
                    </h2>
                  </div>
                  <nav
                    onClick={() => navigate("/recordings")}
                    className="flex items-center space-x-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                    role="button"
                    tabIndex={0}
                    aria-label="View all recordings"
                  >
                    <span className="text-sm">View all</span>
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </nav>
                </div>
              </header>

              {/* Table */}
              <div className="overflow-x-auto">
                <table
                  className="w-full"
                  role="table"
                  aria-label="Recent recordings list"
                >
                  <thead>
                    <tr className="bg-gray-50" role="row">
                      <th
                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        role="columnheader"
                        scope="col"
                      >
                        Title
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        role="columnheader"
                        scope="col"
                      >
                        Duration
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        role="columnheader"
                        scope="col"
                      >
                        Participants
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        role="columnheader"
                        scope="col"
                      >
                        Recording Type
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="bg-white divide-y divide-gray-100"
                    role="rowgroup"
                  >
                    {meetingsLoading ? (
                      <tr role="row">
                        <td
                          colSpan="4"
                          className="px-6 py-12 text-center"
                          role="cell"
                        >
                          <div
                            className="flex flex-col items-center space-y-3"
                            role="status"
                            aria-live="polite"
                          >
                            <div
                              className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"
                              aria-hidden="true"
                            ></div>
                            <span className="text-gray-500">
                              Loading recent meetings...
                            </span>
                          </div>
                        </td>
                      </tr>
                    ) : meetingsError ? (
                      <tr role="row">
                        <td
                          colSpan="4"
                          className="px-6 py-12 text-center text-red-500"
                          role="cell"
                        >
                          <div role="alert">{meetingsError}</div>
                        </td>
                      </tr>
                    ) : recentMeetings.length === 0 ? (
                      <tr role="row">
                        <td
                          colSpan="4"
                          className="px-6 py-12 text-center"
                          role="cell"
                        >
                          <div className="flex flex-col items-center space-y-3">
                            <div
                              className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <PlayCircle className="w-8 h-8 text-gray-400" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-gray-900 font-medium">
                                No recordings yet
                              </p>
                              <p className="text-gray-500 text-sm">
                                Start your first recording to see it here
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      recentMeetings.map((meeting, index) => (
                        <tr
                          onClick={() => handleViewDetails(meeting)}
                          key={meeting._id}
                          className="hover:bg-gray-50 transition-colors cursor-pointer"
                          role="row"
                          tabIndex={0}
                          aria-label={`View details for ${meeting.title || "Untitled"
                            } recording`}
                        >
                          <td className="px-6 py-4" role="cell">
                            <div className="flex items-center space-x-3">
                              <div
                                className="w-2 h-2 bg-purple-400 rounded-full"
                                aria-hidden="true"
                              ></div>
                              <span className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                {meeting.title || "Untitled"}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4" role="cell">
                            <span className="text-sm text-gray-900 font-mono">
                              {formatDuration(meeting.recordingLength)}
                            </span>
                          </td>
                          <td className="px-6 py-4" role="cell">
                            <div className="flex items-center space-x-2">
                              <Users
                                className="w-4 h-4 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="text-sm text-gray-900">
                                {meeting.participants
                                  ? meeting.participants.length
                                  : 0}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 text-center py-4" role="cell">
                            <span
                              className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${meeting.type === "recording"
                                ? "bg-blue-100 text-blue-800"
                                : meeting.type === "live-transcription"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                                }`}
                              role="status"
                            >
                              {formatRecordingType(meeting.type)}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </section>

          {/* Dynamic Latest Session Sidebar - Takes 1 column */}
          <aside
            className="lg:col-span-1"
            aria-labelledby="latest-session-heading"
          >
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
                    delay: i * 1.2,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit">
                {meetingsLoading ? (
                  // Loading state
                  <>
                    <header className="flex items-center space-x-3 mb-6">
                      <div
                        className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"
                        aria-hidden="true"
                      ></div>
                      <div
                        className="h-5 bg-gray-200 rounded animate-pulse w-32"
                        aria-hidden="true"
                      ></div>
                    </header>

                    <div
                      className="p-4 bg-gray-50 rounded-xl border border-gray-200"
                      role="status"
                      aria-live="polite"
                      aria-label="Loading latest session"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div
                            className="h-4 bg-gray-200 rounded animate-pulse w-24"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="h-5 bg-gray-200 rounded-full animate-pulse w-16"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div className="space-y-2">
                          <div
                            className="h-5 bg-gray-200 rounded animate-pulse w-full"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="h-4 bg-gray-200 rounded animate-pulse w-3/4"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-4 h-4 bg-gray-200 rounded animate-pulse"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="h-4 bg-gray-200 rounded animate-pulse w-20"
                            aria-hidden="true"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <nav className="mt-4 pt-4 border-t border-gray-100">
                      <div
                        className="w-full h-12 bg-gray-200 rounded-xl animate-pulse"
                        aria-hidden="true"
                      ></div>
                    </nav>
                  </>
                ) : (
                  (() => {
                    // Get the latest meeting (first in the array since it's sorted by most recent)
                    const latestMeeting =
                      recentMeetings.length > 0 ? recentMeetings[0] : null;

                    // Define card configurations based on meeting type
                    const getCardConfig = (type) => {
                      switch (type) {
                        case "audio-notes":
                          return {
                            title: "Audio Notes",
                            icon: MessageSquare,
                            iconColor: "text-purple-600",
                            iconBg: "bg-purple-100",
                            gradientFrom: "from-purple-50",
                            gradientTo: "to-purple-100",
                            hoverFrom: "hover:from-purple-100",
                            hoverTo: "hover:to-purple-200",
                            borderColor: "border-purple-200",
                            textColor: "text-purple-700",
                            badgeColor: "bg-purple-200 text-purple-600",
                            buttonColor: "bg-purple-600 hover:bg-purple-700",
                            actionText: "Create Audio Note",
                            link: "/audionotes",
                          };
                        case "live-transcription":
                          return {
                            title: "Live Transcription",
                            icon: Users,
                            iconColor: "text-green-600",
                            iconBg: "bg-green-100",
                            gradientFrom: "from-green-50",
                            gradientTo: "to-green-100",
                            hoverFrom: "hover:from-green-100",
                            hoverTo: "hover:to-green-200",
                            borderColor: "border-green-200",
                            textColor: "text-green-700",
                            badgeColor: "bg-green-200 text-green-600",
                            buttonColor: "bg-green-600 hover:bg-green-700",
                            actionText: "Start Live Session",
                            link: "/live-transcription",
                          };
                        case "recording":
                        default:
                          return {
                            title: "Meeting Recording",
                            icon: PlayCircle,
                            iconColor: "text-blue-600",
                            iconBg: "bg-blue-100",
                            gradientFrom: "from-blue-50",
                            gradientTo: "to-blue-100",
                            hoverFrom: "hover:from-blue-100",
                            hoverTo: "hover:to-blue-200",
                            borderColor: "border-blue-200",
                            textColor: "text-blue-700",
                            badgeColor: "bg-blue-200 text-blue-600",
                            buttonColor: "bg-blue-600 hover:bg-blue-700",
                            actionText: "Start Recording",
                            link: "/emails",
                          };
                      }
                    };

                    const config = getCardConfig(latestMeeting?.type);
                    const IconComponent = config.icon;

                    // Format the date of the latest meeting
                    const formatRelativeTime = (dateString) => {
                      const now = new Date();
                      const date = new Date(dateString);
                      const diffInSeconds = Math.floor((now - date) / 1000);

                      if (diffInSeconds < 60) return "just now";
                      if (diffInSeconds < 3600)
                        return `${Math.floor(diffInSeconds / 60)}m ago`;
                      if (diffInSeconds < 86400)
                        return `${Math.floor(diffInSeconds / 3600)}h ago`;
                      if (diffInSeconds < 604800)
                        return `${Math.floor(diffInSeconds / 86400)}d ago`;

                      return date.toLocaleDateString();
                    };

                    return (
                      <>
                        <header className="flex items-center space-x-3 mb-6">
                          <div
                            className={`w-8 h-8 ${config.iconBg} rounded-lg flex items-center justify-center`}
                            aria-hidden="true"
                          >
                            <IconComponent
                              className={`w-4 h-4 ${config.iconColor}`}
                            />
                          </div>
                          <h2
                            id="latest-session-heading"
                            className="text-lg font-bold text-gray-900"
                          >
                            {config.title}
                          </h2>
                        </header>

                        {latestMeeting ? (
                          <Link
                            to={config.link}
                            className={`block p-4 bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} rounded-xl ${config.hoverFrom} ${config.hoverTo} transition-all duration-200 border ${config.borderColor}`}
                            aria-label={`View latest ${config.title.toLowerCase()} session: ${latestMeeting.title || "Untitled Session"
                              }`}
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span
                                  className={`${config.textColor} text-sm font-medium`}
                                >
                                  Latest Session
                                </span>
                                <span
                                  className={`text-xs ${config.badgeColor} text-center px-2 py-1 rounded-full`}
                                  role="status"
                                >
                                  {formatRecordingType(latestMeeting.type)}
                                </span>
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-1 truncate">
                                  {latestMeeting.title || "Untitled Session"}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  Duration:{" "}
                                  {formatDuration(
                                    latestMeeting.recordingLength
                                  )}
                                </p>
                              </div>
                              <div
                                className={`flex items-center ${config.textColor} text-sm`}
                              >
                                <Clock
                                  className="w-4 h-4 mr-2"
                                  aria-hidden="true"
                                />
                                <span>
                                  {formatRelativeTime(latestMeeting.createdAt)}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                            <div className="text-center space-y-2">
                              <div
                                className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto"
                                aria-hidden="true"
                              >
                                <IconComponent className="w-6 h-6 text-gray-400" />
                              </div>
                              <p className="text-gray-500 text-sm">
                                No sessions yet
                              </p>
                              <p className="text-gray-400 text-xs">
                                Your latest session will appear here
                              </p>
                            </div>
                          </div>
                        )}

                        <nav className="mt-4 pt-4 border-t border-gray-100">
                          <Link
                            to={config.link}
                            className={`w-full ${config.buttonColor} text-white py-3 px-4 rounded-xl text-center font-medium transition-colors flex items-center justify-center space-x-2`}
                            aria-label={`${config.actionText} - Start new session`}
                          >
                            <IconComponent
                              className="w-4 h-4"
                              aria-hidden="true"
                            />
                            <span>{config.actionText}</span>
                          </Link>
                        </nav>
                      </>
                    );
                  })()
                )}
              </article>
            </motion.div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
