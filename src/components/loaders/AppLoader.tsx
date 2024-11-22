import styles from "@/styles/loaders/AppLoader.module.scss"

export default function AppLoader() {
  return (
    <div className={styles.appLoader}>
      <div className={styles.loadingLine} />
    </div>
  )
}
