import { Reveal } from "@/components/site/reveal";
import { minimalTimelineItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Experience",
  description: "A clean timeline of learning, project, and collaboration milestones for Rashed Azizi.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <section className="page-container py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
          Experience
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
          Timeline
        </h1>
        <p className="mt-5 text-base leading-8 text-neutral-600">
          A simple view of how my academic work, public projects, and collaboration have been
          building momentum.
        </p>
      </Reveal>

      <div className="relative mt-12 max-w-4xl">
        <div className="absolute bottom-0 left-[9px] top-0 w-px bg-neutral-200" />
        <div className="space-y-10">
          {minimalTimelineItems.map((item, index) => (
            <Reveal key={`${item.title}-${item.date}`} delay={index * 0.035}>
              <article className="relative pl-10">
                <span className="absolute left-0 top-1.5 z-10 h-[19px] w-[19px] rounded-full border border-neutral-300 bg-white shadow-[0_0_0_6px_#fff]" />
                <div className="grid gap-3 sm:grid-cols-[9rem_1fr]">
                  <p className="text-sm font-medium text-neutral-400">{item.date}</p>
                  <div>
                    <h2 className="text-xl font-semibold leading-tight text-neutral-950">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-neutral-500">{item.subtitle}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
