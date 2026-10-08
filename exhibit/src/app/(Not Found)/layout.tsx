import SiteDocument from "@/components/home/SiteDocument";
import { siteMetadata } from "@/utils/site";

export default function NotFoundLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument>{children}</SiteDocument>;
}

export const metadata = siteMetadata({ title: "Page not found | Om Ogale" });
