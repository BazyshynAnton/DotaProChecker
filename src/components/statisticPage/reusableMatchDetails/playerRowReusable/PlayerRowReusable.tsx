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
          item,
          detailsAboutItems
        )

        // Function to update the toolTipStatus when mouse enter
        const handleMouseEnter = () =>
          prrUtility.handleMouseEnter("backpack", item, idx, setToolTipStatus)

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

  // Get details about Current Item
  const details = prrUtility.findDetailsAboutCurrentItem(
    neutralItem,
    detailsAboutItems
  )

  // Function to update the toolTipStatus when mouse enter
  const handleMouseEnter = () => {
    prrUtility.handleMouseEnter("neutral_slot", neutralItem)
  }

  // Function to update the toolTipStatus when mouse leave
  const handleMouseLeave = () => {
    prrUtility.handleMouseLeave("neutral_slot")
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

export function Aghanim({
  player,
  detailsAboutItems,
}: {
  player: Player
  detailsAboutItems: ItemDetails | null
}) {
  //
  //
  // State for manage tooltip about aghanim.
  const [toolTipStatus, setToolTipStatus] = useState(initialStateAghanim)

  if (!detailsAboutItems) return <CannotFind />

  const handleMouseEnter = (idx: number) => {
    setToolTipStatus((prevState) => {
      const newState = { ...prevState, [idx]: true }
      return newState
    })
  }

  const handleMouseLeave = (idx: number) => {
    setToolTipStatus((prevState) => {
      const newState = { ...prevState, [idx]: false }
      return newState
    })
  }

  const details = (item: string): ItemDetails | null => {
    if (item === "ultimate_scepter") {
      return {
        ultimate_scepter: {
          abilities: [
            {
              type: "passive",
              title: "Ability Upgrade",
              description:
                "Upgrades the ultimate, and some abilities, of all heroes.",
            },
          ],
          hint: [],
          id: 108,
          img: "ultimate_scepter",
          dname: "Aghanim's Scepter",
          cost: 4200,
          attrib: [
            {
              key: "bonus_all_stats",
              display: "+ {value} All Attributes",
              value: "10",
            },
            {
              key: "bonus_health",
              display: "+ {value} Health",
              value: "175",
            },
            {
              key: "bonus_mana",
              display: "+ {value} Mana",
              value: "175",
            },
          ],
          mc: false,
          cd: false,
          lore: "The scepter of a wizard with demigod-like powers.",
          components: [
            "point_booster",
            "staff_of_wizardry",
            "ogre_axe",
            "blade_of_alacrity",
          ],
        },
      }
    }

    if (item === "aghanims_shard") {
      return {
        aghanims_shard: {
          abilities: [
            {
              type: "passive",
              title: "Ability Upgrade",
              description:
                "Upgrades an existing ability or adds a new ability to your hero.",
            },
          ],
          hint: [],
          id: 609,
          img: "aghanims_shard",
          dname: "Aghanim's Shard",
          cost: 1400,
          attrib: [],
          mc: false,
          cd: false,
          lore: "With origins known only to a single wizard, fragments of this impossible crystal are nearly as coveted as the renowned scepter itself.",
          components: null,
        },
      }
    }

    return null
  }

  return (
    <>
      {(toolTipStatus[0] || toolTipStatus[1]) && (
        <ItemDescription
          details={details(
            toolTipStatus[0] ? "ultimate_scepter" : "aghanims_shard"
          )}
          item={toolTipStatus[0] ? "ultimate_scepter" : "aghanims_shard"}
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
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        />
        <Image
          src={`/pictures/dotaItemIcon/${
            player.aghanims_shard === 1 ? "shard_1" : "shard_0"
          }.png`}
          alt=""
          width={41}
          height={24}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        />
      </div>
    </>
  )
}

function CannotFind() {
  return <div style={{ color: "#ec729c" }}>NULL</div>
}
