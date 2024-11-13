import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/ItemDescription.module.scss"

export default function Attribute({ details, item }: ItemDescriptionInterface) {
  //
  // Check for existence
  if (!details) {
    throw new Error("[DATA] Cannot get data about Item Details")
  }

  return (
    <div className={styles.attrib}>
      {details[item].attrib?.map((att) => {
        //
        // Check for existence
        if (!att.display) return

        // Erase {value} from string
        const partsOfString = att.display.split("{value}")

        return (
          <div key={att.key} className={styles.attrib__text}>
            <span>{partsOfString[0]}</span>
            <span style={{ color: "#ffffffde" }}>{att.value}</span>
            <span>{partsOfString[1]}</span>
          </div>
        )
      })}
    </div>
  )
}
