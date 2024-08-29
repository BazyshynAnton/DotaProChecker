import ItemDescription from "./ItemDescription"

import { Image } from "@/components/shared/nextjsImports"
import { useState } from "@/components/shared/reactImports"

import type { ItemDetails } from "@/types/staticPage/playerRowDetailsTypes"
import { Player } from "@/types/staticPage/staticPageTypes"
import { PlayerRowReusableUtility } from "@/utils/statisticPage/PlayerRowReusableUtility"

// Initial State for useState in MainSlotItems component.
const initialStateMainSlot = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
}

// Initial State for useState in BackpackItems component.
const initialStateBackpack = {
  0: false,
  1: false,
  2: false,
}

const initialStateAghanim = {
  0: false,
  1: false,
}

export function MainSlotItems({
  detailsAboutItems,
}: {
  detailsAboutItems: ItemDetails | null
}) {
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

export function BackpackItems({
  detailsAboutItems,
}: {
  detailsAboutItems: ItemDetails | null
}) {
  //
  //
  // State for manage tooltip about each item.
  const [toolTipStatus, setToolTipStatus] = useState<{
    [idx: string]: boolean
  }>(initialStateBackpack)

  // Check data
  if (!detailsAboutItems) return <CannotFind />

  // Initialize utility for manage data in component
  const prrUtility = new PlayerRowReusableUtility()

  // Create an Array<string> of items in main slot
  prrUtility.setItems(detailsAboutItems, "backpack")
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
          prrUtility.handleMouseEnter(item, "backpack", idx, setToolTipStatus)

        // Function to update the toolTipStatus when mouse leave
        const handleMouseLeave = () =>
          prrUtility.handleMouseLeave("backpack", idx, setToolTipStatus)

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

export function NeutralItem({
  detailsAboutItems,
}: {
  detailsAboutItems: ItemDetails | null
}) {
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

export function Aghanim({ player }: { player: Player }) {
  //
  //
  // State for manage tooltip about aghanim.
  const [toolTipStatus, setToolTipStatus] = useState(initialStateAghanim)

  // Initialize utility for manage data in component
  const prrUtility = new PlayerRowReusableUtility()

  // Function to update the toolTipStatus when mouse enter
  const handleMouseEnterAghanim = (idx: number) => {
    prrUtility.handleMouseEnter(
      "ultimate_scepter",
      "aghanim_slot",
      idx,
      setToolTipStatus
    )
  }

  // Function to update the toolTipStatus when mouse leave
  const handleMouseLeaveAghanim = (idx: number) => {
    prrUtility.handleMouseLeave("aghanim_slot", idx, setToolTipStatus)
  }

  // Get details about Current Aghanim Item
  const details = (item: string) =>
    prrUtility.findDetailsAboutCurrentItem("aghanim", item)

  // Condition
  const toolTipCondition = toolTipStatus[0]
    ? "ultimate_scepter"
    : "aghanims_shard"

  return (
    <>
      {(toolTipStatus[0] || toolTipStatus[1]) && (
        <ItemDescription
          details={details(toolTipCondition)}
          item={toolTipCondition}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={`/pictures/dotaItemIcon/${
            player.aghanims_scepter === 1 ? "scepter_1" : "scepter_0"
          }.png`}
          alt=""
          width={37}
          height={38}
          onMouseEnter={() => handleMouseEnterAghanim(0)}
          onMouseLeave={() => handleMouseLeaveAghanim(0)}
        />
        <Image
          src={`/pictures/dotaItemIcon/${
            player.aghanims_shard === 1 ? "shard_1" : "shard_0"
          }.png`}
          alt=""
          width={41}
          height={24}
          onMouseEnter={() => handleMouseEnterAghanim(1)}
          onMouseLeave={() => handleMouseLeaveAghanim(1)}
        />
      </div>
    </>
  )
}

function CannotFind() {
  return <div style={{ color: "#ec729c" }}>NULL</div>
}
