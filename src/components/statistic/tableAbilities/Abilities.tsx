import AbilityDescription from "./AbilityDescription"

import { AbilityDetailsUtility } from "@/utils/statistic/AbilityDetailsUtility"
import { Image } from "@/shared/nextjsImports"
import { useEffect, useRef, useState } from "@/shared/reactImports"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { setTooltipAbilityPortal } from "@/store/statisticSlice"

import { HERO_ABILITY_ICON_URL } from "@/utils/urls"
import type { Player } from "@/types/statistic/tableDetails"

import styles from "@/styles/statistic/TableAbilities.module.scss"

const isTooltipDefault = new Array<boolean>(25).fill(false)

export default function Abilities({
  player,
  heroName,
}: {
  player: Player
  heroName: string
}) {
  const dispatch = useAppDispatch()

  const uAbilityDetails = AbilityDetailsUtility.getInstance()

  const [isTooltip, setIsTooltip] = useState<Array<boolean>>(isTooltipDefault)

  const tooltipRef = useRef<HTMLDivElement>(null)

  const abilityBuild = uAbilityDetails.setAbilityBuild(
    player.ability_upgrades_arr
  )

  const handleTrueClick = (idx: number) => () => {
    const updatedTooltip: Array<boolean> = JSON.parse(JSON.stringify(isTooltip))

    for (let i = 0; i < updatedTooltip.length; ++i) {
      if (i === idx) {
        updatedTooltip[i] = true
      } else {
        updatedTooltip[i] = false
      }
    }

    setIsTooltip(updatedTooltip)
    dispatch(setTooltipAbilityPortal(true))
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsTooltip(isTooltipDefault)
        dispatch(setTooltipAbilityPortal(false))
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch])

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
                  <AbilityDescription
                    abilityName={abilityName}
                    heroName={heroName}
                  />
                )}
                <Image
                  src={
                    !talentTree
                      ? `${HERO_ABILITY_ICON_URL}${abilityName}.png`
                      : "/pictures/dotaAbilityIcons/talent_tree.svg"
                  }
                  alt={abilityName}
                  width={24}
                  height={24}
                  onClick={handleTrueClick(idx)}
                />
              </div>
            ) : (
              <div className={styles.abilityDataCell}></div>
            )}
          </td>
        )
      })}
    </>
  )
}
