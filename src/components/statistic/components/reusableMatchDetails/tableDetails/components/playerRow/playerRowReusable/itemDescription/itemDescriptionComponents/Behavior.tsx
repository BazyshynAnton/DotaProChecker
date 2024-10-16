import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/ItemDescription.module.scss"

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

  const dispellableCondition =
    details[item].dispellable === "Yes"
      ? styles.dispellable_typeOne
      : styles.dispellable_typeTwo

  const bkbpierceCondition =
    details[item].bkbpierce === "Yes"
      ? styles.piercesDebuffImmunity_typeOne
      : styles.piercesDebuffImmunity_typeTwo

  return (
    <>
      {details[item].behavior && (
        <div className={styles.target}>
          <span>TARGET:</span>
          <span style={{ color: "#ffffffde" }}> {target}</span>
        </div>
      )}
      {details[item].dispellable && (
        <div className={styles.dispellable}>
          <span>DISPELLABLE:</span>
          <span className={dispellableCondition}>
            {" "}
            {details[item].dispellable}
          </span>
        </div>
      )}
      {details[item].bkbpierce && (
        <div className={styles.piercesDebuffImmunity}>
          <span>PIERCES DEBUFF IMMUNITY:</span>
          <span className={bkbpierceCondition}> {details[item].bkbpierce}</span>
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
