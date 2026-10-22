import React from 'react'
import { MessageCircle, CheckCircle, AlertCircle, Loader, Play, Users, Mic, Download, FileText, Volume2 } from "lucide-react";
import website from "/assets/Untitled design.png"
import dashboardImage from "/assets/image.png"
import emailPage from "/assets/emailpage.jpg"
import recorderpage from "/assets/recorderpage.jpg"
import recordingDone from "/assets/recordingDone.jpg"
import processingPage from "/assets/processingPage.jpg"
import recordingsPage from "/assets/recordingspage.jpg"
import summariesPage from "/assets/Summaries.jpg"

// const Instructions = () => {
//   return (
//     <div className="mx-auto p-6 space-y-8">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             How to Use Session Scribe
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Follow this step-by-step guide to get the most out of your AI meeting companion.
//             From your first recording to accessing insights, we'll walk you through everything you need to know.
//           </p>
//         </div>

//         {/* Step 1: Getting Started */}
//         <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               1
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Getting Started</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">Create Your Account</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Visit our homepage and click "Start For Free"</li>
//                 <li>• Register with your email or login if you already have an account</li>
//                 <li>• You'll get 100 free minutes to try all features</li>
//                 <li>• After login, you'll be redirected to your dashboard</li>
//               </ul>
//             </div>
//             <div className="rounded-lg p-2">
//               <div className="">
//                 <img src={website} alt="Website page" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 2: Dashboard Overview */}
//         <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               2
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Understanding Your Dashboard</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">Dashboard Features</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• <strong>Total Recordings:</strong> See your recording count</li>
//                 <li>• <strong>Usage Stats:</strong> Track your platform usage</li>
//                 <li>• <strong>Recent Meetings:</strong> View your last 10 meetings</li>
//                 <li>• <strong>Voice AI Assistant:</strong> Access your AI companion</li>
//                 <li>• <strong>Sidebar Navigation:</strong> Quick access to all features</li>
//               </ul>

//               <h4 className="font-medium text-gray-800 mb-3 mt-4">Sidebar Navigation</h4>
//               <div className="flex flex-wrap gap-2">
//                 {['Home', 'Recordings', 'Summaries', 'Transcriptions', 'Audio Notes', 'AI Insights', 'Feedback', 'Help'].map((item) => (
//                   <span key={item} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">{item}</span>
//                 ))}
//               </div>
//             </div>
//             <div className="p-2">
//               <div className="">
//                 <img src={dashboardImage} alt="📸 Screenshot: Dashboard overview with sidebar and main content highlighted" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 3: Starting a Recording */}
//         <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               3
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Starting Your First Recording</h3>
//           </div>

//           <div className="space-y-4">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-3">Step-by-Step Process</h4>
//                 <ol className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
//                     Click the <strong>"Record"</strong> button in the header
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
//                     Add email addresses of users you want to send the summary to
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
//                     You'll see the last emails you used in the suggestions
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
//                     Click <strong>"Proceed to Recorder"</strong>
//                   </li>
//                 </ol>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={emailPage} alt="📸 Screenshot: Email input page with `Proceed to Recorder` button" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 4: Recording Process */}
//         <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               4
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Recording Your Meeting</h3>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//               <div className="flex items-center mb-2">
//                 <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
//                 <h4 className="font-medium text-red-800">Important: Screen Sharing Setup</h4>
//               </div>
//               <p className="text-red-700 text-sm">
//                 When the permission modal appears, make sure to:
//               </p>
//               <ul className="text-red-700 text-sm mt-2 space-y-1">
//                 <li>• Select only the specific tab you want to record</li>
//                 <li>• <strong>Click "Also share this tab's audio" checkbox</strong></li>
//                 <li>• This ensures both screen and audio are captured</li>
//               </ul>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-3">Recording Steps</h4>
//                 <ol className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <Mic className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                     Click the <strong>"Record"</strong> button on the recorder page
//                   </li>
//                   <li className="flex items-start">
//                     <Volume2 className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                     Grant screen and audio permissions when prompted
//                   </li>
//                   <li className="flex items-start">
//                     <Play className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                     Recording starts with a visible timer
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                     Click <strong>"Stop"</strong> when your meeting ends
//                   </li>
//                 </ol>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={recorderpage} alt="recorderpage" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 5: Processing */}
//         <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               5
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Processing & AI Generation</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">What Happens Next</h4>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <Loader className="w-5 h-5 text-orange-600 mr-2 mt-0.5 animate-spin" />
//                   <div>
//                     <p className="font-medium text-gray-700">Upload Process</p>
//                     <p className="text-gray-600 text-sm">Your screen and audio recording is securely uploaded to our servers</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <FileText className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                   <div>
//                     <p className="font-medium text-gray-700">AI Analysis</p>
//                     <p className="text-gray-600 text-sm">Our AI generates summaries, transcripts, and extracts key insights</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4 p-3 bg-orange-100 rounded-lg">
//                 <p className="text-orange-800 text-sm">
//                   <strong>Processing Time:</strong> This may take several minutes depending on the length of your recording.
//                   You'll see a confirmation message when everything is ready.
//                   Please do not close the tab during processing.
//                 </p>
//               </div>
//             </div>
//             <div className="p-2">
//               <div className="">
//                 <img src={processingPage} alt="📸 Screenshot: Processing screen with progress indicator" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 6: Accessing Results */}
//         <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-6 border border-red-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               6
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Accessing Your Generated Content</h3>
//           </div>

