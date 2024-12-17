import { createSlice } from "@reduxjs/toolkit"
import type { InitialStatisticState } from "@/types/redux/statisticSlice"

const initialState: InitialStatisticState = {
  matchDetails: null,
  heroList: null,
  playersProfiles: null,
  abilities: null,
  heroAbilities: null,
  abilityIDs: null,
  tooltipAbilityPortal: false,

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
        state.abilities = action.payload.abilitiesData
        state.heroAbilities = action.payload.heroAbilitiesData
        state.abilityIDs = action.payload.abilityIDsData
      } else {
        state.error = action.payload
      }
    },

    setTooltipAbilityPortal: (state, action) => {
      state.tooltipAbilityPortal = action.payload
    },

    setSearch: (state, action) => {
      state.search.matchID = action.payload.value
    },
  },
})

export const { setMatchData, setSearch, setTooltipAbilityPortal } =
  statisticSlice.actions

export default statisticSlice.reducer
