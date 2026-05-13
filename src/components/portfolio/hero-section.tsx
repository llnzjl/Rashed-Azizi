"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowLongDown,
  HiOutlineArrowRight,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

import { heroMetrics, siteData, type SectionId } from "@/data/portfolio";

type HeroSectionProps = {
  onNavigate: (id: SectionId) => void;
};

const socialLinks = [
  {
    label: "GitHub",
    href: siteData.github,
    icon: RiGithubLine,
  },
  {
    label: "LinkedIn",
    href: siteData.linkedin,
    icon: RiLinkedinLine,
  },
  {
    label: "Instagram",
    href: siteData.instagram,
    icon: RiInstagramLine,
  },
  {
    label: "Email",
    href: `mailto:${siteData.email}`,
    icon: HiOutlineEnvelope,
  },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % siteData.heroRoles.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">{siteData.heroStatus}</span>
              <p className="mt-6 font-mono text-sm uppercase tracking-[0.35em] text-slate-400">
                {siteData.location}
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Building modern products with
                <span className="title-gradient block">cinematic clarity.</span>
              </h1>

              <div className="mt-6 h-9 overflow-hidden text-lg text-cyan-200 sm:text-2xl">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={siteData.heroRoles[roleIndex]}
                    initial={{ y: 26, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -26, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {siteData.heroRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <p className="section-copy mt-7 max-w-2xl">{siteData.heroIntro}</p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onNavigate("projects")}
                  data-cursor-label="Projects"
                  className="interactive-ring inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/25 bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_25px_60px_rgba(56,189,248,0.3)]"
                >
                  View Projects
                  <HiOutlineArrowRight className="text-lg" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  data-cursor-label="Contact"
                  className="interactive-ring inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white"
                >
                  Contact Me
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      data-cursor-label={item.label}
                      className="interactive-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-slate-200"
                      aria-label={item.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.18 + index * 0.12,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="section-shell p-5"
                  >
                    <p className="font-display text-3xl font-semibold text-white">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
                    <p className="mt-2 text-xs leading-6 text-slate-500">{metric.helper}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative mx-auto w-full max-w-[33rem]"
          >
            <div className="section-shell relative overflow-hidden p-4 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_32%)]" />
              <div className="absolute inset-4 rounded-[1.5rem] border border-white/10 bg-hero-grid bg-[length:2.8rem_2.8rem] opacity-15" />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04]">
                <Image
                  src="/rashed-profile.jpg"
                  alt={`${siteData.name} portrait`}
                  width={900}
                  height={1120}
                  priority
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] via-[#050816]/65 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-2 top-10 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 shadow-glow backdrop-blur-xl sm:left-0"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-200">
                  Developer Note
                </p>
                <p className="mt-2 max-w-[12rem] text-sm text-white">
                  Interfaces should feel precise, alive, and effortless to explore.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-2 rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-4 py-3 shadow-[0_22px_60px_rgba(5,8,22,0.45)] backdrop-blur-xl sm:right-0"
              >
                <p className="text-sm text-slate-300">Focused on</p>
                <p className="mt-2 font-display text-xl font-semibold text-white">
                  Motion, product thinking, and clean execution.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={() => onNavigate("about")}
          data-cursor-label="Scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.65 }}
          className="mx-auto mt-16 hidden items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 md:inline-flex"
        >
          <span className="flex h-11 w-7 items-start justify-center rounded-full border border-white/15 p-1">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-scroll-dot" />
          </span>
          <span>Scroll to explore</span>
          <HiArrowLongDown className="text-lg text-cyan-200" />
        </motion.button>
      </div>
    </section>
  );
}
