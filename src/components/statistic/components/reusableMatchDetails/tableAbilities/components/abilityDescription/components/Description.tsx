import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"

import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function Description({ abilityName }: { abilityName: string }) {
  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const description = uAbilityDetails.findAbilityDescription(abilityName)

  return <div className={styles.aboutAbility}>{description}</div>
}
