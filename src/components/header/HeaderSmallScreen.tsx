import Links from './Links'

import { useState } from '@/shared/reactImports'

import styles from '@/styles/header/Header.module.scss'

export default function HeaderSmallScreen() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className={!isOpen ? styles.burgerMenu_closed : styles.burgerMenu_open}
        onClick={handleOpenMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <Links setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  )
}
