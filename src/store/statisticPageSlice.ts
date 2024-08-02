import { createSlice } from "@reduxjs/toolkit"
import type { InitialStatisticState } from "@/types/redux/statisticPageSliceTypes"

const initialState: InitialStatisticState = {
  matches: null,
  matchHistoryID: null,
  matchDetails: null,
  heroList: null,
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
      state.matchDetails = action.payload
    },
    setHeroList: (state, action) => {
      state.heroList = action.payload
    },
  },
})

export const {
  setMatchesHistory,
  setMatchHistoryID,
  setMatchDetails,
  setHeroList,
} = statisticPageSlice.actions

export default statisticPageSlice.reducer
