"use client"

import { Link, usePathname } from "@/shared/nextjsImports"

import styles from "@/styles/header/Header.module.scss"

export default function Header() {
  const pathname = usePathname()

  return (
    <div className={styles.headerContainer}>
      <Link
        href="/statistic"
        className={
          pathname === "/statistic"
            ? styles.activeHeaderLink
            : styles.headerLink
        }
      >
        Statistic
      </Link>
      <Link
        href="/meta"
        className={
          pathname === "/meta" ? styles.activeHeaderLink : styles.headerLink
        }
      >
        Meta
      </Link>
      <Link
        href="/players"
        className={
          pathname === "/players" ? styles.activeHeaderLink : styles.headerLink
        }
      >
        Players
      </Link>

      <Link href="/" className={styles.websiteNameInHeader}>
        DOTACHECKER
      </Link>
    </div>
  )
}
