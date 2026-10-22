import React, { useState } from 'react'
import { MessageCircle, CheckCircle, AlertCircle, Loader, Play, Users, Mic, Download, FileText, Volume2 } from "lucide-react";
import website from "/assets/Untitled design.png"
import dashboardImage from "/assets/image.png"
import emailPage from "/assets/emailpage.jpg"
import recorderpage from "/assets/recorderpage.jpg"
import recordingDone from "/assets/recordingDone.jpg"
import processingPage from "/assets/processingPage.jpg"
import recordingsPage from "/assets/recordingspage.jpg"
import summariesPage from "/assets/Summaries.jpg"
import { useNavigate } from 'react-router-dom';
import { Instructions } from '../components/Instructions';

const LearnMore = ({showHeader}) => {
  const navigate = useNavigate();
  const [token,setToken] = useState(localStorage.getItem("token"))
  return (
    <div className="w-full px-4 sm:px-20">
      {showHeader && <header className="bg-white sticky top-0 z-50">
        <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center">
            {/* Logo - Optimized with proper sizing and alt text */}
            <div onClick={()=> navigate("/")} className="flex-shrink-0 cursor-pointer">
              <a>
                <img
                  src="/assets/Logo.png"
                  alt="Session Scribe - AI Meeting Companion Logo"
                  className="h-14 w-auto object-contain" 
                  width={128} 
                  height={40} 
                />
              </a>
            </div>
            {/* Navigation Links - Better semantics & hover effects */}
            <div className="hidden md:flex items-center space-x-8" role="menubar">
              <a
                onClick={()=> navigate("/#")}
                className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                aria-current="page"
                role="menuitem"
              >
                Home
              </a>
              <a
                onClick={()=> navigate("/#about")}
                className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                role="menuitem"
              >
                About
              </a>
              <a
                onClick={()=> navigate("/#Features")}
                className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                role="menuitem"
              >
                Features
              </a>
              <a
                onClick={()=> navigate("/#plans")}
                className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                role="menuitem"
              >
                Pricing
              </a>
              <a
                onClick={()=> navigate("/#contact")}
                className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                role="menuitem"
              >
                Contact
              </a>
              <a
                onClick={()=> navigate("/articles")}
                className="bg-gradient-to-r cursor-pointer from-[#B674E1] to-[#533490] bg-clip-text text-transparent font-medium transition-colors"
                role="menuitem"
              >
                Articles
              </a>
            </div>
            {/* Right-side CTA - Enhanced button styling */}
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
                type="button"
              >
                Start For Free
              </button>
            </div>
          </div>
        </nav>
      </header>}
      <main className='mt-4'>
        <Instructions/>
      </main>
    </div>
  )
}

export default LearnMore
