// import { Play, CheckCircle, Mic, Check } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const [formData, setFormData] = useState({
//     lastName: "",
//     firstName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Clear any previous messages when user starts typing
//     if (submitMessage.text) {
//       setSubmitMessage({ type: "", text: "" });
//     }
//   };

//   const handleSubmit = async () => {
//     // Basic validation
//     if (
//       !formData.firstName.trim() ||
//       !formData.lastName.trim() ||
//       !formData.email.trim() ||
//       !formData.phone.trim() ||
//       !formData.message.trim()
//     ) {
//       setSubmitMessage({ type: "error", text: "Please fill in all fields" });
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setSubmitMessage({
//         type: "error",
//         text: "Please enter a valid email address",
//       });
//       return;
//     }

//     try {
//       setIsSubmitting(true);
//       setSubmitMessage({ type: "", text: "" });

//       const response = await fetch("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/queries", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName: formData.firstName.trim(),
//           lastName: formData.lastName.trim(),
//           email: formData.email.trim(),
//           phoneNumber: formData.phone.trim(),
//           message: formData.message.trim(),
//         }),
//       });

//       const result = await response.json();

//       if (response.ok && result.success) {
//         setSubmitMessage({
//           type: "success",
//           text:
//             result.message ||
//             "Your message has been sent successfully! We'll get back to you soon.",
//         });

//         // Reset form on success
//         setFormData({
//           lastName: "",
//           firstName: "",
//           email: "",
//           phone: "",
//           message: "",
//         });
//       } else {
//         setSubmitMessage({
//           type: "error",
//           text:
//             result.error || "Failed to send your message. Please try again.",
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setSubmitMessage({
//         type: "error",
//         text: "Network error. Please check your connection and try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <>
//       {/* Add smooth scrolling CSS */}
//       <style jsx>{`
//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//       <div className="min-h-screen bg-gray-50 px-20">
//         {/* Header/Navigation */}
//         <header className="bg-white  sticky top-0 z-50">
//           <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
//             <div className="flex justify-between items-center">
//               {/* Logo - Optimized with proper sizing and alt text */}
//               <div className="flex-shrink-0">
//                 <a href="#">
//                   <img
//                     src="/assets/Logo.png"
//                     alt="Company Logo"
//                     className="h-14 w-auto object-contain " // Adjust height as needed
//                     width={128} // Optional: Explicit width for better CLS (Core Web Vitals)
//                     height={40} // Optional: Explicit height
//                   />
//                 </a>
//               </div>

//               {/* Navigation Links - Better semantics & hover effects */}
//               <div className="hidden md:flex items-center space-x-8">
//                 <a
//                   href="#"
//                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//                 <a
//                   onClick={() => scrollToSection("plans")}
//                   href="#plans"
//                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
//                 >
//                   Pricing
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
//                 >
//                   Contact
//                 </a>
//               </div>

//               {/* Right-side CTA - Enhanced button styling */}
//               <div className="flex items-center space-x-6">
//                 {!token && (
//                   <a
//                     href="/signin"
//                     className="text-gray-600 hover:text-purple-800 font-medium transition-colors"
//                   >
//                     Login
//                   </a>
//                 )}
//                 <button
//                   onClick={() => navigate("/home")}
//                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-3 py-2 rounded-2xl font-medium transition-colors cursor-pointer shadow-md hover:shadow-lg  text-sm"
//                 >
//                   Start For Free
//                 </button>
//               </div>
//             </div>
//           </nav>
//         </header>

//         {/* Hero Section */}
//         <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left side - Text content */}
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
//                 Your Smart AI Meeting Companion
//               </h1>

//               <p className="text-lg bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-relaxed">
//                 Focus on the conversation, not the notes. Session Scribe
//                 transforms meetings with real-time transcripts, intelligent
//                 summaries, key action points, and lets you ask questions to
//                 instantly retrieve insights from past sessions.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => navigate("/home")}
//                   className="px-6  border-2 border-purple-500 bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent cursor-pointer rounded-2xl hover:bg-purple-50 transition-color font-mediums"
//                 >
//                   Get Started
//                 </button>
//                 <button className="px-6 py-3 bg-gradient-to-r from-[#B674E1] to-[#533490] text-white rounded-lg  transition-colors">
//                   Demo Live
//                 </button>
//               </div>
//             </div>

//             {/* Right side - Illustration placeholder */}
//             <div className="relative">
//               <div className="w-full h-96  rounded-2xl flex items-center justify-center">
//                 <img
//                   src="/assets/Hero.png"
//                   alt="AI meeting companions illustration with purple robots around a table with Session Scribe logo"
//                   className="w-full h-full object-cover rounded-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Second Section - Who Are We */}
//         <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left side - Video placeholder */}
//             <div className="relative">
//               <div className="w-xl h-80 bg-gradient-to-r from-[#B674E1] to-[#533490] rounded-2xl flex items-center justify-center">
//                 <button className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
//                   <Play className="w-8 h-8  ml-1" fill="white" />
//                 </button>
//               </div>
//             </div>

//             {/* Right side - Content */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-4xl lg:text-5xl font-bold text-pink-400 mb-4">
//                   Who Are We
//                 </h2>
//                 <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-6">
//                   Your Meeting Intelligence Partner
//                 </h3>
//                 <p className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-relaxed mb-8">
//                   At Session Scribe, we're building the smartest AI agent to
//                   help teams capture, understand, and act on every
//                   conversation—effortlessly and accurately.
//                 </p>
//               </div>

//               {/* Feature list */}
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                       Human-Centric AI
//                     </h4>
//                     <p className="text-gray-600">
//                       Designed to enhance collaboration, not replace it.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                       Built for Teams
//                     </h4>
//                     <p className="text-gray-600">
//                       Trusted by professionals who value clarity and speed.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                       Privacy-First
//                     </h4>
//                     <p className="text-gray-600">
//                       Your meetings, your data—secure and under your control.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
//               Let Us scribe your Session
//             </h1>
//           </div>

//           {/* Live Audio Notes Section */}
//           <div className="flex flex-row gap-20 items-center mb-32">
//             {/* Left side - Content */}
//             <div className="space-y-8 w-[40%]">
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-black tracking-wide">
//                   LIVE AUDIO NOTES
//                 </h2>
//                 <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
//                   Listen Back to What Matters
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   Auto-generated audio notes highlight key moments in every
//                   meeting. Jump to decisions, quotes, or tasks in just one
//                   click. Smart indexing saves time and boosts clarity.
//                 </p>
//               </div>
//               <button className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-6 py-2 rounded-2xl font-medium transition-colors">
//                 Read More
//               </button>
//             </div>

//             {/* Right side - Audio Notes Interface Mockup */}
//             <div className="w-[55%]">
//               <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-6 shadow-lg flex gap-6 ">
//                 <div className="bg-white rounded-2xl p-4 shadow-sm w-[60%]">
//                   <div className="flex items-center justify-between mb-6">
//                     <h4 className="text-lg font-semibold text-purple-600">
//                       Audio Notes
//                     </h4>
//                   </div>

//                   {/* Chat-like interface */}
//                   <div className="space-y-4 mb-6">
//                     <div className="flex items-start space-x-3">
//                       <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                         C
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-sm font-medium text-gray-800">
//                           Charlie - 09:01
//                         </div>
//                         <div className="text-sm text-gray-600 mt-1">
//                           Alright, so we need to, but this way get a chance to
//                           review the system test data
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-3">
//                       <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                         L
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-sm font-medium text-gray-800">
//                           Lisa - 09:01
//                         </div>
//                         <div className="text-sm text-gray-600 mt-1">
//                           Yeah, like I think the recent direction looks good,
//                           especially how focus on AI function optimization. But
//                           I have a few thoughts on the conversation
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-3">
//                       <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                         C
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-sm font-medium text-gray-800">
//                           Charlie - 09:01
//                         </div>
//                         <div className="text-sm text-gray-600 mt-1">
//                           Let's hear it!
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-3">
//                       <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                         L
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-sm font-medium text-gray-800">
//                           Lisa - 09:02
//                         </div>
//                         <div className="text-sm text-gray-600 mt-1">
//                           Yeah like I think the recent direction looks good,
//                           especially how focus on AI function optimization. But
//                           I have a few thoughts on the conversation
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-3">
//                       <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                         C
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-sm font-medium text-gray-800">
//                           Charlie - 09:01
//                         </div>
//                         <div className="text-sm text-gray-600 mt-1">
//                           Let's hear it!
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Audio player controls */}
//                   <div className="flex items-center space-x-3 bg-pink-100 rounded-lg p-3">
//                     <button className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center">
//                       <div className="w-2 h-2 bg-white"></div>
//                       <div className="w-2 h-2 bg-white ml-1"></div>
//                     </button>
//                     <div className="flex-1 bg-pink-300 rounded-full h-1">
//                       <div className="bg-pink-500 h-1 rounded-full w-1/3"></div>
//                     </div>
//                     <div className="text-xs text-gray-600">0</div>
//                     <div className="flex space-x-1">
//                       <button className="w-4 h-4 text-gray-500">✏️</button>
//                       <button className="w-4 h-4 text-gray-500">💬</button>
//                       <button className="w-4 h-4 text-gray-500">📄</button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Side panel */}
//                 <div className=" bg-white rounded-xl p-4 shadow-lg w-[40%]">
//                   <div className="text-xs font-semibold text-purple-600 mb-2 text-center">
//                     🔖 Important Notes
//                   </div>
//                   <div className="bg-pink-500 text-white px-2 py-1  text-xs font-medium mb-3 text-center rounded-2xl">
//                     Audio Agenda
//                   </div>
//                   <div className="space-y-2 text-xs text-gray-600">
//                     <div>
//                       <div className="font-medium text-lg">Meeting Summary</div>
//                       <div>
//                         Discussion centered on finalizing the metrics and
//                         optimization strategies...
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-medium">Key Topics</div>
//                       <div>
//                         System performance benchmarks, AI function integration,
//                         team coordination...
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-medium">Action Items</div>
//                       <div className="text-green-600">
//                         ✓ Lisa compile feedback
//                       </div>
//                       <div>▶ Review system benchmarks</div>
//                       <div>▶ Schedule follow-up session next ...</div>
//                     </div>
//                     <div>
//                       <div className="font-medium">Key Decisions</div>
//                       <div>
//                         Focus on AI function optimization. Schedule team
//                         alignment session next...
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-medium">Outcome</div>
//                       <div>All key topics delivered on schedule...</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Live Summary Section */}
//           <div className="flex flex-row gap-20 items-center mb-32">
//             {/* Left side - Summary Interface Mockup */}
//             <div className="w-[55%]">
//               <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
//                 <div className="bg-white rounded-2xl p-6 shadow-sm">
//                   <div className="flex items-center justify-between mb-6">
//                     <h4 className="text-lg font-semibold text-purple-600">
//                       Audio Agenda
//                     </h4>
//                     <button className="bg-purple-500 text-white px-3 py-1 rounded text-sm">
//                       Delete
//                     </button>
//                   </div>

//                   {/* Audio controls */}
//                   <div className="flex items-center space-x-3 mb-4">
//                     <button className="w-6 h-6 text-gray-600">⏸️</button>
//                     <button className="w-6 h-6 text-gray-600">⏭️</button>
//                     <div className="text-sm text-gray-600">1x</div>
//                     <div className="flex-1"></div>
//                     <div className="flex space-x-1">
//                       <button className="w-4 h-4 text-gray-500">✏️</button>
//                       <button className="w-4 h-4 text-gray-500">💬</button>
//                       <button className="w-4 h-4 text-gray-500">📄</button>
//                     </div>
//                   </div>

//                   {/* Tab navigation */}
//                   <div className="flex mb-6">
//                     <button className="flex-1 bg-pink-200 text-purple-600 py-2 px-4 rounded-l-lg font-medium">
//                       Summary
//                     </button>
//                     <button className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-r-lg font-medium">
//                       Transcript
//                     </button>
//                   </div>

//                   {/* Summary content */}
//                   <div className="space-y-4 text-sm">
//                     <div>
//                       <div className="font-semibold text-gray-800 mb-2">
//                         Topic: Planning adjustments for the Q3 marketing
//                         rollout.
//                       </div>
//                     </div>

//                     <div className="space-y-3">
//                       <div>
//                         <div className="font-medium text-gray-800">
//                           • Lisa suggested tweaking the content calendar to
//                           prioritize influencer content before blog posts,
//                           aiming to boost early engagement.
//                         </div>
//                       </div>
//                       <div>
//                         <div className="font-medium text-gray-800">
//                           • Charlie agreed and confirmed feasibility with the
//                           creative team, pending budget finalization by Friday.
//                         </div>
//                       </div>
//                       <div>
//                         <div className="font-medium text-gray-800">
//                           • Marketing team confirmed they can accommodate the
//                           timeline changes.
//                         </div>
//                       </div>
//                       <div>
//                         <div className="font-medium text-gray-800">
//                           • Instagram captions from last quarter will be updated
//                           to reflect a more playful tone.
//                         </div>
//                       </div>
//                       <div>
//                         <div className="font-medium text-gray-800">
//                           • Charlie will update the Alpha Board to reflect the
//                           new rollout-first strategy.
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-6">
//                       <div className="font-semibold text-gray-800 mb-2">
//                         Outline
//                       </div>
//                       <div className="space-y-2">
//                         <div>
//                           <div className="font-medium text-gray-800">
//                             Campaign Brief Review
//                           </div>
//                           <div className="text-gray-600 ml-4">
//                             • Lisa outlined the timeline for the Q3 campaign
//                             brief
//                           </div>
//                           <div className="text-gray-600 ml-4">
//                             • Team discussed content focus
//                           </div>
//                         </div>
//                         <div>
//                           <div className="font-medium text-gray-800">
//                             Content Calendar Feedback
//                           </div>
//                           <div className="text-gray-600 ml-4">
//                             • Lisa proposes tweaking the dates, launch video
//                             content before blog posts
//                           </div>
//                           <div className="text-gray-600 ml-4">
//                             • Review drive early engagement and use momentum for
//                             blog traffic
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Purple circle with question mark */}
//                 {/* <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
//                 ?
//               </div> */}
//               </div>
//             </div>

//             {/* Right side - Content */}
//             <div className="space-y-8 w-[40%]">
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-black tracking-wide">
//                   LIVE SUMMARY
//                 </h2>
//                 <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
//                   Instant, Actionable Summaries
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   Get concise meeting summaries the moment your session ends.
//                   Key points, decisions, and next steps—automatically organized.
//                   No more manual wrap-ups or missed follow-ups.
//                 </p>
//               </div>
//               <button className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-6 py-3 rounded-lg font-medium transition-colors">
//                 Read More
//               </button>
//             </div>
//           </div>
//         </section>

//         <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20">
//           <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
//             {/* Left side - Content */}
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-black tracking-wide">
//                   AI INSIGHTS
//                 </h2>
//                 <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
//                   Ask Anything About Your Meetings
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   Need a quick recap or want to check what someone said? Just
//                   ask. Our AI answers your questions instantly based on
//                   everything it heard and noted.
//                 </p>
//               </div>
//               <button className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-6 py-3 rounded-lg font-medium transition-colors">
//                 Read More
//               </button>
//             </div>

//             {/* Right side - AI Insights Interface Mockup */}
//             <div className="relative">
//               <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
//                 <div className="bg-white rounded-2xl p-6 shadow-sm">
//                   <h4 className="text-lg font-semibold text-purple-600 mb-6">
//                     AI Insights
//                   </h4>

//                   {/* Analytics Charts */}
//                   <div className="grid grid-cols-2 gap-4 mb-6">
//                     {/* Screen Recording Analysis */}
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       <h5 className="text-sm font-medium text-gray-600 mb-3">
//                         Screen Recording analysis
//                       </h5>
//                       <div className="relative w-20 h-20 mx-auto">
//                         <svg
//                           className="w-20 h-20 transform -rotate-90"
//                           viewBox="0 0 36 36"
//                         >
//                           <path
//                             className="text-gray-200"
//                             stroke="currentColor"
//                             strokeWidth="3"
//                             fill="none"
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                           />
//                           <path
//                             className="text-purple-500"
//                             stroke="currentColor"
//                             strokeWidth="3"
//                             strokeDasharray="60, 100"
//                             strokeLinecap="round"
//                             fill="none"
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <span className="text-sm font-semibold text-gray-800">
//                             30.0
//                           </span>
//                         </div>
//                       </div>
//                       <div className="mt-3 space-y-1 text-xs">
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
//                             Talking: 16.5
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
//                             Listening: 6.9
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-pink-400 rounded-full mr-1"></div>
//                             Discussion: 16%
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
//                             Conclusion: 8%
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
//                             Others: 11%
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Audio Recording Analysis */}
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       <h5 className="text-sm font-medium text-gray-600 mb-3">
//                         Audio recording analysis
//                       </h5>
//                       <div className="relative w-20 h-20 mx-auto">
//                         <svg
//                           className="w-20 h-20 transform -rotate-90"
//                           viewBox="0 0 36 36"
//                         >
//                           <path
//                             className="text-gray-200"
//                             stroke="currentColor"
//                             strokeWidth="3"
//                             fill="none"
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                           />
//                           <path
//                             className="text-purple-500"
//                             stroke="currentColor"
//                             strokeWidth="3"
//                             strokeDasharray="70, 100"
//                             strokeLinecap="round"
//                             fill="none"
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <span className="text-sm font-semibold text-gray-800">
//                             30.0
//                           </span>
//                         </div>
//                       </div>
//                       <div className="mt-3 space-y-1 text-xs">
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
//                             Talking: 18.5
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
//                             Listening: 7.3
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-pink-400 rounded-full mr-1"></div>
//                             Discussion: 11%
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
//                             Engagement: 9%
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center">
//                             <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
//                             Others: 11%
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Recent Recordings Table */}
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center justify-between mb-4">
//                       <h5 className="text-sm font-semibold text-gray-700">
//                         Recent Recordings
//                       </h5>
//                       <button className="text-xs text-purple-600 hover:text-purple-800">
//                         View all
//                       </button>
//                     </div>

