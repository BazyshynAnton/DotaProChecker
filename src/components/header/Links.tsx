import { Link, usePathname } from '@/shared/nextjsImports'
import { Dispatch, SetStateAction } from 'react'

import styles from '@/styles/header/Header.module.scss'

export default function Links({ setIsOpen }: { setIsOpen?: Dispatch<SetStateAction<boolean>> }) {
  const pathname = usePathname()

  const handleOpenMenuClick = () => {
    setIsOpen && setIsOpen(false)
  }

  return (
    <>
      <Link
        href='/'
        className={pathname === '/' ? styles.activeHeaderLink : styles.headerLink}
        onClick={handleOpenMenuClick}
      >
        home
      </Link>
      <Link
        href='/statistic'
        className={pathname === '/statistic' ? styles.activeHeaderLink : styles.headerLink}
        onClick={handleOpenMenuClick}
      >
        statistic
      </Link>
      <Link
        href='/meta'
        className={pathname === '/meta' ? styles.activeHeaderLink : styles.headerLink}
        onClick={handleOpenMenuClick}
      >
        meta
      </Link>
      <Link
        href='/players'
        className={pathname === '/players' ? styles.activeHeaderLink : styles.headerLink}
        onClick={handleOpenMenuClick}
      >
        players
      </Link>
    </>
  )
}
