import PlayerRow from "./components/playerRow/PlayerRow"
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

  const side = playersTeam[0].isRadiant ? "radiant" : "dire"

  return (
    <div className={styles.result}>
      <section className={styles.result__team}>
        <header
          className={`${styles.result__team__header} ${teamHeaderCondition}`}
        >
          the {side}
        </header>
        <article className={styles.result__team__tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.table__thead}>
              <tr className={styles.table__thead__headersTableRow}>
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