//                     <div className="space-y-2">
//                       {/* Table Header */}
//                       <div className="bg-purple-200 rounded-lg px-3 py-2 grid grid-cols-4 gap-4 text-xs font-medium text-purple-800">
//                         <span>Topic/Title</span>
//                         <span>Start Time</span>
//                         <span>End Time</span>
//                         <span>Speaker</span>
//                       </div>

//                       {/* Table Rows */}
//                       <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
//                         <span>5 min</span>
//                         <span>12:24 PM</span>
//                         <span>12:29 PM</span>
//                         <span>Sarah Johnson</span>
//                       </div>
//                       <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
//                         <span>6 min</span>
//                         <span>12:35 PM</span>
//                         <span>12:41 PM</span>
//                         <span>Sarah Johnson</span>
//                       </div>
//                       <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
//                         <span>8 min</span>
//                         <span>12:48 PM</span>
//                         <span>12:56 PM</span>
//                         <span>Sarah Johnson</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Live Transcript Section */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left side - Transcript Interface Mockup */}
//             <div className="relative">
//               <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
//                 <div className="bg-white rounded-2xl p-6 shadow-sm">
//                   <div className="flex items-center justify-between mb-6">
//                     <h4 className="text-lg font-semibold text-purple-600">
//                       Audio Agenda
//                     </h4>
//                     <button className="bg-purple-500 text-white px-3 py-1 rounded text-sm">
//                       Delete
//                     </button>
//                   </div>

//                   {/* Audio controls */}
//                   <div className="flex items-center space-x-3 mb-4">
//                     <button className="w-6 h-6 text-gray-600">⏸️</button>
//                     <button className="w-6 h-6 text-gray-600">⏭️</button>
//                     <div className="text-sm text-gray-600">1x</div>
//                     <div className="flex-1"></div>
//                     <div className="flex space-x-1">
//                       <button className="w-4 h-4 text-gray-500">✏️</button>
//                       <button className="w-4 h-4 text-gray-500">💬</button>
//                       <button className="w-4 h-4 text-gray-500">📄</button>
//                     </div>
//                   </div>

//                   {/* Tab navigation */}
//                   <div className="flex mb-6">
//                     <button className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-l-lg font-medium">
//                       Summary
//                     </button>
//                     <button className="flex-1 bg-pink-200 text-purple-600 py-2 px-4 rounded-r-lg font-medium">
//                       Transcript
//                     </button>
//                   </div>

//                   {/* Transcript content */}
//                   <div className="space-y-4">
//                     <div className="text-sm font-semibold text-gray-800 mb-4">
//                       Keywords
//                     </div>
//                     <div className="text-xs text-gray-600 mb-6">
//                       User retention, landing, visitor, bounce, analytics,
//                       reporting, channel, conversion, attribution, actions
//                       leads, KPI, navigation, ROI, clickthrough, dashboard,
//                       affiliate, influencer, post-click/post-boarding,
//                       activation, a
//                     </div>

//                     <div className="text-sm font-semibold text-gray-800 mb-4">
//                       Speakers
//                     </div>
//                     <div className="text-xs text-gray-600 mb-4">
//                       Lisa (73%), Charlie (27%)
//                     </div>

//                     {/* Conversation transcript */}
//                     <div className="space-y-3 text-sm">
//                       <div className="flex items-start space-x-3">
//                         <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
//                           C
//                         </div>
//                         <div className="flex-1">
//                           <div className="text-xs text-gray-500 mb-1">
//                             Charlie - 06:02
//                           </div>
//                           <div className="text-gray-700">
//                             Alright, let's get started. Lisa, did you get a
//                             chance to review the messaging brief for Q3?
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-start space-x-3">
//                         <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
//                           L
//                         </div>
//                         <div className="flex-1">
//                           <div className="text-xs text-gray-500 mb-1">
//                             Lisa - 06:06
//                           </div>
//                           <div className="text-gray-700">
//                             Yes, I did. I like the overall direction looks good,
//                             especially the focus on influencer partnerships. But
//                             I have a few thoughts on the tone and execution.
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-start space-x-3">
//                         <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
//                           C
//                         </div>
//                         <div className="flex-1">
//                           <div className="text-xs text-gray-500 mb-1">
//                             Charlie - 06:01
//                           </div>
//                           <div className="text-gray-700">Let's hear it.</div>
//                         </div>
//                       </div>

//                       <div className="flex items-start space-x-3">
//                         <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
//                           L
//                         </div>
//                         <div className="flex-1">
//                           <div className="text-xs text-gray-500 mb-1">
//                             Lisa - 06:15
//                           </div>
//                           <div className="text-gray-700">
//                             Well, I think we want to be thoughtful about how we
//                             position talking about the values content since like
//                             I think we should connect that and, like videois in
//                             there more conversational way and we can use that
//                             conversion to support the blog traffic.
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Purple circle with question mark */}
//                 <div className="absolute bottom-10 right-10 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
//                   ?
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Content */}
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h2 className="text-xl font-semibold text-black tracking-wide">
//                   LIVE TRANSCRIPT
//                 </h2>
//                 <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
//                   Every Word, Captured Clearly
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-lg">
//                   Accurate, real-time transcription of your meetings. Speaker
//                   labels, timestamps, and editable logs included. Perfect for
//                   revisiting details without replaying the recording.
//                 </p>
//               </div>
//               <button className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-6 py-3 rounded-lg font-medium transition-colors">
//                 Read More
//               </button>
//             </div>
//           </div>
//         </section>
//         <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight mb-6">
//               Take action — items
//             </h1>
//             <p className="text-lg bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent max-w-2xl mx-auto">
//               In every meeting, your AI agent listens, records, and follows
//               through—so you don't have to.
//             </p>
//           </div>
//           <img
//             src="/assets/take-action.png"
//             alt="take-action"
//             className=" w-[90%]  mx-auto"
//           />
//         </section>
//         <section
//           id="plans"
//           className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20"
//         >
//           <div className="text-center mb-20">
//             <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
//               Choose the Plan that's Right For You
//             </h1>
//           </div>

//           {/* Pricing Cards */}
//           <div className="grid md:grid-cols-3 gap-6 w-full mx-auto">
//             {/* Free Plan */}
//             <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col">
//               {/* Header Image */}
//               <div className="w-full h-52 rounded-xl mb-6 overflow-hidden">
//                 <div className="w-full h-full bg-gradient-to-br from-blue-200 via-orange-200 to-purple-200">
//                   <img
//                     src="/assets/Plan1.png"
//                     alt="Free Plan"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                   Free
//                 </h3>
//                 <p className="text-gray-500">USD $0/month</p>
//               </div>

//               <div className="space-y-3 mb-6 flex-grow">
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Limited access to Multiple Personalities (3 personalities)
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Basic Dynamic Suggestions
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Multi-platform Integration (limited to 1 device)
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Multilingual Support (3 languages)
//                   </span>
//                 </div>
//               </div>

//               <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
//                 Your Current Plan
//               </button>
//             </div>

//             {/* Plus Plan */}
//             <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col">
//               {/* Best Selling Badge */}

//               {/* Header Image */}
//               <div className="w-full h-52 rounded-xl mb-6 overflow-hidden">
//                 <div className="w-full h-full bg-gradient-to-br from-blue-200 via-orange-200 to-purple-200">
//                   <img
//                     src="/assets/Plan2.png"
//                     alt="Plus Plan"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                     Plus
//                   </h3>
//                   <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
//                     Best Selling
//                   </span>
//                 </div>
//                 <p className="text-gray-500">USD $20/month</p>
//               </div>

//               <div className="space-y-3 mb-6 flex-grow">
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Access to Multiple Personalities (10 personalities)
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Real-time Web References (unlimited queries)
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Multi-platform Integration (up to 5 devices)
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Multilingual Support (10 languages)
//                   </span>
//                 </div>
//               </div>

//               <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
//                 Upgrade to Plus
//               </button>
//             </div>

//             {/* Team Plan */}
//             <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col">
//               {/* Header Image */}
//               <div className="w-full h-52 rounded-xl mb-6 overflow-hidden">
//                 <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
//                   <img
//                     src="/assets/Plan3.png"
//                     alt="Team Plan"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
//                   Team
//                 </h3>
//                 <p className="text-gray-500">USD $40/month (per user)</p>
//               </div>

//               <div className="space-y-3 mb-6 flex-grow">
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Task Assignment & Follow-Ups
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Multilingual Support (15 languages)
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Advanced Feedback Mechanism
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-950 text-sm">
//                     Collaborative conversation features for team projects
//                   </span>
//                 </div>
//               </div>

