import React from "react";
import { Project } from "@/data/projects";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="glass rounded-2xl overflow-hidden hover-lift max-w-xl max-h-xl border-px border-border">
      <div className="max-h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={250}
          height={150}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-6 py-4 md:py-6 md:px-8">
        <div className="flex items-start justify-between mb-4">
          <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <p className="text-muted-foreground text-base mb-6 leading-relaxed mt-4">
          {project.description}
        </p>

        <div className="flex gap-3">
          <Link
            href={`/projects/${project.id}`}
            className="py-3 px-5 rounded-full hover:bg-white/70 transition-colors border-[1px] border-border bg-white text-secondary font-semibold text-sm"
          >
            More Details
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="py-3 px-5 flex items-center gap-2 rounded-full hover:bg-primary/10 transition-colors border-[1px] border-border font-semibold text-sm"
          >
            <Github className="h-5 w-5" />
            <span className="hidden md:block">GitHub</span>
          </Link>
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 flex items-center gap-2 rounded-full hover:bg-primary/10 transition-colors border-[1px] border-border font-semibold text-sm"
            >
              <ArrowUpRight className="h-5 w-5" />
              <span className="hidden md:block">Live Site</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
