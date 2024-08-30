// Styles
import styles from "@/styles/statisticPage/PlayerRow.module.scss"

// Types
import type { Player } from "@/types/staticPage/staticPageTypes"

export default function PlayerStatistic({ player }: { player: Player }) {
  return (
    <>
      <td className={styles.playerRow__playerDataCell__kills}>
        {player.kills}
      </td>
      <td className={styles.playerRow__playerDataCell__deaths}>
        {player.deaths}
      </td>
      <td className={styles.playerRow__playerDataCell__assists}>
        {player.assists}
      </td>
      <td className={styles.playerRow__playerDataCell__lasthits}>
        {player.last_hits}
      </td>
      <td className={styles.playerRow__playerDataCell__denies}>
        {player.denies}
      </td>
      <td className={styles.playerRow__playerDataCell__networth}>
        {player.net_worth}
      </td>
      <td className={styles.playerRow__playerDataCell__gpm}>
        {player.gold_per_min}
      </td>
      <td className={styles.playerRow__playerDataCell__xpm}>
        {player.xp_per_min}
      </td>
      <td className={styles.playerRow__playerDataCell__heroDamage}>
        {player.hero_damage}
      </td>
      <td className={styles.playerRow__playerDataCell__towerDamage}>
        {player.tower_damage}
      </td>
      <td className={styles.playerRow__playerDataCell__heroesHealing}>
        {player.hero_healing}
      </td>
    </>
  )
}
