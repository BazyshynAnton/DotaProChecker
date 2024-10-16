import styles from "@/styles/statistic/TableAbilities.module.scss"

export default function TableHeaderCell({
  str,
  title,
}: {
  str: string
  title: string
}) {
  return (
    <th className={styles.tableHead} title={title}>
      <div
        className={`${styles.tableHead__content} ${
          str == "Hero" && styles.tableHead_first
        }`}
      >
        {str}
      </div>
    </th>
  )
}
