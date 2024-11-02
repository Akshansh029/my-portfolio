"use client";

import React, { CSSProperties } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const brightColors = [
  "#FF5733",
  "#FFC300",
  "#FF33F6",
  "#33FFBD",
  "#3385FF",
  "#DAF7A6",
];

function getRandomColor() {
  return brightColors[Math.floor(Math.random() * brightColors.length)];
}

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="skill-item bg-white border border-slate-300 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            style={{ "--underline-color": getRandomColor() } as CSSProperties}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <span className="skill-text">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
