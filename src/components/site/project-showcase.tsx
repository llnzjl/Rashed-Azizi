"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowUpRight, HiPlus } from "react-icons/hi2";
import { RiGithubLine } from "react-icons/ri";
import { projects, type Project } from "@/data/showcase";
import { publicAsset } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { Dialog } from "./dialog";
import { SectionTitle } from "./section-title";

const filters = [
  "All work",
  "Web applications",
  "Systems",
  "Team projects",
] as const;
const screenImages: Record<string, string> = {
  baraka: "baraka-live.webp",
  dateflow: "dateflow-live.webp",
  kaa: "kaa-live.webp",
};
function previewImage(project: Project) {
  return screenImages[project.id]
    ? publicAsset("/projects/" + screenImages[project.id])
    : project.image;
}
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Live website <HiArrowUpRight />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="source-link"
        >
          <RiGithubLine /> Source <HiArrowUpRight />
        </a>
      )}
      {project.article && (
        <a
          href={project.article}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Read the story <HiArrowUpRight />
        </a>
      )}
    </div>
  );
}
export function ProjectShowcase({ heading = true }: { heading?: boolean }) {
  const [filter, setFilter] = useState<string>("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const reduced = useReducedMotion();
  const visible = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section
      id="projects"
      className={heading ? "section page-container" : "project-page-content"}
    >
      <span id="portfolio" className="anchor-alias" />
      {heading && (
        <SectionTitle
          number="02"
          eyebrow="SELECTED WORK"
          title={
            <>
              Ideas, made <span className="muted-heading">real.</span>
            </>
          }
          description="A few things I’ve built, explored, and learned from along the way."
          action={
            <a
              href="https://github.com/llnzjl"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              More on GitHub <HiArrowUpRight />
            </a>
          }
        />
      )}
      <div className="filter-bar" aria-label="Filter projects">
        {filters.map((value) => (
          <button
            key={value}
            aria-pressed={filter === value}
            className={filter === value ? "filter active" : "filter"}
            onClick={() => setFilter(value)}
          >
            {value}
            {value === "All work" && (
              <span>{projects.length.toString().padStart(2, "0")}</span>
            )}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} projects shown
      </p>
      <div className="projects-grid">
        {visible.map((project) => {
          const index = projects.indexOf(project),
            featured = project.id === "baraka";
          return (
            <Reveal
              key={project.id}
              className={
                featured ? "project-wrap featured-project" : "project-wrap"
              }
            >
              <motion.article
                className={`project-card project-${project.id}`}
                whileHover={
                  reduced ? {} : { y: -5, rotateX: 0.5, rotateY: -0.5 }
                }
                transition={{ duration: 0.3 }}
              >
                <a
                  className="project-image"
                  href={project.live || project.article || project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <div className="project-browser" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <small>
                      {project.live
                        ? new URL(project.live).hostname +
                          new URL(project.live).pathname
                        : project.category}
                    </small>
                    <HiArrowUpRight />
                  </div>
                  <Image
                    src={previewImage(project)}
                    alt={
                      screenImages[project.id]
                        ? `Screenshot of ${project.title}`
                        : `${project.title} project visual`
                    }
                    width={1440}
                    height={950}
                    sizes={
                      featured
                        ? "(max-width: 900px) 90vw, 700px"
                        : "(max-width: 700px) 90vw, 560px"
                    }
                    className={
                      project.category === "Team projects"
                        ? "award-project-image"
                        : ""
                    }
                  />
                  <span className="image-open">
                    <HiArrowUpRight />
                  </span>
                </a>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="mono">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </span>
                    <span className="mono">{project.year}</span>
                  </div>
                  {featured && (
                    <p className="featured-label">
                      <span /> FEATURED PROJECT
                    </p>
                  )}
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tech-tags" aria-label="Project technologies">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-bottom">
                    <ProjectLinks project={project} />
                    <button
                      className="project-detail-button"
                      onClick={() => setSelected(project)}
                      aria-label={`Details about ${project.title}`}
                    >
                      <HiPlus />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
      {selected && (
        <Dialog title={selected.title} onClose={() => setSelected(null)}>
          <Image
            className="project-dialog-image"
            src={previewImage(selected)}
            alt={selected.title}
            width={1440}
            height={950}
          />
          <p className="eyebrow">
            {selected.category} / {selected.year}
          </p>
          <p className="dialog-copy">{selected.detail}</p>
          <ul className="tech-tags">
            {selected.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <ProjectLinks project={selected} />
        </Dialog>
      )}
    </section>
  );
}
