import Abilities from "./Abilities"

import { Player } from "@/types/statistic/tableDetails"
import { PlayerRowDetailsUtility } from "@/utils/statistic/PlayerRowDetailsUtility"
import { useAppSelector } from "@/shared/reduxImports"
import { Image } from "@/shared/nextjsImports"

import styles from "@/styles/statistic/TableAbilities.module.scss"

export default function Hero({ playersTeam }: { playersTeam: Player[] }) {
  const { heroList, playersProfiles } = useAppSelector(
    (store) => store.statisticSlice
  )
  //
  // Check existence
  if (!heroList || !playersProfiles) return

  const uRowDetails = PlayerRowDetailsUtility.getInstance()

  return (
    <>
      {playersTeam.map((player) => {
        const detailsAboutHero = uRowDetails.findAppropriateHero(
          player,
          heroList
        )
        return (
          <tr key={player.hero_id} className={styles.tableBodyRow}>
            <td className={styles.tableBodyRow__heroDataCell}>
              <div className={styles.heroDataCell__inCell}>
                <Image
                  src={`/pictures/dotaHeroIcons/${detailsAboutHero.heroLocalizedName}.png`}
                  alt={detailsAboutHero.heroLocalizedName}
                  width={256}
                  height={144}
                  quality={100}
                />
              </div>
            </td>
            <Abilities player={player} uRowDetails={uRowDetails} />
          </tr>
        )
      })}
    </>
  )
}
