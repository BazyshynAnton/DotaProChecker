import { createSlice } from "@reduxjs/toolkit"
import type { Match, MatchDetails } from "@/types/staticPage/staticPageTypes"

interface InitialState {
  matches: Match | null
  matchesDetails: MatchDetails | null
  matchesHistoryIDs: number[] | null
  allMatchesDetails: MatchDetails[] | null
}

const initialState: InitialState = {
  matches: null,
  matchesDetails: null,
  matchesHistoryIDs: null,
  allMatchesDetails: null,
}

export const statisticPageSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    setMatchesHistory: (state, action) => {
      state.matches = action.payload
    },
    setMatchesDetails: (state, action) => {
      state.matchesDetails = action.payload
    },
    setMatchesHistoryIDs: (state, action) => {
      state.matchesHistoryIDs = action.payload
    },
    setAllMatchesDetails: (state, action) => {
      state.allMatchesDetails = action.payload
    },
  },
})

export const {
  setMatchesHistory,
  setMatchesDetails,
  setMatchesHistoryIDs,
  setAllMatchesDetails,
} = statisticPageSlice.actions

export default statisticPageSlice.reducer
