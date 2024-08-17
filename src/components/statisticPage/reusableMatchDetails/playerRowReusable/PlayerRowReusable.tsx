import { Image } from "@/components/shared/nextjsImports"
import { useState } from "react"

export function ItemIcons({
  image_name_0,
  image_name_1,
  image_name_2,
  image_name_3,
  image_name_4,
  image_name_5,
}: {
  [key: string]: string | undefined
}) {
  const [isTooltip, setIsToolTip] = useState<boolean>(false)

  if (
    !image_name_0 ||
    !image_name_1 ||
    !image_name_2 ||
    !image_name_3 ||
    !image_name_4 ||
    !image_name_5
  ) {
    return <div style={{ color: "#ec729c" }}>NULL</div>
  }

  const handleMouse = () => {
    setIsToolTip(true)
  }

  const imageArr = [
    image_name_0,
    image_name_1,
    image_name_2,
    image_name_3,
    image_name_4,
    image_name_5,
  ]

  return (
    <>
      {imageArr.map((img: string, idx: number) => (
        <div key={idx} style={{ position: "relative" }}>
          {/* add component */}
          <Image
            src={`/pictures/dotaItemIcon/${img}.webp`}
            alt=""
            width={37}
            height={27}
            quality={100}
            unoptimized
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
          />
        </div>
      ))}
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
