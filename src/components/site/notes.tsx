import Link from "next/link";
import { HiArrowUpRight, HiOutlineArrowRight } from "react-icons/hi2";
import { blogNotes } from "@/data/portfolio";
import { SectionTitle } from "./section-title";
import { Reveal } from "./reveal";
export function Notes({ heading = true }: { heading?: boolean }) {
  return (
    <section
      id="blog"
      className={heading ? "section page-container" : "notes-page-content"}
    >
      {heading && (
        <SectionTitle
          number="06"
          eyebrow="NOTES FROM THE WORKBENCH"
          title={
            <>
              Learning <span className="muted-heading">out loud.</span>
            </>
          }
          action={
            <Link href="/blog" className="text-link">
              All notes <HiArrowUpRight />
            </Link>
          }
        />
      )}
      <div className="notes-grid">
        {blogNotes.map((note, index) => (
          <Reveal key={note.title}>
            <article className="note-card" id={`note-${index + 1}`}>
              <div className={`note-art note-art-${index}`} aria-hidden="true">
                {index === 0 ? (
                  <>
                    <span className="code-line">const curiosity = true;</span>
                    <span className="code-line indent">
                      while (curiosity) &#123;
                    </span>
                    <span className="code-line indent-two">
                      learn(); build();
                    </span>
                    <span className="code-line indent">&#125;</span>
                  </>
                ) : (
                  <>
                    <div className="wireframe-window">
                      <i />
                      <i />
                      <i />
                      <div />
                      <div />
                      <div />
                    </div>
                    <span className="wireframe-star">✦</span>
                  </>
                )}
              </div>
              <div className="note-content">
                <div className="note-meta mono">
                  <span>{index === 0 ? "LEARNING / AI" : "DESIGN / WEB"}</span>
                  <span>{note.date} · 1 MIN NOTE</span>
                </div>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Link href="/impossiblelist" className="goals-banner">
        <div>
          <span className="eyebrow">THE IMPOSSIBLE LIST</span>
          <h3>A little ambition goes a long way.</h3>
          <p>The things I’m working toward, one small step at a time.</p>
        </div>
        <span className="round-arrow">
          <HiOutlineArrowRight />
        </span>
      </Link>
    </section>
  );
}
