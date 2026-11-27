import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/locales";
import { SiteLayout } from "@/components/site/site-layout";

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .map((locale) => ({ locale }));
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <SiteLayout locale={locale}>{children}</SiteLayout>;
}
