"use client"
import MatchDetails from "./MatchDetails"

import { useEffect } from "@/shared/reactImports"
import { useAppSelector, useAppDispatch } from "@/shared/reduxImports"
import { setMatchData } from "@/store/statisticPageSlice"
import { MatchData } from "@/types/redux/statisticPageSlice"

export default function StatisticPage(matchData: {
  matchData: MatchData | string
}) {
  const { matchDetails } = useAppSelector((store) => store.statisticPageSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setMatchData(matchData))
  }, [dispatch])

  if (!matchDetails) {
    return (
      <div>
        <h1>API limit per day - 2000 calls.</h1>
      </div>
    )
  }

  return <MatchDetails />
}
