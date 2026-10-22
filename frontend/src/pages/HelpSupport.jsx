// import React, { useState } from "react";
// import { Search, MessageCircle } from "lucide-react";

// export default function HelpSupportPage() {
//   const [activeTab, setActiveTab] = useState("Contact");
//   const [expandedItem, setExpandedItem] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     category: "Technical Issue",
//     message: "",
//     includeActivity: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const faqItems = [
//     {
//       id: 0,
//       question: "How do I share notes with others?",
//     },
//     {
//       id: 1,
//       question: "How do I share notes with others?",
//     },
//     {
//       id: 2,
//       question: "How do I share notes with others?",
//     },
//   ];

//   const toggleItem = (id) => {
//     setExpandedItem(expandedItem === id ? -1 : id);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Main Content */}
//       <div className="max-w-5xl mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-purple-700 mb-2">
//             Help & Support
//           </h1>
//           <p className="text-gray-600 text-sm">
//             Find the help you need with our comprehensive support documentation.
//           </p>
//         </div>

//         {/* Search Bar */}

//         <div className="bg-white px-12 py-5 shadow-md shadow-gray-800 rounded-2xl max-w-2xl mx-auto">
//           <div className="relative">
//             {/* Search Icon */}
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

//             {/* Input */}
//             <input
//               type="text"
//               placeholder="Search for help articles here..."
//               className="w-full pl-12 pr-24 py-2 border-2 border-purple-600 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />

//             {/* Submit Button */}
//             <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-200">
//               Submit
//             </button>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mb-6">
//           <div className="flex space-x-8 border-b border-gray-200">
//             <button
//               onClick={() => setActiveTab("FAQs")}
//               className={`pb-3 text-sm font-medium ${
//                 activeTab === "FAQs"
//                   ? "text-gray-900 border-b-2 border-gray-900"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//             >
//               FAQs
//             </button>
//             <button
//               onClick={() => setActiveTab("Contact")}
//               className={`pb-3 text-sm font-medium ${
//                 activeTab === "Contact"
//                   ? "text-gray-900 border-b-2 border-gray-900"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//         {activeTab === "FAQs" && (
//           <div className=" mx-auto p-6 space-y-4">
//             {faqItems.map((item) => (
//               <div
//                 key={item.id}
//                 className={`rounded-lg transition-all duration-200  shadow-lg shadow-gray-400 ${
//                   expandedItem === item.id
//                     ? "border-2 border-blue-400 bg-blue-50"
//                     : "border border-gray-200 bg-white shadow-sm"
//                 }`}
//               >
//                 <button
//                   onClick={() => toggleItem(item.id)}
//                   className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex-shrink-0">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         className="text-purple-500"
//                         fill="currentColor"
//                       >
//                         <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
//                         <path
//                           d="M9 12l2 2 4-4"
//                           stroke="white"
//                           strokeWidth="2"
//                           fill="none"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-gray-800 font-medium text-base">
//                       {item.question}
//                     </span>
//                   </div>
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//         {/* Contact Form */}
//         {activeTab === "Contact" && (
//           <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-md shadow-gray-800">
//             <div className="text-center mb-8">
//               <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MessageCircle className="w-6 h-6 text-purple-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Contact Our Support Team
//               </h2>
//             </div>

//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter your name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Support Category
//                 </label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
//                 >
//                   <option value="Technical Issue">Technical Issue</option>
//                   <option value="Billing">Billing</option>
//                   <option value="Account">Account</option>
//                   <option value="Feature Request">Feature Request</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   rows={6}
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
//                   placeholder="Describe your issue or question..."
//                 />
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="includeActivity"
//                   checked={formData.includeActivity}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
//                 />
//                 <label className="ml-3 text-sm text-gray-600">
//                   Include Recent Account Activity
//                 </label>
//               </div>

