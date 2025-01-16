import Home from '@/components/home/Home'
import { fetchHomeData } from '@/utils/home/HomeDataUtility'
//import { HomeDataUtility } from '@/utils/home/HomeDataUtility'

export default async function HomePage() {
  // const uHomeData = HomeDataUtility.getInstance()
  //const homeData = await uHomeData.fetchHomeData()
  const homeData = await fetchHomeData()
  return <Home homeData={homeData} />
}
