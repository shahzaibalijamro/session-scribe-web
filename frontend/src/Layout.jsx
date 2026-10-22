// src/components/Layout.jsx
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Search, LogOut, User, Mail, Chrome, X } from "lucide-react";
import { useApp } from "./components/context/AppContext";
import { FaChrome, FaChromecast } from "react-icons/fa";

const Layout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showExtensionBanner, setShowExtensionBanner] = useState(false);
  const { user, setUser, isAdmin } = useApp();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isAudioNotesPage = location.pathname === "/audionotes";

  // Check if user should see extension banner
  useEffect(() => {
    // Show banner only if user hasn't installed extension and is not an admin
    if (user && !user.hasInstalledExtension && !isAdmin) {
      setShowExtensionBanner(true);
    } else {
      setShowExtensionBanner(false);
    }
  }, [user, isAdmin]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setShowDropdown(false);
    window.location.reload();
  };

  const handleViewProfile = () => {
    navigate("/profile");
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDismissBanner = () => {
    setShowExtensionBanner(false);
    // Optionally store dismissal in localStorage
    localStorage.setItem('extensionBannerDismissed', 'true');
  };

  const handleInstallExtension = () => {
    navigate("/extension-setup");
  };

  return (
    <div className={`flex ${!isAudioNotesPage ? "h-screen" : ""} bg-gray-50`}>
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {/* Extension Banner */}
        {showExtensionBanner && (
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-lg">
                <FaChrome color="purple" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-base">
                  🎉 New Beta Extension Available!
                </p>
                <p className="text-sm text-purple-100">
                  Record meetings directly from your browser. Install now for seamless recording.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleInstallExtension}
                className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-md hover:shadow-lg"
              >
                Install Now
              </button>
              <button
                onClick={handleDismissBanner}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-4">
            {!isAdmin && (
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <Link to="/emails" className="font-medium">
                  Record
                </Link>
              </button>
            )}

            {/* User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer text-white font-bold hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 overflow-hidden"
              >
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user?.name || "User"}
                    className="w-full h-full object-cover"
                  />
                ) : user?.name ? (
                  user.name.charAt(0).toUpperCase()
                ) : (
                  "Z"
                )}
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  style={{ zIndex: 1001 }}
                >
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm overflow-hidden">
                        {user?.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user?.name || "User"}
                            className="w-full h-full object-cover"
                          />
                        ) : user?.name ? (
                          user.name.charAt(0).toUpperCase()
                        ) : (
                          "Z"
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {user?.name || user?.username || "User Name"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="px-4 py-1 border-t border-gray-100 mt-1 pt-2 space-y-1">
                    {/* View Profile */}
                    {!isAdmin && (
                      <button
                        onClick={handleViewProfile}
                        className="w-full flex items-center space-x-3 px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer rounded-md transition-colors"
                      >
                        <User className="w-4 h-4 text-gray-500" />
                        <span>View Profile</span>
                      </button>
                    )}

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-2 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer rounded-md transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;