"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

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
                <ProjectCard key={project.id} project={project}/>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
