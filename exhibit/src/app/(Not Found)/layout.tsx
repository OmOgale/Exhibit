import { Metadata } from "next";
import SiteDocument from "@/components/home/SiteDocument";

export default function NotFoundLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument>{children}</SiteDocument>;
}

export const metadata: Metadata = {
  title: "Page not found | Om Ogale",
};
