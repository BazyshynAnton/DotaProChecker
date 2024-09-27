import type { Metadata } from "next"

import styles from "@/styles/statistic/ItemDescription.module.scss"

export const metadata: Metadata = {
  title: "Statistic | DotaChecker",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      {children}
      <div
        id="tooltip_portal"
        className={styles.itemDescriptionBackground}
      ></div>
    </section>
  )
}
