import StatisticPage from "@/components/statisticPage/StatisticPage"
import { MatchDataUtility } from "@/utils/statisticPage/MatchDataUtility"

export default async function Home() {
  const mdUtility = new MatchDataUtility()
  const matchesStatisticData = await mdUtility.fetchMatchData()

  return <StatisticPage matchesStatisticData={matchesStatisticData} />
}
