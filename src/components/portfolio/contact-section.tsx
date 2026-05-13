"use client";

import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

import { contactHighlights, siteData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/portfolio/contact-form";

const links = [
  {
    label: "Email",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
    icon: HiOutlineEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/llnzjl",
    href: siteData.linkedin,
    icon: RiLinkedinLine,
  },
  {
    label: "GitHub",
    value: "github.com/llnzjl",
    href: siteData.github,
    icon: RiGithubLine,
  },
  {
    label: "Instagram",
    value: "@le_.han06",
    href: siteData.instagram,
    icon: RiInstagramLine,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something thoughtful, modern, and memorable."
          description="This final section keeps the same premium tone while staying practical. It works nicely as a lightweight static-site contact workflow and is easy to upgrade to a real API later."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="section-shell p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-xl text-cyan-200">
                <HiOutlineMapPin />
              </span>
              <div>
                <p className="text-sm text-slate-400">Current base</p>
                <p className="mt-1 text-lg font-medium text-white">{siteData.location}</p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {contactHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    data-cursor-label={item.label}
                    className="interactive-ring flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-lg text-cyan-200">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm text-white">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
