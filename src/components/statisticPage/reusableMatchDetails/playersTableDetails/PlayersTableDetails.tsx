// Components
import PlayerRow from "../PlayerRow/PlayerRow"
import HeaderCells from "./playersTableDetailsComponents/HeaderCells"

// Styles
import styles from "@/styles/statisticPage/PlayersTableDetails.module.scss"

// Types
import type { Player } from "@/types/staticPage/staticPageTypes"

export default function PlayersTableDetails({
  playersTeam,
}: {
  playersTeam: Player[]
}) {
  return (
    <div className={styles.result}>
      <section className={styles.result__team}>
        <header
          className={`${styles.result__team__header} ${
            playersTeam[0].isRadiant
              ? styles.result__team__header_radiant
              : styles.result__team__header_dire
          }
          `}
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
