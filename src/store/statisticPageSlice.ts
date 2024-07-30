import { createSlice } from "@reduxjs/toolkit"
import type {
  ErrorMatchDetails,
  Match,
  MatchDetails,
} from "@/types/staticPage/staticPageTypes"

interface InitialState {
  matches: Match | null
  matchHistoryID: number | null
  matchDetails: MatchDetails | null
}

const initialState: InitialState = {
  matches: null,
  matchHistoryID: null,
  matchDetails: null,
}

export const statisticPageSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    setMatchesHistory: (state, action) => {
      state.matches = action.payload
    },
    setMatchHistoryID: (state, action) => {
      state.matchHistoryID = action.payload
    },
    setMatchDetails: (state, action) => {
      state.matchDetails = action.payload.filter(
        (match: MatchDetails) => !match.error
      )
      console.log("[STATE ALL MATCHES DETAILS]: ", state.matchDetails)
    },
  },
})

export const { setMatchesHistory, setMatchHistoryID, setMatchDetails } =
  statisticPageSlice.actions

export default statisticPageSlice.reducer
