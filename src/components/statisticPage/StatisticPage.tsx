"use client"
import { useEffect } from "@/components/shared/reactImports"
import { useDispatch, useSelector } from "@/components/shared/reduxImports"
import {
  setAllMatchesDetails,
  setMatchesDetails,
  setMatchesHistory,
  setMatchesHistoryIDs,
} from "@/store/statisticPageSlice"
import { AppDispatch, RootState } from "@/store/store"

import type { DotaMatchesStatisticData } from "@/types/staticPage/staticPageTypes"

export let startAtMatchId: number

export default function StatisticPage({
  matchesStatisticData,
}: DotaMatchesStatisticData) {
  const { matches, matchesDetails, matchesHistoryIDs } = useSelector(
    (store: RootState) => store.statisticPageSlice
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setMatchesHistory(matchesStatisticData.matchesHistoryData))
    dispatch(setMatchesDetails(matchesStatisticData.matchesDetailsData))
    dispatch(setMatchesHistoryIDs(matchesStatisticData.matchesHistoryIDsData))
  }, [
    dispatch,
    matchesStatisticData.matchesDetailsData,
    matchesStatisticData.matchesHistoryData,
    matchesStatisticData.matchesHistoryIDsData,
  ])

  useEffect(() => {
    const getAllMatchDetails = async () => {
      try {
        if (matchesHistoryIDs === null) return null

        const promises = matchesHistoryIDs.map((id: number) =>
          fetch(`https://api.opendota.com/api/matches/${id}`)
        )

        const responseAllMatchDetails = await Promise.all(promises)

        const dataAllMatchDetails = await Promise.all(
          responseAllMatchDetails.map((response) => response.json())
        )

        dispatch(setAllMatchesDetails(dataAllMatchDetails))
      } catch (error) {
        console.error(`Failed to fetch data: ${error}`)
      }
    }

    if (matchesHistoryIDs !== null) {
      getAllMatchDetails()
      startAtMatchId = matchesHistoryIDs[matchesHistoryIDs.length - 1]
    }
  }, [dispatch, matchesHistoryIDs])

  console.log("[Start At Match ID] ", startAtMatchId)
  console.log("[Match] ", matches)
  console.log("[Match Details] ", matchesDetails)
  console.log("[Match History IDs] ", matchesHistoryIDs)

  if (matchesDetails === null) return <div></div>

  const onlyMatches = matchesDetails.players

  return (
    <div style={{ marginTop: "5rem" }}>
      {onlyMatches.map((match, idx) => (
        <div key={idx}>{match.gold_per_min}</div>
      ))}
    </div>
  )
}
