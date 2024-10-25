import Title from "./components/Title"

import { ReactDOM } from "@/shared/reactImports"

import styles from "@/styles/statistic/AbilityDescription.module.scss"

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
  return ReactDOM.createPortal(
    <div className={styles.abilityTooltip}>
      <Title />
    </div>,
    document.getElementById("tooltip_portal") as Element | DocumentFragment
  )
}
