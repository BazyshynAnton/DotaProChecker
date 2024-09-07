// Components
import { Player } from "@/types/staticPage/tablePlayerDetails"
import PlayerRow from "../playerRow/PlayerRow"
import HeaderCells from "./components/HeaderCells"

// Styles
import styles from "@/styles/statisticPage/PlayersTableDetails.module.scss"

// Types

export default function TablePlayerDetails({
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
