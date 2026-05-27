import { Reveal } from "@/components/site/reveal";
import { contactMethods, siteData } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Rashed Azizi for internships, collaboration, and student opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="page-container py-20 sm:py-24">
      <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
            Let&apos;s get in touch
          </h1>
          <p className="mt-5 max-w-md text-base leading-8 text-neutral-600">
            I am open to internships, student collaboration, junior opportunities, and practical
            project conversations.
          </p>
          <p className="mt-4 text-sm text-neutral-500">{siteData.location}</p>
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
    </section>
  );
}
