import Link from "next/link";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";
import { siteData } from "@/data/portfolio";
import { SeoulTime } from "./site-experience";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-top">
          <Link href="/" className="brand">
            <span className="monogram">
              RA<span>.</span>
            </span>
            <span>
              Always learning.
              <br />
              <small>Always building.</small>
            </span>
          </Link>
          <nav aria-label="Footer navigation">
            <Link href="/blog">Notes</Link>
            <Link href="/impossiblelist">
              Impossible list <HiArrowUpRight />
            </Link>
            <Link href="/cv">CV</Link>
            <a
              href={siteData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <RiGithubLine />
            </a>
            <a
              href={siteData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <RiLinkedinLine />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rashed Azizi</span>
          <span>Built with curiosity & Next.js</span>
          <span className="location">
            <i /> South Korea <SeoulTime />
          </span>
        </div>
      </div>
    </footer>
  );
}
