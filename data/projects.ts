import nebuloMd from "@/content/projects/nebulo.md";
import traveliteMd from "@/content/projects/travelite.md";
import slotwiseMd from "@/content/projects/slotwise.md";

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
    content: traveliteMd,
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
    content: nebuloMd,
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
    content: slotwiseMd,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
