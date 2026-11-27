"use client";
import { useTranslation } from "@/lib/i18n/client";
import Image from "next/image";
import { LocalizedLink as Link } from "@/lib/i18n/client";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  siteData,
  certifications,
  educationItems,
  techStack,
} from "@/data/portfolio";
import { projects, journey, portrait } from "@/data/showcase";
import { PrintButton } from "@/components/site/print-button";
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="inner-page page-container cv-layout">
      <aside className="cv-sidebar">
        <Image src={portrait} alt="Rashed Azizi" width={170} height={170} />
        <p className="eyebrow">{t("CURRICULUM VITAE")}</p>
        <h1>
          Rashed Azizi<span className="accent-dot">.</span>
        </h1>
        <p>{t(siteData.title)}</p>
        <p>{t(siteData.heroIntro)}</p>
        <div className="cv-contact">
          <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          <a href={siteData.github} target="_blank" rel="noreferrer">
            <bdi>github.com/llnzjl ↗</bdi>
          </a>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer">
            <bdi>linkedin.com/in/llnzjl ↗</bdi>
          </a>
          <span>{t(siteData.location)}</span>
        </div>
        <PrintButton />
      </aside>
      <div className="cv-content">
        <section>
          <h2>{t("Selected projects")}</h2>
          {projects.map((project) => (
            <article className="cv-entry" key={project.id}>
              <span className="mono">
                {project.year} / {t(project.category)}
              </span>
              <a
                href={project.live || project.article || project.github}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{t(project.title)}</h3>
                <HiArrowUpRight />
              </a>
              <p>{t(project.description)}</p>
              <ul className="tech-tags">
                {project.technologies.map((tech) => (
                  <li key={tech}>{t(tech)}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section>
          <h2>{t("Education")}</h2>
          <article className="cv-entry">
            <span className="mono">{t("Present · South Korea")}</span>
            <h3>{t("Chungbuk National University")}</h3>
            <p>{t("Computer Science student")}</p>
          </article>
          {educationItems.map((item) => (
            <article key={item.school} className="cv-entry">
              <span className="mono">{t(item.period)}</span>
              <h3>{t(item.school)}</h3>
              <p>{t(item.degree)}</p>
            </article>
          ))}
        </section>
        <section>
          <h2>{t("Journey & collaboration")}</h2>
          {journey.slice(1).map((item) => (
            <article className="cv-entry" key={item.title}>
              <span className="mono">{t(item.date)}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.subtitle)}</p>
              <p>{t(item.description)}</p>
            </article>
          ))}
        </section>
        <section>
          <h2>{t("Technical toolkit")}</h2>
          <ul className="tech-tags">
            {[
              ...new Set([
                ...techStack.map((item) => item.name),
                "TypeScript",
                "C",
                "C++",
                "SQLite",
                "Claude API",
              ]),
            ].map((tech) => (
              <li key={tech}>{t(tech)}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{t("Certifications & awards")}</h2>
          {certifications.map((certificate) => (
            <article className="cv-entry" key={certificate.title}>
              <span className="mono">{t(certificate.completedOn)}</span>
              <a
                href={certificate.verificationUrl || certificate.courseUrl}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{t(certificate.title)}</h3>
                <HiArrowUpRight />
              </a>
              <p>{t(certificate.issuer)}</p>
              <p>{t(certificate.summary)}</p>
            </article>
          ))}
          <Link href="/education" className="text-link">
            {t("View original certificates")} <HiArrowUpRight />
          </Link>
        </section>
      </div>
    </div>
  );
}
