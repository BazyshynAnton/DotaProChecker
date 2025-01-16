import Aghanim from './Aghanim'
import BackpackItems from './BackpackItems'
import MainSlotItems from './MainSlotItems'
import NeutralItem from './NeutralItem'

import type { Player } from '@/types/statistic/tableDetails'
import type { ItemDetails } from '@/types/statistic/playerRow'

import styles from '@/styles/statistic/PlayerRow.module.scss'

export default function PlayerItems({
  itemDetails,
  player,
}: {
  itemDetails: ItemDetails | null
  player: Player
}) {
  return (
    <td className={styles.playerDataCell__items}>
      <div className={styles.playerDataCell__items__wrapper}>
        <div className={styles.slots}>
          <div className={styles.slots__mainSlot}>
            <MainSlotItems itemDetails={itemDetails} />
          </div>
          <div className={styles.slots__backpack}>
            <BackpackItems itemDetails={itemDetails} />
          </div>
        </div>
        <div className={styles.neutral}>
          <NeutralItem itemDetails={itemDetails} />
        </div>
        <div className={styles.aghanim}>
          <Aghanim player={player} />
        </div>
      </div>
    </td>
  )
}
