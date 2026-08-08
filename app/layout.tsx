import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <head>
        {/*
          The hero photo is a CSS background, so the preload scanner can't find it
          until the stylesheet has been parsed and matched. Preloading it starts
          the fetch with the document instead.
        */}
        <link rel="preload" as="image" href="/background_photo.jpg" fetchPriority="high" />
        {/* Scroll reveals are JS-driven; without JS the content must still show. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
