"use client";
import { useTranslation } from "@/lib/i18n/client";
import { Contact } from "@/components/site/contact";
import { PageHeading } from "@/components/site/section-title";
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow={t("CONTACT")}
        title={t("Let’s make something")}
        description={t(
          "Open to internships, collaboration, and good conversations.",
        )}
      />
      <Contact />
    </div>
  );
}
