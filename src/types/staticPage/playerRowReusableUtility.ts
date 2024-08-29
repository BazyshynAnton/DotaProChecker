import { ItemDetails } from "./playerRowDetailsTypes"

export interface PRRUtility {
  setItems(detailsAboutItems: ItemDetails, flag: string): void

  handleMouseEnter(
    item: string,
    flag: string,
    idx?: number | string,
    setter?: any
  ): void

  handleMouseLeave(flag: string, idx?: number | string, setter?: any): void

  findDetailsAboutCurrentItem(
    flag: string,
    item: string,
    detailsAboutItems?: ItemDetails
  ): ItemDetails | null
}
