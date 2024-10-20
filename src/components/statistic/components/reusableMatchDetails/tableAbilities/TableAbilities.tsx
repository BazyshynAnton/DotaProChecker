import HeaderCells from "./components/HeaderCells"
import Hero from "./components/Hero"

import { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/TableAbilities.module.scss"

export default function TableAbilities({
  playersTeam,
}: {
  playersTeam: Player[]
}) {
  const teamHeaderCondition = playersTeam[0].isRadiant
    ? styles.builds__header_radiant
    : styles.builds__header_dire

  const side = playersTeam[0].isRadiant ? "radiant" : "dire"

  return (
    <section className={styles.builds}>
      <header className={`${styles.builds__header} ${teamHeaderCondition}`}>
        {side} builds
      </header>
      <article className={styles.builds__tableWrapper}>
        <table className={styles.table}>
          <thead>
            <HeaderCells />
          </thead>
          <tbody>
            <Hero playersTeam={playersTeam} />
          </tbody>
        </table>
      </article>
    </section>
  )
}
