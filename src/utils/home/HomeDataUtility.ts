import { fetchHelper } from "../sharedUtils"

import { DOTA_NEWS_URL, PRO_MATCHES_URL } from "../urls"

import type {
  DotaNews,
  HomeData,
  ProMatch,
  UHomeData,
} from "@/types/home/homeDataUtility"

export class HomeDataUtility implements UHomeData {
  public static getInstance(): HomeDataUtility {
    if (!HomeDataUtility.instance) {
      HomeDataUtility.instance = new HomeDataUtility()
    }

    return HomeDataUtility.instance
  }

  public async fetchHomeData(): Promise<HomeData | string> {
    try {
      const proMatchesData = await fetchHelper<ProMatch[]>(PRO_MATCHES_URL)

      if (typeof proMatchesData === "string") throw proMatchesData

      const dotaNewsData = await fetchHelper<DotaNews>(DOTA_NEWS_URL)

      if (typeof dotaNewsData === "string") throw dotaNewsData

      return { proMatchesData, dotaNewsData } as HomeData
    } catch (error) {
      let message
      if (error instanceof Error) message = error.message
      else message = String(error)
      return message
    }
  }

  private static instance: HomeDataUtility
  private constructor() {}
}
