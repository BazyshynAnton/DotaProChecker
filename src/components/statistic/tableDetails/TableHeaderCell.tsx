// Styles
import styles from "@/styles/statistic/TableDetails.module.scss"

export default function TableHeaderCell({
  str,
  title,
}: {
  str: string
  title: string
}) {
  return <th title={title}>{str}</th>
}
