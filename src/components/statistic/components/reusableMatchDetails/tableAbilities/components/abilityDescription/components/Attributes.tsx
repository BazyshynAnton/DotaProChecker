import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"

import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function Attributes({ abilityName }: { abilityName: string }) {
  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const attribs = uAbilityDetails.findAbilityAttributes(abilityName)

  return (
    <div className={styles.attributes}>
      {attribs.map((attrib: any, idx: number) => {
        return (
          <div key={idx} className={styles.attributes__header}>
            {attrib.header} <span>{attrib.value}</span>
          </div>
        )
      })}
    </div>
  )
}
