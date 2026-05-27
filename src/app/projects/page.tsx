import { MinimalProjectCard } from "@/components/site/minimal-project-card";
import { Reveal } from "@/components/site/reveal";
import { minimalProjects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "Selected student, web, and software projects from Rashed Azizi.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="page-container py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
          Projects
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
          Selected work
        </h1>
        <p className="mt-5 text-base leading-8 text-neutral-600">
          A small set of projects that show my current learning path across frontend work,
          software fundamentals, and student collaboration.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {minimalProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <MinimalProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
