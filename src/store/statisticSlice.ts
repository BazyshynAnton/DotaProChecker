import { createSlice } from "@reduxjs/toolkit"
import type { InitialStatisticState } from "@/types/redux/statisticSlice"

const initialState: InitialStatisticState = {
  match: null,
  matchID: null,
  matchDetails: null,
  heroList: null,
  playersProfiles: null,

  search: {
    accountID: "",
    matchID: "",
  },

  error: null,
}

export const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    setMatchData: (state, action) => {
      if (typeof action.payload !== "string") {
        state.heroList = action.payload.heroListData
        state.match = action.payload.matchesHistoryData
        state.matchDetails = action.payload.matchDetailsData
        state.matchID = action.payload.matchesHistoryDataIDs[0]
        state.playersProfiles = action.payload.playerProfilesData
      } else {
        state.error = action.payload
      }
    },

    setSearch: (state, action) => {
      state.search.matchID = action.payload.value
    },
  },
})

export const { setMatchData, setSearch } = statisticSlice.actions

export default statisticSlice.reducer
