import type { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/PlayerRow.module.scss"

export default function PlayerStatistic({ player }: { player: Player }) {
  return (
    <>
      <td className={styles.playerDataCell__kills}>{player.kills}</td>
      <td className={styles.playerDataCell__deaths}>{player.deaths}</td>
      <td className={styles.playerDataCell__assists}>{player.assists}</td>
      <td className={styles.playerDataCell__lasthits}>{player.last_hits}</td>
      <td className={styles.playerDataCell__denies}>{player.denies}</td>
      <td className={styles.playerDataCell__networth}>{player.net_worth}</td>
      <td className={styles.playerDataCell__gpm}>{player.gold_per_min}</td>
      <td className={styles.playerDataCell__xpm}>{player.xp_per_min}</td>
      <td className={styles.playerDataCell__heroDamage}>
        {player.hero_damage}
      </td>
      <td className={styles.playerDataCell__towerDamage}>
        {player.tower_damage}
      </td>
      <td className={styles.playerDataCell__heroesHealing}>
        {player.hero_healing}
      </td>
    </>
  )
}
