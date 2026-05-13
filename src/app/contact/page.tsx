import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

import { ContactForm } from "@/components/portfolio/contact-form";
import { PageIntro } from "@/components/site/page-intro";
import { Reveal } from "@/components/site/reveal";
import {
  contactHighlights,
  contactLinks,
  serviceOffers,
  siteData,
} from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Rashed Azizi for internships, junior opportunities, and collaboration.",
  path: "/contact",
});

const iconMap = {
  email: HiOutlineEnvelope,
  linkedin: RiLinkedinLine,
  github: RiGithubLine,
  instagram: RiInstagramLine,
};

export default function ContactPage() {
  return (
    <div className="container space-y-6 sm:space-y-8">
      <PageIntro
        eyebrow="Contact"
        title="Let's connect around internships, projects, and meaningful learning opportunities."
        description="This page keeps the same premium tone while staying practical. It is designed to help student opportunities move from first interest to a real conversation."
        chips={["Open for internships", "Student collaboration", "Static-friendly workflow"]}
        actions={[
          { href: `mailto:${siteData.email}`, label: "Email Me", external: true },
          {
            href: siteData.github,
            label: "View GitHub",
            variant: "secondary",
            external: true,
          },
        ]}
      />

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-6">
          <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
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
          </Reveal>

          <Reveal delay={0.05} className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Contribution areas</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              What I can contribute to.
            </h2>
            <div className="mt-6 grid gap-4">
              {serviceOffers.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="font-display text-xl font-semibold text-white">{item.title}</p>
                  <p className="body-copy mt-3 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Direct links</p>
            <div className="mt-6 grid gap-3">
              {contactLinks.map((item) => {
                const Icon = iconMap[item.icon];

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
          </Reveal>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
