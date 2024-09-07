import {
  HERO_LIST_URL,
  MATCH_DETAILS_URL,
  MATCH_HISTORY_URL,
  PLAYER_PROFILE_URL,
} from "@/utils/urls"

import type {
  Match,
  HeroList,
  MatchData,
  UMatchData,
  MatchDetails,
  PlayerProfile,
} from "@/types/redux/statisticPageSlice"

// ================
// TODO: Review it.
// ================

export class MatchDataUtility implements UMatchData {
  public fetchMatchData = async () => {
    try {
      // Get Matches History data using fetchHelper async func using Steam API
      const matchesHistoryData = await this.fetchHelper<Match>(
        MATCH_HISTORY_URL
      )

      if (matchesHistoryData instanceof Error) throw matchesHistoryData

      // Array<number> for store match IDs
      const matchesHistoryDataIDs: number[] = []
      // Set IDs to matchesHistoryDataIDs
      matchesHistoryData.result.matches.forEach((match) =>
        matchesHistoryDataIDs.push(match.match_id)
      )

      // Get data about the Last Played Match using Opendota API
      const matchDetailsData = await this.fetchHelper<MatchDetails>(
        MATCH_DETAILS_URL + matchesHistoryDataIDs[0]
      )

      // Get data about the last played match in account
      // const matchDetailsData = await this.fetchHelper(MATCH_DETAILS_URL + 7913916911)

      if (matchDetailsData instanceof Error) throw matchDetailsData

      // Get list of Heroes using Opendota API
      const heroListData = await this.fetchHelper<HeroList[]>(HERO_LIST_URL)

      if (heroListData instanceof Error) throw heroListData

      // Array<number> store of player profile IDs
      const playerAccountIDs: number[] = []
      // Set IDs to playersAccountIDs
      matchDetailsData.players.forEach((player) =>
        playerAccountIDs.push(player.account_id)
      )

      // Array<string> store of player profile links
      const playerProfilePromises = playerAccountIDs.map((accountID) =>
        fetch(`${PLAYER_PROFILE_URL}${accountID}`, { cache: "force-cache" })
      )
      // Fetch data about player profiles
      const playerProfileResponses = await Promise.all(playerProfilePromises)

      // Parse data about player profiles
      const playerProfilesData: PlayerProfile[] = await Promise.all(
        playerProfileResponses.map((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch Profile Data -> ${response}`)
          }

          return response.json()
        })
      )

      return {
        heroListData,
        matchDetailsData,
        matchesHistoryData,
        playerProfilesData,
        matchesHistoryDataIDs,
      } as MatchData
      //
    } catch (error) {
      let message
      if (error instanceof Error) message = error.message
      else message = String(error)

      return message
    }
  }

  private fetchHelper = async function <T>(URL: string): Promise<T | Error> {
    const response = await fetch(URL, {
      cache: "force-cache",
    })

    if (!response.ok) {
      return new Error(`Failed to fetch using URL -> ${URL}`)
    }

    return await response.json()
  }
}
