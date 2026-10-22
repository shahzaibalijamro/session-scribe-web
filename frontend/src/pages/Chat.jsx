// // // // // // // // import React from 'react';
// // // // // // // // import { MessageCircle, Sparkles, ArrowUp } from 'lucide-react';

// // // // // // // // export default function Chat() {
// // // // // // // //   return (
// // // // // // // //     <div className="mx-auto w-full bg-white min-h-screen">
// // // // // // // //       {/* Header */}
// // // // // // // //       <div className="border-b border-gray-200 p-6">
// // // // // // // //         <div className="flex items-center space-x-3 mb-2">
// // // // // // // //           <div className="w-12 h-12 bg-[#9810fa] rounded-full flex items-center justify-center">
// // // // // // // //             <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
// // // // // // // //               <div className="w-3 h-3 bg-[#9810fa] rounded-full"></div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <h1 className="text-xl font-semibold text-gray-900">SessionScribe</h1>
// // // // // // // //         </div>
// // // // // // // //         <div className="flex items-center space-x-2 text-sm text-gray-600">
// // // // // // // //           <span>This channel is just between</span>
// // // // // // // //           <span className="text-blue-600 font-medium">SessionScribe</span>
// // // // // // // //           <span>and you. Ask anything about your conversations</span>
// // // // // // // //           <MessageCircle className="w-4 h-4" />
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Chat Content */}
// // // // // // // //       <div className="p-6">
// // // // // // // //         {/* Message */}
// // // // // // // //         <div className="flex items-start space-x-3 mb-6">
// // // // // // // //           <div className="w-8 h-8 bg-[#9810fa] rounded-full flex items-center justify-center flex-shrink-0">
// // // // // // // //             <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
// // // // // // // //               <div className="w-2 h-2 bg-[#9810fa] rounded-full"></div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <div className="flex-1">
// // // // // // // //             <div className="flex items-center space-x-2 mb-2">
// // // // // // // //               <span className="font-medium text-gray-900">SessionScribe</span>
// // // // // // // //               <span className="text-sm text-gray-500">just now</span>
// // // // // // // //             </div>

// // // // // // // //             <div className="space-y-4">
// // // // // // // //               <p className="text-gray-900">
// // // // // // // //                 Stuck searching for answers? SessionScribe Chat has you covered.
// // // // // // // //               </p>

// // // // // // // //               <p className="text-gray-700">
// // // // // // // //                 With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // // // // // //               </p>

// // // // // // // //               <ul className="space-y-2 text-gray-700">
// // // // // // // //                 <li className="flex items-start">
// // // // // // // //                   <span className="mr-2">•</span>
// // // // // // // //                   <span>"What was decided about pricing in last week's leadership meeting?"</span>
// // // // // // // //                 </li>
// // // // // // // //                 <li className="flex items-start">
// // // // // // // //                   <span className="mr-2">•</span>
// // // // // // // //                   <span>"When is our product launch date?"</span>
// // // // // // // //                 </li>
// // // // // // // //                 <li className="flex items-start">
// // // // // // // //                   <span className="mr-2">•</span>
// // // // // // // //                   <span>"What were Q4 revenue totals from the earnings call?"</span>
// // // // // // // //                 </li>
// // // // // // // //               </ul>

// // // // // // // //               <p className="text-gray-700">
// // // // // // // //                 SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.
// // // // // // // //               </p>

// // // // // // // //               <div className="flex items-center space-x-2 text-gray-700">
// // // // // // // //                 <span>Not sure what to ask?</span>
// // // // // // // //                 <span>😉</span>
// // // // // // // //                 <span>Press "space" on your keyboard or click the sparkle icon below to get suggestions.</span>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Action Buttons */}
// // // // // // // //         <div className="flex flex-wrap gap-3 mb-6 ml-11">
// // // // // // // //           <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors">
// // // // // // // //             <MessageCircle className="w-4 h-4" />
// // // // // // // //             <span className="text-sm">Ask a follow up...</span>
// // // // // // // //           </button>

// // // // // // // //           <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors">
// // // // // // // //             <MessageCircle className="w-4 h-4" />
// // // // // // // //             <span className="text-sm">What can I ask SessionScribe Chat?</span>
// // // // // // // //           </button>

// // // // // // // //           <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors">
// // // // // // // //             <MessageCircle className="w-4 h-4" />
// // // // // // // //             <span className="text-sm">How does SessionScribe Chat generate its answers?</span>
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Input Section */}
// // // // // // // //       <div className="fixed bottom-0 bg-white w-[-webkit-fill-available] border-t border-gray-200 p-4">
// // // // // // // //         <div className="w-full mx-auto">
// // // // // // // //           <div className="relative">
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // // // // // //               className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9810fa] focus:border-transparent"
// // // // // // // //             />
// // // // // // // //             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // // // // // //               <button className="p-1 text-gray-400 hover:text-gray-600">
// // // // // // // //                 <Sparkles className="w-5 h-5" />
// // // // // // // //               </button>
// // // // // // // //               <button className="p-1 text-gray-400 hover:text-gray-600">
// // // // // // // //                 <ArrowUp className="w-5 h-5" />
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <div className="text-right mt-2">
// // // // // // // //             <span className="text-sm text-gray-500">Content Script</span>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Bottom padding to account for fixed input */}
// // // // // // // //       <div className="h-24"></div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // import { MessageCircle, Sparkles, ArrowUp, Send } from 'lucide-react';

// // // // // // // export default function Chat() {
// // // // // // //   const [messages, setMessages] = useState([
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       sender: 'SessionScribe',
// // // // // // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.

// // // // // // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:

// // // // // // // • "What was decided about pricing in last week's leadership meeting?"
// // // // // // // • "When is our product launch date?"  
// // // // // // // • "What were Q4 revenue totals from the earnings call?"

// // // // // // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // // // // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // // // // // //       timestamp: new Date(),
// // // // // // //       isBot: true
// // // // // // //     }
// // // // // // //   ]);

// // // // // // //   const [inputValue, setInputValue] = useState('');
// // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // // // // // //   const messagesEndRef = useRef(null);
// // // // // // //   const inputRef = useRef(null);

// // // // // // //   const scrollToBottom = () => {
// // // // // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     scrollToBottom();
// // // // // // //   }, [messages]);

// // // // // // //   // Handle keyboard shortcuts
// // // // // // //   useEffect(() => {
// // // // // // //     const handleKeyDown = (e) => {
// // // // // // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // // // // // //         e.preventDefault();
// // // // // // //         showSuggestions();
// // // // // // //       }
// // // // // // //     };

// // // // // // //     document.addEventListener('keydown', handleKeyDown);
// // // // // // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // // // // // //   }, []);

// // // // // // //   const sendMessage = async (messageText) => {
// // // // // // //     if (!messageText.trim() || isLoading) return;

// // // // // // //     // Add user message
// // // // // // //     const userMessage = {
// // // // // // //       id: Date.now(),
// // // // // // //       sender: 'You',
// // // // // // //       content: messageText,
// // // // // // //       timestamp: new Date(),
// // // // // // //       isBot: false
// // // // // // //     };

// // // // // // //     setMessages(prev => [...prev, userMessage]);
// // // // // // //     setInputValue('');
// // // // // // //     setIsLoading(true);

// // // // // // //     try {
// // // // // // //       // Get auth token - adjust this based on your auth implementation
// // // // // // //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// // // // // // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //           'Authorization': token // Adjust based on your auth header format
// // // // // // //         },
// // // // // // //         body: JSON.stringify({ question: messageText })
// // // // // // //       });

// // // // // // //       const data = await response.json();

// // // // // // //       if (data.success) {
// // // // // // //         // Update current meeting info if provided
// // // // // // //         if (data.meetingTitle && data.meetingDate) {
// // // // // // //           setCurrentMeeting({
// // // // // // //             title: data.meetingTitle,
// // // // // // //             date: data.meetingDate
// // // // // // //           });
// // // // // // //         }

// // // // // // //         // Add bot response
// // // // // // //         const botMessage = {
// // // // // // //           id: Date.now() + 1,
// // // // // // //           sender: 'SessionScribe',
// // // // // // //           content: data.response,
// // // // // // //           timestamp: new Date(),
// // // // // // //           isBot: true
// // // // // // //         };

// // // // // // //         setMessages(prev => [...prev, botMessage]);
// // // // // // //       } else {
// // // // // // //         throw new Error(data.error || 'Failed to get response');
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Chat error:', error);

// // // // // // //       const errorMessage = {
// // // // // // //         id: Date.now() + 1,
// // // // // // //         sender: 'SessionScribe',
// // // // // // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // // // // // //         timestamp: new Date(),
// // // // // // //         isBot: true,
// // // // // // //         isError: true
// // // // // // //       };

// // // // // // //       setMessages(prev => [...prev, errorMessage]);
// // // // // // //     } finally {
// // // // // // //       setIsLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleSubmit = () => {
// // // // // // //     sendMessage(inputValue);
// // // // // // //   };

// // // // // // //   const handleQuickAction = (question) => {
// // // // // // //     sendMessage(question);
// // // // // // //   };

// // // // // // //   const showSuggestions = () => {
// // // // // // //     const suggestions = [
// // // // // // //       "What were the main decisions made in the last meeting?",
// // // // // // //       "Who were the participants in the latest meeting?",
// // // // // // //       "What are the next steps from the last meeting?",
// // // // // // //       "Can you summarize the key points discussed?",
// // // // // // //       "What action items were assigned?"
// // // // // // //     ];

// // // // // // //     // You could implement a modal or dropdown here
// // // // // // //     // For now, let's just send a random suggestion
// // // // // // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // // // // // //     setInputValue(randomSuggestion);
// // // // // // //     inputRef.current?.focus();
// // // // // // //   };

// // // // // // //   const formatTimestamp = (date) => {
// // // // // // //     const now = new Date();
// // // // // // //     const diff = now - date;
// // // // // // //     const minutes = Math.floor(diff / 60000);

// // // // // // //     if (minutes < 1) return 'just now';
// // // // // // //     if (minutes < 60) return `${minutes}m ago`;
// // // // // // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // // // // // //     return date.toLocaleDateString();
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="mx-auto w-full bg-white min-h-screen flex flex-col">
// // // // // // //       {/* Header */}
// // // // // // //       <div className="border-b border-gray-200 p-6 flex-shrink-0">
// // // // // // //         <div className="flex items-center space-x-3 mb-2">
// // // // // // //           <div className="w-12 h-12 bg-[#9810fa] rounded-full flex items-center justify-center">
// // // // // // //             <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
// // // // // // //               <div className="w-3 h-3 bg-[#9810fa] rounded-full"></div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             <h1 className="text-xl font-semibold text-gray-900">SessionScribe</h1>
// // // // // // //             {currentMeeting && (
// // // // // // //               <p className="text-sm text-gray-500">
// // // // // // //                 Discussing: {currentMeeting.title} ({currentMeeting.date})
// // // // // // //               </p>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="flex items-center space-x-2 text-sm text-gray-600">
// // // // // // //           <span>This channel is just between</span>
// // // // // // //           <span className="text-blue-600 font-medium">SessionScribe</span>
// // // // // // //           <span>and you. Ask anything about your conversations</span>
// // // // // // //           <MessageCircle className="w-4 h-4" />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Chat Messages */}
// // // // // // //       <div className="flex-1 overflow-y-auto p-6 pb-32">
// // // // // // //         {messages.map((message) => (
// // // // // // //           <div key={message.id} className="flex items-start space-x-3 mb-6">
// // // // // // //             {message.isBot ? (
// // // // // // //               <div className="w-8 h-8 bg-[#9810fa] rounded-full flex items-center justify-center flex-shrink-0">
// // // // // // //                 <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
// // // // // // //                   <div className="w-2 h-2 bg-[#9810fa] rounded-full"></div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //               <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
// // // // // // //                 <span className="text-white text-sm font-medium">
// // // // // // //                   {message.sender[0]}
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             <div className="flex-1">
// // // // // // //               <div className="flex items-center space-x-2 mb-2">
// // // // // // //                 <span className="font-medium text-gray-900">{message.sender}</span>
// // // // // // //                 <span className="text-sm text-gray-500">
// // // // // // //                   {formatTimestamp(message.timestamp)}
// // // // // // //                 </span>
// // // // // // //               </div>

// // // // // // //               <div className={`prose prose-sm max-w-none ${message.isError ? 'text-red-600' : 'text-gray-900'}`}>
// // // // // // //                 {message.content.split('\n').map((line, index) => {
// // // // // // //                   if (line.trim().startsWith('•')) {
// // // // // // //                     return (
// // // // // // //                       <div key={index} className="flex items-start mb-1">
// // // // // // //                         <span className="mr-2">•</span>
// // // // // // //                         <span>{line.replace(/^•\s*/, '')}</span>
// // // // // // //                       </div>
// // // // // // //                     );
// // // // // // //                   }
// // // // // // //                   return line.trim() ? <p key={index} className="mb-2">{line}</p> : <br key={index} />;
// // // // // // //                 })}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ))}

// // // // // // //         {/* Loading indicator */}
// // // // // // //         {isLoading && (
// // // // // // //           <div className="flex items-start space-x-3 mb-6">
// // // // // // //             <div className="w-8 h-8 bg-[#9810fa] rounded-full flex items-center justify-center flex-shrink-0">
// // // // // // //               <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
// // // // // // //                 <div className="w-2 h-2 bg-[#9810fa] rounded-full"></div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="flex-1">
// // // // // // //               <div className="flex items-center space-x-2 mb-2">
// // // // // // //                 <span className="font-medium text-gray-900">SessionScribe</span>
// // // // // // //                 <span className="text-sm text-gray-500">typing...</span>
// // // // // // //               </div>
// // // // // // //               <div className="flex space-x-1">
// // // // // // //                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
// // // // // // //                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // // // // //                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Quick action buttons - only show after initial message */}
// // // // // // //         {messages.length === 1 && (
// // // // // // //           <div className="flex flex-wrap gap-3 mb-6 ml-11">
// // // // // // //             <button 
// // // // // // //               onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors"
// // // // // // //             >
// // // // // // //               <MessageCircle className="w-4 h-4" />
// // // // // // //               <span className="text-sm">What was discussed in the last meeting?</span>
// // // // // // //             </button>

// // // // // // //             <button 
// // // // // // //               onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors"
// // // // // // //             >
// // // // // // //               <MessageCircle className="w-4 h-4" />
// // // // // // //               <span className="text-sm">What are the next steps?</span>
// // // // // // //             </button>

// // // // // // //             <button 
// // // // // // //               onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors"
// // // // // // //             >
// // // // // // //               <MessageCircle className="w-4 h-4" />
// // // // // // //               <span className="text-sm">Who were the participants?</span>
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         <div ref={messagesEndRef} />
// // // // // // //       </div>

// // // // // // //       {/* Input Section */}
// // // // // // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-white border-t border-gray-200 p-4 flex-shrink-0">
// // // // // // //         <div className="mx-auto">
// // // // // // //           <div className="relative">
// // // // // // //             <input
// // // // // // //               ref={inputRef}
// // // // // // //               type="text"
// // // // // // //               value={inputValue}
// // // // // // //               onChange={(e) => setInputValue(e.target.value)}
// // // // // // //               onKeyDown={(e) => {
// // // // // // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // // // // // //                   e.preventDefault();
// // // // // // //                   handleSubmit();
// // // // // // //                 }
// // // // // // //               }}
// // // // // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // // // // //               disabled={isLoading}
// // // // // // //               className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9810fa] focus:border-transparent disabled:opacity-50"
// // // // // // //             />
// // // // // // //             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // // // // //               <button 
// // // // // // //                 type="button"
// // // // // // //                 onClick={showSuggestions}
// // // // // // //                 className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
// // // // // // //               >
// // // // // // //                 <Sparkles className="w-5 h-5" />
// // // // // // //               </button>
// // // // // // //               <button 
// // // // // // //                 type="button"
// // // // // // //                 onClick={handleSubmit}
// // // // // // //                 disabled={!inputValue.trim() || isLoading}
// // // // // // //                 className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50 transition-colors"
// // // // // // //               >
// // // // // // //                 <Send className="w-5 h-5" />
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User } from 'lucide-react';

// // // // // // export default function Chat() {
// // // // // //   const [messages, setMessages] = useState([
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       sender: 'SessionScribe',
// // // // // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // // // // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // // // // • "What was decided about pricing in last week's leadership meeting?"
// // // // // // • "When is our product launch date?"  
// // // // // // • "What were Q4 revenue totals from the earnings call?"
// // // // // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // // // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // // // // //       timestamp: new Date(),
// // // // // //       isBot: true
// // // // // //     }
// // // // // //   ]);

// // // // // //   const [inputValue, setInputValue] = useState('');
// // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // // // // //   const messagesEndRef = useRef(null);
// // // // // //   const inputRef = useRef(null);

// // // // // //   const scrollToBottom = () => {
// // // // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     scrollToBottom();
// // // // // //   }, [messages]);

// // // // // //   // Handle keyboard shortcuts
// // // // // //   useEffect(() => {
// // // // // //     const handleKeyDown = (e) => {
// // // // // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // // // // //         e.preventDefault();
// // // // // //         showSuggestions();
// // // // // //       }
// // // // // //     };

// // // // // //     document.addEventListener('keydown', handleKeyDown);
// // // // // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // // // // //   }, []);

// // // // // //   const sendMessage = async (messageText) => {
// // // // // //     if (!messageText.trim() || isLoading) return;

// // // // // //     // Add user message
// // // // // //     const userMessage = {
// // // // // //       id: Date.now(),
// // // // // //       sender: 'You',
// // // // // //       content: messageText,
// // // // // //       timestamp: new Date(),
// // // // // //       isBot: false
// // // // // //     };

// // // // // //     setMessages(prev => [...prev, userMessage]);
// // // // // //     setInputValue('');
// // // // // //     setIsLoading(true);

// // // // // //     try {
// // // // // //       // Get auth token - adjust this based on your auth implementation
// // // // // //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// // // // // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //           'Authorization': token // Adjust based on your auth header format
// // // // // //         },
// // // // // //         body: JSON.stringify({ question: messageText })
// // // // // //       });

// // // // // //       const data = await response.json();

// // // // // //       if (data.success) {
// // // // // //         // Update current meeting info if provided
// // // // // //         if (data.meetingTitle && data.meetingDate) {
// // // // // //           setCurrentMeeting({
// // // // // //             title: data.meetingTitle,
// // // // // //             date: data.meetingDate
// // // // // //           });
// // // // // //         }

// // // // // //         // Add bot response
// // // // // //         const botMessage = {
// // // // // //           id: Date.now() + 1,
// // // // // //           sender: 'SessionScribe',
// // // // // //           content: data.response,
// // // // // //           timestamp: new Date(),
// // // // // //           isBot: true
// // // // // //         };

// // // // // //         setMessages(prev => [...prev, botMessage]);
// // // // // //       } else {
// // // // // //         throw new Error(data.error || 'Failed to get response');
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('Chat error:', error);

// // // // // //       const errorMessage = {
// // // // // //         id: Date.now() + 1,
// // // // // //         sender: 'SessionScribe',
// // // // // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // // // // //         timestamp: new Date(),
// // // // // //         isBot: true,
// // // // // //         isError: true
// // // // // //       };

// // // // // //       setMessages(prev => [...prev, errorMessage]);
// // // // // //     } finally {
// // // // // //       setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSubmit = () => {
// // // // // //     sendMessage(inputValue);
// // // // // //   };

// // // // // //   const handleQuickAction = (question) => {
// // // // // //     sendMessage(question);
// // // // // //   };

// // // // // //   const showSuggestions = () => {
// // // // // //     const suggestions = [
// // // // // //       "What were the main decisions made in the last meeting?",
// // // // // //       "Who were the participants in the latest meeting?",
// // // // // //       "What are the next steps from the last meeting?",
// // // // // //       "Can you summarize the key points discussed?",
// // // // // //       "What action items were assigned?"
// // // // // //     ];

// // // // // //     // You could implement a modal or dropdown here
// // // // // //     // For now, let's just send a random suggestion
// // // // // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // // // // //     setInputValue(randomSuggestion);
// // // // // //     inputRef.current?.focus();
// // // // // //   };

// // // // // //   const formatTimestamp = (date) => {
// // // // // //     const now = new Date();
// // // // // //     const diff = now - date;
// // // // // //     const minutes = Math.floor(diff / 60000);

// // // // // //     if (minutes < 1) return 'just now';
// // // // // //     if (minutes < 60) return `${minutes}m ago`;
// // // // // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // // // // //     return date.toLocaleDateString();
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// // // // // //       {/* Modern Header with Glassmorphism */}
// // // // // //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// // // // // //         <div className="max-w-4xl mx-auto px-6 py-6">
// // // // // //           <div className="flex items-center justify-between">
// // // // // //             <div className="flex items-center space-x-4">
// // // // // //               <div className="relative">
// // // // // //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// // // // // //                   <Bot className="w-8 h-8 text-white" />
// // // // // //                 </div>
// // // // // //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// // // // // //                   SessionScribe
// // // // // //                 </h1>
// // // // // //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// // // // // //                 {currentMeeting && (
// // // // // //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// // // // // //                     📝 {currentMeeting.title} • {currentMeeting.date}
// // // // // //                   </p>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// // // // // //               <MessageCircle className="w-4 h-4" />
// // // // // //               <span>Private conversation</span>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Chat Container */}
// // // // // //       <div className="max-w-4xl mx-auto px-6 pb-32">
// // // // // //         <div className="py-8 space-y-8">
// // // // // //           {messages.map((message) => (
// // // // // //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// // // // // //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// // // // // //                 {/* Avatar */}
// // // // // //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// // // // // //                   {message.isBot ? (
// // // // // //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // // // //                       <Bot className="w-5 h-5 text-white" />
// // // // // //                     </div>
// // // // // //                   ) : (
// // // // // //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// // // // // //                       <User className="w-5 h-5 text-white" />
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>

// // // // // //                 {/* Message Card */}
// // // // // //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// // // // // //                   {/* Header */}
// // // // // //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// // // // // //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// // // // // //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// // // // // //                       {formatTimestamp(message.timestamp)}
// // // // // //                     </span>
// // // // // //                   </div>

// // // // // //                   {/* Message Content */}
// // // // // //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// // // // // //                     message.isBot 
// // // // // //                       ? message.isError 
// // // // // //                         ? 'bg-red-50/80 border border-red-100' 
// // // // // //                         : 'bg-white/80 border border-purple-100/50'
// // // // // //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// // // // // //                   }`}>
// // // // // //                     <div className={`prose prose-sm max-w-none ${
// // // // // //                       message.isBot 
// // // // // //                         ? message.isError 
// // // // // //                           ? 'text-red-700' 
// // // // // //                           : 'text-gray-800'
// // // // // //                         : 'text-white prose-invert'
// // // // // //                     }`}>
// // // // // //                       {message.content.split('\n').map((line, index) => {
// // // // // //                         if (line.trim().startsWith('•')) {
// // // // // //                           return (
// // // // // //                             <div key={index} className="flex items-start mb-3">
// // // // // //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// // // // // //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// // // // // //                             </div>
// // // // // //                           );
// // // // // //                         }
// // // // // //                         return line.trim() ? (
// // // // // //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// // // // // //                         ) : (
// // // // // //                           <br key={index} />
// // // // // //                         );
// // // // // //                       })}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}

// // // // // //           {/* Loading indicator */}
// // // // // //           {isLoading && (
// // // // // //             <div className="flex justify-start">
// // // // // //               <div className="flex items-start space-x-3 max-w-3xl">
// // // // // //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // // // //                   <Bot className="w-5 h-5 text-white" />
// // // // // //                 </div>
// // // // // //                 <div className="flex-1 mr-12">
// // // // // //                   <div className="flex items-center space-x-2 mb-3">
// // // // // //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// // // // // //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// // // // // //                       typing...
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// // // // // //                     <div className="flex space-x-2">
// // // // // //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// // // // // //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // // // //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* Quick action buttons - only show after initial message */}
// // // // // //           {messages.length === 1 && (
// // // // // //             <div className="flex flex-col space-y-4 max-w-3xl">
// // // // // //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // //                 <button 
// // // // // //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // // //                 >
// // // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // // //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// // // // // //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// // // // // //                   </div>
// // // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// // // // // //                 </button>

// // // // // //                 <button 
// // // // // //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // // //                 >
// // // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // // //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// // // // // //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// // // // // //                   </div>
// // // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// // // // // //                 </button>

