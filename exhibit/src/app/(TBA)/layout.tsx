import SiteDocument from "@/components/home/SiteDocument";
import PageShell from "@/components/home/PageShell";
import { siteMetadata } from "@/utils/site";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument>
      <PageShell section={{ label: "Projects", href: "/projects" }}>{children}</PageShell>
    </SiteDocument>
  );
}

export const metadata = siteMetadata({
  title: "Projects | Om Ogale",
  description: "Things Om Ogale has built.",
  path: "/projects",
});
