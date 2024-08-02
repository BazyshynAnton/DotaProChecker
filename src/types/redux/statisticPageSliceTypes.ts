import { HeroList, Match, MatchDetails } from "../staticPage/staticPageTypes"

export interface InitialStatisticState {
  matches: Match | null
  matchHistoryID: number | null
  matchDetails: MatchDetails | null
  heroList: HeroList[] | null
}
