// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Home,
//   Mic,
//   FileText,
//   Sparkles,
//   MessageSquare,
//   HelpCircle,
//   ScrollText,
//   Menu,
//   X,
//   LayoutDashboard,
//   Search,
//   MessageCircle,
//   Subtitles,
//   History,
// } from "lucide-react";
// import Logo from "../assets/Logo.png"; // Adjust the path as necessary
// import { useApp } from "./context/AppContext";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [manuallyCollapsed, setManuallyCollapsed] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const {isAdmin} = useApp(); // Assuming you have a context or state management for user roles

//   // Check screen size and update state
//   useEffect(() => {
//     const checkScreenSize = () => {
//       const mobile = window.innerWidth < 768; // md breakpoint
//       setIsMobile(mobile);
//       if (mobile) {
//         setIsCollapsed(true);
//       } else if (!manuallyCollapsed) {
//         // Only auto-expand if user hasn't manually collapsed it
//         setIsCollapsed(false);
//       }
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, [manuallyCollapsed]);

//   const toggleSidebar = () => {
//     const newCollapsedState = !isCollapsed;
//     setIsCollapsed(newCollapsedState);
//     // Track manual collapse only on desktop
//     if (!isMobile) {
//       setManuallyCollapsed(newCollapsedState);
//     }
//   };

//   // Navigation handler
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   // Helper function to check if current path is active
//   const isActive = (path) => {
//     if (path === "/" && location.pathname === "/") {
//       return true;
//     }
//     if (path !== "/" && location.pathname.startsWith(path)) {
//       return true;
//     }
//     return false;
//   };

//   // Navigation items configuration
//   const navigationItems = [
//     { icon: Home, label: "Home", path: "/home" },
//     { icon: Mic, label: "Recording", path: "/recordings" },
//     { icon: ScrollText, label: "Summaries", path: "/summaries" },
//     { icon: Subtitles, label: "Transcriptions", path: "/transcriptions" },
//     { icon: FileText, label: "Audio Notes", path: "/audionotes" },
//     { icon: Sparkles, label: "AI Insights", path: "/insights" },
//     { icon: MessageSquare, label: "Feedback", path: "/feedback" },
//     { icon: HelpCircle, label: "Help", path: "/support" },
//   ];

//   const navigationItemsAdmin = [
//   { icon: LayoutDashboard, label: "Admin", path: "/admin" },
//   { icon: MessageSquare, label: "Queries", path: "/queries" },
//   {icon: MessageCircle, label: "Feedback", path: "/feedbacks" },
//   {icon: History, label: "History", path: "/history" },
// ];

//   return (
//     <div
//       className={`${
//         isCollapsed ? "w-16" : "w-64"
//       } relative bg-white shadow-sm border-r border-gray-200 transition-all duration-300 flex-shrink-0`}
//     >
//       {/* Toggle Button */}
//       {/* <button 
//                 onClick={toggleSidebar}
//                 className="absolute -right-3 top-8 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 z-10 hover:border-purple-300"
//             >
//                 {isCollapsed ? 
//                     <Menu size={14} className="text-gray-600" /> : 
//                     <X size={14} className="text-gray-600" />
//                 }
//             </button> */}

//       {/* Logo */}
//       <div className={`p-6 ${isCollapsed ? "px-2" : ""}`}>
//         <div onClick={()=> navigate(isAdmin ? "/admin" : "/home")} className="flex cursor-pointer items-center space-x-2">
//           <img
//             src={Logo}
//             alt="SessionScribe Logo"
//             className="flex-shrink-0 object-contain"
//           />
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="px-2 space-y-2">
//   {(isAdmin ? navigationItemsAdmin : navigationItems).map((item) => {
//     const Icon = item.icon;
//     const active = isActive(item.path);

//     return (
//       <div
//         key={item.path}
//         onClick={() => handleNavigation(item.path)}
//         className={`rounded-lg py-3 flex items-center cursor-pointer transition-all duration-300 ${
//           isCollapsed ? "px-2 justify-center" : "px-4 space-x-3"
//         } ${
//           active
//             ? "bg-purple-600 text-white"
//             : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
//         }`}
//       >
//         <Icon size={20} className="flex-shrink-0" />
//         {!isCollapsed && (
//           <span className="font-medium">{item.label}</span>
//         )}
//       </div>
//     );
//   })}
// </nav>

//       {/* Bottom CTA */}
//       {!isCollapsed && !isAdmin && (
//         <div className="absolute bottom-6 left-4 right-4">
//           <button onClick={()=> handleNavigation("/chat")} className="w-full cursor-pointer bg-purple-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-purple-700 transition-colors">
//             Let's Scribe with AI
//           </button>
//         </div>
//       )}

