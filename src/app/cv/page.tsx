import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  siteData,
  certifications,
  educationItems,
  techStack,
} from "@/data/portfolio";
import { projects, journey, portrait } from "@/data/showcase";
import { PrintButton } from "@/components/site/print-button";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "CV",
  description:
    "Rashed Azizi’s education, projects, skills, certifications, and contact details.",
  path: "/cv",
});
export default function Page() {
  return (
    <div className="inner-page page-container cv-layout">
      <aside className="cv-sidebar">
        <Image src={portrait} alt="Rashed Azizi" width={170} height={170} />
        <p className="eyebrow">CURRICULUM VITAE</p>
        <h1>
          Rashed Azizi<span className="accent-dot">.</span>
        </h1>
        <p>{siteData.title}</p>
        <p>{siteData.heroIntro}</p>
        <div className="cv-contact">
          <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          <a href={siteData.github} target="_blank" rel="noreferrer">
            github.com/llnzjl ↗
          </a>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/llnzjl ↗
          </a>
          <span>{siteData.location}</span>
        </div>
        <PrintButton />
      </aside>
      <div className="cv-content">
        <section>
          <h2>Selected projects</h2>
          {projects.map((project) => (
            <article className="cv-entry" key={project.id}>
              <span className="mono">
                {project.year} / {project.category}
              </span>
              <a
                href={project.live || project.article || project.github}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{project.title}</h3>
                <HiArrowUpRight />
              </a>
              <p>{project.description}</p>
              <ul className="tech-tags">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section>
          <h2>Education</h2>
          <article className="cv-entry">
            <span className="mono">Present · South Korea</span>
            <h3>Chungbuk National University</h3>
            <p>Computer Science student</p>
          </article>
          {educationItems.map((item) => (
            <article key={item.school} className="cv-entry">
              <span className="mono">{item.period}</span>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
            </article>
          ))}
        </section>
        <section>
          <h2>Journey & collaboration</h2>
          {journey.slice(1).map((item) => (
            <article className="cv-entry" key={item.title}>
              <span className="mono">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </section>
        <section>
          <h2>Technical toolkit</h2>
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
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Certifications & awards</h2>
          {certifications.map((certificate) => (
            <article className="cv-entry" key={certificate.title}>
              <span className="mono">{certificate.completedOn}</span>
              <a
                href={certificate.verificationUrl || certificate.courseUrl}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{certificate.title}</h3>
                <HiArrowUpRight />
              </a>
              <p>{certificate.issuer}</p>
              <p>{certificate.summary}</p>
            </article>
          ))}
          <Link href="/education" className="text-link">
            View original certificates <HiArrowUpRight />
          </Link>
        </section>
      </div>
    </div>
  );
}
