// Components
import ItemDescription from "../itemDescription/ItemDescription"
import CannotFind from "./CannotFind"

// Next.js
import { Image } from "@/shared/nextjsImports"

// React
import { useState } from "@/shared/reactImports"

// Classes
import { PlayerRowReusableUtility } from "@/utils/statisticPage/PlayerRowReusableUtility"

// Type
import type { SlotInterface } from "@/types/staticPage/staticPageTypes"

// Initial State for useState in MainSlotItems component.
const initialStateMainSlot = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
}

export default function MainSlotItems({ detailsAboutItems }: SlotInterface) {
  //
  //
  // State for manage tooltip about each item.
  const [toolTipStatus, setToolTipStatus] = useState<{
    [idx: string]: boolean
  }>(initialStateMainSlot)

  // Check data
  if (!detailsAboutItems) return <CannotFind />

  // Initialize utility for manage data in component
  const prrUtility = new PlayerRowReusableUtility()

  // Create an Array<string> of items in main slot
  prrUtility.setItems(detailsAboutItems, "main_slot")
  const items = prrUtility.m_Items

  return (
    <>
      {items.map((item: string, idx: number) => {
        //
        // Get details about Current Item
        const details = prrUtility.findDetailsAboutCurrentItem(
          "item",
          item,
          detailsAboutItems
        )

        // Function to update the toolTipStatus when mouse enter
        const handleMouseEnter = () =>
          prrUtility.handleMouseEnter(item, "main_slot", idx, setToolTipStatus)

        // Function to update the toolTipStatus when mouse leave
        const handleMouseLeave = () =>
          prrUtility.handleMouseLeave("main_slot", idx, setToolTipStatus)

        return (
          <div key={idx}>
            {toolTipStatus[idx] && (
              <ItemDescription details={details} item={item} />
            )}
            <Image
              src={`/pictures/dotaItemIcon/${item}.webp`}
              alt=""
              width={37}
              height={27}
              quality={100}
              unoptimized
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        )
      })}
    </>
  )
}
