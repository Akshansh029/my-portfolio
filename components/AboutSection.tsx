"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">
            01. ABOUT
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            A bit about me
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            I'm a final year{" "}
            <span className="text-foreground">
              Electrical and Electronics Engineering
            </span>{" "}
            student with a passion for{" "}
            <span className="text-foreground">web development</span> and{" "}
            <span className="text-foreground">software engineering</span>.
          </p>

          <p>
            Over the past two years, I've built several projects, gaining
            proficiency in <span className="text-primary">React</span>,{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">Express.js</span>, and various
            databases. Currently deepening my knowledge in{" "}
            <span className="text-foreground">
              Data Structures & Algorithms
            </span>{" "}
            while exploring <span className="text-foreground">DevOps</span>.
          </p>

          <p>
            Outside of coding, I enjoy playing football, video games, and
            exploring new technologies and creative projects.
          </p>

          <motion.a
            href="https://akshansh29.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Read my blogs on Hashnode
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
