import { AbilityDetailsUtility } from '@/utils/statistic/AbilityDetailsUtility'
import { useAppSelector } from '@/hooks/useAppSelector'

import styles from '@/styles/statistic/AbilityDescription.module.scss'

export default function Description({ abilityKey }: { abilityKey: string }) {
  const { abilities } = useAppSelector((store) => store.statisticSlice)

  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const description = uAbilityDetails.findAbilityDescription(abilityKey, abilities)

  return <div className={styles.aboutAbility}>{description}</div>
}
