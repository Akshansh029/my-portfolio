"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getProjectById } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import remarkGfm from "remark-gfm";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  const router = useRouter();

  if (!project) {
    router.back();
    return;
  }

  return (
    <div className="min-h-screen bg-background noise-bg">
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
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

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent hover:text-background transition-colors cursor-pointer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <Image
                src={project.image}
                alt={project.title}
                height={150}
                width={550}
                className="w-full h-auto"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-muted-foreground">{children}</li>
                  ),
                  code: ({ className, children }) => {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code className="px-1.5 py-0.5 rounded bg-muted text-primary font-mono text-sm">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="block p-4 rounded-lg bg-muted text-primary font-mono text-sm overflow-x-auto">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="mb-4 rounded-lg overflow-hidden">
                      {children}
                    </pre>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-foreground">
                      {children}
                    </strong>
                  ),
                }}
              >
                {project.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
