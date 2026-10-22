// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ScribeSessionPage() {
//   const [email, setEmail] = useState("");
//   const [emails, setEmails] = useState([]);
//   const navigate = useNavigate();
//   const handleSend = () => {
//     if (email.trim()) {
//       setEmails([...emails, email.trim()]);
//       setEmail("");
//     }
//     navigate("/recorder");
//   };

//   const handleClearAll = () => {
//     setEmails([]);
//     setEmail("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center px-6 py-16">
//       <div className="w-full max-w-6xl">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Let us Scribe your Session
//           </h1>
//           <h2 className="text-3xl font-bold text-purple-600 mb-6 mt-5">
//             "Share Meeting Documents with Your Team"
//           </h2>
//           <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-semibold">
//             Enter the email addresses of session participants to automatically
//             send them the meeting notes and documents once the session ends.
//           </p>
//         </div>

//         {/* Email Input Section */}
//         <div className="bg-purple-50 rounded-3xl p-8 border border-purple-600 ">
//           <div className="flex gap-4 mb-4">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="enter email address"
//               className="flex-1 px-6 py-4 rounded-full border border-purple-600 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent text-lg"
//             />
//             <button
//               onClick={handleSend}
//               className="px-8 py-4 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors text-lg"
//             >
//               Send
//             </button>
//           </div>

//           <div className="text-center mb-6">
//             <button
//               onClick={handleClearAll}
//               className="text-gray-500 hover:text-gray-700 transition-colors text-lg"
//             >
//               Clear all
//             </button>
//           </div>

//           <div className="text-center">
//             <p className="text-gray-600 text-lg">
//               <span className="font-medium">Tip:</span> You can add multiple
//               emails to share the meeting summary with your whole team.
//             </p>
//           </div>

