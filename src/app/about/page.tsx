import Image from "next/image";

import { Reveal } from "@/components/site/reveal";
import { aboutContent, publicAsset, siteData, techStack, workPrinciples } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: "Learn more about Rashed Azizi, his background, technical focus, and working style.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="page-container py-20 sm:py-24">
      <Reveal className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="space-y-6">
          <Image
            src={publicAsset("/rashed-profile.jpg")}
            alt={`${siteData.name} portrait`}
            width={360}
            height={460}
            className="aspect-[4/5] rounded-lg border border-neutral-200 object-cover object-[58%_38%]"
          />
          <div className="subtle-card rounded-lg p-5">
            <p className="text-sm font-semibold text-neutral-950">{siteData.name}</p>
            <p className="mt-2 text-sm text-neutral-600">{siteData.title}</p>
            <p className="mt-2 text-sm text-neutral-500">{siteData.location}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">About</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
            {aboutContent.heading}
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-neutral-600">
            {aboutContent.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {workPrinciples.map((principle) => (
              <article key={principle.title} className="subtle-card rounded-lg p-5">
                <h2 className="text-base font-semibold text-neutral-950">{principle.title}</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{principle.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {techStack.slice(0, 10).map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
