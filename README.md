# Session Scribe | AI Meeting Transcription & Summaries

**An AI-powered meeting assistant that turns conversations into searchable transcripts, structured summaries, and actionable insights.**

Session Scribe is a full-stack SaaS application built to simplify meeting documentation. It combines real-time speech transcription, AI-generated summaries, intelligent insights, and meeting management tools in one platform.

The application features a React frontend, a Node.js and Express backend, MongoDB data storage, Deepgram-powered transcription, AWS S3 media storage, Firebase authentication, and Stripe subscription billing.

## Live Demo

**[Explore Session Scribe](https://session-scribe-frontend.vercel.app/)**

### Project Preview

[![Session Scribe Preview](https://res.cloudinary.com/dacvedc6z/image/upload/v1780836539/Screenshot_2026-06-07_174454_fqxyrd.png)](https://res.cloudinary.com/dacvedc6z/video/upload/v1788392837/session-scribe_moyxmz.mp4)

*Click the preview image to watch the project demo.*

## Features

### AI-Powered Meeting Intelligence
- **Real-Time Transcription:** Transcribe live conversations using Deepgram with sub-second latency.
- **AI Meeting Summaries:** Convert lengthy discussions into structured summaries and export them as PDFs.
- **AI Insights Dashboard:** Explore and search historical meeting data.
- **Conversational Assistant:** Query past sessions through an in-app chat assistant.
- **Audio Notes:** Dictate ideas and turn recordings into structured notes.

### Meeting Management
- **Meeting Scheduling:** Organize meetings with calendar integration.
- **Email Digests:** Receive recap emails for past meetings.
- **Session History:** Access previous sessions, transcripts, and summaries.

### Authentication & Billing
- **Firebase Authentication:** Email/password login and password reset.
- **Subscription Management:** Stripe-powered plans and a customer billing portal.
- **Protected Routes:** Restrict access to authenticated users.
- **Role-Based Access Control:** Support role-specific access across the application.

### Content Management & Administration
- **Article CMS:** Create, edit, and publish articles.
- **Admin Dashboard:** Manage queries, feedback, and historical records.

### User Experience
- Responsive layouts for mobile, tablet, and desktop.
- Modern interface built with Tailwind CSS.
- Smooth animations and transitions powered by Framer Motion.
- Interactive data visualizations using Recharts.

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| Vite 6 | Development server and build tooling |
| Tailwind CSS 4 | Utility-first styling |
| React Router 7 | Client-side routing |
| Framer Motion | UI animations |
| Recharts | Data visualization |
| Axios | HTTP requests |
| Lucide React & React Icons | Iconography |
| React Toastify | Toast notifications |
| @react-pdf/renderer | PDF generation |
| ESLint 9 | Code quality and linting |

### Backend & Database
| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express | Backend API and request handling |
| MongoDB | Application data storage |

### External Services & Integrations
| Technology | Purpose |
|---|---|
| Deepgram | Speech recognition and real-time transcription |
| AWS S3 | Audio and media storage |
| Firebase | Authentication |
| Stripe | Subscription billing and customer portal |

## Key Technical Challenges

Building Session Scribe involved integrating multiple services into a single application while maintaining a consistent user experience.

- **Real-Time Audio Processing:** Coordinating live audio capture and Deepgram transcription to deliver responsive transcripts.
- **Long Recording Sessions:** Handling audio recording and chunked media uploads to AWS S3.
- **Flexible AI Summarization:** Designing a summary workflow that accommodates different meeting types and lengths.
- **Authentication & Application State:** Integrating Firebase authentication with protected routes and session state across a multi-route React application.
- **PDF Generation:** Rendering large transcripts and structured summaries into readable, well-formatted PDF documents.
- **Third-Party Integrations:** Connecting authentication, transcription, storage, billing, and AI capabilities across the application.

## What I Learned

Developing Session Scribe strengthened my understanding of full-stack application development and production-oriented SaaS architecture.

Key takeaways include:

- Integrating real-time transcription services and audio processing workflows.
- Working with WebRTC and audio infrastructure concepts.
- Connecting multiple third-party APIs within a cohesive application.
- Implementing subscription billing and customer portal flows with Stripe.
- Building multi-route applications with authentication and role-based access control.
- Developing accessible, responsive SaaS interfaces with Tailwind CSS and Framer Motion.
- Generating polished PDF documents from dynamic application data.
- Structuring administrative dashboards and content management workflows.

## Application Overview

Session Scribe brings several capabilities together in one application:

1. **Capture:** Record or dictate conversations and notes.
2. **Transcribe:** Convert speech into text using Deepgram.
3. **Summarize:** Generate structured meeting summaries with AI.
4. **Organize:** Store and revisit sessions, transcripts, and insights.
5. **Manage:** Schedule meetings, manage subscriptions, and access administrative tools.

## Links

- **Live Application:** [session-scribe-frontend.vercel.app](https://session-scribe-frontend.vercel.app/)
- **Demo Video:** [Watch Session Scribe in action](https://res.cloudinary.com/dacvedc6z/video/upload/v1788392837/session-scribe_moyxmz.mp4)

---

**Session Scribe** demonstrates the integration of modern frontend and backend technologies with AI capabilities, real-time transcription, cloud storage, authentication, and subscription-based billing in a full-stack SaaS application.
