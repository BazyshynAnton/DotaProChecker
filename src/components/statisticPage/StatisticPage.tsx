"use client"
import MatchDetails from "./MatchDetails"

import { useEffect } from "@/components/shared/reactImports"
import { useDispatch, useSelector } from "@/components/shared/reduxImports"
import {
  setHeroList,
  setMatchDetails,
  setMatchesHistory,
  setMatchHistoryID,
  setPlayersProfiles,
} from "@/store/statisticPageSlice"
import { AppDispatch, RootState } from "@/store/store"

import type { DotaMatchesStatisticData } from "@/types/staticPage/staticPageTypes"

export default function StatisticPage({
  matchesStatisticData,
}: {
  matchesStatisticData: DotaMatchesStatisticData
}) {
  const { matchDetails } = useSelector(
    (store: RootState) => store.statisticPageSlice
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setMatchDetails(matchesStatisticData.matchDetailsData))
    dispatch(setMatchesHistory(matchesStatisticData.matchesHistoryData))
    dispatch(setMatchHistoryID(matchesStatisticData.matchesHistoryIDsData[0]))
    dispatch(setHeroList(matchesStatisticData.heroListData))
    dispatch(setPlayersProfiles(matchesStatisticData.playersProfilesData))
  }, [
    dispatch,
    matchesStatisticData.matchDetailsData,
    matchesStatisticData.matchesHistoryData,
    matchesStatisticData.matchesHistoryIDsData,
    matchesStatisticData.heroListData,
    matchesStatisticData.playersProfilesData,
  ])

  if (!matchDetails) {
    return (
      <div>
        <h1>API limit per day - 2000 calls.</h1>
      </div>
    )
  }

  return <MatchDetails />
}
