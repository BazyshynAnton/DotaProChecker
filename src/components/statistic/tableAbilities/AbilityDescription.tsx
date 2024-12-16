"use client"

import Cost from "./Cost"
import Attributes from "./Attributes"
import Title from "./Title"
import Behavior from "./Behavior"
import Description from "./Description"

import { ReactDOM } from "@/shared/reactImports"

import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function AbilityDescription({
  abilityName,
  heroName,
}: {
  abilityName: string
  heroName: string
}) {
  const talentTree: boolean = abilityName.includes("special_bonus")

  return ReactDOM.createPortal(
    <div className={styles.abilityTooltip}>
      <Title abilityName={abilityName} heroName={heroName} />
      {!talentTree && (
        <div className={styles.abilityTooltip__components}>
          <Behavior abilityName={abilityName} />
          <Description abilityName={abilityName} />
          <Attributes abilityName={abilityName} />
          <Cost abilityName={abilityName} />
        </div>
      )}
    </div>,
    document.getElementById("tooltip_ability_portal") as
      | Element
      | DocumentFragment
  )
}
