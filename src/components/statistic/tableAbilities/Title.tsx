import { Image } from "@/shared/nextjsImports"
import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"
import { useAppSelector } from "@/hooks/useAppSelector"

import { HERO_ABILITY_ICON_URL } from "@/utils/urls"

import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function Title({ abilityKey }: { abilityKey: string }) {
  const { abilities } = useAppSelector((store) => store.statisticSlice)

  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const name = uAbilityDetails.findAbilityRealName(abilityKey, abilities)

  const talentTree: boolean = abilityKey.includes("special_bonus")

  return (
    <>
      <div className={!talentTree ? styles.title : styles.title_bonus}>
        <Image
          src={
            !talentTree
              ? `${HERO_ABILITY_ICON_URL}${abilityKey}.png`
              : "/pictures/dotaAbilityIcons/talent_tree.svg"
          }
          alt={name}
          width={52}
          height={52}
        />
        <div className={styles.title__name}>
          {name === ""
            ? "+2 Attributes"
            : name === "unnamed"
              ? "Auto Attack/Other"
              : name}
        </div>
      </div>
    </>
  )
}
