"use client";
import { skillCategories } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">
            03. SKILLS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Technologies I work with
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 ">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                    }}
                    className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-mono text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
