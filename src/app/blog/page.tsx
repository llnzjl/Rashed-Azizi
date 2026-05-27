import { Reveal } from "@/components/site/reveal";
import { blogNotes, siteData } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description: "Short learning notes from Rashed Azizi on web development, AI, and student projects.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="page-container py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold text-neutral-950 sm:text-5xl">
          Notes from the workbench
        </h1>
        <p className="mt-5 text-base leading-8 text-neutral-600">
          Writing space for {siteData.name}&apos;s web development, AI, and project learning notes.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4">
        {blogNotes.map((note, index) => (
          <Reveal key={note.title} delay={index * 0.05}>
            <article className="subtle-card rounded-lg p-6 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-300">
              <p className="text-sm font-medium text-neutral-400">{note.date}</p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-950">
                {note.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
                {note.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