//           <div className="space-y-4">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-3">Where to Find Your Content</h4>
//                 <div className="space-y-3">
//                   <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
//                     <FileText className="w-5 h-5 text-purple-600 mr-3" />
//                     <div>
//                       <p className="font-medium text-gray-700">Summaries</p>
//                       <p className="text-gray-600 text-xs">AI-generated meeting summaries</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
//                     <Volume2 className="w-5 h-5 text-purple-600 mr-3" />
//                     <div>
//                       <p className="font-medium text-gray-700">Transcriptions</p>
//                       <p className="text-gray-600 text-xs">Full text transcripts with timestamps</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
//                     <Play className="w-5 h-5 text-purple-600 mr-3" />
//                     <div>
//                       <p className="font-medium text-gray-700">Recordings</p>
//                       <p className="text-gray-600 text-xs">Original video/audio files</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={recordingDone} alt="📸 Screenshot: Sidebar navigation with different content types" />
//                 </div>
//               </div>
//             </div>

//             {/* <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
//                       <h4 className="font-medium text-purple-800 mb-2">Pro Tips for Best Results</h4>
//                       <ul className="text-purple-700 text-sm space-y-1">
//                         <li>• Use the "Chat with AI" feature to ask specific questions about your meetings</li>
//                         <li>• Check the "Audio Notes" section for key moments and highlights</li>
//                         <li>• Visit "AI Insights" for detailed analytics and meeting patterns</li>
//                         <li>• Use the download options to export content in various formats</li>
//                       </ul>
//                     </div> */}
//           </div>
//         </div>

//         {/* Step 7: Dashboard Overview */}
//         <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
// 7              
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Live transcribe your meetings</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">Features</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• <strong>Live Transcription:</strong> You can see what people are saying in real time</li>
//                 <li>• <strong>Live Translation:</strong> Translate the transcript to the language you prefer</li>
//                 <li>• <strong>Get summary and insights:</strong> Get summary and insights of the meeting</li>
//               </ul>

