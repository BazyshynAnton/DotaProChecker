import type { HeroList, MatchDetails } from "../redux/statisticPageSlice"
import type { Player } from "./tablePlayerDetails"

export interface UMatchDetails {
  findMatchResult(
    userID: number,
    matchDetails: MatchDetails,
    heroList: HeroList[]
  ): MatchResult

  filterPlayersByTeam(matchDetails: MatchDetails): PlayersByTeam
}

export interface MatchResult {
  resultOfMatch: boolean
  playerSide: string
  matchDuration: string
  radiantScore: string
  direScore: string
  playedHero: string
}

export interface PlayersByTeam {
  playersRadiant: Player[] | never[]
  playersDire: Player[] | never[]
}

export interface PlayerColors {
  radiant: {
    team_number: number

    colors: {
      "0": string
      "1": string
      "2": string
      "3": string
      "4": string
    }
  }

  dire: {
    team_number: number

    colors: {
      "0": string
      "1": string
      "2": string
      "3": string
      "4": string
    }
  }
}
