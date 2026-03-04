# AI Resume Analyser

> Upload your CV, enter a job title & description, and get instant AI-powered ATS feedback with actionable improvement tips.

**Live Demo:** https://resumeanalyser-gamma.vercel.app/

---

## Features

- **PDF Resume Upload** — Drag & drop or browse to upload your resume
- **AI-Powered Analysis** — Powered by Claude Haiku 4.5 via Puter.js
- **ATS Score** — Know your Applicant Tracking System compatibility score
- **5-Dimension Feedback** — ATS Compatibility, Tone & Style, Content, Structure, Skills
- **Actionable Tips** — Specific strengths and areas to improve per category
- **Resume History** — All your past analyses stored and reviewable in a dashboard
- **Puter Authentication** — Secure sign-in with no custom backend needed
- **Cloud Storage** — Resumes and results stored privately per user via Puter FS & KV

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + React Router v7 | UI framework with SSR routing |
| Vite 6 | Build tool and dev server |
| TailwindCSS v4 | Styling |
| Zustand | Global state management |
| Puter.js | AI (Claude), file storage, KV store, auth |
| PDF.js | PDF to image conversion in-browser |
| TypeScript | Type safety |
| Docker | Containerised deployment |
| Vercel | Cloud hosting with SSR |

---

## Getting Started

**Prerequisites:** Node.js v20+, npm v10+, free [Puter account](https://puter.com)

```bash
# Clone the repository
git clone https://github.com/Anjana-Anju7/Resume-Analyser.git
cd Resume-Analyser

# Install dependencies
npm install

# Start the development server
npm run dev
```
---

## How It Works

```
User uploads PDF
      |
PDF converted to image in-browser (PDF.js)
      |
Image + Job Title + Job Description -> Claude Haiku 4.5 (via Puter.js)
      |
AI returns structured JSON feedback across 5 dimensions
      |
Results stored in Puter KV store & file saved in Puter FS
      |
Dashboard displays score, tips, and full resume history
```

---



