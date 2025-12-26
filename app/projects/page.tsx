"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background noise-bg">
      {/* <Navigation /> */}
      <main className="pt-24 pb-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              All Projects
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              A collection of my work, featuring web applications, AI
              integrations, and creative experiments.
            </p>
          </motion.div>

          <div className="grid gap-8 md:gap-12 justify-center">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={`/projects/${project.id}`} className="group block">
                  <div className="glass rounded-2xl overflow-hidden hover-lift max-w-xl cursor-pointer">
                    <div className="aspect-auto overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={550}
                        height={150}
                        className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="flex items-start justify-between mb-3 md:mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h2>
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
        </div>
      </main>
    </div>
  );
};

export default Projects;
