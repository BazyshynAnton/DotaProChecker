import { createSlice } from "@reduxjs/toolkit"
import type { InitialStatisticState } from "@/types/redux/statisticPageSlice"

const initialState: InitialStatisticState = {
  match: null,
  matchID: null,
  matchDetails: null,
  heroList: null,
  playersProfiles: null,
}

export const statisticPageSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    setMatchData: (state, action) => {
      state.match = action.payload.matchesHistoryData
      state.matchID = action.payload.matchesHistoryDataIDs[0]
      state.matchDetails = action.payload.matchDetailsData
      state.heroList = action.payload.heroListData
      state.playersProfiles = action.payload.playerProfilesData
    },
  },
})

export const { setMatchData } = statisticPageSlice.actions

export default statisticPageSlice.reducer
