"use client"

import MatchDetails from "./MatchDetails"
import FetchError from "./FetchError"
import Search from "./Search"

import { useEffect } from "@/shared/reactImports"
import { useAppSelector, useAppDispatch } from "@/shared/reduxImports"
import { setMatchData } from "@/store/statisticSlice"

import type { MatchData } from "@/types/redux/statisticSlice"

export default function Statistic({
  matchData,
}: {
  matchData: MatchData | string
}) {
  const { error } = useAppSelector((store) => store.statisticSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setMatchData(matchData))
  }, [dispatch, matchData])

  return (
    <div style={{ width: "100%" }}>
      <Search />
      {!error ? <MatchDetails /> : <FetchError error={error} />}
    </div>
  )
}
