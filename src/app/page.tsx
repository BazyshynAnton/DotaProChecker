import StatisticPage from "@/components/statisticPage/StatisticPage"
import { getMatchData } from "@/utils/getMatchData"
import { cache } from "@/components/statisticPage/StatisticPage"

export default async function Home() {
  //TODO CACHING
  const matchesStatisticData = await getMatchData()

  return <StatisticPage matchesStatisticData={matchesStatisticData} />
}
