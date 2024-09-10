"use client"
import MatchDetails from "./components/MatchDetails"
import FetchError from "./components/FetchError"

import { useEffect } from "@/shared/reactImports"
import { useAppSelector, useAppDispatch } from "@/shared/reduxImports"

import { setMatchData } from "@/store/statisticSlice"

import type { MatchData } from "@/types/redux/statisticSlice"
import Search from "./components/Search"

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

  if (error) return <FetchError error={error} />

  return (
    <>
      <Search />
      <MatchDetails />
    </>
  )
}
