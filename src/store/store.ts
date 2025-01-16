import { configureStore } from '@reduxjs/toolkit'
import statisticSlice from './statisticSlice'
import homeSlice from './homeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: { statisticSlice, homeSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
