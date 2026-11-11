import { About } from "@/components/site/about";
import { PageHeading } from "@/components/site/section-title";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "About",
  description: "A student, a developer, and a work in progress.",
  path: "/about",
});
export default function Page() {
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow="ABOUT"
        title="A little about me"
        description="A student, a developer, and a work in progress."
      />
      <About />
    </div>
  );
}
