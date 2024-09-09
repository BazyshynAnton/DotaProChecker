import { Image } from "@/shared/nextjsImports"

import type { ItemDescriptionInterface } from "@/types/staticPage/playerRow"

import styles from "@/styles/statisticPage/ItemDescription.module.scss"

export default function Tier({ details, item }: ItemDescriptionInterface) {
  //
  // Check for existence
  if (!details) {
    throw new Error("[DATA] Cannot get data about Item Details")
  }

  return (
    <>
      {details[item].tier ? (
        <div className={styles.tooltip__NameAndCostWrapper__nameAndCost__tier}>
          <span>Tier {details[item].tier} Neutral Item</span>
        </div>
      ) : (
        <div className={styles.tooltip__NameAndCostWrapper__nameAndCost__cost}>
          <Image
            src={`/pictures/dotaIcons/gold_symbol.webp`}
            alt=""
            width={20}
            height={20}
          />
          <p>{details[item].cost}</p>
        </div>
      )}
    </>
  )
}
