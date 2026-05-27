import Image from "next/image";
import type { IconType } from "react-icons";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {
  RiGithubLine,
  RiKeyLine,
  RiLinkedinLine,
  RiMastodonLine,
} from "react-icons/ri";
import { SiMatrix } from "react-icons/si";

import { MinimalProjectCard } from "@/components/site/minimal-project-card";
import { Reveal } from "@/components/site/reveal";
import {
  contactMethods,
  heroSocialLinks,
  minimalProjects,
  minimalTimelineItems,
  publicAsset,
  siteData,
} from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "A clean developer portfolio for Rashed Azizi, a Chungbuk National University student focused on frontend development, AI, and practical software projects.",
  path: "/",
});

const socialIcons: Record<(typeof heroSocialLinks)[number]["icon"], IconType> = {
  github: RiGithubLine,
  mastodon: RiMastodonLine,
  matrix: SiMatrix,
  linkedin: RiLinkedinLine,
  email: HiOutlineEnvelope,
  key: RiKeyLine,
};

export default function HomePage() {
  return (
    <>
      <section id="home" className="page-container flex min-h-[calc(100vh-5rem)] items-center py-20">
        <Reveal y={18} className="w-full">
          <div className="max-w-3xl">
            <Image
              src={publicAsset("/rashed-profile.jpg")}
              alt={`${siteData.name} profile image`}
              width={116}
              height={116}
              priority
              className="h-28 w-28 rounded-full border border-neutral-200 object-cover object-[58%_38%] shadow-sm"
            />

            <h1 className="mt-8 text-5xl font-bold leading-[1.04] text-neutral-950 sm:text-6xl lg:text-7xl">
              {siteData.name}
            </h1>
            <p className="mt-4 text-xl font-medium leading-snug text-neutral-700 sm:text-2xl">
              {siteData.title}
            </p>

            <div className="mt-9 grid gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {heroSocialLinks.map((item) => {
                const Icon = socialIcons[item.icon];
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="quiet-link focus-ring group inline-flex items-center gap-2 rounded-md text-sm"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-[18px] text-neutral-400 transition-colors group-hover:text-neutral-900"
                    />
                    <span className="font-medium text-neutral-700 transition-colors group-hover:text-neutral-950">
                      {item.label}
                    </span>
                    <span className="truncate text-neutral-400">{item.value}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-band" aria-labelledby="intro-heading">
        <div className="page-container py-14 sm:py-16">
          <Reveal className="max-w-4xl">
            <p id="intro-heading" className="text-2xl font-semibold text-neutral-950">
              Hey!
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              I am Rashed, a computer science student at Chungbuk National University.
              I am currently learning software web development and AI, and I enjoy
              turning small practical projects into cleaner, more polished digital work.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="portfolio" className="section-muted" aria-labelledby="portfolio-heading">
        <div className="page-container py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
              Portfolio
            </p>
            <h2
              id="portfolio-heading"
              className="mt-4 text-3xl font-semibold text-neutral-950 sm:text-4xl"
            >
              My top projects
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {minimalProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05} y={18}>
                <MinimalProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band" aria-labelledby="timeline-heading">
        <div className="page-container py-20 sm:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
              Timeline
            </p>
            <h2
              id="timeline-heading"
              className="mt-4 text-3xl font-semibold text-neutral-950 sm:text-4xl"
            >
              The path so far
            </h2>
          </Reveal>

          <div className="relative mt-12 max-w-4xl">
            <div className="absolute bottom-0 left-[9px] top-0 w-px bg-neutral-200" />

            <div className="space-y-10">
              {minimalTimelineItems.map((item, index) => (
                <Reveal key={`${item.title}-${item.date}`} delay={index * 0.035} y={18}>
                  <article className="relative pl-10">
                    <span className="absolute left-0 top-1.5 z-10 h-[19px] w-[19px] rounded-full border border-neutral-300 bg-white shadow-[0_0_0_6px_#fff]" />
                    <div className="grid gap-3 sm:grid-cols-[9rem_1fr]">
                      <p className="text-sm font-medium text-neutral-400">{item.date}</p>
                      <div>
                        <h3 className="text-xl font-semibold leading-tight text-neutral-950">
                          {item.title}
                        </h3>
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
        </div>
      </section>

      <section id="contact" className="section-muted" aria-labelledby="contact-heading">
        <div className="page-container py-20 sm:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-4 text-3xl font-semibold text-neutral-950 sm:text-4xl"
              >
                Let&apos;s get in touch
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600">
                I am open to internships, student collaboration, and junior opportunities.
              </p>
            </div>

            <div className="grid gap-3">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="focus-ring subtle-card flex items-center justify-between gap-4 rounded-lg px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-300"
                >
                  <span className="text-sm font-medium text-neutral-500">{method.label}</span>
                  <span className="text-right text-sm font-semibold text-neutral-950">
                    {method.value}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
