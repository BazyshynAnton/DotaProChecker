import styles from '@/styles/statistic/TableAbilities.module.scss'

export default function HeaderCells() {
  const levels = new Array(25).fill(0)

  return (
    <tr className={styles.tableHeadRow}>
      <TableHeaderCell str='Hero' title='Hero' />
      {levels.map((_, idx) => (
        <TableHeaderCell key={idx} str={String(idx + 1)} title={'Hero level'} />
      ))}
    </tr>
  )
}

function TableHeaderCell({ str, title }: { str: string; title: string }) {
  return <th title={title}>{str}</th>
}
