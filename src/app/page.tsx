import StatisticPage from "@/components/statisticPage/StatisticPage"
import { getMatchData } from "@/utils/getMatchData"

export default async function Home() {
  const matchesStatisticData = await getMatchData()

  return <StatisticPage matchesStatisticData={matchesStatisticData} />
}
