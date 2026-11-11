"use client";
import Image from "next/image";
import { useState } from "react";
import {
  HiArrowUpRight,
  HiArrowsPointingOut,
  HiOutlineTrophy,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { certifications, type Certification } from "@/data/portfolio";
import { Dialog } from "./dialog";
import { SectionTitle } from "./section-title";
import { Reveal } from "./reveal";

const ordered = [...certifications].sort(
  (a, b) =>
    Number(b.title.includes("2nd Place")) -
    Number(a.title.includes("2nd Place")),
);
export function Certificates({ heading = true }: { heading?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Certification | null>(null);
  const items = ordered.filter(
    (c) =>
      filter === "All" ||
      (filter === "Awards & hackathons"
        ? c.platform === "Hackathon"
        : c.platform !== "Hackathon"),
  );
  return (
    <section
      id="certificates"
      className={
        heading ? "section section-tinted" : "certificate-page-content"
      }
    >
      <div className={heading ? "page-container" : ""}>
        {heading && (
          <SectionTitle
            number="04"
            eyebrow="LEARNING, WITH PROOF"
            title={
              <>
                Milestones worth
                <br />
                <span className="muted-heading">keeping.</span>
              </>
            }
            description="From a hackathon podium to new ways of working with AI."
          />
        )}
        <div className="filter-bar" aria-label="Filter certificates">
          {["All", "Awards & hackathons", "Certifications"].map((value) => (
            <button
              className={filter === value ? "filter active" : "filter"}
              aria-pressed={filter === value}
              key={value}
              onClick={() => setFilter(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="certificate-grid">
          {items.map((certificate, index) => (
            <Reveal
              key={certificate.title}
              className={
                certificate.title.includes("2nd Place")
                  ? "certificate-wrap award-feature"
                  : "certificate-wrap"
              }
              delay={index * 0.03}
            >
              <article className="certificate-card">
                <button
                  className="certificate-image"
                  onClick={() => setSelected(certificate)}
                  aria-label={`Preview ${certificate.title}`}
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={800}
                    height={620}
                    sizes="(max-width: 700px) 90vw, 440px"
                  />
                  <span className="certificate-zoom">
                    <HiArrowsPointingOut />
                  </span>
                </button>
                <div className="certificate-body">
                  <div className="certificate-meta">
                    {certificate.title.includes("2nd Place") ? (
                      <HiOutlineTrophy />
                    ) : (
                      <HiOutlineCheckBadge />
                    )}
                    <span>{certificate.issuer}</span>
                    <span>{certificate.completedOn}</span>
                  </div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.summary}</p>
                  <div className="certificate-links">
                    <button onClick={() => setSelected(certificate)}>
                      View certificate <HiArrowUpRight />
                    </button>
                    {certificate.verificationUrl ? (
                      <a
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Verify <HiOutlineCheckBadge />
                      </a>
                    ) : (
                      <a
                        href={certificate.courseUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {certificate.platform === "Hackathon"
                          ? "Event story"
                          : "Course"}{" "}
                        <HiArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {selected && (
          <Dialog title={selected.title} onClose={() => setSelected(null)} wide>
            <div className="certificate-full">
              <Image
                src={selected.image}
                alt={selected.title}
                width={1600}
                height={1200}
                sizes="95vw"
              />
            </div>
            <div className="certificate-viewer-caption">
              <p>
                {selected.issuer} · {selected.completedOn}
              </p>
              <a
                className="text-link"
                href={selected.verificationUrl || selected.courseUrl}
                target="_blank"
                rel="noreferrer"
              >
                {selected.verificationUrl
                  ? "Verify certificate"
                  : "View source"}{" "}
                <HiArrowUpRight />
              </a>
            </div>
          </Dialog>
        )}
      </div>
    </section>
  );
}
