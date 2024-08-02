import { Player } from "@/types/staticPage/staticPageTypes"
import PlayerRow from "./PlayerRow"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"

export default function PlayersTableDetails({
  playersTeam,
}: {
  playersTeam: Player[]
}) {
  return (
    <div className={styles.teamResult}>
      <section className={styles.team}>
        <header
          style={{ color: playersTeam[0].isRadiant ? "#92a525" : "#c23c2a" }}
        >
          THE {playersTeam[0].isRadiant ? "RADIANT" : "DIRE"}
        </header>
        <article className={styles.tableContainer}>
          <table>
            <thead>
              <tr className={styles.headersTableRow}>
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
      {str === "LH" ? (
        <div
          title={title}
          className={`${styles.lasthitsTableHeaderCell} ${styles.helperAfter}`}
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
          className={`${styles.gpmTableHeaderCell} ${styles.helperAfter}`}
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

function HeaderCells() {
  return (
    <>
      <TableHeaderCell str={"PLAYER"} title={""} />
      <TableHeaderCell str={"LVL"} title={"Hero Level"} />
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
