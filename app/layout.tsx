import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ryan Neville | Software Developer',
  description:
    'Personal portfolio of Ryan Neville — Software Developer based in Ottawa, Ontario, Canada.',
  openGraph: {
    title: 'Ryan Neville | Software Developer',
    description: 'Software Developer at Kinaxis, based in Ottawa, Ontario, Canada.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
