import DScope from './DScope'
import BazyshynDev from './BazyshynDev'

import styles from '@/styles/footer/Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <DScope />
      <BazyshynDev />
    </div>
  )
}