//               <div className="flex justify-between items-center pt-4">
//                 <button
//                   className="bg-purple-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//                 >
//                   Submit Support Request
//                 </button>
//                 <button
//                   
//                   className="text-purple-500 text-sm hover:text-purple-600  border-2 border-purple-600 p-2 rounded-lg"
//                 >
//                   Schedule a call
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Footer Contact Info */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
//           <div className="flex items-center justify-center flex-col">
//             <h3 className="font-medium text-gray-900 mb-2">Email Support</h3>
//             <a
//               href="mailto:support@awesometritus.com"
//               className="text-purple-600 hover:text-purple-700"
//             >
//               support@awesometritus.com
//             </a>
//             <p className="text-gray-500 mt-1">Response within 24 hours</p>
//           </div>
//           <div className="flex items-center justify-center flex-col">
//             <h3 className="font-medium text-gray-900 mb-2">Phone Number</h3>
//             <a
//               href="tel:+1609849279"
//               className="text-purple-600 hover:text-purple-700"
//             >
//               +1(609) 849-7279
//             </a>
//           </div>
//           <div className="flex items-center justify-center flex-col">
//             <h3 className="font-medium text-gray-900 mb-2">Live chat</h3>
//             <p className="text-gray-500">Available on dashboard</p>
//             <p className="text-gray-500">24/7 Available</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { MessageCircle, CheckCircle, AlertCircle, Loader } from "lucide-react";

// export default function HelpSupportPage() {
//   const [activeTab, setActiveTab] = useState("Contact");
//   const [expandedItem, setExpandedItem] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     category: "Technical Issue",
//     message: "",
//     includeActivity: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // API call to submit support request
//   const submitSupportRequest = async (requestData) => {
//     const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/support/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adjust based on your auth method
//       },
//       body: JSON.stringify(requestData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Failed to submit support request');
//     }

//     return await response.json();
//   };

//   const handleSubmit = async () => {

//     // Basic validation
//     if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
//       setSubmitStatus('error');
//       return;
//     }

//     if (formData.message.trim().length < 10) {
//       setSubmitStatus('error');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       await submitSupportRequest(formData);
//       setSubmitStatus('success');

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         category: "Technical Issue",
//         message: "",
//         includeActivity: false,
//       });
//     } catch (error) {
//       console.error('Error submitting support request:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const faqItems = [
//     {
//       id: 1,
//       question: 'How do I start recording a Google Meet session?',
//       answer: 'To start recording a Google Meet session, click on the "Start Recording" button in the top navigation bar when you\'re in a meeting. You\'ll be prompted to give necessary permissions, and then the recording will begin automatically. You can also set up auto-recording for scheduled meetings in your Calendar settings.'
//     },
//     {
//       id: 2,
//       question: 'Can I record meetings from platforms other than Google Meet?',
//       answer: 'Currently, we support Google Meet natively. For other platforms like Zoom, Microsoft Teams, or Webex, you can use our screen recording feature by clicking on "New Recording" and selecting "Screen Capture" mode. We plan to add native integrations with more platforms in the future.'
//     },
//     {
//       id: 3,
//       question: 'How long does it take to generate an AI summary?',
//       answer: 'AI summaries are typically generated within 5-10 minutes after a recording ends, depending on the length of the meeting. For meetings longer than an hour, it may take up to 15 minutes. You\'ll receive a notification when your summary is ready.'
//     },
//     {
//       id: 4,
//       question: 'How accurate are the transcriptions?',
//       answer: 'Our transcription technology achieves approximately 95% accuracy in clear audio conditions with English speakers. Factors that may affect accuracy include background noise, multiple people speaking simultaneously, strong accents, or poor audio quality. You can always edit transcripts manually if needed.'
//     },
//     {
//       id: 5,
//       question: 'Is my meeting data secure?',
//       answer: 'Yes, we take security very seriously. All recordings and transcripts are encrypted both in transit and at rest. We use industry-standard security protocols and regularly undergo security audits. You have complete control over who can access your recordings through our sharing and permission settings.'
//     },
//     {
//       id: 6,
//       question: 'How do I share recordings with my team?',
//       answer: 'To share a recording, navigate to the recording you want to share, click the "Share" button, and enter the email addresses of team members you want to grant access to. You can set permission levels (view-only or edit) and also generate shareable links with optional password protection.'
//     },
//     {
//       id: 7,
//       question: 'What\'s the difference between Free and Pro plans?',
//       answer: 'The Free plan includes up to 5 recordings per month, basic AI summaries, and 7-day storage of recordings. The Pro plan offers unlimited recordings, advanced AI insights, action item extraction, integration with calendar apps, team collaboration features, and 1-year storage of recordings.'
//     },
//     {
//       id: 8,
//       question: 'Can I export my recordings and transcripts?',
//       answer: 'Yes, you can export recordings in MP4 format and transcripts in TXT, DOCX, or PDF formats. Go to the recording or transcript you want to export, click the "Download" button, and select your preferred format. Pro users can also enable automatic exports to cloud storage services like Google Drive or Dropbox.'
//     }
//   ];

