import Title from "./Title"
import Behavior from "./Behavior"
import Description from "./Description"

import { ReactDOM } from "@/shared/reactImports"

import styles from "@/styles/statistic/AbilityDescription.module.scss"
import Attributes from "./Attributes"
import Cost from "./Cost"

export default function AbilityDescription({
  abilityName,
}: {
  abilityName: string
}) {
  //
  /* 
    Using React Portal transfer this component to another
    component with id="tooltip_portal"
  */
  const talentTree: boolean = abilityName.includes("special_bonus")
  return ReactDOM.createPortal(
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
    </div>,
    document.getElementById("tooltip_portal") as Element | DocumentFragment
  )
}
