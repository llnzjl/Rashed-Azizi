import { Reveal } from "@/components/site/reveal";
import { impossibleListItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Impossible List",
  description: "A concise impossible list for Rashed Azizi's learning, career, and building goals.",
  path: "/impossiblelist",
});

export default function ImpossibleListPage() {
  return (
    <section className="page-container py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
          Impossible List
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-neutral-950 sm:text-5xl">
          Ambitious, public goals
        </h1>
        <p className="mt-5 text-base leading-8 text-neutral-600">
          A small list of things I want to keep moving toward through consistent projects,
          learning, and collaboration.
        </p>
      </Reveal>

      <div className="relative mt-12 max-w-3xl">
        <div className="absolute bottom-0 left-[9px] top-0 w-px bg-neutral-200" />
        <div className="space-y-6">
          {impossibleListItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="relative pl-10">
                <span className="absolute left-0 top-1.5 z-10 h-[19px] w-[19px] rounded-full border border-neutral-300 bg-white shadow-[0_0_0_6px_#fff]" />
                <p className="text-lg font-medium leading-8 text-neutral-900">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
