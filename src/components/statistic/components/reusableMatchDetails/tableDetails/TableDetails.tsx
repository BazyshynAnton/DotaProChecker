import PlayerRow from "../playerRow/PlayerRow"
import HeaderCells from "./components/HeaderCells"

import type { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/TableDetails.module.scss"

export default function TableDetails({
  playersTeam,
}: {
  playersTeam: Player[]
}) {
  const teamHeaderCondition = playersTeam[0].isRadiant
    ? styles.result__team__header_radiant
    : styles.result__team__header_dire

  const side = playersTeam[0].isRadiant ? "RADIANT" : "DIRE"

  return (
    <div className={styles.result}>
      <section className={styles.result__team}>
        <header
          className={`${styles.result__team__header} ${teamHeaderCondition}`}
        >
          THE {side}
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
