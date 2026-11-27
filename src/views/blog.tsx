"use client";
import { useTranslation } from "@/lib/i18n/client";
import { Notes } from "@/components/site/notes";
import { PageHeading } from "@/components/site/section-title";
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow={t("BLOG")}
        title={t("Notes from the workbench")}
        description={t(
          "Short notes on web development, AI, and the things I’m learning as I build.",
        )}
      />
      <Notes heading={false} />
    </div>
  );
}