//   const toggleItem = (id) => {
//     setExpandedItem(expandedItem === id ? -1 : id);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Main Content */}
//       <div className="max-w-5xl mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-purple-700 mb-2">
//             Help & Support
//           </h1>
//           <p className="text-gray-600 text-sm">
//             Find the help you need with our comprehensive support documentation.
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="mb-6">
//           <div className="flex space-x-8 border-b border-gray-200">
//             <button
//               onClick={() => setActiveTab("FAQs")}
//               className={`pb-3 text-sm font-medium ${
//                 activeTab === "FAQs"
//                   ? "text-gray-900 border-b-2 border-gray-900"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//             >
//               FAQs
//             </button>
//             <button
//               onClick={() => setActiveTab("Contact")}
//               className={`pb-3 text-sm font-medium ${
//                 activeTab === "Contact"
//                   ? "text-gray-900 border-b-2 border-gray-900"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//             >
//               Contact
//             </button>
//           </div>
//         </div>

//         {/* FAQs Tab */}
//         {/* {activeTab === "FAQs" && (
//           <div className="mx-auto p-6 space-y-4">
//             {faqItems.map((item) => (
//               <div
//                 key={item.id}
//                 className={`rounded-lg transition-all duration-200 shadow-lg shadow-gray-400 ${
//                   expandedItem === item.id
//                     ? "border-2 border-blue-400 bg-blue-50"
//                     : "border border-gray-200 bg-white shadow-sm"
//                 }`}
//               >
//                 <button
//                   onClick={() => toggleItem(item.id)}
//                   className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex-shrink-0">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         className="text-purple-500"
//                         fill="currentColor"
//                       >
//                         <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
//                         <path
//                           d="M9 12l2 2 4-4"
//                           stroke="white"
//                           strokeWidth="2"
//                           fill="none"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-gray-800 font-medium text-base">
//                       {item.question}
//                     </span>
//                   </div>
//                 </button>
//               </div>
//             ))}
//           </div>
//         )} */}

// {/* FAQs Tab */}
// {activeTab === "FAQs" && (
//   <div className="mx-auto p-6 space-y-4">
//     {faqItems.map((item) => (
//       <div
//         key={item.id}
//         className={`rounded-lg transition-all duration-200 shadow-lg shadow-gray-400 ${
//           expandedItem === item.id
//             ? "border-2 border-gray-400 bg-blue-50"
//             : "border border-gray-200 bg-white shadow-sm"
//         }`}
//       >
//         <button
//           onClick={() => toggleItem(item.id)}
//           className="w-full  cursor-pointer p-4 flex items-center justify-between text-left focus:outline-none"
//         >
//           <div className="flex items-center gap-3">
//             <div className="flex-shrink-0">
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 className="text-purple-500"
//                 fill="currentColor"
//               >
//                 <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
//                 <path
//                   d="M9 12l2 2 4-4"
//                   stroke="white"
//                   strokeWidth="2"
//                   fill="none"
//                 />
//               </svg>
//             </div>
//             <span className="text-gray-800 font-medium text-base">
//               {item.question}
//             </span>
//           </div>
//           <div className="flex-shrink-0">
//             <svg
//               className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
//                 expandedItem === item.id ? 'rotate-180' : ''
//               }`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//         </button>

//         {expandedItem === item.id && (
//           <div className="px-4 pb-4">
//             <div className="pl-7 pr-4">
//               <div className="border-t border-gray-200 pt-4">
//                 <p className="text-gray-600 leading-relaxed text-sm">
//                   {item.answer}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// )}

