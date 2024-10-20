import { HERO_ABILITY_URL } from "@/utils/urls"

import { PlayerRowDetailsUtility } from "@/utils/statistic/PlayerRowDetailsUtility"

import { Image } from "@/shared/nextjsImports"

import { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/TableAbilities.module.scss"

export default function Abilities({
  player,
  uRowDetails,
}: {
  player: Player
  uRowDetails: PlayerRowDetailsUtility
}) {
  return (
    <>
      {player.ability_upgrades_arr.map((ability, idx) => {
        const abilityName = uRowDetails.findAbilityByID(ability)
        return (
          <td key={idx} className={styles.tableBodyRow__abilityDataCell}>
            <div className={styles.abilityDataCell__inCell}>
              <Image
                src={`${HERO_ABILITY_URL}${abilityName}.png`}
                alt=""
                width={100}
                height={100}
              />
            </div>
          </td>
        )
      })}
    </>
  )
}
