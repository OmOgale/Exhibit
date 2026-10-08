import { Analytics } from "@vercel/analytics/react";
import { newsreader, themeScript } from "@/styles/site";
import "@/styles/theme.css";

// The <html> shell shared by every route group's root layout.
export default function SiteDocument({ head, children }: { head?: React.ReactNode; children: React.ReactNode }) {
  return (
    <html lang="en" className={newsreader.variable} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layouts render <head> directly */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {head}
      </head>
      <body>
        {children}
        <Analytics mode={"production"} />
      </body>
    </html>
  );
}
