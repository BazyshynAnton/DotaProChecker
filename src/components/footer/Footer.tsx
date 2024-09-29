import DChecker from "./components/dchecker/DChecker"
import BazyshynDev from "./components/bazyshyndev/BazyshynDev"

import styles from "@/styles/footer/Footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <DChecker />
      <BazyshynDev />
    </div>
  )
}