//               <h4 className="font-medium text-gray-800 mb-3 mt-4">Navigation</h4>
//               <div className="flex flex-wrap gap-2">
//                   <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">
//                     Click the live transcription button on the recorder page to navigate
//                   </span>
//               </div>
//             </div>
//             <div className="p-2">
//               <div className="">
//                 <img src={'/assets/livetranscriptionbutton.jpg'} alt="📸 Screenshot: Dashboard overview with sidebar and main content highlighted" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 8: Recording Process */}
//         <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               8
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">How to use Live Transcription?</h3>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//               <div className="flex items-center mb-2">
//                 <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
//                 <h4 className="font-medium text-red-800">Important: Screen Sharing Setup</h4>
//               </div>
//               <p className="text-red-700 text-sm">
//                 When the permission modal appears, make sure to:
//               </p>
//               <ul className="text-red-700 text-sm mt-2 space-y-1">
//                 <li>• Select only the specific tab you want to transcribe</li>
//                 <li>• <strong>Click "Also share this tab's audio" checkbox</strong></li>
//                 <li>• This ensures both screen and audio are captured</li>
//               </ul>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-3">Transcription Steps</h4>
//                 <ol className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <Mic className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                     Click the "Translate" button to see the various available languages
//                   </li>
//                   <li className="flex items-start">
//                     <Volume2 className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                     Choose the language you would like the transcription in
//                   </li>
//                   <li className="flex items-start">
//                     <Play className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                     Click the record button to start the recording
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
//                     Click <strong>"Stop"</strong> when your meeting ends
//                   </li>
//                 </ol>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={'/assets/livetranscription.jpg'} alt="recorderpage" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 9: Getting Started */}
//         <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               9
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Recordings Page</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">See all your recordings</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Navigate to the recordings page from the sidebar</li>
//                 <li>• You will find all your recordings there.</li>
//                 <li>• Click on any recording to expand and watch/hear the screen/audio recording.</li>
//               </ul>
//             </div>
//             <div className="rounded-lg p-2">
//               <div className="">
//                 <img src={recordingsPage} alt="recordingsPage" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 10: Dashboard Overview */}
//         <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               10
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Summaries Page</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">See all your summaries</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Navigate to the summaries page from the sidebar</li>
//                 <li>• You will find all your summaries there</li>
//                 <li>• Click on any summary to expand and see the full summary and extra insights.</li>
//               </ul>
//             </div>
//             <div className="p-2">
//               <div className="">
//                 <img src={summariesPage} alt="📸 Screenshot: Dashboard overview with sidebar and main content highlighted" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 11: Dashboard Overview */}
//         <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               11
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">See the full Summary</h3>
//           </div>

//           <div className="space-y-4">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <ol className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
//                     You can see the full summary of your meeting in this page
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
//                     Participants of the meeting will be shown below the summary
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
//                     Agenda of the meeting will be shown below the participants
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
//                     Minutes and next steps will be shown below the agenda
//                   </li>
//                 </ol>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={'/assets/singleSummary.jpg'} alt="📸 Screenshot: Email input page with `Proceed to Recorder` button" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 12: Dashboard Overview */}
//         <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               12
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Translate your summary</h3>
//           </div>

//           <div className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-3">Translating Steps</h4>
//                 <ol className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
//                     Click the <strong>"Translate"</strong> button on the summary page
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
//                     Choose the language you want to translate the summary to
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
//                     Wait for the translation to complete
//                   </li>
//                   <li className="flex">
//                     <span className="bg-green-600 text-white w-8 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
//                     Now you can switch between the original and translated summary using the toggle button
//                   </li>
//                 </ol>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={'/assets/translatedPage.jpg'} alt="recorderpage" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 13: Processing */}
//         <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               13
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Download your summary</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">Downloading steps</h4>
//               <ol className="space-y-3 text-gray-600">
//                 <li className="flex items-start">
//                   <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
//                   Toggle the summary to the language you want to download the summary in
//                 </li>
//                 <li className="flex items-start">
//                   <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
//                   Click the <strong>"Download"</strong> icon on the summary page
//                 </li>
//                 <li className="flex items-start">
//                   <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
//                   Wait for the downloading to complete
//                 </li>
//                 <li className="flex">
//                   <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
//                   Now you can see the document in your downloads folder
//                 </li>
//               </ol>
//             </div>
//             <div className="p-2">
//               <div className="">
//                 <img src={'/assets/downloadsummary.png'} alt="📸 Screenshot: Processing screen with progress indicator" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 14: Accessing Results */}
//         <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-6 border border-red-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               14
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Transcriptions Page</h3>
//           </div>