//               <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
//                 Upgrade to Team
//               </button>
//             </div>
//           </div>
//         </section>
//         <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="bg-gradient-to-r from-[#B674E1] to-[#533490] rounded-3xl p-16 relative overflow-hidden">
//             {/* Robot hand illustration - left side */}
//             <div className="absolute left-8 top-8 bottom-8 w-48 opacity-90">
//               <div className=" w-full h-full">
//                 {/* Robot hand/arm representation */}
//                 <img
//                   src="/assets/robotHand.png"
//                   alt=""
//                   className="w-full h-full  "
//                 />
//               </div>
//             </div>

//             {/* Robot character - right side */}
//             <div className="absolute right-8 top-8 bottom-8 w-40 opacity-90">
//               <div className="relative w-full h-full">
//                 <img
//                   src="/assets/robot.png"
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             <div className="text-center relative z-10 max-w-4xl mx-auto">
//               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
//                 Your AI Meeting Agent can't wait to meet you
//               </h2>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button className="  text-white px-8 py-2 rounded-2xl font-medium border border-white transition-all duration-300 text-lg">
//                   Start For Free
//                 </button>
//                 <button className="bg-purple-600/20 backdrop-blur-sm text-white px-8 py-2 rounded-2xl font-medium border border-white/30 hover:bg-purple-600/30 transition-all duration-300 text-lg">
//                   Demo it Live
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="">
//             {/* Header Section */}
//             <div className="text-center mb-12">
//               <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight mb-6">
//                 Get in touch
//               </h1>
//               <p className="bg-gradient-to-r text-transparent from-[#B674E1] to-[#533490] bg-clip-text text-lg ">
//                 Reach out, and let's create a universe of possibilities
//                 together!
//               </p>
//             </div>

//             {/* Main Content Container */}
//             <div className="bg-white p-6 rounded-3xl shadow-lg overflow-hidden">
//               <div className="flex">
//                 {/* Left Side - Form */}
//                 <div className="w-1/2 p-5">
//                   <h2 className="text-3xl font-semibold text-purple-400 mb-4">
//                     Let's connect
//                   </h2>
//                   <p className="text-gray-600 mb-8 leading-relaxed">
//                     Have questions, feedback, or need assistance? Fill out the
//                     form below and our team will get back to you as soon as
//                     possible. We're here to help!
//                   </p>

