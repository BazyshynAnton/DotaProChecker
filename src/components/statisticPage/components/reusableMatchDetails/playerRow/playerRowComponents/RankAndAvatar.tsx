import { Image } from "@/shared/nextjsImports"

import { PlayerRowDetailsUtility } from "@/utils/statisticPage/PlayerRowDetailsUtility"

import type { DetailsAboutPlayer } from "@/types/staticPage/playerRow"

import styles from "@/styles/statisticPage/PlayerRow.module.scss"

export default function RankAndAvatar({
  detailsAboutPlayer,
  uRowDetails,
}: {
  detailsAboutPlayer: DetailsAboutPlayer
  uRowDetails: PlayerRowDetailsUtility
}) {
  return (
    <div className={styles.playerRow__playerDataCell__inCell__rankAndAvatar}>
      <div
        className={
          styles.playerRow__playerDataCell__inCell__rankAndAvatar__rank
        }
      >
        <Image
          src={uRowDetails.findPlayerRankIcon()}
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
          src={uRowDetails.findPlayerAvatar()}
          alt={"Player's Avatar"}
          width={24}
          height={24}
          quality={100}
          unoptimized
        />
      </div>
    </div>
  )
}
