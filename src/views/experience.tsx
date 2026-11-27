"use client";
import { useTranslation } from "@/lib/i18n/client";
import { Journey } from "@/components/site/journey";
import { PageHeading } from "@/components/site/section-title";
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow={t("EXPERIENCE")}
        title={t("The path so far")}
        description={t(
          "Real projects, academic milestones, and learning in public.",
        )}
      />
      <Journey />
    </div>
  );
}
