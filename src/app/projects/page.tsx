import { HiOutlineArrowUpRight, HiOutlineCodeBracket } from "react-icons/hi2";

import { PageIntro } from "@/components/site/page-intro";
import { Reveal } from "@/components/site/reveal";
import {
  capabilityPillars,
  personalProjects,
  teamProjects,
} from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Browse personal projects, team collaborations, and selected work from Rashed Azizi in a polished case-study layout.",
  path: "/projects",
});

type ProjectCardProps = {
  title: string;
  description: string;
  highlight: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  previewLabel: string;
  accent: string;
  role?: string;
  teamSize?: string;
  result?: string;
  contribution?: string[];
};

function ProjectCard({
  title,
  description,
  highlight,
  technologies,
  liveUrl,
  githubUrl,
  previewLabel,
  accent,
  role,
  teamSize,
  result,
  contribution,
}: ProjectCardProps) {
  return (
    <article className="surface-panel rounded-[2rem] p-5 sm:p-6">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
        <div className="absolute inset-5 rounded-[1.35rem] border border-white/10 bg-hero-grid bg-[length:2.5rem_2.5rem] opacity-20" />
        <div className="relative flex min-h-[12rem] flex-col justify-between">
          <span className="chip w-fit bg-slate-950/50">{previewLabel}</span>
          <div>
            {role ? (
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                {role}
              </p>
            ) : null}
            <h2 className="max-w-sm font-display text-2xl font-semibold text-white">{title}</h2>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">{description}</p>
      <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
        {highlight}
      </p>

      {contribution?.length ? (
        <div className="mt-5 space-y-2">
          {contribution.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}

      {(teamSize || result) && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {teamSize ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Team size</p>
              <p className="mt-2 text-sm text-white">{teamSize}</p>
            </div>
          ) : null}
          {result ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Result</p>
              <p className="mt-2 text-sm text-white">{result}</p>
            </div>
          ) : null}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="chip bg-white/[0.03]">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            Live Story
            <HiOutlineArrowUpRight />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-500">
            Demo soon
          </span>
        )}

        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            GitHub
            <HiOutlineCodeBracket />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-500">
            Source soon
          </span>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const featuredProject = teamProjects[0];

  return (
    <div className="container space-y-6 sm:space-y-8">
      <PageIntro
        eyebrow="Selected Work"
        title="Projects that show both the foundations I built on and the polished direction I want to keep pushing."
        description="This page separates personal builds from team collaboration so the technical growth, product instincts, and presentation quality are easier to understand."
        chips={["Personal builds", "Team collaboration", "Case-study layout"]}
        actions={[
          { href: "/experience", label: "View Experience" },
          { href: "/contact", label: "Discuss a Project", variant: "secondary" },
        ]}
      />

      <Reveal className="surface-panel-strong rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">Spotlight Project</span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-white sm:text-4xl">
              {featuredProject.title}
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              {featuredProject.role}
            </p>
            <p className="body-copy mt-6 max-w-2xl text-base">{featuredProject.description}</p>

            <div className="mt-6 grid gap-3">
              {featuredProject.contribution.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Team size</p>
              <p className="mt-3 font-display text-2xl font-semibold text-white">
                {featuredProject.teamSize}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Result</p>
              <p className="mt-3 font-display text-2xl font-semibold text-white">
                {featuredProject.result}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <span key={tech} className="chip bg-white/[0.03]">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary mt-6"
              >
                Read the article
                <HiOutlineArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="grid gap-6">
        <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Personal Projects
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Built to sharpen fundamentals and product intuition.
              </h2>
            </div>
            <span className="chip hidden sm:inline-flex">Hands-on practice</span>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {personalProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                highlight={project.highlight}
                technologies={project.technologies}
                liveUrl={project.liveUrl || undefined}
                githubUrl={project.githubUrl || undefined}
                previewLabel={project.previewLabel}
                accent={project.accent}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {capabilityPillars.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            delay={index * 0.05}
            className="surface-panel rounded-[2rem] p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Build signal</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white">
              {pillar.title}
            </h2>
            <p className="body-copy mt-4 text-sm">{pillar.description}</p>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