//       {/* Collapsed Bottom CTA - Just Icon */}
//       {isCollapsed && !isAdmin && (
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//           <button className="bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors">
//             <Sparkles size={20} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Mic,
  FileText,
  Sparkles,
  MessageSquare,
  HelpCircle,
  ScrollText,
  Menu,
  X,
  LayoutDashboard,
  Search,
  MessageCircle,
  Subtitles,
  History,
  BookOpen,
  CreditCard,
  Newspaper,
  Calendar
} from "lucide-react";
import Logo from "../assets/Logo.png"; // Adjust the path as necessary
import { useApp } from "./context/AppContext";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [manuallyCollapsed, setManuallyCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin } = useApp(); // Assuming you have a context or state management for user roles

  // Check screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      } else if (!manuallyCollapsed) {
        // Only auto-expand if user hasn't manually collapsed it
        setIsCollapsed(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [manuallyCollapsed]);

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    // Track manual collapse only on desktop
    if (!isMobile) {
      setManuallyCollapsed(newCollapsedState);
    }
  };

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Helper function to check if current path is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  // Navigation items configuration
  const navigationItems = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Mic, label: "Recording", path: "/recordings" },
  { icon: ScrollText, label: "Summaries", path: "/summaries" },
  { icon: Subtitles, label: "Transcriptions", path: "/transcriptions" },
  { icon: FileText, label: "Audio Transcripts", path: "/audionotes" },
  { icon: Calendar, label: "Schedule", path: "/schedule" }, // ✅ New item
  { icon: BookOpen, label: "How to Use", path: "/how-to-use" },
  { icon: CreditCard, label: "Plans", path: "/plan" }, // ✅ New item
  { icon: Sparkles, label: "AI Insights", path: "/insights" },
  { icon: MessageSquare, label: "Feedback", path: "/feedback" },
  { icon: HelpCircle, label: "Help", path: "/support" },
];



  const navigationItemsAdmin = [
    { icon: LayoutDashboard, label: "Admin", path: "/admin" },
    { icon: MessageSquare, label: "Queries", path: "/queries" },
    { icon: MessageCircle, label: "Feedback", path: "/feedbacks" },
    { icon: History, label: "History", path: "/history" },
    { icon: Newspaper, label: "Articles", path: "/articles-admin" },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } relative bg-white min-h-screen shadow-sm border-r border-gray-200 transition-all duration-300 flex-shrink-0 flex flex-col`}
      >
      {/* Toggle Button */}
      {/* <button 
                onClick={toggleSidebar}
                className="absolute -right-3 top-8 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 z-10 hover:border-purple-300"
            >
                {isCollapsed ? 
                    <Menu size={14} className="text-gray-600" /> : 
                    <X size={14} className="text-gray-600" />
                }
            </button> */}

      {/* Logo */}
      <div className={`p-4 ${isCollapsed ? "px-2" : ""} flex-shrink-0`}>
        <div
          onClick={() => navigate(isAdmin ? "/admin" : "/home")}
          className="flex cursor-pointer items-center space-x-2"
        >
          <img
            src={Logo}
            alt="SessionScribe Logo"
            className="flex-shrink-0 object-contain"
          />
        </div>
      </div>

      {/* Scrollable Navigation Container */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Navigation - Scrollable */}
        <nav className="px-2 space-y-1 flex-1 overflow-y-auto">
          {(isAdmin ? navigationItemsAdmin : navigationItems).map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <div
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`rounded-lg py-2 flex items-center cursor-pointer transition-all duration-300 ${
                  isCollapsed ? "px-2 justify-center" : "px-3 space-x-3"
                } ${
                  active
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <Icon size={18} className="flex-shrink-0" />
                {!isCollapsed && (
                  <span className="font-medium text-[15px]">{item.label}</span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom CTA - Fixed at bottom */}
        <div className="flex-shrink-0 p-2">
          {!isCollapsed && !isAdmin && (
            <button
              onClick={() => handleNavigation("/chat")}
              className="w-full cursor-pointer bg-purple-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-purple-700 transition-colors"
            >
              Chat with AI
            </button>
          )}

          {/* Collapsed Bottom CTA - Just Icon */}
          {isCollapsed && !isAdmin && (
            <div className="flex justify-center">
              <button 
                onClick={() => handleNavigation("/chat")}
                className="bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors"
              >
                <Sparkles size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;