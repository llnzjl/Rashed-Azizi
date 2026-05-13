"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight, HiOutlineAcademicCap } from "react-icons/hi2";

import { certifications, educationItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <section id="education" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic milestones, certifications, and the foundations behind the work."
          description="The goal here is to feel composed and credible, with enough visual structure to support both formal education history and achievement snapshots."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            {educationItems.map((item, index) => (
              <motion.article
                key={`${item.school}-${item.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.68, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-shell p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl text-cyan-200">
                      <HiOutlineAcademicCap />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                        {item.period}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        {item.school}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">{item.degree}</p>
                    </div>
                  </div>
                  <span className="chip hidden sm:inline-flex">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Relevant Coursework
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span key={course} className="chip bg-white/[0.03]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Highlights
                    </p>
                    <div className="mt-4 space-y-2">
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
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="section-shell p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Certifications & Awards
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Replace placeholder files with higher-resolution scans any time.
                </p>
              </div>
              <span className="chip">Editable archive</span>
            </div>

            <div className="mt-8 grid gap-4">
              {certifications.map((certificate) => (
                <div
                  key={certificate.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-lg font-semibold text-white">
                        {certificate.title}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        {certificate.issuer} • {certificate.year}
                      </p>
                    </div>
                    {certificate.image ? (
                      <Link
                        href={certificate.image}
                        target="_blank"
                        data-cursor-label="View"
                        className="interactive-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white"
                      >
                        <HiOutlineArrowUpRight />
                      </Link>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {certificate.note}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
