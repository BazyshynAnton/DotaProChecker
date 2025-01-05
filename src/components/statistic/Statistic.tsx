"use client"

import MatchDetails from "./MatchDetails"
import FetchError from "./FetchError"
import Search from "./Search"
import StatisticLoader from "@/components/loaders/StatisticLoader"

import { useEffect, useState } from "@/shared/reactImports"
import { useAppSelector, useAppDispatch } from "@/shared/reduxImports"
import { setMatchData } from "@/store/statisticSlice"

import type { MatchData } from "@/types/redux/statisticSlice"
import MatchSideInfo from "./MatchSideInfo"

export default function Statistic({
  matchData,
}: {
  matchData: MatchData | string
}) {
  const { isTableDataExist, error } = useAppSelector(
    (store) => store.statisticSlice
  )
  const dispatch = useAppDispatch()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!isTableDataExist) {
      dispatch(setMatchData(matchData))
    }

    const delay = async () => {
      await dataLoadingDelaySimulation()
      setIsReady(true)
    }

    delay()
  }, [dispatch, matchData, isTableDataExist])

  return (
    <div style={{ width: "100%" }}>
      <Search />
      {isReady ? (
        !error ? (
          <>
            <MatchSideInfo />
            <MatchDetails />
          </>
        ) : (
          <FetchError error={error} />
        )
      ) : (
        <StatisticLoader />
      )}
    </div>
  )
}

async function dataLoadingDelaySimulation() {
  // Simulate data loading
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 100)
  })
}
