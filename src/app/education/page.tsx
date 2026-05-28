import Link from "next/link";
import Image from "next/image";

import { Reveal } from "@/components/site/reveal";
import { certifications, educationItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Education",
  description: "Academic history and certificates for Rashed Azizi.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <section className="page-container py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
          Education
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
          Academic foundations
        </h1>
        <p className="mt-5 text-base leading-8 text-neutral-600">
          Formal study, certificates, and learning environments behind the portfolio.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {educationItems.map((item, index) => (
          <Reveal key={`${item.school}-${item.period}`} delay={index * 0.05}>
            <article className="subtle-card rounded-lg p-6">
              <p className="text-sm font-medium text-neutral-400">{item.period}</p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-950">{item.school}</h2>
              <p className="mt-2 text-sm font-medium text-neutral-500">{item.degree}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
          Certificates
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-950 sm:text-4xl">
          Anthropic Academy courses
        </h2>
        <p className="mt-4 text-base leading-8 text-neutral-600">
          These are the certificates I earned on Anthropic Academy&apos;s Skilljar platform.
          Each card includes the course name, completion date, and proof links.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {certifications.map((certificate, index) => (
          <Reveal key={certificate.title} delay={index * 0.05}>
            <article className="subtle-card overflow-hidden rounded-lg">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-neutral-200 bg-slate-950/70 p-4 lg:border-b-0 lg:border-r">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={3301}
                    height={2551}
                    className="aspect-[4/3] w-full object-contain"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-sm font-medium text-neutral-400">{certificate.completedOn}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-neutral-950">
                    {certificate.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-neutral-500">
                    {certificate.course}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{certificate.summary}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                    {certificate.issuer} - {certificate.platform}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
                    <Link
                      href={certificate.courseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="quiet-link focus-ring rounded"
                    >
                      Course page
                    </Link>
                    {certificate.verificationUrl ? (
                      <Link
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="quiet-link focus-ring rounded"
                      >
                        Verify
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
