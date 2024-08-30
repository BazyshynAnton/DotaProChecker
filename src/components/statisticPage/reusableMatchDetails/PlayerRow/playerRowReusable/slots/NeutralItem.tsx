// Components
import ItemDescription from "../itemDescription/ItemDescription"
import CannotFind from "./CannotFind"

// Next.js
import { Image } from "@/components/shared/nextjsImports"

// React
import { useState } from "@/components/shared/reactImports"

// Classes
import { PlayerRowReusableUtility } from "@/utils/statisticPage/PlayerRowReusableUtility"

// Type
import type { SlotInterface } from "@/types/staticPage/staticPageTypes"

export default function NeutralItem({ detailsAboutItems }: SlotInterface) {
  //
  //
  // State for manage tooltip about neutral item.
  const [toolTipStatus, setToolTipStatus] = useState(false)
  if (!detailsAboutItems?.item_neutral.img) return <CannotFind />

  // Initialize neutral item
  const neutralItem: string = detailsAboutItems.item_neutral.img

  // Initialize utility for manage data in component
  const prrUtility = new PlayerRowReusableUtility()

  // Get details about Current Neutral Item
  const details = prrUtility.findDetailsAboutCurrentItem(
    "item",
    neutralItem,
    detailsAboutItems
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
        src={`/pictures/dotaItemIcon/${neutralItem}.webp`}
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
