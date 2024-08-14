import { HeroList, Player, PlayerProfile } from "./staticPageTypes"

export interface RDUtility {
  findAppropriateHero(player: Player, heroList: HeroList[]): DetailsAboutHero

  findAppropriatePlayer(
    player: Player,
    playersProfiles: PlayerProfile[]
  ): DetailsAboutPlayer
}

// TYPES THAT INSIDE [INTERFACE] RDUtility
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

interface Attribute {
  key: string
  value: string
  display?: string
}

// Define the type for an ability in the "abilities" array
interface Ability {
  type: string
  title: string
  description: string
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
  }
}

export interface ItemDetails {
  [key: string]: {
    abilities?: Ability[]
    img?: string
    id?: number
    dname?: string
    cost?: number | null
    behavior?: string[] | string | boolean
    cd?: number | boolean
    lore?: string
  }
}
