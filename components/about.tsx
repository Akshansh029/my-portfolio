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
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
      <p className="mb-3">
        {" "}
        I am a third-year{" "}
        <span className="font-medium">
          Electrical and Electronics Engineering student
        </span>{" "}
        at VIT Chennai with a strong interest in{" "}
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
        visiting fun spots in Chennai with friends, and exploring{" "}
        <span className="font-medium">
          new technologies and creative projects
        </span>
        . I’m seeking a <span className="font-medium">internship</span> to gain
        industry experience and make meaningful contributions to a team.{" "}
      </p>
    </motion.section>
  );
}
