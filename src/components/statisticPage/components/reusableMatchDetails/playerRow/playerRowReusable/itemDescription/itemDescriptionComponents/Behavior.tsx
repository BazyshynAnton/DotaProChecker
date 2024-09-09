import type { ItemDescriptionInterface } from "@/types/staticPage/playerRow"

import styles from "@/styles/statisticPage/ItemDescription.module.scss"

export default function Behavior({ details, item }: ItemDescriptionInterface) {
  //
  // Check for existence
  if (!details) {
    throw new Error("[DATA] Cannot get data about Item Details")
  }

  // Formatting string to get the result like that:
  // [example] -> Point Target / AOE
  let target: string = ""
  if (Array.isArray(details[item].behavior)) {
    details[item].behavior.forEach((str) => {
      target += str + " / "
    })

    target = target.substring(0, target.length - 2)
  } else if (typeof details[item].behavior === "string")
    target = details[item].behavior

  return (
    <>
      {details[item].behavior && (
        <div className={styles.tooltip__description__target}>
          <span>TARGET:</span>
          <span style={{ color: "#ffffffde" }}> {target}</span>
        </div>
      )}
      {details[item].dispellable && (
        <div className={styles.tooltip__description__dispellable}>
          <span>DISPELLABLE:</span>
          <span
            className={
              details[item].dispellable === "Yes"
                ? styles.tooltip__description__dispellable_typeOne
                : styles.tooltip__description__dispellable_typeTwo
            }
          >
            {" "}
            {details[item].dispellable}
          </span>
        </div>
      )}
      {details[item].bkbpierce && (
        <div className={styles.tooltip__description__piercesDebuffImmunity}>
          <span>PIERCES DEBUFF IMMUNITY:</span>
          <span
            className={
              details[item].bkbpierce === "Yes"
                ? styles.tooltip__description__piercesDebuffImmunity_typeOne
                : styles.tooltip__description__piercesDebuffImmunity_typeTwo
            }
          >
            {" "}
            {details[item].bkbpierce}
          </span>
        </div>
      )}
      {details[item].behavior &&
        details[item].dispellable &&
        details[item].bkbpierce && (
          <hr
            style={{
              width: "100%",
              height: "1.5px",
              background: "#6c7b7e",
              border: "none",
              margin: "18px 0px 13px 0px",
            }}
          />
        )}
    </>
  )
}