// // // // // //                 <button 
// // // // // //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // // //                 >
// // // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // // //                     <User className="w-5 h-5 text-purple-600" />
// // // // // //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// // // // // //                   </div>
// // // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div ref={messagesEndRef} />
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Modern Input Section */}
// // // // // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// // // // // //         <div className="max-w-4xl mx-auto p-6">
// // // // // //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// // // // // //             <input
// // // // // //               ref={inputRef}
// // // // // //               type="text"
// // // // // //               value={inputValue}
// // // // // //               onChange={(e) => setInputValue(e.target.value)}
// // // // // //               onKeyDown={(e) => {
// // // // // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // // // // //                   e.preventDefault();
// // // // // //                   handleSubmit();
// // // // // //                 }
// // // // // //               }}
// // // // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // // // //               disabled={isLoading}
// // // // // //               className="w-full px-6 py-4 pr-20 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// // // // // //             />
// // // // // //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // // // //               <button 
// // // // // //                 type="button"
// // // // // //                 onClick={showSuggestions}
// // // // // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // // // // //                 title="Get suggestions (Space)"
// // // // // //               >
// // // // // //                 <Sparkles className="w-5 h-5" />
// // // // // //               </button>
// // // // // //               <button 
// // // // // //                 type="button"
// // // // // //                 onClick={handleSubmit}
// // // // // //                 disabled={!inputValue.trim() || isLoading}
// // // // // //                 className="p-2 bg-gradient-to-br from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// // // // // //                 title="Send message"
// // // // // //               >
// // // // // //                 <Send className="w-5 h-5" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <p className="text-center text-xs text-gray-500 mt-3">
// // // // // //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // // // // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff } from 'lucide-react';
// // // // // import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// // // // // import { Track } from "livekit-client";

// // // // // // Voice Assistant Components
// // // // // const Message = ({ type, text }) => {
// // // // //   return (
// // // // //     <div className="flex items-start space-x-3 mb-4">
// // // // //       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
// // // // //         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
// // // // //       }`}>
// // // // //         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
// // // // //       </div>
// // // // //       <div className="flex-1">
// // // // //         <div className="text-xs text-gray-500 mb-1">
// // // // //           {type === "agent" ? "Voice Assistant" : "You"}
// // // // //         </div>
// // // // //         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
// // // // //           {text}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const SimpleVoiceAssistant = () => {
// // // // //   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
// // // // //   const localParticipant = useLocalParticipant();
// // // // //   const { segments: userTranscriptions } = useTrackTranscription({
// // // // //     publication: localParticipant.microphoneTrack,
// // // // //     source: Track.Source.Microphone,
// // // // //     participant: localParticipant.localParticipant,
// // // // //   });

// // // // //   const [messages, setMessages] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const allMessages = [
// // // // //       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
// // // // //       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
// // // // //     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
// // // // //     setMessages(allMessages);
// // // // //   }, [agentTranscriptions, userTranscriptions]);

