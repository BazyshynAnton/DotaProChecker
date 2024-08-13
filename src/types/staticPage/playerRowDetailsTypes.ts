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

export interface Item {
  [key: string]: {
    abilities: {
      type: string
      title: string
      description: string
    }[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    cd: number
    lore: string
  }
}
