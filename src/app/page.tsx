import StatisticPage from '@/components/statisticPage/StatisticPage'

import type { Match, MatchDetails } from '@/types/staticPage/staticPageTypes'

const getMatchData = async () => {
  const matchHistoryUrl =
    'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=3F8B2C146EB3A63816DE36C34A2F95E0&account_id=380571223'
  const matchDetailsUrl = 'https://api.opendota.com/api/matches/7857969163'

  try {
    const [responseMatchHistory, responseMatchDetailsData] = await Promise.all([
      fetch(matchHistoryUrl),
      fetch(matchDetailsUrl),
    ])

    if (!responseMatchHistory.ok || !responseMatchDetailsData.ok) {
      throw new Error('Failed to fetch data.')
    }

    const matchHistoryData: Match = await responseMatchHistory.json()
    const matchDetailsData: MatchDetails = await responseMatchDetailsData.json()
    const matchHistoryIDsData: number[] = []

    matchHistoryData.result.matches.map((match) =>
      matchHistoryIDsData.push(match.match_id)
    )

    const matchStatisticData = {
      matchHistoryData,
      matchDetailsData,
      matchHistoryIDsData,
    }

    return matchStatisticData
  } catch (error) {
    console.error(error)
    throw new Error('[Fetch Error] Failed to fetch match data.')
  }
}

export default async function Home() {
  const matchStatisticData = await getMatchData()

  return <StatisticPage matchStatisticData={matchStatisticData} />
}
