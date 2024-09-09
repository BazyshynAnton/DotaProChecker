"use client"
import MatchDetails from "./components/MatchDetails"
import FetchError from "./components/FetchError"

import { useEffect } from "@/shared/reactImports"
import { useAppSelector, useAppDispatch } from "@/shared/reduxImports"
import { setMatchData } from "@/store/statisticSlice"
import { MatchData } from "@/types/redux/statisticSlice"

export default function Statistic({
  matchData,
}: {
  matchData: MatchData | string
}) {
  const { matchDetails, error } = useAppSelector(
    (store) => store.statisticSlice
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setMatchData(matchData))
  }, [dispatch, matchData])

  if (error) return <FetchError error={error} />

  return <MatchDetails />
}
