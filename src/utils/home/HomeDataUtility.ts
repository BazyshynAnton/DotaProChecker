import { fetchHelper } from '../sharedUtils'

import type { DotaNews, HomeData, ProMatch } from '@/types/home/homeDataUtility'

export async function fetchHomeData(): Promise<HomeData | string> {
  try {
    const proMatchesData = await fetchHelper<ProMatch[]>(
      process.env.NEXT_PUBLIC_PRO_MATCHES_URL as string,
    )
    if (proMatchesData instanceof Error) throw proMatchesData

    const dotaNewsData = await fetchHelper<DotaNews>(
      process.env.NEXT_PUBLIC_DOTA_NEWS_URL as string,
    )
    if (dotaNewsData instanceof Error) throw dotaNewsData

    return JSON.parse(JSON.stringify({ proMatchesData, dotaNewsData } as HomeData))
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    return message
  }
}
