"use client"
import useMousePosition from "@/hooks/useMousePosition"

import NameAndCost from "./NameAndCost"
import Behavior from "./Behavior"
import Attribute from "./Attribute"
import Abilities from "./Abilities"
import HintAndLore from "./HintAndLore"
import Components from "./Components"

import { ReactDOM, useEffect } from "@/shared/reactImports"

import type { ItemDescriptionInterface } from "@/types/statistic/playerRow"

import styles from "@/styles/statistic/ItemDescription.module.scss"
import { useAppSelector } from "@/hooks/useAppSelector"
import { setWindowWidth } from "@/store/statisticSlice"
import { useAppDispatch } from "@/hooks/useAppDispatch"

export default function ItemDescription({
  details,
  item,
}: ItemDescriptionInterface) {
  //
  /* 
    Using React Portal transfer this component to another
    component with id="tooltip_item_portal" on desktop.
    And with id="tooltip_mobile_item_portal" on tablet and mobile.
  */
  const { windowWidth } = useAppSelector((store) => store.statisticSlice)
  const dispatch = useAppDispatch()

  const mousePosition = useMousePosition()

  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(setWindowWidth(window.innerWidth <= 790))
      const updateWindowWidth = () => {
        dispatch(setWindowWidth(window.innerWidth <= 790))
      }

      updateWindowWidth()

      window.addEventListener("resize", updateWindowWidth)

      return () => window.removeEventListener("resize", updateWindowWidth)
    }
  }, [])

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
      <ItemContent details={details} item={item} />
    </div>,
    document.getElementById("tooltip_item_portal") as Element | DocumentFragment
  )
}

function ItemContent({ details, item }: ItemDescriptionInterface) {
  return (
    <>
      <NameAndCost details={details} item={item} />
      <div className={styles.tooltip__description}>
        <Behavior details={details} item={item} />
        <Attribute details={details} item={item} />
        <Abilities details={details} item={item} />
        <HintAndLore details={details} item={item} />
        <Components details={details} item={item} />
      </div>
    </>
  )
}
