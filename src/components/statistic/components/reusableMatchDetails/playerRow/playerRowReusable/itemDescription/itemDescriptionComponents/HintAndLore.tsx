import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/ItemDescription.module.scss"

export default function HintAndLore({
  details,
  item,
}: ItemDescriptionInterface) {
  //
  // Check for existence
  if (!details) {
    throw new Error("[DATA] Cannot get data about Item Details")
  }

  return (
    <>
      {details[item].hint && details[item].hint.length > 0 && (
        <div className={styles.hint}>{details[item].hint}</div>
      )}
      {details[item].lore && (
        <div className={styles.lore}>
          <i>{details[item].lore}</i>
        </div>
      )}
    </>
  )
}
