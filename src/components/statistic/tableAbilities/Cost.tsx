import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"
import { Image } from "@/shared/nextjsImports"

import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function Cost({ abilityName }: { abilityName: string }) {
  const uAbilityDetails = AbilityDetailsUtility.getInstance()
  const cost = uAbilityDetails.findAbilityCost(abilityName)

  return (
    <>
      {(cost.mc || cost.cd) && (
        <div className={styles.cost}>
          {cost.mc && (
            <div className={styles.mana}>
              <CostImage type={"ability_manacost"} />
              {cost.mc}
            </div>
          )}
          {cost.cd && (
            <div className={styles.cooldown}>
              <CostImage type={"ability_cooldown"} />
              {cost.cd}
            </div>
          )}
        </div>
      )}
    </>
  )
}

function CostImage({ type }: { type: string }) {
  return (
    <Image
      src={`/pictures/dotaIcons/${type}.png`}
      alt={type}
      width={15}
      height={15}
    />
  )
}
