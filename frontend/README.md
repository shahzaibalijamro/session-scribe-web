<div align="center">

# 🪶 Session Scribe

**AI-powered meeting transcription, summaries, and insights — in real time.**

Capture every conversation. Never take notes again.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![LiveKit](https://img.shields.io/badge/LiveKit-Realtime-FC6C34?logo=livekit&logoColor=white)](https://livekit.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[🌐 Website](https://sessionscribe.ai) · [📚 Docs](#-getting-started) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## ✨ What is Session Scribe?

**Session Scribe** is a modern SaaS frontend for an AI meeting assistant that joins, records, transcribes, and summarizes your calls — then turns the conversation into structured notes, action items, and shareable insights.

Built with **React 19** and **Vite 6**, it ships a snappy, polished UI on top of a real-time audio pipeline (LiveKit + Deepgram) and a serverless backend that talks to AWS S3, Firebase, and Stripe.

> 🎯 **Mission:** Free humans from the tyranny of note-taking — so they can be *present* in the conversation.

---

## 🚀 Features

### 🎙️ Real-Time Meeting Intelligence
- **Live transcription** powered by Deepgram with sub-second latency
- **AI summaries** auto-generated after every session
- **Live recorder** that joins meetings as a LiveKit participant
- **Speaker-aware transcripts** with timestamps and confidence scores

### 🧠 AI Insights & Chat
- **AI Insights dashboard** — surface trends, decisions, and action items across meetings
- **In-app Chat assistant** for asking questions about your past sessions
- **Smart tags & search** across all transcripts and recordings

### 📅 Productivity
- **Schedule meetings** with calendar integration
- **Audio Notes** — dictate on the go and get instant structured notes
- **Email digests** of meeting recaps
- **PDF exports** for transcripts and summaries (powered by `@react-pdf/renderer`)

### 👤 Account & Billing
- **Firebase Authentication** — email/password, password reset flows
- **Stripe-powered subscription plans** (free / pro / team tiers)
- **Profile management** with usage history
- **Protected routes** for authenticated app areas

### 🛠️ Admin & Content
- **Admin dashboard** with queries, feedback, and history
- **CMS for articles** — create, edit, and publish blog posts
- **In-app help & support** with feedback collection

---

## 🧰 Tech Stack

| Layer            | Technology                                          |
|------------------|-----------------------------------------------------|
| **Framework**    | React 19, React Router 7                            |
| **Build Tool**   | Vite 6 (`@vitejs/plugin-react`)                     |
| **Styling**      | Tailwind CSS 4 (`@tailwindcss/vite`)                |
| **Animation**    | Framer Motion                                       |
| **Icons**        | Lucide React, React Icons                           |
| **Charts**       | Recharts                                            |
| **Realtime**     | LiveKit (`@livekit/components-react`)               |
| **Transcription**| Deepgram API                                        |
| **Storage**      | AWS S3                                              |
| **Auth**         | Firebase                                            |
| **Payments**     | Stripe (`@stripe/stripe-js`, `@stripe/react-stripe-js`) |
| **PDF Export**   | `@react-pdf/renderer`, `html2pdf.js`, `file-saver`  |
| **HTTP**         | Axios                                               |
| **Toasts**       | React Toastify                                      |
| **Linting**      | ESLint 9 + `eslint-plugin-react-hooks`/`-refresh`   |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or pnpm / yarn)
- API credentials for the services you want to wire up (see [Environment Variables](#-environment-variables))

### 1️⃣ Install

```bash
git clone <your-repo-url>
cd session-scribe-frontend
npm install
```

### 2️⃣ Configure environment

Create a `.env` file in the project root (a template is included) and fill in the values you have. The app gracefully degrades — pages will load even if a service is unconfigured.

```env
# AWS S3 (for audio & transcript storage)
VITE_AWS_ACCESS_KEY_ID=...
VITE_AWS_SECRET_ACCESS_KEY=...
VITE_AWS_REGION=eu-north-1
VITE_AWS_S3_BUCKET=...

# Deepgram (real-time transcription)
VITE_APP_DEEPGRAM_API_KEY=...

# LiveKit (real-time audio room)
VITE_LIVEKIT_URL=wss://your-project.livekit.cloud

# Stripe (billing)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

> ⚠️ **Never commit real secrets.** Treat the keys in this repo as placeholders only — rotate anything that's been published and use a proper secret manager in production.

### 3️⃣ Run the dev server

```bash
npm run dev
```

Vite will print a local URL (default `http://localhost:5173`) with HMR enabled.

### 4️⃣ Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # locally preview the production build
```

The included `vercel.json` rewrites all paths to `index.html`, so the app is ready to deploy as a Vercel single-page app.

---

## 📜 Available Scripts

| Script          | Description                            |
|-----------------|----------------------------------------|
| `npm run dev`   | Start the Vite dev server with HMR     |
| `npm run build` | Create an optimized production build   |
| `npm run preview` | Preview the production build locally |
| `npm run lint`  | Run ESLint over the project            |

---

## 🗂️ Project Structure

```
session-scribe-frontend/
├── public/                  # Static assets (logos, favicon, auth hero)
├── src/
│   ├── api/                 # Axios client + API helpers
│   ├── assets/              # Images, fonts, in-repo media
│   ├── components/          # Reusable UI (Sidebar, Forms, PDF, etc.)
│   │   ├── context/         # React context providers
│   │   └── route/           # Route guards (ProtectedRoute, etc.)
│   ├── config/              # Firebase / third-party config
│   ├── pages/               # Top-level routed pages
│   │   └── admin/           # Admin-only views
│   ├── App.jsx              # Root component + route table
│   ├── Layout.jsx           # Authenticated app shell
│   ├── index.css            # Tailwind entry point
│   └── main.jsx             # React entry point
├── index.html               # HTML shell + SEO/Open Graph meta
├── vite.config.js           # Vite + React + Tailwind plugins
├── eslint.config.js         # Flat ESLint config
├── vercel.json              # SPA rewrite for Vercel
└── package.json
```

---

## 🧭 Route Map

| Path                         | Access   | Page                              |
|------------------------------|----------|-----------------------------------|
| `/`                          | Public   | Marketing site                    |
| `/learn-more`                | Public   | Product deep-dive                 |
| `/articles`, `/articles/:slug` | Public | Blog                              |
| `/signin`, `/signup`         | Public   | Auth                              |
| `/forgot-password`, `/reset-password/:token` | Public | Auth recovery      |
| `/home`                      | Auth     | Dashboard                         |
| `/schedule`                  | Auth     | Schedule a meeting                |
| `/recordings`, `/recordings/:id` | Auth | Recordings library + details     |
| `/summaries`, `/summaries/:id`   | Auth | AI-generated summaries + detail  |
| `/transcriptions`, `/transcriptions/:id` | Auth | Transcripts       |
| `/audionotes`, `/node-details/:id` | Auth | Audio notes        |
| `/recorder`, `/live-transcription` | Auth | Recording tools                |
| `/insights`                  | Auth     | AI insights dashboard             |
| `/chat`                      | Auth     | Chat assistant                    |
| `/emails`                    | Auth     | Email digests                     |
| `/feedback`, `/support`      | Auth     | Help & feedback                   |
| `/profile`, `/plan`          | Auth     | Account & billing                 |
| `/articles-admin/*`          | Auth     | Article CMS                       |
| `/extension-setup`           | Auth     | Browser extension setup           |
| `/admin`, `/queries`, `/feedbacks`, `/history` | Auth | Admin console |

---

## 🎨 Design System

- **Tailwind CSS 4** with the new `@tailwindcss/vite` plugin (no PostCSS config needed)
- **Framer Motion** for transitions and micro-interactions
- **Lucide** + **React Icons** for iconography
- **Custom branding** in `public/assets/`
- Responsive layouts throughout — mobile, tablet, and desktop are all first-class

---

## 🔐 Environment Variables

All variables must be prefixed with `VITE_` to be exposed to the client. The app expects:

| Variable                          | Purpose                          |
|-----------------------------------|----------------------------------|
| `VITE_AWS_ACCESS_KEY_ID`          | AWS S3 access key                |
| `VITE_AWS_SECRET_ACCESS_KEY`      | AWS S3 secret key                |
| `VITE_AWS_REGION`                 | AWS region (e.g. `eu-north-1`)   |
| `VITE_AWS_S3_BUCKET`              | S3 bucket name                   |
| `VITE_APP_DEEPGRAM_API_KEY`       | Deepgram transcription API key   |
| `VITE_LIVEKIT_URL`                | LiveKit WebSocket URL            |
| `VITE_STRIPE_PUBLISHABLE_KEY`     | Stripe publishable key           |

> 🔒 **Security note:** The bundled `.env` in this repository contains credentials. **Rotate them immediately** and remove the file from version control. Going forward, keep secrets out of git by adding `.env` to `.gitignore` and using a secret manager.

---

## 🚢 Deployment

This project is preconfigured for **Vercel**:

```bash
vercel
```

The `vercel.json` file rewrites all unmatched routes to `index.html`, which is what SPAs need. For other hosts (Netlify, Cloudflare Pages, AWS Amplify, etc.), configure the same single-page-app rewrite.

Set every `VITE_*` variable from [Environment Variables](#-environment-variables) in your hosting provider's dashboard before deploying.

---

## 🤝 Contributing

Contributions are what make the open-source community amazing. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

Please run `npm run lint` before submitting a PR.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 💬 Acknowledgments

- [LiveKit](https://livekit.io) for the realtime audio backbone
- [Deepgram](https://deepgram.com) for blazing-fast transcription
- [Tailwind CSS](https://tailwindcss.com) and the React team for the dev experience
- Everyone who's ever sat through a meeting thinking *"there has to be a better way"*

---

<div align="center">

**Built with ❤️ for anyone who's ever forgotten what was said in a meeting.**

⭐ Star this repo if Session Scribe saves you time!

</div>
