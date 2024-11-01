import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function Behaviour() {
  return (
    <div className={styles.behavior}>
      <div className={styles.target}></div>
      <div className={styles.dmgType}></div>
      <div className={styles.pierces}></div>
      <div className={styles.dispellable}></div>
    </div>
  )
}
