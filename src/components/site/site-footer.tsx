import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

import { contactMethods, minimalNavItems, siteData } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1252aa]/15 bg-white/72 backdrop-blur-xl">
      <div className="page-container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">{siteData.name}</p>
          <p className="mt-2 text-sm text-slate-500">
            Copyright 2026 {siteData.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
          {minimalNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="quiet-link focus-ring rounded text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1252aa]/25 bg-white text-[#1252aa] transition-colors hover:border-[#0737c6]/35 hover:bg-[#1252aa]/10 hover:text-[#0737c6]"
          >
            <RiGithubLine aria-hidden="true" />
          </a>
          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1252aa]/25 bg-white text-[#1252aa] transition-colors hover:border-[#0737c6]/35 hover:bg-[#1252aa]/10 hover:text-[#0737c6]"
          >
            <RiLinkedinLine aria-hidden="true" />
          </a>
          <a
            href={contactMethods[0].href}
            aria-label="Email"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-700 transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-900"
          >
            <HiOutlineEnvelope aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
