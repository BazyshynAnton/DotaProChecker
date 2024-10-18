import { HERO_ABILITY_URL } from "@/utils/urls"

import { UPlayerRowDetails } from "@/types/statistic/playerRow"
import { Image } from "@/shared/nextjsImports"

import { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/TableAbilities.module.scss"

export default function Abilities({
  player,
  uRowDetails,
}: {
  player: Player
  uRowDetails: UPlayerRowDetails
}) {
  return (
    <>
      {player.ability_upgrades_arr.map((ability) => {
        const abilityName = uRowDetails.findAbilityByID(ability)
        return (
          <td key={ability} className={styles.tableBodyRow__abilityDataCell}>
            <div className={styles.heroDataCell__inCell}>
              <Image
                src={HERO_ABILITY_URL + abilityName}
                alt={abilityName}
                width={50}
                height={50}
              />
            </div>
          </td>
        )
      })}
    </>
  )
}
