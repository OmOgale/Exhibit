import { Metadata } from "next";

// The site's primary address. omogale.com and omogale.vercel.app both 308-redirect here.
export const SITE_URL = "https://www.omogale.com";
export const SITE_NAME = "Om Ogale";

// Shared by every route group's root layout, so each one only adds its own title, description and path.
export function siteMetadata({ title, description, path }: { title: string; description?: string; path?: string }): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: path ? { canonical: path } : undefined,
    openGraph: { siteName: SITE_NAME, title, description, url: path, type: "website", locale: "en_CA" },
  };
}
