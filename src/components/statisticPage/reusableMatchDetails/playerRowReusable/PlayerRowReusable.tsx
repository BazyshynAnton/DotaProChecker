import ItemDescription from "./ItemDescription"

import { Image } from "@/components/shared/nextjsImports"
import { useState } from "@/components/shared/reactImports"

import type { ItemDetails } from "@/types/staticPage/playerRowDetailsTypes"

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
