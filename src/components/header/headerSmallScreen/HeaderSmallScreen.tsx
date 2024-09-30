import styles from "@/styles/header/Header.module.scss"

export default function HeaderSmallScreen() {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.websiteNameInHeader}>dotachecker</span>
    </div>
  )
}
