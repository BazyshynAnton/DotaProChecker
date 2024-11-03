import Tier from "./Tier"

import { Image } from "@/shared/nextjsImports"

import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import { ITEM_ICON_URL } from "@/utils/urls"

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
    <div className={styles.nameAndCostWrapper}>
      <div className={styles.nameAndCostWrapper__itemPicture}>
        <Image
          src={`${ITEM_ICON_URL}${details[item].img}.png`}
          alt=""
          width={90}
          height={70}
        />
      </div>
      <div className={styles.nameAndCostWrapper__nameAndCost}>
        <div className={styles.nameAndCostWrapper__nameAndCost__name}>
          <h4>{details[item].dname}</h4>
        </div>
        <Tier details={details} item={item} />
      </div>
    </div>
  )
}
