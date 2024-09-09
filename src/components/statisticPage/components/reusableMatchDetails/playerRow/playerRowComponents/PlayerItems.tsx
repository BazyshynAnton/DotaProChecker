// Components
import Aghanim from "../playerRowReusable/slots/Aghanim"
import BackpackItems from "../playerRowReusable/slots/BackpackItems"
import MainSlotItems from "../playerRowReusable/slots/MainSlotItems"
import NeutralItem from "../playerRowReusable/slots/NeutralItem"

// Styles
import styles from "@/styles/statisticPage/PlayerRow.module.scss"

// Types
import type { Player } from "@/types/staticPage/tablePlayerDetails"
import type { ItemDetails } from "@/types/staticPage/playerRow"

export default function PlayerItems({
  itemDetails,
  player,
}: {
  itemDetails: ItemDetails | null
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
            <MainSlotItems itemDetails={itemDetails} />
          </div>
          <div
            className={
              styles.playerRow__playerDataCell__items__slots__wrapper__backpack
            }
          >
            <BackpackItems itemDetails={itemDetails} />
          </div>
        </div>
        <div
          className={styles.playerRow__playerDataCell__items__wrapper__neutral}
        >
          <NeutralItem itemDetails={itemDetails} />
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