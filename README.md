
# CandidBandit AI-Powered Fraud Detection for Hiring

CandidBandit is a Chrome extension designed to help recruiters and hiring managers identify resume fraud, impersonation, and misrepresented candidate profiles in real time, right from your browser.

Built by recruiters, for hiring teams and independent leaders evaluating talent.

---

## Features

- Detect mismatches between resumes, GitHub, LinkedIn, and other public data
- Parse and analyze resumes using integrated APIs (Gmail, etc.)
- Flag anomalies using AI and pattern recognition
- Catch potential impersonators or ghost candidates
- Designed with privacy and on-device processing in mind

---

## Tech Stack

- TypeScript + React (Chrome Extension)
- MongoDB Atlas Metadata & candidate flag storage
- Amazon S3 Resume file storage (planned)
- Pinecone / Weaviate Optional vector DB for AI similarity (planned)
- Gmail API  Resume parsing from attachments (MVP)
- RChilli API Resume enrichment (planned)

---

## Getting Started

### Prerequisites

- Node.js v16+
- Yarn or npm
- Chrome browser

### Installation

    git clone https://github.com/TheMerovingian23/CandidBandit.git
    cd CandidBandit
    npm install

### Run Locally (Dev Mode)

    npm run dev

Then:
1. Open Chrome and go to chrome://extensions
2. Enable Developer Mode
3. Click "Load Unpacked" and select the /dist or /build folder

---

## APIs & Environment

Create a `.env` file in the root with keys like:

    GMAIL_API_KEY=your_gmail_key_here
    RCHILLI_USER_KEY=your_rchilli_user_key
    MONGODB_URI=your_mongo_connection
    S3_BUCKET_NAME=candidbandit-resumes

You will need access credentials from Gmail or RChilli to use resume parsing APIs.

---

---

## Roadmap

- [x] Chrome extension with manual resume flagging
- [x] Resume parsing (PDF/Word)
- [ ] Gmail API resume scan
- [ ] LinkedIn profile consistency check
- [ ] GitHub handle enrichment
- [ ] Vector similarity for fraud patterns
- [ ] Recruiter and non-recruiter mode

---

## Privacy & Compliance

We prioritize privacy:
- All processing is local unless explicitly shared
- No resume data is stored without user action
- We aim to remain CCPA and GDPR aligned from day one

---

## Contributing

We welcome contributions and ideas â€” especially if you've worked in recruiting, fraud detection, or AI!

    git checkout -b feature/your-feature
    git commit -m "Add your feature"
    git push origin feature/your-feature

Then open a Pull Request.

---

## Contact

Kofi Tolbert  
Founder, Young Tiger Galactic LLC  
Contact via LinkedIn: https://www.linkedin.com/in/kofitolbert
Kickstarter Launch Page: #coming-soon
Email:kt@youngtigergalactic.com 
Phone: 323-532-5602 
website: https://candidbandit.lovable.app/
---

## License

MIT License feel free to fork and extend with attribution.