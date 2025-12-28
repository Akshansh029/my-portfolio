import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";

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
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group"
            >
              {/* <div className="glass rounded-2xl overflow-hidden hover-lift max-w-xl">
                <div className="aspect-auto overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={550}
                    height={150}
                    className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="px-6 py-4 md:py-6 md:px-8">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))} */}
              <Link href={`/projects/${project.id}`} className="block">
                <div className="glass rounded-2xl overflow-hidden hover-lift max-w-xl cursor-pointer">
                  <div className="aspect-auto overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={550}
                      height={150}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <h4 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
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
            className="inline-flex items-center transition duration-300 hover:-translate-y-1 gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 font-medium"
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
