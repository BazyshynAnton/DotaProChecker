// Styles
import styles from "@/styles/statistic/TableDetails.module.scss"

export default function TableHeaderCell({
  str,
  title,
}: {
  str: string
  title: string
}) {
  return (
    <th>
      {str === "K" ? (
        <div title={title} className={`${styles.killsTableHeaderCell} `}>
          {str}
        </div>
      ) : str === "D" ? (
        <div title={title} className={`${styles.deathsTableHeaderCell} `}>
          {str}
        </div>
      ) : str === "A" ? (
        <div title={title} className={`${styles.assistsTableHeaderCell} `}>
          {str}
        </div>
      ) : str === "LH" ? (
        <div
          title={title}
          className={`${styles.lasthitsTableHeaderCell} ${styles.headersTableRow_helperAfter}`}
        >
          {str}
        </div>
      ) : str === "DN" ? (
        <div title={title} className={styles.deniesTableHeaderCell}>
          {str}
        </div>
      ) : str === "GPM" ? (
        <div
          title={title}
          className={`${styles.gpmTableHeaderCell} ${styles.headersTableRow_helperAfter}`}
        >
          {str}
        </div>
      ) : str === "XPM" ? (
        <div title={title} className={styles.xpmTableHeaderCell}>
          {str}
        </div>
      ) : (
        <div title={title} className={styles.otherTableHeaderCell}>
          {str}
        </div>
      )}
    </th>
  )
}
