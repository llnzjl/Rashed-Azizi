import Link from "next/link";
import { HiOutlineEnvelope, HiOutlineKey } from "react-icons/hi2";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

import { contactMethods, minimalNavItems, siteData } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="page-container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-neutral-950">{siteData.name}</p>
          <p className="mt-2 text-sm text-neutral-500">
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
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-950"
          >
            <RiGithubLine aria-hidden="true" />
          </a>
          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-950"
          >
            <RiLinkedinLine aria-hidden="true" />
          </a>
          <a
            href={contactMethods[0].href}
            aria-label="Email"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-950"
          >
            <HiOutlineEnvelope aria-hidden="true" />
          </a>
          <a
            href="#contact"
            aria-label="GPG key"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-950"
          >
            <HiOutlineKey aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
