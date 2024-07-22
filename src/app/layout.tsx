import Header from '@/components/header/Header'

import type { Metadata } from 'next'

import './globals.scss'

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DotaChecker',
  icons: {
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

//https://wiki.teamfortress.com/wiki/WebAPI/GetMatchDetails
