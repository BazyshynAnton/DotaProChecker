// Styles
import styles from "@/styles/statisticPage/PlayersTableDetails.module.scss"

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
        <div
          title={title}
          className={`${styles.result__team__tableWrapper__table__thead__headersTableRow__killsTableHeaderCell} `}
        >
          {str}
        </div>
      ) : str === "D" ? (
        <div
          title={title}
          className={`${styles.result__team__tableWrapper__table__thead__headersTableRow__deathsTableHeaderCell} `}
        >
          {str}
        </div>
      ) : str === "A" ? (
        <div
          title={title}
          className={`${styles.result__team__tableWrapper__table__thead__headersTableRow__assistsTableHeaderCell} `}
        >
          {str}
        </div>
      ) : str === "LH" ? (
        <div
          title={title}
          className={`${styles.result__team__tableWrapper__table__thead__headersTableRow__lasthitsTableHeaderCell} ${styles.result__team__tableWrapper__table__thead__headersTableRow__headersTableRow_helperAfter}`}
        >
          {str}
        </div>
      ) : str === "DN" ? (
        <div
          title={title}
          className={
            styles.result__team__tableWrapper__table__thead__headersTableRow__deniesTableHeaderCell
          }
        >
          {str}
        </div>
      ) : str === "GPM" ? (
        <div
          title={title}
          className={`${styles.result__team__tableWrapper__table__thead__headersTableRow__gpmTableHeaderCell} ${styles.result__team__tableWrapper__table__thead__headersTableRow__headersTableRow_helperAfter}`}
        >
          {str}
        </div>
      ) : str === "XPM" ? (
        <div
          title={title}
          className={
            styles.result__team__tableWrapper__table__thead__headersTableRow__xpmTableHeaderCell
          }
        >
          {str}
        </div>
      ) : (
        <div
          title={title}
          className={
            styles.result__team__tableWrapper__table__thead__headersTableRow__otherTableHeaderCell
          }
        >
          {str}
        </div>
      )}
    </th>
  )
}
