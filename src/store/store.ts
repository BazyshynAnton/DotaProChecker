import { configureStore } from "@reduxjs/toolkit"
import statisticSlice from "./statisticSlice"

export const makeStore = () => {
  return configureStore({
    reducer: { statisticSlice },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
