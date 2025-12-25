"use client";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useKonamiCode } from "@/hooks/use-konami-code";
import EasterEggHint from "@/components/EasterEggHint";

const Index = () => {
  useEffect(() => {
    console.log(
      `%c👋 Hello curious dev!\n\n` +
        `Glad you landed on my portfolio and decided to look around.\n\n` +
        `Built by Akshansh Singh\n` +
        `Stack: Next.js • TypeScript • Tailwind • Framer Motion`,
      "color: #7de8df; font-size: 14px; font-family: monospace;"
    );
  }, []);

  useKonamiCode();

  return (
    <div className="min-h-screen bg-background noise-bg">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <EasterEggHint />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
