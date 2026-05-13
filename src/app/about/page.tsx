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

import { PageIntro } from "@/components/site/page-intro";
import { Reveal } from "@/components/site/reveal";
import {
  aboutContent,
  heroMetrics,
  siteData,
  skillBars,
  techStack,
  workPrinciples,
} from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn more about Rashed Azizi, including background, skills, technical stack, and the principles behind the work.",
  path: "/about",
});

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

export default function AboutPage() {
  return (
    <div className="container space-y-6 sm:space-y-8">
      <PageIntro
        eyebrow="About"
        title="The story behind the work, the systems I enjoy building, and the standards I want my projects to reach."
        description={aboutContent.journey}
        chips={["Story", "Skill snapshot", "Tech stack", siteData.location]}
        actions={[
          { href: "/projects", label: "See Projects" },
          { href: "/contact", label: "Start a Conversation", variant: "secondary" },
        ]}
      />

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <span className="eyebrow">{aboutContent.eyebrow}</span>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold text-white sm:text-4xl">
            {aboutContent.heading}
          </h2>

          <div className="mt-8 space-y-5 text-sm text-slate-300 sm:text-base">
            {aboutContent.story.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="font-display text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-xs leading-6 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05} className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Principles</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                  How I like to approach the work.
                </h2>
              </div>
              <span className="chip">Design + code</span>
            </div>

            <div className="mt-6 grid gap-4">
              {workPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="font-display text-xl font-semibold text-white">
                    {principle.title}
                  </p>
                  <p className="body-copy mt-3 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Current focus</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              Product-minded frontend work with stronger polish in every pass.
            </h2>
            <p className="body-copy mt-4 text-sm">
              I am especially interested in portfolio experiences, premium landing pages, and
              developer-facing interfaces that balance visual identity with clean implementation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Strengths</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Skills I rely on the most today.
              </h2>
            </div>
            <span className="chip">Always evolving</span>
          </div>

          <div className="mt-8 space-y-5">
            {skillBars.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{skill.name}</span>
                  <span className="font-mono text-cyan-200">{skill.level}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-amber-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Toolkit</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                The stack behind the builds.
              </h2>
            </div>
            <span className="chip">Modern web</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {techStack.map((tech) => {
              const Icon = techIcons[tech.key];

              return (
                <div
                  key={tech.name}
                  className="interactive-ring rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-xl"
                    style={{ color: tech.color }}
                  >
                    <Icon />
                  </div>
                  <p className="mt-4 text-sm font-medium text-white">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
