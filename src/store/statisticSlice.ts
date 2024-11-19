import { createSlice } from "@reduxjs/toolkit"
import type { InitialStatisticState } from "@/types/redux/statisticSlice"

const initialState: InitialStatisticState = {
  matchDetails: null,
  heroList: null,
  playersProfiles: null,
  tooltipAbilityPortal: false,
  tooltipItemPortal: false,
  windowWidth: false,

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
        state.matchDetails = action.payload.matchDetailsData
        state.playersProfiles = action.payload.playerProfilesData
      } else {
        state.error = action.payload
      }
    },

    setTooltipAbilityPortal: (state, action) => {
      state.tooltipAbilityPortal = action.payload
    },

    setTooltipItemPortal: (state, action) => {
      state.tooltipItemPortal = action.payload
    },

    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload
    },

    setSearch: (state, action) => {
      state.search.matchID = action.payload.value
    },
  },
})

export const {
  setMatchData,
  setSearch,
  setTooltipAbilityPortal,
  setTooltipItemPortal,
  setWindowWidth,
} = statisticSlice.actions

export default statisticSlice.reducer
