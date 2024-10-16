import HeroAndNickname from "./playerRowComponents/HeroAndNickname"
import RankAndAvatar from "./playerRowComponents/RankAndAvatar"
import PlayerStatistic from "./playerRowComponents/PlayerStatistic"
import PlayerItems from "./playerRowComponents/PlayerItems"

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
  const { heroList, playersProfiles } = useAppSelector(
    (store) => store.statisticSlice
  )
  //
  // Check existence
  if (!heroList || !playersProfiles) return

  return (
    <>
      {playersTeam.map((player) => {
        //
        // Initialize helper class
        const uRowDetails = new PlayerRowDetailsUtility()

        // Find details about hero
        const detailsAboutHero: DetailsAboutHero =
          uRowDetails.findAppropriateHero(player, heroList)

        // Find details about player
        const detailsAboutPlayer: DetailsAboutPlayer =
          uRowDetails.findAppropriatePlayer(player, playersProfiles)

        // Find details about items
        const itemDetails: ItemDetails | null =
          uRowDetails.findAppropriateItems(player)

        return (
          <tr key={player.account_id} className={styles.playerRow}>
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
