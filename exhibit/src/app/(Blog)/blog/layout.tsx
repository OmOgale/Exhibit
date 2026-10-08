import SiteDocument from "@/components/home/SiteDocument";
import PageShell from "@/components/home/PageShell";
import { siteMetadata } from "@/utils/site";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument
      head={
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
      }
    >
      <PageShell section={{ label: "Blog", href: "/blog" }}>{children}</PageShell>
    </SiteDocument>
  );
}

export const metadata = siteMetadata({
  title: "Blog | Om Ogale",
  description: "Writing by Om Ogale.",
  path: "/blog",
});
