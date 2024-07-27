import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import type { Match, MatchDetails } from '@/types/staticPage/staticPageTypes'

interface InitialState {
  match: Match
  matchDetails: MatchDetails
}

const initialState: InitialState = {
  match: {
    result: {
      status: -1,
      num_results: -1,
      total_results: -1,
      results_remaining: -1,
      matches: [
        {
          match_id: -1,
          match_seq_num: -1,
          start_time: -1,
          lobby_type: -1,
          radiant_team_id: -1,
          dire_team_id: -1,

          players: [
            {
              account_id: -1,
              player_slot: -1,
              team_number: -1,
              team_slot: -1,
              hero_id: -1,
              hero_variant: -1,
            },
          ],
        },
      ],
    },
  },
  matchDetails: {
    players: [
      {
        account_id: -1,
        player_slot: -1,
        team_number: -1,
        team_slot: -1,
        hero_id: -1,
        hero_variant: -1,
        item_0: -1,
        item_1: -1,
        item_2: -1,
        item_3: -1,
        item_4: -1,
        item_5: -1,
        backpack_0: -1,
        backpack_1: -1,
        backpack_2: -1,
        item_neutral: -1,
        kills: -1,
        deaths: -1,
        assists: -1,
        leaver_status: -1,
        last_hits: -1,
        denies: -1,
        gold_per_min: -1,
        xp_per_min: -1,
        level: -1,
        net_worth: -1,
        aghanims_scepter: -1,
        aghanims_shard: -1,
        moonshard: -1,
        hero_damage: -1,
        tower_damage: -1,
        hero_healing: -1,
        gold: -1,
        gold_spent: -1,
        ability_upgrades_arr: [],
        personaname: '',
        name: '',
        last_login: '',
        radiant_win: false,
        start_time: -1,
        duration: -1,
        cluster: -1,
        lobby_type: -1,
        game_mode: -1,
        is_contributor: false,
        patch: -1,
        region: -1,
        isRadiant: false,
        win: -1,
        lose: -1,
        total_gold: -1,
        total_xp: -1,
        kills_per_min: -1,
        kda: -1,
        abandons: -1,
        rank_tier: -1,
        is_subscriber: false,
        benchmarks: {
          gold_per_min: {
            raw: -1,
            pct: -1,
          },
          xp_per_min: {
            raw: -1,
            pct: -1,
          },
          kills_per_min: {
            raw: -1,
            pct: -1,
          },
          last_hits_per_min: {
            raw: -1,
            pct: -1,
          },
          hero_damage_per_min: {
            raw: -1,
            pct: -1,
          },
          hero_healing_per_min: {
            raw: -1,
            pct: -1,
          },
          tower_damage: {
            raw: -1,
            pct: -1,
          },
        },
      },
    ],
  },
}

export const statisticPageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})

// export const {  } = counterSlice.actions

export default statisticPageSlice.reducer
