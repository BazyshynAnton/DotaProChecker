import ItemDescription from "../itemDescription/ItemDescription"
import CannotFind from "./CannotFind"

import { Image } from "@/shared/nextjsImports"
import { useState } from "@/shared/reactImports"

import { PlayerRowUtility } from "@/utils/statistic/PlayerRowUtility"

import type { SlotInterface } from "@/types/statistic/playerRow"

export default function NeutralItem({ itemDetails }: SlotInterface) {
  //
  // State for manage tooltip about neutral item.
  const [toolTipStatus, setToolTipStatus] = useState(false)
  if (!itemDetails?.item_neutral.img) return <CannotFind />

  // Initialize neutral item
  const neutralItem: string = itemDetails.item_neutral.img

  // Initialize utility for manage data in component
  const prrUtility = PlayerRowUtility.getInstance()

  // Get details about Current Neutral Item
  const details = prrUtility.findDetailsAboutCurrentItem(
    "item",
    neutralItem,
    itemDetails
  )

  // Function to update the toolTipStatus when mouse enter
  const handleMouseEnter = () => {
    prrUtility.handleMouseEnter(
      neutralItem,
      "neutral_slot",
      -1,
      setToolTipStatus
    )
  }

  // Function to update the toolTipStatus when mouse leave
  const handleMouseLeave = () => {
    prrUtility.handleMouseLeave("neutral_slot", -1, setToolTipStatus)
  }

  return (
    <div>
      {toolTipStatus && (
        <ItemDescription details={details} item={neutralItem} />
      )}
      <Image
        src={`/pictures/dotaItemIcons/${neutralItem}.webp`}
        alt=""
        width={39}
        height={32}
        quality={100}
        unoptimized
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  )
}
