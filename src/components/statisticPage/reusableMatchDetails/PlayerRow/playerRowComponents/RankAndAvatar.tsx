// Next.js
import { Image } from "@/components/shared/nextjsImports"

// Classes
import { PlayerRowDetailsUtility } from "@/utils/statisticPage/PlayerRowDetailsUtility"

// Styles
import styles from "@/styles/statisticPage/PlayerRow.module.scss"

// Types
import { DetailsAboutPlayer } from "@/types/staticPage/playerRowDetailsTypes"

export default function RankAndAvatar({
  detailsAboutPlayer,
  rdUtility,
}: {
  detailsAboutPlayer: DetailsAboutPlayer
  rdUtility: PlayerRowDetailsUtility
}) {
  return (
    <div className={styles.playerRow__playerDataCell__inCell__rankAndAvatar}>
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
  )
}
