import { Contact } from "@/components/site/contact";
import { PageHeading } from "@/components/site/section-title";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({
  title: "Contact",
  description: "Open to internships, collaboration, and good conversations.",
  path: "/contact",
});
export default function Page() {
  return (
    <div className="inner-page page-container">
      <PageHeading
        eyebrow="CONTACT"
        title="Let’s make something"
        description="Open to internships, collaboration, and good conversations."
      />
      <Contact />
    </div>
  );
}
