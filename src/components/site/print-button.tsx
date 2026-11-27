"use client";
import { useTranslation } from "@/lib/i18n/client";
import { HiOutlinePrinter } from "react-icons/hi2";
export function PrintButton() {
  const { t } = useTranslation();
  return (
    <button
      className="button-secondary print-button"
      onClick={() => window.print()}
    >
      {t("Print / save PDF")} <HiOutlinePrinter />
    </button>
  );
}
