import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../src/app/styles/index.scss'
import { Header } from '@/widgets/header'
import { ScrollArea } from '@/shared/ui'
import { Providers, ProgressProvider } from '@/app/providers'
import { Toaster } from 'sonner'

const montserrat = Montserrat({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Next Food',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ProgressProvider>
          <Providers>
            <Header />
            <div className="wrapper">
              <ScrollArea className="scrollArea">{children}</ScrollArea>
            </div>
          </Providers>
        </ProgressProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            unstyled: true,
            duration: 30000,

            classNames: {
              error: 'toast toastError',
              success: 'toast toastSuccess',
            },
          }}
        />
      </body>
    </html>
  )
}
