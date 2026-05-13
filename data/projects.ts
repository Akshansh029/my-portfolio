import nebuloMd from "@/content/projects/nebulo.md";
import traveliteMd from "@/content/projects/travelite.md";
import slotwiseMd from "@/content/projects/slotwise.md";
import projectManagementMd from "@/content/projects/project-management.md";
import terraformAwsInfraMd from "@/content/projects/terraform-aws-infra.md";
import k8sChatAppMd from "@/content/projects/k8s-chat-app.md";
import k8sVotingAppMd from "@/content/projects/k8s-voting-app.md";
import typeflowMd from "@/content/projects/typeflow.md";
import codeChimeMd from "@/content/projects/codechime.md";
import timeCapsuleMd from "@/content/projects/timecapsule.md";

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
    id: "time-capsule",
    title: "Time Capsule",
    description:
      "Time Capsule is a meaningful web application designed to preserve memories and deliver them to your future self or loved ones",
    tech: ["Next.js", "Axios", "Spring Boot", "Spring Data JPA", "PostgreSQL"],
    image: "/project-images/timecapsule/dashboard.png",
    github: "https://github.com/Akshansh029/time-capsule",
    live: "https://timecapsule.akshanshsingh.com",
    content: timeCapsuleMd,
  },
  {
    id: "k8s-voting-app",
    title: "Kubernetes GitOps Voting Application with ArgoCD",
    description:
      "Microservices-based voting application deployed on Kubernetes using ArgoCD for GitOps-based continuous delivery.",
    tech: ["Kubernetes", "Kind", "ArgoCD", "Docker", "AWS", "Ubuntu"],
    image: "/project-images/k8s-voting-app/architecture_diag.png",
    github: "https://github.com/Akshansh029/k8s-kind-voting-app",
    content: k8sVotingAppMd,
  },
  {
    id: "terraform-aws-infra",
    title: "2-Tier-AWS-Infrastructure-Terraform",
    description:
      "Robust 2-tier AWS infrastructure using Terraform as Infrastructure as Code (IaC)",
    tech: ["Terraform", "AWS", "Bash"],
    image: "/project-images/terraform-aws-infra/2-tier-infra.drawio.png",
    github:
      "https://github.com/Akshansh029/2-Tier-AWS-Infrastructure-Terraform",
    content: terraformAwsInfraMd,
  },
  {
    id: "project-management",
    title: "Project Management System",
    description:
      "A full-stack, production-ready task management platform built for teams",
    tech: ["Next.js", "Axios", "Spring Boot", "Spring Data JPA", "PostgreSQL"],
    image: "/project-management.png",
    github: "https://github.com/Akshansh029/Task-Management-Platform-Frontend",
    live: "https://projectmanagement.akshanshsingh.com",
    content: projectManagementMd,
  },
  {
    id: "k8s-chat-app",
    title: "Full Stack Chat Application with Kubernetes Deployment",
    description:
      "Real-time chat application deployed on Kubernetes using React.js frontend, Node.js backend, and MongoDB",
    tech: ["React.js", "Node.js", "MongoDB", "Kubernetes", "Docker"],
    image: "/project-images/k8s-chat-app/Chat-app.png",
    github: "https://github.com/Akshansh029/Full-stack-chat-app-K8s",
    content: k8sChatAppMd,
  },
  {
    id: "slotwise",
    title: "SlotWise",
    description:
      "Modern study scheduling and review app with spaced-repetition flashcards for effective learning",
    tech: ["Next.js", "Tailwind", "TypeScript", "tRPC", "PostgreSQL"],
    image: "/slotwise.png",
    github: "https://github.com/Akshansh029/study-scheduler",
    live: "https://slotwise.akshanshsingh.com",
    content: slotwiseMd,
  },
  {
    id: "codechime",
    title: "CodeChime",
    description:
      "A real-time, collaborative code editor where code will be synced across all connected users",
    tech: ["React.js", "Socket.io", "Express.js", "CodeMirror"],
    image: "/project-images/codechime/Editor_page.png",
    github: "https://github.com/Akshansh029/realtime-code-editor",
    live: "https://codechime.akshanshsingh.com",
    content: codeChimeMd,
  },
  {
    id: "typeflow",
    title: "Typeflow",
    description:
      "A sleek, feature-rich typing test application built with Next.js and TypeScript, designed to help users measure and improve their typing speed and accuracy.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "NextAuth"],
    image: "/project-images/typeflow/Homescreen.png",
    github: "https://github.com/Akshansh029/typeflow",
    live: "https://typeflow.akshanshsingh.com",
    content: typeflowMd,
  },
  {
    id: "travelite",
    title: "Travelite",
    description:
      "AI-driven platform that customizes trip planning and suggests itineraries based on user's past travel preferences",
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
    image: "/project-images/nebulo/dashboard.png",
    github: "https://github.com/Akshansh029",
    live: "https://nebulo.akshanshsingh.com",
    content: nebuloMd,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
