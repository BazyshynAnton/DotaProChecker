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
  const abilityBuild = uRowDetails.setAbilityBuild(player.ability_upgrades_arr)

  return (
    <>
      {abilityBuild.map((ability, idx) => {
        const abilityName = uRowDetails.findAbilityByID(ability)

        const talentTree: boolean = abilityName.includes("special_bonus")

        return (
          <td key={idx} className={styles.tableBodyRow__abilityDataCell}>
            <div className={styles.abilityDataCell__inCell}>
              {abilityName !== "none" && (
                <>
                  {!talentTree ? (
                    <Image
                      src={`${HERO_ABILITY_URL}${abilityName}.png`}
                      alt=""
                      width={100}
                      height={100}
                    />
                  ) : (
                    <Image
                      src={"/pictures/dotaAbilityIcons/talent_tree.svg"}
                      alt=""
                      width={100}
                      height={100}
                    />
                  )}
                </>
              )}
            </div>
          </td>
        )
      })}
    </>
  )
}
