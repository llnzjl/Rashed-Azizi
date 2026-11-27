"use client";
import { useTranslation } from "@/lib/i18n/client";
import { About } from "@/components/site/about";
import { PageHeading } from "@/components/site/section-title";
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow={t("ABOUT")}
        title={t("A little about me")}
        description={t("A student, a developer, and a work in progress.")}
      />
      <About />
    </div>
  );
}
