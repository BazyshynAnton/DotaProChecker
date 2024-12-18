import { Image } from "@/shared/nextjsImports"
import { PlayerRowDetailsUtility } from "@/utils/statistic/PlayerRowDetailsUtility"
import { useAppSelector } from "@/hooks/useAppSelector"

import { ITEM_ICON_URL } from "@/utils/urls"

import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/ItemDescription.module.scss"

export default function Components({
  details,
  item,
}: ItemDescriptionInterface) {
  const { items } = useAppSelector((store) => store.statisticSlice)

  if (!details || !items) {
    throw new Error("[DATA] Cannot get data about Item Details")
  }

  return (
    <>
      {details[item].components && details[item].components.length > 0 && (
        <div className={styles.components}>
          <div style={{ display: "inline" }}>Components:</div>
          <div className={styles.components__items}>
            {details[item].components.map((component, idx) => {
              const rdUtility = new PlayerRowDetailsUtility()
              const itemCost = rdUtility.findItemCostByKey(component, items)

              return (
                <div key={idx} className={styles.components__items__item}>
                  <Image
                    src={
                      !component.includes("recipe")
                        ? `${ITEM_ICON_URL}${component}.png`
                        : `${ITEM_ICON_URL}recipe.png`
                    }
                    alt=""
                    width={34}
                    height={25}
                  />
                  <div>{itemCost}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
