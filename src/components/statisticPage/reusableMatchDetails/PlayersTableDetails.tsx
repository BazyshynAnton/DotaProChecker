import { Players } from "@/types/staticPage/staticPageTypes"
import PlayerRow from "./PlayerRow"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"

export default function PlayersTableDetails({
  playersTeam,
}: {
  playersTeam: Players[]
}) {
  return (
    <div className={styles.teamResult}>
      <section className={styles.radiant}>
        <header className={styles.header}>
          THE {playersTeam[0].isRadiant ? "RADIANT" : "DIRE"}
        </header>
        <article className={styles.tableContainer}>
          <table>
            <thead>
              <HeaderCells />
            </thead>
            <tbody>
              <PlayerRow />
            </tbody>
          </table>
        </article>
      </section>
    </div>
  )
}

function TableHeaderCell({ str, title }: { str: string; title: string }) {
  return (
    <tr>
      <th>
        <div>
          <div title={title}>{str}</div>
        </div>
      </th>
    </tr>
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
      <TableHeaderCell str={"/"} title={""} />
      <TableHeaderCell str={"DN"} title={"Number of creeps denied by hero"} />
      <TableHeaderCell str={"NET"} title={"Net Worth"} />
      <TableHeaderCell str={"GPM"} title={"Gold Per Minute"} />
      <TableHeaderCell str={"/"} title={""} />
      <TableHeaderCell str={"XPM"} title={"Experience Per Minute"} />
      <TableHeaderCell str={"HD"} title={"Damage dealt to heroes"} />
      <TableHeaderCell str={"TD"} title={"Damage dealt to buildings"} />
      <TableHeaderCell str={"HH"} title={"Health restored to heroes"} />
      <TableHeaderCell str={"ITEMS"} title={"Items built"} />
    </>
  )
}
