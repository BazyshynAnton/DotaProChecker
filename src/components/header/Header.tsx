"use client"
import HeaderSmallScreen from "./HeaderSmallScreen"
import HeaderBigScreen from "./HeaderBigScreen"

import { useEffect, useState } from "@/shared/reactImports"

import styles from "@/styles/header/Header.module.scss"

export default function Header() {
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
      {!smallHeader ? <HeaderBigScreen /> : <HeaderSmallScreen />}
    </div>
  )
}
