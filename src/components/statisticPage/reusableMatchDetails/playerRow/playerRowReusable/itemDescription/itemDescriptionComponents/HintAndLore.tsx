// Styles
import styles from "@/styles/statisticPage/ItemDescription.module.scss"

// Types
import type { ItemDescriptionInterface } from "@/types/staticPage/staticPageTypes"

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
        <div className={styles.tooltip__description__hint}>
          {details[item].hint}
        </div>
      )}
      {details[item].lore && (
        <div className={styles.tooltip__description__lore}>
          <i>{details[item].lore}</i>
        </div>
      )}
    </>
  )
}
