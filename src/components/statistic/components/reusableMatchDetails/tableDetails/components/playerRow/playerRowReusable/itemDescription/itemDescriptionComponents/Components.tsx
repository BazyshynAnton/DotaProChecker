import { Image } from "@/shared/nextjsImports"

import { PlayerRowDetailsUtility } from "@/utils/statistic/PlayerRowDetailsUtility"

import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/ItemDescription.module.scss"

export default function Components({
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
      {details[item].components && details[item].components.length > 0 && (
        <div className={styles.components}>
          <span>Components:</span>
          <div className={styles.components__items}>
            {details[item].components.map((component, idx) => {
              const rdUtility = PlayerRowDetailsUtility.getInstance()
              const itemCost = rdUtility.findItemCostByName(component)

              return (
                <div key={idx} className={styles.components__items__item}>
                  <Image
                    src={`/pictures/dotaItemIcons/${component}.webp`}
                    alt=""
                    width={34}
                    height={25}
                  />
                  <span>{itemCost}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
