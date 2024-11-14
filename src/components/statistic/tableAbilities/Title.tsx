import { Image } from "@/shared/nextjsImports"
import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"
import { HERO_ABILITY_URL } from "@/utils/urls"
import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function Title({ abilityName }: { abilityName: string }) {
  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const name = uAbilityDetails.findAbilityRealName(abilityName)

  const talentTree: boolean = abilityName.includes("special_bonus")

  return (
    <>
      <div className={!talentTree ? styles.title : styles.title_bonus}>
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
        <h3 className={styles.title__name}>
          {name === "" ? "+2 Attributes" : name}
        </h3>
      </div>
    </>
  )
}
