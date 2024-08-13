import { MatchDetails, Player } from "./staticPageTypes"

export interface MDUtility {
  getMatchResult(userID: number, matchDetails: MatchDetails): MatchResult

  filterPlayersByTeam(matchDetails: MatchDetails): PlayersByTeam
}

// TYPES THAT INSIDE [INTERFACE] MDUtility
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
