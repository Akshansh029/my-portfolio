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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

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
