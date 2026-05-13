"use client";

import { motion } from "framer-motion";

import { experienceItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="A glowing timeline of growth, teamwork, and real project momentum."
          description="This section blends actual milestones with editable placeholder framing so you can replace it with internships, client work, or company roles later without redesigning the whole timeline."
        />

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-4 top-0 w-px glow-line sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {experienceItems.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`relative sm:flex ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <span className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border border-cyan-200/60 bg-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.85)] sm:left-1/2" />

                <div className="ml-10 section-shell p-6 sm:ml-0 sm:w-[calc(50%-2.5rem)] sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                        {item.period}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        {item.role}
                      </h3>
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
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