//           <div className="space-y-4">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-3">See All Transcriptions</h4>
//                 <div className="space-y-3">
//                   <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
//                     <div>
//                       <p className="font-medium text-gray-700">Latest Summary</p>
//                       <p className="text-gray-600 text-xs">Find the Latest Summary on the right hand side</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
//                     <div>
//                       <p className="font-medium text-gray-700">Delete Summary</p>
//                       <p className="text-gray-600 text-xs">Delete selected summary by clicking the trash icon</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
//                     <div>
//                       <p className="font-medium text-gray-700">View full Summary</p>
//                       <p className="text-gray-600 text-xs">Click view details to view the full summary</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={'/assets/transcriptionspage.jpg'} alt="📸 Screenshot: Sidebar navigation with different content types" />
//                 </div>
//               </div>
//             </div>

//             {/* <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
//                       <h4 className="font-medium text-purple-800 mb-2">Pro Tips for Best Results</h4>
//                       <ul className="text-purple-700 text-sm space-y-1">
//                         <li>• Use the "Chat with AI" feature to ask specific questions about your meetings</li>
//                         <li>• Check the "Audio Notes" section for key moments and highlights</li>
//                         <li>• Visit "AI Insights" for detailed analytics and meeting patterns</li>
//                         <li>• Use the download options to export content in various formats</li>
//                       </ul>
//                     </div> */}
//           </div>
//         </div>

//         {/* Step 15: Getting Started */}
//         <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               15
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Full Transcription</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">View the full transcription</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• You can view the full transcription here</li>
//                 <li>• You can delete the transcription by clicking the delete button.</li>
//                 <li>• You can download the transcription by clicking the download icon.</li>
//               </ul>
//             </div>
//             <div className="rounded-lg p-2">
//               <div className="">
//                 <img src={'/assets/singleTranscription.jpg'} alt="recordingsPage" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 16: Dashboard Overview */}
//         <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               16
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Audio Transcripts</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">Record/Upload audio</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• You can record audio here for transcription/summarization and extra insights.</li>
//                 <li>• You can also upload audio here, If you already have an audio that you want to get transcribed.</li>
//                 <li>• After the transcription is ready, you can navigate to view it by clicking the audio transcription card on the right side.</li>
//               </ul>
//             </div>
//             <div className="p-2">
//               <div className="">
//                 <img src={'/assets/audioTranscripts.jpg'} alt="📸 Screenshot: Dashboard overview with sidebar and main content highlighted" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 17: Dashboard Overview */}
//         <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100">
//           <div className="flex items-center mb-6">
//             <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               17
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">AI Insights</h3>
//           </div>

//           <div className="space-y-4">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <ol className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
//                     You can see the daily usage of the platform in this page
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-7 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
//                     You can see the types of meetings you have recorded in the last week in this page
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
//                     You can also see the history of the application in this page
//                   </li>
//                 </ol>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={'/assets/AIInsights.jpg'} alt="📸 Screenshot: Email input page with `Proceed to Recorder` button" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Step 18: Dashboard Overview */}
//         <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
//           <div className="flex items-center mb-4">
//             <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
//               18
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Feedback</h3>
//           </div>

//           <div className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-medium text-gray-800 mb-3">Provide your feedback</h4>
//                 <ol className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
//                     You can provide your feedback about the application in this page
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
//                     You can also report any bugs you find in the application
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
//                     You can also request any features you want to see in the application
//                   </li>
//                 </ol>
//               </div>
//               <div className="p-2">
//                 <div className="">
//                   <img src={'/assets/feedback.jpg'} alt="recorderpage" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tips Section */}
//         <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 border border-gray-200">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Tips for Better Results</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">Audio Quality</h4>
//               <ul className="space-y-2 text-gray-600 text-sm">
//                 <li>• Use a good microphone or headset</li>
//                 <li>• Ensure quiet environment</li>
//                 <li>• Speak clearly and at moderate pace</li>
//                 <li>• Avoid background noise when possible</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-medium text-gray-800 mb-3">Meeting Best Practices</h4>
//               <ul className="space-y-2 text-gray-600 text-sm">
//                 <li>• Start recording before the meeting begins</li>
//                 <li>• Introduce participants clearly</li>
//                 <li>• Speak one at a time for better transcription</li>
//                 <li>• End recording after all discussions conclude</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Instructions


