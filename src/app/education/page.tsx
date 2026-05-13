import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUpRight, HiOutlineAcademicCap } from "react-icons/hi2";

import { PageIntro } from "@/components/site/page-intro";
import { Reveal } from "@/components/site/reveal";
import {
  certifications,
  educationItems,
  learningNotes,
} from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Education",
  description:
    "Review academic history, learning milestones, and certifications for Rashed Azizi.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <div className="container space-y-6 sm:space-y-8">
      <PageIntro
        eyebrow="Education"
        title="Academic foundations, certificates, and the learning environments that shaped how I work."
        description="This page gathers formal study, supporting credentials, and a few notes about the longer learning path behind the portfolio."
        chips={["Academic history", "Certificates", "Learning path"]}
        actions={[
          { href: "/about", label: "See My Profile" },
          { href: "/contact", label: "Connect", variant: "secondary" },
        ]}
      />

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-6">
          {educationItems.map((item, index) => (
            <Reveal
              key={`${item.school}-${item.period}`}
              delay={index * 0.05}
              className="surface-panel rounded-[2rem] p-6 sm:p-8"
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
                    <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                      {item.school}
                    </h2>
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
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08} className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Learning notes</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white">
            Education is also part of the adaptation story.
          </h2>

          <div className="mt-6 grid gap-3">
            {learningNotes.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Certificates</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              Supporting proof and milestone documents.
            </h2>
          </div>
          <span className="chip hidden sm:inline-flex">Archive</span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4"
            >
              {certificate.image ? (
                <Link href={certificate.image} target="_blank" className="block">
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      width={800}
                      height={560}
                      className="h-48 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111d]/75 to-transparent" />
                    <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white">
                      <HiOutlineArrowUpRight />
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="flex h-48 items-center justify-center rounded-[1.35rem] border border-dashed border-white/10 bg-white/[0.03] px-6 text-center text-sm text-slate-500">
                  Document preview will be added later.
                </div>
              )}

              <div className="mt-5">
                <h3 className="font-display text-xl font-semibold text-white">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {certificate.issuer} - {certificate.year}
                </p>
                <p className="body-copy mt-3 text-sm">{certificate.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
