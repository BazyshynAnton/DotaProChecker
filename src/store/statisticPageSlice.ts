import { createSlice } from "@reduxjs/toolkit"
import type { InitialStatisticState } from "@/types/redux/statisticPageSlice"

const initialState: InitialStatisticState = {
  matches: null,
  matchHistoryID: null,
  matchDetails: null,
  heroList: null,
  playersProfiles: null,
}

export const statisticPageSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    setMatchData: (state, action) => {
      state.matches = action.payload
      state.matchHistoryID = action.payload
      state.matchDetails = action.payload
      state.heroList = action.payload
      state.playersProfiles = action.payload
    },
  },
})

export const { setMatchData } = statisticPageSlice.actions

export default statisticPageSlice.reducer
