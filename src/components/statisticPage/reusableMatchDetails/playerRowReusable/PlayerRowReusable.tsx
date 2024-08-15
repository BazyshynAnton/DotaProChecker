import { Image } from "@/components/shared/nextjsImports"

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
  if (
    !image_name_0 ||
    !image_name_1 ||
    !image_name_2 ||
    !image_name_3 ||
    !image_name_4 ||
    !image_name_5
  )
    return <div style={{ color: "#ec729c" }}>NULL</div>
  return (
    <>
      <Image
        src={`/pictures/dotaItems/${image_name_0}.webp`}
        alt=""
        width={37}
        height={27}
        quality={100}
        unoptimized
      />
      <Image
        src={`/pictures/dotaItems/${image_name_1}.webp`}
        alt=""
        width={37}
        height={27}
        quality={100}
        unoptimized
      />
      <Image
        src={`/pictures/dotaItems/${image_name_2}.webp`}
        alt=""
        width={37}
        height={27}
        quality={100}
        unoptimized
      />
      <Image
        src={`/pictures/dotaItems/${image_name_3}.webp`}
        alt=""
        width={37}
        height={27}
        quality={100}
        unoptimized
      />
      <Image
        src={`/pictures/dotaItems/${image_name_4}.webp`}
        alt=""
        width={37}
        height={27}
        quality={100}
        unoptimized
      />
      <Image
        src={`/pictures/dotaItems/${image_name_5}.webp`}
        alt=""
        width={37}
        height={27}
        quality={100}
        unoptimized
      />
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

  return (
    <>
      <Image
        src={`/pictures/dotaItems/${image_name_0}.webp`}
        alt=""
        width={30}
        height={20}
        quality={100}
        unoptimized
      />{" "}
      <Image
        src={`/pictures/dotaItems/${image_name_1}.webp`}
        alt=""
        width={30}
        height={20}
        quality={100}
        unoptimized
      />{" "}
      <Image
        src={`/pictures/dotaItems/${image_name_2}.webp`}
        alt=""
        width={30}
        height={20}
        quality={100}
        unoptimized
      />
    </>
  )
}
