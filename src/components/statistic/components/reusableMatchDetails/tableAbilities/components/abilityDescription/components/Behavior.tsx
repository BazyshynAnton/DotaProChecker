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
          <span>DAMAGE TYPE:</span> {behavior.dmg_type}
        </div>
      )}
      {behavior.bkbpierce && (
        <div className={styles.pierces}>
          <span>PIERCES DEBUFF IMMUNITY:</span> {behavior.bkbpierce}
        </div>
      )}
      {behavior.dispellable && (
        <div className={styles.dispellable}>
          <span>DISPELLABLE:</span> {behavior.dispellable}
        </div>
      )}
    </div>
  )
}
