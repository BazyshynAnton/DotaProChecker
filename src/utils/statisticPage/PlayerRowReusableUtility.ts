import { ItemDetails } from "@/types/staticPage/playerRowDetailsTypes"

export class PlayerRowReusableUtility {
  public m_Items: string[] = []
  public m_NeutralItem: string = ""

  public setItems(detailsAboutItems: ItemDetails, flag: string) {
    if (flag === "main_slot") {
      for (let i = 0; i < 6; ++i) {
        const icon = detailsAboutItems[`item_${i}`]?.img
        if (typeof icon === "string") {
          this.m_Items.push(icon)
        }
      }
    } else if (flag === "backpack") {
      for (let i = 0; i < 3; ++i) {
        const icon = detailsAboutItems[`backpack_${i}`]?.img
        if (typeof icon === "string") {
          this.m_Items.push(icon)
        }
      }
    }
  }

  public handleMouseEnter(
    item: string,
    flag: string,
    idx?: number | string,
    setter?: any
  ) {
    switch (flag) {
      case "main_slot":
      case "backpack": {
        if (item === "empty_slot" || !idx) return

        idx.toString()
        setter((prevState: any) => {
          const newState = { ...prevState, [idx]: true }

          return newState
        })

        break
      }
      case "neutral_slot": {
        if (item == "empty_slot") return

        setter(true)

        break
      }
      case "aghanim_slot": {
        if (!idx) return
        setter((prevState: any) => {
          const newState = { ...prevState, [idx]: true }
          return newState
        })

        break
      }
      default:
        break
    }
  }

  public handleMouseLeave(flag: string, idx?: number | string, setter?: any) {
    switch (flag) {
      case "main_slot":
      case "backpack": {
        if (!idx) return

        idx.toString()
        setter((prevState: any) => {
          const newState = { ...prevState, [idx]: false }

          return newState
        })

        break
      }
      case "neutral_slot": {
        setter(false)
        break
      }
      case "aghanim_slot": {
        if (!idx) return

        setter((prevState: any) => {
          const newState = { ...prevState, [idx]: false }
          return newState
        })

        break
      }
      default:
        break
    }
  }

  public findDetailsAboutCurrentItem(
    item: string,
    detailsAboutItems: ItemDetails
  ): ItemDetails | null {
    const res: ItemDetails = {}

    for (const [_, value] of Object.entries(detailsAboutItems)) {
      if (item === value.img) {
        res[item] = value

        return res
      }
    }

    return null
  }
}
