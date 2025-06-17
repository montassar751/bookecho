# BookEcho - Audio Book Summaries Landing Page

A bilingual (French/Arabic) landing page for BookEcho, an audio book summary service.

## Features

- 🌍 Bilingual support (French/Arabic)
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and Tailwind CSS
- 🎨 Modern UI with smooth animations
- 📧 Email signup form
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd bookecho-landing
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── thank-you/         # Thank you page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── landing-page.tsx  # Main landing page
├── public/               # Static assets
└── ...config files
\`\`\`

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Vercel** - Deployment platform

## License

MIT License
