'use server'

import { fetchHelper } from '../sharedUtils'

import type { DotaNews, HomeData, ProMatch, UHomeData } from '@/types/home/homeDataUtility'

export async function fetchHomeData(): Promise<HomeData | string> {
  try {
    const proMatchesData = await fetchHelper<ProMatch[]>(
      process.env.NEXT_PUBLIC_PRO_MATCHES_URL as string,
    )
    if (typeof proMatchesData === 'string') throw proMatchesData

    const dotaNewsData = await fetchHelper<DotaNews>(
      process.env.NEXT_PUBLIC_DOTA_NEWS_URL as string,
    )
    if (typeof dotaNewsData === 'string') throw dotaNewsData

    return { proMatchesData, dotaNewsData } as HomeData
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    return message
  }
}
