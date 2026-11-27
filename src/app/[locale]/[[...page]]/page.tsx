import { notFound } from "next/navigation";
import { getPortfolioMetadata, portfolioRoutes } from "@/lib/i18n/metadata";
import { isLocale } from "@/lib/i18n/locales";
import About from "@/views/about";
import Blog from "@/views/blog";
import Contact from "@/views/contact";
import Cv from "@/views/cv";
import Education from "@/views/education";
import Experience from "@/views/experience";
import Home from "@/views/home";
import ImpossibleList from "@/views/impossiblelist";
import Projects from "@/views/projects";

const views = {
  "": Home,
  about: About,
  blog: Blog,
  contact: Contact,
  cv: Cv,
  education: Education,
  experience: Experience,
  impossiblelist: ImpossibleList,
  projects: Projects,
} as const;

type Params = Promise<{ locale: string; page?: string[] }>;
export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioRoutes.map(({ route }) => ({ page: route ? [route] : [] }));
}

async function resolvePage(params: Params) {
  const { locale, page } = await params;
  const route = page?.join("/") ?? "";
  if (!isLocale(locale) || locale === "en" || !Object.hasOwn(views, route))
    notFound();
  return { locale, route: route as keyof typeof views };
}

export async function generateMetadata({ params }: { params: Params }) {
  const { locale, route } = await resolvePage(params);
  return getPortfolioMetadata(locale, route);
}

export default async function Page({ params }: { params: Params }) {
  const { route } = await resolvePage(params);
  const View = views[route];
  return <View />;
}
