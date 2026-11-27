"use client";
import { useTranslation } from "@/lib/i18n/client";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { ProjectShowcase } from "@/components/site/project-showcase";
import { Skills } from "@/components/site/skills";
import { Certificates } from "@/components/site/certificates";
import { Journey } from "@/components/site/journey";
import { Notes } from "@/components/site/notes";
import { Contact } from "@/components/site/contact";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <div className="discipline-strip">
        <div className="page-container">
          <span>{t("DRIVEN BY CURIOSITY")}</span>
          <p>
            {t("Software development")} <i>✦</i> {t("Thoughtful interfaces")}{" "}
            <i>✦</i> {t("Applied AI")} <i>✦</i> {t("Always learning")}
          </p>
        </div>
      </div>
      <About />
      <ProjectShowcase />
      <Skills />
      <Certificates />
      <Journey />
      <Notes />
      <Contact />
    </>
  );
}