//         {/* Contact Form */}
//         {activeTab === "Contact" && (
//           <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-md shadow-gray-800">
//             <div className="text-center mb-8">
//               <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MessageCircle className="w-6 h-6 text-purple-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Contact Our Support Team
//               </h2>
//             </div>

//             {/* Success Message */}
//             {submitStatus === 'success' && (
//               <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
//                 <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                 <span className="text-green-700">
//                   Support request submitted successfully! We'll get back to you within 24 hours.
//                 </span>
//               </div>
//             )}

//             {/* Error Message */}
//             {submitStatus === 'error' && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
//                 <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
//                 <span className="text-red-700">
//                   Please fill in all required fields and ensure your message is at least 10 characters long.
//                 </span>
//               </div>
//             )}

//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter your name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Support Category *
//                 </label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
//                 >
//                   <option value="Technical Issue">Technical Issue</option>
//                   <option value="Billing">Billing</option>
//                   <option value="Account">Account</option>
//                   <option value="Feature Request">Feature Request</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   rows={6}
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   minLength={10}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
//                   placeholder="Describe your issue or question... (minimum 10 characters)"
//                 />
//                 <div className="text-xs text-gray-500 mt-1">
//                   {formData.message.length}/5000 characters
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="includeActivity"
//                   checked={formData.includeActivity}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
//                 />
//                 <label className="ml-3 text-sm text-gray-600">
//                   Include Recent Account Activity
//                 </label>
//               </div>

//               <div className="flex justify-between items-center pt-4">
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <Loader className="w-4 h-4 mr-2 animate-spin" />
//                       Submitting...
//                     </>
//                   ) : (
//                     'Submit Support Request'
//                   )}
//                 </button>
//                 <button
//                   type="button"
//                   
//                   className="text-purple-500 text-sm hover:text-purple-600 border-2 border-purple-600 p-2 rounded-lg"
//                 >
//                   Schedule a call
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Footer Contact Info */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
//           <div className="flex items-center justify-center flex-col">
//             <h3 className="font-medium text-gray-900 mb-2">Email Support</h3>
//             <a
//               href="mailto:support@awesometritus.com"
//               className="text-purple-600 hover:text-purple-700"
//             >
//               support@sessionscribe.com
//             </a>
//             <p className="text-gray-500 mt-1">Response within 24 hours</p>
//           </div>
//           <div className="flex items-center justify-center flex-col">
//             <h3 className="font-medium text-gray-900 mb-2">Phone Number</h3>
//             <a
//               href="tel:+1609849279"
//               className="text-purple-600 hover:text-purple-700"
//             >
//               +1(609) 849-7279
//             </a>
//           </div>
//           <div className="flex items-center justify-center flex-col">
//             <h3 className="font-medium text-gray-900 mb-2">Live chat</h3>
//             <p className="text-gray-500">Available on dashboard</p>
//             <p className="text-gray-500">24/7 Available</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




























