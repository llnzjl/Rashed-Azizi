import { PageIntro } from "@/components/site/page-intro";
import { Reveal } from "@/components/site/reveal";
import {
  experienceFocus,
  experienceItems,
  workPrinciples,
} from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Experience",
  description:
    "See the experience timeline for Rashed Azizi, including independent work, hackathon collaboration, and growth milestones.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="container space-y-6 sm:space-y-8">
      <PageIntro
        eyebrow="Experience"
        title="A timeline shaped by self-driven projects, public learning, and collaboration under real constraints."
        description="This page focuses on momentum: how technical ability, design thinking, and teamwork have been developing through projects, study, and hackathon work."
        chips={["Timeline", "Collaboration", "Growth markers"]}
        actions={[
          { href: "/projects", label: "See the Work" },
          { href: "/contact", label: "Get in Touch", variant: "secondary" },
        ]}
      />

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Timeline</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                The path so far.
              </h2>
            </div>
            <span className="chip">Ongoing</span>
          </div>

          <div className="relative mt-10">
            <div className="absolute bottom-0 left-4 top-0 w-px glow-line" />

            <div className="space-y-8">
              {experienceItems.map((item, index) => (
                <article key={`${item.company}-${item.period}`} className="relative pl-12">
                  <span className="absolute left-4 top-7 z-10 h-4 w-4 -translate-x-1/2 rounded-full border border-cyan-200/60 bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.7)]" />

                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                          {item.period}
                        </p>
                        <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                          {item.role}
                        </h2>
                        <p className="mt-2 text-sm text-slate-400">{item.company}</p>
                      </div>
                      <span className="chip">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-300">{item.summary}</p>

                    <div className="mt-6 grid gap-3">
                      {item.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05} className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Focus right now</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              What I am trying to compound.
            </h2>
            <div className="mt-6 grid gap-3">
              {experienceFocus.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Working style</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              The habits I want teammates to feel.
            </h2>

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
        </div>
      </section>
    </div>
  );
}
