import { Player } from "@/types/staticPage/staticPageTypes"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"

export default function PlayerRow({ playersTeam }: { playersTeam: Player[] }) {
  return (
    <>
      {playersTeam.map((player) => (
        <tr key={player.account_id} className={styles.playerTableRow}>
          <td className={styles.playerTableDataCell}>
            <div className={styles.playerInTableCellContainer}>
              <div className={styles.playerHeroAndVariant}>
                {player.hero_id} <span>{player.hero_variant}</span>
              </div>
              <div className={styles.playerNicknameAndRank}>
                <div>
                  {player.personaname ? player.personaname : "Anonymous"}
                </div>
                <div>{player.personaname ? player.rank_tier : "Unknown"}</div>
              </div>
            </div>
          </td>
          <td className={styles.lvlTableDataCell}>{player.level}</td>
          <td className={styles.killsTableDataCell}>{player.kills}</td>
          <td className={styles.deathsTableDataCell}>{player.deaths}</td>
          <td className={styles.assistsTableDataCell}>{player.assists}</td>
          <td className={styles.lasthitsTableDataCell}>{player.last_hits}</td>
          <td className={styles.deniesTableDataCell}>{player.denies}</td>
          <td className={styles.networthTableDataCell}>{player.net_worth}</td>
          <td className={styles.gpmTableDataCell}>{player.gold_per_min}</td>
          <td className={styles.xpmTableDataCell}>{player.xp_per_min}</td>
          <td className={styles.heroDamageTableDataCell}>
            {player.hero_damage}
          </td>
          <td className={styles.buildingsDamageTableDataCell}>
            {player.tower_damage}
          </td>
          <td className={styles.heroesHealingTableDataCell}>
            {player.hero_healing}
          </td>
          <td className={styles.itemsTableDataCell}>
            <div className={styles.itemsInTableDataCellContainer}>
              <div className={styles.mainSlotItems}>
                <div>{player.item_0}</div>
                <div>{player.item_1}</div>
                <div>{player.item_2}</div>
                <div>{player.item_3}</div>
                <div>{player.item_4}</div>
                <div>{player.item_5}</div>
              </div>
              <div className={styles.backpackItems}>
                <div>{player.backpack_0}</div>
                <div>{player.backpack_1}</div>
                <div>{player.backpack_2}</div>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  )
}
