import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Completed Web Development Bootcamp",
    location: "Online",
    description:
      "Graduated from an intensive program focused on full-stack web development, mastering technologies like React and Node.js.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Developed 'LinkUp' Chat Application",
    location: "Personal Project",
    description:
      "Built a real-time messaging app using React, Firebase, and Zustand, featuring user authentication and image sharing.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Created 'Budgeteer' Budget Tracker",
    location: "Personal Project",
    description:
      "Developed a full-stack budget tracking application with Next.js, TypeScript, and Tailwind CSS, featuring data visualization.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Ongoing Web Development Projects",
    location: "Various Locations",
    description:
      "Currently working on multiple projects, enhancing skills in Next.js, Firebase, and API integrations while exploring AI.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
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
    title: "Stockhive",
    description:
      "An inventory management app that tracks products and showcases analytics through an intuitive admin dashboard for efficient stock control.",
    tags: ["Next.js", "Tailwind", "Redux", "PostgreSQl", "Node.js"],
    imageUrl: "/stockhive.png",
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
  "Git",
  "Tailwind",
  "Vite",
  "Prisma",
  "MongoDB",
  "Express",
  "Firebase",
  "PostgreSQL",
  "Vercel",
  "Framer Motion",
  "Figma",
  "Notion",
] as const;
