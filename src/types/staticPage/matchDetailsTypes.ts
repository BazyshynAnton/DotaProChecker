import { Players } from "./staticPageTypes"

export interface MatchResult {
  resultOfMatch: string
  playerSide: string
  matchDuration: string
  radiantScore: string
  direScore: string
}

export interface PlayersByTeam {
  playersRadiant: Players[] | never[]
  playersDire: Players[] | never[]
}
