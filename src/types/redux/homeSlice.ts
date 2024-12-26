import { ProMatch } from "../home/homeDataUtility"

export interface InitialHomeState {
  proMatches: ProMatch[] | null
  isHomeDataExist: boolean

  error: string | null
}
