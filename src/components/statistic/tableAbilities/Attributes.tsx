import { AbilityDetailsUtility } from '@/utils/statistic/AbilityDetailsUtility'

import styles from '@/styles/statistic/AbilityDescription.module.scss'
import { useAppSelector } from '@/hooks/useAppSelector'

export default function Attributes({ abilityKey }: { abilityKey: string }) {
  const { abilities } = useAppSelector((store) => store.statisticSlice)

  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const attribs = uAbilityDetails.findAbilityAttributes(abilityKey, abilities)

  return (
    <div className={styles.attributes}>
      {attribs.map((attrib: any, idx: number) => {
        return (
          <div key={idx} className={styles.attributes__header}>
            {attrib.header} <div>{attrib.value}</div>
          </div>
        )
      })}
    </div>
  )
}
