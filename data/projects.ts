import nebuloMd from "@/content/projects/nebulo.md";
import traveliteMd from "@/content/projects/travelite.md";
import slotwiseMd from "@/content/projects/slotwise.md";
import projectManagementMd from "@/content/projects/project-management.md";
import terraformAwsInfraMd from "@/content/projects/terraformAwsInfra.md";

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
    id: "project-management",
    title: "Project Management System",
    description:
      "A full-stack, production-ready task management platform built for teams",
    tech: ["Next.js", "Axios", "Spring Boot", "Spring Data JPA", "PostgreSQL"],
    image: "/project-management.png",
    github: "https://github.com/Akshansh029/Task-Management-Platform-Frontend",
    live: "https://task-management-platform-frontend-five.vercel.app",
    content: projectManagementMd,
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
    tech: ["Next.js", "Tailwind", "TypeScript", "tRPC", "PostgreSQL"],
    image: "/slotwise.png",
    github: "https://github.com/Akshansh029/study-scheduler",
    live: "https://slotwise-self.vercel.app",
    content: slotwiseMd,
  },
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
    id: "terraform-aws-infra",
    title: "2-Tier-AWS-Infrastructure-Terraform",
    description:
      "Robust 2-tier AWS infrastructure using Terraform as Infrastructure as Code (IaC)",
    tech: ["Terraform", "AWS", "Bash"],
    image: "/project-images/terraform-aws-infra/2-tier-infra.drawio.png",
    github: "https://github.com/Akshansh029/2-Tier-AWS-Infrastructure-Terraform",
    content: terraformAwsInfraMd,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
