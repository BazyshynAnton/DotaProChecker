import styles from "@/styles/statistic/TableAbilities.module.scss"

export default function TableHeaderCell({
  str,
  title,
}: {
  str: string
  title: string
}) {
  return (
    <th title={title}>
      <div className={styles.tableHead__content}>{str}</div>
    </th>
  )
}
