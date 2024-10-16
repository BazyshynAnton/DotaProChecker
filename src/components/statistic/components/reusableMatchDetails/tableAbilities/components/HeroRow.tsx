import { Player } from "@/types/statistic/tableDetails"
import { PlayerRowDetailsUtility } from "@/utils/statistic/PlayerRowDetailsUtility"
import { useAppSelector } from "@/shared/reduxImports"

import styles from "@/styles/statistic/TableAbilities.module.scss"
import Image from "next/image"

export default function HeroRow({ playersTeam }: { playersTeam: Player[] }) {
  const { heroList, playersProfiles } = useAppSelector(
    (store) => store.statisticSlice
  )
  //
  // Check existence
  if (!heroList || !playersProfiles) return

  return (
    <>
      {playersTeam.map((player) => {
        const uRowDetails = new PlayerRowDetailsUtility()
        const detailsAboutHero = uRowDetails.findAppropriateHero(
          player,
          heroList
        )
        return (
          <tr key={player.hero_id} className={styles.tableBodyRow}>
            <td className={styles.tableBodyRow__heroDataCell}>
              <div className={styles.tableBodyRow__heroDataCell__inCell}>
                <Image
                  src={`/pictures/dotaHeroIcons/${detailsAboutHero.heroLocalizedName}.png`}
                  alt={detailsAboutHero.heroLocalizedName}
                  width={256}
                  height={144}
                  quality={100}
                />
              </div>
            </td>
          </tr>
        )
      })}
    </>
  )
}
