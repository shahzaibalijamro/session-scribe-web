// import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/Home";
// import Layout from "./Layout";
// import RecordingsApp from "./pages/Recordings";
// import AudioAgenda from "./pages/AudioNotes";
// import AiInsights from "./pages/AiInsights";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import ForgotPassword from "./components/ForgotPassword";
// import ResetPassword from "./components/ResetPassword"; // 📌 import karo
// import FeedbackForm from "./pages/Feedback";
// import HelpSupportPage from "./pages/HelpSupport";
// import AdminDashboard from "./pages/Admin";
// import AudioNotesPage from "./pages/AudioNotes2";
// import ScribeSessionPage from "./pages/AudioNotes3";
// import Recorder from "./pages/Recorder";
// import LiveTranscriptionAndRecorder from "./pages/LiveTranscriptionAndRecorder";
// import ProtectedRouteWrapper from "./components/route/ProtectedRouteWrapper";

// function App() {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password/:token" element={<ResetPassword />} />

//       {/* Protected Routes */}
//       <Route
//         path="/*"
//         element={
//           <ProtectedRouteWrapper>
//             <Layout>
//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/recordings" element={<RecordingsApp />} />
//                 <Route path="/audio" element={<AudioNotesPage />} />
//                 <Route path="/node-details" element={<AudioAgenda />} />
//                 <Route
//                   path="/emails"
//                   element={<ScribeSessionPage />}
//                 />
//                 <Route path="/insights" element={<AiInsights />} />
//                 <Route path="/feedback" element={<FeedbackForm />} />
//                 <Route path="/support" element={<HelpSupportPage />} />
//                 <Route path="/admin" element={<AdminDashboard />} />
//                 <Route path="/recorder" element={<Recorder />} />
//                 <Route
//                   path="/live-recorder"
//                   element={<LiveTranscriptionAndRecorder />}
//                 />
//               </Routes>
//             </Layout>
//           </ProtectedRouteWrapper>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./Layout";
import RecordingsApp from "./pages/Recordings";
import AudioAgenda from "./pages/AudioNotes";
import AiInsights from "./pages/AiInsights";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import FeedbackForm from "./pages/Feedback";
import HelpSupportPage from "./pages/HelpSupport";
import AdminDashboard from "./pages/Admin";
import AudioNotesPage from "./pages/AudioNotes2";
import ScribeSessionPage from "./pages/AudioNotes3";
import Recorder from "./pages/Recorder";
import LiveTranscriptionAndRecorder from "./pages/LiveTranscriptionAndRecorder";
import ProtectedRouteWrapper from "./components/route/ProtectedRouteWrapper";
import RecordingDetailsPage from "./pages/singleRecording";
import Summaries from "./pages/Summaries";
import AudioAgendaPage from "./pages/NewAudioNotes";
import Home from "./pages/Website";
import Chat from "./pages/Chat";
import AdminQueries from "./pages/admin/Queries";
import AdminFeedback from "./pages/admin/Feedbacks";
import Transcriptions from "./pages/Transcriptions";
import SingleTranscription from "./pages/SingleTranscription";
import Profile from "./pages/Profile";
import History from "./pages/admin/History";
import LearnMore from "./pages/LearnMore";
import Plan from "./pages/Plans";
import FloatingIconsNav from "./components/SocialMedia";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import AdminArticles from "./pages/AdminArticles";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";
import ScheduleMeetingPage from "./pages/Schedule";
import ExtensionSetup from "./pages/Extension";

function App() {
  return (
    <>
    <FloatingIconsNav/>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/learn-more" element={<LearnMore showHeader={true}/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<ArticleDetail />} />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRouteWrapper>
            <Layout />
          </ProtectedRouteWrapper>
        }
      >
        <Route path="/home" element={<HomePage />} />
        <Route path="/schedule" element={<ScheduleMeetingPage />} />
        // Add these routes inside your admin-only section:
        <Route path="/articles-admin" element={<AdminArticles />} />
        <Route path="/articles-admin/new" element={<CreateArticle />} />
        <Route path="/articles-admin/edit/:id" element={<EditArticle />} />
        <Route path="/extension-setup" element={<ExtensionSetup />} />
        <Route path="/how-to-use" element={<LearnMore showHeader={false} />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/recordings" element={<RecordingsApp />} />
        <Route path="/recordings/:id" element={<RecordingDetailsPage />} />
        <Route path="/summaries" element={<Summaries />} />
        <Route path="/summaries/:id" element={<AudioAgendaPage />} />
        <Route path="/transcriptions" element={<Transcriptions />} />
        <Route path="/transcriptions/:id" element={<SingleTranscription />} />
        <Route path="/audionotes" element={<AudioNotesPage />} />
        <Route path="/node-details/:id" element={<AudioAgenda />} />
        <Route path="/emails" element={<ScribeSessionPage />} />
        <Route path="/recorder" element={<Recorder />} />
        <Route path="/insights" element={<AiInsights />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/support" element={<HelpSupportPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/queries" element={<AdminQueries />} />
        <Route path="/feedbacks" element={<AdminFeedback />} />
        <Route path="/live-transcription" element={<LiveTranscriptionAndRecorder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/history" element={<History />} />
        <Route path="/plan" element={<Plan />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;