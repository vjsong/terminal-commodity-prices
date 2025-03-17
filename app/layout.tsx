import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vincent\'s Personal Website',
  description: 'Personal website of Vincent Song, Metals Trader',
  generator: 'sonvi',
  icons: {
    icon: [
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