// // // // //   return (
// // // // //     <div className="flex flex-col h-full">
// // // // //       <div className="flex items-center justify-center py-8">
// // // // //         <div className="relative">
// // // // //           <BarVisualizer 
// // // // //             state={state} 
// // // // //             barCount={7} 
// // // // //             trackRef={audioTrack}
// // // // //             className="w-32 h-16"
// // // // //           />
// // // // //           <div className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${
// // // // //             state === "listening" ? "text-green-600" : 
// // // // //             state === "thinking" ? "text-yellow-600" : 
// // // // //             state === "speaking" ? "text-purple-600" : "text-gray-500"
// // // // //           }`}>
// // // // //             {state === "listening" && "Listening..."}
// // // // //             {state === "thinking" && "Thinking..."}
// // // // //             {state === "speaking" && "Speaking..."}
// // // // //             {state === "idle" && "Ready"}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="flex-1 px-6 pb-4">
// // // // //         <VoiceAssistantControlBar className="mb-6" />
// // // // //         <div className="space-y-4 max-h-64 overflow-y-auto">
// // // // //           {messages.map((msg, index) => (
// // // // //             <Message key={msg.id || index} type={msg.type} text={msg.text} />
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const LiveKitModal = ({ onClose }) => {
// // // // //   const [isSubmittingName, setIsSubmittingName] = useState(true);
// // // // //   const [name, setName] = useState("");
// // // // //   const [token, setToken] = useState(null);

// // // // //   const getToken = useCallback(async (userName) => {
// // // // //     try {
// // // // //       const response = await fetch(
// // // // //         `/api/getToken?name=${encodeURIComponent(userName)}`
// // // // //       );
// // // // //       const token = await response.text();
// // // // //       setToken(token);
// // // // //       setIsSubmittingName(false);
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //     }
// // // // //   }, []);

// // // // //   const handleNameSubmit = (e) => {
// // // // //     if (e) e.preventDefault();
// // // // //     if (name.trim()) {
// // // // //       getToken(name);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// // // // //       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
// // // // //         <div className="p-6 border-b border-gray-100">
// // // // //           <div className="flex items-center justify-between">
// // // // //             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
// // // // //             <button
// // // // //               onClick={onClose}
// // // // //               className="text-gray-400 hover:text-gray-600 transition-colors"
// // // // //             >
// // // // //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // //               </svg>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="h-96">
// // // // //           {isSubmittingName ? (
// // // // //             <div className="p-6">
// // // // //               <div className="space-y-4">
// // // // //                 <div>
// // // // //                   <div className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                     Enter your name to start voice conversation
// // // // //                   </div>
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     value={name}
// // // // //                     onChange={(e) => setName(e.target.value)}
// // // // //                     onKeyDown={(e) => {
// // // // //                       if (e.key === 'Enter' && name.trim()) {
// // // // //                         handleNameSubmit(e);
// // // // //                       }
// // // // //                     }}
// // // // //                     placeholder="Your name"
// // // // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="flex space-x-3">
// // // // //                   <button 
// // // // //                     onClick={handleNameSubmit}
// // // // //                     disabled={!name.trim()}
// // // // //                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
// // // // //                   >
// // // // //                     Connect
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={onClose}
// // // // //                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
// // // // //                   >
// // // // //                     Cancel
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ) : token ? (
// // // // //             <LiveKitRoom
// // // // //               serverUrl={import.meta.env.VITE_LIVEKIT_URL}
// // // // //               token={token}
// // // // //               connect={true}
// // // // //               video={false}
// // // // //               audio={true}
// // // // //               onDisconnected={() => {
// // // // //                 onClose();
// // // // //                 setIsSubmittingName(true);
// // // // //               }}
// // // // //             >
// // // // //               <RoomAudioRenderer />
// // // // //               <SimpleVoiceAssistant />
// // // // //             </LiveKitRoom>
// // // // //           ) : (
// // // // //             <div className="flex items-center justify-center h-full">
// // // // //               <div className="text-center">
// // // // //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// // // // //                 <p className="text-gray-600">Connecting...</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Main Chat Component
// // // // // export default function Chat() {
// // // // //   const [messages, setMessages] = useState([
// // // // //     {
// // // // //       id: 1,
// // // // //       sender: 'SessionScribe',
// // // // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // // // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // // // • "What was decided about pricing in last week's leadership meeting?"
// // // // // • "When is our product launch date?"  
// // // // // • "What were Q4 revenue totals from the earnings call?"
// // // // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // // // //       timestamp: new Date(),
// // // // //       isBot: true
// // // // //     }
// // // // //   ]);

// // // // //   const [inputValue, setInputValue] = useState('');
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // // // //   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
// // // // //   const messagesEndRef = useRef(null);
// // // // //   const inputRef = useRef(null);

// // // // //   const scrollToBottom = () => {
// // // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     scrollToBottom();
// // // // //   }, [messages]);

// // // // //   // Handle keyboard shortcuts
// // // // //   useEffect(() => {
// // // // //     const handleKeyDown = (e) => {
// // // // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // // // //         e.preventDefault();
// // // // //         showSuggestions();
// // // // //       }
// // // // //     };

// // // // //     document.addEventListener('keydown', handleKeyDown);
// // // // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // // // //   }, []);

// // // // //   const sendMessage = async (messageText) => {
// // // // //     if (!messageText.trim() || isLoading) return;

// // // // //     // Add user message
// // // // //     const userMessage = {
// // // // //       id: Date.now(),
// // // // //       sender: 'You',
// // // // //       content: messageText,
// // // // //       timestamp: new Date(),
// // // // //       isBot: false
// // // // //     };

// // // // //     setMessages(prev => [...prev, userMessage]);
// // // // //     setInputValue('');
// // // // //     setIsLoading(true);

// // // // //     try {
// // // // //       // For demo purposes, we'll simulate an API response
// // // // //       // Replace this with your actual API call
// // // // //       setTimeout(() => {
// // // // //         const botMessage = {
// // // // //           id: Date.now() + 1,
// // // // //           sender: 'SessionScribe',
// // // // //           content: `I understand you're asking about "${messageText}". I'm analyzing your conversation data to provide you with the most relevant information. This is a demo response - in production, this would connect to your actual SessionScribe backend.`,
// // // // //           timestamp: new Date(),
// // // // //           isBot: true
// // // // //         };
// // // // //         setMessages(prev => [...prev, botMessage]);
// // // // //         setIsLoading(false);
// // // // //       }, 1500);
// // // // //     } catch (error) {
// // // // //       console.error('Chat error:', error);

// // // // //       const errorMessage = {
// // // // //         id: Date.now() + 1,
// // // // //         sender: 'SessionScribe',
// // // // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // // // //         timestamp: new Date(),
// // // // //         isBot: true,
// // // // //         isError: true
// // // // //       };

// // // // //       setMessages(prev => [...prev, errorMessage]);
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = () => {
// // // // //     sendMessage(inputValue);
// // // // //   };

// // // // //   const handleQuickAction = (question) => {
// // // // //     sendMessage(question);
// // // // //   };

// // // // //   const showSuggestions = () => {
// // // // //     const suggestions = [
// // // // //       "What were the main decisions made in the last meeting?",
// // // // //       "Who were the participants in the latest meeting?",
// // // // //       "What are the next steps from the last meeting?",
// // // // //       "Can you summarize the key points discussed?",
// // // // //       "What action items were assigned?"
// // // // //     ];

// // // // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // // // //     setInputValue(randomSuggestion);
// // // // //     inputRef.current?.focus();
// // // // //   };

// // // // //   const formatTimestamp = (date) => {
// // // // //     const now = new Date();
// // // // //     const diff = now - date;
// // // // //     const minutes = Math.floor(diff / 60000);

// // // // //     if (minutes < 1) return 'just now';
// // // // //     if (minutes < 60) return `${minutes}m ago`;
// // // // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // // // //     return date.toLocaleDateString();
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// // // // //       {/* Modern Header with Glassmorphism */}
// // // // //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// // // // //         <div className="max-w-4xl mx-auto px-6 py-6">
// // // // //           <div className="flex items-center justify-between">
// // // // //             <div className="flex items-center space-x-4">
// // // // //               <div className="relative">
// // // // //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// // // // //                   <Bot className="w-8 h-8 text-white" />
// // // // //                 </div>
// // // // //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // // // //               </div>
// // // // //               <div>
// // // // //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// // // // //                   SessionScribe
// // // // //                 </h1>
// // // // //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// // // // //                 {currentMeeting && (
// // // // //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// // // // //                     📝 {currentMeeting.title} • {currentMeeting.date}
// // // // //                   </p>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// // // // //               <MessageCircle className="w-4 h-4" />
// // // // //               <span>Private conversation</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Chat Container */}
// // // // //       <div className="max-w-4xl mx-auto px-6 pb-32">
// // // // //         <div className="py-8 space-y-8">
// // // // //           {messages.map((message) => (
// // // // //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// // // // //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// // // // //                 {/* Avatar */}
// // // // //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// // // // //                   {message.isBot ? (
// // // // //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // // //                       <Bot className="w-5 h-5 text-white" />
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// // // // //                       <User className="w-5 h-5 text-white" />
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>

// // // // //                 {/* Message Card */}
// // // // //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// // // // //                   {/* Header */}
// // // // //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// // // // //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// // // // //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// // // // //                       {formatTimestamp(message.timestamp)}
// // // // //                     </span>
// // // // //                   </div>

// // // // //                   {/* Message Content */}
// // // // //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// // // // //                     message.isBot 
// // // // //                       ? message.isError 
// // // // //                         ? 'bg-red-50/80 border border-red-100' 
// // // // //                         : 'bg-white/80 border border-purple-100/50'
// // // // //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// // // // //                   }`}>
// // // // //                     <div className={`prose prose-sm max-w-none ${
// // // // //                       message.isBot 
// // // // //                         ? message.isError 
// // // // //                           ? 'text-red-700' 
// // // // //                           : 'text-gray-800'
// // // // //                         : 'text-white prose-invert'
// // // // //                     }`}>
// // // // //                       {message.content.split('\n').map((line, index) => {
// // // // //                         if (line.trim().startsWith('•')) {
// // // // //                           return (
// // // // //                             <div key={index} className="flex items-start mb-3">
// // // // //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// // // // //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// // // // //                             </div>
// // // // //                           );
// // // // //                         }
// // // // //                         return line.trim() ? (
// // // // //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// // // // //                         ) : (
// // // // //                           <br key={index} />
// // // // //                         );
// // // // //                       })}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}

// // // // //           {/* Loading indicator */}
// // // // //           {isLoading && (
// // // // //             <div className="flex justify-start">
// // // // //               <div className="flex items-start space-x-3 max-w-3xl">
// // // // //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // // //                   <Bot className="w-5 h-5 text-white" />
// // // // //                 </div>
// // // // //                 <div className="flex-1 mr-12">
// // // // //                   <div className="flex items-center space-x-2 mb-3">
// // // // //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// // // // //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// // // // //                       typing...
// // // // //                     </span>
// // // // //                   </div>
// // // // //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// // // // //                     <div className="flex space-x-2">
// // // // //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// // // // //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // // //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Quick action buttons - only show after initial message */}
// // // // //           {messages.length === 1 && (
// // // // //             <div className="flex flex-col space-y-4 max-w-3xl">
// // // // //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// // // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //                 <button 
// // // // //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // //                 >
// // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// // // // //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// // // // //                   </div>
// // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// // // // //                 </button>

// // // // //                 <button 
// // // // //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // //                 >
// // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// // // // //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// // // // //                   </div>
// // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// // // // //                 </button>

// // // // //                 <button 
// // // // //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // //                 >
// // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // //                     <User className="w-5 h-5 text-purple-600" />
// // // // //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// // // // //                   </div>
// // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           <div ref={messagesEndRef} />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Modern Input Section */}
// // // // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// // // // //         <div className="max-w-4xl mx-auto p-6">
// // // // //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// // // // //             <input
// // // // //               ref={inputRef}
// // // // //               type="text"
// // // // //               value={inputValue}
// // // // //               onChange={(e) => setInputValue(e.target.value)}
// // // // //               onKeyDown={(e) => {
// // // // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // // // //                   e.preventDefault();
// // // // //                   handleSubmit();
// // // // //                 }
// // // // //               }}
// // // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // // //               disabled={isLoading}
// // // // //               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// // // // //             />
// // // // //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // // //               <button 
// // // // //                 type="button"
// // // // //                 onClick={showSuggestions}
// // // // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // // // //                 title="Get suggestions (Space)"
// // // // //               >
// // // // //                 <Sparkles className="w-5 h-5" />
// // // // //               </button>
// // // // //               <button 
// // // // //                 type="button"
// // // // //                 onClick={() => setShowVoiceAssistant(true)}
// // // // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // // // //                 title="Voice Assistant"
// // // // //               >
// // // // //                 <Mic className="w-5 h-5" />
// // // // //               </button>
// // // // //               <button 
// // // // //                 type="button"
// // // // //                 onClick={handleSubmit}
// // // // //                 disabled={!inputValue.trim() || isLoading}
// // // // //                 className="p-2 bg-gradient-to-br from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// // // // //                 title="Send message"
// // // // //               >
// // // // //                 <Send className="w-5 h-5" />
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //           <p className="text-center text-xs text-gray-500 mt-3">
// // // // //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
// // // // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs mx-1">Mic</kbd> for voice • 
// // // // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Voice Assistant Modal */}
// // // // //       {showVoiceAssistant && (
// // // // //         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // // // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff } from 'lucide-react';
// // // // import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// // // // import { Track } from "livekit-client";

// // // // // Voice Assistant Components
// // // // const Message = ({ type, text }) => {
// // // //   return (
// // // //     <div className="flex items-start space-x-3 mb-4">
// // // //       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
// // // //         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
// // // //       }`}>
// // // //         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
// // // //       </div>
// // // //       <div className="flex-1">
// // // //         <div className="text-xs text-gray-500 mb-1">
// // // //           {type === "agent" ? "Voice Assistant" : "You"}
// // // //         </div>
// // // //         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
// // // //           {text}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SimpleVoiceAssistant = () => {
// // // //   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
// // // //   const localParticipant = useLocalParticipant();
// // // //   const { segments: userTranscriptions } = useTrackTranscription({
// // // //     publication: localParticipant.microphoneTrack,
// // // //     source: Track.Source.Microphone,
// // // //     participant: localParticipant.localParticipant,
// // // //   });

// // // //   const [messages, setMessages] = useState([]);

// // // //   useEffect(() => {
// // // //     const allMessages = [
// // // //       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
// // // //       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
// // // //     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
// // // //     setMessages(allMessages);
// // // //   }, [agentTranscriptions, userTranscriptions]);

// // // //   return (
// // // //     <div className="flex flex-col h-full">
// // // //       <div className="flex items-center justify-center py-8">
// // // //         <div className="relative">
// // // //           <BarVisualizer 
// // // //             state={state} 
// // // //             barCount={7} 
// // // //             trackRef={audioTrack}
// // // //             className="w-32 h-16"
// // // //           />
// // // //           <div className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${
// // // //             state === "listening" ? "text-green-600" : 
// // // //             state === "thinking" ? "text-yellow-600" : 
// // // //             state === "speaking" ? "text-purple-600" : "text-gray-500"
// // // //           }`}>
// // // //             {state === "listening" && "Listening..."}
// // // //             {state === "thinking" && "Thinking..."}
// // // //             {state === "speaking" && "Speaking..."}
// // // //             {state === "idle" && "Ready"}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="flex-1 px-6 pb-4">
// // // //         <VoiceAssistantControlBar className="mb-6" />
// // // //         <div className="space-y-4 max-h-64 overflow-y-auto">
// // // //           {messages.map((msg, index) => (
// // // //             <Message key={msg.id || index} type={msg.type} text={msg.text} />
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const LiveKitModal = ({ onClose }) => {
// // // //   const [isSubmittingName, setIsSubmittingName] = useState(true);
// // // //   const [name, setName] = useState("");
// // // //   const [token, setToken] = useState(null);

// // // //   const getToken = useCallback(async (userName) => {
// // // //     try {
// // // //       const response = await fetch(
// // // //         `https://ssassistant.askaritechnology.com/getToken?name=${encodeURIComponent(userName)}`
// // // //       );
// // // //       const token = await response.text();
// // // //       setToken(token);
// // // //       setIsSubmittingName(false);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   }, []);

// // // //   const handleNameSubmit = (e) => {
// // // //     if (e) e.preventDefault();
// // // //     if (name.trim()) {
// // // //       getToken(name);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// // // //       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
// // // //         <div className="p-6 border-b border-gray-100">
// // // //           <div className="flex items-center justify-between">
// // // //             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
// // // //             <button
// // // //               onClick={onClose}
// // // //               className="text-gray-400 hover:text-gray-600 transition-colors"
// // // //             >
// // // //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //               </svg>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         <div className="h-96">
// // // //           {isSubmittingName ? (
// // // //             <div className="p-6">
// // // //               <div className="space-y-4">
// // // //                 <div>
// // // //                   <div className="block text-sm font-medium text-gray-700 mb-2">
// // // //                     Enter your name to start voice conversation
// // // //                   </div>
// // // //                   <input
// // // //                     type="text"
// // // //                     value={name}
// // // //                     onChange={(e) => setName(e.target.value)}
// // // //                     onKeyDown={(e) => {
// // // //                       if (e.key === 'Enter' && name.trim()) {
// // // //                         handleNameSubmit(e);
// // // //                       }
// // // //                     }}
// // // //                     placeholder="Your name"
// // // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="flex space-x-3">
// // // //                   <button 
// // // //                     onClick={handleNameSubmit}
// // // //                     disabled={!name.trim()}
// // // //                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
// // // //                   >
// // // //                     Connect
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={onClose}
// // // //                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
// // // //                   >
// // // //                     Cancel
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ) : token ? (
// // // //             <LiveKitRoom
// // // //               serverUrl="wss://real-estate-amcyjjjy.livekit.cloud"
// // // //               token={token}
// // // //               connect={true}
// // // //               video={false}
// // // //               audio={true}
// // // //               onDisconnected={() => {
// // // //                 onClose();
// // // //                 setIsSubmittingName(true);
// // // //               }}
// // // //             >
// // // //               <RoomAudioRenderer />
// // // //               <SimpleVoiceAssistant />
// // // //             </LiveKitRoom>
// // // //           ) : (
// // // //             <div className="flex items-center justify-center h-full">
// // // //               <div className="text-center">
// // // //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// // // //                 <p className="text-gray-600">Connecting...</p>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Main Chat Component
// // // // export default function Chat() {
// // // //   const [messages, setMessages] = useState([
// // // //     {
// // // //       id: 1,
// // // //       sender: 'SessionScribe',
// // // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // // • "What was decided about pricing in last week's leadership meeting?"
// // // // • "When is our product launch date?"  
// // // // • "What were Q4 revenue totals from the earnings call?"
// // // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // // //       timestamp: new Date(),
// // // //       isBot: true
// // // //     }
// // // //   ]);

// // // //   const [inputValue, setInputValue] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // // //   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
// // // //   const messagesEndRef = useRef(null);
// // // //   const inputRef = useRef(null);

// // // //   const scrollToBottom = () => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   };

// // // //   useEffect(() => {
// // // //     scrollToBottom();
// // // //   }, [messages]);

// // // //   // Handle keyboard shortcuts
// // // //   useEffect(() => {
// // // //     const handleKeyDown = (e) => {
// // // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // // //         e.preventDefault();
// // // //         showSuggestions();
// // // //       }
// // // //     };

// // // //     document.addEventListener('keydown', handleKeyDown);
// // // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // // //   }, []);

// // // //   const sendMessage = async (messageText) => {
// // // //     if (!messageText.trim() || isLoading) return;

// // // //     // Add user message
// // // //     const userMessage = {
// // // //       id: Date.now(),
// // // //       sender: 'You',
// // // //       content: messageText,
// // // //       timestamp: new Date(),
// // // //       isBot: false
// // // //     };

// // // //     setMessages(prev => [...prev, userMessage]);
// // // //     setInputValue('');
// // // //     setIsLoading(true);

// // // //     try {
// // // //       // Get auth token - adjust this based on your auth implementation
// // // //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// // // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //           'Authorization': token // Adjust based on your auth header format
// // // //         },
// // // //         body: JSON.stringify({ question: messageText })
// // // //       });

// // // //       const data = await response.json();

// // // //       if (data.success) {
// // // //         // Update current meeting info if provided
// // // //         if (data.meetingTitle && data.meetingDate) {
// // // //           setCurrentMeeting({
// // // //             title: data.meetingTitle,
// // // //             date: data.meetingDate
// // // //           });
// // // //         }

// // // //         // Add bot response
// // // //         const botMessage = {
// // // //           id: Date.now() + 1,
// // // //           sender: 'SessionScribe',
// // // //           content: data.response,
// // // //           timestamp: new Date(),
// // // //           isBot: true
// // // //         };

// // // //         setMessages(prev => [...prev, botMessage]);
// // // //       } else {
// // // //         throw new Error(data.error || 'Failed to get response');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Chat error:', error);

// // // //       const errorMessage = {
// // // //         id: Date.now() + 1,
// // // //         sender: 'SessionScribe',
// // // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // // //         timestamp: new Date(),
// // // //         isBot: true,
// // // //         isError: true
// // // //       };

// // // //       setMessages(prev => [...prev, errorMessage]);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleSubmit = () => {
// // // //     sendMessage(inputValue);
// // // //   };

// // // //   const handleQuickAction = (question) => {
// // // //     sendMessage(question);
// // // //   };

// // // //   const showSuggestions = () => {
// // // //     const suggestions = [
// // // //       "What were the main decisions made in the last meeting?",
// // // //       "Who were the participants in the latest meeting?",
// // // //       "What are the next steps from the last meeting?",
// // // //       "Can you summarize the key points discussed?",
// // // //       "What action items were assigned?"
// // // //     ];

// // // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // // //     setInputValue(randomSuggestion);
// // // //     inputRef.current?.focus();
// // // //   };

// // // //   const formatTimestamp = (date) => {
// // // //     const now = new Date();
// // // //     const diff = now - date;
// // // //     const minutes = Math.floor(diff / 60000);

// // // //     if (minutes < 1) return 'just now';
// // // //     if (minutes < 60) return `${minutes}m ago`;
// // // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // // //     return date.toLocaleDateString();
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// // // //       {/* Modern Header with Glassmorphism */}
// // // //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// // // //         <div className="max-w-4xl mx-auto px-6 py-6">
// // // //           <div className="flex items-center justify-between">
// // // //             <div className="flex items-center space-x-4">
// // // //               <div className="relative">
// // // //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// // // //                   <Bot className="w-8 h-8 text-white" />
// // // //                 </div>
// // // //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // // //               </div>
// // // //               <div>
// // // //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// // // //                   SessionScribe
// // // //                 </h1>
// // // //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// // // //                 {currentMeeting && (
// // // //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// // // //                     📝 {currentMeeting.title} • {currentMeeting.date}
// // // //                   </p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// // // //               <MessageCircle className="w-4 h-4" />
// // // //               <span>Private conversation</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Chat Container */}
// // // //       <div className="max-w-4xl mx-auto px-6 pb-32">
// // // //         <div className="py-8 space-y-8">
// // // //           {messages.map((message) => (
// // // //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// // // //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// // // //                 {/* Avatar */}
// // // //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// // // //                   {message.isBot ? (
// // // //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // //                       <Bot className="w-5 h-5 text-white" />
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// // // //                       <User className="w-5 h-5 text-white" />
// // // //                     </div>
// // // //                   )}
// // // //                 </div>

// // // //                 {/* Message Card */}
// // // //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// // // //                   {/* Header */}
// // // //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// // // //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// // // //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// // // //                       {formatTimestamp(message.timestamp)}
// // // //                     </span>
// // // //                   </div>

// // // //                   {/* Message Content */}
// // // //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// // // //                     message.isBot 
// // // //                       ? message.isError 
// // // //                         ? 'bg-red-50/80 border border-red-100' 
// // // //                         : 'bg-white/80 border border-purple-100/50'
// // // //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// // // //                   }`}>
// // // //                     <div className={`prose prose-sm max-w-none ${
// // // //                       message.isBot 
// // // //                         ? message.isError 
// // // //                           ? 'text-red-700' 
// // // //                           : 'text-gray-800'
// // // //                         : 'text-white prose-invert'
// // // //                     }`}>
// // // //                       {message.content.split('\n').map((line, index) => {
// // // //                         if (line.trim().startsWith('•')) {
// // // //                           return (
// // // //                             <div key={index} className="flex items-start mb-3">
// // // //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// // // //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// // // //                             </div>
// // // //                           );
// // // //                         }
// // // //                         return line.trim() ? (
// // // //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// // // //                         ) : (
// // // //                           <br key={index} />
// // // //                         );
// // // //                       })}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}

// // // //           {/* Loading indicator */}
// // // //           {isLoading && (
// // // //             <div className="flex justify-start">
// // // //               <div className="flex items-start space-x-3 max-w-3xl">
// // // //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // //                   <Bot className="w-5 h-5 text-white" />
// // // //                 </div>
// // // //                 <div className="flex-1 mr-12">
// // // //                   <div className="flex items-center space-x-2 mb-3">
// // // //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// // // //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// // // //                       typing...
// // // //                     </span>
// // // //                   </div>
// // // //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// // // //                     <div className="flex space-x-2">
// // // //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// // // //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {/* Quick action buttons - only show after initial message */}
// // // //           {messages.length === 1 && (
// // // //             <div className="flex flex-col space-y-4 max-w-3xl">
// // // //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //                 <button 
// // // //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // //                 >
// // // //                   <div className="flex items-center space-x-3 mb-2">
// // // //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// // // //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// // // //                   </div>
// // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// // // //                 </button>

// // // //                 <button 
// // // //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // //                 >
// // // //                   <div className="flex items-center space-x-3 mb-2">
// // // //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// // // //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// // // //                   </div>
// // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// // // //                 </button>

// // // //                 <button 
// // // //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // //                 >
// // // //                   <div className="flex items-center space-x-3 mb-2">
// // // //                     <User className="w-5 h-5 text-purple-600" />
// // // //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// // // //                   </div>
// // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           <div ref={messagesEndRef} />
// // // //         </div>
// // // //       </div>

// // // //       {/* Modern Input Section */}
// // // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// // // //         <div className="max-w-4xl mx-auto p-6">
// // // //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// // // //             <input
// // // //               ref={inputRef}
// // // //               type="text"
// // // //               value={inputValue}
// // // //               onChange={(e) => setInputValue(e.target.value)}
// // // //               onKeyDown={(e) => {
// // // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // // //                   e.preventDefault();
// // // //                   handleSubmit();
// // // //                 }
// // // //               }}
// // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // //               disabled={isLoading}
// // // //               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// // // //             />
// // // //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // //               <button 
// // // //                 type="button"
// // // //                 onClick={showSuggestions}
// // // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // // //                 title="Get suggestions (Space)"
// // // //               >
// // // //                 <Sparkles className="w-5 h-5" />
// // // //               </button>
// // // //               <button 
// // // //                 type="button"
// // // //                 onClick={() => setShowVoiceAssistant(true)}
// // // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // // //                 title="Voice Assistant"
// // // //               >
// // // //                 <Mic className="w-5 h-5" />
// // // //               </button>
// // // //               <button 
// // // //                 type="button"
// // // //                 onClick={handleSubmit}
// // // //                 disabled={!inputValue.trim() || isLoading}
// // // //                 className="p-2 bg-gradient-to-br from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// // // //                 title="Send message"
// // // //               >
// // // //                 <Send className="w-5 h-5" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //           <p className="text-center text-xs text-gray-500 mt-3">
// // // //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
// // // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs mx-1">Mic</kbd> for voice • 
// // // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Voice Assistant Modal */}
// // // //       {showVoiceAssistant && (
// // // //         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff } from 'lucide-react';
// // // import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// // // import { Track } from "livekit-client";

// // // // Voice Assistant Components
// // // const Message = ({ type, text }) => {
// // //   return (
// // //     <div className="flex items-start space-x-3 mb-4">
// // //       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
// // //         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
// // //       }`}>
// // //         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
// // //       </div>
// // //       <div className="flex-1">
// // //         <div className="text-xs text-gray-500 mb-1">
// // //           {type === "agent" ? "Voice Assistant" : "You"}
// // //         </div>
// // //         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
// // //           {text}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SimpleVoiceAssistant = () => {
// // //   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
// // //   const localParticipant = useLocalParticipant();
// // //   const { segments: userTranscriptions } = useTrackTranscription({
// // //     publication: localParticipant.microphoneTrack,
// // //     source: Track.Source.Microphone,
// // //     participant: localParticipant.localParticipant,
// // //   });

// // //   const [messages, setMessages] = useState([]);

// // //   useEffect(() => {
// // //     const allMessages = [
// // //       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
// // //       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
// // //     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
// // //     setMessages(allMessages);
// // //   }, [agentTranscriptions, userTranscriptions]);

// // //   return (
// // //     <div className="flex flex-col h-full">
// // //       {/* Compact Status Bar */}
// // //       <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-b border-gray-100">
// // //         <div className="flex items-center justify-between">
// // //           <div className="flex items-center space-x-3">
// // //             <div className="relative">
// // //               <BarVisualizer 
// // //                 state={state} 
// // //                 barCount={5} 
// // //                 trackRef={audioTrack}
// // //                 className="w-20 h-8"
// // //               />
// // //             </div>
// // //             <div className={`text-sm font-medium ${
// // //               state === "listening" ? "text-green-600" : 
// // //               state === "thinking" ? "text-yellow-600" : 
// // //               state === "speaking" ? "text-purple-600" : "text-gray-500"
// // //             }`}>
// // //               {state === "listening" && "🎤 Listening..."}
// // //               {state === "thinking" && "🤔 Thinking..."}
// // //               {state === "speaking" && "🗣️ Speaking..."}
// // //               {state === "idle" && "💤 Ready"}
// // //             </div>
// // //           </div>
// // //           <VoiceAssistantControlBar className="scale-75" />
// // //         </div>
// // //       </div>

// // //       {/* Scrollable Chat Area - Takes up most of the space */}
// // //       <div className="flex-1 px-4 py-4 overflow-hidden">
// // //         <div className="h-full overflow-y-auto space-y-4 pr-2">
// // //           {messages.length === 0 ? (
// // //             <div className="text-center text-gray-500 mt-8">
// // //               <Bot className="w-12 h-12 mx-auto mb-3 text-gray-300" />
// // //               <p className="text-sm">Start talking to begin the conversation...</p>
// // //             </div>
// // //           ) : (
// // //             messages.map((msg, index) => (
// // //               <Message key={msg.id || index} type={msg.type} text={msg.text} />
// // //             ))
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const LiveKitModal = ({ onClose }) => {
// // //   const [isSubmittingName, setIsSubmittingName] = useState(true);
// // //   const [name, setName] = useState("");
// // //   const [token, setToken] = useState(null);

// // //   const getToken = useCallback(async (userName) => {
// // //     try {
// // //       const response = await fetch(
// // //         `https://ssassistant.askaritechnology.com/getToken?name=${encodeURIComponent(userName)}`
// // //       );
// // //       const token = await response.text();
// // //       setToken(token);
// // //       setIsSubmittingName(false);
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   }, []);

// // //   const handleNameSubmit = (e) => {
// // //     if (e) e.preventDefault();
// // //     if (name.trim()) {
// // //       getToken(name);
// // //     }
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// // //       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-scroll flex flex-col">
// // //         <div className="flex-shrink-0 p-6 border-b border-gray-100">
// // //           <div className="flex items-center justify-between">
// // //             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
// // //             <button
// // //               onClick={onClose}
// // //               className="text-gray-400 hover:text-gray-600 transition-colors"
// // //             >
// // //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //               </svg>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="flex-1 min-h-0">
// // //           {isSubmittingName ? (
// // //             <div className="p-6">
// // //               <div className="space-y-4">
// // //                 <div>
// // //                   <div className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Enter your name to start voice conversation
// // //                   </div>
// // //                   <input
// // //                     type="text"
// // //                     value={name}
// // //                     onChange={(e) => setName(e.target.value)}
// // //                     onKeyDown={(e) => {
// // //                       if (e.key === 'Enter' && name.trim()) {
// // //                         handleNameSubmit(e);
// // //                       }
// // //                     }}
// // //                     placeholder="Your name"
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
// // //                   />
// // //                 </div>
// // //                 <div className="flex space-x-3">
// // //                   <button 
// // //                     onClick={handleNameSubmit}
// // //                     disabled={!name.trim()}
// // //                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
// // //                   >
// // //                     Connect
// // //                   </button>
// // //                   <button
// // //                     onClick={onClose}
// // //                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
// // //                   >
// // //                     Cancel
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ) : token ? (
// // //             <LiveKitRoom
// // //               serverUrl="wss://real-estate-amcyjjjy.livekit.cloud"
// // //               token={token}
// // //               connect={true}
// // //               video={false}
// // //               audio={true}
// // //               onDisconnected={() => {
// // //                 onClose();
// // //                 setIsSubmittingName(true);
// // //               }}
// // //             >
// // //               <RoomAudioRenderer />
// // //               <SimpleVoiceAssistant />
// // //             </LiveKitRoom>
// // //           ) : (
// // //             <div className="flex items-center justify-center h-full">
// // //               <div className="text-center">
// // //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// // //                 <p className="text-gray-600">Connecting...</p>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Main Chat Component
// // // export default function Chat() {
// // //   const [messages, setMessages] = useState([
// // //     {
// // //       id: 1,
// // //       sender: 'SessionScribe',
// // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // • "What was decided about pricing in last week's leadership meeting?"
// // // • "When is our product launch date?"  
// // // • "What were Q4 revenue totals from the earnings call?"
// // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // //       timestamp: new Date(),
// // //       isBot: true
// // //     }
// // //   ]);

// // //   const [inputValue, setInputValue] = useState('');
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // //   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
// // //   const messagesEndRef = useRef(null);
// // //   const inputRef = useRef(null);

// // //   const scrollToBottom = () => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   };

// // //   useEffect(() => {
// // //     scrollToBottom();
// // //   }, [messages]);

// // //   // Handle keyboard shortcuts
// // //   useEffect(() => {
// // //     const handleKeyDown = (e) => {
// // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // //         e.preventDefault();
// // //         showSuggestions();
// // //       }
// // //     };

// // //     document.addEventListener('keydown', handleKeyDown);
// // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // //   }, []);

// // //   const sendMessage = async (messageText) => {
// // //     if (!messageText.trim() || isLoading) return;

// // //     // Add user message
// // //     const userMessage = {
// // //       id: Date.now(),
// // //       sender: 'You',
// // //       content: messageText,
// // //       timestamp: new Date(),
// // //       isBot: false
// // //     };

// // //     setMessages(prev => [...prev, userMessage]);
// // //     setInputValue('');
// // //     setIsLoading(true);

// // //     try {
// // //       // Get auth token - adjust this based on your auth implementation
// // //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': token // Adjust based on your auth header format
// // //         },
// // //         body: JSON.stringify({ question: messageText })
// // //       });

// // //       const data = await response.json();

// // //       if (data.success) {
// // //         // Update current meeting info if provided
// // //         if (data.meetingTitle && data.meetingDate) {
// // //           setCurrentMeeting({
// // //             title: data.meetingTitle,
// // //             date: data.meetingDate
// // //           });
// // //         }

// // //         // Add bot response
// // //         const botMessage = {
// // //           id: Date.now() + 1,
// // //           sender: 'SessionScribe',
// // //           content: data.response,
// // //           timestamp: new Date(),
// // //           isBot: true
// // //         };

// // //         setMessages(prev => [...prev, botMessage]);
// // //       } else {
// // //         throw new Error(data.error || 'Failed to get response');
// // //       }
// // //     } catch (error) {
// // //       console.error('Chat error:', error);

// // //       const errorMessage = {
// // //         id: Date.now() + 1,
// // //         sender: 'SessionScribe',
// // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // //         timestamp: new Date(),
// // //         isBot: true,
// // //         isError: true
// // //       };

// // //       setMessages(prev => [...prev, errorMessage]);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     sendMessage(inputValue);
// // //   };

// // //   const handleQuickAction = (question) => {
// // //     sendMessage(question);
// // //   };

// // //   const showSuggestions = () => {
// // //     const suggestions = [
// // //       "What were the main decisions made in the last meeting?",
// // //       "Who were the participants in the latest meeting?",
// // //       "What are the next steps from the last meeting?",
// // //       "Can you summarize the key points discussed?",
// // //       "What action items were assigned?"
// // //     ];

// // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // //     setInputValue(randomSuggestion);
// // //     inputRef.current?.focus();
// // //   };

// // //   const formatTimestamp = (date) => {
// // //     const now = new Date();
// // //     const diff = now - date;
// // //     const minutes = Math.floor(diff / 60000);

// // //     if (minutes < 1) return 'just now';
// // //     if (minutes < 60) return `${minutes}m ago`;
// // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // //     return date.toLocaleDateString();
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// // //       {/* Modern Header with Glassmorphism */}
// // //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// // //         <div className="max-w-4xl mx-auto px-6 py-6">
// // //           <div className="flex items-center justify-between">
// // //             <div className="flex items-center space-x-4">
// // //               <div className="relative">
// // //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// // //                   <Bot className="w-8 h-8 text-white" />
// // //                 </div>
// // //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // //               </div>
// // //               <div>
// // //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// // //                   SessionScribe
// // //                 </h1>
// // //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// // //                 {currentMeeting && (
// // //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// // //                     📝 {currentMeeting.title} • {currentMeeting.date}
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// // //               <MessageCircle className="w-4 h-4" />
// // //               <span>Private conversation</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Chat Container */}
// // //       <div className="max-w-4xl mx-auto px-6 pb-32">
// // //         <div className="py-8 space-y-8">
// // //           {messages.map((message) => (
// // //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// // //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// // //                 {/* Avatar */}
// // //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// // //                   {message.isBot ? (
// // //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // //                       <Bot className="w-5 h-5 text-white" />
// // //                     </div>
// // //                   ) : (
// // //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// // //                       <User className="w-5 h-5 text-white" />
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* Message Card */}
// // //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// // //                   {/* Header */}
// // //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// // //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// // //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// // //                       {formatTimestamp(message.timestamp)}
// // //                     </span>
// // //                   </div>

// // //                   {/* Message Content */}
// // //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// // //                     message.isBot 
// // //                       ? message.isError 
// // //                         ? 'bg-red-50/80 border border-red-100' 
// // //                         : 'bg-white/80 border border-purple-100/50'
// // //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// // //                   }`}>
// // //                     <div className={`prose prose-sm max-w-none ${
// // //                       message.isBot 
// // //                         ? message.isError 
// // //                           ? 'text-red-700' 
// // //                           : 'text-gray-800'
// // //                         : 'text-white prose-invert'
// // //                     }`}>
// // //                       {message.content.split('\n').map((line, index) => {
// // //                         if (line.trim().startsWith('•')) {
// // //                           return (
// // //                             <div key={index} className="flex items-start mb-3">
// // //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// // //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// // //                             </div>
// // //                           );
// // //                         }
// // //                         return line.trim() ? (
// // //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// // //                         ) : (
// // //                           <br key={index} />
// // //                         );
// // //                       })}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}

// // //           {/* Loading indicator */}
// // //           {isLoading && (
// // //             <div className="flex justify-start">
// // //               <div className="flex items-start space-x-3 max-w-3xl">
// // //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // //                   <Bot className="w-5 h-5 text-white" />
// // //                 </div>
// // //                 <div className="flex-1 mr-12">
// // //                   <div className="flex items-center space-x-2 mb-3">
// // //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// // //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// // //                       typing...
// // //                     </span>
// // //                   </div>
// // //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// // //                     <div className="flex space-x-2">
// // //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// // //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Quick action buttons - only show after initial message */}
// // //           {messages.length === 1 && (
// // //             <div className="flex flex-col space-y-4 max-w-3xl">
// // //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                 <button 
// // //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // //                 >
// // //                   <div className="flex items-center space-x-3 mb-2">
// // //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// // //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// // //                   </div>
// // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// // //                 </button>

// // //                 <button 
// // //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // //                 >
// // //                   <div className="flex items-center space-x-3 mb-2">
// // //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// // //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// // //                   </div>
// // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// // //                 </button>

// // //                 <button 
// // //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // //                 >
// // //                   <div className="flex items-center space-x-3 mb-2">
// // //                     <User className="w-5 h-5 text-purple-600" />
// // //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// // //                   </div>
// // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           <div ref={messagesEndRef} />
// // //         </div>
// // //       </div>

// // //       {/* Modern Input Section */}
// // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// // //         <div className="max-w-4xl mx-auto p-6">
// // //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// // //             <input
// // //               ref={inputRef}
// // //               type="text"
// // //               value={inputValue}
// // //               onChange={(e) => setInputValue(e.target.value)}
// // //               onKeyDown={(e) => {
// // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // //                   e.preventDefault();
// // //                   handleSubmit();
// // //                 }
// // //               }}
// // //               placeholder="Ask SessionScribe anything about your conversations..."
// // //               disabled={isLoading}
// // //               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// // //             />
// // //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // //               <button 
// // //                 type="button"
// // //                 onClick={showSuggestions}
// // //                 className="p-2 text-purple-400 cursor-pointer hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // //                 title="Get suggestions (Space)"
// // //               >
// // //                 <Sparkles className="w-5 h-5" />
// // //               </button>
// // //               <button 
// // //                 type="button"
// // //                 onClick={() => setShowVoiceAssistant(true)}
// // //                 className="p-2 text-purple-400 cursor-pointer hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // //                 title="Voice Assistant"
// // //               >
// // //                 <Mic className="w-5 h-5" />
// // //               </button>
// // //               <button 
// // //                 type="button"
// // //                 onClick={handleSubmit}
// // //                 disabled={!inputValue.trim() || isLoading}
// // //                 className="p-2 bg-gradient-to-br cursor-pointer from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// // //                 title="Send message"
// // //               >
// // //                 <Send className="w-5 h-5" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //           <p className="text-center text-xs text-gray-500 mt-3">
// // //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
// // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs mx-1">Mic</kbd> for voice • 
// // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* Voice Assistant Modal */}
// // //       {showVoiceAssistant && (
// // //         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
// // //       )}
// // //     </div>
// // //   );
// // // }























// // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff } from 'lucide-react';
// // import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// // import { Track } from "livekit-client";

// // // Voice Assistant Components
// // const Message = ({ type, text }) => {
// //   return (
// //     <div className="flex items-start space-x-3 mb-4">
// //       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
// //         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
// //       }`}>
// //         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
// //       </div>
// //       <div className="flex-1">
// //         <div className="text-xs text-gray-500 mb-1">
// //           {type === "agent" ? "Voice Assistant" : "You"}
// //         </div>
// //         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
// //           {text}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const SimpleVoiceAssistant = () => {
// //   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
// //   const localParticipant = useLocalParticipant();
// //   const { segments: userTranscriptions } = useTrackTranscription({
// //     publication: localParticipant.microphoneTrack,
// //     source: Track.Source.Microphone,
// //     participant: localParticipant.localParticipant,
// //   });

// //   const [messages, setMessages] = useState([]);

// //   useEffect(() => {
// //     const allMessages = [
// //       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
// //       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
// //     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
// //     setMessages(allMessages);
// //   }, [agentTranscriptions, userTranscriptions]);

// //   return (
// //     <div className="flex flex-col h-full">
// //       {/* Compact Status Bar */}
// //       <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-b border-gray-100">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center space-x-3">
// //             <div className="relative">
// //               <BarVisualizer 
// //                 state={state} 
// //                 barCount={5} 
// //                 trackRef={audioTrack}
// //                 className="w-20 h-8"
// //               />
// //             </div>
// //             <div className={`text-sm font-medium ${
// //               state === "listening" ? "text-green-600" : 
// //               state === "thinking" ? "text-yellow-600" : 
// //               state === "speaking" ? "text-purple-600" : "text-gray-500"
// //             }`}>
// //               {state === "listening" && "🎤 Listening..."}
// //               {state === "thinking" && "🤔 Thinking..."}
// //               {state === "speaking" && "🗣️ Speaking..."}
// //               {state === "idle" && "💤 Ready"}
// //             </div>
// //           </div>
// //           <VoiceAssistantControlBar className="scale-75" />
// //         </div>
// //       </div>

// //       {/* Scrollable Chat Area - Takes up most of the space */}
// //       <div className="flex-1 px-4 py-4 overflow-hidden">
// //         <div className="h-full overflow-y-auto space-y-4 pr-2">
// //           {messages.length === 0 ? (
// //             <div className="text-center text-gray-500 mt-8">
// //               <Bot className="w-12 h-12 mx-auto mb-3 text-gray-300" />
// //               <p className="text-sm">Start talking to begin the conversation...</p>
// //             </div>
// //           ) : (
// //             messages.map((msg, index) => (
// //               <Message key={msg.id || index} type={msg.type} text={msg.text} />
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const LiveKitModal = ({ onClose }) => {
// //   const [isSubmittingName, setIsSubmittingName] = useState(true);
// //   const [name, setName] = useState("");
// //   const [token, setToken] = useState(null);

// //   const getToken = useCallback(async (userName) => {
// //     try {
// //       const response = await fetch(
// //         `https://session.askaritechnology.com/getToken?name=${encodeURIComponent(userName)}`
// //       );
// //       const token = await response.text();
// //       setToken(token);
// //       setIsSubmittingName(false);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }, []);

// //   const handleNameSubmit = (e) => {
// //     if (e) e.preventDefault();
// //     if (name.trim()) {
// //       getToken(name);
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-scroll flex flex-col">
// //         <div className="flex-shrink-0 p-6 border-b border-gray-100">
// //           <div className="flex items-center justify-between">
// //             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
// //             <button
// //               onClick={onClose}
// //               className="text-gray-400 hover:text-gray-600 transition-colors"
// //             >
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         <div className="flex-1 min-h-0">
// //           {isSubmittingName ? (
// //             <div className="p-6">
// //               <div className="space-y-4">
// //                 <div>
// //                   <div className="block text-sm font-medium text-gray-700 mb-2">
// //                     Enter your name to start voice conversation
// //                   </div>
// //                   <input
// //                     type="text"
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                     onKeyDown={(e) => {
// //                       if (e.key === 'Enter' && name.trim()) {
// //                         handleNameSubmit(e);
// //                       }
// //                     }}
// //                     placeholder="Your name"
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div className="flex space-x-3">
// //                   <button 
// //                     onClick={handleNameSubmit}
// //                     disabled={!name.trim()}
// //                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
// //                   >
// //                     Connect
// //                   </button>
// //                   <button
// //                     onClick={onClose}
// //                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
// //                   >
// //                     Cancel
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : token ? (
// //             <LiveKitRoom
// //               serverUrl="wss://sessionscribe-meetingagent-fjt4eqf1.livekit.cloud"
// //               token={token}
// //               connect={true}
// //               video={false}
// //               audio={true}
// //               onDisconnected={() => {
// //                 onClose();
// //                 setIsSubmittingName(true);
// //               }}
// //             >
// //               <RoomAudioRenderer />
// //               <SimpleVoiceAssistant />
// //             </LiveKitRoom>
// //           ) : (
// //             <div className="flex items-center justify-center h-full">
// //               <div className="text-center">
// //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// //                 <p className="text-gray-600">Connecting...</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Chat Component
// // export default function Chat() {
// //   const [showMicCallout, setShowMicCallout] = useState(true);
// //   const [messages, setMessages] = useState([
// //     {
// //       id: 1,
// //       sender: 'SessionScribe',
// //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // • "What was decided about pricing in last week's leadership meeting?"
// // • "When is our product launch date?"  
// // • "What were Q4 revenue totals from the earnings call?"
// // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// //       timestamp: new Date(),
// //       isBot: true
// //     }
// //   ]);

// //   const [inputValue, setInputValue] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [currentMeeting, setCurrentMeeting] = useState(null);
// //   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
// //   const messagesEndRef = useRef(null);
// //   const inputRef = useRef(null);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [messages]);

// //   // Auto-hide mic callout after 8 seconds
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowMicCallout(false);
// //     }, 20000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   // Handle keyboard shortcuts
// //   useEffect(() => {
// //     const handleKeyDown = (e) => {
// //       if (e.key === ' ' && e.target !== inputRef.current) {
// //         e.preventDefault();
// //         showSuggestions();
// //       }
// //     };

// //     document.addEventListener('keydown', handleKeyDown);
// //     return () => document.removeEventListener('keydown', handleKeyDown);
// //   }, []);

// //   const sendMessage = async (messageText) => {
// //     if (!messageText.trim() || isLoading) return;

// //     // Add user message
// //     const userMessage = {
// //       id: Date.now(),
// //       sender: 'You',
// //       content: messageText,
// //       timestamp: new Date(),
// //       isBot: false
// //     };

// //     setMessages(prev => [...prev, userMessage]);
// //     setInputValue('');
// //     setIsLoading(true);

// //     try {
// //       // Get auth token - adjust this based on your auth implementation
// //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': token // Adjust based on your auth header format
// //         },
// //         body: JSON.stringify({ question: messageText })
// //       });

// //       const data = await response.json();

// //       if (data.success) {
// //         // Update current meeting info if provided
// //         if (data.meetingTitle && data.meetingDate) {
// //           setCurrentMeeting({
// //             title: data.meetingTitle,
// //             date: data.meetingDate
// //           });
// //         }

// //         // Add bot response
// //         const botMessage = {
// //           id: Date.now() + 1,
// //           sender: 'SessionScribe',
// //           content: data.response,
// //           timestamp: new Date(),
// //           isBot: true
// //         };

// //         setMessages(prev => [...prev, botMessage]);
// //       } else {
// //         throw new Error(data.error || 'Failed to get response');
// //       }
// //     } catch (error) {
// //       console.error('Chat error:', error);

// //       const errorMessage = {
// //         id: Date.now() + 1,
// //         sender: 'SessionScribe',
// //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// //         timestamp: new Date(),
// //         isBot: true,
// //         isError: true
// //       };

// //       setMessages(prev => [...prev, errorMessage]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleSubmit = () => {
// //     sendMessage(inputValue);
// //   };

// //   const handleQuickAction = (question) => {
// //     sendMessage(question);
// //   };

// //   const showSuggestions = () => {
// //     const suggestions = [
// //       "What were the main decisions made in the last meeting?",
// //       "Who were the participants in the latest meeting?",
// //       "What are the next steps from the last meeting?",
// //       "Can you summarize the key points discussed?",
// //       "What action items were assigned?"
// //     ];

// //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// //     setInputValue(randomSuggestion);
// //     inputRef.current?.focus();
// //   };

// //   const formatTimestamp = (date) => {
// //     const now = new Date();
// //     const diff = now - date;
// //     const minutes = Math.floor(diff / 60000);

// //     if (minutes < 1) return 'just now';
// //     if (minutes < 60) return `${minutes}m ago`;
// //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// //     return date.toLocaleDateString();
// //   };

// //   const handleMicClick = () => {
// //     setShowMicCallout(false);
// //     setShowVoiceAssistant(true);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// //       {/* Modern Header with Glassmorphism */}
// //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// //         <div className="max-w-4xl mx-auto px-6 py-6">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center space-x-4">
// //               <div className="relative">
// //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// //                   <Bot className="w-8 h-8 text-white" />
// //                 </div>
// //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// //               </div>
// //               <div>
// //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// //                   SessionScribe
// //                 </h1>
// //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// //                 {currentMeeting && (
// //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// //                     📝 {currentMeeting.title} • {currentMeeting.date}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// //               <MessageCircle className="w-4 h-4" />
// //               <span>Private conversation</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Chat Container */}
// //       <div className="max-w-4xl mx-auto px-6 pb-32">
// //         <div className="py-8 space-y-8">
// //           {messages.map((message) => (
// //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// //                 {/* Avatar */}
// //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// //                   {message.isBot ? (
// //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// //                       <Bot className="w-5 h-5 text-white" />
// //                     </div>
// //                   ) : (
// //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// //                       <User className="w-5 h-5 text-white" />
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Message Card */}
// //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// //                   {/* Header */}
// //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// //                       {formatTimestamp(message.timestamp)}
// //                     </span>
// //                   </div>

// //                   {/* Message Content */}
// //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// //                     message.isBot 
// //                       ? message.isError 
// //                         ? 'bg-red-50/80 border border-red-100' 
// //                         : 'bg-white/80 border border-purple-100/50'
// //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// //                   }`}>
// //                     <div className={`prose prose-sm max-w-none ${
// //                       message.isBot 
// //                         ? message.isError 
// //                           ? 'text-red-700' 
// //                           : 'text-gray-800'
// //                         : 'text-white prose-invert'
// //                     }`}>
// //                       {message.content.split('\n').map((line, index) => {
// //                         if (line.trim().startsWith('•')) {
// //                           return (
// //                             <div key={index} className="flex items-start mb-3">
// //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// //                             </div>
// //                           );
// //                         }
// //                         return line.trim() ? (
// //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// //                         ) : (
// //                           <br key={index} />
// //                         );
// //                       })}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}

// //           {/* Loading indicator */}
// //           {isLoading && (
// //             <div className="flex justify-start">
// //               <div className="flex items-start space-x-3 max-w-3xl">
// //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// //                   <Bot className="w-5 h-5 text-white" />
// //                 </div>
// //                 <div className="flex-1 mr-12">
// //                   <div className="flex items-center space-x-2 mb-3">
// //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// //                       typing...
// //                     </span>
// //                   </div>
// //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// //                     <div className="flex space-x-2">
// //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Quick action buttons - only show after initial message */}
// //           {messages.length === 1 && (
// //             <div className="flex flex-col space-y-4 max-w-3xl">
// //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 <button 
// //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// //                 >
// //                   <div className="flex items-center space-x-3 mb-2">
// //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// //                   </div>
// //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// //                 </button>

// //                 <button 
// //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// //                 >
// //                   <div className="flex items-center space-x-3 mb-2">
// //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// //                   </div>
// //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// //                 </button>

// //                 <button 
// //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// //                 >
// //                   <div className="flex items-center space-x-3 mb-2">
// //                     <User className="w-5 h-5 text-purple-600" />
// //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// //                   </div>
// //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// //                 </button>
// //               </div>
// //             </div>
// //           )}

// //           <div ref={messagesEndRef} />
// //         </div>
// //       </div>

// //       {/* Modern Input Section */}
// //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// //         <div className="max-w-4xl mx-auto p-6">
// //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// //             <input
// //               ref={inputRef}
// //               type="text"
// //               value={inputValue}
// //               onChange={(e) => setInputValue(e.target.value)}
// //               onKeyDown={(e) => {
// //                 if (e.key === 'Enter' && !e.shiftKey) {
// //                   e.preventDefault();
// //                   handleSubmit();
// //                 }
// //               }}
// //               placeholder="Ask SessionScribe anything about your conversations..."
// //               disabled={isLoading}
// //               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// //             />
// //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// //               <button 
// //                 type="button"
// //                 onClick={showSuggestions}
// //                 className="p-2 text-purple-400 cursor-pointer hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// //                 title="Get suggestions (Space)"
// //               >
// //                 <Sparkles className="w-5 h-5" />
// //               </button>

// //               {/* Enhanced Mic Button with attention-grabbing elements */}
// //               <div className="relative">
// //                 <button 
// //                   type="button"
// //                   onClick={handleMicClick}
// //                   className={`p-2 cursor-pointer rounded-xl transition-all duration-200 relative ${
// //                     showMicCallout 
// //                       ? 'bg-gradient-to-r from-[#9810fa] to-purple-600 text-white shadow-lg animate-bounce' 
// //                       : 'text-purple-400 hover:text-purple-600 hover:bg-purple-50'
// //                   }`}
// //                   title="Voice Assistant - Try our AI talking feature!"
// //                 >
// //                   <Mic className={`w-5 h-5 ${showMicCallout ? '' : ''}`} />

// //                   {/* Pulsing ring effect */}
// //                   {showMicCallout && (
// //                     <>
// //                       <div className="absolute inset-0 rounded-xl bg-purple-400 animate-ping opacity-30"></div>
// //                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
// //                     </>
// //                   )}
// //                 </button>

// //                 {/* Floating callout tooltip */}
// //                 {showMicCallout && (
// //                   <div className="absolute bottom-full right-0 mb-3 transform animate-bounce">
// //                     <div className="bg-gradient-to-r from-[#9810fa] to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap relative">
// //                       🎙️ Try our AI Voice Assistant!
// //                       <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>

// //               <button 
// //                 type="button"
// //                 onClick={handleSubmit}
// //                 disabled={!inputValue.trim() || isLoading}
// //                 className="p-2 bg-gradient-to-br cursor-pointer from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// //                 title="Send message"
// //               >
// //                 <Send className="w-5 h-5" />
// //               </button>
// //             </div>
// //           </div>
// //           <p className="text-center text-xs text-gray-500 mt-3">
// //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
// //             <kbd className="px-2 py-1 bg-purple-100 rounded text-xs mx-1 text-purple-700">🎤 Mic</kbd> for voice assistant • 
// //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// //           </p>
// //         </div>
// //       </div>

// //       {/* Voice Assistant Modal */}
// //       {showVoiceAssistant && (
// //         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
// //       )}
// //     </div>
// //   );
// // }


















// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff, Search, Calendar, Users, BarChart3, FileText } from 'lucide-react';
// import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// import { Track } from "livekit-client";

// // Voice Assistant Components (keeping your existing implementation)
// const Message = ({ type, text }) => {
//   return (
//     <div className="flex items-start space-x-3 mb-4">
//       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
//         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
//       }`}>
//         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
//       </div>
//       <div className="flex-1">
//         <div className="text-xs text-gray-500 mb-1">
//           {type === "agent" ? "Voice Assistant" : "You"}
//         </div>
//         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
//           {text}
//         </div>
//       </div>
//     </div>
//   );
// };

// const SimpleVoiceAssistant = () => {
//   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
//   const localParticipant = useLocalParticipant();
//   const { segments: userTranscriptions } = useTrackTranscription({
//     publication: localParticipant.microphoneTrack,
//     source: Track.Source.Microphone,
//     participant: localParticipant.localParticipant,
//   });

//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const allMessages = [
//       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
//       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
//     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
//     setMessages(allMessages);
//   }, [agentTranscriptions, userTranscriptions]);

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-b border-gray-100">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="relative">
//               <BarVisualizer 
//                 state={state} 
//                 barCount={5} 
//                 trackRef={audioTrack}
//                 className="w-20 h-8"
//               />
//             </div>
//             <div className={`text-sm font-medium ${
//               state === "listening" ? "text-green-600" : 
//               state === "thinking" ? "text-yellow-600" : 
//               state === "speaking" ? "text-purple-600" : "text-gray-500"
//             }`}>
//               {state === "listening" && "🎤 Listening..."}
//               {state === "thinking" && "🤔 Thinking..."}
//               {state === "speaking" && "🗣️ Speaking..."}
//               {state === "idle" && "💤 Ready"}
//             </div>
//           </div>
//           <VoiceAssistantControlBar className="scale-75" />
//         </div>
//       </div>

//       <div className="flex-1 px-4 py-4 overflow-hidden">
//         <div className="h-full overflow-y-auto space-y-4 pr-2">
//           {messages.length === 0 ? (
//             <div className="text-center text-gray-500 mt-8">
//               <Bot className="w-12 h-12 mx-auto mb-3 text-gray-300" />
//               <p className="text-sm">Start talking to begin the conversation...</p>
//             </div>
//           ) : (
//             messages.map((msg, index) => (
//               <Message key={msg.id || index} type={msg.type} text={msg.text} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const LiveKitModal = ({ onClose }) => {
//   const [isSubmittingName, setIsSubmittingName] = useState(true);
//   const [name, setName] = useState("");
//   const [token, setToken] = useState(null);

//   const getToken = useCallback(async (userName) => {
//     try {
//       const response = await fetch(
//         `https://session.askaritechnology.com/getToken?name=${encodeURIComponent(userName)}`
//       );
//       const token = await response.text();
//       setToken(token);
//       setIsSubmittingName(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }, []);

//   const handleNameSubmit = (e) => {
//     if (e) e.preventDefault();
//     if (name.trim()) {
//       getToken(name);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-scroll flex flex-col">
//         <div className="flex-shrink-0 p-6 border-b border-gray-100">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="flex-1 min-h-0">
//           {isSubmittingName ? (
//             <div className="p-6">
//               <div className="space-y-4">
//                 <div>
//                   <div className="block text-sm font-medium text-gray-700 mb-2">
//                     Enter your name to start voice conversation
//                   </div>
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' && name.trim()) {
//                         handleNameSubmit(e);
//                       }
//                     }}
//                     placeholder="Your name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div className="flex space-x-3">
//                   <button 
//                     onClick={handleNameSubmit}
//                     disabled={!name.trim()}
//                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
//                   >
//                     Connect
//                   </button>
//                   <button
//                     onClick={onClose}
//                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : token ? (
//             <LiveKitRoom
//               serverUrl="wss://sessionscribe-meetingagent-fjt4eqf1.livekit.cloud"
//               token={token}
//               connect={true}
//               video={false}
//               audio={true}
//               onDisconnected={() => {
//                 onClose();
//                 setIsSubmittingName(true);
//               }}
//             >
//               <RoomAudioRenderer />
//               <SimpleVoiceAssistant />
//             </LiveKitRoom>
//           ) : (
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
//                 <p className="text-gray-600">Connecting...</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Enhanced Search Info Component
// const SearchInfoBadge = ({ searchInfo }) => {
//   if (!searchInfo) return null;

//   const getIcon = (type) => {
//     switch (type) {
//       case 'date': return <Calendar className="w-4 h-4" />;
//       case 'participant': return <Users className="w-4 h-4" />;
//       case 'keyword': return <Search className="w-4 h-4" />;
//       case 'statistics': return <BarChart3 className="w-4 h-4" />;
//       case 'transcript': return <FileText className="w-4 h-4" />;
//       default: return <MessageCircle className="w-4 h-4" />;
//     }
//   };

//   const getTypeLabel = (type) => {
//     switch (type) {
//       case 'date': return 'Date Search';
//       case 'participant': return 'Participant Search';
//       case 'keyword': return 'Keyword Search';
//       case 'statistics': return 'Statistics';
//       case 'transcript': return 'Transcript';
//       case 'recent': return 'Recent Meetings';
//       default: return 'Search';
//     }
//   };

//   return (
//     <div className="flex items-center space-x-2 text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-2">
//       {getIcon(searchInfo.type)}
//       <span>{getTypeLabel(searchInfo.type)}</span>
//       {searchInfo.resultCount > 0 && (
//         <span className="bg-purple-200 px-2 py-0.5 rounded-full font-medium">
//           {searchInfo.resultCount} results
//         </span>
//       )}
//       {searchInfo.keywords && (
//         <span className="text-purple-800">• Keywords: {searchInfo.keywords.join(', ')}</span>
//       )}
//       {searchInfo.participant && (
//         <span className="text-purple-800">• {searchInfo.participant}</span>
//       )}
//       {searchInfo.dateSearched && (
//         <span className="text-purple-800">• {searchInfo.dateSearched}</span>
//       )}
//     </div>
//   );
// };

// // Main Chat Component
// export default function Chat() {
//   const [showMicCallout, setShowMicCallout] = useState(true);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: 'SessionScribe',
//       content: `Ready to explore your meetings? SessionScribe Chat now has powerful search capabilities!

// I can help you find and analyze meetings using advanced search features:

// 🔍 **Smart Search Options:**
// • **Date-based**: "Show me meetings from today", "What happened yesterday?", "Find meetings from July 15th"
// • **Keyword Search**: "Find meetings about collaboration", "Show discussions on pricing"
// • **Participant Search**: "What meetings did Speaker1 attend?", "Find meetings with specific participants"
// • **Recent Activity**: "Show me recent meetings", "What are my latest discussions?"
// • **Statistics**: "How many meetings do I have?", "Show meeting statistics"
// • **Transcripts**: "Show me the conversation from the last meeting"

// 🎯 **Try asking:**
// • "What meetings happened this week?"
// • "Find meetings about student success"
// • "Show me meetings with Speaker2"
// • "What was discussed in meetings yesterday?"
// • "How many meetings do I have in total?"

// Not sure what to ask? Press "space" on your keyboard or click the sparkle icon for suggestions!`,
//       timestamp: new Date(),
//       isBot: true
//     }
//   ]);

//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentMeeting, setCurrentMeeting] = useState(null);
//   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
//   const [lastSearchInfo, setLastSearchInfo] = useState(null);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Auto-hide mic callout after 20 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowMicCallout(false);
//     }, 20000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Handle keyboard shortcuts
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === ' ' && e.target !== inputRef.current) {
//         e.preventDefault();
//         showSuggestions();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   const sendMessage = async (messageText) => {
//     if (!messageText.trim() || isLoading) return;

//     // Add user message
//     const userMessage = {
//       id: Date.now(),
//       sender: 'You',
//       content: messageText,
//       timestamp: new Date(),
//       isBot: false
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');
//     setIsLoading(true);

//     try {
//       // Get auth token
//       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

//       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token
//         },
//         body: JSON.stringify({ question: messageText })
//       });

//       const data = await response.json();

//       if (data.success) {
//         // Update current meeting info if provided
//         if (data.meetingTitle && data.meetingDate) {
//           setCurrentMeeting({
//             title: data.meetingTitle,
//             date: data.meetingDate
//           });
//         }

//         // Update search info
//         if (data.searchInfo) {
//           setLastSearchInfo(data.searchInfo);
//         }

//         // Add bot response
//         const botMessage = {
//           id: Date.now() + 1,
//           sender: 'SessionScribe',
//           content: data.response,
//           timestamp: new Date(),
//           isBot: true,
//           searchInfo: data.searchInfo
//         };

//         setMessages(prev => [...prev, botMessage]);
//       } else {
//         throw new Error(data.error || 'Failed to get response');
//       }
//     } catch (error) {
//       console.error('Chat error:', error);

//       const errorMessage = {
//         id: Date.now() + 1,
//         sender: 'SessionScribe',
//         content: 'Sorry, I encountered an error while processing your question. Please try again.',
//         timestamp: new Date(),
//         isBot: true,
//         isError: true
//       };

//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = () => {
//     sendMessage(inputValue);
//   };

//   const handleQuickAction = (question) => {
//     sendMessage(question);
//   };

//   const showSuggestions = () => {
//     const suggestions = [
//       "Show me meetings from today",
//       "Find meetings about collaboration",
//       "What meetings did Speaker1 attend?",
//       "Show me recent meetings",
//       "How many meetings do I have?",
//       "What happened in yesterday's meetings?",
//       "Find meetings from this week",
//       "Show meeting statistics",
//       "What was discussed about student success?",
//       "Get transcript from the last meeting"
//     ];

//     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
//     setInputValue(randomSuggestion);
//     inputRef.current?.focus();
//   };

//   const formatTimestamp = (date) => {
//     const now = new Date();
//     const diff = now - date;
//     const minutes = Math.floor(diff / 60000);

//     if (minutes < 1) return 'just now';
//     if (minutes < 60) return `${minutes}m ago`;
//     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
//     return date.toLocaleDateString();
//   };

//   const handleMicClick = () => {
//     setShowMicCallout(false);
//     setShowVoiceAssistant(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
//       {/* Enhanced Header with Search Info */}
//       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
//         <div className="max-w-4xl mx-auto px-6 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
//                   <Bot className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
//                   SessionScribe
//                 </h1>
//                 <p className="text-sm text-gray-600 font-medium">Advanced AI Assistant • Online</p>
//                 {currentMeeting && (
//                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
//                     📝 {currentMeeting.title} • {currentMeeting.date}
//                   </p>
//                 )}
//                 {lastSearchInfo && (
//                   <div className="mt-2">
//                     <SearchInfoBadge searchInfo={lastSearchInfo} />
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
//               <Search className="w-4 h-4" />
//               <span>Advanced Search Enabled</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Chat Container */}
//       <div className="max-w-4xl mx-auto px-6 pb-32">
//         <div className="py-8 space-y-8">
//           {messages.map((message) => (
//             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
//               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
//                 {/* Avatar */}
//                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
//                   {message.isBot ? (
//                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
//                       <Bot className="w-5 h-5 text-white" />
//                     </div>
//                   ) : (
//                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
//                       <User className="w-5 h-5 text-white" />
//                     </div>
//                   )}
//                 </div>

//                 {/* Message Card */}
//                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
//                   {/* Header */}
//                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
//                     <span className="font-semibold text-gray-900">{message.sender}</span>
//                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
//                       {formatTimestamp(message.timestamp)}
//                     </span>
//                   </div>

//                   {/* Search Info Badge */}
//                   {message.searchInfo && message.isBot && (
//                     <div className="mb-3">
//                       <SearchInfoBadge searchInfo={message.searchInfo} />
//                     </div>
//                   )}

//                   {/* Message Content */}
//                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
//                     message.isBot 
//                       ? message.isError 
//                         ? 'bg-red-50/80 border border-red-100' 
//                         : 'bg-white/80 border border-purple-100/50'
//                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
//                   }`}>
//                     <div className={`prose prose-sm max-w-none ${
//                       message.isBot 
//                         ? message.isError 
//                           ? 'text-red-700' 
//                           : 'text-gray-800'
//                         : 'text-white prose-invert'
//                     }`}>
//                       {message.content.split('\n').map((line, index) => {
//                         if (line.trim().startsWith('•')) {
//                           return (
//                             <div key={index} className="flex items-start mb-3">
//                               <span className="mr-3 text-purple-500 font-bold">•</span>
//                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
//                             </div>
//                           );
//                         }
//                         if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
//                           return (
//                             <p key={index} className="mb-3 leading-relaxed font-bold">
//                               {line.replace(/\*\*/g, '')}
//                             </p>
//                           );
//                         }
//                         return line.trim() ? (
//                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
//                         ) : (
//                           <br key={index} />
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Loading indicator */}
//           {isLoading && (
//             <div className="flex justify-start">
//               <div className="flex items-start space-x-3 max-w-3xl">
//                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
//                   <Bot className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="flex-1 mr-12">
//                   <div className="flex items-center space-x-2 mb-3">
//                     <span className="font-semibold text-gray-900">SessionScribe</span>
//                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
//                       searching...
//                     </span>
//                   </div>
//                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
//                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Enhanced Quick Action Buttons */}
//           {messages.length === 1 && (
//             <div className="flex flex-col space-y-4 max-w-3xl">
//               <h3 className="text-lg font-semibold text-gray-800 px-1">Try these advanced searches:</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <button 
//                   onClick={() => handleQuickAction("Show me meetings from today")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <Calendar className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Today's Meetings</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Show me meetings from today</p>
//                 </button>

//                 <button 
//                   onClick={() => handleQuickAction("Find meetings about collaboration")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <Search className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Keyword Search</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Find meetings about collaboration</p>
//                 </button>

//                 <button 
//                   onClick={() => handleQuickAction("What meetings did Speaker1 attend?")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <Users className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Participant Search</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Find by participant</p>
//                 </button>

//                 <button 
//                   onClick={() => handleQuickAction("Show me recent meetings")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <MessageCircle className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Recent Activity</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Show recent meetings</p>
//                 </button>

//                 <button 
//                   onClick={() => handleQuickAction("How many meetings do I have?")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <BarChart3 className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Statistics</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Get meeting statistics</p>
//                 </button>

//                 <button 
//                   onClick={() => handleQuickAction("Show me meetings from this week")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <FileText className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Week View</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">This week's meetings</p>
//                 </button>
//               </div>
//             </div>
//           )}

//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       {/* Enhanced Input Section */}
//       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
//         <div className="max-w-4xl mx-auto p-6">
//           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
//             <input
//               ref={inputRef}
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' && !e.shiftKey) {
//                   e.preventDefault();
//                   handleSubmit();
//                 }
//               }}
//               placeholder="Ask SessionScribe about your meetings... Try 'Show meetings from today' or 'Find meetings about collaboration'"
//               disabled={isLoading}
//               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
//             />
//             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
//               <button 
//                 type="button"
//                 onClick={showSuggestions}
//                 className="p-2 text-purple-400 cursor-pointer hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
//                 title="Get suggestions (Space)"
//               >
//                 <Sparkles className="w-5 h-5" />
//               </button>

//               {/* Enhanced Mic Button */}
//               <div className="relative">
//                 <button 
//                   type="button"
//                   onClick={handleMicClick}
//                   className={`p-2 cursor-pointer rounded-xl transition-all duration-200 relative ${
//                     showMicCallout 
//                       ? 'bg-gradient-to-r from-[#9810fa] to-purple-600 text-white shadow-lg animate-bounce' 
//                       : 'text-purple-400 hover:text-purple-600 hover:bg-purple-50'
//                   }`}
//                   title="Voice Assistant - Advanced search with voice!"
//                 >
//                   <Mic className={`w-5 h-5`} />

//                   {showMicCallout && (
//                     <>
//                       <div className="absolute inset-0 rounded-xl bg-purple-400 animate-ping opacity-30"></div>
//                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
//                     </>
//                   )}
//                 </button>

//                 {showMicCallout && (
//                   <div className="absolute bottom-full right-0 mb-3 transform animate-bounce">
//                     <div className="bg-gradient-to-r from-[#9810fa] to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap relative">
//                       🎙️ Try our Advanced Voice Search!
//                       <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <button 
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={!inputValue.trim() || isLoading}
//                 className="p-2 bg-gradient-to-br cursor-pointer from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
//                 title="Send message"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//           <p className="text-center text-xs text-gray-500 mt-3">
//             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
//             <kbd className="px-2 py-1 bg-purple-100 rounded text-xs mx-1 text-purple-700">🎤 Mic</kbd> for voice search • 
//             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
//           </p>
//         </div>
//       </div>

//       {/* Voice Assistant Modal */}
//       {showVoiceAssistant && (
//         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
//       )}
//     </div>
//   );
// }












// // // // // // // import React from 'react';
// // // // // // // import { MessageCircle, Sparkles, ArrowUp } from 'lucide-react';

// // // // // // // export default function Chat() {
// // // // // // //   return (
// // // // // // //     <div className="mx-auto w-full bg-white min-h-screen">
// // // // // // //       {/* Header */}
// // // // // // //       <div className="border-b border-gray-200 p-6">
// // // // // // //         <div className="flex items-center space-x-3 mb-2">
// // // // // // //           <div className="w-12 h-12 bg-[#9810fa] rounded-full flex items-center justify-center">
// // // // // // //             <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
// // // // // // //               <div className="w-3 h-3 bg-[#9810fa] rounded-full"></div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           <h1 className="text-xl font-semibold text-gray-900">SessionScribe</h1>
// // // // // // //         </div>
// // // // // // //         <div className="flex items-center space-x-2 text-sm text-gray-600">
// // // // // // //           <span>This channel is just between</span>
// // // // // // //           <span className="text-blue-600 font-medium">SessionScribe</span>
// // // // // // //           <span>and you. Ask anything about your conversations</span>
// // // // // // //           <MessageCircle className="w-4 h-4" />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Chat Content */}
// // // // // // //       <div className="p-6">
// // // // // // //         {/* Message */}
// // // // // // //         <div className="flex items-start space-x-3 mb-6">
// // // // // // //           <div className="w-8 h-8 bg-[#9810fa] rounded-full flex items-center justify-center flex-shrink-0">
// // // // // // //             <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
// // // // // // //               <div className="w-2 h-2 bg-[#9810fa] rounded-full"></div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           <div className="flex-1">
// // // // // // //             <div className="flex items-center space-x-2 mb-2">
// // // // // // //               <span className="font-medium text-gray-900">SessionScribe</span>
// // // // // // //               <span className="text-sm text-gray-500">just now</span>
// // // // // // //             </div>

// // // // // // //             <div className="space-y-4">
// // // // // // //               <p className="text-gray-900">
// // // // // // //                 Stuck searching for answers? SessionScribe Chat has you covered.
// // // // // // //               </p>

// // // // // // //               <p className="text-gray-700">
// // // // // // //                 With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // // // // //               </p>

// // // // // // //               <ul className="space-y-2 text-gray-700">
// // // // // // //                 <li className="flex items-start">
// // // // // // //                   <span className="mr-2">•</span>
// // // // // // //                   <span>"What was decided about pricing in last week's leadership meeting?"</span>
// // // // // // //                 </li>
// // // // // // //                 <li className="flex items-start">
// // // // // // //                   <span className="mr-2">•</span>
// // // // // // //                   <span>"When is our product launch date?"</span>
// // // // // // //                 </li>
// // // // // // //                 <li className="flex items-start">
// // // // // // //                   <span className="mr-2">•</span>
// // // // // // //                   <span>"What were Q4 revenue totals from the earnings call?"</span>
// // // // // // //                 </li>
// // // // // // //               </ul>

// // // // // // //               <p className="text-gray-700">
// // // // // // //                 SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.
// // // // // // //               </p>

// // // // // // //               <div className="flex items-center space-x-2 text-gray-700">
// // // // // // //                 <span>Not sure what to ask?</span>
// // // // // // //                 <span>😉</span>
// // // // // // //                 <span>Press "space" on your keyboard or click the sparkle icon below to get suggestions.</span>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Action Buttons */}
// // // // // // //         <div className="flex flex-wrap gap-3 mb-6 ml-11">
// // // // // // //           <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors">
// // // // // // //             <MessageCircle className="w-4 h-4" />
// // // // // // //             <span className="text-sm">Ask a follow up...</span>
// // // // // // //           </button>

// // // // // // //           <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors">
// // // // // // //             <MessageCircle className="w-4 h-4" />
// // // // // // //             <span className="text-sm">What can I ask SessionScribe Chat?</span>
// // // // // // //           </button>

// // // // // // //           <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors">
// // // // // // //             <MessageCircle className="w-4 h-4" />
// // // // // // //             <span className="text-sm">How does SessionScribe Chat generate its answers?</span>
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Input Section */}
// // // // // // //       <div className="fixed bottom-0 bg-white w-[-webkit-fill-available] border-t border-gray-200 p-4">
// // // // // // //         <div className="w-full mx-auto">
// // // // // // //           <div className="relative">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // // // // //               className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9810fa] focus:border-transparent"
// // // // // // //             />
// // // // // // //             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // // // // //               <button className="p-1 text-gray-400 hover:text-gray-600">
// // // // // // //                 <Sparkles className="w-5 h-5" />
// // // // // // //               </button>
// // // // // // //               <button className="p-1 text-gray-400 hover:text-gray-600">
// // // // // // //                 <ArrowUp className="w-5 h-5" />
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           <div className="text-right mt-2">
// // // // // // //             <span className="text-sm text-gray-500">Content Script</span>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Bottom padding to account for fixed input */}
// // // // // // //       <div className="h-24"></div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // import { MessageCircle, Sparkles, ArrowUp, Send } from 'lucide-react';

// // // // // // export default function Chat() {
// // // // // //   const [messages, setMessages] = useState([
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       sender: 'SessionScribe',
// // // // // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.

// // // // // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:

// // // // // // • "What was decided about pricing in last week's leadership meeting?"
// // // // // // • "When is our product launch date?"  
// // // // // // • "What were Q4 revenue totals from the earnings call?"

// // // // // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // // // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // // // // //       timestamp: new Date(),
// // // // // //       isBot: true
// // // // // //     }
// // // // // //   ]);

// // // // // //   const [inputValue, setInputValue] = useState('');
// // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // // // // //   const messagesEndRef = useRef(null);
// // // // // //   const inputRef = useRef(null);

// // // // // //   const scrollToBottom = () => {
// // // // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     scrollToBottom();
// // // // // //   }, [messages]);

// // // // // //   // Handle keyboard shortcuts
// // // // // //   useEffect(() => {
// // // // // //     const handleKeyDown = (e) => {
// // // // // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // // // // //         e.preventDefault();
// // // // // //         showSuggestions();
// // // // // //       }
// // // // // //     };

// // // // // //     document.addEventListener('keydown', handleKeyDown);
// // // // // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // // // // //   }, []);

// // // // // //   const sendMessage = async (messageText) => {
// // // // // //     if (!messageText.trim() || isLoading) return;

// // // // // //     // Add user message
// // // // // //     const userMessage = {
// // // // // //       id: Date.now(),
// // // // // //       sender: 'You',
// // // // // //       content: messageText,
// // // // // //       timestamp: new Date(),
// // // // // //       isBot: false
// // // // // //     };

// // // // // //     setMessages(prev => [...prev, userMessage]);
// // // // // //     setInputValue('');
// // // // // //     setIsLoading(true);

// // // // // //     try {
// // // // // //       // Get auth token - adjust this based on your auth implementation
// // // // // //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// // // // // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //           'Authorization': token // Adjust based on your auth header format
// // // // // //         },
// // // // // //         body: JSON.stringify({ question: messageText })
// // // // // //       });

// // // // // //       const data = await response.json();

// // // // // //       if (data.success) {
// // // // // //         // Update current meeting info if provided
// // // // // //         if (data.meetingTitle && data.meetingDate) {
// // // // // //           setCurrentMeeting({
// // // // // //             title: data.meetingTitle,
// // // // // //             date: data.meetingDate
// // // // // //           });
// // // // // //         }

// // // // // //         // Add bot response
// // // // // //         const botMessage = {
// // // // // //           id: Date.now() + 1,
// // // // // //           sender: 'SessionScribe',
// // // // // //           content: data.response,
// // // // // //           timestamp: new Date(),
// // // // // //           isBot: true
// // // // // //         };

// // // // // //         setMessages(prev => [...prev, botMessage]);
// // // // // //       } else {
// // // // // //         throw new Error(data.error || 'Failed to get response');
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('Chat error:', error);

// // // // // //       const errorMessage = {
// // // // // //         id: Date.now() + 1,
// // // // // //         sender: 'SessionScribe',
// // // // // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // // // // //         timestamp: new Date(),
// // // // // //         isBot: true,
// // // // // //         isError: true
// // // // // //       };

// // // // // //       setMessages(prev => [...prev, errorMessage]);
// // // // // //     } finally {
// // // // // //       setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSubmit = () => {
// // // // // //     sendMessage(inputValue);
// // // // // //   };

// // // // // //   const handleQuickAction = (question) => {
// // // // // //     sendMessage(question);
// // // // // //   };

// // // // // //   const showSuggestions = () => {
// // // // // //     const suggestions = [
// // // // // //       "What were the main decisions made in the last meeting?",
// // // // // //       "Who were the participants in the latest meeting?",
// // // // // //       "What are the next steps from the last meeting?",
// // // // // //       "Can you summarize the key points discussed?",
// // // // // //       "What action items were assigned?"
// // // // // //     ];

// // // // // //     // You could implement a modal or dropdown here
// // // // // //     // For now, let's just send a random suggestion
// // // // // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // // // // //     setInputValue(randomSuggestion);
// // // // // //     inputRef.current?.focus();
// // // // // //   };

// // // // // //   const formatTimestamp = (date) => {
// // // // // //     const now = new Date();
// // // // // //     const diff = now - date;
// // // // // //     const minutes = Math.floor(diff / 60000);

// // // // // //     if (minutes < 1) return 'just now';
// // // // // //     if (minutes < 60) return `${minutes}m ago`;
// // // // // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // // // // //     return date.toLocaleDateString();
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="mx-auto w-full bg-white min-h-screen flex flex-col">
// // // // // //       {/* Header */}
// // // // // //       <div className="border-b border-gray-200 p-6 flex-shrink-0">
// // // // // //         <div className="flex items-center space-x-3 mb-2">
// // // // // //           <div className="w-12 h-12 bg-[#9810fa] rounded-full flex items-center justify-center">
// // // // // //             <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
// // // // // //               <div className="w-3 h-3 bg-[#9810fa] rounded-full"></div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <h1 className="text-xl font-semibold text-gray-900">SessionScribe</h1>
// // // // // //             {currentMeeting && (
// // // // // //               <p className="text-sm text-gray-500">
// // // // // //                 Discussing: {currentMeeting.title} ({currentMeeting.date})
// // // // // //               </p>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="flex items-center space-x-2 text-sm text-gray-600">
// // // // // //           <span>This channel is just between</span>
// // // // // //           <span className="text-blue-600 font-medium">SessionScribe</span>
// // // // // //           <span>and you. Ask anything about your conversations</span>
// // // // // //           <MessageCircle className="w-4 h-4" />
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Chat Messages */}
// // // // // //       <div className="flex-1 overflow-y-auto p-6 pb-32">
// // // // // //         {messages.map((message) => (
// // // // // //           <div key={message.id} className="flex items-start space-x-3 mb-6">
// // // // // //             {message.isBot ? (
// // // // // //               <div className="w-8 h-8 bg-[#9810fa] rounded-full flex items-center justify-center flex-shrink-0">
// // // // // //                 <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
// // // // // //                   <div className="w-2 h-2 bg-[#9810fa] rounded-full"></div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
// // // // // //                 <span className="text-white text-sm font-medium">
// // // // // //                   {message.sender[0]}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <div className="flex-1">
// // // // // //               <div className="flex items-center space-x-2 mb-2">
// // // // // //                 <span className="font-medium text-gray-900">{message.sender}</span>
// // // // // //                 <span className="text-sm text-gray-500">
// // // // // //                   {formatTimestamp(message.timestamp)}
// // // // // //                 </span>
// // // // // //               </div>

// // // // // //               <div className={`prose prose-sm max-w-none ${message.isError ? 'text-red-600' : 'text-gray-900'}`}>
// // // // // //                 {message.content.split('\n').map((line, index) => {
// // // // // //                   if (line.trim().startsWith('•')) {
// // // // // //                     return (
// // // // // //                       <div key={index} className="flex items-start mb-1">
// // // // // //                         <span className="mr-2">•</span>
// // // // // //                         <span>{line.replace(/^•\s*/, '')}</span>
// // // // // //                       </div>
// // // // // //                     );
// // // // // //                   }
// // // // // //                   return line.trim() ? <p key={index} className="mb-2">{line}</p> : <br key={index} />;
// // // // // //                 })}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}

// // // // // //         {/* Loading indicator */}
// // // // // //         {isLoading && (
// // // // // //           <div className="flex items-start space-x-3 mb-6">
// // // // // //             <div className="w-8 h-8 bg-[#9810fa] rounded-full flex items-center justify-center flex-shrink-0">
// // // // // //               <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
// // // // // //                 <div className="w-2 h-2 bg-[#9810fa] rounded-full"></div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="flex-1">
// // // // // //               <div className="flex items-center space-x-2 mb-2">
// // // // // //                 <span className="font-medium text-gray-900">SessionScribe</span>
// // // // // //                 <span className="text-sm text-gray-500">typing...</span>
// // // // // //               </div>
// // // // // //               <div className="flex space-x-1">
// // // // // //                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
// // // // // //                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // // // //                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Quick action buttons - only show after initial message */}
// // // // // //         {messages.length === 1 && (
// // // // // //           <div className="flex flex-wrap gap-3 mb-6 ml-11">
// // // // // //             <button 
// // // // // //               onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors"
// // // // // //             >
// // // // // //               <MessageCircle className="w-4 h-4" />
// // // // // //               <span className="text-sm">What was discussed in the last meeting?</span>
// // // // // //             </button>

// // // // // //             <button 
// // // // // //               onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors"
// // // // // //             >
// // // // // //               <MessageCircle className="w-4 h-4" />
// // // // // //               <span className="text-sm">What are the next steps?</span>
// // // // // //             </button>

// // // // // //             <button 
// // // // // //               onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // // // // //               className="flex items-center space-x-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full border border-purple-200 transition-colors"
// // // // // //             >
// // // // // //               <MessageCircle className="w-4 h-4" />
// // // // // //               <span className="text-sm">Who were the participants?</span>
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         <div ref={messagesEndRef} />
// // // // // //       </div>

// // // // // //       {/* Input Section */}
// // // // // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-white border-t border-gray-200 p-4 flex-shrink-0">
// // // // // //         <div className="mx-auto">
// // // // // //           <div className="relative">
// // // // // //             <input
// // // // // //               ref={inputRef}
// // // // // //               type="text"
// // // // // //               value={inputValue}
// // // // // //               onChange={(e) => setInputValue(e.target.value)}
// // // // // //               onKeyDown={(e) => {
// // // // // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // // // // //                   e.preventDefault();
// // // // // //                   handleSubmit();
// // // // // //                 }
// // // // // //               }}
// // // // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // // // //               disabled={isLoading}
// // // // // //               className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9810fa] focus:border-transparent disabled:opacity-50"
// // // // // //             />
// // // // // //             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // // // //               <button 
// // // // // //                 type="button"
// // // // // //                 onClick={showSuggestions}
// // // // // //                 className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
// // // // // //               >
// // // // // //                 <Sparkles className="w-5 h-5" />
// // // // // //               </button>
// // // // // //               <button 
// // // // // //                 type="button"
// // // // // //                 onClick={handleSubmit}
// // // // // //                 disabled={!inputValue.trim() || isLoading}
// // // // // //                 className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50 transition-colors"
// // // // // //               >
// // // // // //                 <Send className="w-5 h-5" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User } from 'lucide-react';

// // // // // export default function Chat() {
// // // // //   const [messages, setMessages] = useState([
// // // // //     {
// // // // //       id: 1,
// // // // //       sender: 'SessionScribe',
// // // // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // // // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // // // • "What was decided about pricing in last week's leadership meeting?"
// // // // // • "When is our product launch date?"  
// // // // // • "What were Q4 revenue totals from the earnings call?"
// // // // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // // // //       timestamp: new Date(),
// // // // //       isBot: true
// // // // //     }
// // // // //   ]);

// // // // //   const [inputValue, setInputValue] = useState('');
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // // // //   const messagesEndRef = useRef(null);
// // // // //   const inputRef = useRef(null);

// // // // //   const scrollToBottom = () => {
// // // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     scrollToBottom();
// // // // //   }, [messages]);

// // // // //   // Handle keyboard shortcuts
// // // // //   useEffect(() => {
// // // // //     const handleKeyDown = (e) => {
// // // // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // // // //         e.preventDefault();
// // // // //         showSuggestions();
// // // // //       }
// // // // //     };

// // // // //     document.addEventListener('keydown', handleKeyDown);
// // // // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // // // //   }, []);

// // // // //   const sendMessage = async (messageText) => {
// // // // //     if (!messageText.trim() || isLoading) return;

// // // // //     // Add user message
// // // // //     const userMessage = {
// // // // //       id: Date.now(),
// // // // //       sender: 'You',
// // // // //       content: messageText,
// // // // //       timestamp: new Date(),
// // // // //       isBot: false
// // // // //     };

// // // // //     setMessages(prev => [...prev, userMessage]);
// // // // //     setInputValue('');
// // // // //     setIsLoading(true);

// // // // //     try {
// // // // //       // Get auth token - adjust this based on your auth implementation
// // // // //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// // // // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': token // Adjust based on your auth header format
// // // // //         },
// // // // //         body: JSON.stringify({ question: messageText })
// // // // //       });

// // // // //       const data = await response.json();

// // // // //       if (data.success) {
// // // // //         // Update current meeting info if provided
// // // // //         if (data.meetingTitle && data.meetingDate) {
// // // // //           setCurrentMeeting({
// // // // //             title: data.meetingTitle,
// // // // //             date: data.meetingDate
// // // // //           });
// // // // //         }

// // // // //         // Add bot response
// // // // //         const botMessage = {
// // // // //           id: Date.now() + 1,
// // // // //           sender: 'SessionScribe',
// // // // //           content: data.response,
// // // // //           timestamp: new Date(),
// // // // //           isBot: true
// // // // //         };

// // // // //         setMessages(prev => [...prev, botMessage]);
// // // // //       } else {
// // // // //         throw new Error(data.error || 'Failed to get response');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Chat error:', error);

// // // // //       const errorMessage = {
// // // // //         id: Date.now() + 1,
// // // // //         sender: 'SessionScribe',
// // // // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // // // //         timestamp: new Date(),
// // // // //         isBot: true,
// // // // //         isError: true
// // // // //       };

// // // // //       setMessages(prev => [...prev, errorMessage]);
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = () => {
// // // // //     sendMessage(inputValue);
// // // // //   };

// // // // //   const handleQuickAction = (question) => {
// // // // //     sendMessage(question);
// // // // //   };

// // // // //   const showSuggestions = () => {
// // // // //     const suggestions = [
// // // // //       "What were the main decisions made in the last meeting?",
// // // // //       "Who were the participants in the latest meeting?",
// // // // //       "What are the next steps from the last meeting?",
// // // // //       "Can you summarize the key points discussed?",
// // // // //       "What action items were assigned?"
// // // // //     ];

// // // // //     // You could implement a modal or dropdown here
// // // // //     // For now, let's just send a random suggestion
// // // // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // // // //     setInputValue(randomSuggestion);
// // // // //     inputRef.current?.focus();
// // // // //   };

// // // // //   const formatTimestamp = (date) => {
// // // // //     const now = new Date();
// // // // //     const diff = now - date;
// // // // //     const minutes = Math.floor(diff / 60000);

// // // // //     if (minutes < 1) return 'just now';
// // // // //     if (minutes < 60) return `${minutes}m ago`;
// // // // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // // // //     return date.toLocaleDateString();
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// // // // //       {/* Modern Header with Glassmorphism */}
// // // // //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// // // // //         <div className="max-w-4xl mx-auto px-6 py-6">
// // // // //           <div className="flex items-center justify-between">
// // // // //             <div className="flex items-center space-x-4">
// // // // //               <div className="relative">
// // // // //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// // // // //                   <Bot className="w-8 h-8 text-white" />
// // // // //                 </div>
// // // // //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // // // //               </div>
// // // // //               <div>
// // // // //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// // // // //                   SessionScribe
// // // // //                 </h1>
// // // // //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// // // // //                 {currentMeeting && (
// // // // //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// // // // //                     📝 {currentMeeting.title} • {currentMeeting.date}
// // // // //                   </p>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// // // // //               <MessageCircle className="w-4 h-4" />
// // // // //               <span>Private conversation</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Chat Container */}
// // // // //       <div className="max-w-4xl mx-auto px-6 pb-32">
// // // // //         <div className="py-8 space-y-8">
// // // // //           {messages.map((message) => (
// // // // //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// // // // //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// // // // //                 {/* Avatar */}
// // // // //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// // // // //                   {message.isBot ? (
// // // // //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // // //                       <Bot className="w-5 h-5 text-white" />
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// // // // //                       <User className="w-5 h-5 text-white" />
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>

// // // // //                 {/* Message Card */}
// // // // //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// // // // //                   {/* Header */}
// // // // //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// // // // //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// // // // //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// // // // //                       {formatTimestamp(message.timestamp)}
// // // // //                     </span>
// // // // //                   </div>

// // // // //                   {/* Message Content */}
// // // // //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// // // // //                     message.isBot 
// // // // //                       ? message.isError 
// // // // //                         ? 'bg-red-50/80 border border-red-100' 
// // // // //                         : 'bg-white/80 border border-purple-100/50'
// // // // //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// // // // //                   }`}>
// // // // //                     <div className={`prose prose-sm max-w-none ${
// // // // //                       message.isBot 
// // // // //                         ? message.isError 
// // // // //                           ? 'text-red-700' 
// // // // //                           : 'text-gray-800'
// // // // //                         : 'text-white prose-invert'
// // // // //                     }`}>
// // // // //                       {message.content.split('\n').map((line, index) => {
// // // // //                         if (line.trim().startsWith('•')) {
// // // // //                           return (
// // // // //                             <div key={index} className="flex items-start mb-3">
// // // // //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// // // // //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// // // // //                             </div>
// // // // //                           );
// // // // //                         }
// // // // //                         return line.trim() ? (
// // // // //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// // // // //                         ) : (
// // // // //                           <br key={index} />
// // // // //                         );
// // // // //                       })}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}

// // // // //           {/* Loading indicator */}
// // // // //           {isLoading && (
// // // // //             <div className="flex justify-start">
// // // // //               <div className="flex items-start space-x-3 max-w-3xl">
// // // // //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // // //                   <Bot className="w-5 h-5 text-white" />
// // // // //                 </div>
// // // // //                 <div className="flex-1 mr-12">
// // // // //                   <div className="flex items-center space-x-2 mb-3">
// // // // //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// // // // //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// // // // //                       typing...
// // // // //                     </span>
// // // // //                   </div>
// // // // //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// // // // //                     <div className="flex space-x-2">
// // // // //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// // // // //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // // //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Quick action buttons - only show after initial message */}
// // // // //           {messages.length === 1 && (
// // // // //             <div className="flex flex-col space-y-4 max-w-3xl">
// // // // //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// // // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //                 <button 
// // // // //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // //                 >
// // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// // // // //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// // // // //                   </div>
// // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// // // // //                 </button>

// // // // //                 <button 
// // // // //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // //                 >
// // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// // // // //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// // // // //                   </div>
// // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// // // // //                 </button>

// // // // //                 <button 
// // // // //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // // //                 >
// // // // //                   <div className="flex items-center space-x-3 mb-2">
// // // // //                     <User className="w-5 h-5 text-purple-600" />
// // // // //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// // // // //                   </div>
// // // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           <div ref={messagesEndRef} />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Modern Input Section */}
// // // // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// // // // //         <div className="max-w-4xl mx-auto p-6">
// // // // //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// // // // //             <input
// // // // //               ref={inputRef}
// // // // //               type="text"
// // // // //               value={inputValue}
// // // // //               onChange={(e) => setInputValue(e.target.value)}
// // // // //               onKeyDown={(e) => {
// // // // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // // // //                   e.preventDefault();
// // // // //                   handleSubmit();
// // // // //                 }
// // // // //               }}
// // // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // // //               disabled={isLoading}
// // // // //               className="w-full px-6 py-4 pr-20 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// // // // //             />
// // // // //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // // //               <button 
// // // // //                 type="button"
// // // // //                 onClick={showSuggestions}
// // // // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // // // //                 title="Get suggestions (Space)"
// // // // //               >
// // // // //                 <Sparkles className="w-5 h-5" />
// // // // //               </button>
// // // // //               <button 
// // // // //                 type="button"
// // // // //                 onClick={handleSubmit}
// // // // //                 disabled={!inputValue.trim() || isLoading}
// // // // //                 className="p-2 bg-gradient-to-br from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// // // // //                 title="Send message"
// // // // //               >
// // // // //                 <Send className="w-5 h-5" />
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //           <p className="text-center text-xs text-gray-500 mt-3">
// // // // //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // // // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff } from 'lucide-react';
// // // // import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// // // // import { Track } from "livekit-client";

// // // // // Voice Assistant Components
// // // // const Message = ({ type, text }) => {
// // // //   return (
// // // //     <div className="flex items-start space-x-3 mb-4">
// // // //       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
// // // //         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
// // // //       }`}>
// // // //         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
// // // //       </div>
// // // //       <div className="flex-1">
// // // //         <div className="text-xs text-gray-500 mb-1">
// // // //           {type === "agent" ? "Voice Assistant" : "You"}
// // // //         </div>
// // // //         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
// // // //           {text}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SimpleVoiceAssistant = () => {
// // // //   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
// // // //   const localParticipant = useLocalParticipant();
// // // //   const { segments: userTranscriptions } = useTrackTranscription({
// // // //     publication: localParticipant.microphoneTrack,
// // // //     source: Track.Source.Microphone,
// // // //     participant: localParticipant.localParticipant,
// // // //   });

// // // //   const [messages, setMessages] = useState([]);

// // // //   useEffect(() => {
// // // //     const allMessages = [
// // // //       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
// // // //       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
// // // //     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
// // // //     setMessages(allMessages);
// // // //   }, [agentTranscriptions, userTranscriptions]);

// // // //   return (
// // // //     <div className="flex flex-col h-full">
// // // //       <div className="flex items-center justify-center py-8">
// // // //         <div className="relative">
// // // //           <BarVisualizer 
// // // //             state={state} 
// // // //             barCount={7} 
// // // //             trackRef={audioTrack}
// // // //             className="w-32 h-16"
// // // //           />
// // // //           <div className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${
// // // //             state === "listening" ? "text-green-600" : 
// // // //             state === "thinking" ? "text-yellow-600" : 
// // // //             state === "speaking" ? "text-purple-600" : "text-gray-500"
// // // //           }`}>
// // // //             {state === "listening" && "Listening..."}
// // // //             {state === "thinking" && "Thinking..."}
// // // //             {state === "speaking" && "Speaking..."}
// // // //             {state === "idle" && "Ready"}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="flex-1 px-6 pb-4">
// // // //         <VoiceAssistantControlBar className="mb-6" />
// // // //         <div className="space-y-4 max-h-64 overflow-y-auto">
// // // //           {messages.map((msg, index) => (
// // // //             <Message key={msg.id || index} type={msg.type} text={msg.text} />
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const LiveKitModal = ({ onClose }) => {
// // // //   const [isSubmittingName, setIsSubmittingName] = useState(true);
// // // //   const [name, setName] = useState("");
// // // //   const [token, setToken] = useState(null);

// // // //   const getToken = useCallback(async (userName) => {
// // // //     try {
// // // //       const response = await fetch(
// // // //         `/api/getToken?name=${encodeURIComponent(userName)}`
// // // //       );
// // // //       const token = await response.text();
// // // //       setToken(token);
// // // //       setIsSubmittingName(false);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   }, []);

// // // //   const handleNameSubmit = (e) => {
// // // //     if (e) e.preventDefault();
// // // //     if (name.trim()) {
// // // //       getToken(name);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// // // //       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
// // // //         <div className="p-6 border-b border-gray-100">
// // // //           <div className="flex items-center justify-between">
// // // //             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
// // // //             <button
// // // //               onClick={onClose}
// // // //               className="text-gray-400 hover:text-gray-600 transition-colors"
// // // //             >
// // // //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //               </svg>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         <div className="h-96">
// // // //           {isSubmittingName ? (
// // // //             <div className="p-6">
// // // //               <div className="space-y-4">
// // // //                 <div>
// // // //                   <div className="block text-sm font-medium text-gray-700 mb-2">
// // // //                     Enter your name to start voice conversation
// // // //                   </div>
// // // //                   <input
// // // //                     type="text"
// // // //                     value={name}
// // // //                     onChange={(e) => setName(e.target.value)}
// // // //                     onKeyDown={(e) => {
// // // //                       if (e.key === 'Enter' && name.trim()) {
// // // //                         handleNameSubmit(e);
// // // //                       }
// // // //                     }}
// // // //                     placeholder="Your name"
// // // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="flex space-x-3">
// // // //                   <button 
// // // //                     onClick={handleNameSubmit}
// // // //                     disabled={!name.trim()}
// // // //                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
// // // //                   >
// // // //                     Connect
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={onClose}
// // // //                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
// // // //                   >
// // // //                     Cancel
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ) : token ? (
// // // //             <LiveKitRoom
// // // //               serverUrl={import.meta.env.VITE_LIVEKIT_URL}
// // // //               token={token}
// // // //               connect={true}
// // // //               video={false}
// // // //               audio={true}
// // // //               onDisconnected={() => {
// // // //                 onClose();
// // // //                 setIsSubmittingName(true);
// // // //               }}
// // // //             >
// // // //               <RoomAudioRenderer />
// // // //               <SimpleVoiceAssistant />
// // // //             </LiveKitRoom>
// // // //           ) : (
// // // //             <div className="flex items-center justify-center h-full">
// // // //               <div className="text-center">
// // // //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// // // //                 <p className="text-gray-600">Connecting...</p>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Main Chat Component
// // // // export default function Chat() {
// // // //   const [messages, setMessages] = useState([
// // // //     {
// // // //       id: 1,
// // // //       sender: 'SessionScribe',
// // // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // // • "What was decided about pricing in last week's leadership meeting?"
// // // // • "When is our product launch date?"  
// // // // • "What were Q4 revenue totals from the earnings call?"
// // // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // // //       timestamp: new Date(),
// // // //       isBot: true
// // // //     }
// // // //   ]);

// // // //   const [inputValue, setInputValue] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // // //   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
// // // //   const messagesEndRef = useRef(null);
// // // //   const inputRef = useRef(null);

// // // //   const scrollToBottom = () => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   };

// // // //   useEffect(() => {
// // // //     scrollToBottom();
// // // //   }, [messages]);

// // // //   // Handle keyboard shortcuts
// // // //   useEffect(() => {
// // // //     const handleKeyDown = (e) => {
// // // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // // //         e.preventDefault();
// // // //         showSuggestions();
// // // //       }
// // // //     };

// // // //     document.addEventListener('keydown', handleKeyDown);
// // // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // // //   }, []);

// // // //   const sendMessage = async (messageText) => {
// // // //     if (!messageText.trim() || isLoading) return;

// // // //     // Add user message
// // // //     const userMessage = {
// // // //       id: Date.now(),
// // // //       sender: 'You',
// // // //       content: messageText,
// // // //       timestamp: new Date(),
// // // //       isBot: false
// // // //     };

// // // //     setMessages(prev => [...prev, userMessage]);
// // // //     setInputValue('');
// // // //     setIsLoading(true);

// // // //     try {
// // // //       // For demo purposes, we'll simulate an API response
// // // //       // Replace this with your actual API call
// // // //       setTimeout(() => {
// // // //         const botMessage = {
// // // //           id: Date.now() + 1,
// // // //           sender: 'SessionScribe',
// // // //           content: `I understand you're asking about "${messageText}". I'm analyzing your conversation data to provide you with the most relevant information. This is a demo response - in production, this would connect to your actual SessionScribe backend.`,
// // // //           timestamp: new Date(),
// // // //           isBot: true
// // // //         };
// // // //         setMessages(prev => [...prev, botMessage]);
// // // //         setIsLoading(false);
// // // //       }, 1500);
// // // //     } catch (error) {
// // // //       console.error('Chat error:', error);

// // // //       const errorMessage = {
// // // //         id: Date.now() + 1,
// // // //         sender: 'SessionScribe',
// // // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // // //         timestamp: new Date(),
// // // //         isBot: true,
// // // //         isError: true
// // // //       };

// // // //       setMessages(prev => [...prev, errorMessage]);
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleSubmit = () => {
// // // //     sendMessage(inputValue);
// // // //   };

// // // //   const handleQuickAction = (question) => {
// // // //     sendMessage(question);
// // // //   };

// // // //   const showSuggestions = () => {
// // // //     const suggestions = [
// // // //       "What were the main decisions made in the last meeting?",
// // // //       "Who were the participants in the latest meeting?",
// // // //       "What are the next steps from the last meeting?",
// // // //       "Can you summarize the key points discussed?",
// // // //       "What action items were assigned?"
// // // //     ];

// // // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // // //     setInputValue(randomSuggestion);
// // // //     inputRef.current?.focus();
// // // //   };

// // // //   const formatTimestamp = (date) => {
// // // //     const now = new Date();
// // // //     const diff = now - date;
// // // //     const minutes = Math.floor(diff / 60000);

// // // //     if (minutes < 1) return 'just now';
// // // //     if (minutes < 60) return `${minutes}m ago`;
// // // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // // //     return date.toLocaleDateString();
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// // // //       {/* Modern Header with Glassmorphism */}
// // // //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// // // //         <div className="max-w-4xl mx-auto px-6 py-6">
// // // //           <div className="flex items-center justify-between">
// // // //             <div className="flex items-center space-x-4">
// // // //               <div className="relative">
// // // //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// // // //                   <Bot className="w-8 h-8 text-white" />
// // // //                 </div>
// // // //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // // //               </div>
// // // //               <div>
// // // //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// // // //                   SessionScribe
// // // //                 </h1>
// // // //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// // // //                 {currentMeeting && (
// // // //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// // // //                     📝 {currentMeeting.title} • {currentMeeting.date}
// // // //                   </p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// // // //               <MessageCircle className="w-4 h-4" />
// // // //               <span>Private conversation</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Chat Container */}
// // // //       <div className="max-w-4xl mx-auto px-6 pb-32">
// // // //         <div className="py-8 space-y-8">
// // // //           {messages.map((message) => (
// // // //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// // // //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// // // //                 {/* Avatar */}
// // // //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// // // //                   {message.isBot ? (
// // // //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // //                       <Bot className="w-5 h-5 text-white" />
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// // // //                       <User className="w-5 h-5 text-white" />
// // // //                     </div>
// // // //                   )}
// // // //                 </div>

// // // //                 {/* Message Card */}
// // // //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// // // //                   {/* Header */}
// // // //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// // // //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// // // //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// // // //                       {formatTimestamp(message.timestamp)}
// // // //                     </span>
// // // //                   </div>

// // // //                   {/* Message Content */}
// // // //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// // // //                     message.isBot 
// // // //                       ? message.isError 
// // // //                         ? 'bg-red-50/80 border border-red-100' 
// // // //                         : 'bg-white/80 border border-purple-100/50'
// // // //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// // // //                   }`}>
// // // //                     <div className={`prose prose-sm max-w-none ${
// // // //                       message.isBot 
// // // //                         ? message.isError 
// // // //                           ? 'text-red-700' 
// // // //                           : 'text-gray-800'
// // // //                         : 'text-white prose-invert'
// // // //                     }`}>
// // // //                       {message.content.split('\n').map((line, index) => {
// // // //                         if (line.trim().startsWith('•')) {
// // // //                           return (
// // // //                             <div key={index} className="flex items-start mb-3">
// // // //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// // // //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// // // //                             </div>
// // // //                           );
// // // //                         }
// // // //                         return line.trim() ? (
// // // //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// // // //                         ) : (
// // // //                           <br key={index} />
// // // //                         );
// // // //                       })}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}

// // // //           {/* Loading indicator */}
// // // //           {isLoading && (
// // // //             <div className="flex justify-start">
// // // //               <div className="flex items-start space-x-3 max-w-3xl">
// // // //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // // //                   <Bot className="w-5 h-5 text-white" />
// // // //                 </div>
// // // //                 <div className="flex-1 mr-12">
// // // //                   <div className="flex items-center space-x-2 mb-3">
// // // //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// // // //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// // // //                       typing...
// // // //                     </span>
// // // //                   </div>
// // // //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// // // //                     <div className="flex space-x-2">
// // // //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// // // //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {/* Quick action buttons - only show after initial message */}
// // // //           {messages.length === 1 && (
// // // //             <div className="flex flex-col space-y-4 max-w-3xl">
// // // //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //                 <button 
// // // //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // //                 >
// // // //                   <div className="flex items-center space-x-3 mb-2">
// // // //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// // // //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// // // //                   </div>
// // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// // // //                 </button>

// // // //                 <button 
// // // //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // //                 >
// // // //                   <div className="flex items-center space-x-3 mb-2">
// // // //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// // // //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// // // //                   </div>
// // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// // // //                 </button>

// // // //                 <button 
// // // //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // // //                 >
// // // //                   <div className="flex items-center space-x-3 mb-2">
// // // //                     <User className="w-5 h-5 text-purple-600" />
// // // //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// // // //                   </div>
// // // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           <div ref={messagesEndRef} />
// // // //         </div>
// // // //       </div>

// // // //       {/* Modern Input Section */}
// // // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// // // //         <div className="max-w-4xl mx-auto p-6">
// // // //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// // // //             <input
// // // //               ref={inputRef}
// // // //               type="text"
// // // //               value={inputValue}
// // // //               onChange={(e) => setInputValue(e.target.value)}
// // // //               onKeyDown={(e) => {
// // // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // // //                   e.preventDefault();
// // // //                   handleSubmit();
// // // //                 }
// // // //               }}
// // // //               placeholder="Ask SessionScribe anything about your conversations..."
// // // //               disabled={isLoading}
// // // //               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// // // //             />
// // // //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // // //               <button 
// // // //                 type="button"
// // // //                 onClick={showSuggestions}
// // // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // // //                 title="Get suggestions (Space)"
// // // //               >
// // // //                 <Sparkles className="w-5 h-5" />
// // // //               </button>
// // // //               <button 
// // // //                 type="button"
// // // //                 onClick={() => setShowVoiceAssistant(true)}
// // // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // // //                 title="Voice Assistant"
// // // //               >
// // // //                 <Mic className="w-5 h-5" />
// // // //               </button>
// // // //               <button 
// // // //                 type="button"
// // // //                 onClick={handleSubmit}
// // // //                 disabled={!inputValue.trim() || isLoading}
// // // //                 className="p-2 bg-gradient-to-br from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// // // //                 title="Send message"
// // // //               >
// // // //                 <Send className="w-5 h-5" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //           <p className="text-center text-xs text-gray-500 mt-3">
// // // //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
// // // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs mx-1">Mic</kbd> for voice • 
// // // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Voice Assistant Modal */}
// // // //       {showVoiceAssistant && (
// // // //         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff } from 'lucide-react';
// // // import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// // // import { Track } from "livekit-client";

// // // // Voice Assistant Components
// // // const Message = ({ type, text }) => {
// // //   return (
// // //     <div className="flex items-start space-x-3 mb-4">
// // //       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
// // //         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
// // //       }`}>
// // //         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
// // //       </div>
// // //       <div className="flex-1">
// // //         <div className="text-xs text-gray-500 mb-1">
// // //           {type === "agent" ? "Voice Assistant" : "You"}
// // //         </div>
// // //         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
// // //           {text}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SimpleVoiceAssistant = () => {
// // //   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
// // //   const localParticipant = useLocalParticipant();
// // //   const { segments: userTranscriptions } = useTrackTranscription({
// // //     publication: localParticipant.microphoneTrack,
// // //     source: Track.Source.Microphone,
// // //     participant: localParticipant.localParticipant,
// // //   });

// // //   const [messages, setMessages] = useState([]);

// // //   useEffect(() => {
// // //     const allMessages = [
// // //       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
// // //       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
// // //     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
// // //     setMessages(allMessages);
// // //   }, [agentTranscriptions, userTranscriptions]);

// // //   return (
// // //     <div className="flex flex-col h-full">
// // //       <div className="flex items-center justify-center py-8">
// // //         <div className="relative">
// // //           <BarVisualizer 
// // //             state={state} 
// // //             barCount={7} 
// // //             trackRef={audioTrack}
// // //             className="w-32 h-16"
// // //           />
// // //           <div className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${
// // //             state === "listening" ? "text-green-600" : 
// // //             state === "thinking" ? "text-yellow-600" : 
// // //             state === "speaking" ? "text-purple-600" : "text-gray-500"
// // //           }`}>
// // //             {state === "listening" && "Listening..."}
// // //             {state === "thinking" && "Thinking..."}
// // //             {state === "speaking" && "Speaking..."}
// // //             {state === "idle" && "Ready"}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="flex-1 px-6 pb-4">
// // //         <VoiceAssistantControlBar className="mb-6" />
// // //         <div className="space-y-4 max-h-64 overflow-y-auto">
// // //           {messages.map((msg, index) => (
// // //             <Message key={msg.id || index} type={msg.type} text={msg.text} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const LiveKitModal = ({ onClose }) => {
// // //   const [isSubmittingName, setIsSubmittingName] = useState(true);
// // //   const [name, setName] = useState("");
// // //   const [token, setToken] = useState(null);

// // //   const getToken = useCallback(async (userName) => {
// // //     try {
// // //       const response = await fetch(
// // //         `https://ssassistant.askaritechnology.com/getToken?name=${encodeURIComponent(userName)}`
// // //       );
// // //       const token = await response.text();
// // //       setToken(token);
// // //       setIsSubmittingName(false);
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   }, []);

// // //   const handleNameSubmit = (e) => {
// // //     if (e) e.preventDefault();
// // //     if (name.trim()) {
// // //       getToken(name);
// // //     }
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// // //       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
// // //         <div className="p-6 border-b border-gray-100">
// // //           <div className="flex items-center justify-between">
// // //             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
// // //             <button
// // //               onClick={onClose}
// // //               className="text-gray-400 hover:text-gray-600 transition-colors"
// // //             >
// // //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //               </svg>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="h-96">
// // //           {isSubmittingName ? (
// // //             <div className="p-6">
// // //               <div className="space-y-4">
// // //                 <div>
// // //                   <div className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Enter your name to start voice conversation
// // //                   </div>
// // //                   <input
// // //                     type="text"
// // //                     value={name}
// // //                     onChange={(e) => setName(e.target.value)}
// // //                     onKeyDown={(e) => {
// // //                       if (e.key === 'Enter' && name.trim()) {
// // //                         handleNameSubmit(e);
// // //                       }
// // //                     }}
// // //                     placeholder="Your name"
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
// // //                   />
// // //                 </div>
// // //                 <div className="flex space-x-3">
// // //                   <button 
// // //                     onClick={handleNameSubmit}
// // //                     disabled={!name.trim()}
// // //                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
// // //                   >
// // //                     Connect
// // //                   </button>
// // //                   <button
// // //                     onClick={onClose}
// // //                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
// // //                   >
// // //                     Cancel
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ) : token ? (
// // //             <LiveKitRoom
// // //               serverUrl="wss://real-estate-amcyjjjy.livekit.cloud"
// // //               token={token}
// // //               connect={true}
// // //               video={false}
// // //               audio={true}
// // //               onDisconnected={() => {
// // //                 onClose();
// // //                 setIsSubmittingName(true);
// // //               }}
// // //             >
// // //               <RoomAudioRenderer />
// // //               <SimpleVoiceAssistant />
// // //             </LiveKitRoom>
// // //           ) : (
// // //             <div className="flex items-center justify-center h-full">
// // //               <div className="text-center">
// // //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// // //                 <p className="text-gray-600">Connecting...</p>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Main Chat Component
// // // export default function Chat() {
// // //   const [messages, setMessages] = useState([
// // //     {
// // //       id: 1,
// // //       sender: 'SessionScribe',
// // //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // // • "What was decided about pricing in last week's leadership meeting?"
// // // • "When is our product launch date?"  
// // // • "What were Q4 revenue totals from the earnings call?"
// // // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// // //       timestamp: new Date(),
// // //       isBot: true
// // //     }
// // //   ]);

// // //   const [inputValue, setInputValue] = useState('');
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [currentMeeting, setCurrentMeeting] = useState(null);
// // //   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
// // //   const messagesEndRef = useRef(null);
// // //   const inputRef = useRef(null);

// // //   const scrollToBottom = () => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   };

// // //   useEffect(() => {
// // //     scrollToBottom();
// // //   }, [messages]);

// // //   // Handle keyboard shortcuts
// // //   useEffect(() => {
// // //     const handleKeyDown = (e) => {
// // //       if (e.key === ' ' && e.target !== inputRef.current) {
// // //         e.preventDefault();
// // //         showSuggestions();
// // //       }
// // //     };

// // //     document.addEventListener('keydown', handleKeyDown);
// // //     return () => document.removeEventListener('keydown', handleKeyDown);
// // //   }, []);

// // //   const sendMessage = async (messageText) => {
// // //     if (!messageText.trim() || isLoading) return;

// // //     // Add user message
// // //     const userMessage = {
// // //       id: Date.now(),
// // //       sender: 'You',
// // //       content: messageText,
// // //       timestamp: new Date(),
// // //       isBot: false
// // //     };

// // //     setMessages(prev => [...prev, userMessage]);
// // //     setInputValue('');
// // //     setIsLoading(true);

// // //     try {
// // //       // Get auth token - adjust this based on your auth implementation
// // //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// // //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': token // Adjust based on your auth header format
// // //         },
// // //         body: JSON.stringify({ question: messageText })
// // //       });

// // //       const data = await response.json();

// // //       if (data.success) {
// // //         // Update current meeting info if provided
// // //         if (data.meetingTitle && data.meetingDate) {
// // //           setCurrentMeeting({
// // //             title: data.meetingTitle,
// // //             date: data.meetingDate
// // //           });
// // //         }

// // //         // Add bot response
// // //         const botMessage = {
// // //           id: Date.now() + 1,
// // //           sender: 'SessionScribe',
// // //           content: data.response,
// // //           timestamp: new Date(),
// // //           isBot: true
// // //         };

// // //         setMessages(prev => [...prev, botMessage]);
// // //       } else {
// // //         throw new Error(data.error || 'Failed to get response');
// // //       }
// // //     } catch (error) {
// // //       console.error('Chat error:', error);

// // //       const errorMessage = {
// // //         id: Date.now() + 1,
// // //         sender: 'SessionScribe',
// // //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// // //         timestamp: new Date(),
// // //         isBot: true,
// // //         isError: true
// // //       };

// // //       setMessages(prev => [...prev, errorMessage]);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     sendMessage(inputValue);
// // //   };

// // //   const handleQuickAction = (question) => {
// // //     sendMessage(question);
// // //   };

// // //   const showSuggestions = () => {
// // //     const suggestions = [
// // //       "What were the main decisions made in the last meeting?",
// // //       "Who were the participants in the latest meeting?",
// // //       "What are the next steps from the last meeting?",
// // //       "Can you summarize the key points discussed?",
// // //       "What action items were assigned?"
// // //     ];

// // //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// // //     setInputValue(randomSuggestion);
// // //     inputRef.current?.focus();
// // //   };

// // //   const formatTimestamp = (date) => {
// // //     const now = new Date();
// // //     const diff = now - date;
// // //     const minutes = Math.floor(diff / 60000);

// // //     if (minutes < 1) return 'just now';
// // //     if (minutes < 60) return `${minutes}m ago`;
// // //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// // //     return date.toLocaleDateString();
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// // //       {/* Modern Header with Glassmorphism */}
// // //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// // //         <div className="max-w-4xl mx-auto px-6 py-6">
// // //           <div className="flex items-center justify-between">
// // //             <div className="flex items-center space-x-4">
// // //               <div className="relative">
// // //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// // //                   <Bot className="w-8 h-8 text-white" />
// // //                 </div>
// // //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// // //               </div>
// // //               <div>
// // //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// // //                   SessionScribe
// // //                 </h1>
// // //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// // //                 {currentMeeting && (
// // //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// // //                     📝 {currentMeeting.title} • {currentMeeting.date}
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// // //               <MessageCircle className="w-4 h-4" />
// // //               <span>Private conversation</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Chat Container */}
// // //       <div className="max-w-4xl mx-auto px-6 pb-32">
// // //         <div className="py-8 space-y-8">
// // //           {messages.map((message) => (
// // //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// // //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// // //                 {/* Avatar */}
// // //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// // //                   {message.isBot ? (
// // //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // //                       <Bot className="w-5 h-5 text-white" />
// // //                     </div>
// // //                   ) : (
// // //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// // //                       <User className="w-5 h-5 text-white" />
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* Message Card */}
// // //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// // //                   {/* Header */}
// // //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// // //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// // //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// // //                       {formatTimestamp(message.timestamp)}
// // //                     </span>
// // //                   </div>

// // //                   {/* Message Content */}
// // //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// // //                     message.isBot 
// // //                       ? message.isError 
// // //                         ? 'bg-red-50/80 border border-red-100' 
// // //                         : 'bg-white/80 border border-purple-100/50'
// // //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// // //                   }`}>
// // //                     <div className={`prose prose-sm max-w-none ${
// // //                       message.isBot 
// // //                         ? message.isError 
// // //                           ? 'text-red-700' 
// // //                           : 'text-gray-800'
// // //                         : 'text-white prose-invert'
// // //                     }`}>
// // //                       {message.content.split('\n').map((line, index) => {
// // //                         if (line.trim().startsWith('•')) {
// // //                           return (
// // //                             <div key={index} className="flex items-start mb-3">
// // //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// // //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// // //                             </div>
// // //                           );
// // //                         }
// // //                         return line.trim() ? (
// // //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// // //                         ) : (
// // //                           <br key={index} />
// // //                         );
// // //                       })}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}

// // //           {/* Loading indicator */}
// // //           {isLoading && (
// // //             <div className="flex justify-start">
// // //               <div className="flex items-start space-x-3 max-w-3xl">
// // //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// // //                   <Bot className="w-5 h-5 text-white" />
// // //                 </div>
// // //                 <div className="flex-1 mr-12">
// // //                   <div className="flex items-center space-x-2 mb-3">
// // //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// // //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// // //                       typing...
// // //                     </span>
// // //                   </div>
// // //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// // //                     <div className="flex space-x-2">
// // //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// // //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Quick action buttons - only show after initial message */}
// // //           {messages.length === 1 && (
// // //             <div className="flex flex-col space-y-4 max-w-3xl">
// // //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                 <button 
// // //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // //                 >
// // //                   <div className="flex items-center space-x-3 mb-2">
// // //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// // //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// // //                   </div>
// // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// // //                 </button>

// // //                 <button 
// // //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // //                 >
// // //                   <div className="flex items-center space-x-3 mb-2">
// // //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// // //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// // //                   </div>
// // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// // //                 </button>

// // //                 <button 
// // //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// // //                   className="group p-4 bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// // //                 >
// // //                   <div className="flex items-center space-x-3 mb-2">
// // //                     <User className="w-5 h-5 text-purple-600" />
// // //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// // //                   </div>
// // //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           <div ref={messagesEndRef} />
// // //         </div>
// // //       </div>

// // //       {/* Modern Input Section */}
// // //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// // //         <div className="max-w-4xl mx-auto p-6">
// // //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// // //             <input
// // //               ref={inputRef}
// // //               type="text"
// // //               value={inputValue}
// // //               onChange={(e) => setInputValue(e.target.value)}
// // //               onKeyDown={(e) => {
// // //                 if (e.key === 'Enter' && !e.shiftKey) {
// // //                   e.preventDefault();
// // //                   handleSubmit();
// // //                 }
// // //               }}
// // //               placeholder="Ask SessionScribe anything about your conversations..."
// // //               disabled={isLoading}
// // //               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// // //             />
// // //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// // //               <button 
// // //                 type="button"
// // //                 onClick={showSuggestions}
// // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // //                 title="Get suggestions (Space)"
// // //               >
// // //                 <Sparkles className="w-5 h-5" />
// // //               </button>
// // //               <button 
// // //                 type="button"
// // //                 onClick={() => setShowVoiceAssistant(true)}
// // //                 className="p-2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// // //                 title="Voice Assistant"
// // //               >
// // //                 <Mic className="w-5 h-5" />
// // //               </button>
// // //               <button 
// // //                 type="button"
// // //                 onClick={handleSubmit}
// // //                 disabled={!inputValue.trim() || isLoading}
// // //                 className="p-2 bg-gradient-to-br from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// // //                 title="Send message"
// // //               >
// // //                 <Send className="w-5 h-5" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //           <p className="text-center text-xs text-gray-500 mt-3">
// // //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
// // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs mx-1">Mic</kbd> for voice • 
// // //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* Voice Assistant Modal */}
// // //       {showVoiceAssistant && (
// // //         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
// // //       )}
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useRef, useEffect, useCallback } from 'react';
// // import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff } from 'lucide-react';
// // import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// // import { Track } from "livekit-client";