//                   {/* Success/Error Message */}
//                   {submitMessage.text && (
//                     <div
//                       className={`p-4 rounded-lg mb-6 ${
//                         submitMessage.type === "success"
//                           ? "bg-green-100 text-green-700 border border-green-200"
//                           : "bg-red-100 text-red-700 border border-red-200"
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         {submitMessage.type === "success" ? (
//                           <CheckCircle className="w-5 h-5 mr-2" />
//                         ) : (
//                           <AlertCircle className="w-5 h-5 mr-2" />
//                         )}
//                         {submitMessage.text}
//                       </div>
//                     </div>
//                   )}

//                   <div className="space-y-6">
//                     {/* Name Fields Row */}
//                     <div className="flex gap-4">
//                       <div className="flex-1">
//                         <input
//                           type="text"
//                           name="firstName"
//                           placeholder="First Name"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <input
//                           type="text"
//                           name="lastName"
//                           placeholder="Last Name"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
//                         />
//                       </div>
//                     </div>

//                     {/* Email Field */}
//                     <div>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
//                       />
//                     </div>

//                     {/* Phone Field */}
//                     <div>
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Phone Number"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
//                       />
//                     </div>

//                     {/* Message Field */}
//                     <div>
//                       <textarea
//                         name="message"
//                         placeholder="Message"
//                         rows="4"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400 resize-none"
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                       onClick={handleSubmit}
//                       disabled={isSubmitting}
//                       className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-200 ${
//                         isSubmitting
//                           ? "bg-purple-400 cursor-not-allowed"
//                           : "bg-purple-600 hover:bg-purple-700"
//                       } text-white`}
//                     >
//                       {isSubmitting ? (
//                         <div className="flex items-center justify-center">
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                           Sending...
//                         </div>
//                       ) : (
//                         "Submit"
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Right Side - Robot Image Section */}
//                 <div className="w-1/2 flex items-center justify-center relative">
//                   <img
//                     src="/assets/60688e97f8d8ffd3ba243d16dfad0823c77c62f6.png"
//                     alt="Robot assistant"
//                     className="max-w-full max-h-full object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Footer */}
//       </div>
//       <footer className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white">
//         <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
//           <div className="grid md:grid-cols-5 gap-12">
//             {/* Logo */}
//             <div className="md:col-span-1">
//               <div className="flex items-center space-x-3 mb-6">
//                 <img src="/assets/footerLogo.png" alt="" className="h-20" />
//               </div>
//             </div>

//             {/* Resources */}
//             <div>
//               <h3 className="font-semibold text-xl mb-6">Resources</h3>
//               <div className="space-y-3 text-white/90">
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Updates
//                 </div>
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Help Center
//                 </div>
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Pricing
//                 </div>
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Contact
//                 </div>
//               </div>
//             </div>

//             {/* Pricing */}
//             <div>
//               <h3 className="font-semibold text-xl mb-6">Pricing</h3>
//               <div className="space-y-3 text-white/90">
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Basic Pricing Plan
//                 </div>
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Plus Pricing Plan
//                 </div>
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Teams Pricing Plan
//                 </div>
//               </div>
//             </div>

//             {/* Explore */}
//             <div>
//               <h3 className="font-semibold text-xl mb-6">Explore</h3>
//               <div className="space-y-3 text-white/90">
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   AI Personalities
//                 </div>
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   AI Agents
//                 </div>
//               </div>
//             </div>

//             {/* Company & Others */}
//             <div>
//               <h3 className="font-semibold text-xl mb-6">Company</h3>
//               <div className="space-y-3 text-white/90 mb-8">
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Privacy Policy
//                 </div>
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Terms and Conditions
//                 </div>
//               </div>

//               <h3 className="font-semibold text-xl mb-6">Others</h3>
//               <div className="space-y-3 text-white/90">
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   FAQs
//                 </div>
//                 <div className="hover:text-white cursor-pointer transition-colors">
//                   Support
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="border-t border-white/20 mt-16 pt-8">
//             {/* Copyright */}
//             <div className="flex flex-col sm:flex-row justify-between items-center">
//               <div className="text-white/80 text-lg mb-4 sm:mb-0">
//                 SessionScribe Copyright © 2025 • All rights reserved
//               </div>
//               <div className="flex space-x-4">
//                 <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer">
//                   Socials
//                 </div>
//                 <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer">
//                   Sessionscribe Community
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

import { Play, CheckCircle, Mic, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any previous messages when user starts typing
    if (submitMessage.text) {
      setSubmitMessage({ type: "", text: "" });
    }
  };

  const handleSubmit = async () => {
    // Basic validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setSubmitMessage({ type: "error", text: "Please fill in all fields" });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage({
        type: "error",
        text: "Please enter a valid email address",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitMessage({ type: "", text: "" });

      const response = await fetch(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/queries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim(),
            phoneNumber: formData.phone.trim(),
            message: formData.message.trim(),
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage({
          type: "success",
          text:
            result.message ||
            "Your message has been sent successfully! We'll get back to you soon.",
        });

        // Reset form on success
        setFormData({
          lastName: "",
          firstName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitMessage({
          type: "error",
          text:
            result.error || "Failed to send your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // return (
  //   <>
  //     {/* Add smooth scrolling CSS */}
  //     <style jsx>{`
  //       html {
  //         scroll-behavior: smooth;
  //       }
  //     `}</style>
  //     <div className="min-h-screen bg-gray-50 px-20">
  //       {/* Header/Navigation */}
  //       <motion.div
  //         custom={1}
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //         variants={{
  //           hidden: { opacity: 0, y: -50 },
  //           visible: (i) => ({
  //             opacity: 1,
  //             y: 0,
  //             transition: {
  //               delay: i * 0.3, // delay based on index
  //               duration: 0.6,
  //               ease: "easeOut",
  //             },
  //           }),
  //         }}
  //       >
  //         <header className="bg-white  sticky top-0 z-50">
  //           <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3">
  //             <div className="flex justify-between items-center">
  //               {/* Logo - Optimized with proper sizing and alt text */}
  //               <div className="flex-shrink-0">
  //                 <a href="#">
  //                   <img
  //                     src="/assets/Logo.png"
  //                     alt="Company Logo"
  //                     className="h-14 w-auto object-contain " // Adjust height as needed
  //                     width={128} // Optional: Explicit width for better CLS (Core Web Vitals)
  //                     height={40} // Optional: Explicit height
  //                   />
  //                 </a>
  //               </div>

  //               {/* Navigation Links - Better semantics & hover effects */}
  //               <div className="hidden md:flex items-center space-x-8">
  //                 <a
  //                   href="#"
  //                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
  //                   aria-current="page"
  //                 >
  //                   Home
  //                 </a>
  //                 <a
  //                   href="#about"
  //                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
  //                 >
  //                   About
  //                 </a>
  //                 <a
  //                   href="#Features"
  //                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
  //                 >
  //                   Features
  //                 </a>
  //                 <a
  //                   onClick={() => scrollToSection("plans")}
  //                   href="#plans"
  //                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
  //                 >
  //                   Pricing
  //                 </a>
  //                 <a
  //                   href="#contact"
  //                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
  //                 >
  //                   Contact
  //                 </a>
  //               </div>

  //               {/* Right-side CTA - Enhanced button styling */}
  //               <div className="flex items-center space-x-6">
  //                 {!token && (
  //                   <a
  //                     href="/signin"
  //                     className="text-gray-600 hover:text-purple-800 font-medium transition-colors"
  //                   >
  //                     Login
  //                   </a>
  //                 )}
  //                 <button
  //                   onClick={() => navigate("/home")}
  //                   className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-3 py-2 rounded-2xl font-medium transition-colors cursor-pointer shadow-md hover:shadow-lg  text-sm"
  //                 >
  //                   Start For Free
  //                 </button>
  //               </div>
  //             </div>
  //           </nav>
  //         </header>
  //       </motion.div>

  //       {/* Hero Section */}
  //       <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
  //         <div className="grid lg:grid-cols-2 gap-12 items-center">
  //           {/* Left side - Text content */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: -50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="space-y-8"
  //           >
  //             <h1 className="text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
  //               Your Smart AI Meeting Companion
  //             </h1>

  //             <p className="text-lg bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-relaxed">
  //               Focus on the conversation, not the notes. Session Scribe
  //               transforms meetings with real-time transcripts, intelligent
  //               summaries, key action points, and lets you ask questions to
  //               instantly retrieve insights from past sessions.
  //             </p>

  //             <div className="flex flex-col sm:flex-row gap-4">
  //               <button
  //                 onClick={() => navigate("/home")}
  //                 className="px-6  border-2 border-purple-500 bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent cursor-pointer rounded-2xl hover:bg-purple-50 transition-color font-mediums"
  //               >
  //                 Get Started
  //               </button>
  //               <button
  //                 onClick={() => navigate("/learn-more")}
  //                 className="px-6 py-3 bg-gradient-to-r from-[#B674E1] to-[#533490] text-white cursor-pointer rounded-lg  transition-colors"
  //               >
  //                 Learn More
  //               </button>
  //             </div>
  //           </motion.div>

  //           {/* Right side - Illustration placeholder */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="relative"
  //           >
  //             <div className="w-full h-96  rounded-2xl flex items-center justify-center">
  //               <img
  //                 src="/assets/Hero.png"
  //                 alt="AI meeting companions illustration with purple robots around a table with Session Scribe logo"
  //                 className="w-full h-full object-cover rounded-2xl"
  //               />
  //             </div>
  //           </motion.div>
  //         </div>
  //       </section>

  //       {/* Second Section - Who Are We */}
  //       <AboutSection />

  //       <section
  //         className="w-full mx-auto px-4 scroll-mt-20 sm:px-6 lg:px-8 py-10"
  //         id="Features"
  //       >
  //         <div className="text-center mb-16">
  //           <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
  //             Let us Scribe your Session
  //           </h1>
  //         </div>

  //         {/* Live Audio Notes Section */}
  //         <div className="flex flex-row gap-20 items-center mb-32">
  //           {/* Left side - Content */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: -50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="space-y-8 w-[40%]"
  //           >
  //             <div className="space-y-4">
  //               <h2 className="text-xl font-semibold text-black tracking-wide">
  //                 AUDIO NOTES
  //               </h2>
  //               <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
  //                 Listen Back to What Matters
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed text-lg">
  //                 Auto-generated audio notes highlight key moments in every
  //                 meeting. Jump to decisions, quotes, or tasks in just one
  //                 click. Smart indexing saves time and boosts clarity.
  //               </p>
  //             </div>
  //             {/* <button className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-6 py-2 rounded-2xl font-medium transition-colors">
  //               Read More
  //             </button> */}
  //           </motion.div>

  //           {/* Right side - Audio Notes Interface Mockup */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="w-[55%]"
  //           >
  //             <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-6 shadow-lg flex gap-6 ">
  //               <div className="bg-white rounded-2xl p-4 shadow-sm w-[60%]">
  //                 <div className="flex items-center justify-between mb-6">
  //                   <h4 className="text-lg font-semibold text-purple-600">
  //                     Audio Notes
  //                   </h4>
  //                 </div>

  //                 {/* Chat-like interface */}
  //                 <div className="space-y-4 mb-6">
  //                   <div className="flex items-start space-x-3">
  //                     <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
  //                       C
  //                     </div>
  //                     <div className="flex-1">
  //                       <div className="text-sm font-medium text-gray-800">
  //                         Charlie - 09:01
  //                       </div>
  //                       <div className="text-sm text-gray-600 mt-1">
  //                         Alright, so we need to, but this way get a chance to
  //                         review the system test data
  //                       </div>
  //                     </div>
  //                   </div>

  //                   <div className="flex items-start space-x-3">
  //                     <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
  //                       L
  //                     </div>
  //                     <div className="flex-1">
  //                       <div className="text-sm font-medium text-gray-800">
  //                         Lisa - 09:01
  //                       </div>
  //                       <div className="text-sm text-gray-600 mt-1">
  //                         Yeah, like I think the recent direction looks good,
  //                         especially how focus on AI function optimization. But
  //                         I have a few thoughts on the conversation
  //                       </div>
  //                     </div>
  //                   </div>

  //                   <div className="flex items-start space-x-3">
  //                     <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
  //                       C
  //                     </div>
  //                     <div className="flex-1">
  //                       <div className="text-sm font-medium text-gray-800">
  //                         Charlie - 09:01
  //                       </div>
  //                       <div className="text-sm text-gray-600 mt-1">
  //                         Let's hear it!
  //                       </div>
  //                     </div>
  //                   </div>

  //                   <div className="flex items-start space-x-3">
  //                     <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
  //                       L
  //                     </div>
  //                     <div className="flex-1">
  //                       <div className="text-sm font-medium text-gray-800">
  //                         Lisa - 09:02
  //                       </div>
  //                       <div className="text-sm text-gray-600 mt-1">
  //                         Yeah like I think the recent direction looks good,
  //                         especially how focus on AI function optimization. But
  //                         I have a few thoughts on the conversation
  //                       </div>
  //                     </div>
  //                   </div>

  //                   <div className="flex items-start space-x-3">
  //                     <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
  //                       C
  //                     </div>
  //                     <div className="flex-1">
  //                       <div className="text-sm font-medium text-gray-800">
  //                         Charlie - 09:01
  //                       </div>
  //                       <div className="text-sm text-gray-600 mt-1">
  //                         Let's hear it!
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 {/* Audio player controls */}
  //                 <div className="flex items-center space-x-3 bg-pink-100 rounded-lg p-3">
  //                   <button className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center">
  //                     <div className="w-2 h-2 bg-white"></div>
  //                     <div className="w-2 h-2 bg-white ml-1"></div>
  //                   </button>
  //                   <div className="flex-1 bg-pink-300 rounded-full h-1">
  //                     <div className="bg-pink-500 h-1 rounded-full w-1/3"></div>
  //                   </div>
  //                   <div className="text-xs text-gray-600">0</div>
  //                   <div className="flex space-x-1">
  //                     <button className="w-4 h-4 text-gray-500">✏️</button>
  //                     <button className="w-4 h-4 text-gray-500">💬</button>
  //                     <button className="w-4 h-4 text-gray-500">📄</button>
  //                   </div>
  //                 </div>
  //               </div>

  //               {/* Side panel */}
  //               <div className=" bg-white rounded-xl p-4 shadow-lg w-[40%]">
  //                 <div className="text-xs font-semibold text-purple-600 mb-2 text-center">
  //                   🔖 Important Notes
  //                 </div>
  //                 <div className="bg-pink-500 text-white px-2 py-1  text-xs font-medium mb-3 text-center rounded-2xl">
  //                   Audio Agenda
  //                 </div>
  //                 <div className="space-y-2 text-xs text-gray-600">
  //                   <div>
  //                     <div className="font-medium text-lg">Meeting Summary</div>
  //                     <div>
  //                       Discussion centered on finalizing the metrics and
  //                       optimization strategies...
  //                     </div>
  //                   </div>
  //                   <div>
  //                     <div className="font-medium">Key Topics</div>
  //                     <div>
  //                       System performance benchmarks, AI function integration,
  //                       team coordination...
  //                     </div>
  //                   </div>
  //                   <div>
  //                     <div className="font-medium">Action Items</div>
  //                     <div className="text-green-600">
  //                       ✓ Lisa compile feedback
  //                     </div>
  //                     <div>▶ Review system benchmarks</div>
  //                     <div>▶ Schedule follow-up session next ...</div>
  //                   </div>
  //                   <div>
  //                     <div className="font-medium">Key Decisions</div>
  //                     <div>
  //                       Focus on AI function optimization. Schedule team
  //                       alignment session next...
  //                     </div>
  //                   </div>
  //                   <div>
  //                     <div className="font-medium">Outcome</div>
  //                     <div>All key topics delivered on schedule...</div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </motion.div>
  //         </div>

  //         {/* Live Summary Section */}
  //         <div className="flex flex-row gap-20 items-center mb-32">
  //           {/* Left side - Summary Interface Mockup */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: -50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="w-[55%]"
  //           >
  //             <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
  //               <div className="bg-white rounded-2xl p-6 shadow-sm">
  //                 <div className="flex items-center justify-between mb-6">
  //                   <h4 className="text-lg font-semibold text-purple-600">
  //                     Audio Agenda
  //                   </h4>
  //                   <button className="bg-purple-500 text-white px-3 py-1 rounded text-sm">
  //                     Delete
  //                   </button>
  //                 </div>

  //                 {/* Audio controls */}
  //                 <div className="flex items-center space-x-3 mb-4">
  //                   <button className="w-6 h-6 text-gray-600">⏸️</button>
  //                   <button className="w-6 h-6 text-gray-600">⏭️</button>
  //                   <div className="text-sm text-gray-600">1x</div>
  //                   <div className="flex-1"></div>
  //                   <div className="flex space-x-1">
  //                     <button className="w-4 h-4 text-gray-500">✏️</button>
  //                     <button className="w-4 h-4 text-gray-500">💬</button>
  //                     <button className="w-4 h-4 text-gray-500">📄</button>
  //                   </div>
  //                 </div>

  //                 {/* Tab navigation */}
  //                 <div className="flex mb-6">
  //                   <button className="flex-1 bg-pink-200 text-purple-600 py-2 px-4 rounded-l-lg font-medium">
  //                     Summary
  //                   </button>
  //                   <button className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-r-lg font-medium">
  //                     Transcript
  //                   </button>
  //                 </div>

  //                 {/* Summary content */}
  //                 <div className="space-y-4 text-sm">
  //                   <div>
  //                     <div className="font-semibold text-gray-800 mb-2">
  //                       Topic: Planning adjustments for the Q3 marketing
  //                       rollout.
  //                     </div>
  //                   </div>

  //                   <div className="space-y-3">
  //                     <div>
  //                       <div className="font-medium text-gray-800">
  //                         • Lisa suggested tweaking the content calendar to
  //                         prioritize influencer content before blog posts,
  //                         aiming to boost early engagement.
  //                       </div>
  //                     </div>
  //                     <div>
  //                       <div className="font-medium text-gray-800">
  //                         • Charlie agreed and confirmed feasibility with the
  //                         creative team, pending budget finalization by Friday.
  //                       </div>
  //                     </div>
  //                     <div>
  //                       <div className="font-medium text-gray-800">
  //                         • Marketing team confirmed they can accommodate the
  //                         timeline changes.
  //                       </div>
  //                     </div>
  //                     <div>
  //                       <div className="font-medium text-gray-800">
  //                         • Instagram captions from last quarter will be updated
  //                         to reflect a more playful tone.
  //                       </div>
  //                     </div>
  //                     <div>
  //                       <div className="font-medium text-gray-800">
  //                         • Charlie will update the Alpha Board to reflect the
  //                         new rollout-first strategy.
  //                       </div>
  //                     </div>
  //                   </div>

  //                   <div className="mt-6">
  //                     <div className="font-semibold text-gray-800 mb-2">
  //                       Outline
  //                     </div>
  //                     <div className="space-y-2">
  //                       <div>
  //                         <div className="font-medium text-gray-800">
  //                           Campaign Brief Review
  //                         </div>
  //                         <div className="text-gray-600 ml-4">
  //                           • Lisa outlined the timeline for the Q3 campaign
  //                           brief
  //                         </div>
  //                         <div className="text-gray-600 ml-4">
  //                           • Team discussed content focus
  //                         </div>
  //                       </div>
  //                       <div>
  //                         <div className="font-medium text-gray-800">
  //                           Content Calendar Feedback
  //                         </div>
  //                         <div className="text-gray-600 ml-4">
  //                           • Lisa proposes tweaking the dates, launch video
  //                           content before blog posts
  //                         </div>
  //                         <div className="text-gray-600 ml-4">
  //                           • Review drive early engagement and use momentum for
  //                           blog traffic
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>

  //               {/* Purple circle with question mark */}
  //               {/* <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
  //               ?
  //             </div> */}
  //             </div>
  //           </motion.div>

  //           {/* Right side - Content */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="space-y-8 w-[40%]"
  //           >
  //             <div className="space-y-4">
  //               <h2 className="text-xl font-semibold text-black tracking-wide">
  //                 LIVE SUMMARY
  //               </h2>
  //               <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
  //                 Instant, Actionable Summaries
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed text-lg">
  //                 Get concise meeting summaries the moment your session ends.
  //                 Key points, decisions, and next steps—automatically organized.
  //                 No more manual wrap-ups or missed follow-ups.
  //               </p>
  //             </div>
  //             {/* <button className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-6 py-3 rounded-lg font-medium transition-colors">
  //               Read More
  //             </button> */}
  //           </motion.div>
  //         </div>
  //       </section>

  //       <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20">
  //         {/* Live Transcript Section */}
  //         <div className="grid lg:grid-cols-2 gap-16 items-center">
  //           {/* Right side - Content */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: -50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="space-y-8"
  //           >
  //             <div className="space-y-4">
  //               <h2 className="text-xl font-semibold text-black tracking-wide">
  //                 LIVE TRANSCRIPT
  //               </h2>
  //               <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
  //                 Every Word, Captured Clearly
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed text-lg">
  //                 Accurate, real-time transcription of your meetings. Speaker
  //                 labels, timestamps, and editable logs included. Perfect for
  //                 revisiting details without replaying the recording.
  //               </p>
  //             </div>
  //             {/* <button className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-6 py-3 rounded-lg font-medium transition-colors">
  //               Read More
  //             </button> */}
  //           </motion.div>

  //           {/* Left side - Transcript Interface Mockup */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="relative"
  //           >
  //             <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
  //               <div className="bg-white rounded-2xl p-6 shadow-sm">
  //                 <div className="flex items-center justify-between mb-6">
  //                   <h4 className="text-lg font-semibold text-purple-600">
  //                     Audio Agenda
  //                   </h4>
  //                   <button className="bg-purple-500 text-white px-3 py-1 rounded text-sm">
  //                     Delete
  //                   </button>
  //                 </div>

  //                 {/* Audio controls */}
  //                 <div className="flex items-center space-x-3 mb-4">
  //                   <button className="w-6 h-6 text-gray-600">⏸️</button>
  //                   <button className="w-6 h-6 text-gray-600">⏭️</button>
  //                   <div className="text-sm text-gray-600">1x</div>
  //                   <div className="flex-1"></div>
  //                   <div className="flex space-x-1">
  //                     <button className="w-4 h-4 text-gray-500">✏️</button>
  //                     <button className="w-4 h-4 text-gray-500">💬</button>
  //                     <button className="w-4 h-4 text-gray-500">📄</button>
  //                   </div>
  //                 </div>

  //                 {/* Tab navigation */}
  //                 <div className="flex mb-6">
  //                   <button className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-l-lg font-medium">
  //                     Summary
  //                   </button>
  //                   <button className="flex-1 bg-pink-200 text-purple-600 py-2 px-4 rounded-r-lg font-medium">
  //                     Transcript
  //                   </button>
  //                 </div>

  //                 {/* Transcript content */}
  //                 <div className="space-y-4">
  //                   <div className="text-sm font-semibold text-gray-800 mb-4">
  //                     Keywords
  //                   </div>
  //                   <div className="text-xs text-gray-600 mb-6">
  //                     User retention, landing, visitor, bounce, analytics,
  //                     reporting, channel, conversion, attribution, actions
  //                     leads, KPI, navigation, ROI, clickthrough, dashboard,
  //                     affiliate, influencer, post-click/post-boarding,
  //                     activation, a
  //                   </div>

  //                   <div className="text-sm font-semibold text-gray-800 mb-4">
  //                     Speakers
  //                   </div>
  //                   <div className="text-xs text-gray-600 mb-4">
  //                     Lisa (73%), Charlie (27%)
  //                   </div>

  //                   {/* Conversation transcript */}
  //                   <div className="space-y-3 text-sm">
  //                     <div className="flex items-start space-x-3">
  //                       <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
  //                         C
  //                       </div>
  //                       <div className="flex-1">
  //                         <div className="text-xs text-gray-500 mb-1">
  //                           Charlie - 06:02
  //                         </div>
  //                         <div className="text-gray-700">
  //                           Alright, let's get started. Lisa, did you get a
  //                           chance to review the messaging brief for Q3?
  //                         </div>
  //                       </div>
  //                     </div>

  //                     <div className="flex items-start space-x-3">
  //                       <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
  //                         L
  //                       </div>
  //                       <div className="flex-1">
  //                         <div className="text-xs text-gray-500 mb-1">
  //                           Lisa - 06:06
  //                         </div>
  //                         <div className="text-gray-700">
  //                           Yes, I did. I like the overall direction looks good,
  //                           especially the focus on influencer partnerships. But
  //                           I have a few thoughts on the tone and execution.
  //                         </div>
  //                       </div>
  //                     </div>

  //                     <div className="flex items-start space-x-3">
  //                       <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
  //                         C
  //                       </div>
  //                       <div className="flex-1">
  //                         <div className="text-xs text-gray-500 mb-1">
  //                           Charlie - 06:01
  //                         </div>
  //                         <div className="text-gray-700">Let's hear it.</div>
  //                       </div>
  //                     </div>

  //                     <div className="flex items-start space-x-3">
  //                       <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
  //                         L
  //                       </div>
  //                       <div className="flex-1">
  //                         <div className="text-xs text-gray-500 mb-1">
  //                           Lisa - 06:15
  //                         </div>
  //                         <div className="text-gray-700">
  //                           Well, I think we want to be thoughtful about how we
  //                           position talking about the values content since like
  //                           I think we should connect that and, like videois in
  //                           there more conversational way and we can use that
  //                           conversion to support the blog traffic.
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>

  //               {/* Purple circle with question mark */}
  //               <div className="absolute bottom-10 right-10 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
  //                 ?
  //               </div>
  //             </div>
  //           </motion.div>
  //         </div>
  //         <div className="grid mt-20 lg:grid-cols-2 gap-16 items-center mb-32">
  //           {/* Right side - AI Insights Interface Mockup */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: -50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="relative"
  //           >
  //             <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
  //               <div className="bg-white rounded-2xl p-6 shadow-sm">
  //                 <h4 className="text-lg font-semibold text-purple-600 mb-6">
  //                   AI Insights
  //                 </h4>

  //                 {/* Analytics Charts */}
  //                 <div className="grid grid-cols-2 gap-4 mb-6">
  //                   {/* Screen Recording Analysis */}
  //                   <div className="bg-gray-50 rounded-lg p-4">
  //                     <h5 className="text-sm font-medium text-gray-600 mb-3">
  //                       Screen Recording analysis
  //                     </h5>
  //                     <div className="relative w-20 h-20 mx-auto">
  //                       <svg
  //                         className="w-20 h-20 transform -rotate-90"
  //                         viewBox="0 0 36 36"
  //                       >
  //                         <path
  //                           className="text-gray-200"
  //                           stroke="currentColor"
  //                           strokeWidth="3"
  //                           fill="none"
  //                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
  //                         />
  //                         <path
  //                           className="text-purple-500"
  //                           stroke="currentColor"
  //                           strokeWidth="3"
  //                           strokeDasharray="60, 100"
  //                           strokeLinecap="round"
  //                           fill="none"
  //                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
  //                         />
  //                       </svg>
  //                       <div className="absolute inset-0 flex items-center justify-center">
  //                         <span className="text-sm font-semibold text-gray-800">
  //                           30.0
  //                         </span>
  //                       </div>
  //                     </div>
  //                     <div className="mt-3 space-y-1 text-xs">
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
  //                           Talking: 16.5
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
  //                           Listening: 6.9
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-pink-400 rounded-full mr-1"></div>
  //                           Discussion: 16%
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
  //                           Conclusion: 8%
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
  //                           Others: 11%
  //                         </span>
  //                       </div>
  //                     </div>
  //                   </div>

  //                   {/* Audio Recording Analysis */}
  //                   <div className="bg-gray-50 rounded-lg p-4">
  //                     <h5 className="text-sm font-medium text-gray-600 mb-3">
  //                       Audio recording analysis
  //                     </h5>
  //                     <div className="relative w-20 h-20 mx-auto">
  //                       <svg
  //                         className="w-20 h-20 transform -rotate-90"
  //                         viewBox="0 0 36 36"
  //                       >
  //                         <path
  //                           className="text-gray-200"
  //                           stroke="currentColor"
  //                           strokeWidth="3"
  //                           fill="none"
  //                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
  //                         />
  //                         <path
  //                           className="text-purple-500"
  //                           stroke="currentColor"
  //                           strokeWidth="3"
  //                           strokeDasharray="70, 100"
  //                           strokeLinecap="round"
  //                           fill="none"
  //                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
  //                         />
  //                       </svg>
  //                       <div className="absolute inset-0 flex items-center justify-center">
  //                         <span className="text-sm font-semibold text-gray-800">
  //                           30.0
  //                         </span>
  //                       </div>
  //                     </div>
  //                     <div className="mt-3 space-y-1 text-xs">
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
  //                           Talking: 18.5
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
  //                           Listening: 7.3
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-pink-400 rounded-full mr-1"></div>
  //                           Discussion: 11%
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
  //                           Engagement: 9%
  //                         </span>
  //                       </div>
  //                       <div className="flex items-center justify-between">
  //                         <span className="flex items-center">
  //                           <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
  //                           Others: 11%
  //                         </span>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 {/* Recent Recordings Table */}
  //                 <div className="bg-gray-50 rounded-lg p-4">
  //                   <div className="flex items-center justify-between mb-4">
  //                     <h5 className="text-sm font-semibold text-gray-700">
  //                       Recent Recordings
  //                     </h5>
  //                     <button className="text-xs text-purple-600 hover:text-purple-800">
  //                       View all
  //                     </button>
  //                   </div>

  //                   <div className="space-y-2">
  //                     {/* Table Header */}
  //                     <div className="bg-purple-200 rounded-lg px-3 py-2 grid grid-cols-4 gap-4 text-xs font-medium text-purple-800">
  //                       <span>Topic/Title</span>
  //                       <span>Start Time</span>
  //                       <span>End Time</span>
  //                       <span>Speaker</span>
  //                     </div>

  //                     {/* Table Rows */}
  //                     <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
  //                       <span>5 min</span>
  //                       <span>12:24 PM</span>
  //                       <span>12:29 PM</span>
  //                       <span>Sarah Johnson</span>
  //                     </div>
  //                     <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
  //                       <span>6 min</span>
  //                       <span>12:35 PM</span>
  //                       <span>12:41 PM</span>
  //                       <span>Sarah Johnson</span>
  //                     </div>
  //                     <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
  //                       <span>8 min</span>
  //                       <span>12:48 PM</span>
  //                       <span>12:56 PM</span>
  //                       <span>Sarah Johnson</span>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </motion.div>

  //           {/* Left side - Content */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, x: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 x: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="space-y-8"
  //           >
  //             <div className="space-y-4">
  //               <h2 className="text-xl font-semibold text-black tracking-wide">
  //                 AI INSIGHTS
  //               </h2>
  //               <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
  //                 Ask Anything About Your Meetings
  //               </h3>
  //               <p className="text-gray-600 leading-relaxed text-lg">
  //                 Need a quick recap or want to check what someone said? Just
  //                 ask. Our AI answers your questions instantly based on
  //                 everything it heard and noted.
  //               </p>
  //             </div>
  //             {/* <button className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-6 py-3 rounded-lg font-medium transition-colors">
  //               Read More
  //             </button> */}
  //           </motion.div>
  //         </div>
  //       </section>
  //       <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
  //         <motion.div
  //           custom={1}
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //           variants={{
  //             hidden: { opacity: 0, y: 50 },
  //             visible: (i) => ({
  //               opacity: 1,
  //               y: 0,
  //               transition: {
  //                 delay: i * 0.3, // delay based on index
  //                 duration: 0.6,
  //                 ease: "easeOut",
  //               },
  //             }),
  //           }}
  //           className="text-center mb-16"
  //         >
  //           <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight mb-6">
  //             Take action — items
  //           </h1>
  //           <p className="text-lg bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent max-w-2xl mx-auto">
  //             In every meeting, your AI agent listens, records, and follows
  //             through—so you don't have to.
  //           </p>
  //         </motion.div>
  //         <motion.div
  //           custom={1}
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //           variants={{
  //             hidden: { opacity: 0, y: 50 },
  //             visible: (i) => ({
  //               opacity: 1,
  //               y: 0,
  //               transition: {
  //                 delay: i * 0.5, // delay based on index
  //                 duration: 0.6,
  //                 ease: "easeOut",
  //               },
  //             }),
  //           }}
  //         >
  //           <img
  //             src="/assets/take-action.png"
  //             alt="take-action"
  //             className=" w-[90%]  mx-auto"
  //           />
  //         </motion.div>
  //       </section>
  //       <section
  //         id="plans"
  //         className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20"
  //       >
  //         <motion.div
  //           custom={1}
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //           variants={{
  //             hidden: { opacity: 0, y: -50 },
  //             visible: (i) => ({
  //               opacity: 1,
  //               y: 0,
  //               transition: {
  //                 delay: i * 0.3, // delay based on index
  //                 duration: 0.6,
  //                 ease: "easeOut",
  //               },
  //             }),
  //           }}
  //           className="text-center mb-20"
  //         >
  //           <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
  //             Choose the Plan that's Right For You
  //           </h1>
  //         </motion.div>

  //         {/* Pricing Cards */}
  //         <div className="grid md:grid-cols-3 gap-6 w-full mx-auto">
  //           {/* Free Plan */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, y: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col"
  //           >
  //             {/* Header Image */}
  //             <div className="w-full h-52 rounded-xl mb-6 overflow-hidden">
  //               <div className="w-full h-full bg-gradient-to-br from-blue-200 via-orange-200 to-purple-200">
  //                 <img
  //                   src="/assets/Plan1.png"
  //                   alt="Free Plan"
  //                   className="w-full h-full object-cover"
  //                 />
  //               </div>
  //             </div>

  //             <div className="mb-6">
  //               <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
  //                 Free
  //               </h3>
  //               <p className="text-gray-500">USD $0/month</p>
  //             </div>

  //             <div className="space-y-3 mb-6 flex-grow">
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Limited access to Multiple Personalities (3 personalities)
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Basic Dynamic Suggestions
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Multi-platform Integration (limited to 1 device)
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Multilingual Support (3 languages)
  //                 </span>
  //               </div>
  //             </div>

  //             <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
  //               Your Current Plan
  //             </button>
  //           </motion.div>

  //           {/* Plus Plan */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, y: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: {
  //                   delay: i * 0.6, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col"
  //           >
  //             {/* Best Selling Badge */}

  //             {/* Header Image */}
  //             <div className="w-full h-52 rounded-xl mb-6 overflow-hidden">
  //               <div className="w-full h-full bg-gradient-to-br from-blue-200 via-orange-200 to-purple-200">
  //                 <img
  //                   src="/assets/Plan2.png"
  //                   alt="Plus Plan"
  //                   className="w-full h-full object-cover"
  //                 />
  //               </div>
  //             </div>

  //             <div className="mb-6">
  //               <div className="flex items-center justify-between">
  //                 <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
  //                   Plus
  //                 </h3>
  //                 <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
  //                   Best Selling
  //                 </span>
  //               </div>
  //               <p className="text-gray-500">USD $20/month</p>
  //             </div>

  //             <div className="space-y-3 mb-6 flex-grow">
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Access to Multiple Personalities (10 personalities)
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Real-time Web References (unlimited queries)
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Multi-platform Integration (up to 5 devices)
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Multilingual Support (10 languages)
  //                 </span>
  //               </div>
  //             </div>

  //             <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
  //               Upgrade to Plus
  //             </button>
  //           </motion.div>

  //           {/* Team Plan */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, y: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: {
  //                   delay: i * 0.9, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col"
  //           >
  //             {/* Header Image */}
  //             <div className="w-full h-52 rounded-xl mb-6 overflow-hidden">
  //               <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
  //                 <img
  //                   src="/assets/Plan3.png"
  //                   alt="Team Plan"
  //                   className="w-full h-full object-cover"
  //                 />
  //               </div>
  //             </div>

  //             <div className="mb-6">
  //               <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1">
  //                 Team
  //               </h3>
  //               <p className="text-gray-500">USD $40/month (per user)</p>
  //             </div>

  //             <div className="space-y-3 mb-6 flex-grow">
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Task Assignment & Follow-Ups
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Multilingual Support (15 languages)
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Advanced Feedback Mechanism
  //                 </span>
  //               </div>
  //               <div className="flex items-start gap-3">
  //                 <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
  //                 <span className="text-gray-950 text-sm">
  //                   Collaborative conversation features for team projects
  //                 </span>
  //               </div>
  //             </div>

  //             <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
  //               Upgrade to Team
  //             </button>
  //           </motion.div>
  //         </div>
  //       </section>
  //       <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
  //         <motion.div
  //           custom={1}
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //           variants={{
  //             hidden: { opacity: 0, y: -50 },
  //             visible: (i) => ({
  //               opacity: 1,
  //               y: 0,
  //               transition: {
  //                 delay: i * 0.3, // delay based on index
  //                 duration: 0.6,
  //                 ease: "easeOut",
  //               },
  //             }),
  //           }}
  //           className="bg-gradient-to-r from-[#B674E1] to-[#533490] rounded-3xl p-16 relative overflow-hidden"
  //         >
  //           {/* Robot hand illustration - left side */}
  //           <div className="absolute left-8 top-8 bottom-8 w-48 opacity-90">
  //             <div className=" w-full h-full">
  //               {/* Robot hand/arm representation */}
  //               <img
  //                 src="/assets/robotHand.png"
  //                 alt="robotHand"
  //                 className="w-full h-full  "
  //               />
  //             </div>
  //           </div>

  //           {/* Robot character - right side */}
  //           <div className="absolute right-8 top-8 bottom-8 w-40 opacity-90">
  //             <div className="relative w-full h-full">
  //               <img
  //                 src="/assets/robot.png"
  //                 alt="robot"
  //                 className="w-full h-full object-cover"
  //               />
  //             </div>
  //           </div>

  //           <div className="text-center relative z-10 max-w-4xl mx-auto">
  //             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
  //               Your AI Meeting Agent can't wait to meet you
  //             </h2>
  //             <div className="flex flex-col sm:flex-row gap-6 justify-center">
  //               <button className="  text-white px-8 py-2 rounded-2xl font-medium border border-white transition-all duration-300 text-lg">
  //                 Start For Free
  //               </button>
  //               <button className="bg-purple-600/20 backdrop-blur-sm text-white cursor-pointer px-8 py-2 rounded-2xl font-medium border border-white/30 hover:bg-purple-600/30 transition-all duration-300 text-lg">
  //                 Learn More
  //               </button>
  //             </div>
  //           </div>
  //         </motion.div>
  //       </section>
  //       <section
  //         className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-10"
  //         id="contact"
  //       >
  //         <div className="">
  //           {/* Header Section */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, y: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: {
  //                   delay: i * 0.3, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="text-center mb-12"
  //           >
  //             <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight mb-4">
  //               Get in touch
  //             </h1>
  //             <p className="bg-gradient-to-r text-transparent from-[#B674E1] to-[#533490] bg-clip-text text-lg ">
  //               Reach out, and let's create a universe of possibilities
  //               together!
  //             </p>
  //           </motion.div>

  //           {/* Main Content Container */}
  //           <motion.div
  //             custom={1}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
  //             variants={{
  //               hidden: { opacity: 0, y: 50 },
  //               visible: (i) => ({
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: {
  //                   delay: i * 0.8, // delay based on index
  //                   duration: 0.6,
  //                   ease: "easeOut",
  //                 },
  //               }),
  //             }}
  //             className="bg-white p-6 rounded-3xl shadow-lg overflow-hidden"
  //           >
  //             <div className="flex">
  //               {/* Left Side - Form */}
  //               <div className="w-1/2 p-5">
  //                 <h2 className="text-3xl font-semibold text-purple-400 mb-4">
  //                   Let's connect
  //                 </h2>
  //                 <p className="text-gray-600 mb-8 leading-relaxed">
  //                   Have questions, feedback, or need assistance? Fill out the
  //                   form below and our team will get back to you as soon as
  //                   possible. We're here to help!
  //                 </p>

  //                 {/* Success/Error Message */}
  //                 {submitMessage.text && (
  //                   <div
  //                     className={`p-4 rounded-lg mb-6 ${
  //                       submitMessage.type === "success"
  //                         ? "bg-green-100 text-green-700 border border-green-200"
  //                         : "bg-red-100 text-red-700 border border-red-200"
  //                     }`}
  //                   >
  //                     <div className="flex items-center">
  //                       {submitMessage.type === "success" ? (
  //                         <CheckCircle className="w-5 h-5 mr-2" />
  //                       ) : (
  //                         <AlertCircle className="w-5 h-5 mr-2" />
  //                       )}
  //                       {submitMessage.text}
  //                     </div>
  //                   </div>
  //                 )}

  //                 <div className="space-y-6">
  //                   {/* Name Fields Row */}
  //                   <div className="flex gap-4">
  //                     <div className="flex-1">
  //                       <input
  //                         type="text"
  //                         name="firstName"
  //                         placeholder="First Name"
  //                         value={formData.firstName}
  //                         onChange={handleInputChange}
  //                         className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
  //                       />
  //                     </div>
  //                     <div className="flex-1">
  //                       <input
  //                         type="text"
  //                         name="lastName"
  //                         placeholder="Last Name"
  //                         value={formData.lastName}
  //                         onChange={handleInputChange}
  //                         className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
  //                       />
  //                     </div>
  //                   </div>

  //                   {/* Email Field */}
  //                   <div>
  //                     <input
  //                       type="email"
  //                       name="email"
  //                       placeholder="Email"
  //                       value={formData.email}
  //                       onChange={handleInputChange}
  //                       className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
  //                     />
  //                   </div>

  //                   {/* Phone Field */}
  //                   <div>
  //                     <input
  //                       type="tel"
  //                       name="phone"
  //                       placeholder="Phone Number"
  //                       value={formData.phone}
  //                       onChange={handleInputChange}
  //                       className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
  //                     />
  //                   </div>

  //                   {/* Message Field */}
  //                   <div>
  //                     <textarea
  //                       name="message"
  //                       placeholder="Message"
  //                       rows="4"
  //                       value={formData.message}
  //                       onChange={handleInputChange}
  //                       className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400 resize-none"
  //                     />
  //                   </div>

  //                   {/* Submit Button */}
  //                   <button
  //                     onClick={handleSubmit}
  //                     disabled={isSubmitting}
  //                     className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-200 ${
  //                       isSubmitting
  //                         ? "bg-purple-400 cursor-not-allowed"
  //                         : "bg-purple-600 hover:bg-purple-700"
  //                     } text-white`}
  //                   >
  //                     {isSubmitting ? (
  //                       <div className="flex items-center justify-center">
  //                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
  //                         Sending...
  //                       </div>
  //                     ) : (
  //                       "Submit"
  //                     )}
  //                   </button>
  //                 </div>
  //               </div>

  //               {/* Right Side - Robot Image Section */}
  //               <div className="w-1/2 flex items-center justify-center relative">
  //                 <img
  //                   src="/assets/60688e97f8d8ffd3ba243d16dfad0823c77c62f6.png"
  //                   alt="Robot assistant"
  //                   className="max-w-full max-h-full object-contain"
  //                 />
  //               </div>
  //             </div>
  //           </motion.div>
  //         </div>
  //       </section>
  //       {/* Footer */}
  //     </div>
  //     <footer className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white">
  //       <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
  //         <div className="grid md:grid-cols-5 gap-12">
  //           {/* Logo */}
  //           <div className="md:col-span-1">
  //             <div className="flex items-center space-x-3 mb-6">
  //               <img src="/assets/footerLogo.png" alt="Logo" className="h-20" />
  //             </div>
  //           </div>

  //           {/* Resources */}
  //           <div>
  //             <h3 className="font-semibold text-xl mb-6">Resources</h3>
  //             <div className="space-y-3 text-white/90">
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Updates
  //               </div>
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Help Center
  //               </div>
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Pricing
  //               </div>
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Contact
  //               </div>
  //             </div>
  //           </div>

  //           {/* Pricing */}
  //           <div>
  //             <h3 className="font-semibold text-xl mb-6">Pricing</h3>
  //             <div className="space-y-3 text-white/90">
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Basic Pricing Plan
  //               </div>
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Plus Pricing Plan
  //               </div>
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Teams Pricing Plan
  //               </div>
  //             </div>
  //           </div>

  //           {/* Explore */}
  //           <div>
  //             <h3 className="font-semibold text-xl mb-6">Explore</h3>
  //             <div className="space-y-3 text-white/90">
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 AI Personalities
  //               </div>
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 AI Agents
  //               </div>
  //             </div>
  //           </div>

  //           {/* Company & Others */}
  //           <div>
  //             <h3 className="font-semibold text-xl mb-6">Company</h3>
  //             <div className="space-y-3 text-white/90 mb-8">
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Privacy Policy
  //               </div>
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Terms and Conditions
  //               </div>
  //             </div>

  //             <h3 className="font-semibold text-xl mb-6">Others</h3>
  //             <div className="space-y-3 text-white/90">
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 FAQs
  //               </div>
  //               <div className="hover:text-white cursor-pointer transition-colors">
  //                 Support
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Divider */}
  //         <div className="border-t border-white/20 mt-16 pt-8">
  //           {/* Copyright */}
  //           <div className="flex flex-col sm:flex-row justify-between items-center">
  //             <div className="text-white/80 text-lg mb-4 sm:mb-0">
  //               SessionScribe Copyright © 2025 • All rights reserved
  //             </div>
  //             <div className="flex space-x-4">
  //               <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer">
  //                 Socials
  //               </div>
  //               <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer">
  //                 Sessionscribe Community
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </footer>
  //   </>
  // );

  return (
    <>
      {/* Add smooth scrolling CSS */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>



      {/* Header/Navigation */}
      <motion.header
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
              duration: 0.6,
              ease: "easeOut",
            },
          }),
        }}
        className="bg-white  px-4 lg:px-20 sticky top-0 z-50"
        role="banner"
      >
        <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" aria-label="Session Scribe Home">
                <img
                  src="/assets/Logo.png"
                  alt="Session Scribe - AI Meeting Companion Logo"
                  className="h-14 w-auto object-contain"
                  width={128}
                  height={40}
                />
              </a>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8" role="menubar">
              <li role="none">
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  aria-current="page"
                  role="menuitem"
                >
                  Home
                </a>
              </li>
              <li role="none">
                <a
                  href="#about"
                  className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  About
                </a>
              </li>
              <li role="none">
                <a
                  href="#Features"
                  className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  Features
                </a>
              </li>
              <li role="none">
                <a
                  onClick={() => scrollToSection("plans")}
                  href="#plans"
                  className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  Pricing
                </a>
              </li>
              <li role="none">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  Contact
                </a>
              </li>
              <li role="none">
                <a
                  onClick={() => navigate("/articles")}
                  className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                  role="menuitem"
                >
                  Articles
                </a>
              </li>
            </ul>

            {/* Right-side CTA */}
            <div className="flex items-center space-x-6">
              {!token && (
                <a
                  href="/signin"
                  className="text-gray-600 hover:text-purple-800 font-medium transition-colors"
                >
                  Login
                </a>
              )}
              <button
                onClick={() => navigate("/home")}
                className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white px-3 py-2 rounded-2xl font-medium transition-colors cursor-pointer shadow-md hover:shadow-lg text-sm"
                aria-label="Start using Session Scribe for free"
              >
                Start For Free
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
      <div className="bg-gray-50 min-h-screen px-4 lg:px-20">
        <main role="main">
          {/* Hero Section */}
          <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="hero-heading">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
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
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="space-y-8"
              >
                <h1 id="hero-heading" className="text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
                  Your Smart AI Meeting Companion
                </h1>

                <p className="text-lg bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-relaxed">
                  Focus on the conversation, not the notes. Session Scribe
                  transforms meetings with real-time transcripts, intelligent
                  summaries, key action points, and lets you ask questions to
                  instantly retrieve insights from past sessions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate("/home")}
                    className="px-6 border-2 border-purple-500 bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent cursor-pointer rounded-2xl hover:bg-purple-50 transition-color font-mediums"
                    aria-label="Get started with Session Scribe"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => navigate("/learn-more")}
                    className="px-6 py-3 bg-gradient-to-r from-[#B674E1] to-[#533490] text-white cursor-pointer rounded-lg transition-colors"
                    aria-label="Learn more about Session Scribe features"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>

              {/* Right side - Hero illustration */}
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
                      delay: i * 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="relative"
              >
                <figure className="w-full h-96 rounded-2xl flex items-center justify-center">
                  <img
                    src="/assets/Hero.png"
                    alt="AI meeting companions illustration showing purple robots around a conference table with Session Scribe logo, representing collaborative AI-powered meeting assistance"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </figure>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <AboutSection />

          {/* Features Section */}
          <section
            className="w-full mx-auto px-4 scroll-mt-20 sm:px-6 lg:px-8 py-10"
            id="Features"
            aria-labelledby="features-heading"
          >
            <header className="text-center mb-16">
              <h2 id="features-heading" className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
                Let us Scribe your Session
              </h2>
            </header>

            {/* Audio Notes Feature */}
            <article className="flex flex-col lg:flex-row gap-20 items-center mb-32">
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
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="space-y-8 w-full lg:w-[40%]"
              >
                <header className="space-y-4">
                  <p className="text-xl font-semibold text-black tracking-wide" aria-label="Feature category">
                    AUDIO NOTES
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
                    Listen Back to What Matters
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Auto-generated audio notes highlight key moments in every
                    meeting. Jump to decisions, quotes, or tasks in just one
                    click. Smart indexing saves time and boosts clarity.
                  </p>
                </header>
              </motion.div>

              <motion.figure
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
                      delay: i * 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="w-full lg:w-[55%]"
                aria-labelledby="audio-notes-demo"
              >
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-6 shadow-lg flex gap-6">
                  <div className="bg-white rounded-2xl p-4 shadow-sm w-[60%]">
                    <header className="flex items-center justify-between mb-6">
                      <h4 id="audio-notes-demo" className="text-lg font-semibold text-purple-600">
                        Audio Notes
                      </h4>
                    </header>

                    {/* Chat-like interface */}
                    <div className="space-y-4 mb-6" role="log" aria-label="Meeting conversation transcript">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold" aria-label="Charlie's avatar">
                          C
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">
                            Charlie - 09:01
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            Alright, so we need to, but this way get a chance to
                            review the system test data
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold" aria-label="Lisa's avatar">
                          L
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">
                            Lisa - 09:01
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            Yeah, like I think the recent direction looks good,
                            especially how focus on AI function optimization. But
                            I have a few thoughts on the conversation
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold" aria-label="Charlie's avatar">
                          C
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">
                            Charlie - 09:01
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            Let's hear it!
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold" aria-label="Lisa's avatar">
                          L
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">
                            Lisa - 09:02
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            Yeah like I think the recent direction looks good,
                            especially how focus on AI function optimization. But
                            I have a few thoughts on the conversation
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold" aria-label="Charlie's avatar">
                          C
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">
                            Charlie - 09:01
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            Let's hear it!
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Audio player controls */}
                    <div className="flex items-center space-x-3 bg-pink-100 rounded-lg p-3" role="group" aria-label="Audio playback controls">
                      <button className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center" aria-label="Pause audio">
                        <div className="w-2 h-2 bg-white"></div>
                        <div className="w-2 h-2 bg-white ml-1"></div>
                      </button>
                      <div className="flex-1 bg-pink-300 rounded-full h-1" role="progressbar" aria-label="Audio progress">
                        <div className="bg-pink-500 h-1 rounded-full w-1/3"></div>
                      </div>
                      <time className="text-xs text-gray-600">0</time>
                      <div className="flex space-x-1">
                        <button className="w-4 h-4 text-gray-500" aria-label="Edit note">✏️</button>
                        <button className="w-4 h-4 text-gray-500" aria-label="Add comment">💬</button>
                        <button className="w-4 h-4 text-gray-500" aria-label="Export transcript">📄</button>
                      </div>
                    </div>
                  </div>

                  {/* Side panel */}
                  <aside className="bg-white rounded-xl p-4 shadow-lg w-[40%]" aria-labelledby="meeting-summary">
                    <header className="text-xs font-semibold text-purple-600 mb-2 text-center">
                      🔖 Important Notes
                    </header>
                    <div className="bg-pink-500 text-white px-2 py-1 text-xs font-medium mb-3 text-center rounded-2xl">
                      Audio Agenda
                    </div>
                    <div className="space-y-2 text-xs text-gray-600">
                      <section>
                        <h5 className="font-medium text-lg">Meeting Summary</h5>
                        <p>
                          Discussion centered on finalizing the metrics and
                          optimization strategies...
                        </p>
                      </section>
                      <section>
                        <h5 className="font-medium">Key Topics</h5>
                        <p>
                          System performance benchmarks, AI function integration,
                          team coordination...
                        </p>
                      </section>
                      <section>
                        <h5 className="font-medium">Action Items</h5>
                        <p className="text-green-600">
                          ✓ Lisa compile feedback
                        </p>
                        <p>▶ Review system benchmarks</p>
                        <p>▶ Schedule follow-up session next ...</p>
                      </section>
                      <section>
                        <h5 className="font-medium">Key Decisions</h5>
                        <p>
                          Focus on AI function optimization. Schedule team
                          alignment session next...
                        </p>
                      </section>
                      <section>
                        <h5 className="font-medium">Outcome</h5>
                        <p>All key topics delivered on schedule...</p>
                      </section>
                    </div>
                  </aside>
                </div>
              </motion.figure>
            </article>

            {/* Live Summary Feature */}
            <article className="flex flex-col lg:flex-row gap-20 items-center mb-32">
              <motion.figure
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
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="w-full  order-2 lg:order-1 lg:w-[55%]"
                aria-labelledby="live-summary-demo"
              >
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <header className="flex items-center justify-between mb-6">
                      <h4 id="live-summary-demo" className="text-lg font-semibold text-purple-600">
                        Audio Agenda
                      </h4>
                      <button className="bg-purple-500 text-white px-3 py-1 rounded text-sm" aria-label="Delete audio agenda">
                        Delete
                      </button>
                    </header>

                    {/* Audio controls */}
                    <div className="flex items-center space-x-3 mb-4" role="group" aria-label="Audio controls">
                      <button className="w-6 h-6 text-gray-600" aria-label="Pause">⏸️</button>
                      <button className="w-6 h-6 text-gray-600" aria-label="Next">⏭️</button>
                      <span className="text-sm text-gray-600">1x</span>
                      <div className="flex-1"></div>
                      <div className="flex space-x-1">
                        <button className="w-4 h-4 text-gray-500" aria-label="Edit">✏️</button>
                        <button className="w-4 h-4 text-gray-500" aria-label="Comment">💬</button>
                        <button className="w-4 h-4 text-gray-500" aria-label="Document">📄</button>
                      </div>
                    </div>

                    {/* Tab navigation */}
                    <nav className="flex mb-6" role="tablist">
                      <button
                        className="flex-1 bg-pink-200 text-purple-600 py-2 px-4 rounded-l-lg font-medium"
                        role="tab"
                        aria-selected="true"
                        aria-controls="summary-panel"
                      >
                        Summary
                      </button>
                      <button
                        className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-r-lg font-medium"
                        role="tab"
                        aria-selected="false"
                        aria-controls="transcript-panel"
                      >
                        Transcript
                      </button>
                    </nav>

                    {/* Summary content */}
                    <div id="summary-panel" className="space-y-4 text-sm" role="tabpanel">
                      <section>
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Topic: Planning adjustments for the Q3 marketing
                          rollout.
                        </h5>
                      </section>

                      <section className="space-y-3">
                        <p className="font-medium text-gray-800">
                          • Lisa suggested tweaking the content calendar to
                          prioritize influencer content before blog posts,
                          aiming to boost early engagement.
                        </p>
                        <p className="font-medium text-gray-800">
                          • Charlie agreed and confirmed feasibility with the
                          creative team, pending budget finalization by Friday.
                        </p>
                        <p className="font-medium text-gray-800">
                          • Marketing team confirmed they can accommodate the
                          timeline changes.
                        </p>
                        <p className="font-medium text-gray-800">
                          • Instagram captions from last quarter will be updated
                          to reflect a more playful tone.
                        </p>
                        <p className="font-medium text-gray-800">
                          • Charlie will update the Alpha Board to reflect the
                          new rollout-first strategy.
                        </p>
                      </section>

                      <section className="mt-6">
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Outline
                        </h5>
                        <div className="space-y-2">
                          <div>
                            <h6 className="font-medium text-gray-800">
                              Campaign Brief Review
                            </h6>
                            <ul className="text-gray-600 ml-4">
                              <li>• Lisa outlined the timeline for the Q3 campaign brief</li>
                              <li>• Team discussed content focus</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-gray-800">
                              Content Calendar Feedback
                            </h6>
                            <ul className="text-gray-600 ml-4">
                              <li>• Lisa proposes tweaking the dates, launch video content before blog posts</li>
                              <li>• Review drive early engagement and use momentum for blog traffic</li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </motion.figure>

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
                      delay: i * 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="space-y-8 order-1 lg:order-2 w-full lg:w-[40%]"
              >
                <header className="space-y-4">
                  <p className="text-xl font-semibold text-black tracking-wide">
                    LIVE SUMMARY
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
                    Instant, Actionable Summaries
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Get concise meeting summaries the moment your session ends.
                    Key points, decisions, and next steps—automatically organized.
                    No more manual wrap-ups or missed follow-ups.
                  </p>
                </header>
              </motion.div>
            </article>
          </section>

          {/* Live Transcript & AI Insights Section */}
          <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20" aria-labelledby="transcript-insights-heading">
            <header className="sr-only">
              <h2 id="transcript-insights-heading">Live Transcript and AI Insights</h2>
            </header>

            {/* Live Transcript Feature */}
            <article className="grid lg:grid-cols-2 gap-16 items-center">
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
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="space-y-8"
              >
                <header className="space-y-4">
                  <p className="text-xl font-semibold text-black tracking-wide">
                    LIVE TRANSCRIPT
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
                    Every Word, Captured Clearly
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Accurate, real-time transcription of your meetings. Speaker
                    labels, timestamps, and editable logs included. Perfect for
                    revisiting details without replaying the recording.
                  </p>
                </header>
              </motion.div>

              <motion.figure
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
                      delay: i * 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="relative"
                aria-labelledby="transcript-demo"
              >
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <header className="flex items-center justify-between mb-6">
                      <h4 id="transcript-demo" className="text-lg font-semibold text-purple-600">
                        Audio Agenda
                      </h4>
                      <button className="bg-purple-500 text-white px-3 py-1 rounded text-sm" aria-label="Delete transcript">
                        Delete
                      </button>
                    </header>

                    {/* Audio controls */}
                    <div className="flex items-center space-x-3 mb-4" role="group" aria-label="Transcript audio controls">
                      <button className="w-6 h-6 text-gray-600" aria-label="Pause">⏸️</button>
                      <button className="w-6 h-6 text-gray-600" aria-label="Next">⏭️</button>
                      <span className="text-sm text-gray-600">1x</span>
                      <div className="flex-1"></div>
                      <div className="flex space-x-1">
                        <button className="w-4 h-4 text-gray-500" aria-label="Edit">✏️</button>
                        <button className="w-4 h-4 text-gray-500" aria-label="Comment">💬</button>
                        <button className="w-4 h-4 text-gray-500" aria-label="Document">📄</button>
                      </div>
                    </div>

                    {/* Tab navigation */}
                    <nav className="flex mb-6" role="tablist">
                      <button
                        className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-l-lg font-medium"
                        role="tab"
                        aria-selected="false"
                      >
                        Summary
                      </button>
                      <button
                        className="flex-1 bg-pink-200 text-purple-600 py-2 px-4 rounded-r-lg font-medium"
                        role="tab"
                        aria-selected="true"
                        aria-controls="transcript-content"
                      >
                        Transcript
                      </button>
                    </nav>

                    {/* Transcript content */}
                    <div id="transcript-content" className="space-y-4" role="tabpanel">
                      <section>
                        <h5 className="text-sm font-semibold text-gray-800 mb-4">
                          Keywords
                        </h5>
                        <p className="text-xs text-gray-600 mb-6">
                          User retention, landing, visitor, bounce, analytics,
                          reporting, channel, conversion, attribution, actions
                          leads, KPI, navigation, ROI, clickthrough, dashboard,
                          affiliate, influencer, post-click/post-boarding,
                          activation, a
                        </p>
                      </section>

                      <section>
                        <h5 className="text-sm font-semibold text-gray-800 mb-4">
                          Speakers
                        </h5>
                        <p className="text-xs text-gray-600 mb-4">
                          Lisa (73%), Charlie (27%)
                        </p>
                      </section>

                      {/* Conversation transcript */}
                      <section className="space-y-3 text-sm" role="log" aria-label="Meeting conversation transcript">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold" aria-label="Charlie">
                            C
                          </div>
                          <div className="flex-1">
                            <time className="text-xs text-gray-500 mb-1 block">
                              Charlie - 06:02
                            </time>
                            <p className="text-gray-700">
                              Alright, let's get started. Lisa, did you get a
                              chance to review the messaging brief for Q3?
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold" aria-label="Lisa">
                            L
                          </div>
                          <div className="flex-1">
                            <time className="text-xs text-gray-500 mb-1 block">
                              Lisa - 06:06
                            </time>
                            <p className="text-gray-700">
                              Yes, I did. I like the overall direction looks good,
                              especially the focus on influencer partnerships. But
                              I have a few thoughts on the tone and execution.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold" aria-label="Charlie">
                            C
                          </div>
                          <div className="flex-1">
                            <time className="text-xs text-gray-500 mb-1 block">
                              Charlie - 06:01
                            </time>
                            <p className="text-gray-700">Let's hear it.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold" aria-label="Lisa">
                            L
                          </div>
                          <div className="flex-1">
                            <time className="text-xs text-gray-500 mb-1 block">
                              Lisa - 06:15
                            </time>
                            <p className="text-gray-700">
                              Well, I think we want to be thoughtful about how we
                              position talking about the values content since like
                              I think we should connect that and, like videois in
                              there more conversational way and we can use that
                              conversion to support the blog traffic.
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  {/* Help button */}
                  <button
                    className="absolute bottom-10 right-10 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl"
                    aria-label="Get help with transcript features"
                  >
                    ?
                  </button>
                </div>
              </motion.figure>
            </article>

            {/* AI Insights Feature */}
            <article className="grid mt-20 lg:grid-cols-2 gap-16 items-center mb-32">
              <motion.figure
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
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="order-2 lg:order-1 relative"
                aria-labelledby="ai-insights-demo"
              >
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <header>
                      <h4 id="ai-insights-demo" className="text-lg font-semibold text-purple-600 mb-6">
                        AI Insights
                      </h4>
                    </header>

                    {/* Analytics Charts */}
                    <section className="grid grid-cols-2 gap-4 mb-6" aria-label="Meeting analytics">
                      {/* Screen Recording Analysis */}
                      <article className="bg-gray-50 rounded-lg p-4">
                        <header>
                          <h5 className="text-sm font-medium text-gray-600 mb-3">
                            Screen Recording analysis
                          </h5>
                        </header>
                        <div className="relative w-20 h-20 mx-auto">
                          <svg
                            className="w-20 h-20 transform -rotate-90"
                            viewBox="0 0 36 36"
                            role="img"
                            aria-labelledby="screen-chart-title"
                          >
                            <title id="screen-chart-title">Screen recording analysis showing 30 minutes total</title>
                            <path
                              className="text-gray-200"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-purple-500"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeDasharray="60, 100"
                              strokeLinecap="round"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-semibold text-gray-800">
                              30.0
                            </span>
                          </div>
                        </div>
                        <dl className="mt-3 space-y-1 text-xs">
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-1" aria-hidden="true"></div>
                              Talking:
                            </dt>
                            <dd>16.5</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-1" aria-hidden="true"></div>
                              Listening:
                            </dt>
                            <dd>6.9</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-pink-400 rounded-full mr-1" aria-hidden="true"></div>
                              Discussion:
                            </dt>
                            <dd>16%</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-1" aria-hidden="true"></div>
                              Conclusion:
                            </dt>
                            <dd>8%</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1" aria-hidden="true"></div>
                              Others:
                            </dt>
                            <dd>11%</dd>
                          </div>
                        </dl>
                      </article>

                      {/* Audio Recording Analysis */}
                      <article className="bg-gray-50 rounded-lg p-4">
                        <header>
                          <h5 className="text-sm font-medium text-gray-600 mb-3">
                            Audio recording analysis
                          </h5>
                        </header>
                        <div className="relative w-20 h-20 mx-auto">
                          <svg
                            className="w-20 h-20 transform -rotate-90"
                            viewBox="0 0 36 36"
                            role="img"
                            aria-labelledby="audio-chart-title"
                          >
                            <title id="audio-chart-title">Audio recording analysis showing 30 minutes total</title>
                            <path
                              className="text-gray-200"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-purple-500"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeDasharray="70, 100"
                              strokeLinecap="round"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-semibold text-gray-800">
                              30.0
                            </span>
                          </div>
                        </div>
                        <dl className="mt-3 space-y-1 text-xs">
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-1" aria-hidden="true"></div>
                              Talking:
                            </dt>
                            <dd>18.5</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-1" aria-hidden="true"></div>
                              Listening:
                            </dt>
                            <dd>7.3</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-pink-400 rounded-full mr-1" aria-hidden="true"></div>
                              Discussion:
                            </dt>
                            <dd>11%</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-1" aria-hidden="true"></div>
                              Engagement:
                            </dt>
                            <dd>9%</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1" aria-hidden="true"></div>
                              Others:
                            </dt>
                            <dd>11%</dd>
                          </div>
                        </dl>
                      </article>
                    </section>

                    {/* Recent Recordings Table */}
                    <section className="bg-gray-50 rounded-lg p-4">
                      <header className="flex items-center justify-between mb-4">
                        <h5 className="text-sm font-semibold text-gray-700">
                          Recent Recordings
                        </h5>
                        <a href="#" className="text-xs text-purple-600 hover:text-purple-800">
                          View all
                        </a>
                      </header>

                      <div className="space-y-2">
                        {/* Table Header */}
                        <div className="bg-purple-200 rounded-lg px-3 py-2 grid grid-cols-4 gap-4 text-xs font-medium text-purple-800">
                          <span>Topic/Title</span>
                          <span>Start Time</span>
                          <span>End Time</span>
                          <span>Speaker</span>
                        </div>

                        {/* Table Rows */}
                        <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
                          <span>5 min</span>
                          <time>12:24 PM</time>
                          <time>12:29 PM</time>
                          <span>Sarah Johnson</span>
                        </div>
                        <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
                          <span>6 min</span>
                          <time>12:35 PM</time>
                          <time>12:41 PM</time>
                          <span>Sarah Johnson</span>
                        </div>
                        <div className="px-3 py-2 grid grid-cols-4 gap-4 text-xs text-gray-600 hover:bg-gray-100 rounded">
                          <span>8 min</span>
                          <time>12:48 PM</time>
                          <time>12:56 PM</time>
                          <span>Sarah Johnson</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </motion.figure>

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
                      delay: i * 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="order-1 lg:order-2 space-y-8"
              >
                <header className="space-y-4">
                  <p className="text-xl font-semibold text-black tracking-wide">
                    AI INSIGHTS
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
                    Ask Anything About Your Meetings
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Need a quick recap or want to check what someone said? Just
                    ask. Our AI answers your questions instantly based on
                    everything it heard and noted.
                  </p>
                </header>
              </motion.div>
            </article>
          </section>

          {/* Take Action Section */}
          <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="take-action-heading">
            <motion.header
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
                    delay: i * 0.3,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }),
              }}
              className="text-center mb-16"
            >
              <h2 id="take-action-heading" className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight mb-6">
                Take action — items
              </h2>
              <p className="text-lg bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent max-w-2xl mx-auto">
                In every meeting, your AI agent listens, records, and follows
                through—so you don't have to.
              </p>
            </motion.header>
            <motion.figure
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
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              <img
                src="/assets/take-action.png"
                alt="Action items dashboard showing AI-generated task lists, follow-ups, and meeting outcomes with automated assignment and tracking features"
                className="w-[90%] mx-auto"
              />
            </motion.figure>
          </section>

          {/* Pricing Section */}
          <section
            id="plans"
            className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20"
            aria-labelledby="pricing-heading"
          >
            <motion.header
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
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }),
              }}
              className="text-center mb-20"
            >
              <h2 id="pricing-heading" className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight">
                Choose the Plan that's Right For You
              </h2>
            </motion.header>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 w-full mx-auto">
              {/* Free Plan */}
              <motion.article
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
                      delay: i * 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col"
                itemScope
                itemType="https://schema.org/Product"
              >
                <figure className="w-full h-52 rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 via-orange-200 to-purple-200">
                    <img
                      src="/assets/Plan1.png"
                      alt="Free Plan illustration with colorful geometric shapes representing basic features"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>

                <header className="mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1" itemProp="name">
                    Free
                  </h3>
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="USD" />
                    <meta itemProp="price" content="0" />
                    <p className="text-gray-500" itemProp="priceSpecification">USD $0/month</p>
                  </div>
                </header>

                <ul className="space-y-3 mb-6 flex-grow" itemProp="description">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Limited access to Multiple Personalities (3 personalities)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Basic Dynamic Suggestions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Multi-platform Integration (limited to 1 device)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Multilingual Support (3 languages)
                    </span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
                  Your Current Plan
                </button>
              </motion.article>

              {/* Plus Plan */}
              <motion.article
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
                      delay: i * 0.6,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col"
                itemScope
                itemType="https://schema.org/Product"
              >
                <figure className="w-full h-52 rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 via-orange-200 to-purple-200">
                    <img
                      src="/assets/Plan2.png"
                      alt="Plus Plan illustration with enhanced features and premium design elements"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>

                <header className="mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1" itemProp="name">
                      Plus
                    </h3>
                    <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                      Best Selling
                    </span>
                  </div>
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="USD" />
                    <meta itemProp="price" content="20" />
                    <p className="text-gray-500" itemProp="priceSpecification">USD $20/month</p>
                  </div>
                </header>

                <ul className="space-y-3 mb-6 flex-grow" itemProp="description">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Access to Multiple Personalities (10 personalities)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Real-time Web References (unlimited queries)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Multi-platform Integration (up to 5 devices)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Multilingual Support (10 languages)
                    </span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
                  Upgrade to Plus
                </button>
              </motion.article>

              {/* Team Plan */}
              <motion.article
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
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative flex flex-col"
                itemScope
                itemType="https://schema.org/Product"
              >
                <figure className="w-full h-52 rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
                    <img
                      src="/assets/Plan3.png"
                      alt="Team Plan illustration with collaborative features and enterprise-grade capabilities"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>

                <header className="mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent mb-1" itemProp="name">
                    Team
                  </h3>
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="USD" />
                    <meta itemProp="price" content="40" />
                    <p className="text-gray-500" itemProp="priceSpecification">USD $40/month (per user)</p>
                  </div>
                </header>

                <ul className="space-y-3 mb-6 flex-grow" itemProp="description">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Task Assignment & Follow-Ups
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Multilingual Support (15 languages)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Advanced Feedback Mechanism
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-950 text-sm">
                      Collaborative conversation features for team projects
                    </span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-[#B674E1] to-[#533490] text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-shadow mt-auto">
                  Upgrade to Team
                </button>
              </motion.article>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="cta-heading">
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
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }),
              }}
              className="bg-gradient-to-r from-[#B674E1] to-[#533490] rounded-3xl p-16 relative overflow-hidden"
            >
              {/* Robot hand illustration - left side */}
              <figure className="absolute left-8 top-8 bottom-8 w-48 opacity-90" aria-hidden="true">
                <img
                  src="/assets/robotHand.png"
                  alt=""
                  className="w-full h-full"
                />
              </figure>

              {/* Robot character - right side */}
              <figure className="absolute right-8 top-8 bottom-8 w-40 opacity-90" aria-hidden="true">
                <img
                  src="/assets/robot.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="text-center relative z-10 max-w-4xl mx-auto">
                <h2 id="cta-heading" className="text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
                  Your AI Meeting Agent can't wait to meet you
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="text-white px-8 py-2 rounded-2xl font-medium border border-white transition-all duration-300 text-lg">
                    Start For Free
                  </button>
                  <button className="bg-purple-600/20 backdrop-blur-sm text-white cursor-pointer px-8 py-2 rounded-2xl font-medium border border-white/30 hover:bg-purple-600/30 transition-all duration-300 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section
            className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-10"
            id="contact"
            aria-labelledby="contact-heading"
          >
            <header>
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
                      delay: i * 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="text-center mb-12"
              >
                <h2 id="contact-heading" className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B674E1] to-[#533490] bg-clip-text text-transparent leading-tight mb-4">
                  Get in touch
                </h2>
                <p className="bg-gradient-to-r text-transparent from-[#B674E1] to-[#533490] bg-clip-text text-lg">
                  Reach out, and let's create a universe of possibilities
                  together!
                </p>
              </motion.div>
            </header>

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
                    delay: i * 0.8,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }),
              }}
              className="bg-white p-6 rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="flex lg:flex-row flex-col">
                {/* Left Side - Contact Form */}
                <div className="w-full lg:w-1/2 p-5">
                  <header className="mb-8">
                    <h3 className="text-3xl font-semibold text-purple-400 mb-4">
                      Let's connect
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Have questions, feedback, or need assistance? Fill out the
                      form below and our team will get back to you as soon as
                      possible. We're here to help!
                    </p>
                  </header>

                  {/* Success/Error Message */}
                  {submitMessage.text && (
                    <div
                      className={`p-4 rounded-lg mb-6 ${submitMessage.type === "success"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                        }`}
                      role="alert"
                    >
                      <div className="flex items-center">
                        {submitMessage.type === "success" ? (
                          <CheckCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                        ) : (
                          <AlertCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                        )}
                        {submitMessage.text}
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Name Fields Row */}
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label htmlFor="firstName" className="sr-only">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="lastName" className="sr-only">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400 resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-200 ${isSubmitting
                        ? "bg-purple-400 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700"
                        } text-white`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" aria-hidden="true"></span>
                          Sending...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Side - Robot Image Section */}
                <aside className="w-full px-[20px] lg:px-0 lg:w-1/2 flex items-center justify-center relative">
                  <img
                    src="/assets/60688e97f8d8ffd3ba243d16dfad0823c77c62f6.png"
                    alt="Friendly robot assistant character representing customer support"
                    className="max-w-full max-h-full object-contain"
                  />
                </aside>
              </div>
            </motion.div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#B674E1] to-[#533490] text-white" role="contentinfo">
        <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Logo */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/assets/footerLogo.png"
                  alt="Session Scribe Logo"
                  className="h-20"
                />
              </div>
            </div>

            {/* Resources */}
            <nav className="md:col-span-1" aria-labelledby="resources-heading">
              <h3 id="resources-heading" className="font-semibold text-xl mb-6">Resources</h3>
              <ul className="space-y-3 text-white/90">
                <li>
                  <a href="#" className="hover:text-white cursor-pointer transition-colors">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-white cursor-pointer transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white cursor-pointer transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Pricing */}
            <nav className="md:col-span-1" aria-labelledby="pricing-nav-heading">
              <h3 id="pricing-nav-heading" className="font-semibold text-xl mb-6">Pricing</h3>
              <ul className="space-y-3 text-white/90">
                <li>
                  <a href="#plans" className="hover:text-white cursor-pointer transition-colors">
                    Basic Pricing Plan
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-white cursor-pointer transition-colors">
                    Plus Pricing Plan
                  </a>
                </li>
                <li>
                  <a href="#plans" className="hover:text-white cursor-pointer transition-colors">
                    Teams Pricing Plan
                  </a>
                </li>
              </ul>
            </nav>

            {/* Explore */}
            <nav className="md:col-span-1" aria-labelledby="explore-heading">
              <h3 id="explore-heading" className="font-semibold text-xl mb-6">Explore</h3>
              <ul className="space-y-3 text-white/90">
                <li>
                  <a href="#" className="hover:text-white cursor-pointer transition-colors">
                    AI Personalities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white cursor-pointer transition-colors">
                    AI Agents
                  </a>
                </li>
              </ul>
            </nav>

            {/* Company & Others */}
            <div className="md:col-span-1">
              <nav aria-labelledby="company-heading">
                <h3 id="company-heading" className="font-semibold text-xl mb-6">Company</h3>
                <ul className="space-y-3 text-white/90 mb-8">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </nav>

              <nav aria-labelledby="others-heading">
                <h3 id="others-heading" className="font-semibold text-xl mb-6">Others</h3>
                <ul className="space-y-3 text-white/90">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mt-16 pt-8">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/80 text-lg mb-4 sm:mb-0">
                SessionScribe Copyright © 2025 • All rights reserved
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer">
                  Socials
                </a>
                <a href="#" className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer">
                  Sessionscribe Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
