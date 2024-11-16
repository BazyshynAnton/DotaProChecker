import Cost from "./Cost"
import Attributes from "./Attributes"
import Title from "./Title"
import Behavior from "./Behavior"
import Description from "./Description"

import useMousePosition from "@/hooks/useMousePosition"

import { ReactDOM, useEffect, useRef, useState } from "@/shared/reactImports"

import styles from "@/styles/statistic/AbilityDescription.module.scss"
import { useLayoutEffect } from "react"

export default function AbilityDescription({
  abilityName,
}: {
  abilityName: string
}) {
  const mousePosition = useMousePosition()

  if (!mousePosition.x || !mousePosition.y) return

  const talentTree: boolean = abilityName.includes("special_bonus")
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        right: 50,
        zIndex: 10,
        height: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className={styles.abilityTooltip}>
        <Title abilityName={abilityName} />
        {!talentTree && (
          <div className={styles.abilityTooltip__components}>
            <Behavior abilityName={abilityName} />
            <Description abilityName={abilityName} />
            <Attributes abilityName={abilityName} />
            <Cost abilityName={abilityName} />
          </div>
        )}
      </div>
    </div>
  )
}
