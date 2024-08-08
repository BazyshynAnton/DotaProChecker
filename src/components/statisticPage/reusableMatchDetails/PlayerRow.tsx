import { Image } from "@/components/shared/nextjsImports"

import { useSelector } from "@/components/shared/reduxImports"
import {
  findAppropriateHero,
  findAppropriatePlayer,
} from "@/utils/statisticPage/matchDetailsUtils"

import type { Player } from "@/types/staticPage/staticPageTypes"
import type { RootState } from "@/store/store"
import type {
  DetailsAboutHero,
  DetailsAboutPlayer,
} from "@/types/staticPage/matchDetailsTypes"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"

export default function PlayerRow({ playersTeam }: { playersTeam: Player[] }) {
  const { heroList, playersProfiles } = useSelector(
    (store: RootState) => store.statisticPageSlice
  )

  if (heroList === null || playersProfiles === null)
    return (
      <div>
        Cannot find the {'"'}list of heroes{'"'} or {'"'}players profiles{'"'}
      </div>
    )

  return (
    <>
      {playersTeam.map((player) => {
        const detailsAboutHero: DetailsAboutHero = findAppropriateHero(
          player,
          heroList
        )

        const detailsAboutPlayer: DetailsAboutPlayer = findAppropriatePlayer(
          player,
          playersProfiles
        )

        return (
          <tr key={player.hero_id} className={styles.playerTableRow}>
            <td className={styles.playerTableDataCell}>
              <div className={styles.playerInTableCellContainer}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div className={styles.playerHeroAndVariant}>
                    <div
                      className={styles.heroIconContainer}
                      style={{
                        borderRight: `2px solid ${detailsAboutHero.playerColor}`,
                      }}
                    >
                      <Image
                        src={`/pictures/dotaHeroIcon/${detailsAboutHero.heroLocalizedName}.png`}
                        alt={detailsAboutHero.heroLocalizedName}
                        width={256}
                        height={144}
                      />
                    </div>
                    <span
                      style={{
                        background: `${detailsAboutHero.heroVariant.color}`,
                      }}
                    >
                      <Image
                        src={`/pictures/dotaHeroFacetIcon/${detailsAboutHero.heroVariant.icon}.png`}
                        alt={detailsAboutHero.heroVariant.icon}
                        width={72}
                        height={72}
                      />
                    </span>
                  </div>
                  <div className={styles.playerNicknameAndRank}>
                    <div
                      style={{
                        color: `${
                          player.team_number === 0 ? "#92A525" : "#C23C2A"
                        }`,
                      }}
                    >
                      {player.personaname ? player.personaname : "Anonymous"}
                    </div>
                    <div>
                      {player.personaname ? player.rank_tier : "Unknown"}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "40px", height: "40px" }}>
                    <Image
                      src={
                        detailsAboutPlayer.rank_tier_info !== null
                          ? `/pictures/dotaPlayerRanks/${detailsAboutPlayer.rank_tier_info}.png`
                          : "/pictures/dotaPlayerRanks/00.png"
                      }
                      alt={""}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div style={{ width: "24px", height: "24px" }}>
                    <Image
                      src={
                        detailsAboutPlayer.profileInfo.avatar !== ""
                          ? detailsAboutPlayer.profileInfo.avatar
                          : "/pictures/dotaPlayerIcon/anonymous.jpg"
                      }
                      alt={""}
                      width={24}
                      height={24}
                    />
                  </div>
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
        )
      })}
    </>
  )
}
