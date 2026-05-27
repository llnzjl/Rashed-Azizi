import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { minimalProjects, minimalTimelineItems, siteData, techStack } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CV",
  description: "A clean web CV for Rashed Azizi with profile, projects, skills, and contact links.",
  path: "/cv",
});

export default function CvPage() {
  return (
    <section className="page-container py-20 sm:py-24">
      <Reveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="space-y-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">CV</p>
            <h1 className="mt-4 text-4xl font-semibold text-neutral-950 sm:text-5xl">
              {siteData.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-neutral-700">{siteData.title}</p>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{siteData.heroIntro}</p>
          </div>

          <div className="subtle-card rounded-lg p-5">
            <p className="text-sm font-semibold text-neutral-950">Contact</p>
            <div className="mt-4 grid gap-2 text-sm text-neutral-600">
              <a className="quiet-link focus-ring rounded" href={`mailto:${siteData.email}`}>
                {siteData.email}
              </a>
              <a className="quiet-link focus-ring rounded" href={siteData.github}>
                github.com/llnzjl
              </a>
              <a className="quiet-link focus-ring rounded" href={siteData.linkedin}>
                linkedin.com/in/llnzjl
              </a>
              <span>{siteData.location}</span>
            </div>
          </div>
        </aside>

        <div className="space-y-10">
          <section aria-labelledby="cv-projects">
            <h2 id="cv-projects" className="text-2xl font-semibold text-neutral-950">
              Selected projects
            </h2>
            <div className="mt-5 grid gap-4">
              {minimalProjects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  className="subtle-card focus-ring rounded-lg p-5 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="text-lg font-semibold text-neutral-950">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{project.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="cv-timeline">
            <h2 id="cv-timeline" className="text-2xl font-semibold text-neutral-950">
              Timeline
            </h2>
            <div className="mt-5 grid gap-5">
              {minimalTimelineItems.slice(0, 5).map((item) => (
                <article key={`${item.title}-${item.date}`} className="border-l border-neutral-200 pl-5">
                  <p className="text-sm font-medium text-neutral-400">{item.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-950">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{item.subtitle}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="cv-skills">
            <h2 id="cv-skills" className="text-2xl font-semibold text-neutral-950">
              Skills
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {techStack.slice(0, 8).map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </Reveal>
    </section>
  );
}
