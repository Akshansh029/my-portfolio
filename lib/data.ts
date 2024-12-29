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
    title: "Software Engineering Internship",
    location: "Remote",
    description:
      "Completed a Vue.js simulation, drafted technical requirements, and aligned solutions with business needs at GE Aerospace.",
    icon: React.createElement(FaBriefcase),
    date: "December 2024",
  },
  {
    title: "UI/UX Designer at IEEE CompSoc",
    location: "VIT Chennai",
    description:
      "Designed and developed user interfaces for IEEE Comsoc's web platforms, improving user experience and engagement.",
    icon: React.createElement(TbBrandFigma),
    date: "May 2023 - Present",
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
    title: "Ongoing Web Development Projects",
    location: "Various Locations",
    description:
      "Currently working on multiple projects, enhancing skills in Next.js, Firebase, and API integrations while exploring AI.",
    icon: React.createElement(FaReact),
    date: "2024",
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
  },
  {
    title: "Budgeteer",
    description:
      "Budgeteer is a user-friendly budget tracking app with income and expense tracking, multi-currency support, and light/dark mode.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Prisma"],
    imageUrl: "/budgeteer.png",
    width: 500,
    height: 300,
  },
  {
    title: "CodeChime",
    description:
      "A real-time code editor enabling seamless collaboration, where multiple users can edit together, see live updates instantly, and work efficiently in sync.",
    tags: ["React", "Tailwind", "Socket.io", "Express.js", "Codemirror"],
    imageUrl: "/codechime.png",
    width: 500,
    height: 300,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
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
  "Vercel",
  "Framer",
  "Figma",
] as const;
