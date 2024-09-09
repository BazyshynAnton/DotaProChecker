import { Image } from "@/shared/nextjsImports"

import { PlayerRowDetailsUtility } from "@/utils/statisticPage/PlayerRowDetailsUtility"

import type { ItemDescriptionInterface } from "@/types/staticPage/playerRow"

import styles from "@/styles/statisticPage/ItemDescription.module.scss"

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
        <div className={styles.tooltip__description__components}>
          <span>Components:</span>
          <div className={styles.tooltip__description__components__items}>
            {details[item].components.map((component, idx) => {
              const rdUtility = new PlayerRowDetailsUtility()
              const itemCost = rdUtility.findItemCostByName(component)
              return (
                <div
                  key={idx}
                  className={
                    styles.tooltip__description__components__items__item
                  }
                >
                  <Image
                    src={`/pictures/dotaItemIcon/${component}.webp`}
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
