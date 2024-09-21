import Tier from "./Tier"

import { Image } from "@/shared/nextjsImports"

import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/ItemDescription.module.scss"

export default function NameAndCost({
  details,
  item,
}: ItemDescriptionInterface) {
  //
  // Check for existence
  if (!details) {
    throw new Error("[DATA] Cannot get data about Item Details")
  }

  return (
    <div className={styles.tooltip__NameAndCostWrapper}>
      <div className={styles.tooltip__NameAndCostWrapper__itemPicture}>
        <Image
          src={`/pictures/dotaItemIcon/${details[item].img}.webp`}
          alt=""
          width={90}
          height={70}
        />
      </div>
      <div className={styles.tooltip__NameAndCostWrapper__nameAndCost}>
        <div className={styles.tooltip__NameAndCostWrapper__nameAndCost__name}>
          <h4>{details[item].dname}</h4>
        </div>
        <Tier details={details} item={item} />
      </div>
    </div>
  )
}