"use client";
import { useTranslation } from "@/lib/i18n/client";
import { LocalizedLink as Link } from "@/lib/i18n/client";
import { HiArrowUpRight, HiOutlineArrowRight } from "react-icons/hi2";
import { blogNotes } from "@/data/portfolio";
import { SectionTitle } from "./section-title";
import { Reveal } from "./reveal";
export function Notes({ heading = true }: { heading?: boolean }) {
  const { t } = useTranslation();
  return (
    <section
      id="blog"
      className={heading ? "section page-container" : "notes-page-content"}
    >
      {heading && (
        <SectionTitle
          number="06"
          eyebrow={t("NOTES FROM THE WORKBENCH")}
          title={
            <>
              <span className="muted-heading">{t("Learning in public.")}</span>
            </>
          }
          action={
            <Link href="/blog" className="text-link">
              {t("All notes")} <HiArrowUpRight />
            </Link>
          }
        />
      )}
      <div className="notes-grid">
        {blogNotes.map((note, index) => (
          <Reveal key={note.title}>
            <article className="note-card" id={`note-${index + 1}`}>
              <div
                className={`note-art note-art-${index}`}
                aria-hidden="true"
                dir="ltr"
              >
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
                  <span>
                    {index === 0 ? t("LEARNING / AI") : t("DESIGN / WEB")}
                  </span>
                  <span>
                    {t(note.date)} · {t("1 min read")}
                  </span>
                </div>
                <h3>{t(note.title)}</h3>
                <p>{t(note.description)}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Link href="/impossiblelist" className="goals-banner">
        <div>
          <span className="eyebrow">{t("THE IMPOSSIBLE LIST")}</span>
          <h3>{t("A little ambition goes a long way.")}</h3>
          <p>{t("The things I’m working toward, one small step at a time.")}</p>
        </div>
        <span className="round-arrow">
          <HiOutlineArrowRight />
        </span>
      </Link>
    </section>
  );
}
