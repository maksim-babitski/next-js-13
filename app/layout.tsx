import type { Metadata } from 'next'
import './globals.css'
import { TheHeader } from '@/components/TheHeader'
import { TheFooter } from '@/components/TheFooter'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TheHeader />
          <main className="content">{children}</main> {/*сюда можем подключать redux, provider */}
          <TheFooter />
        </Providers>
      </body>
    </html>
  )
}
