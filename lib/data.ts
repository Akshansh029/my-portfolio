import React from "react";
import { FaBriefcase, FaReact } from "react-icons/fa";
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

export const experiencesData = [
  {
    title: "UI/UX Designer at IEEE CompSoc",
    location: "VIT Chennai",
    description:
      "Designed and developed user interfaces for IEEE Comsoc's web platforms, improving user experience and engagement.",
    icon: React.createElement(TbBrandFigma),
    date: "May 2023 - May 2025",
  },
  {
    title: "Completed Web Development Bootcamp",
    location: "Online",
    description:
      "Graduated from an intensive program focused on full-stack web development, mastering technologies like React and Node.js.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023",
  },
  {
    title: "Software Engineering Internship",
    location: "Remote",
    description:
      "Completed a Vue.js simulation, drafted technical requirements, and aligned solutions with business needs at GE Aerospace.",
    icon: React.createElement(FaBriefcase),
    date: "December 2024",
  },
  {
    title: "Ongoing Web Development Projects",
    location: "Various Locations",
    description:
      "Currently working on multiple projects, enhancing skills in Next.js, SQL databases, and API integrations while exploring DevOps.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
];

export const projectsData = [
  {
    title: "Travelite",
    description:
      "Travelite is an AI-driven platform that customizes trip planning and suggests new itineraries based on users' past travel preferences.",
    tags: ["Next.js", "Tailwind", "Firebase", "Gemini API", "Python"],
    imageUrl: "/travelite.png",
    width: 500,
    height: 300,
    link: "https://github.com/Akshansh029/Travelite",
  },
  {
    title: "Nebulo",
    description:
      "Nebulo is a web application designed to analyze GitHub codebases. It provides repository analysis, AI-powered question answering, and automated README generation.",
    tags: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Gemini API"],
    imageUrl: "/nebulo.png",
    width: 500,
    height: 300,
    link: "https://github.com/Akshansh029/nebulo",
  },
  {
    title: "SlotWise",
    description:
      "SlotWise is a modern study scheduling and review application that helps students plan, track, and review their study sessions with spaced-repetition flashcards.",
    tags: ["React", "Tailwind", "Socket.io", "Express.js", "Codemirror"],
    imageUrl: "/slotwise.png",
    width: 500,
    height: 300,
    link: "https://github.com/Akshansh029/study-scheduler",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "C",
  "Linux",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Vite",
  "Tailwind",
  "Git",
  "MongoDB",
  "Firebase",
  "MySQL",
  "PostgreSQL",
  "Socket.io",
  "Prisma",
  "Docker",
  "Jenkins",
  "GitHub Actions",
  "Vercel",
  "Framer",
  "Figma",
] as const;
