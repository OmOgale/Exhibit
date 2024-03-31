// app/layout.tsx
import { Providers } from '../providers'
import { fonts } from '../fonts'
import PageWrapper from '@/components/PageWrapper'

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
