import Home from '@/components/home/Home'

import { fetchHomeData } from '@/utils/home/HomeDataUtility'

export default async function HomePage() {
  const homeData = await fetchHomeData()

  return <Home homeData={homeData} />
}
