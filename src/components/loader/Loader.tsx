import styles from "@/styles/loader/Loader.module.scss"

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderWrapper__loader}></div>
    </div>
  )
}
