import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next'
import { fonts } from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        {children}
        <Analytics mode={"production"} />
      </body>
    </html>
  );
}


export const metadata: Metadata = {
    title: "Om's Exhibit",
    description: "This is Om's personal portfolio website.",
    icons: "/om_photo.png",
};
