import TableHeaderCell from "./TableHeaderCell"

import styles from "@/styles/statistic/TableAbilities.module.scss"

export default function HeaderCells() {
  const levels = new Array(25).fill(0)

  return (
    <tr className={styles.tableHeadRow}>
      <TableHeaderCell str="Hero" title="Hero" />
      {levels.map((_, idx) => (
        <TableHeaderCell
          key={idx + 1}
          str={String(idx + 1)}
          title={"Hero level"}
        />
      ))}
    </tr>
  )
}
