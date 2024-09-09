import StatisticPage from "@/components/statisticPage/StatisticPage"
import { MatchDataUtility } from "@/utils/statisticPage/MatchDataUtility"

export default async function Home() {
  const uMatchData = new MatchDataUtility()
  const matchData = await uMatchData.fetchMatchData()

  return <StatisticPage matchData={matchData} />
}
