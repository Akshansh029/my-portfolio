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
