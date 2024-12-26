import { fetchHelper } from "../sharedUtils"

import {
  ABILITIES_URL,
  ABILITY_IDS_URL,
  HERO_ABILITIES_URL,
  HERO_LIST_URL,
  ITEMS_URL,
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
} from "@/types/redux/statisticSlice"
import { Item } from "@/types/statistic/playerRow"

/**
 * MatchDataUtility is a utility class responsible for handling
 * all data fetch operations required for the statistics page.
 *
 * Implements the Singleton pattern.
 *
 * @class
 * @implements {UMatchData}
 */
export class MatchDataUtility implements UMatchData {
  /**
   * Retrieves the singleton instance of the MatchDataUtility class.
   * If an instance does not exist, it creates one.
   *
   * @returns {MatchDataUtility} The singleton instance of the class.
   */
  public static getInstance(): MatchDataUtility {
    if (!MatchDataUtility.instance) {
      MatchDataUtility.instance = new MatchDataUtility()
    }
    return MatchDataUtility.instance
  }

  /**
   * Fetches all data related to a specific match,
   * including match details, hero list, and player profiles,
   * using the OpenDota API.
   *
   * If no match ID is provided, the function generates a default match ID.
   *
   * @param {number} [matchID=0] - The ID of the match.
   * Defaults to `0`, in which case the function retrieves a default match ID.
   * @returns {Promise<MatchData | string>} An object containing match details, hero list,
   * and player profiles, or an error message if an error occurs.
   *
   * @throws {Error} Throws errors for invalid responses or failed API calls.
   *
   * Returned `MatchData` object structure:
   * - `heroListData` (HeroList[]): List of heroes fetched from the API.
   * - `matchDetailsData` (MatchDetails): Details about the specified match.
   * - `playerProfilesData` (PlayerProfile[]): Profile information of players in the match.
   * - `abilitiesData` (any): Object of all abilities.
   * - `heroAbilitiesData` (any): Object of hero abilities.
   * - `abilityIDs` (any): Object of ability IDs.
   * - `abilityIDsData` (Item): Object of ability IDs.
   */
  public fetchMatchData = async (
    matchID: number = 0
  ): Promise<MatchData | string> => {
    try {
      if (matchID === 0) {
        const response = await this.genDefaultMatchID()
        if (typeof response === "number") {
          matchID = response
        } else if (response instanceof Error) throw response
      }

      // Get data about the Last Played Match using Opendota API
      const matchDetailsData = await fetchHelper<MatchDetails>(
        MATCH_DETAILS_URL + matchID
      )

      if (matchDetailsData instanceof Error) throw matchDetailsData

      // Get list of Heroes using Opendota API
      const heroListData = await fetchHelper<HeroList[]>(HERO_LIST_URL)

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
        playerProfileResponses.map((response) => response.json())
      )

      // Get abilities object
      const abilitiesData = await fetchHelper<any>(ABILITIES_URL)

      if (abilitiesData instanceof Error) throw abilitiesData

      // Get hero_abilities object
      const heroAbilitiesData = await fetchHelper<any>(HERO_ABILITIES_URL)

      if (heroAbilitiesData instanceof Error) throw heroAbilitiesData

      // Get ability_ids object
      const abilityIDsData = await fetchHelper<any>(ABILITY_IDS_URL)

      if (abilityIDsData instanceof Error) throw abilityIDsData

      // Get items object
      const itemsData = await fetchHelper<Item>(ITEMS_URL)

      if (itemsData instanceof Error) throw itemsData

      return {
        heroListData,
        matchDetailsData,
        playerProfilesData,
        abilitiesData,
        heroAbilitiesData,
        abilityIDsData,
        itemsData,
      } as MatchData
      //
    } catch (error) {
      let message
      if (error instanceof Error) message = error.message
      else message = String(error)

      return message
    }
  }

  private static instance: MatchDataUtility
  private constructor() {}

  /**
   * Fetches the most recent match ID from the
   * Cheng Jin Xiang "NothingToSay" match history.
   *
   *
   * This function retrieves the match history data
   * using the Opendota API, then extracts the match IDs
   * and returns the first one from the list.
   * If an error occurs, it returns the error message or
   * a string indicating the failure.
   *
   * @returns {Promise<number | Error | string>}
   * The match ID of the most recent match, or an error message
   * if the fetch operation fails.
   */
  private genDefaultMatchID = async (): Promise<number | Error | string> => {
    try {
      // Get Matches History data using fetchHelper async func using Opendota API
      // Default player - Cheng Jin Xiang "NothingToSay"
      const matchesHistoryData = await fetchHelper<Match[]>(MATCH_HISTORY_URL)

      if (matchesHistoryData instanceof Error) throw matchesHistoryData

      // Array<number> for store match IDs
      const matchHistoryDataIDs: number[] = []
      // Set IDs to matchesHistoryDataIDs
      matchesHistoryData.forEach((match) =>
        matchHistoryDataIDs.push(match.match_id)
      )

      return matchHistoryDataIDs[0]
    } catch (error) {
      let message
      if (error instanceof Error) message = error
      else message = String(error)
      return message
    }
  }
}
