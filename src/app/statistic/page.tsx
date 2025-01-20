import Statistic from '@/components/statistic/Statistic'

import { fetchMatchData } from '@/utils/statistic/MatchDataUtility'

export default async function StatisticPage() {
  const matchData = await fetchMatchData()

  return <Statistic matchData={matchData} />
}
