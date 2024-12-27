import { DotaNews, ProMatch } from "../home/homeDataUtility"

export interface InitialHomeState {
  proMatches: ProMatch[] | null
  dotaNews: DotaNews | null
  isHomeDataExist: boolean

  error: string | null
}
