import Header from "@/components/header/Header"
import StoreProvider from "@/store/StoreProvider"

import type { Metadata } from "next"
import { Roboto } from "next/font/google"

import styles from "@/styles/statistic/ItemDescription.module.scss"

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Statistic | DotaChecker",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className={roboto.className}>
      <Header />
      {children}
      <div
        id="tooltip_portal"
        className={styles.itemDescriptionBackground}
      ></div>
    </section>
  )
}
