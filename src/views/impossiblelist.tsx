"use client";
import { useTranslation } from "@/lib/i18n/client";
import { Goals } from "@/components/site/goals";
import { PageHeading } from "@/components/site/section-title";
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow={t("THE IMPOSSIBLE LIST")}
        title={t("Not impossible. Just not yet")}
        description={t(
          "A few things I want to keep moving toward. Some are in motion; others are a reminder of where I want to go.",
        )}
      />
      <Goals />
    </div>
  );
}
