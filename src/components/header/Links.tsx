import { Link, usePathname } from "@/shared/nextjsImports"

import styles from "@/styles/header/Header.module.scss"
import { Dispatch, SetStateAction } from "react"

export default function Links({
  setIsOpen,
}: {
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}) {
  const pathname = usePathname()

  const handleOpenMenuClick = () => {
    setIsOpen && setIsOpen(false)
  }

  return (
    <>
      <Link
        href="/"
        className={styles.websiteNameInHeader}
        onClick={handleOpenMenuClick}
      >
        dotachecker
      </Link>
      <Link
        href="/statistic"
        className={
          pathname === "/statistic"
            ? styles.activeHeaderLink
            : styles.headerLink
        }
        onClick={handleOpenMenuClick}
      >
        Statistic
      </Link>
      <Link
        href="/meta"
        className={
          pathname === "/meta" ? styles.activeHeaderLink : styles.headerLink
        }
        onClick={handleOpenMenuClick}
      >
        Meta
      </Link>
      <Link
        href="/players"
        className={
          pathname === "/players" ? styles.activeHeaderLink : styles.headerLink
        }
        onClick={handleOpenMenuClick}
      >
        Players
      </Link>
    </>
  )
}
