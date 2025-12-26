import {
  faCss3,
  faDocker,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJenkins,
  faJs,
  faLinux,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FaBriefcase, FaDatabase, FaFire, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandFigma } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiences = [
  {
    title: "Software Engineering Internship",
    company: "GE Aerospace",
    location: "Remote",
    period: "December 2024",
    description:
      "Completed a Vue.js simulation, drafted technical requirements, and aligned solutions with business needs.",
  },
  {
    title: "UI/UX Designer",
    company: "IEEE CompSoc",
    location: "VIT Chennai",
    period: "May 2023 - May 2025",
    description:
      "Designed user interfaces for IEEE Comsoc's web platforms, improving user experience and engagement.",
  },
  {
    title: "Frontend Developer Intern",
    company: "STAATEN Tech",
    location: "Remote",
    period: "Sept 2025 - Nov 2025",
    description:
      "Developed user interfaces for STAATEN Tech's web applications, improving user experience and engagement.",
  },
];

export const projects = [
  {
    title: "Travelite",
    description:
      "AI-driven platform that customizes trip planning and suggests itineraries based on users' past travel preferences.",
    tech: ["Next.js", "Tailwind", "Firebase", "Gemini API", "Python"],
    image: "/travelite.png",
    github: "https://github.com/Akshansh029/travelite",
  },
  {
    title: "Nebulo",
    description:
      "Web application for analyzing GitHub codebases with AI-powered Q&A and automated README generation.",
    tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Gemini API"],
    image: "/nebulo.png",
    github: "https://github.com/Akshansh029/nebulo",
    live: "https://nebulo-zeta.vercel.app",
  },
  {
    title: "SlotWise",
    description:
      "Modern study scheduling and review app with spaced-repetition flashcards for effective learning.",
    tech: ["React", "Tailwind", "Socket.io", "Express.js", "Codemirror"],
    image: "/slotwise.png",
    github: "https://github.com/Akshansh029/study-scheduler",
    live: "https://slotwise-self.vercel.app",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C", "Python"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "Vite"],
  },
  {
    title: "Databases & ORMs",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
      "Prisma",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Bash Scripting",
    ],
  },
  {
    title: "Tools",
    skills: ["AWS", "Git", "Vercel", "Postman", "Arduino", "Figma", "Notion"],
  },
];
