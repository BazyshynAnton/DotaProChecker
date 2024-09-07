// Components
import NameAndCost from "./itemDescriptionComponents/NameAndCost"
import Behavior from "./itemDescriptionComponents/Behavior"
import Attribute from "./itemDescriptionComponents/Attribute"
import Abilities from "./itemDescriptionComponents/Abilities"
import HintAndLore from "./itemDescriptionComponents/HintAndLore"
import Components from "./itemDescriptionComponents/Components"

// React
import ReactDOM from "react-dom"

// Styles
import styles from "@/styles/statisticPage/ItemDescription.module.scss"
import { ItemDescriptionInterface } from "@/types/staticPage/playerRow"

// Types

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
