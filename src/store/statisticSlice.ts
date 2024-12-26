import { createSlice } from "@/shared/reduxImports"
import type { InitialStatisticState } from "@/types/redux/statisticSlice"

const initialState: InitialStatisticState = {
  matchDetails: null,
  heroList: null,
  playersProfiles: null,
  abilities: null,
  heroAbilities: null,
  abilityIDs: null,
  items: null,
  isTableDataExist: false,
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
        if (
          state.matchDetails?.match_id !==
          action.payload.matchDetailsData?.match_id
        ) {
          state.heroList = action.payload.heroListData
          state.matchDetails = action.payload.matchDetailsData
          state.playersProfiles = action.payload.playerProfilesData
          state.abilities = action.payload.abilitiesData
          state.heroAbilities = action.payload.heroAbilitiesData
          state.abilityIDs = action.payload.abilityIDsData
          state.items = action.payload.itemsData
          state.isTableDataExist = true
        }
      } else {
        state.error = action.payload
      }
    },

    setTooltipAbilityPortal: (state, action) => {
      state.tooltipAbilityPortal = action.payload
    },

    setIsTableDataExist: (state, action) => {
      state.isTableDataExist = action.payload
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
  setIsTableDataExist,
} = statisticSlice.actions

export default statisticSlice.reducer
