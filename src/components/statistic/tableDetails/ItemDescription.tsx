"use client"
import useMousePosition from "@/hooks/useMousePosition"

import NameAndCost from "./NameAndCost"
import Behavior from "./Behavior"
import Attribute from "./Attribute"
import Abilities from "./Abilities"
import HintAndLore from "./HintAndLore"
import Components from "./Components"

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
    component with id="tooltip_item_portal"
  */
  const mousePosition = useMousePosition()

  if (!mousePosition.x || !mousePosition.y) return

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: mousePosition.y,
        left: mousePosition.x - 300,
      }}
      className={styles.tooltip}
    >
      <NameAndCost details={details} item={item} />
      <div className={styles.tooltip__description}>
        <Behavior details={details} item={item} />
        <Attribute details={details} item={item} />
        <Abilities details={details} item={item} />
        <HintAndLore details={details} item={item} />
        <Components details={details} item={item} />
      </div>
    </div>,
    document.getElementById("tooltip_item_portal") as Element | DocumentFragment
  )
}
