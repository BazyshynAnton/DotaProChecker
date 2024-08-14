import { PlayerRowDetailsUtility } from "@/utils/statisticPage/PlayerRowDetailsUtility"
import { Image } from "@/components/shared/nextjsImports"

import { useSelector } from "@/components/shared/reduxImports"
import type { Player } from "@/types/staticPage/staticPageTypes"
import type { RootState } from "@/store/store"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"
import {
  DetailsAboutHero,
  DetailsAboutPlayer,
  ItemDetails,
} from "@/types/staticPage/playerRowDetailsTypes"

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
        const rdUtility = new PlayerRowDetailsUtility()
        const detailsAboutHero: DetailsAboutHero =
          rdUtility.findAppropriateHero(player, heroList)

        const detailsAboutPlayer: DetailsAboutPlayer =
          rdUtility.findAppropriatePlayer(player, playersProfiles)

        const detailsAboutItems: ItemDetails[] | null =
          rdUtility.findItems(player)

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
                        quality={100}
                      />
                    </div>
                    <div className={styles.playerLevelContainer}>
                      {player.level}
                    </div>
                    <span
                      style={{
                        background: `${detailsAboutHero.heroVariant.color}`,
                      }}
                    >
                      {detailsAboutHero.heroVariant.icon && (
                        <Image
                          src={`/pictures/dotaHeroFacetIcon/${detailsAboutHero.heroVariant.icon}.png`}
                          alt={detailsAboutHero.heroVariant.icon}
                          width={72}
                          height={72}
                        />
                      )}
                    </span>
                  </div>
                  <div className={styles.playerNickname}>
                    <div
                      style={{
                        color: `${
                          player.team_number === 0 ? "#2eb872" : "#fa4659"
                        }`,
                      }}
                    >
                      {player.personaname ? player.personaname : "Anonymous"}
                    </div>
                  </div>
                </div>
                <div className={styles.rankAndAvatarContainer}>
                  <div
                    style={{
                      position: "relative",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <Image
                      src={rdUtility.findPictureOfPlayerRank()}
                      alt={"Player's Rank"}
                      width={40}
                      height={40}
                      quality={100}
                    />
                    {detailsAboutPlayer.leaderboard_rank_info !== null && (
                      <div className={styles.rankTierContainer}>
                        {detailsAboutPlayer.leaderboard_rank_info}
                      </div>
                    )}
                  </div>
                  <div style={{ width: "24px", height: "24px" }}>
                    <Image
                      src={rdUtility.findPlayerAvatar()}
                      alt={"Player's Avatar"}
                      width={24}
                      height={24}
                      quality={100}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </td>
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
                  <div>
                    {/* TODO: why it is undefined 
                        use player.item_x and compare to item id [easy].
                    */}
                    {detailsAboutItems?.map((item, idx) => (
                      <Image
                        key={item[`item${idx}`]?.id}
                        src={`/public/pictures/dotaItems/${
                          item[`item${idx}`]?.img
                        }.webp`}
                        alt=""
                        width={37}
                        height={27}
                      />
                    ))}
                  </div>
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
