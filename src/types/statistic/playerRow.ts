import type { HeroList, PlayerProfile } from "../redux/statisticSlice"
import type { Player } from "./tableDetails"

export interface UPlayerRowDetails {
  findAppropriateHero(player: Player, heroList: HeroList[]): DetailsAboutHero

  findAppropriatePlayer(
    player: Player,
    playersProfiles: PlayerProfile[]
  ): DetailsAboutPlayer

  findPlayerRankIcon(): string

  findPlayerAvatar(): string

  findAppropriateItems(player: Player): ItemDetails | null

  findItemCostByName(item: string): string
}

export type AbilityIDs = {
  [key: string]: string
}

export interface UPlayerRow {
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

export interface DetailsAboutHero {
  heroLocalizedName: string
  heroVariant: {
    icon: string
    color: string
    title: string
    description: string
  }
  playerColor: string
}

export interface DetailsAboutPlayer {
  profileInfo: {
    avatar: string
    profileurl: string
  }
  rank_tier_info: number | null
  leaderboard_rank_info: number | null
}

export interface Item {
  [key: string]: {
    abilities?: Ability[]
    hint?: string[]
    id?: number
    img?: string
    dname?: string
    qual?: string
    cost?: number | null
    behavior?: string[] | string | boolean
    bkbpierce?: string
    dispellable?: string
    target_team?: string[] | string
    target_type?: string[] | string
    notes?: string
    attrib?: Attribute[]
    mc?: number | boolean
    hc?: number | boolean
    cd?: number | boolean
    lore?: string
    components?: string[] | null
    created?: boolean
    charges?: number | boolean
    tier?: number
  }
}

interface Attribute {
  key: string
  display?: string
  value: string
}

interface Ability {
  type: string
  title: string
  description: string
}

export interface ItemDetails {
  [key: string]: {
    abilities?: Ability[]
    hint?: string[]
    img?: string
    id?: number
    dname?: string
    cost?: number | null
    attrib?: Attribute[]
    behavior?: string[] | string | boolean
    bkbpierce?: string
    dispellable?: string
    mc?: number | boolean
    cd?: number | boolean
    lore?: string
    components?: string[] | null
    tier?: number
  }
}

export interface SlotInterface {
  itemDetails: ItemDetails | null
}

// Types for ItemDescription component
export interface ItemDescriptionInterface {
  details: ItemDetails | null
  item: string
}
