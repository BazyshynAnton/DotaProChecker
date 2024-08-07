import { Player } from "./staticPageTypes"

export interface MatchResult {
  resultOfMatch: string
  playerSide: string
  matchDuration: string
  radiantScore: string
  direScore: string
}

export interface PlayersByTeam {
  playersRadiant: Player[] | never[]
  playersDire: Player[] | never[]
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
