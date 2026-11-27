"use client";
import { useTranslation } from "@/lib/i18n/client";
import { LocalizedLink as Link } from "@/lib/i18n/client";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";
import { siteData } from "@/data/portfolio";
import { SeoulTime } from "./site-experience";

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-top">
          <Link href="/" className="brand">
            <span className="monogram" dir="ltr">
              RA<span>.</span>
            </span>
            <span>
              {t("Always learning.")}
              <br />
              <small>{t("Always building.")}</small>
            </span>
          </Link>
          <nav aria-label={t("Footer navigation")}>
            <Link href="/blog">{t("Notes")}</Link>
            <Link href="/impossiblelist">
              {t("Impossible list")} <HiArrowUpRight />
            </Link>
            <Link href="/cv">{t("CV")}</Link>
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
          <span>{t("Built with curiosity & Next.js")}</span>
          <span className="location">
            <i /> {t("South Korea")} <SeoulTime />
          </span>
        </div>
      </div>
    </footer>
  );
}
