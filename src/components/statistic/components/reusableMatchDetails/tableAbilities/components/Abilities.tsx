import { HERO_ABILITY_URL } from "@/utils/urls"

import { PlayerRowDetailsUtility } from "@/utils/statistic/PlayerRowDetailsUtility"

import { Image } from "@/shared/nextjsImports"

import { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/TableAbilities.module.scss"
import AbilityDescription from "./abilityDescription/AbilityDescription"
import { useEffect, useState } from "react"

type IsToolTip = {
  [key: string]: boolean
}

export default function Abilities({
  player,
  uRowDetails,
}: {
  player: Player
  uRowDetails: PlayerRowDetailsUtility
}) {
  const [isTooltip, setIsTooltip] = useState<IsToolTip[]>()

  const abilityBuild = uRowDetails.setAbilityBuild(player.ability_upgrades_arr)

  return (
    <>
      {abilityBuild.map((ability, idx) => {
        const abilityName = uRowDetails.findAbilityByID(ability)

        setIsTooltip((prevState: any) => {
          const newState = { ...prevState, [abilityName]: false }

          return newState
        })

        const talentTree: boolean = abilityName.includes("special_bonus")

        const handleMouseEnter = () => {
          setIsTooltip((prevState: any) => {
            const newState = { ...prevState, [idx]: true }

            return newState
          })
        }
        const handleMouseLeave = () => {
          setIsTooltip((prevState: any) => {
            const newState = { ...prevState, [idx]: false }

            return newState
          })
        }

        if (!isTooltip) return

        return (
          <td key={idx} className={styles.tableBodyRow__abilityDataCell}>
            <div className={styles.abilityDataCell__inCell}>
              {abilityName !== "none" && (
                <>
                  {isTooltip[idx] && (
                    <AbilityDescription abilityName={abilityName} />
                  )}
                  {!talentTree ? (
                    <Image
                      src={`${HERO_ABILITY_URL}${abilityName}.png`}
                      alt=""
                      width={100}
                      height={100}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
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
