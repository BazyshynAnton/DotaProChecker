// Components
import Aghanim from "../playerRowReusable/slots/Aghanim"
import BackpackItems from "../playerRowReusable/slots/BackpackItems"
import MainSlotItems from "../playerRowReusable/slots/MainSlotItems"
import NeutralItem from "../playerRowReusable/slots/NeutralItem"

// Styles
import styles from "@/styles/statisticPage/PlayerRow.module.scss"

// Types
import type { Player } from "@/types/staticPage/staticPageTypes"
import type { ItemDetails } from "@/types/staticPage/playerRowDetailsTypes"

export default function PlayerItems({
  detailsAboutItems,
  player,
}: {
  detailsAboutItems: ItemDetails | null
  player: Player
}) {
  return (
    <td className={styles.playerRow__playerDataCell__items}>
      <div className={styles.playerRow__playerDataCell__items__wrapper}>
        <div
          className={styles.playerRow__playerDataCell__items__wrapper__slots}
        >
          <div
            className={
              styles.playerRow__playerDataCell__items__slots__wrapper__mainSlot
            }
          >
            <MainSlotItems detailsAboutItems={detailsAboutItems} />
          </div>
          <div
            className={
              styles.playerRow__playerDataCell__items__slots__wrapper__backpack
            }
          >
            <BackpackItems detailsAboutItems={detailsAboutItems} />
          </div>
        </div>
        <div
          className={styles.playerRow__playerDataCell__items__wrapper__neutral}
        >
          <NeutralItem detailsAboutItems={detailsAboutItems} />
        </div>
        <div
          className={styles.playerRow__playerDataCell__items__wrapper__aghanim}
        >
          <Aghanim player={player} />
        </div>
      </div>
    </td>
  )
}
