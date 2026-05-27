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

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {certifications
          .filter((certificate) => certificate.image)
          .map((certificate, index) => (
            <Reveal key={certificate.title} delay={index * 0.05}>
              <article className="subtle-card overflow-hidden rounded-lg">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={900}
                  height={640}
                  className="aspect-[4/3] border-b border-neutral-200 object-cover"
                />
                <div className="p-5">
                  <p className="text-sm font-medium text-neutral-400">{certificate.year}</p>
                  <h2 className="mt-2 text-xl font-semibold text-neutral-950">
                    {certificate.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{certificate.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
      </div>
    </section>
  );
}
