import { Metadata } from "next";
import SiteDocument from "@/components/home/SiteDocument";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument>{children}</SiteDocument>;
}

export const metadata: Metadata = {
  title: "Om Ogale",
  description: "Software engineer and Computer Science student at the University of Waterloo.",
};
