'use server'

import { fetchHelper } from '../sharedUtils'

import type {
  Match,
  HeroList,
  MatchData,
  UMatchData,
  MatchDetails,
  PlayerProfile,
} from '@/types/redux/statisticSlice'
import type { Item } from '@/types/statistic/playerRow'

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
export const fetchMatchData = async (matchID: number = 0): Promise<MatchData | string> => {
  try {
    if (matchID === 0) {
      const response = await genDefaultMatchID()
      if (typeof response === 'number') {
        matchID = response
      } else if (response instanceof Error) throw response
    }

    // Get data about the Last Played Match using Opendota API
    const matchDetailsData = await fetchHelper<MatchDetails>(
      (process.env.NEXT_PUBLIC_MATCH_DETAILS_URL as string) + matchID,
    )
    if (matchDetailsData instanceof Error) throw matchDetailsData

    // Get list of Heroes using Opendota API
    const heroListData = await fetchHelper<HeroList[]>(
      process.env.NEXT_PUBLIC_HERO_LIST_URL as string,
    )
    if (heroListData instanceof Error) throw heroListData

    // Array<number> store of player profile IDs
    const playerAccountIDs: number[] = []
    // Set IDs to playersAccountIDs
    matchDetailsData.players.forEach((player) => playerAccountIDs.push(player.account_id))

    // Array<string> store of player profile links
    const playerProfilePromises = playerAccountIDs.map((accountID) =>
      fetch(`${process.env.NEXT_PUBLIC_PLAYER_PROFILE_URL as string}${accountID}`, {
        cache: 'no-store',
      }),
    )
    // Fetch data about player profiles
    const playerProfileResponses = await Promise.all(playerProfilePromises)

    // Parse data about player profiles
    const playerProfilesData: PlayerProfile[] = await Promise.all(
      playerProfileResponses.map((response) => response.json()),
    )

    // Get abilities object
    const abilitiesData = await fetchHelper<any>(process.env.NEXT_PUBLIC_ABILITIES_URL as string)
    if (abilitiesData instanceof Error) throw abilitiesData

    // Get hero_abilities object
    const heroAbilitiesData = await fetchHelper<any>(
      process.env.NEXT_PUBLIC_HERO_ABILITIES_URL as string,
    )
    if (heroAbilitiesData instanceof Error) throw heroAbilitiesData

    // Get ability_ids object
    const abilityIDsData = await fetchHelper<any>(process.env.NEXT_PUBLIC_ABILITY_IDS_URL as string)
    if (abilityIDsData instanceof Error) throw abilityIDsData

    // Get items object
    const itemsData = await fetchHelper<Item>(process.env.NEXT_PUBLIC_ITEMS_URL as string)
    if (itemsData instanceof Error) throw itemsData

    // Get region object
    const regionData = await fetchHelper<any>(process.env.NEXT_PUBLIC_REGION_URL as string)
    if (regionData instanceof Error) throw regionData

    // Get game_mode object
    const gameModeData = await fetchHelper<any>(process.env.NEXT_PUBLIC_GAME_MODE_URL as string)
    if (gameModeData instanceof Error) throw gameModeData

    const lobbyTypeData = await fetchHelper<any>(process.env.NEXT_PUBLIC_LOBBY_TYPE_URL as string)
    if (lobbyTypeData instanceof Error) throw lobbyTypeData

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
export const genDefaultMatchID = async (): Promise<number | Error | string> => {
  try {
    // Get Matches History data using fetchHelper async func using Opendota API
    // Default player - Cheng Jin Xiang "NothingToSay"
    const matchesHistoryData = await fetchHelper<Match[]>(
      process.env.NEXT_PUBLIC_MATCH_HISTORY_URL as string,
    )

    if (matchesHistoryData instanceof Error) throw matchesHistoryData

    // Array<number> for store match IDs
    const matchHistoryDataIDs: number[] = []
    // Set IDs to matchesHistoryDataIDs
    matchesHistoryData.forEach((match) => matchHistoryDataIDs.push(match.match_id))

    return matchHistoryDataIDs[0]
  } catch (error) {
    let message
    if (error instanceof Error) message = error
    else message = String(error)
    return message
  }
}
