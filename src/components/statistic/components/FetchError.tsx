import styles from "@/styles/statistic/FetchError.module.scss"

export default function FetchError({ error }: { error: string }) {
  return (
    <div className={styles.error}>
      <h2>Error: {error}</h2>
    </div>
  )
}
