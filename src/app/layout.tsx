import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import TooltipItemPortal from "@/components/portals/TooltipItemPortal"
import TooltipAbilityPortal from "@/components/portals/TooltipAbilityPortal"

import StoreProvider from "@/store/StoreProvider"

import type { Metadata } from "next"
import { Roboto } from "next/font/google"

import "./globals.scss"

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "DotaScope",
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Header />
          <div className="wrapper">
            {children}
            <TooltipItemPortal />
            <TooltipAbilityPortal />
          </div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  )
}
