import { ReactDOM } from "@/shared/reactImports"

import styles from "@/styles/statistic/AbilityDescription.module.scss"

export default function ItemDescription({}) {
  //
  /* 
    Using React Portal transfer this component to another
    component with id="tooltip_portal"
  */
  return ReactDOM.createPortal(
    <div className={styles.abilityTooltip}></div>,
    document.getElementById("tooltip_portal") as Element | DocumentFragment
  )
}
