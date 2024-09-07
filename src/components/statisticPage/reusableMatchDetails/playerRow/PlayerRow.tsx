// Components
import HeroAndNickname from "./playerRowComponents/HeroAndNickname"
import RankAndAvatar from "./playerRowComponents/RankAndAvatar"
import PlayerStatistic from "./playerRowComponents/PlayerStatistic"
import PlayerItems from "./playerRowComponents/PlayerItems"

// Redux
import { useAppSelector } from "@/shared/reduxImports"

// Classes
import { PlayerRowDetailsUtility } from "@/utils/statisticPage/PlayerRowDetailsUtility"

// Styles
import styles from "@/styles/statisticPage/PlayerRow.module.scss"

// Types

import type { Player } from "@/types/staticPage/tablePlayerDetails"
import type {
  DetailsAboutHero,
  DetailsAboutPlayer,
  ItemDetails,
} from "@/types/staticPage/playerRow"

export default function PlayerRow({ playersTeam }: { playersTeam: Player[] }) {
  const { heroList, playersProfiles } = useAppSelector(
    (store) => store.statisticPageSlice
  )
  //
  // Check existence
  if (!heroList || !playersProfiles)
    return (
      <div>
        Cannot find the {'"'}list of heroes{'"'} or {'"'}players profiles{'"'}
      </div>
    )

  return (
    <>
      {playersTeam.map((player) => {
        //
        // Initialize helper class
        const rdUtility = new PlayerRowDetailsUtility()

        // Find details about hero
        const detailsAboutHero: DetailsAboutHero =
          rdUtility.findAppropriateHero(player, heroList)

        // Find details about player
        const detailsAboutPlayer: DetailsAboutPlayer =
          rdUtility.findAppropriatePlayer(player, playersProfiles)

        // Find details about items
        const detailsAboutItems: ItemDetails | null =
          rdUtility.findAppropriateItems(player)

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
                  rdUtility={rdUtility}
                />
              </div>
            </td>
            <PlayerStatistic player={player} />
            <PlayerItems
              detailsAboutItems={detailsAboutItems}
              player={player}
            />
          </tr>
        )
      })}
    </>
  )
}
