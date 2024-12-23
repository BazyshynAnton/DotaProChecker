import { createSlice } from "@/shared/reduxImports"

import type { InitialHomeState } from "@/types/redux/homeSlice"

const initialState: InitialHomeState = {
  proMatches: null,
  isHomeDataExist: false,

  error: null,
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      if (typeof action.payload !== "string") {
        if (!state.isHomeDataExist) {
          state.proMatches = action.payload.proMatchesData
          state.isHomeDataExist = true
        }
      } else {
        state.error = action.payload
      }
    },
  },
})

export const { setHomeData } = homeSlice.actions

export default homeSlice.reducer
