// app/layout.tsx
import { Providers } from '../providers'
import { fonts } from '../fonts'
import PageWrapper from '@/components/PageWrapper'
import { Metadata } from 'next'
import { HeaderLink } from '@/components/PageWrapper'
import { RiArticleLine } from "react-icons/ri";

const headerLists: Array<HeaderLink> = [
  {
    url: "/blog",
    icon: <RiArticleLine />,
    name: "Blog",
  }
]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>
          <PageWrapper headerLists={headerLists}>
            {children}
          </PageWrapper>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Om's Exhibit",
  description: "This is Om's personal portfolio website.",
  icons: "/om_photo.png",
}
