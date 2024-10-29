import AbilityDescription from "./abilityDescription/AbilityDescription"

import { PlayerRowDetailsUtility } from "@/utils/statistic/PlayerRowDetailsUtility"

import { Image } from "@/shared/nextjsImports"
import { useEffect, useState } from "@/shared/reactImports"

import { HERO_ABILITY_URL } from "@/utils/urls"

import type { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/TableAbilities.module.scss"

const TALENT_TREE_PATH = "/pictures/dotaAbilityIcons/talent_tree.svg"
const isTooltipDefault = new Array<boolean>(25).fill(false)

export default function Abilities({
  player,
  uRowDetails,
}: {
  player: Player
  uRowDetails: PlayerRowDetailsUtility
}) {
  const [isTooltip, setIsTooltip] = useState<Array<boolean>>(isTooltipDefault)

  const abilityBuild = uRowDetails.setAbilityBuild(player.ability_upgrades_arr)

  const handleMouseEnter = (idx: number) => () => {
    const updatedTooltip = [...isTooltip]
    updatedTooltip[idx] = true
    setIsTooltip(updatedTooltip)
  }

  const handleMouseLeave = (idx: number) => () => {
    const updatedTooltip = [...isTooltip]
    updatedTooltip[idx] = false
    setIsTooltip(updatedTooltip)
  }

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
                  {isTooltip[idx] && (
                    <AbilityDescription abilityName={abilityName} />
                  )}
                  <Image
                    src={
                      !talentTree
                        ? `${HERO_ABILITY_URL}${abilityName}.png`
                        : TALENT_TREE_PATH
                    }
                    alt=""
                    width={100}
                    height={100}
                    onMouseEnter={handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave(idx)}
                  />
                </>
              )}
            </div>
          </td>
        )
      })}
    </>
  )
}
