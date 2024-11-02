import styles from "@/styles/statistic/AbilityDescription.module.scss"
import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"

export default function Attributes({ abilityName }: { abilityName: string }) {
  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const attribs = uAbilityDetails.findAbilityAttributes(abilityName)

  return (
    <div className={styles.attributes}>
      {attribs.map((attrib: any, idx: number) => {
        return (
          <div key={idx}>
            {attrib.header} {attrib.value}
          </div>
        )
      })}
    </div>
  )
}
