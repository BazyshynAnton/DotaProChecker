import { fetchHelper } from "../sharedUtils"

import type {
  HomeData,
  ProMatch,
  UHomeData,
} from "@/types/home/homeDataUtility"
import { PRO_MATCHES_URL } from "../urls"

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

      return { proMatchesData } as HomeData
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
