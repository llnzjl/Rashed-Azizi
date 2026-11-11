"use client";
import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { journey } from "@/data/showcase";
import { SectionTitle } from "./section-title";
import { Reveal } from "./reveal";
export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 75%"],
  });
  const reduced = useReducedMotion();
  return (
    <section id="journey" className="section page-container">
      <SectionTitle
        number="05"
        eyebrow="THE JOURNEY"
        title={
          <>
            Small steps.
            <br />
            <span className="muted-heading">Meaningful progress.</span>
          </>
        }
        description="The learning, projects, and people that are shaping my path."
      />
      <div className="journey-layout">
        <div className="journey-aside">
          <span className="journey-symbol" aria-hidden="true">
            ↗
          </span>
          <p>
            Still at the beginning.
            <br />
            <strong>And that’s the exciting part.</strong>
          </p>
          <span className="mono">LEARN → BUILD → REPEAT</span>
        </div>
        <div className="timeline" ref={ref}>
          <div className="timeline-track">
            <motion.div style={{ scaleY: reduced ? 1 : scrollYProgress }} />
          </div>
          {journey.map((item, index) => (
            <Reveal key={item.title} className="timeline-entry">
              <span className="timeline-dot" />
              <details open={index < 4}>
                <summary>
                  <span className="mono timeline-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <span className="timeline-subtitle">{item.subtitle}</span>
                  <span className="timeline-expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.description}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
