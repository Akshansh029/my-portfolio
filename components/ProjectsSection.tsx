import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">
            02. PROJECTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Featured work
          </h3>
        </motion.div>

        <div className="space-y-10 flex flex-col items-center">
          {projects.slice(0, 3).map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="group"
            >
              <ProjectCard key={project.id} project={project}/>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center transition duration-300 hover:-translate-y-1 gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 font-medium text-sm"
          >
            Explore All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