// // // Voice Assistant Components
// // const Message = ({ type, text }) => {
// //   return (
// //     <div className="flex items-start space-x-3 mb-4">
// //       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
// //         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
// //       }`}>
// //         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
// //       </div>
// //       <div className="flex-1">
// //         <div className="text-xs text-gray-500 mb-1">
// //           {type === "agent" ? "Voice Assistant" : "You"}
// //         </div>
// //         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
// //           {text}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const SimpleVoiceAssistant = () => {
// //   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
// //   const localParticipant = useLocalParticipant();
// //   const { segments: userTranscriptions } = useTrackTranscription({
// //     publication: localParticipant.microphoneTrack,
// //     source: Track.Source.Microphone,
// //     participant: localParticipant.localParticipant,
// //   });

// //   const [messages, setMessages] = useState([]);

// //   useEffect(() => {
// //     const allMessages = [
// //       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
// //       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
// //     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
// //     setMessages(allMessages);
// //   }, [agentTranscriptions, userTranscriptions]);

// //   return (
// //     <div className="flex flex-col h-full">
// //       {/* Compact Status Bar */}
// //       <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-b border-gray-100">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center space-x-3">
// //             <div className="relative">
// //               <BarVisualizer 
// //                 state={state} 
// //                 barCount={5} 
// //                 trackRef={audioTrack}
// //                 className="w-20 h-8"
// //               />
// //             </div>
// //             <div className={`text-sm font-medium ${
// //               state === "listening" ? "text-green-600" : 
// //               state === "thinking" ? "text-yellow-600" : 
// //               state === "speaking" ? "text-purple-600" : "text-gray-500"
// //             }`}>
// //               {state === "listening" && "🎤 Listening..."}
// //               {state === "thinking" && "🤔 Thinking..."}
// //               {state === "speaking" && "🗣️ Speaking..."}
// //               {state === "idle" && "💤 Ready"}
// //             </div>
// //           </div>
// //           <VoiceAssistantControlBar className="scale-75" />
// //         </div>
// //       </div>

