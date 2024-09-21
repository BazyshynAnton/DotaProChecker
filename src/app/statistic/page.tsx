import Statistic from "@/components/statistic/Statistic"
import { MatchDataUtility } from "@/utils/statistic/MatchDataUtility"

export default async function StatisticPage() {
  const uMatchData = new MatchDataUtility()
  const matchData = await uMatchData.fetchMatchData()

  return <Statistic matchData={matchData} />
}
