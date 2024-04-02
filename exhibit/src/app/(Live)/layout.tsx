// app/layout.tsx
import { Providers } from '../providers'
import { fonts } from '../fonts'
import PageWrapper from '@/components/PageWrapper'
import { Metadata } from 'next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>
          <PageWrapper>
            {children}
          </PageWrapper>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Om's Exhibit",
  description: "This is Om's personal portfolio website."
}
