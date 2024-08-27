import {
  ItemIcons,
  BackpackItemIcons,
  NeutralItem,
  Aghanim,
} from "./playerRowReusable/PlayerRowReusable"
import { PlayerRowDetailsUtility } from "@/utils/statisticPage/PlayerRowDetailsUtility"
import { Image } from "@/components/shared/nextjsImports"

import { useSelector } from "@/components/shared/reduxImports"

import styles from "@/styles/statisticPage/PlayerRow.module.scss"

import type { Player } from "@/types/staticPage/staticPageTypes"
import type { RootState } from "@/store/store"
import type {
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

        const detailsAboutItems: ItemDetails | null =
          rdUtility.findAppropriateItems(player)

        return (
          <tr key={player.hero_id} className={styles.playerRow}>
            <td className={styles.playerRow__playerDataCell}>
              <div className={styles.playerRow__playerDataCell__inCell}>
                <div
                  className={
                    styles.playerRow__playerDataCell__inCell__heroAndNickname
                  }
                >
                  <div
                    className={
                      styles.playerRow__playerDataCell__inCell__heroAndNickname__hero
                    }
                  >
                    <div
                      className={
                        styles.playerRow__playerDataCell__inCell__heroAndNickname__hero__icon
                      }
                      style={{
                        borderRight: `3px solid ${detailsAboutHero.playerColor}`,
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
                    <div
                      className={
                        styles.playerRow__playerDataCell__inCell__heroAndNickname__hero__level
                      }
                    >
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
                  <div
                    className={
                      styles.playerRow__playerDataCell__inCell__heroAndNickname__nickname
                    }
                  >
                    <div
                      className={
                        player.team_number === 0
                          ? styles.playerRow__playerDataCell__inCell__heroAndNickname__nickname_radiant
                          : styles.playerRow__playerDataCell__inCell__heroAndNickname__nickname_dire
                      }
                    >
                      {player.personaname ? player.personaname : "Anonymous"}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles.playerRow__playerDataCell__inCell__rankAndAvatar
                  }
                >
                  <div
                    className={
                      styles.playerRow__playerDataCell__inCell__rankAndAvatar__rank
                    }
                  >
                    <Image
                      src={rdUtility.findPictureOfPlayerRank()}
                      alt={"Player's Rank"}
                      width={40}
                      height={40}
                      quality={100}
                    />
                    {detailsAboutPlayer.leaderboard_rank_info !== null && (
                      <div
                        className={
                          styles.playerRow__playerDataCell__inCell__rankAndAvatar__rank__tier
                        }
                      >
                        {detailsAboutPlayer.leaderboard_rank_info}
                      </div>
                    )}
                  </div>
                  <div
                    className={
                      styles.playerRow__playerDataCell__inCell__rankAndAvatar__avatar
                    }
                  >
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
            <td className={styles.playerRow__playerDataCell__items}>
              <div className={styles.playerRow__playerDataCell__items__wrapper}>
                <div
                  className={
                    styles.playerRow__playerDataCell__items__wrapper__slots
                  }
                >
                  <div
                    className={
                      styles.playerRow__playerDataCell__items__slots__wrapper__mainSlot
                    }
                  >
                    <ItemIcons detailsAboutItems={detailsAboutItems} />
                  </div>
                  <div
                    className={
                      styles.playerRow__playerDataCell__items__slots__wrapper__backpack
                    }
                  >
                    <BackpackItemIcons detailsAboutItems={detailsAboutItems} />
                  </div>
                </div>
                <div
                  className={
                    styles.playerRow__playerDataCell__items__wrapper__neutral
                  }
                >
                  <NeutralItem detailsAboutItems={detailsAboutItems} />
                </div>
                <div
                  className={
                    styles.playerRow__playerDataCell__items__wrapper__aghanim
                  }
                >
                  <Aghanim
                    player={player}
                    detailsAboutItems={detailsAboutItems}
                  />
                </div>
              </div>
            </td>
          </tr>
        )
      })}
    </>
  )
}
