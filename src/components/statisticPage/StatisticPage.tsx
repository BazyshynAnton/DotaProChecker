'use client'
import { useEffect, useState } from '@/components/shared/reactImports'

import type {
  DotaMatchStatisticData,
  Match,
  MatchDetails,
} from '@/types/staticPage/staticPageTypes'

export default function StatisticPage({
  matchStatisticData,
}: DotaMatchStatisticData) {
  const [matchHistory, setMatchHistory] = useState<Match | {}>({})
  const [matchDetails, setMatchDetails] = useState<MatchDetails | {}>({})
  const [matchHistoryIDs, setMatchHistoryIDsData] = useState<number[] | []>([])
  const [allMatchDetails, setAllMatchDetails] = useState<MatchDetails[] | []>(
    []
  )

  useEffect(() => {
    setMatchHistory(matchStatisticData.matchHistoryData)
    setMatchDetails(matchStatisticData.matchDetailsData)
    setMatchHistoryIDsData(matchStatisticData.matchHistoryIDsData)
  }, [])

  useEffect(() => {
    const getAllMatchDetails = async () => {
      try {
        const promises = matchHistoryIDs.map((id) =>
          fetch(`https://api.opendota.com/api/matches/${id}`)
        )

        const responseAllMatchDetails = await Promise.all(promises)

        const dataAllMatchDetails = await Promise.all(
          responseAllMatchDetails.map((response) => response.json())
        )

        setAllMatchDetails(dataAllMatchDetails)
      } catch (error) {
        console.error(`Failed to fetch data: ${error}`)
      }
    }

    if (matchHistoryIDs.length > 0) {
      getAllMatchDetails()
    }
  }, [matchHistoryIDs])

  return <div></div>
}
