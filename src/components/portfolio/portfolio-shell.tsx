"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

import { BackgroundEffects } from "@/components/portfolio/background-effects";
import { CustomCursor } from "@/components/portfolio/custom-cursor";
import { LoadingScreen } from "@/components/portfolio/loading-screen";
import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { sectionIds, siteData, type SectionId } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";

export function PortfolioShell() {
  const activeSection = useActiveSection(sectionIds);
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(!prefersReducedMotion);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      setLoading(false);
      return undefined;
    }

    const timer = window.setTimeout(() => setLoading(false), 1350);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  const handleNavigate = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative min-h-screen overflow-clip bg-background text-white">
      <BackgroundEffects />
      <CustomCursor />

      <motion.div
        className="fixed inset-x-0 top-0 z-[80] h-px origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
        style={{ scaleX: progressScale }}
      />

      <AnimatePresence>
        {loading ? (
          <LoadingScreen name={siteData.name} title={siteData.tagline} />
        ) : null}
      </AnimatePresence>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
