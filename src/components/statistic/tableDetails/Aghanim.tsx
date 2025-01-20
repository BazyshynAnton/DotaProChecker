import ItemDescription from './ItemDescription'

import { Image } from '@/shared/nextjsImports'
import { useState } from '@/shared/reactImports'

import { PlayerRowUtility } from '@/utils/statistic/PlayerRowUtility'

import type { Player } from '@/types/statistic/tableDetails'

// Initial State for useState in Aghanim component.
const initialStateAghanim = {
  0: false,
  1: false,
}

export default function Aghanim({ player }: { player: Player }) {
  //
  // State for manage tooltip about aghanim.
  const [toolTipStatus, setToolTipStatus] = useState(initialStateAghanim)

  // Initialize utility for manage data in component
  const prrUtility = PlayerRowUtility.getInstance()

  // Function to update the toolTipStatus when mouse enter
  const handleMouseEnterAghanim = (idx: number) => {
    prrUtility.handleMouseEnter('ultimate_scepter', 'aghanim_slot', idx, setToolTipStatus)
  }

  // Function to update the toolTipStatus when mouse leave
  const handleMouseLeaveAghanim = (idx: number) => {
    prrUtility.handleMouseLeave('aghanim_slot', idx, setToolTipStatus)
  }

  // Get details about Current Aghanim Item
  const details = (item: string) => prrUtility.findDetailsAboutCurrentItem('aghanim', item)

  // Condition
  const toolTipCondition = toolTipStatus[0] ? 'ultimate_scepter' : 'aghanims_shard'

  return (
    <>
      {(toolTipStatus[0] || toolTipStatus[1]) && (
        <ItemDescription details={details(toolTipCondition)} item={toolTipCondition} />
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.1rem',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'help',
        }}
      >
        <Image
          src={`/pictures/dotaItemIcons/${
            player.aghanims_scepter === 1 ? 'scepter_1' : 'scepter_0'
          }.png`}
          alt=''
          width={37}
          height={38}
          onMouseEnter={() => handleMouseEnterAghanim(0)}
          onMouseLeave={() => handleMouseLeaveAghanim(0)}
        />
        <Image
          src={`/pictures/dotaItemIcons/${player.aghanims_shard === 1 ? 'shard_1' : 'shard_0'}.png`}
          alt=''
          width={41}
          height={24}
          onMouseEnter={() => handleMouseEnterAghanim(1)}
          onMouseLeave={() => handleMouseLeaveAghanim(1)}
        />
      </div>
    </>
  )
}
