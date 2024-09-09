import type { Player } from "../staticPage/tablePlayerDetails"

export interface UMatchData {
  fetchMatchData(): Promise<MatchData | string>
}

export interface InitialStatisticState {
  match: Match | null
  matchID: number | null
  matchDetails: MatchDetails | null
  heroList: HeroList[] | null
  playersProfiles: PlayerProfile[] | null
}

export interface MatchData {
  heroListData: HeroList[]
  matchDetailsData: MatchDetails
  matchesHistoryData: Match
  playerProfilesData: PlayerProfile[]
  matchesHistoryDataIDs: number[]
}

export interface HeroList {
  id: number
  name: string
  localized_name: string
}

export interface Match {
  result: {
    status: number
    num_results: number
    total_results: number
    results_remaining: number
    matches: [
      {
        match_id: number
        match_seq_num: number
        start_time: number
        lobby_type: number
        radiant_team_id: number
        dire_team_id: number

        players: [
          {
            account_id: number
            player_slot: number
            team_number: number
            team_slot: number
            hero_id: number
            hero_variant: number
          }
        ]
      }
    ]
  }
}

export interface MatchDetails {
  players: Player[]

  radiant_win: boolean
  duration: number
  pre_game_duration: number
  start_time: number
  match_id: number
  match_seq_num: number
  tower_status_radiant: number
  tower_status_dire: number
  barracks_status_radiant: number
  barracks_status_dire: number
  cluster: number
  first_blood_time: number
  lobby_type: number
  human_players: number
  leagueid: number
  game_mode: number
  flags: number
  engine: number
  radiant_score: number
  dire_score: number
  picks_bans: [
    {
      is_pick: boolean
      hero_id: number
      team: number
      order: number
    }
  ]
  od_data: {
    has_api: boolean
    has_gcdata: boolean
    has_parsed: boolean
  }
  metadata: null | any
  patch: number
  region: number
}

export interface PlayerProfile {
  error: any
  profile: {
    account_id: number
    avatar: string
    avatarmedium: string
    avatarfull: string
    profileurl: string
  }
  rank_tier: number | null
  leaderboard_rank: number | null
}
