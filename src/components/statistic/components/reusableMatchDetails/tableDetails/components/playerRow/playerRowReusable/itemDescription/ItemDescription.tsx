import NameAndCost from "./itemDescriptionComponents/NameAndCost"
import Behavior from "./itemDescriptionComponents/Behavior"
import Attribute from "./itemDescriptionComponents/Attribute"
import Abilities from "./itemDescriptionComponents/Abilities"
import HintAndLore from "./itemDescriptionComponents/HintAndLore"
import Components from "./itemDescriptionComponents/Components"

import { ReactDOM } from "@/shared/reactImports"

import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/ItemDescription.module.scss"

export default function ItemDescription({
  details,
  item,
}: ItemDescriptionInterface) {
  //
  /* 
    Using React Portal transfer this component to another
    component with id="tooltip_portal"
  */
  return ReactDOM.createPortal(
    <div className={styles.tooltip}>
      <NameAndCost details={details} item={item} />
      <div className={styles.tooltip__description}>
        <Behavior details={details} item={item} />
        <Attribute details={details} item={item} />
        <Abilities details={details} item={item} />
        <HintAndLore details={details} item={item} />
        <Components details={details} item={item} />
      </div>
    </div>,
    document.getElementById("tooltip_portal") as Element | DocumentFragment
  )
}
