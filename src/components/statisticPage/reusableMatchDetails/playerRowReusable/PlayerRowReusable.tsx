import ItemDescription from "./ItemDescription"

import { Image } from "@/components/shared/nextjsImports"
import { useState } from "@/components/shared/reactImports"

import type { ItemDetails } from "@/types/staticPage/playerRowDetailsTypes"
import { Player } from "@/types/staticPage/staticPageTypes"

export function ItemIcons({
  detailsAboutItems,
}: {
  detailsAboutItems: ItemDetails | null
}) {
  const [toolTipStatus, setToolTipStatus] = useState<{
    [idx: string]: boolean
  }>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  })

  if (
    !detailsAboutItems?.item_0.img ||
    !detailsAboutItems?.item_1.img ||
    !detailsAboutItems?.item_2.img ||
    !detailsAboutItems?.item_3.img ||
    !detailsAboutItems?.item_4.img ||
    !detailsAboutItems?.item_5.img
  ) {
    return <div style={{ color: "#ec729c" }}>NULL</div>
  }

  const itemIcons: string[] | null = []

  itemIcons.push(detailsAboutItems.item_0.img)
  itemIcons.push(detailsAboutItems.item_1.img)
  itemIcons.push(detailsAboutItems.item_2.img)
  itemIcons.push(detailsAboutItems.item_3.img)
  itemIcons.push(detailsAboutItems.item_4.img)
  itemIcons.push(detailsAboutItems.item_5.img)

  const handleMouseEnter = (item: string, idx: number | string) => {
    if (item == "empty_slot") return

    idx.toString()
    setToolTipStatus((prevState) => {
      const newState = { ...prevState, [idx]: true }

      return newState
    })
  }

  const handleMouseLeave = (idx: number | string) => {
    idx.toString()
    setToolTipStatus((prevState) => {
      const newState = { ...prevState, [idx]: false }

      return newState
    })
  }

  const details = (item: string): ItemDetails | null => {
    const res: ItemDetails = {}

    for (const [_, value] of Object.entries(detailsAboutItems)) {
      if (item === value.img) {
        res[item] = value

        return res
      }
    }

    return null
  }

  return (
    <>
      {itemIcons.map((item: string, idx: number) => {
        return (
          <div key={idx}>
            {toolTipStatus[idx] && (
              <ItemDescription details={details(item)} item={item} />
            )}
            <Image
              src={`/pictures/dotaItemIcon/${item}.webp`}
              alt=""
              width={37}
              height={27}
              quality={100}
              unoptimized
              onMouseEnter={() => handleMouseEnter(item, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            />
          </div>
        )
      })}
    </>
  )
}

export function BackpackItemIcons({
  detailsAboutItems,
}: {
  detailsAboutItems: ItemDetails | null
}) {
  const [toolTipStatus, setToolTipStatus] = useState<{
    [idx: string]: boolean
  }>({
    0: false,
    1: false,
    2: false,
  })

  if (
    !detailsAboutItems?.backpack_0.img ||
    !detailsAboutItems?.backpack_1.img ||
    !detailsAboutItems?.backpack_2.img
  )
    return <div style={{ color: "#ec729c" }}>NULL</div>

  const itemIcons: string[] | null = []

  itemIcons.push(detailsAboutItems.backpack_0.img)
  itemIcons.push(detailsAboutItems.backpack_1.img)
  itemIcons.push(detailsAboutItems.backpack_2.img)

  const handleMouseEnter = (item: string, idx: number | string) => {
    if (item == "empty_slot") return

    idx.toString()
    setToolTipStatus((prevState) => {
      const newState = { ...prevState, [idx]: true }

      return newState
    })
  }

  const handleMouseLeave = (idx: number | string) => {
    idx.toString()
    setToolTipStatus((prevState) => {
      const newState = { ...prevState, [idx]: false }

      return newState
    })
  }

  const details = (item: string): ItemDetails | null => {
    const res: ItemDetails = {}

    for (const [_, value] of Object.entries(detailsAboutItems)) {
      if (item === value.img) {
        res[item] = value

        return res
      }
    }

    return null
  }

  return (
    <>
      {itemIcons.map((item: string, idx: number) => (
        <div key={idx}>
          {toolTipStatus[idx] && (
            <ItemDescription details={details(item)} item={item} />
          )}
          <Image
            src={`/pictures/dotaItemIcon/${item}.webp`}
            alt=""
            width={37}
            height={27}
            quality={100}
            unoptimized
            onMouseEnter={() => handleMouseEnter(item, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          />
        </div>
      ))}
    </>
  )
}

export function NeutralItem({
  detailsAboutItems,
}: {
  detailsAboutItems: ItemDetails | null
}) {
  const [toolTipStatus, setToolTipStatus] = useState(false)
  if (!detailsAboutItems?.item_neutral.img) return <div>NULL</div>

  const item: string = detailsAboutItems.item_neutral.img

  const details = (item: string): ItemDetails | null => {
    const res: ItemDetails = {}

    for (const [_, value] of Object.entries(detailsAboutItems)) {
      if (item === value.img) {
        res[item] = value

        return res
      }
    }

    return null
  }

  const handleMouseEnter = (item: string) => {
    if (item == "empty_slot") return

    setToolTipStatus(true)
  }

  const handleMouseLeave = () => {
    setToolTipStatus(false)
  }

  return (
    <div>
      {toolTipStatus && <ItemDescription details={details(item)} item={item} />}
      <Image
        src={`/pictures/dotaItemIcon/${item}.webp`}
        alt=""
        width={39}
        height={32}
        quality={100}
        unoptimized
        onMouseEnter={() => handleMouseEnter(item)}
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
  const [toolTipStatus, setToolTipStatus] = useState({
    0: false,
    1: false,
  })

  if (!detailsAboutItems) return <div>NULL</div>

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
    const res: ItemDetails = {}

    for (const [_, value] of Object.entries(detailsAboutItems)) {
      if (item === value.img) {
        res[item] = value

        return res
      }
    }

    return null
  }

  return (
    <>
      {toolTipStatus && (
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
