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
import MatchDetails from "./MatchDetails"

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
  }, [
    dispatch,
    matchesStatisticData.matchDetailsData,
    matchesStatisticData.matchesHistoryData,
    matchesStatisticData.matchesHistoryIDsData,
  ])

  if (!matchDetails) {
    return (
      <div>
        <h1>API limit per day - 2000 calls.</h1>
      </div>
    )
  }

  return <>MatchResult</>
}
