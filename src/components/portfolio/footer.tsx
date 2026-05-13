"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

import { siteData, type SectionId } from "@/data/portfolio";

type FooterProps = {
  onNavigate: (id: SectionId) => void;
};

const socialLinks = [
  { label: "GitHub", href: siteData.github, icon: RiGithubLine },
  { label: "LinkedIn", href: siteData.linkedin, icon: RiLinkedinLine },
  { label: "Instagram", href: siteData.instagram, icon: RiInstagramLine },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="pb-8 pt-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel flex flex-col gap-5 rounded-[2rem] px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-display text-lg font-semibold text-white">{siteData.name}</p>
            <p className="mt-2 text-sm text-slate-400">
              © 2026 {siteData.name}. Crafted with motion, glass, and intent.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
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

            <button
              type="button"
              onClick={() => onNavigate("home")}
              data-cursor-label="Top"
              className="interactive-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white"
            >
              Back to Top
              <HiOutlineArrowUpRight />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
