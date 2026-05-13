import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineArrowUpRight } from "react-icons/hi2";
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

import { Reveal } from "@/components/site/reveal";
import {
  capabilityPillars,
  heroMetrics,
  pageHighlights,
  siteData,
  teamProjects,
} from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Explore a multi-page portfolio for Rashed Azizi, featuring polished developer branding, project previews, and a premium visual system.",
  path: "/",
});

const socialLinks = [
  { label: "GitHub", href: siteData.github, icon: RiGithubLine },
  { label: "LinkedIn", href: siteData.linkedin, icon: RiLinkedinLine },
  { label: "Instagram", href: siteData.instagram, icon: RiInstagramLine },
];

export default function HomePage() {
  const featuredProject = teamProjects[0];

  return (
    <div className="container space-y-6 sm:space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="surface-panel-strong rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <span className="eyebrow">{siteData.heroStatus}</span>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.35em] text-slate-400">
            {siteData.location}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Building digital products with
            <span className="title-gradient block">cinematic clarity.</span>
          </h1>
          <p className="body-copy mt-7 max-w-2xl text-base sm:text-lg">{siteData.heroIntro}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/projects" className="button-primary">
              View Projects
              <HiOutlineArrowRight className="text-lg" />
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact Me
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-label={item.label}
                  className="interactive-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-slate-200"
                  aria-label={item.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric, index) => (
              <Reveal
                key={metric.label}
                delay={0.08 + index * 0.06}
                className="surface-panel rounded-[1.5rem] p-5"
              >
                <p className="font-display text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-200">{metric.label}</p>
                <p className="mt-2 text-xs leading-6 text-slate-500">{metric.helper}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="surface-panel rounded-[2rem] p-4 sm:p-6">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.14),transparent_30%)]" />
            <Image
              src="/rashed-profile.jpg"
              alt={`${siteData.name} portrait`}
              width={900}
              height={1120}
              priority
              className="relative h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07111d] via-[#07111d]/65 to-transparent" />

            <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-200">
                Developer Note
              </p>
              <p className="mt-2 max-w-[12rem] text-sm text-white">
                Interfaces should feel precise, alive, and effortless to explore.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Featured momentum
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                  {featuredProject.title}
                </h2>
              </div>
              <span className="chip">2nd place</span>
            </div>
            <p className="body-copy mt-4 text-sm">{featuredProject.result}</p>
            <p className="mt-4 text-sm text-slate-300">{featuredProject.description}</p>
            <Link href="/projects" className="button-secondary mt-5">
              See the case studies
              <HiOutlineArrowUpRight className="text-base" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <span className="eyebrow">How I Build</span>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Design sensitivity, engineering clarity, and steady growth in one system.
          </h2>

          <div className="mt-8 grid gap-4">
            {capabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="font-display text-xl font-semibold text-white">{pillar.title}</p>
                <p className="body-copy mt-3 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="surface-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="eyebrow">Explore</span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
                A routed portfolio with space for every part of the story.
              </h2>
            </div>
            <span className="chip hidden sm:inline-flex">Multi-page flow</span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {pageHighlights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="interactive-ring rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="body-copy mt-3 text-sm">{item.summary}</p>
              </Link>
            ))}
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-cyan-300/18 bg-gradient-to-br from-cyan-300/10 via-transparent to-amber-300/10 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/85">Next move</p>
            <p className="mt-3 max-w-2xl text-sm text-slate-200">
              If you are hiring, collaborating, or just want to talk through an idea, the
              contact page is built to make that first step easy.
            </p>
            <Link href="/contact" className="button-primary mt-5">
              Open Contact Page
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
