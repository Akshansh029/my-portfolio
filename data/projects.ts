export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live?: string;
  content: string; // Markdown content
}

export const projects: Project[] = [
  {
    id: "travelite",
    title: "Travelite",
    description:
      "AI-driven platform that customizes trip planning and suggests itineraries based on users' past travel preferences.",
    tech: ["Next.js", "Tailwind", "Firebase", "Gemini API", "Python"],
    image: "/travelite.png",
    github: "https://github.com/Akshansh029/travelite",
    content: `
# Travelite

## Overview

Travelite is an AI-driven platform that customizes trip planning and suggests itineraries based on users' past travel preferences. The platform leverages the power of Google's Gemini API to provide intelligent recommendations.

## Features

- **Personalized Itineraries**: AI-generated travel plans based on your preferences
- **Smart Recommendations**: Suggests destinations, activities, and accommodations
- **Travel History Analysis**: Learns from your past trips to improve suggestions
- **Real-time Updates**: Live information about weather, events, and availability

## Tech Stack

- **Frontend**: Next.js with Tailwind CSS for a modern, responsive UI
- **Backend**: Python with Flask for API endpoints
- **Database**: Firebase for real-time data synchronization
- **AI**: Google Gemini API for intelligent recommendations

## Screenshots

The application features a clean, intuitive interface designed for seamless trip planning.

## Getting Started

1. Clone the repository
2. Install dependencies with \`npm install\`
3. Set up your Firebase and Gemini API credentials
4. Run \`npm run dev\` to start the development server

## Future Improvements

- Integration with booking platforms
- Social features for sharing trips
- Offline mode for travel guides
    `,
  },
  {
    id: "nebulo",
    title: "Nebulo",
    description:
      "Web application for analyzing GitHub codebases with AI-powered Q&A and automated README generation.",
    tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Gemini API"],
    image: "/nebulo.png",
    github: "https://github.com/Akshansh029",
    live: "https://nebulo-zeta.vercel.app",
    content: `
# Nebulo

## Overview

Nebulo is a powerful web application designed for analyzing GitHub codebases. It uses AI to answer questions about code and can automatically generate comprehensive README files.

## Features

- **Code Analysis**: Deep analysis of repository structure and patterns
- **AI Q&A**: Ask questions about any codebase and get intelligent answers
- **README Generation**: Automatically create professional README files
- **Code Insights**: Visualize code metrics and dependencies

## Tech Stack

- **Frontend**: Next.js with TypeScript for type-safe development
- **API Layer**: tRPC for end-to-end typesafe APIs
- **Database**: PostgreSQL for reliable data storage
- **AI**: Google Gemini API for code understanding

## How It Works

1. Connect your GitHub repository
2. Nebulo analyzes the codebase structure
3. Ask questions or request README generation
4. Get AI-powered insights and documentation

## Use Cases

- **New Team Members**: Quickly understand unfamiliar codebases
- **Documentation**: Generate and maintain project documentation
- **Code Reviews**: Get AI assistance during code reviews
- **Learning**: Understand how open-source projects work

## Installation

\`\`\`bash
git clone https://github.com/Akshansh029/nebulo
cd nebulo
npm install
npm run dev
\`\`\`
    `,
  },
  {
    id: "slotwise",
    title: "SlotWise",
    description:
      "Modern study scheduling and review app with spaced-repetition flashcards for effective learning.",
    tech: ["React", "Tailwind", "Socket.io", "Express.js", "Codemirror"],
    image: "/slotwise.png",
    github: "https://github.com/Akshansh029/study-scheduler",
    live: "https://slotwise-self.vercel.app",
    content: `
# SlotWise

## Overview

SlotWise is a modern study scheduling and review application that uses spaced-repetition techniques to help users learn more effectively. It combines smart scheduling with interactive flashcards.

## Features

- **Spaced Repetition**: Scientifically-proven learning algorithm
- **Smart Flashcards**: Create and review flashcards with rich content
- **Study Scheduling**: Automated scheduling based on your learning progress
- **Real-time Collaboration**: Study with friends using Socket.io
- **Code Snippets**: CodeMirror integration for programming flashcards

## Tech Stack

- **Frontend**: React with Tailwind CSS
- **Backend**: Express.js with Socket.io
- **Editor**: CodeMirror for code editing
- **Real-time**: WebSocket connections for live updates

## Learning Algorithm

SlotWise uses a modified SM-2 algorithm for spaced repetition:

1. New cards are shown frequently
2. Cards you know well appear less often
3. Difficult cards are repeated more
4. Optimal intervals are calculated automatically

## Key Benefits

- **Improved Retention**: Remember more with less study time
- **Flexible Learning**: Study anywhere, anytime
- **Progress Tracking**: Visualize your learning journey
- **Community Features**: Share decks and study together

## Getting Started

\`\`\`bash
# Clone the repository
git clone https://github.com/Akshansh029/slotwise

# Install dependencies
npm install

# Start the server
npm run server

# Start the client
npm run dev
\`\`\`
    `,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