// //       {/* Scrollable Chat Area - Takes up most of the space */}
// //       <div className="flex-1 px-4 py-4 overflow-hidden">
// //         <div className="h-full overflow-y-auto space-y-4 pr-2">
// //           {messages.length === 0 ? (
// //             <div className="text-center text-gray-500 mt-8">
// //               <Bot className="w-12 h-12 mx-auto mb-3 text-gray-300" />
// //               <p className="text-sm">Start talking to begin the conversation...</p>
// //             </div>
// //           ) : (
// //             messages.map((msg, index) => (
// //               <Message key={msg.id || index} type={msg.type} text={msg.text} />
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const LiveKitModal = ({ onClose }) => {
// //   const [isSubmittingName, setIsSubmittingName] = useState(true);
// //   const [name, setName] = useState("");
// //   const [token, setToken] = useState(null);

// //   const getToken = useCallback(async (userName) => {
// //     try {
// //       const response = await fetch(
// //         `https://ssassistant.askaritechnology.com/getToken?name=${encodeURIComponent(userName)}`
// //       );
// //       const token = await response.text();
// //       setToken(token);
// //       setIsSubmittingName(false);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }, []);

// //   const handleNameSubmit = (e) => {
// //     if (e) e.preventDefault();
// //     if (name.trim()) {
// //       getToken(name);
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-scroll flex flex-col">
// //         <div className="flex-shrink-0 p-6 border-b border-gray-100">
// //           <div className="flex items-center justify-between">
// //             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
// //             <button
// //               onClick={onClose}
// //               className="text-gray-400 hover:text-gray-600 transition-colors"
// //             >
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         <div className="flex-1 min-h-0">
// //           {isSubmittingName ? (
// //             <div className="p-6">
// //               <div className="space-y-4">
// //                 <div>
// //                   <div className="block text-sm font-medium text-gray-700 mb-2">
// //                     Enter your name to start voice conversation
// //                   </div>
// //                   <input
// //                     type="text"
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                     onKeyDown={(e) => {
// //                       if (e.key === 'Enter' && name.trim()) {
// //                         handleNameSubmit(e);
// //                       }
// //                     }}
// //                     placeholder="Your name"
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div className="flex space-x-3">
// //                   <button 
// //                     onClick={handleNameSubmit}
// //                     disabled={!name.trim()}
// //                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
// //                   >
// //                     Connect
// //                   </button>
// //                   <button
// //                     onClick={onClose}
// //                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
// //                   >
// //                     Cancel
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : token ? (
// //             <LiveKitRoom
// //               serverUrl="wss://real-estate-amcyjjjy.livekit.cloud"
// //               token={token}
// //               connect={true}
// //               video={false}
// //               audio={true}
// //               onDisconnected={() => {
// //                 onClose();
// //                 setIsSubmittingName(true);
// //               }}
// //             >
// //               <RoomAudioRenderer />
// //               <SimpleVoiceAssistant />
// //             </LiveKitRoom>
// //           ) : (
// //             <div className="flex items-center justify-center h-full">
// //               <div className="text-center">
// //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
// //                 <p className="text-gray-600">Connecting...</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Chat Component
// // export default function Chat() {
// //   const [messages, setMessages] = useState([
// //     {
// //       id: 1,
// //       sender: 'SessionScribe',
// //       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// // With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// // • "What was decided about pricing in last week's leadership meeting?"
// // • "When is our product launch date?"  
// // • "What were Q4 revenue totals from the earnings call?"
// // SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// // Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
// //       timestamp: new Date(),
// //       isBot: true
// //     }
// //   ]);

// //   const [inputValue, setInputValue] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [currentMeeting, setCurrentMeeting] = useState(null);
// //   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
// //   const messagesEndRef = useRef(null);
// //   const inputRef = useRef(null);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [messages]);

// //   // Handle keyboard shortcuts
// //   useEffect(() => {
// //     const handleKeyDown = (e) => {
// //       if (e.key === ' ' && e.target !== inputRef.current) {
// //         e.preventDefault();
// //         showSuggestions();
// //       }
// //     };

// //     document.addEventListener('keydown', handleKeyDown);
// //     return () => document.removeEventListener('keydown', handleKeyDown);
// //   }, []);

// //   const sendMessage = async (messageText) => {
// //     if (!messageText.trim() || isLoading) return;

// //     // Add user message
// //     const userMessage = {
// //       id: Date.now(),
// //       sender: 'You',
// //       content: messageText,
// //       timestamp: new Date(),
// //       isBot: false
// //     };

// //     setMessages(prev => [...prev, userMessage]);
// //     setInputValue('');
// //     setIsLoading(true);

// //     try {
// //       // Get auth token - adjust this based on your auth implementation
// //       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

// //       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': token // Adjust based on your auth header format
// //         },
// //         body: JSON.stringify({ question: messageText })
// //       });

// //       const data = await response.json();

// //       if (data.success) {
// //         // Update current meeting info if provided
// //         if (data.meetingTitle && data.meetingDate) {
// //           setCurrentMeeting({
// //             title: data.meetingTitle,
// //             date: data.meetingDate
// //           });
// //         }

// //         // Add bot response
// //         const botMessage = {
// //           id: Date.now() + 1,
// //           sender: 'SessionScribe',
// //           content: data.response,
// //           timestamp: new Date(),
// //           isBot: true
// //         };

// //         setMessages(prev => [...prev, botMessage]);
// //       } else {
// //         throw new Error(data.error || 'Failed to get response');
// //       }
// //     } catch (error) {
// //       console.error('Chat error:', error);

// //       const errorMessage = {
// //         id: Date.now() + 1,
// //         sender: 'SessionScribe',
// //         content: 'Sorry, I encountered an error while processing your question. Please try again.',
// //         timestamp: new Date(),
// //         isBot: true,
// //         isError: true
// //       };

// //       setMessages(prev => [...prev, errorMessage]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleSubmit = () => {
// //     sendMessage(inputValue);
// //   };

// //   const handleQuickAction = (question) => {
// //     sendMessage(question);
// //   };

// //   const showSuggestions = () => {
// //     const suggestions = [
// //       "What were the main decisions made in the last meeting?",
// //       "Who were the participants in the latest meeting?",
// //       "What are the next steps from the last meeting?",
// //       "Can you summarize the key points discussed?",
// //       "What action items were assigned?"
// //     ];

// //     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
// //     setInputValue(randomSuggestion);
// //     inputRef.current?.focus();
// //   };

// //   const formatTimestamp = (date) => {
// //     const now = new Date();
// //     const diff = now - date;
// //     const minutes = Math.floor(diff / 60000);

// //     if (minutes < 1) return 'just now';
// //     if (minutes < 60) return `${minutes}m ago`;
// //     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
// //     return date.toLocaleDateString();
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
// //       {/* Modern Header with Glassmorphism */}
// //       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
// //         <div className="max-w-4xl mx-auto px-6 py-6">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center space-x-4">
// //               <div className="relative">
// //                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
// //                   <Bot className="w-8 h-8 text-white" />
// //                 </div>
// //                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
// //               </div>
// //               <div>
// //                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
// //                   SessionScribe
// //                 </h1>
// //                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
// //                 {currentMeeting && (
// //                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
// //                     📝 {currentMeeting.title} • {currentMeeting.date}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
// //               <MessageCircle className="w-4 h-4" />
// //               <span>Private conversation</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Chat Container */}
// //       <div className="max-w-4xl mx-auto px-6 pb-32">
// //         <div className="py-8 space-y-8">
// //           {messages.map((message) => (
// //             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
// //               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
// //                 {/* Avatar */}
// //                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
// //                   {message.isBot ? (
// //                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// //                       <Bot className="w-5 h-5 text-white" />
// //                     </div>
// //                   ) : (
// //                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
// //                       <User className="w-5 h-5 text-white" />
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Message Card */}
// //                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
// //                   {/* Header */}
// //                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
// //                     <span className="font-semibold text-gray-900">{message.sender}</span>
// //                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// //                       {formatTimestamp(message.timestamp)}
// //                     </span>
// //                   </div>

// //                   {/* Message Content */}
// //                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
// //                     message.isBot 
// //                       ? message.isError 
// //                         ? 'bg-red-50/80 border border-red-100' 
// //                         : 'bg-white/80 border border-purple-100/50'
// //                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
// //                   }`}>
// //                     <div className={`prose prose-sm max-w-none ${
// //                       message.isBot 
// //                         ? message.isError 
// //                           ? 'text-red-700' 
// //                           : 'text-gray-800'
// //                         : 'text-white prose-invert'
// //                     }`}>
// //                       {message.content.split('\n').map((line, index) => {
// //                         if (line.trim().startsWith('•')) {
// //                           return (
// //                             <div key={index} className="flex items-start mb-3">
// //                               <span className="mr-3 text-purple-500 font-bold">•</span>
// //                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
// //                             </div>
// //                           );
// //                         }
// //                         return line.trim() ? (
// //                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
// //                         ) : (
// //                           <br key={index} />
// //                         );
// //                       })}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}

// //           {/* Loading indicator */}
// //           {isLoading && (
// //             <div className="flex justify-start">
// //               <div className="flex items-start space-x-3 max-w-3xl">
// //                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
// //                   <Bot className="w-5 h-5 text-white" />
// //                 </div>
// //                 <div className="flex-1 mr-12">
// //                   <div className="flex items-center space-x-2 mb-3">
// //                     <span className="font-semibold text-gray-900">SessionScribe</span>
// //                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
// //                       typing...
// //                     </span>
// //                   </div>
// //                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
// //                     <div className="flex space-x-2">
// //                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
// //                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// //                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Quick action buttons - only show after initial message */}
// //           {messages.length === 1 && (
// //             <div className="flex flex-col space-y-4 max-w-3xl">
// //               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 <button 
// //                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
// //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// //                 >
// //                   <div className="flex items-center space-x-3 mb-2">
// //                     <MessageCircle className="w-5 h-5 text-purple-600" />
// //                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
// //                   </div>
// //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
// //                 </button>

// //                 <button 
// //                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
// //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// //                 >
// //                   <div className="flex items-center space-x-3 mb-2">
// //                     <ArrowUp className="w-5 h-5 text-purple-600" />
// //                     <span className="text-sm font-medium text-purple-600">Action Items</span>
// //                   </div>
// //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
// //                 </button>

// //                 <button 
// //                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
// //                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
// //                 >
// //                   <div className="flex items-center space-x-3 mb-2">
// //                     <User className="w-5 h-5 text-purple-600" />
// //                     <span className="text-sm font-medium text-purple-600">Participants</span>
// //                   </div>
// //                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
// //                 </button>
// //               </div>
// //             </div>
// //           )}

// //           <div ref={messagesEndRef} />
// //         </div>
// //       </div>

// //       {/* Modern Input Section */}
// //       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
// //         <div className="max-w-4xl mx-auto p-6">
// //           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
// //             <input
// //               ref={inputRef}
// //               type="text"
// //               value={inputValue}
// //               onChange={(e) => setInputValue(e.target.value)}
// //               onKeyDown={(e) => {
// //                 if (e.key === 'Enter' && !e.shiftKey) {
// //                   e.preventDefault();
// //                   handleSubmit();
// //                 }
// //               }}
// //               placeholder="Ask SessionScribe anything about your conversations..."
// //               disabled={isLoading}
// //               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
// //             />
// //             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
// //               <button 
// //                 type="button"
// //                 onClick={showSuggestions}
// //                 className="p-2 text-purple-400 cursor-pointer hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// //                 title="Get suggestions (Space)"
// //               >
// //                 <Sparkles className="w-5 h-5" />
// //               </button>
// //               <button 
// //                 type="button"
// //                 onClick={() => setShowVoiceAssistant(true)}
// //                 className="p-2 text-purple-400 cursor-pointer hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
// //                 title="Voice Assistant"
// //               >
// //                 <Mic className="w-5 h-5" />
// //               </button>
// //               <button 
// //                 type="button"
// //                 onClick={handleSubmit}
// //                 disabled={!inputValue.trim() || isLoading}
// //                 className="p-2 bg-gradient-to-br cursor-pointer from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
// //                 title="Send message"
// //               >
// //                 <Send className="w-5 h-5" />
// //               </button>
// //             </div>
// //           </div>
// //           <p className="text-center text-xs text-gray-500 mt-3">
// //             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
// //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs mx-1">Mic</kbd> for voice • 
// //             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
// //           </p>
// //         </div>
// //       </div>

// //       {/* Voice Assistant Modal */}
// //       {showVoiceAssistant && (
// //         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
// //       )}
// //     </div>
// //   );
// // }























// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff } from 'lucide-react';
// import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
// import { Track } from "livekit-client";

// // Voice Assistant Components
// const Message = ({ type, text }) => {
//   return (
//     <div className="flex items-start space-x-3 mb-4">
//       <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
//         type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
//       }`}>
//         {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
//       </div>
//       <div className="flex-1">
//         <div className="text-xs text-gray-500 mb-1">
//           {type === "agent" ? "Voice Assistant" : "You"}
//         </div>
//         <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
//           {text}
//         </div>
//       </div>
//     </div>
//   );
// };

// const SimpleVoiceAssistant = () => {
//   const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
//   const localParticipant = useLocalParticipant();
//   const { segments: userTranscriptions } = useTrackTranscription({
//     publication: localParticipant.microphoneTrack,
//     source: Track.Source.Microphone,
//     participant: localParticipant.localParticipant,
//   });

//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const allMessages = [
//       ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
//       ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
//     ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
//     setMessages(allMessages);
//   }, [agentTranscriptions, userTranscriptions]);

//   return (
//     <div className="flex flex-col h-full">
//       {/* Compact Status Bar */}
//       <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-b border-gray-100">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="relative">
//               <BarVisualizer 
//                 state={state} 
//                 barCount={5} 
//                 trackRef={audioTrack}
//                 className="w-20 h-8"
//               />
//             </div>
//             <div className={`text-sm font-medium ${
//               state === "listening" ? "text-green-600" : 
//               state === "thinking" ? "text-yellow-600" : 
//               state === "speaking" ? "text-purple-600" : "text-gray-500"
//             }`}>
//               {state === "listening" && "🎤 Listening..."}
//               {state === "thinking" && "🤔 Thinking..."}
//               {state === "speaking" && "🗣️ Speaking..."}
//               {state === "idle" && "💤 Ready"}
//             </div>
//           </div>
//           <VoiceAssistantControlBar className="scale-75" />
//         </div>
//       </div>

//       {/* Scrollable Chat Area - Takes up most of the space */}
//       <div className="flex-1 px-4 py-4 overflow-hidden">
//         <div className="h-full overflow-y-auto space-y-4 pr-2">
//           {messages.length === 0 ? (
//             <div className="text-center text-gray-500 mt-8">
//               <Bot className="w-12 h-12 mx-auto mb-3 text-gray-300" />
//               <p className="text-sm">Start talking to begin the conversation...</p>
//             </div>
//           ) : (
//             messages.map((msg, index) => (
//               <Message key={msg.id || index} type={msg.type} text={msg.text} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const LiveKitModal = ({ onClose }) => {
//   const [isSubmittingName, setIsSubmittingName] = useState(true);
//   const [name, setName] = useState("");
//   const [token, setToken] = useState(null);

//   const getToken = useCallback(async (userName) => {
//     try {
//       const response = await fetch(
//         `https://session.askaritechnology.com/getToken?name=${encodeURIComponent(userName)}`
//       );
//       const token = await response.text();
//       setToken(token);
//       setIsSubmittingName(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }, []);

//   const handleNameSubmit = (e) => {
//     if (e) e.preventDefault();
//     if (name.trim()) {
//       getToken(name);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-scroll flex flex-col">
//         <div className="flex-shrink-0 p-6 border-b border-gray-100">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="flex-1 min-h-0">
//           {isSubmittingName ? (
//             <div className="p-6">
//               <div className="space-y-4">
//                 <div>
//                   <div className="block text-sm font-medium text-gray-700 mb-2">
//                     Enter your name to start voice conversation
//                   </div>
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' && name.trim()) {
//                         handleNameSubmit(e);
//                       }
//                     }}
//                     placeholder="Your name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div className="flex space-x-3">
//                   <button 
//                     onClick={handleNameSubmit}
//                     disabled={!name.trim()}
//                     className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
//                   >
//                     Connect
//                   </button>
//                   <button
//                     onClick={onClose}
//                     className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : token ? (
//             <LiveKitRoom
//               serverUrl="wss://sessionscribe-meetingagent-fjt4eqf1.livekit.cloud"
//               token={token}
//               connect={true}
//               video={false}
//               audio={true}
//               onDisconnected={() => {
//                 onClose();
//                 setIsSubmittingName(true);
//               }}
//             >
//               <RoomAudioRenderer />
//               <SimpleVoiceAssistant />
//             </LiveKitRoom>
//           ) : (
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
//                 <p className="text-gray-600">Connecting...</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Chat Component
// export default function Chat() {
//   const [showMicCallout, setShowMicCallout] = useState(true);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: 'SessionScribe',
//       content: `Stuck searching for answers? SessionScribe Chat has you covered.
// With SessionScribe Chat, you can easily access crucial details from all your discussions, without the hassle of sifting through endless conversation threads. Just ask questions like:
// • "What was decided about pricing in last week's leadership meeting?"
// • "When is our product launch date?"  
// • "What were Q4 revenue totals from the earnings call?"
// SessionScribe Chat, our new AI-powered feature, generates answers from your discussions, meeting notes, and task lists making your workspace more efficient, collaborative, and informed.

// Not sure what to ask? 😉 Press "space" on your keyboard or click the sparkle icon below to get suggestions.`,
//       timestamp: new Date(),
//       isBot: true
//     }
//   ]);

//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentMeeting, setCurrentMeeting] = useState(null);
//   const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Auto-hide mic callout after 8 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowMicCallout(false);
//     }, 20000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Handle keyboard shortcuts
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === ' ' && e.target !== inputRef.current) {
//         e.preventDefault();
//         showSuggestions();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   const sendMessage = async (messageText) => {
//     if (!messageText.trim() || isLoading) return;

//     // Add user message
//     const userMessage = {
//       id: Date.now(),
//       sender: 'You',
//       content: messageText,
//       timestamp: new Date(),
//       isBot: false
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');
//     setIsLoading(true);

//     try {
//       // Get auth token - adjust this based on your auth implementation
//       const token = localStorage.getItem('token') || sessionStorage.getItem('token');

//       const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token // Adjust based on your auth header format
//         },
//         body: JSON.stringify({ question: messageText })
//       });

//       const data = await response.json();

//       if (data.success) {
//         // Update current meeting info if provided
//         if (data.meetingTitle && data.meetingDate) {
//           setCurrentMeeting({
//             title: data.meetingTitle,
//             date: data.meetingDate
//           });
//         }

//         // Add bot response
//         const botMessage = {
//           id: Date.now() + 1,
//           sender: 'SessionScribe',
//           content: data.response,
//           timestamp: new Date(),
//           isBot: true
//         };

//         setMessages(prev => [...prev, botMessage]);
//       } else {
//         throw new Error(data.error || 'Failed to get response');
//       }
//     } catch (error) {
//       console.error('Chat error:', error);

//       const errorMessage = {
//         id: Date.now() + 1,
//         sender: 'SessionScribe',
//         content: 'Sorry, I encountered an error while processing your question. Please try again.',
//         timestamp: new Date(),
//         isBot: true,
//         isError: true
//       };

//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = () => {
//     sendMessage(inputValue);
//   };

//   const handleQuickAction = (question) => {
//     sendMessage(question);
//   };

//   const showSuggestions = () => {
//     const suggestions = [
//       "What were the main decisions made in the last meeting?",
//       "Who were the participants in the latest meeting?",
//       "What are the next steps from the last meeting?",
//       "Can you summarize the key points discussed?",
//       "What action items were assigned?"
//     ];

//     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
//     setInputValue(randomSuggestion);
//     inputRef.current?.focus();
//   };

//   const formatTimestamp = (date) => {
//     const now = new Date();
//     const diff = now - date;
//     const minutes = Math.floor(diff / 60000);

//     if (minutes < 1) return 'just now';
//     if (minutes < 60) return `${minutes}m ago`;
//     if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
//     return date.toLocaleDateString();
//   };

//   const handleMicClick = () => {
//     setShowMicCallout(false);
//     setShowVoiceAssistant(true);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
//       {/* Modern Header with Glassmorphism */}
//       <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
//         <div className="max-w-4xl mx-auto px-6 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
//                   <Bot className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
//                   SessionScribe
//                 </h1>
//                 <p className="text-sm text-gray-600 font-medium">AI Assistant • Online</p>
//                 {currentMeeting && (
//                   <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
//                     📝 {currentMeeting.title} • {currentMeeting.date}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
//               <MessageCircle className="w-4 h-4" />
//               <span>Private conversation</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Chat Container */}
//       <div className="max-w-4xl mx-auto px-6 pb-32">
//         <div className="py-8 space-y-8">
//           {messages.map((message) => (
//             <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
//               <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
//                 {/* Avatar */}
//                 <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
//                   {message.isBot ? (
//                     <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
//                       <Bot className="w-5 h-5 text-white" />
//                     </div>
//                   ) : (
//                     <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
//                       <User className="w-5 h-5 text-white" />
//                     </div>
//                   )}
//                 </div>

//                 {/* Message Card */}
//                 <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
//                   {/* Header */}
//                   <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
//                     <span className="font-semibold text-gray-900">{message.sender}</span>
//                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
//                       {formatTimestamp(message.timestamp)}
//                     </span>
//                   </div>

//                   {/* Message Content */}
//                   <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${
//                     message.isBot 
//                       ? message.isError 
//                         ? 'bg-red-50/80 border border-red-100' 
//                         : 'bg-white/80 border border-purple-100/50'
//                       : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
//                   }`}>
//                     <div className={`prose prose-sm max-w-none ${
//                       message.isBot 
//                         ? message.isError 
//                           ? 'text-red-700' 
//                           : 'text-gray-800'
//                         : 'text-white prose-invert'
//                     }`}>
//                       {message.content.split('\n').map((line, index) => {
//                         if (line.trim().startsWith('•')) {
//                           return (
//                             <div key={index} className="flex items-start mb-3">
//                               <span className="mr-3 text-purple-500 font-bold">•</span>
//                               <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
//                             </div>
//                           );
//                         }
//                         return line.trim() ? (
//                           <p key={index} className="mb-3 leading-relaxed">{line}</p>
//                         ) : (
//                           <br key={index} />
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Loading indicator */}
//           {isLoading && (
//             <div className="flex justify-start">
//               <div className="flex items-start space-x-3 max-w-3xl">
//                 <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
//                   <Bot className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="flex-1 mr-12">
//                   <div className="flex items-center space-x-2 mb-3">
//                     <span className="font-semibold text-gray-900">SessionScribe</span>
//                     <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
//                       typing...
//                     </span>
//                   </div>
//                   <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
//                       <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Quick action buttons - only show after initial message */}
//           {messages.length === 1 && (
//             <div className="flex flex-col space-y-4 max-w-3xl">
//               <h3 className="text-lg font-semibold text-gray-800 px-1">Try asking:</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <button 
//                   onClick={() => handleQuickAction("What was discussed in the last meeting?")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <MessageCircle className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Meeting Summary</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What was discussed in the last meeting?</p>
//                 </button>

//                 <button 
//                   onClick={() => handleQuickAction("What are the next steps from the last meeting?")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <ArrowUp className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Action Items</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">What are the next steps?</p>
//                 </button>

//                 <button 
//                   onClick={() => handleQuickAction("Who were the participants in the last meeting?")}
//                   className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
//                 >
//                   <div className="flex items-center space-x-3 mb-2">
//                     <User className="w-5 h-5 text-purple-600" />
//                     <span className="text-sm font-medium text-purple-600">Participants</span>
//                   </div>
//                   <p className="text-sm text-gray-700 group-hover:text-gray-900">Who were the participants?</p>
//                 </button>
//               </div>
//             </div>
//           )}

//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       {/* Modern Input Section */}
//       <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
//         <div className="max-w-4xl mx-auto p-6">
//           <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
//             <input
//               ref={inputRef}
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' && !e.shiftKey) {
//                   e.preventDefault();
//                   handleSubmit();
//                 }
//               }}
//               placeholder="Ask SessionScribe anything about your conversations..."
//               disabled={isLoading}
//               className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
//             />
//             <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
//               <button 
//                 type="button"
//                 onClick={showSuggestions}
//                 className="p-2 text-purple-400 cursor-pointer hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
//                 title="Get suggestions (Space)"
//               >
//                 <Sparkles className="w-5 h-5" />
//               </button>

//               {/* Enhanced Mic Button with attention-grabbing elements */}
//               <div className="relative">
//                 <button 
//                   type="button"
//                   onClick={handleMicClick}
//                   className={`p-2 cursor-pointer rounded-xl transition-all duration-200 relative ${
//                     showMicCallout 
//                       ? 'bg-gradient-to-r from-[#9810fa] to-purple-600 text-white shadow-lg animate-bounce' 
//                       : 'text-purple-400 hover:text-purple-600 hover:bg-purple-50'
//                   }`}
//                   title="Voice Assistant - Try our AI talking feature!"
//                 >
//                   <Mic className={`w-5 h-5 ${showMicCallout ? '' : ''}`} />

//                   {/* Pulsing ring effect */}
//                   {showMicCallout && (
//                     <>
//                       <div className="absolute inset-0 rounded-xl bg-purple-400 animate-ping opacity-30"></div>
//                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
//                     </>
//                   )}
//                 </button>

//                 {/* Floating callout tooltip */}
//                 {showMicCallout && (
//                   <div className="absolute bottom-full right-0 mb-3 transform animate-bounce">
//                     <div className="bg-gradient-to-r from-[#9810fa] to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap relative">
//                       🎙️ Try our AI Voice Assistant!
//                       <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <button 
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={!inputValue.trim() || isLoading}
//                 className="p-2 bg-gradient-to-br cursor-pointer from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
//                 title="Send message"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//           <p className="text-center text-xs text-gray-500 mt-3">
//             Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions • 
//             <kbd className="px-2 py-1 bg-purple-100 rounded text-xs mx-1 text-purple-700">🎤 Mic</kbd> for voice assistant • 
//             <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
//           </p>
//         </div>
//       </div>

//       {/* Voice Assistant Modal */}
//       {showVoiceAssistant && (
//         <LiveKitModal onClose={() => setShowVoiceAssistant(false)} />
//       )}
//     </div>
//   );
// }


















import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, Sparkles, ArrowUp, Send, Bot, User, Mic, MicOff, Search, Calendar, Users, BarChart3, FileText } from 'lucide-react';
import { LiveKitRoom, RoomAudioRenderer, useVoiceAssistant, BarVisualizer, VoiceAssistantControlBar, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
import { Track } from "livekit-client";
import { useApp } from '../components/context/AppContext';

// Voice Assistant Components (keeping your existing implementation)
const Message = ({ type, text }) => {
  return (
    <div className="flex items-start space-x-3 mb-4">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${type === "agent" ? "bg-gradient-to-br from-[#9810fa] to-purple-600" : "bg-gray-400"
        }`}>
        {type === "agent" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-1">
          {type === "agent" ? "Voice Assistant" : "You"}
        </div>
        <div className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3">
          {text}
        </div>
      </div>
    </div>
  );
};

const SimpleVoiceAssistant = () => {
  const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
  const localParticipant = useLocalParticipant();
  const { segments: userTranscriptions } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const allMessages = [
      ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
      ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
    ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
    setMessages(allMessages);
  }, [agentTranscriptions, userTranscriptions]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 px-4 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <BarVisualizer
                state={state}
                barCount={5}
                trackRef={audioTrack}
                className="w-20 h-8"
              />
            </div>
            <div className={`text-sm font-medium ${state === "listening" ? "text-green-600" :
              state === "thinking" ? "text-yellow-600" :
                state === "speaking" ? "text-purple-600" : "text-gray-500"
              }`}>
              {state === "listening" && "🎤 Listening..."}
              {state === "thinking" && "🤔 Thinking..."}
              {state === "speaking" && "🗣️ Speaking..."}
              {state === "idle" && "💤 Ready"}
            </div>
          </div>
          <VoiceAssistantControlBar className="scale-75" />
        </div>
      </div>

      <div className="flex-1 px-4 py-4 overflow-hidden">
        <div className="h-full overflow-y-auto space-y-4 pr-2">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <Bot className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">Start talking to begin the conversation...</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <Message key={msg.id || index} type={msg.type} text={msg.text} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const LiveKitModal = ({ onClose, user }) => {
  const [isSubmittingName, setIsSubmittingName] = useState(true);
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);

  const getToken = useCallback(async (userName) => {
    const userId = user._id;
    console.log(userId);

    try {
      const response = await fetch(
        `https://session.askaritechnology.com/getToken?name=${encodeURIComponent(userName)}&id=${userId}`
      );
      const token = await response.text();
      setToken(token);
      setIsSubmittingName(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleNameSubmit = (e) => {
    if (e) e.preventDefault();
    if (name.trim()) {
      getToken(name);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-scroll flex flex-col">
        <div className="flex-shrink-0 p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Voice Assistant</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0">
          {isSubmittingName ? (
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your name to start voice conversation
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && name.trim()) {
                        handleNameSubmit(e);
                      }
                    }}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleNameSubmit}
                    disabled={!name.trim()}
                    className="flex-1 bg-gradient-to-r from-[#9810fa] to-purple-600 text-white py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                  >
                    Connect
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : token ? (
            <LiveKitRoom
              serverUrl="wss://sessionscribe-meetingagent-fjt4eqf1.livekit.cloud"
              token={token}
              connect={true}
              video={false}
              audio={true}
              onDisconnected={() => {
                onClose();
                setIsSubmittingName(true);
              }}
            >
              <RoomAudioRenderer />
              <SimpleVoiceAssistant />
            </LiveKitRoom>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Connecting...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced Search Info Component
const SearchInfoBadge = ({ searchInfo }) => {
  if (!searchInfo) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'date': return <Calendar className="w-4 h-4" />;
      case 'participant': return <Users className="w-4 h-4" />;
      case 'keyword': return <Search className="w-4 h-4" />;
      case 'statistics': return <BarChart3 className="w-4 h-4" />;
      case 'transcript': return <FileText className="w-4 h-4" />;
      default: return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'date': return 'Date Search';
      case 'participant': return 'Participant Search';
      case 'keyword': return 'Keyword Search';
      case 'statistics': return 'Statistics';
      case 'transcript': return 'Transcript';
      case 'recent': return 'Recent Meetings';
      default: return 'Search';
    }
  };

  return (
    <div className="flex items-center space-x-2 text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-2">
      {getIcon(searchInfo.type)}
      <span>{getTypeLabel(searchInfo.type)}</span>
      {searchInfo.resultCount > 0 && (
        <span className="bg-purple-200 px-2 py-0.5 rounded-full font-medium">
          {searchInfo.resultCount} results
        </span>
      )}
      {searchInfo.keywords && (
        <span className="text-purple-800">• Keywords: {searchInfo.keywords.join(', ')}</span>
      )}
      {searchInfo.participant && (
        <span className="text-purple-800">• {searchInfo.participant}</span>
      )}
      {searchInfo.dateSearched && (
        <span className="text-purple-800">• {searchInfo.dateSearched}</span>
      )}
    </div>
  );
};

// Main Chat Component
export default function Chat() {
  const [showMicCallout, setShowMicCallout] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'SessionScribe',
      content: `Ready to explore your meetings? SessionScribe Chat now has powerful search capabilities!

I can help you find and analyze meetings using advanced search features:

🔍 **Smart Search Options:**
• **Date-based**: "Show me meetings from today", "What happened yesterday?", "Find meetings from July 15th"
• **Keyword Search**: "Find meetings about collaboration", "Show discussions on pricing"
• **Participant Search**: "What meetings did Speaker1 attend?", "Find meetings with specific participants"
• **Recent Activity**: "Show me recent meetings", "What are my latest discussions?"
• **Statistics**: "How many meetings do I have?", "Show meeting statistics"
• **Transcripts**: "Show me the conversation from the last meeting"

🎯 **Try asking:**
• "What meetings happened this week?"
• "Find meetings about student success"
• "Show me meetings with Speaker2"
• "What was discussed in meetings yesterday?"
• "How many meetings do I have in total?"

Not sure what to ask? Press "space" on your keyboard or click the sparkle icon for suggestions!`,
      timestamp: new Date(),
      isBot: true
    }
  ]);
  const { user } = useApp();


  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentMeeting, setCurrentMeeting] = useState(null);
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
  const [lastSearchInfo, setLastSearchInfo] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-hide mic callout after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMicCallout(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' && e.target !== inputRef.current) {
        e.preventDefault();
        showSuggestions();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sendMessage = async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: 'You',
      content: messageText,
      timestamp: new Date(),
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get auth token
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');

      const response = await fetch('https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({ question: messageText })
      });

      const data = await response.json();

      if (data.success) {
        // Update current meeting info if provided
        if (data.meetingTitle && data.meetingDate) {
          setCurrentMeeting({
            title: data.meetingTitle,
            date: data.meetingDate
          });
        }

        // Update search info
        if (data.searchInfo) {
          setLastSearchInfo(data.searchInfo);
        }

        // Add bot response
        const botMessage = {
          id: Date.now() + 1,
          sender: 'SessionScribe',
          content: data.response,
          timestamp: new Date(),
          isBot: true,
          searchInfo: data.searchInfo
        };

        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);

      const errorMessage = {
        id: Date.now() + 1,
        sender: 'SessionScribe',
        content: 'Sorry, I encountered an error while processing your question. Please try again.',
        timestamp: new Date(),
        isBot: true,
        isError: true
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    sendMessage(inputValue);
  };

  const handleQuickAction = (question) => {
    sendMessage(question);
  };

  const showSuggestions = () => {
    const suggestions = [
      "Show me meetings from today",
      "Find meetings about collaboration",
      "What meetings did Speaker1 attend?",
      "Show me recent meetings",
      "How many meetings do I have?",
      "What happened in yesterday's meetings?",
      "Find meetings from this week",
      "Show meeting statistics",
      "What was discussed about student success?",
      "Get transcript from the last meeting"
    ];

    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setInputValue(randomSuggestion);
    inputRef.current?.focus();
  };

  const formatTimestamp = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  const handleMicClick = () => {
    setShowMicCallout(false);
    setShowVoiceAssistant(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Enhanced Header with Search Info */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-purple-600 bg-clip-text text-transparent">
                  SessionScribe
                </h1>
                <p className="text-sm text-gray-600 font-medium">Advanced AI Assistant • Online</p>
                {currentMeeting && (
                  <p className="text-xs text-purple-600 mt-1 px-2 py-1 bg-purple-50 rounded-full inline-block">
                    📝 {currentMeeting.title} • {currentMeeting.date}
                  </p>
                )}
                {lastSearchInfo && (
                  <div className="mt-2">
                    <SearchInfoBadge searchInfo={lastSearchInfo} />
                  </div>
                )}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
              <Search className="w-4 h-4" />
              <span>Advanced Search Enabled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <div className="py-8 space-y-8">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`flex items-start space-x-3 max-w-3xl ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 ${message.isBot ? '' : 'ml-3'}`}>
                  {message.isBot ? (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-md">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Message Card */}
                <div className={`flex-1 ${message.isBot ? 'mr-12' : 'ml-12'}`}>
                  {/* Header */}
                  <div className={`flex items-center space-x-2 mb-3 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <span className="font-semibold text-gray-900">{message.sender}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </div>

                  {/* Search Info Badge */}
                  {message.searchInfo && message.isBot && (
                    <div className="mb-3">
                      <SearchInfoBadge searchInfo={message.searchInfo} />
                    </div>
                  )}

                  {/* Message Content */}
                  <div className={`rounded-2xl p-6 shadow-md backdrop-blur-sm ${message.isBot
                    ? message.isError
                      ? 'bg-red-50/80 border border-red-100'
                      : 'bg-white/80 border border-purple-100/50'
                    : 'bg-gradient-to-br from-[#9810fa] to-purple-600 text-white'
                    }`}>
                    <div className={`prose prose-sm max-w-none ${message.isBot
                      ? message.isError
                        ? 'text-red-700'
                        : 'text-gray-800'
                      : 'text-white prose-invert'
                      }`}>
                      {message.content.split('\n').map((line, index) => {
                        if (line.trim().startsWith('•')) {
                          return (
                            <div key={index} className="flex items-start mb-3">
                              <span className="mr-3 text-purple-500 font-bold">•</span>
                              <span className="leading-relaxed">{line.replace(/^•\s*/, '')}</span>
                            </div>
                          );
                        }
                        if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                          return (
                            <p key={index} className="mb-3 leading-relaxed font-bold">
                              {line.replace(/\*\*/g, '')}
                            </p>
                          );
                        }
                        return line.trim() ? (
                          <p key={index} className="mb-3 leading-relaxed">{line}</p>
                        ) : (
                          <br key={index} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-3xl">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9810fa] to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 mr-12">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="font-semibold text-gray-900">SessionScribe</span>
                    <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full animate-pulse">
                      searching...
                    </span>
                  </div>
                  <div className="rounded-2xl p-6 bg-white/80 border border-purple-100/50 shadow-md backdrop-blur-sm">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Quick Action Buttons */}
          {messages.length === 1 && (
            <div className="flex flex-col space-y-4 max-w-3xl">
              <h3 className="text-lg font-semibold text-gray-800 px-1">Try these advanced searches:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => handleQuickAction("Show me meetings from today")}
                  className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Today's Meetings</span>
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900">Show me meetings from today</p>
                </button>

                <button
                  onClick={() => handleQuickAction("Find meetings about collaboration")}
                  className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Search className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Keyword Search</span>
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900">Find meetings about collaboration</p>
                </button>

                <button
                  onClick={() => handleQuickAction("What meetings did Speaker1 attend?")}
                  className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Participant Search</span>
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900">Find by participant</p>
                </button>

                <button
                  onClick={() => handleQuickAction("Show me recent meetings")}
                  className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Recent Activity</span>
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900">Show recent meetings</p>
                </button>

                <button
                  onClick={() => handleQuickAction("How many meetings do I have?")}
                  className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Statistics</span>
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900">Get meeting statistics</p>
                </button>

                <button
                  onClick={() => handleQuickAction("Show me meetings from this week")}
                  className="group p-4 cursor-pointer bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Week View</span>
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900">This week's meetings</p>
                </button>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Enhanced Input Section */}
      <div className="fixed bottom-0 w-[-webkit-fill-available] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl border-t border-purple-100/50">
        <div className="max-w-4xl mx-auto p-6">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Ask SessionScribe about your meetings... Try 'Show meetings from today' or 'Find meetings about collaboration'"
              disabled={isLoading}
              className="w-full px-6 py-4 pr-32 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9810fa]/20 disabled:opacity-50 text-gray-800 placeholder-gray-500"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <button
                type="button"
                onClick={showSuggestions}
                className="p-2 text-purple-400 cursor-pointer hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
                title="Get suggestions (Space)"
              >
                <Sparkles className="w-5 h-5" />
              </button>

              {/* Enhanced Mic Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={handleMicClick}
                  className={`p-2 cursor-pointer rounded-xl transition-all duration-200 relative ${showMicCallout
                    ? 'bg-gradient-to-r from-[#9810fa] to-purple-600 text-white shadow-lg animate-bounce'
                    : 'text-purple-400 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  title="Voice Assistant - Advanced search with voice!"
                >
                  <Mic className={`w-5 h-5`} />

                  {showMicCallout && (
                    <>
                      <div className="absolute inset-0 rounded-xl bg-purple-400 animate-ping opacity-30"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
                    </>
                  )}
                </button>

                {showMicCallout && (
                  <div className="absolute bottom-full right-0 mb-3 transform animate-bounce">
                    <div className="bg-gradient-to-r from-[#9810fa] to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap relative">
                      🎙️ Try our Advanced Voice Search!
                      <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-gradient-to-br cursor-pointer from-[#9810fa] to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
                title="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">
            Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> for suggestions •
            <kbd className="px-2 py-1 bg-purple-100 rounded text-xs mx-1 text-purple-700">🎤 Mic</kbd> for voice search •
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to send
          </p>
        </div>
      </div>

      {/* Voice Assistant Modal */}
      {showVoiceAssistant && (
        <LiveKitModal onClose={() => setShowVoiceAssistant(false)} user={user} />
      )}
    </div>
  );
}