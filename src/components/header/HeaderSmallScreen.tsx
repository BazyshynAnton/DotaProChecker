import Links from "./Links"

import { useState } from "@/shared/reactImports"

import styles from "@/styles/header/Header.module.scss"

export default function HeaderSmallScreen() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className={
          !isOpen
            ? styles.headerContainer__burgerMenu_closed
            : styles.headerContainer__burgerMenu_open
        }
        onClick={handleOpenMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className={styles.headerContainer__menu}>
          <Links setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  )
}
