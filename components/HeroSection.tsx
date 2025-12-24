import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-muted-foreground font-mono text-base tracking-wider">
            Full-Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          Hi, I'm <span className="gradient-text glow-text">Akshansh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft modern web experiences with{" "}
          <span className="text-foreground font-medium">React</span> &{" "}
          <span className="text-foreground font-medium">Next.js</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="glow-box transition duration-300 hover:-translate-y-1"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="transition duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:text-white"
            asChild
          >
            <a
              href="/full-stack-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <a
            href="https://github.com/Akshansh029"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/10 transition-colors duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/akshansh-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/10 transition-colors duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
