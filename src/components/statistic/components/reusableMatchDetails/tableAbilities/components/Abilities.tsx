import AbilityDescription from "./abilityDescription/AbilityDescription"

import { Image } from "@/shared/nextjsImports"
import { useState } from "@/shared/reactImports"

import { HERO_ABILITY_URL } from "@/utils/urls"

import type { Player } from "@/types/statistic/tableDetails"

import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"

import styles from "@/styles/statistic/TableAbilities.module.scss"

const isTooltipDefault = new Array<boolean>(25).fill(false)

export default function Abilities({ player }: { player: Player }) {
  const uAbilityDetails = AbilityDetailsUtility.getInstance()

  const [isTooltip, setIsTooltip] = useState<Array<boolean>>(isTooltipDefault)

  const abilityBuild = uAbilityDetails.setAbilityBuild(
    player.ability_upgrades_arr
  )

  const handleMouseEnter = (idx: number) => () => {
    const updatedTooltip: Array<boolean> = JSON.parse(JSON.stringify(isTooltip))

    for (let i = 0; i < updatedTooltip.length; ++i) {
      if (i === idx) {
        updatedTooltip[i] = true
      } else {
        updatedTooltip[i] = false
      }
    }

    setIsTooltip(updatedTooltip)
  }

  const handleMouseLeave = () => {
    setIsTooltip(isTooltipDefault)
  }

  return (
    <>
      {abilityBuild.map((ability, idx) => {
        const abilityName = uAbilityDetails.findAbilityByID(ability)

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
                        : "/pictures/dotaAbilityIcons/talent_tree.svg"
                    }
                    alt=""
                    width={100}
                    height={100}
                    onMouseEnter={handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
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
