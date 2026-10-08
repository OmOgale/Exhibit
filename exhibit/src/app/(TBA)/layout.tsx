import { Metadata } from "next";
import SiteDocument from "@/components/home/SiteDocument";
import PageShell from "@/components/home/PageShell";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument>
      <PageShell section={{ label: "Projects", href: "/projects" }}>{children}</PageShell>
    </SiteDocument>
  );
}

export const metadata: Metadata = {
  title: "Projects | Om Ogale",
  description: "Things Om Ogale has built.",
  icons: "/om_photo.jpg",
};
