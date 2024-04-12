import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - HashGuard Media',
    default: 'HashGuard Media - Protecting your digital assets',
  },
  description:
    'HashGuard Media is a digital asset protection platform that helps you secure your digital assets.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        <main className="">{children}</main>
        <Footer />
        <div id="portal-dialog-root"></div>
      </body>
    </html>
  )
}