//           {/* Display added emails */}
//           {emails.length > 0 && (
//             <div className="mt-6">
//               <div className="flex flex-wrap gap-2">
//                 {emails.map((emailAddr, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm"
//                   >
//                     {emailAddr}
//                     <button
//                       onClick={() =>
//                         setEmails(emails.filter((_, i) => i !== index))
//                       }
//                       className="ml-2 text-purple-600 hover:text-purple-800"
//                     >
//                       ×
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ScribeSessionPage() {
//   const [email, setEmail] = useState("");
//   const [emails, setEmails] = useState([]);
//   const navigate = useNavigate();

//   const handleAddEmail = () => {
//     const trimmedEmail = email.trim();

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (trimmedEmail && emailRegex.test(trimmedEmail) && !emails.includes(trimmedEmail)) {
//       setEmails([...emails, trimmedEmail]);
//       setEmail("");
//     } else if (!emailRegex.test(trimmedEmail) && trimmedEmail) {
//       alert("Please enter a valid email address");
//     } else if (emails.includes(trimmedEmail)) {
//       alert("This email has already been added");
//       setEmail("");
//     }
//   };

//   const handleRemoveEmail = (indexToRemove) => {
//     setEmails(emails.filter((_, index) => index !== indexToRemove));
//   };

//   const handleClearAll = () => {
//     setEmails([]);
//     setEmail("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       handleAddEmail();
//     }
//   };

//   const handleProceedToRecorder = () => {
//     // Navigate to recorder with emails as state
//     navigate("/recorder", { state: { emails } });
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center px-6 py-16">
//       <div className="w-full max-w-6xl">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Let us Scribe your Session
//           </h1>
//           <h2 className="text-3xl font-bold text-purple-600 mb-6 mt-5">
//             "Share Meeting Documents with Your Team"
//           </h2>
//           <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-semibold">
//             Enter the email addresses of session participants to automatically
//             send them the meeting notes and documents once the session ends.
//           </p>
//         </div>

//         {/* Email Input Section */}
//         <div className="bg-purple-50 rounded-3xl p-8 border border-purple-600">
//           {/* Display added emails above the input */}
//           {emails.length > 0 && (
//             <div className="mb-6">
//               <h3 className="text-lg font-medium text-gray-700 mb-3">
//                 Added Recipients ({emails.length}):
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {emails.map((emailAddr, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm border border-purple-200"
//                   >
//                     {emailAddr}
//                     <button
//                       onClick={() => handleRemoveEmail(index)}
//                       className="ml-2 text-purple-600 hover:text-purple-800 font-bold text-lg leading-none"
//                       title="Remove email"
//                     >
//                       ×
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="flex gap-4 mb-4">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="enter email address (press Enter or Space to add)"
//               className="flex-1 px-6 py-4 rounded-full border border-purple-600 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent text-lg"
//             />
//             <button
//               onClick={handleAddEmail}
//               className="px-8 py-4 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors text-lg"
//             >
//               Add
//             </button>
//           </div>

//           <div className="flex justify-center gap-4 mb-6">
//             <button
//               onClick={handleClearAll}
//               className="text-gray-500 hover:text-gray-700 transition-colors text-lg"
//               disabled={emails.length === 0}
//             >
//               Clear all
//             </button>

//             <button
//               onClick={handleProceedToRecorder}
//               className="px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors text-lg"
//             >
//               Proceed to Recorder
//             </button>
//           </div>

//           <div className="text-center">
//             <p className="text-gray-600 text-lg">
//               <span className="font-medium">Tip:</span> Press Enter or Space after typing an email to add it. 
//               You can add multiple emails to share the meeting summary with your whole team.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ScribeSessionPage() {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [previousEmails, setPreviousEmails] = useState([]);
  const [showPreviousEmails, setShowPreviousEmails] = useState(false);
  const [previousMeetingInfo, setPreviousMeetingInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch previous emails on component mount
  useEffect(() => {
    fetchPreviousEmails();
  }, []);

  const fetchPreviousEmails = async () => {

    try {
      const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/email/meeting/previous-emails', {
        method: 'GET',
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      });



      const data = await response.json();



      if (data.success && data.hasEmails) {
        setPreviousEmails(data.emails);
        setPreviousMeetingInfo(data.meetingInfo);
        setShowPreviousEmails(true);
      }
    } catch (error) {
      console.error('Error fetching previous emails:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEmail = () => {
    const trimmedEmail = email.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedEmail && emailRegex.test(trimmedEmail) && !emails.includes(trimmedEmail)) {
      setEmails([...emails, trimmedEmail]);
      setEmail("");
    } else if (!emailRegex.test(trimmedEmail) && trimmedEmail) {
      alert("Please enter a valid email address");
    } else if (emails.includes(trimmedEmail)) {
      alert("This email has already been added");
      setEmail("");
    }
  };

  const handleRemoveEmail = (indexToRemove) => {
    setEmails(emails.filter((_, index) => index !== indexToRemove));
  };

  const handleClearAll = () => {
    setEmails([]);
    setEmail("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleAddEmail();
    }
  };

  const handleCopyPreviousEmails = () => {
    // Add all previous emails that aren't already in the current list
    const newEmails = [...emails];
    previousEmails.forEach(prevEmail => {
      if (!newEmails.includes(prevEmail)) {
        newEmails.push(prevEmail);
      }
    });
    setEmails(newEmails);
  };

  const handleCopyIndividualEmail = (emailToCopy) => {
    if (!emails.includes(emailToCopy)) {
      setEmails([...emails, emailToCopy]);
    }
  };

  const handleProceedToRecorder = () => {
    // Navigate to recorder with emails as state
    navigate("/recorder", { state: { emails } });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-16">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let us Scribe your Session
          </h1>
          <h2 className="text-3xl font-bold text-purple-600 mb-6 mt-5">
            "Share Meeting Documents with Your Team"
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-semibold">
            Enter the email addresses of session participants to automatically
            send them the meeting notes and documents once the session ends.
          </p>
        </div>

        {/* Previous Emails Section */}
        {!loading && showPreviousEmails && previousEmails.length > 0 && (
          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-200 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-1">
                  Previous Meeting Recipients
                </h3>
                {previousMeetingInfo && (
                  <p className="text-sm text-blue-700">
                    From "{previousMeetingInfo.title}" - {formatDate(previousMeetingInfo.date)}
                  </p>
                )}
              </div>
              <button
                onClick={handleCopyPreviousEmails}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy All ({previousEmails.length})
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {previousEmails.map((prevEmail, index) => (
                <div
                  key={index}
                  onClick={() => handleCopyIndividualEmail(prevEmail)}
                  className="inline-flex items-center cursor-pointer px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm border border-blue-200"
                >
                  <span className="mr-2">{prevEmail}</span>
                  <button
                    className="text-blue-600 hover:text-blue-800 p-1 rounded"
                    title="Copy this email"
                    disabled={emails.includes(prevEmail)}
                  >
                    {emails.includes(prevEmail) ? (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Email Input Section */}
        <div className="bg-purple-50 rounded-3xl p-8 border border-purple-600">
          {/* Display added emails above the input */}
          {emails.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                Added Recipients ({emails.length}):
              </h3>
              <div className="flex flex-wrap gap-2">
                {emails.map((emailAddr, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm border border-purple-200"
                  >
                    {emailAddr}
                    <button
                      onClick={() => handleRemoveEmail(index)}
                      className="ml-2 text-purple-600 hover:text-purple-800 font-bold text-lg leading-none"
                      title="Remove email"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-4 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="enter email address (press Enter or Space to add)"
              className="flex-1 px-6 py-4 rounded-full border border-purple-600 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent text-lg"
            />
            <button
              onClick={handleAddEmail}
              className="px-8 py-4 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors text-lg"
            >
              Add
            </button>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={handleClearAll}
              className="text-gray-500 hover:text-gray-700 transition-colors text-lg"
              disabled={emails.length === 0}
            >
              Clear all
            </button>

            <button
              onClick={handleProceedToRecorder}
              className="px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors text-lg"
            >
              Proceed to Recorder
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              <span className="font-medium">Tip:</span> Press Enter or Space after typing an email to add it.
              You can add multiple emails to share the meeting summary with your whole team.
            </p>
          </div>
        </div>

        {/* Loading indicator */}
        {loading && (
          <div className="text-center py-4">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg">
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-gray-600">Loading previous emails...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}