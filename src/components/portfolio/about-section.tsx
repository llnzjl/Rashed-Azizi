"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiCss,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import {
  aboutContent,
  heroMetrics,
  skillBars,
  techStack,
} from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

const techIcons: Record<string, IconType> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  python: SiPython,
  tailwind: SiTailwindcss,
  mongodb: SiMongodb,
  github: SiGithub,
};

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.heading}
          description={aboutContent.journey}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-shell p-6 sm:p-8"
          >
            <div className="flex flex-wrap gap-2">
              <span className="chip">Developer</span>
              <span className="chip">Designer Mindset</span>
              <span className="chip">AI Curious</span>
            </div>

            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300 md:text-base">
              {aboutContent.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="font-display text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="section-shell p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Skills Snapshot
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    A quick look at where I feel strongest today.
                  </p>
                </div>
                <span className="chip">Always evolving</span>
              </div>

              <div className="mt-8 space-y-5">
                {skillBars.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>{skill.name}</span>
                      <span className="font-mono text-cyan-200">{skill.level}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{
                          duration: 0.9,
                          delay: 0.1 + index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="section-shell p-6 sm:p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-white">
                Tech Stack
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Tools I use often, with room to keep growing.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {techStack.map((tech) => {
                  const Icon = techIcons[tech.key];

                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="interactive-ring rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4"
                    >
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-xl"
                        style={{ color: tech.color }}
                      >
                        <Icon />
                      </div>
                      <p className="mt-4 text-sm font-medium text-white">{tech.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
