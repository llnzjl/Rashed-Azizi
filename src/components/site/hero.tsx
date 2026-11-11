"use client";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  HiArrowDown,
  HiArrowUpRight,
  HiOutlineCodeBracket,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { siteData } from "@/data/portfolio";
import { portrait } from "@/data/showcase";
import { Magnetic } from "./magnetic";
import { SeoulTime } from "./site-experience";

export function Hero() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 100, damping: 25 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 25 });
  return (
    <section
      id="home"
      className="hero"
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const box = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--spotlight-x",
          `${event.clientX - box.left}px`,
        );
        event.currentTarget.style.setProperty(
          "--spotlight-y",
          `${event.clientY - box.top}px`,
        );
      }}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="page-container hero-content">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" /> Open to internships & collaboration
          </div>
          <p className="hero-greeting">Hello, world. I’m Rashed.</p>
          <h1>
            I build digital
            <br />
            <span className="gradient-text">experiences.</span>
          </h1>
          <p className="hero-description">
            A computer science student turning curiosity into thoughtful
            software. Exploring the intersection of{" "}
            <strong>web development, AI, and human experience.</strong>
          </p>
          <div className="hero-ctas">
            <Magnetic>
              <Link href="/#projects" className="button-primary">
                Explore my work <HiArrowUpRight />
              </Link>
            </Magnetic>
            <Link href="/#contact" className="button-secondary magnetic">
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-socials">
            <span className="mono">FIND ME ON</span>
            <a href={siteData.github} target="_blank" rel="noreferrer">
              <RiGithubLine /> GitHub <HiArrowUpRight />
            </a>
            <a href={siteData.linkedin} target="_blank" rel="noreferrer">
              <RiLinkedinLine /> LinkedIn <HiArrowUpRight />
            </a>
          </div>
        </div>
        <div
          className="portrait-scene"
          onPointerMove={(event) => {
            if (reduced || event.pointerType !== "mouse") return;
            const box = event.currentTarget.getBoundingClientRect();
            x.set(((event.clientX - box.left) / box.width - 0.5) * 8);
            y.set(-((event.clientY - box.top) / box.height - 0.5) * 8);
          }}
          onPointerLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <span className="scene-coordinate mono">37° N · SOUTH KOREA</span>
          <motion.div className="portrait-frame" style={{ rotateX, rotateY }}>
            <Image
              src={portrait}
              alt="Rashed Azizi by the river in South Korea"
              width={900}
              height={1445}
              priority
              sizes="(max-width: 700px) 80vw, 420px"
              className="hero-portrait"
            />
            <div className="portrait-shade" />
            <div className="portrait-caption">
              <span>Rashed Azizi</span>
              <small>DEVELOPER & LIFELONG LEARNER</small>
            </div>
            <span className="portrait-corner top-left" />
            <span className="portrait-corner bottom-right" />
          </motion.div>
          <div className="floating-note code-note">
            <span className="note-icon">
              <HiOutlineCodeBracket />
            </span>
            <div>
              <small>THE MINDSET</small>
              <strong>Think. Build. Iterate.</strong>
            </div>
            <span className="note-spark">✦</span>
          </div>
          <div className="floating-note study-note">
            <span className="status-dot" />
            <span>CS @ Chungbuk National University</span>
          </div>
          <span className="scene-plus" aria-hidden="true">
            +
          </span>
        </div>
      </div>
      <div className="page-container hero-bottom">
        <a href="#about" className="scroll-cue">
          <HiArrowDown />
          <span className="mono">SCROLL TO EXPLORE</span>
        </a>
        <span className="hero-location">
          <HiOutlineMapPin /> Based in South Korea <SeoulTime />
        </span>
      </div>
    </section>
  );
}
