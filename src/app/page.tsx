import Home from "@/components/home/Home"
import { HomeDataUtility } from "@/utils/home/HomeDataUtility"

export default async function HomePage() {
  const uHomeData = HomeDataUtility.getInstance()
  const homeData = await uHomeData.fetchHomeData()

  return <Home homeData={homeData} />
}
