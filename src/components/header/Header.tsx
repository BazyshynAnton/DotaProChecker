"use client"
import { Link, usePathname } from "@/shared/nextjsImports"

import styles from "@/styles/header/Header.module.scss"
import { useEffect, useState } from "react"
import HeaderSmallScreen from "./headerSmallScreen/HeaderSmallScreen"

export default function Header() {
  const pathname = usePathname()

  const [smallHeader, setSmallHeader] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResizeEvent = () => {
        if (window.innerWidth <= 550) setSmallHeader(true)
        else setSmallHeader(false)
      }

      window.addEventListener("resize", handleResizeEvent)
      return () => {
        window.removeEventListener("resize", handleResizeEvent)
      }
    }
  }, [])

  return (
    <div className={styles.headerContainer}>
      {!smallHeader && (
        <>
          <Link href="/" className={styles.websiteNameInHeader}>
            DOTACHECKER
          </Link>
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
              pathname === "/players"
                ? styles.activeHeaderLink
                : styles.headerLink
            }
          >
            Players
          </Link>
        </>
      )}

      {smallHeader && <HeaderSmallScreen />}
    </div>
  )
}
