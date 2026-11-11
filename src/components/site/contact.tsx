"use client";
import { useState } from "react";
import {
  HiArrowUpRight,
  HiOutlineClipboard,
  HiOutlineCheck,
} from "react-icons/hi2";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { siteData } from "@/data/portfolio";
import { Reveal } from "./reveal";
export function Contact() {
  const [copyState, setCopyState] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteData.email);
      setCopyState("Email copied");
    } catch {
      setCopyState(
        "Select the email address to copy it, or use the email link.",
      );
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orbit" aria-hidden="true" />
      <Reveal className="page-container contact-inner">
        <p className="eyebrow">
          <span>07 /</span> WHAT’S NEXT?
        </p>
        <h2>
          Have an idea?
          <br />
          Let’s build something <span className="gradient-text">great.</span>
        </h2>
        <p className="contact-description">
          An internship, a collaboration, or a conversation about something
          worth building. I’d love to hear from you.
        </p>
        <div className="email-row">
          <a href={`mailto:${siteData.email}`}>
            {siteData.email}
            <HiArrowUpRight />
          </a>
          <button
            className="icon-button"
            onClick={copyEmail}
            aria-label="Copy email address"
          >
            {copyState === "Email copied" ? (
              <HiOutlineCheck />
            ) : (
              <HiOutlineClipboard />
            )}
          </button>
        </div>
        <p className="copy-status" role="status">
          {copyState}
        </p>
        <div className="contact-socials">
          <a href={siteData.github} target="_blank" rel="noreferrer">
            <RiGithubLine />
            GitHub
            <HiArrowUpRight />
          </a>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer">
            <RiLinkedinLine />
            LinkedIn
            <HiArrowUpRight />
          </a>
          <span>
            <i className="status-dot" /> Open to opportunities
          </span>
        </div>
      </Reveal>
    </section>
  );
}
