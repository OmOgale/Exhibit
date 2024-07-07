// app/layout.tsx
import { Providers } from "../../providers";
import { fonts } from "../../fonts";
import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import { FiHome } from "react-icons/fi";
import { HeaderLink } from "@/components/PageWrapper";
import { RiArticleLine } from "react-icons/ri";
import { Analytics } from "@vercel/analytics/react";

const headerLists: Array<HeaderLink> = [
  {
    url: "/",
    icon: <FiHome />,
    name: "Home",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>
      </head>
      <body>
        <Providers>
          <PageWrapper pgColor={"#779573"} headerLists={headerLists}>
            {children}
            <Analytics mode={"production"}/>
          </PageWrapper>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Om's Exhibit",
  description: "This is Om's personal portfolio website.",
  icons: "/om_photo.png",
};
