import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"

import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function Behavior({ abilityName }: { abilityName: string }) {
  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const behavior = uAbilityDetails.findAbilityBehavior(abilityName)

  return (
    <div className={styles.behavior}>
      {behavior.target && (
        <div className={styles.target}>
          <span>TARGET:</span> {behavior.target}
        </div>
      )}
      {behavior.dmg_type && (
        <div className={styles.dmgType}>
          <span>DAMAGE TYPE:</span>{" "}
          <span
            className={
              behavior.dmg_type === "Magical"
                ? styles.dmgType_magical
                : behavior.dmg_type === "Pure"
                ? styles.dmgType_pure
                : styles.dmgType_physical
            }
          >
            {behavior.dmg_type}
          </span>
        </div>
      )}
      {behavior.bkbpierce && (
        <div className={styles.pierces}>
          <span>PIERCES DEBUFF IMMUNITY:</span>{" "}
          <span
            className={
              behavior.bkbpierce === "Yes"
                ? styles.pierces_yes
                : styles.pierces_no
            }
          >
            {behavior.bkbpierce}
          </span>
        </div>
      )}
      {behavior.dispellable && (
        <div className={styles.dispellable}>
          <span>DISPELLABLE:</span>{" "}
          <span
            className={
              behavior.dispellable === "Yes"
                ? styles.dispellable_yes
                : styles.dispellable_no
            }
          ></span>
          {behavior.dispellable}
        </div>
      )}
    </div>
  )
}
