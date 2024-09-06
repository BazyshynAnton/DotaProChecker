"use client"
import MatchDetails from "./MatchDetails"

import { useEffect } from "@/shared/reactImports"
import { useSelector } from "@/shared/reduxImports"
import { useAppDispatch } from "@/shared/reduxImports"
import {
  setHeroList,
  setMatchDetails,
  setMatchesHistory,
  setMatchHistoryID,
  setPlayersProfiles,
} from "@/store/statisticPageSlice"
import { RootState } from "@/store/store"

import type { DotaMatchesStatisticData } from "@/types/staticPage/staticPageTypes"

export default function StatisticPage({
  matchesStatisticData,
}: {
  matchesStatisticData: DotaMatchesStatisticData | string
}) {
  const { matchDetails } = useSelector(
    (store: RootState) => store.statisticPageSlice
  )
  const dispatch = useAppDispatch()
  if (typeof matchesStatisticData === "string") return

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
