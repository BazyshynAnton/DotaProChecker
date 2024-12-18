import HeroAndNickname from "./HeroAndNickname"
import RankAndAvatar from "./RankAndAvatar"
import PlayerStatistic from "./PlayerStatistic"
import PlayerItems from "./PlayerItems"

import { useAppSelector } from "@/shared/reduxImports"
import { PlayerRowDetailsUtility } from "@/utils/statistic/PlayerRowDetailsUtility"

import type { Player } from "@/types/statistic/tableDetails"
import type {
  DetailsAboutHero,
  DetailsAboutPlayer,
  ItemDetails,
} from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/PlayerRow.module.scss"

export default function PlayerRow({ playersTeam }: { playersTeam: Player[] }) {
  const { heroList, playersProfiles, heroAbilities, items } = useAppSelector(
    (store) => store.statisticSlice
  )

  if (!heroList || !playersProfiles || !items) return

  return (
    <>
      {playersTeam.map((player) => {
        //
        // Initialize helper class
        const uRowDetails = new PlayerRowDetailsUtility()

        // Find details about hero
        const detailsAboutHero: DetailsAboutHero =
          uRowDetails.findAppropriateHero(player, heroList, heroAbilities)

        // Find details about player
        const detailsAboutPlayer: DetailsAboutPlayer =
          uRowDetails.findAppropriatePlayer(player, playersProfiles)

        // Find details about items
        const itemDetails: ItemDetails | null =
          uRowDetails.findAppropriateItems(player, items)

        return (
          <tr key={player.hero_id} className={styles.playerRow}>
            <td className={styles.playerRow__playerDataCell}>
              <div className={styles.playerRow__playerDataCell__inCell}>
                <HeroAndNickname
                  detailsAboutHero={detailsAboutHero}
                  player={player}
                />
                <RankAndAvatar
                  detailsAboutPlayer={detailsAboutPlayer}
                  uRowDetails={uRowDetails}
                />
              </div>
            </td>
            <PlayerStatistic player={player} />
            <PlayerItems itemDetails={itemDetails} player={player} />
          </tr>
        )
      })}
    </>
  )
}
