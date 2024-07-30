"use client"
import { useEffect } from "@/components/shared/reactImports"
import { useDispatch, useSelector } from "@/components/shared/reduxImports"
import {
  setMatchDetails,
  setMatchesHistory,
  setMatchHistoryID,
} from "@/store/statisticPageSlice"
import { AppDispatch, RootState } from "@/store/store"

import type { DotaMatchesStatisticData } from "@/types/staticPage/staticPageTypes"

export let cache: DotaMatchesStatisticData

export default function StatisticPage({
  matchesStatisticData,
}: DotaMatchesStatisticData) {
  const { matchDetails } = useSelector(
    (store: RootState) => store.statisticPageSlice
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setMatchDetails(matchesStatisticData.matchDetailsData))
    dispatch(setMatchesHistory(matchesStatisticData.matchesHistoryData))
    dispatch(setMatchHistoryID(matchesStatisticData.matchesHistoryIDsData[0]))
    cache.matchesStatisticData.matchDetailsData =
      matchesStatisticData.matchDetailsData
    cache.matchesStatisticData.matchesHistoryData =
      matchesStatisticData.matchesHistoryData
    cache.matchesStatisticData.matchesHistoryIDsData =
      matchesStatisticData.matchesHistoryIDsData
  }, [
    dispatch,
    matchesStatisticData.matchDetailsData,
    matchesStatisticData.matchesHistoryData,
    matchesStatisticData.matchesHistoryIDsData,
  ])

  if (!matchDetails) {
    console.error(
      "[API Error] (Daily api limit exceeded - Call Limit 2000 per day)"
    )

    return <></>
  }

  return (
    <div style={{ marginTop: "5rem" }}>
      {matchDetails.players.map((player, idx) => (
        <div key={idx}>{player.gold}</div>
      ))}
    </div>
  )
}
