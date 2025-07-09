"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashnode } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {" "}
        I am a final year{" "}
        <span className="font-medium">
          Electrical and Electronics Engineering student
        </span>{" "}
        with a strong interest in{" "}
        <span className="font-medium">web development</span> and{" "}
        <span className="font-medium">software engineering</span>. Over the past
        two years, I’ve built several projects, gaining proficiency in{" "}
        <span className="font-medium">
          React, Next.js, TailwindCSS, Firebase, and MongoDB
        </span>
        . Currently, I’m deepening my knowledge in{" "}
        <span className="font-medium">Data Structures and Algorithms</span>{" "}
        through LeetCode and exploring and diving into{" "}
        <span className="font-medium">DevOps</span>.{" "}
      </p>{" "}
      <p>
        {" "}
        Outside of coding, I enjoy{" "}
        <span className="italic">playing football, enjoying video games</span>,
        learning something new and interesting, and exploring{" "}
        <span className="font-medium">technologies and creative projects</span>.
        I’m seeking an <span className="font-medium">internship</span> to gain
        industry experience and make meaningful contributions to a team.{" "}
      </p>
      <a
        className="w-fit bg-white px-4 py-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full hover:underline active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white mx-auto mt-6"
        href="https://akshansh29.hashnode.dev/"
        target="_blank"
      >
        <span>Read my blogs on Hashnode</span>
        <FontAwesomeIcon icon={faHashnode} />
      </a>
    </motion.section>
  );
}
