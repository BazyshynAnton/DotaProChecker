export default function TableHeaderCell({
  str,
  title,
}: {
  str: string
  title: string
}) {
  return <th title={title}>{str}</th>
}
