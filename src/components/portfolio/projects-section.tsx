"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowUpRight, HiOutlineCodeBracket } from "react-icons/hi2";

import { personalProjects, teamProjects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

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
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="section-shell h-full p-5 sm:p-6"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
        <motion.div
          animate={{ rotate: [0, 12, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-12 top-5 h-32 w-32 rounded-full bg-white/15 blur-3xl"
        />
        <div className="absolute inset-5 rounded-[1.35rem] border border-white/10 bg-hero-grid bg-[length:2.5rem_2.5rem] opacity-20" />
        <div className="relative flex min-h-[12rem] flex-col justify-between">
          <span className="chip w-fit bg-slate-950/50">{previewLabel}</span>
          <div>
            {role ? (
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                {role}
              </p>
            ) : null}
            <h3 className="max-w-sm font-display text-2xl font-semibold text-white">
              {title}
            </h3>
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
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Team Size
              </p>
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
            data-cursor-label="Live"
            className="interactive-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white"
          >
            Live Demo
            <HiOutlineArrowUpRight />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-500">
            Demo Soon
          </span>
        )}

        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-label="Source"
            className="interactive-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-medium text-white"
          >
            GitHub
            <HiOutlineCodeBracket />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-500">
            Source Soon
          </span>
        )}
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Premium project cards for both personal experiments and team collaboration."
          description="The layout is intentionally built to feel editorial and polished, while keeping the content easy to swap once you have live demos, case studies, or production screenshots ready."
        />

        <div className="mt-12 grid gap-6">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                  Personal Projects
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  Built to sharpen fundamentals and product intuition.
                </h3>
              </div>
              <span className="chip hidden sm:inline-flex">Interactive cards</span>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
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
          </div>

          <div className="pt-2">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-violet-200/80">
                  Team Projects
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  Collaboration, contribution clarity, and presentation under pressure.
                </h3>
              </div>
              <span className="chip hidden sm:inline-flex">Collaboration focus</span>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {teamProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  highlight={project.result}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl || undefined}
                  githubUrl={project.githubUrl || undefined}
                  previewLabel={project.previewLabel}
                  accent={project.accent}
                  role={project.role}
                  teamSize={project.teamSize}
                  result={project.result}
                  contribution={project.contribution}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
