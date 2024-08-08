import {
  HeroList,
  Match,
  MatchDetails,
  PlayerProfile,
} from "../staticPage/staticPageTypes"

export interface InitialStatisticState {
  matches: Match | null
  matchHistoryID: number | null
  matchDetails: MatchDetails | null
  heroList: HeroList[] | null
  playersProfiles: PlayerProfile[] | null
}
