import { Player } from "@/types/staticPage/staticPageTypes"
import PlayerRow from "./PlayerRow"

// import styles from "@/styles/statisticPage/MatchDetails.module.scss"
import styles from "@/styles/statisticPage/PlayersTableDetails.module.scss"

export default function PlayersTableDetails({
  playersTeam,
}: {
  playersTeam: Player[]
}) {
  return (
    <div className={styles.result}>
      <section className={styles.result__team}>
        <header
          style={{ color: playersTeam[0].isRadiant ? "#2eb872" : "#fa4659" }}
        >
          THE {playersTeam[0].isRadiant ? "RADIANT" : "DIRE"}
        </header>
        <article className={styles.result__team__tableWrapper}>
          <table className={styles.result__team__tableWrapper__table}>
            <thead className={styles.result__team__tableWrapper__table__thead}>
              <tr
                className={
                  styles.result__team__tableWrapper__table__thead__headersTableRow
                }
              >
                <HeaderCells />
              </tr>
            </thead>
            <tbody>
              <PlayerRow playersTeam={playersTeam} />
            </tbody>
          </table>
        </article>
      </section>
    </div>
  )
}

function TableHeaderCell({ str, title }: { str: string; title: string }) {
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

function HeaderCells() {
  return (
    <>
      <TableHeaderCell str={"PLAYER"} title={""} />
      <TableHeaderCell str={"K"} title={"Hero Kills"} />
      <TableHeaderCell str={"D"} title={"Hero Deaths"} />
      <TableHeaderCell str={"A"} title={"Hero Assists"} />
      <TableHeaderCell str={"LH"} title={"Number of creeps killed by hero"} />
      <TableHeaderCell str={"DN"} title={"Number of creeps denied by hero"} />
      <TableHeaderCell str={"NET"} title={"Net Worth"} />
      <TableHeaderCell str={"GPM"} title={"Gold Per Minute"} />
      <TableHeaderCell str={"XPM"} title={"Experience Per Minute"} />
      <TableHeaderCell str={"HD"} title={"Damage dealt to heroes"} />
      <TableHeaderCell str={"TD"} title={"Damage dealt to buildings"} />
      <TableHeaderCell str={"HH"} title={"Health restored to heroes"} />
      <TableHeaderCell str={"ITEMS"} title={"Items built"} />
    </>
  )
}
