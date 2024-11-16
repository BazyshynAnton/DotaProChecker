import AbilityDescription from "./AbilityDescription"

import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"
import { Image } from "@/shared/nextjsImports"
import { useState, useRef } from "@/shared/reactImports"

import { HERO_ABILITY_URL } from "@/utils/urls"

import type { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/TableAbilities.module.scss"

const isTooltipDefault = new Array<boolean>(25).fill(false)

export default function Abilities({ player }: { player: Player }) {
  const uAbilityDetails = AbilityDetailsUtility.getInstance()

  const [isTooltip, setIsTooltip] = useState<Array<boolean>>(isTooltipDefault)

  const tooltipRef = useRef<HTMLDivElement>(null)

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
          <td key={idx}>
            {abilityName !== "none" ? (
              <div className={styles.abilityDataCell} ref={tooltipRef}>
                {isTooltip[idx] && (
                  <AbilityDescription abilityName={abilityName} />
                )}
                <Image
                  src={
                    !talentTree
                      ? `${HERO_ABILITY_URL}${abilityName}.png`
                      : "/pictures/dotaAbilityIcons/talent_tree.svg"
                  }
                  alt={abilityName}
                  width={51}
                  height={51}
                  onMouseEnter={handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            ) : (
              <div className={styles.abilityDataCell}>
                <Image
                  src={"/pictures/dotaAbilityIcons/talent_tree.svg"}
                  alt={abilityName}
                  width={51}
                  height={51}
                  style={{ visibility: "hidden" }}
                />
              </div>
            )}
          </td>
        )
      })}
    </>
  )
}