export const Instructions = () => {
  return (
    <section className="mx-auto p-6 space-y-8" role="main">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            How to Use Session Scribe
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow this step-by-step guide to get the most out of your AI meeting companion.
            From your first recording to accessing insights, we'll walk you through everything you need to know.
          </p>
        </header>

        {/* Step 1: Getting Started */}
        <article className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 1">
              1
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Getting Started</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">Create Your Account</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Visit our homepage and click "Start For Free"</li>
                <li>• Register with your email or login if you already have an account</li>
                <li>• You'll get 100 free minutes to try all features</li>
                <li>• After login, you'll be redirected to your dashboard</li>
              </ul>
            </section>
            <figure className="rounded-lg p-2">
              <img src={website} alt="Session Scribe homepage showing the Start For Free button and registration process" />
            </figure>
          </div>
        </article>

        {/* Step 2: Dashboard Overview */}
        <article className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 2">
              2
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Understanding Your Dashboard</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">Dashboard Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Total Recordings:</strong> See your recording count</li>
                <li>• <strong>Usage Stats:</strong> Track your platform usage</li>
                <li>• <strong>Recent Meetings:</strong> View your last 10 meetings</li>
                <li>• <strong>Voice AI Assistant:</strong> Access your AI companion</li>
                <li>• <strong>Sidebar Navigation:</strong> Quick access to all features</li>
              </ul>

              <h3 className="font-medium text-gray-800 mb-3 mt-4">Sidebar Navigation</h3>
              <nav className="flex flex-wrap gap-2" aria-label="Dashboard navigation options">
                {['Home', 'Recordings', 'Summaries', 'Transcriptions', 'Audio Notes', 'AI Insights', 'Feedback', 'Help'].map((item) => (
                  <span key={item} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">{item}</span>
                ))}
              </nav>
            </section>
            <figure className="p-2">
              <img src={dashboardImage} alt="Session Scribe dashboard interface showing sidebar navigation, usage statistics, recent meetings, and main content area" />
            </figure>
          </div>
        </article>

        {/* Step 3: Starting a Recording */}
        <article className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 3">
              3
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Starting Your First Recording</h2>
          </header>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="font-medium text-gray-800 mb-3">Step-by-Step Process</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 3.1">1</span>
                    Click the <strong>"Record"</strong> button in the header
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 3.2">2</span>
                    Add email addresses of users you want to send the summary to
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 3.3">3</span>
                    You'll see the last emails you used in the suggestions
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 3.4">4</span>
                    Click <strong>"Proceed to Recorder"</strong>
                  </li>
                </ol>
              </section>
              <figure className="p-2">
                <img src={emailPage} alt="Email input page showing email address fields, suggestion list, and Proceed to Recorder button" />
              </figure>
            </div>
          </div>
        </article>

        {/* Step 4: Recording Process */}
        <article className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 4">
              4
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Recording Your Meeting</h2>
          </header>

          <div className="space-y-6">
            <aside className="bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
              <header className="flex items-center mb-2">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2" aria-hidden="true" />
                <h3 className="font-medium text-red-800">Important: Screen Sharing Setup</h3>
              </header>
              <p className="text-red-700 text-sm">
                When the permission modal appears, make sure to:
              </p>
              <ul className="text-red-700 text-sm mt-2 space-y-1">
                <li>• Select only the specific tab you want to record</li>
                <li>• <strong>Click "Also share this tab's audio" checkbox</strong></li>
                <li>• This ensures both screen and audio are captured</li>
              </ul>
            </aside>

            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="font-medium text-gray-800 mb-3">Recording Steps</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Mic className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                    Click the <strong>"Record"</strong> button on the recorder page
                  </li>
                  <li className="flex items-start">
                    <Volume2 className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                    Grant screen and audio permissions when prompted
                  </li>
                  <li className="flex items-start">
                    <Play className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                    Recording starts with a visible timer
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                    Click <strong>"Stop"</strong> when your meeting ends
                  </li>
                </ol>
              </section>
              <figure className="p-2">
                <img src={recorderpage} alt="Recording interface showing record button, timer, and stop controls with screen sharing permissions" />
              </figure>
            </div>
          </div>
        </article>

        {/* Step 5: Processing */}
        <article className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 5">
              5
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Processing & AI Generation</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">What Happens Next</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Loader className="w-5 h-5 text-orange-600 mr-2 mt-0.5 animate-spin" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-gray-700">Upload Process</h4>
                    <p className="text-gray-600 text-sm">Your screen and audio recording is securely uploaded to our servers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-gray-700">AI Analysis</h4>
                    <p className="text-gray-600 text-sm">Our AI generates summaries, transcripts, and extracts key insights</p>
                  </div>
                </div>
              </div>

              <aside className="mt-4 p-3 bg-orange-100 rounded-lg" role="note">
                <p className="text-orange-800 text-sm">
                  <strong>Processing Time:</strong> This may take several minutes depending on the length of your recording.
                  You'll see a confirmation message when everything is ready.
                  Please do not close the tab during processing.
                </p>
              </aside>
            </section>
            <figure className="p-2">
              <img src={processingPage} alt="Processing screen showing upload progress indicator and AI analysis status" />
            </figure>
          </div>
        </article>

        {/* Step 6: Accessing Results */}
        <article className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-6 border border-red-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 6">
              6
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Accessing Your Generated Content</h2>
          </header>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="font-medium text-gray-800 mb-3">Where to Find Your Content</h3>
                <nav className="space-y-3" aria-label="Content types navigation">
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <FileText className="w-5 h-5 text-purple-600 mr-3" aria-hidden="true" />
                    <div>
                      <h4 className="font-medium text-gray-700">Summaries</h4>
                      <p className="text-gray-600 text-xs">AI-generated meeting summaries</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <Volume2 className="w-5 h-5 text-purple-600 mr-3" aria-hidden="true" />
                    <div>
                      <h4 className="font-medium text-gray-700">Transcriptions</h4>
                      <p className="text-gray-600 text-xs">Full text transcripts with timestamps</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <Play className="w-5 h-5 text-purple-600 mr-3" aria-hidden="true" />
                    <div>
                      <h4 className="font-medium text-gray-700">Recordings</h4>
                      <p className="text-gray-600 text-xs">Original video/audio files</p>
                    </div>
                  </div>
                </nav>
              </section>
              <figure className="p-2">
                <img src={recordingDone} alt="Sidebar navigation showing different content types: summaries, transcriptions, and recordings" />
              </figure>
            </div>
          </div>
        </article>

        {/* Step 7: Live Transcription */}
        <article className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 7">
              7              
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Live transcribe your meetings</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Live Transcription:</strong> You can see what people are saying in real time</li>
                <li>• <strong>Live Translation:</strong> Translate the transcript to the language you prefer</li>
                <li>• <strong>Get summary and insights:</strong> Get summary and insights of the meeting</li>
              </ul>

              <h3 className="font-medium text-gray-800 mb-3 mt-4">Navigation</h3>
              <nav className="flex flex-wrap gap-2" aria-label="Live transcription navigation">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">
                    Click the live transcription button on the recorder page to navigate
                  </span>
              </nav>
            </section>
            <figure className="p-2">
              <img src={'/assets/livetranscriptionbutton.jpg'} alt="Live transcription button highlighted on the recorder page interface" />
            </figure>
          </div>
        </article>

        {/* Step 8: Using Live Transcription */}
        <article className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 8">
              8
            </div>
            <h2 className="text-xl font-semibold text-gray-900">How to use Live Transcription?</h2>
          </header>

          <div className="space-y-6">
            <aside className="bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
              <header className="flex items-center mb-2">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2" aria-hidden="true" />
                <h3 className="font-medium text-red-800">Important: Screen Sharing Setup</h3>
              </header>
              <p className="text-red-700 text-sm">
                When the permission modal appears, make sure to:
              </p>
              <ul className="text-red-700 text-sm mt-2 space-y-1">
                <li>• Select only the specific tab you want to transcribe</li>
                <li>• <strong>Click "Also share this tab's audio" checkbox</strong></li>
                <li>• This ensures both screen and audio are captured</li>
              </ul>
            </aside>

            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="font-medium text-gray-800 mb-3">Transcription Steps</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Mic className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                    Click the "Translate" button to see the various available languages
                  </li>
                  <li className="flex items-start">
                    <Volume2 className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                    Choose the language you would like the transcription in
                  </li>
                  <li className="flex items-start">
                    <Play className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                    Click the record button to start the recording
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5" aria-hidden="true" />
                    Click <strong>"Stop"</strong> when your meeting ends
                  </li>
                </ol>
              </section>
              <figure className="p-2">
                <img src={'/assets/livetranscription.jpg'} alt="Live transcription interface showing language selection dropdown and recording controls" />
              </figure>
            </div>
          </div>
        </article>

        {/* Step 9: Recordings Page */}
        <article className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 9">
              9
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Recordings Page</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">See all your recordings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Navigate to the recordings page from the sidebar</li>
                <li>• You will find all your recordings there.</li>
                <li>• Click on any recording to expand and watch/hear the screen/audio recording.</li>
              </ul>
            </section>
            <figure className="rounded-lg p-2">
              <img src={recordingsPage} alt="Recordings page showing list of all recorded meetings with playback options" />
            </figure>
          </div>
        </article>

        {/* Step 10: Summaries Page */}
        <article className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 10">
              10
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Summaries Page</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">See all your summaries</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Navigate to the summaries page from the sidebar</li>
                <li>• You will find all your summaries there</li>
                <li>• Click on any summary to expand and see the full summary and extra insights.</li>
              </ul>
            </section>
            <figure className="p-2">
              <img src={summariesPage} alt="Summaries page displaying all meeting summaries with expandable details and insights" />
            </figure>
          </div>
        </article>

        {/* Step 11: Full Summary */}
        <article className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 11">
              11
            </div>
            <h2 className="text-xl font-semibold text-gray-900">See the full Summary</h2>
          </header>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 11.1">1</span>
                    You can see the full summary of your meeting in this page
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 11.2">2</span>
                    Participants of the meeting will be shown below the summary
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 11.3">3</span>
                    Agenda of the meeting will be shown below the participants
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 11.4">4</span>
                    Minutes and next steps will be shown below the agenda
                  </li>
                </ol>
              </section>
              <figure className="p-2">
                <img src={'/assets/singleSummary.jpg'} alt="Full summary page showing meeting summary, participants list, agenda items, and action items" />
              </figure>
            </div>
          </div>
        </article>

        {/* Step 12: Translate Summary */}
        <article className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 12">
              12
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Translate your summary</h2>
          </header>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="font-medium text-gray-800 mb-3">Translating Steps</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 12.1">1</span>
                    Click the <strong>"Translate"</strong> button on the summary page
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 12.2">2</span>
                    Choose the language you want to translate the summary to
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 12.3">3</span>
                    Wait for the translation to complete
                  </li>
                  <li className="flex">
                    <span className="bg-green-600 text-white w-8 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 12.4">4</span>
                    Now you can switch between the original and translated summary using the toggle button
                  </li>
                </ol>
              </section>
              <figure className="p-2">
                <img src={'/assets/translatedPage.jpg'} alt="Summary translation interface showing language selection and toggle between original and translated versions" />
              </figure>
            </div>
          </div>
        </article>

        {/* Step 13: Download Summary */}
        <article className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 13">
              13
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Download your summary</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">Downloading steps</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 13.1">1</span>
                  Toggle the summary to the language you want to download the summary in
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 13.2">2</span>
                  Click the <strong>"Download"</strong> icon on the summary page
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 13.3">3</span>
                  Wait for the downloading to complete
                </li>
                <li className="flex">
                  <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 13.4">4</span>
                  Now you can see the document in your downloads folder
                </li>
              </ol>
            </section>
            <figure className="p-2">
              <img src={'/assets/downloadsummary.png'} alt="Summary download interface showing download button and progress indicator" />
            </figure>
          </div>
        </article>

        {/* Step 14: Transcriptions Page */}
        <article className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-6 border border-red-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 14">
              14
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Transcriptions Page</h2>
          </header>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="font-medium text-gray-800 mb-3">See All Transcriptions</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Feature 1">1</span>
                    <div>
                      <h4 className="font-medium text-gray-700">Latest Summary</h4>
                      <p className="text-gray-600 text-xs">Find the Latest Summary on the right hand side</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Feature 2">2</span>
                    <div>
                      <h4 className="font-medium text-gray-700">Delete Summary</h4>
                      <p className="text-gray-600 text-xs">Delete selected summary by clicking the trash icon</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Feature 3">3</span>
                    <div>
                      <h4 className="font-medium text-gray-700">View full Summary</h4>
                      <p className="text-gray-600 text-xs">Click view details to view the full summary</p>
                    </div>
                  </div>
                </div>
              </section>
              <figure className="p-2">
                <img src={'/assets/transcriptionspage.jpg'} alt="Transcriptions page showing list of transcriptions with latest summary panel and action buttons" />
              </figure>
            </div>
          </div>
        </article>

        {/* Step 15: Full Transcription */}
        <article className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 15">
              15
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Full Transcription</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">View the full transcription</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• You can view the full transcription here</li>
                <li>• You can delete the transcription by clicking the delete button.</li>
                <li>• You can download the transcription by clicking the download icon.</li>
              </ul>
            </section>
            <figure className="rounded-lg p-2">
              <img src={'/assets/singleTranscription.jpg'} alt="Full transcription view showing complete text with delete and download options" />
            </figure>
          </div>
        </article>

        {/* Step 16: Audio Transcripts */}
        <article className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 16">
              16
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Audio Transcripts</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">Record/Upload audio</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• You can record audio here for transcription/summarization and extra insights.</li>
                <li>• You can also upload audio here, If you already have an audio that you want to get transcribed.</li>
                <li>• After the transcription is ready, you can navigate to view it by clicking the audio transcription card on the right side.</li>
              </ul>
            </section>
            <figure className="p-2">
              <img src={'/assets/audioTranscripts.jpg'} alt="Audio transcripts interface showing record and upload options with transcription cards" />
            </figure>
          </div>
        </article>

        {/* Step 17: AI Insights */}
        <article className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100">
          <header className="flex items-center mb-6">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 17">
              17
            </div>
            <h2 className="text-xl font-semibold text-gray-900">AI Insights</h2>
          </header>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 17.1">1</span>
                    You can see the daily usage of the platform in this page
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-7 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 17.2">2</span>
                    You can see the types of meetings you have recorded in the last week in this page
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 17.3">3</span>
                    You can also see the history of the application in this page
                  </li>
                </ol>
              </section>
              <figure className="p-2">
                <img src={'/assets/AIInsights.jpg'} alt="AI Insights dashboard showing daily usage statistics, meeting types analysis, and application history" />
              </figure>
            </div>
          </div>
        </article>

        {/* Step 18: Feedback */}
        <article className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
          <header className="flex items-center mb-4">
            <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3" aria-label="Step 18">
              18
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Feedback</h2>
          </header>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="font-medium text-gray-800 mb-3">Provide your feedback</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 18.1">1</span>
                    You can provide your feedback about the application in this page
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 18.2">2</span>
                    You can also report any bugs you find in the application
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5" aria-label="Step 18.3">3</span>
                    You can also request any features you want to see in the application
                  </li>
                </ol>
              </section>
              <figure className="p-2">
                <img src={'/assets/feedback.jpg'} alt="Feedback form interface for submitting feedback, bug reports, and feature requests" />
              </figure>
            </div>
          </div>
        </article>

        {/* Tips Section */}
        <aside className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">💡 Tips for Better Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h3 className="font-medium text-gray-800 mb-3">Audio Quality</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Use a good microphone or headset</li>
                <li>• Ensure quiet environment</li>
                <li>• Speak clearly and at moderate pace</li>
                <li>• Avoid background noise when possible</li>
              </ul>
            </section>
            <section>
              <h3 className="font-medium text-gray-800 mb-3">Meeting Best Practices</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Start recording before the meeting begins</li>
                <li>• Introduce participants clearly</li>
                <li>• Speak one at a time for better transcription</li>
                <li>• End recording after all discussions conclude</li>
              </ul>
            </section>
          </div>
        </aside>
      </section>
  )
}