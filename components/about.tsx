"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
        I am a third-year{" "}
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
        through LeetCode.{" "}
      </p>{" "}
      <p>
        {" "}
        Outside of coding, I enjoy{" "}
        <span className="italic">playing football, enjoying video games</span>,
        learning something new and interesting, and exploring{" "}
        <span className="font-medium">technologies and creative projects</span>.
        I’m seeking a <span className="font-medium">internship</span> to gain
        industry experience and make meaningful contributions to a team.{" "}
      </p>
    </motion.section>
  );
}