import { useState } from "react";
import { MessageCircle, CheckCircle, AlertCircle, Loader, Play, Users, Mic, Download, FileText, Volume2 } from "lucide-react";
import website from "/assets/Untitled design.png"
import dashboardImage from "/assets/image.png"
import emailPage from "/assets/emailpage.jpg"
import recorderpage from "/assets/recorderpage.jpg"
import recordingDone from "/assets/recordingDone.jpg"
import processingPage from "/assets/processingPage.jpg"
import recordingsPage from "/assets/recordingspage.jpg"
import summariesPage from "/assets/Summaries.jpg"
import { Instructions } from "../components/Instructions";
export default function HelpSupportPage() {
  const [activeTab, setActiveTab] = useState("Contact");
  const [expandedItem, setExpandedItem] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Technical Issue",
    message: "",
    includeActivity: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // API call to submit support request
  const submitSupportRequest = async (requestData) => {
    const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/support/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adjust based on your auth method
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit support request');
    }

    return await response.json();
  };

  const handleSubmit = async () => {

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    if (formData.message.trim().length < 10) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitSupportRequest(formData);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: "",
        email: "",
        category: "Technical Issue",
        message: "",
        includeActivity: false,
      });
    } catch (error) {
      console.error('Error submitting support request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      id: 1,
      question: 'How do I start recording a Google Meet session?',
      answer: 'To start recording a Google Meet session, click on the "Start Recording" button in the top navigation bar when you\'re in a meeting. You\'ll be prompted to give necessary permissions, and then the recording will begin automatically. You can also set up auto-recording for scheduled meetings in your Calendar settings.'
    },
    {
      id: 2,
      question: 'Can I record meetings from platforms other than Google Meet?',
      answer: 'Currently, we support Google Meet natively. For other platforms like Zoom, Microsoft Teams, or Webex, you can use our screen recording feature by clicking on "New Recording" and selecting "Screen Capture" mode. We plan to add native integrations with more platforms in the future.'
    },
    {
      id: 3,
      question: 'How long does it take to generate an AI summary?',
      answer: 'AI summaries are typically generated within 5-10 minutes after a recording ends, depending on the length of the meeting. For meetings longer than an hour, it may take up to 15 minutes. You\'ll receive a notification when your summary is ready.'
    },
    {
      id: 4,
      question: 'How accurate are the transcriptions?',
      answer: 'Our transcription technology achieves approximately 95% accuracy in clear audio conditions with English speakers. Factors that may affect accuracy include background noise, multiple people speaking simultaneously, strong accents, or poor audio quality. You can always edit transcripts manually if needed.'
    },
    {
      id: 5,
      question: 'Is my meeting data secure?',
      answer: 'Yes, we take security very seriously. All recordings and transcripts are encrypted both in transit and at rest. We use industry-standard security protocols and regularly undergo security audits. You have complete control over who can access your recordings through our sharing and permission settings.'
    },
    {
      id: 6,
      question: 'How do I share recordings with my team?',
      answer: 'To share a recording, navigate to the recording you want to share, click the "Share" button, and enter the email addresses of team members you want to grant access to. You can set permission levels (view-only or edit) and also generate shareable links with optional password protection.'
    },
    {
      id: 7,
      question: 'What\'s the difference between Free and Pro plans?',
      answer: 'The Free plan includes up to 5 recordings per month, basic AI summaries, and 7-day storage of recordings. The Pro plan offers unlimited recordings, advanced AI insights, action item extraction, integration with calendar apps, team collaboration features, and 1-year storage of recordings.'
    },
    {
      id: 8,
      question: 'Can I export my recordings and transcripts?',
      answer: 'Yes, you can export recordings in MP4 format and transcripts in TXT, DOCX, or PDF formats. Go to the recording or transcript you want to export, click the "Download" button, and select your preferred format. Pro users can also enable automatic exports to cloud storage services like Google Drive or Dropbox.'
    }
  ];

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? -1 : id);
  };

  return (
    // <div className="min-h-screen bg-white">
    //   {/* Main Content */}
    //   <div className="max-w-5xl mx-auto px-4 py-8">
    //     <div className="mb-8">
    //       <h1 className="text-4xl font-bold text-purple-700 mb-2">
    //         Help & Support
    //       </h1>
    //       <p className="text-gray-600 text-sm">
    //         Find the help you need with our comprehensive support documentation.
    //       </p>
    //     </div>

    //     {/* Tabs */}
    //     <div className="mb-6">
    //       <div className="flex space-x-8 border-b border-gray-200">
    //         <button
    //           onClick={() => setActiveTab("Instructions")}
    //           className={`pb-3 text-sm font-medium ${
    //             activeTab === "Instructions"
    //               ? "text-gray-900 border-b-2 border-gray-900"
    //               : "text-gray-500 hover:text-gray-700"
    //           }`}
    //         >
    //           Instructions
    //         </button>
    //         <button
    //           onClick={() => setActiveTab("FAQs")}
    //           className={`pb-3 text-sm font-medium ${
    //             activeTab === "FAQs"
    //               ? "text-gray-900 border-b-2 border-gray-900"
    //               : "text-gray-500 hover:text-gray-700"
    //           }`}
    //         >
    //           FAQs
    //         </button>
    //         <button
    //           onClick={() => setActiveTab("Contact")}
    //           className={`pb-3 text-sm font-medium ${
    //             activeTab === "Contact"
    //               ? "text-gray-900 border-b-2 border-gray-900"
    //               : "text-gray-500 hover:text-gray-700"
    //           }`}
    //         >
    //           Contact
    //         </button>
    //       </div>
    //     </div>

    //     {/* Instructions Tab */}
    //     {activeTab === "Instructions" && <Instructions/>}

    //     {/* FAQs Tab */}
    //     {activeTab === "FAQs" && (
    //       <div className="mx-auto p-6 space-y-4">
    //         {faqItems.map((item) => (
    //           <div
    //             key={item.id}
    //             className={`rounded-lg transition-all duration-200 shadow-lg shadow-gray-400 ${
    //               expandedItem === item.id
    //                 ? "border-2 border-gray-400 bg-blue-50"
    //                 : "border border-gray-200 bg-white shadow-sm"
    //             }`}
    //           >
    //             <button
    //               onClick={() => toggleItem(item.id)}
    //               className="w-full cursor-pointer p-4 flex items-center justify-between text-left focus:outline-none"
    //             >
    //               <div className="flex items-center gap-3">
    //                 <div className="flex-shrink-0">
    //                   <svg
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     className="text-purple-500"
    //                     fill="currentColor"
    //                   >
    //                     <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
    //                     <path
    //                       d="M9 12l2 2 4-4"
    //                       stroke="white"
    //                       strokeWidth="2"
    //                       fill="none"
    //                     />
    //                   </svg>
    //                 </div>
    //                 <span className="text-gray-800 font-medium text-base">
    //                   {item.question}
    //                 </span>
    //               </div>
    //               <div className="flex-shrink-0">
    //                 <svg
    //                   className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
    //                     expandedItem === item.id ? 'rotate-180' : ''
    //                   }`}
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                 >
    //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    //                 </svg>
    //               </div>
    //             </button>

    //             {expandedItem === item.id && (
    //               <div className="px-4 pb-4">
    //                 <div className="pl-7 pr-4">
    //                   <div className="border-t border-gray-200 pt-4">
    //                     <p className="text-gray-600 leading-relaxed text-sm">
    //                       {item.answer}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     )}

    //     {/* Contact Form */}
    //     {activeTab === "Contact" && (
    //       <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-md shadow-gray-800">
    //         <div className="text-center mb-8">
    //           <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
    //             <MessageCircle className="w-6 h-6 text-purple-600" />
    //           </div>
    //           <h2 className="text-2xl font-bold text-gray-900">
    //             Contact Our Support Team
    //           </h2>
    //         </div>

    //         {/* Success Message */}
    //         {submitStatus === 'success' && (
    //           <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
    //             <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
    //             <span className="text-green-700">
    //               Support request submitted successfully! We'll get back to you within 24 hours.
    //             </span>
    //           </div>
    //         )}

    //         {/* Error Message */}
    //         {submitStatus === 'error' && (
    //           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
    //             <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
    //             <span className="text-red-700">
    //               Please fill in all required fields and ensure your message is at least 10 characters long.
    //             </span>
    //           </div>
    //         )}

    //         <div className="space-y-6">
    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-2">
    //                 Your Name *
    //               </label>
    //               <input
    //                 type="text"
    //                 name="name"
    //                 placeholder="Enter your name"
    //                 value={formData.name}
    //                 onChange={handleInputChange}
    //                 required
    //                 className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
    //               />
    //             </div>
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 mb-2">
    //                 Your Email *
    //               </label>
    //               <input
    //                 type="email"
    //                 name="email"
    //                 placeholder="Enter your email"
    //                 value={formData.email}
    //                 onChange={handleInputChange}
    //                 required
    //                 className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <label className="block text-sm font-medium text-gray-700 mb-2">
    //               Support Category *
    //             </label>
    //             <select
    //               name="category"
    //               value={formData.category}
    //               onChange={handleInputChange}
    //               required
    //               className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
    //             >
    //               <option value="Technical Issue">Technical Issue</option>
    //               <option value="Billing">Billing</option>
    //               <option value="Account">Account</option>
    //               <option value="Feature Request">Feature Request</option>
    //               <option value="Other">Other</option>
    //             </select>
    //           </div>

    //           <div>
    //             <label className="block text-sm font-medium text-gray-700 mb-2">
    //               Message *
    //             </label>
    //             <textarea
    //               name="message"
    //               rows={6}
    //               value={formData.message}
    //               onChange={handleInputChange}
    //               required
    //               minLength={10}
    //               className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
    //               placeholder="Describe your issue or question... (minimum 10 characters)"
    //             />
    //             <div className="text-xs text-gray-500 mt-1">
    //               {formData.message.length}/5000 characters
    //             </div>
    //           </div>

    //           <div className="flex items-center">
    //             <input
    //               type="checkbox"
    //               name="includeActivity"
    //               checked={formData.includeActivity}
    //               onChange={handleInputChange}
    //               className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
    //             />
    //             <label className="ml-3 text-sm text-gray-600">
    //               Include Recent Account Activity
    //             </label>
    //           </div>

    //           <div className="flex justify-between items-center pt-4">
    //             <button
    //               type="button"
    //               onClick={handleSubmit}
    //               disabled={isSubmitting}
    //               className="bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
    //             >
    //               {isSubmitting ? (
    //                 <>
    //                   <Loader className="w-4 h-4 mr-2 animate-spin" />
    //                   Submitting...
    //                 </>
    //               ) : (
    //                 'Submit Support Request'
    //               )}
    //             </button>
    //             {/* <button
    //               type="button"
    //               className="text-purple-500 text-sm hover:text-purple-600 border-2 border-purple-600 p-2 rounded-lg"
    //             >
    //               Schedule a call
    //             </button> */}
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     {/* Footer Contact Info */}
    //     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
    //       <div className="flex items-center justify-center flex-col">
    //         <h3 className="font-medium text-gray-900 mb-2">Email Support</h3>
    //         <a
    //           href="mailto:support@sessionscribe.com"
    //           className="text-purple-600 hover:text-purple-700"
    //         >
    //           support@sessionscribe.com
    //         </a>
    //         <p className="text-gray-500 mt-1">Response within 24 hours</p>
    //       </div>
    //       <div className="flex items-center justify-center flex-col">
    //         <h3 className="font-medium text-gray-900 mb-2">Phone Number</h3>
    //         <a
    //           href="tel:+1609849279"
    //           className="text-purple-600 hover:text-purple-700"
    //         >
    //           +1(609) 849-7279
    //         </a>
    //       </div>
    //       <div className="flex items-center justify-center flex-col">
    //         <h3 className="font-medium text-gray-900 mb-2">Live chat</h3>
    //         <p className="text-gray-500">Available on dashboard</p>
    //         <p className="text-gray-500">24/7 Available</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <main className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-purple-700 mb-2">
            Help & Support
          </h1>
          <p className="text-gray-600 text-sm">
            Find the help you need with our comprehensive support documentation.
          </p>
        </header>

        {/* Tabs */}
        <nav className="mb-6" role="tablist" aria-label="Support sections">
          <div className="flex space-x-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("Instructions")}
              className={`pb-3 text-sm font-medium ${activeTab === "Instructions"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-700"
                }`}
              type="button"
              role="tab"
              aria-selected={activeTab === "Instructions"}
              aria-controls="instructions-panel"
              id="instructions-tab"
            >
              Instructions
            </button>
            <button
              onClick={() => setActiveTab("FAQs")}
              className={`pb-3 text-sm font-medium ${activeTab === "FAQs"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-700"
                }`}
              type="button"
              role="tab"
              aria-selected={activeTab === "FAQs"}
              aria-controls="faqs-panel"
              id="faqs-tab"
            >
              FAQs
            </button>
            <button
              onClick={() => setActiveTab("Contact")}
              className={`pb-3 text-sm font-medium ${activeTab === "Contact"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-700"
                }`}
              type="button"
              role="tab"
              aria-selected={activeTab === "Contact"}
              aria-controls="contact-panel"
              id="contact-tab"
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Instructions Tab */}
        {activeTab === "Instructions" && (
          <section
            id="instructions-panel"
            role="tabpanel"
            aria-labelledby="instructions-tab"
            aria-label="How-to instructions and guides"
          >
            <Instructions />
          </section>
        )}

        {/* FAQs Tab */}
        {activeTab === "FAQs" && (
          <section
            id="faqs-panel"
            role="tabpanel"
            aria-labelledby="faqs-tab"
            aria-label="Frequently asked questions"
          >
            <div className="mx-auto p-6 space-y-4">
              {faqItems.map((item) => (
                <article
                  key={item.id}
                  className={`rounded-lg transition-all duration-200 shadow-lg shadow-gray-400 ${expandedItem === item.id
                    ? "border-2 border-gray-400 bg-blue-50"
                    : "border border-gray-200 bg-white shadow-sm"
                    }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full cursor-pointer p-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                    type="button"
                    aria-expanded={expandedItem === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0" aria-hidden="true">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          className="text-purple-500"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                          <path
                            d="M9 12l2 2 4-4"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-base">
                        {item.question}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedItem === item.id ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {expandedItem === item.id && (
                    <div
                      className="px-4 pb-4"
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                    >
                      <div className="pl-7 pr-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Contact Form */}
        {activeTab === "Contact" && (
          <section
            id="contact-panel"
            role="tabpanel"
            aria-labelledby="contact-tab"
            aria-label="Contact support form"
          >
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-md shadow-gray-800">
              <header className="text-center mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Our Support Team
                </h2>
              </header>

              {/* Status Messages */}
              <div aria-live="polite" aria-label="Form submission status">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <aside className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center" role="alert">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" aria-hidden="true" />
                    <span className="text-green-700">
                      Support request submitted successfully! We'll get back to you within 24 hours.
                    </span>
                  </aside>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <aside className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center" role="alert">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3" aria-hidden="true" />
                    <span className="text-red-700">
                      Please fill in all required fields and ensure your message is at least 10 characters long.
                    </span>
                  </aside>
                )}
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} noValidate>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-describedby="email-help"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                      />
                      <div id="email-help" className="sr-only">
                        We'll use this email to respond to your support request
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-category" className="block text-sm font-medium text-gray-700 mb-2">
                      Support Category *
                    </label>
                    <select
                      id="contact-category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                    >
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Billing">Billing</option>
                      <option value="Account">Account</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      minLength={10}
                      maxLength={5000}
                      aria-required="true"
                      aria-describedby="message-help message-count"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Describe your issue or question... (minimum 10 characters)"
                    />
                    <div id="message-help" className="sr-only">
                      Please provide detailed information about your issue or question. Minimum 10 characters required.
                    </div>
                    <div id="message-count" className="text-xs text-gray-500 mt-1" aria-live="polite">
                      {formData.message.length}/5000 characters
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="include-activity"
                      name="includeActivity"
                      checked={formData.includeActivity}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="include-activity" className="ml-3 text-sm text-gray-600">
                      Include Recent Account Activity
                    </label>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      aria-describedby="submit-help"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                          <span>Submitting...</span>
                          <span className="sr-only">Please wait while we submit your support request</span>
                        </>
                      ) : (
                        'Submit Support Request'
                      )}
                    </button>
                    <div id="submit-help" className="sr-only">
                      {!formData.name || !formData.email || !formData.message || formData.message.length < 10
                        ? "Please fill in all required fields before submitting"
                        : "Click to submit your support request"}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* Footer Contact Info */}
        <footer className="mt-12" aria-labelledby="contact-info-heading">
          <h2 id="contact-info-heading" className="sr-only">Additional Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <address className="flex items-center justify-center flex-col not-italic">
              <h3 className="font-medium text-gray-900 mb-2">Email Support</h3>
              <a
                href="mailto:support@sessionscribe.com"
                className="text-purple-600 hover:text-purple-700"
                aria-label="Send email to support team"
              >
                support@sessionscribe.com
              </a>
              <p className="text-gray-500 mt-1">Response within 24 hours</p>
            </address>
            <address className="flex items-center justify-center flex-col not-italic">
              <h3 className="font-medium text-gray-900 mb-2">Phone Number</h3>
              <a
                href="tel:+16098497279"
                className="text-purple-600 hover:text-purple-700"
                aria-label="Call support team at +1 609 849 7279"
              >
                +1(609) 849-7279
              </a>
            </address>
            <div className="flex items-center justify-center flex-col">
              <h3 className="font-medium text-gray-900 mb-2">Live chat</h3>
              <p className="text-gray-500">Available on dashboard</p>
              <p className="text-gray-500">24/7 Available</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}