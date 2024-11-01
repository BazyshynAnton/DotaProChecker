import { Image } from "@/shared/nextjsImports"
import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"
import { HERO_ABILITY_URL } from "@/utils/urls"
import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function Title({ abilityName }: { abilityName: string }) {
  const uAbilityDetails = new AbilityDetailsUtility()
  const name = uAbilityDetails.findAbilityRealName(abilityName)

  const talentTree: boolean = abilityName.includes("special_bonus")
  return (
    <div className={styles.title}>
      <Image
        src={
          !talentTree
            ? `${HERO_ABILITY_URL}${abilityName}.png`
            : "/pictures/dotaAbilityIcons/talent_tree.svg"
        }
        alt=""
        width={52}
        height={52}
      />
      <h3 className={styles.title__name}>{name}</h3>
    </div>
  )
}
