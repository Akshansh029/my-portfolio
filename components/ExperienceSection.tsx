"use client";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">
            04. EXPERIENCE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've worked
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary glow-box" />

                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <span className="text-sm font-mono text-primary">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-3">
                    {exp.company} · {exp.location}
                  </p>

                  <p className="text-secondary-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
