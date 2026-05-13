import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

import { routeItems, siteData } from "@/data/portfolio";

const socialLinks = [
  { label: "GitHub", href: siteData.github, icon: RiGithubLine },
  { label: "LinkedIn", href: siteData.linkedin, icon: RiLinkedinLine },
  { label: "Instagram", href: siteData.instagram, icon: RiInstagramLine },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 pb-8 pt-10">
      <div className="container">
        <div className="glass-panel rounded-[2rem] px-6 py-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="font-display text-2xl font-semibold text-white">{siteData.name}</p>
              <p className="body-copy mt-3 max-w-md">
                A design-led developer portfolio built to feel cinematic, organized, and ready
                for real opportunities.
              </p>
              <Link href="/contact" className="button-secondary mt-6 inline-flex">
                Reach Out
                <HiOutlineArrowUpRight className="text-base" />
              </Link>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Pages</p>
              <div className="mt-4 grid gap-3">
                {routeItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Elsewhere</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-label={item.label}
                      className="interactive-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-slate-200"
                      aria-label={item.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
              <p className="mt-5 text-sm text-slate-400">{siteData.email}</p>
              <p className="mt-2 text-sm text-slate-500">Copyright 2026 {siteData.name}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
