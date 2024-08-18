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
    !detailsAboutItems?.item_1.img ||
    !detailsAboutItems?.item_2.img ||
    !detailsAboutItems?.item_3.img ||
    !detailsAboutItems?.item_4.img ||
    !detailsAboutItems?.item_5.img
  ) {
    return <div style={{ color: "#ec729c" }}>NULL</div>
  }

  const itemIcons: string[] | null = []

  itemIcons.push(detailsAboutItems?.item_1.img)
  itemIcons.push(detailsAboutItems?.item_2.img)
  itemIcons.push(detailsAboutItems?.item_3.img)
  itemIcons.push(detailsAboutItems?.item_4.img)
  itemIcons.push(detailsAboutItems?.item_5.img)

  const handleMouse = (idx: number | string) => {
    idx.toString()
    setToolTipStatus((prevState) => {
      const newState = { ...prevState, [idx]: true }

      return newState
    })
  }

  // [key: string]: {
  // abilities?: Ability[]
  // img?: string
  // id?: number
  // dname?: string
  // cost?: number | null
  // behavior?: string[] | string | boolean
  // cd?: number | boolean
  // lore?: string

  const details = (item: string): ItemDetails | null => {
    const res: ItemDetails = {}

    for (const [key, value] of Object.entries(detailsAboutItems)) {
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
          <div key={idx} style={{ position: "relative" }}>
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
              onMouseEnter={() => handleMouse(idx)}
              onMouseLeave={() => handleMouse(idx)}
            />
          </div>
        )
      })}
    </>
  )
}

export function BackpackItemIcons({
  image_name_0,
  image_name_1,
  image_name_2,
}: {
  [key: string]: string | undefined
}) {
  if (!image_name_0 || !image_name_1 || !image_name_2)
    return <div style={{ color: "#ec729c" }}>NULL</div>

  const imageArr = [image_name_0, image_name_1, image_name_2]

  return (
    <>
      {imageArr.map((img: string, idx: number) => (
        <Image
          key={idx}
          src={`/pictures/dotaItemIcon/${img}.webp`}
          alt=""
          width={37}
          height={27}
          quality={100}
          unoptimized
        />
      ))}
    </>
  )
}
