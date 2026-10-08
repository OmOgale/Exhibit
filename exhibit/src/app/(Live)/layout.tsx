import SiteDocument from "@/components/home/SiteDocument";
import { SITE_NAME, SITE_URL, siteMetadata } from "@/utils/site";

// Tells search engines the site's name, so results read "Om Ogale" rather than the host's.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument
      head={<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />}
    >
      {children}
    </SiteDocument>
  );
}

export const metadata = siteMetadata({
  title: "Om Ogale",
  description:
    "Computer Science student at the University of Waterloo, building at the intersection of ML, infrastructure, and distributed systems. Looking for 2027 new grad roles.",
  path: "/",
});
