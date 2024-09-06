import {
  HERO_LIST_URL,
  MATCH_DETAILS_URL,
  MATCH_HISTORY_URL,
  PLAYER_PROFILE_URL,
} from "./urls"

import type {
  Match,
  HeroList,
  MatchDetails,
  PlayerProfile,
  MatchData,
} from "@/types/staticPage/staticPageTypes"

//
//
//
// [FUNCTION] GET DATA FROM STEAM.API / OPENDOTA.API
export const getMatchData = async () => {
  try {
    //
    // [FETCH] GET MATCH HISTORY DATA FROM STEAM.API
    const responseMatchHistory = await fetchMatchHistory()

    // [ERROR CHECK]
    if (!responseMatchHistory.ok) {
      throw new Error("Failed to fetch match history data.")
    }

    // [PARSE] PARSE MATCH HISTORY DATA FROM RESPONSE
    const matchesHistoryData: Match = await responseMatchHistory.json()

    // Array<number> FOR STORE THE ID OF THE MATCHES
    const matchesHistoryIDsData: number[] = []

    // SET THE matchesHistoryIDsData Array<number>
    matchesHistoryData.result.matches.forEach((match) =>
      matchesHistoryIDsData.push(match.match_id)
    )

    // [FETCH] GET THE LAST PLAYED MATCH DATA FROM OPENDOTA.API
    const responseMatchDetailsData = await fetch(
      MATCH_DETAILS_URL + matchesHistoryIDsData[0],
      { cache: "force-cache" }
    )

    // [TEST FETCH] GET THE LAST PLAYED MATCH DATA
    // const responseMatchDetailsData = await fetch(MATCH_DETAILS_URL + 7913916911, {
    //   cache: "force-cache",
    // })

    // [PARSE] PARSE LAST PLAYED MATCH DATA FROM RESPONSE
    const matchDetailsData: MatchDetails = await responseMatchDetailsData.json()

    // [FETCH] GET THE HERO LIST DATA FROM OPENDOTA.API
    const responseHeroList = await fetch(HERO_LIST_URL, {
      cache: "force-cache",
    })

    // [PARSE] PARSE THE HERO LIST DATA DATA FROM RESPONSE
    const heroListData: HeroList[] = await responseHeroList.json()

    // Array<number> FOR STORE THE ID OF THE PLAYERS PROFILE
    const playersAccountIDs: number[] = []

    // SET THE playersAccountIDs Array<number>
    matchDetailsData.players.forEach((player) =>
      playersAccountIDs.push(player.account_id)
    )

    // Array<string> FOR STORE THE LINK OF PLAYERS PROFILE
    /* 
       Initialization -> [map] method for
       iteration through THE ID OF THE PLAYERS PROFILE
    */
    const playerProfilesPromises = playersAccountIDs.map((accountID) =>
      fetch(`${PLAYER_PROFILE_URL}${accountID}`, { cache: "force-cache" })
    )

    // [FETCH] GET THE PLAYERS PROFILE
    //         Using Promise.all
    const playersProfilesResponses = await Promise.all(playerProfilesPromises)

    // [PARSE] PARSE THE PLAYERS PROFILE FROM RESPONSE Array
    //         Using Promise.all
    const playersProfilesData: PlayerProfile[] = await Promise.all(
      playersProfilesResponses.map((response) => response.json())
    )

    // [RESULT] ALL DATA ABOUT MATCH
    const matchesStatisticData = {
      heroListData,
      matchDetailsData,
      matchesHistoryData,
      playersProfilesData,
      matchesHistoryIDsData,
    }

    // [RESULT] RETURN ALL DATA ABOUT MATCH
    return matchesStatisticData
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)

    return message
  }
}

class MatchDataUtility {
  public fetchMatchData = async () => {
    try {
      // [PARSE] PARSE MATCH HISTORY DATA FROM RESPONSE
      const matchesHistoryData: Match = await this.fetchHelper(
        MATCH_HISTORY_URL
      )
    } catch (error) {}
  }

  private fetchHelper = async function (URL: string): Promise<MatchData> {
    const response = await fetch(URL, {
      cache: "force-cache",
    })

    if (!response.ok) {
      return new Error(`Failed to fetch using URL -> ${URL}`)
    }

    return await response.json()
  }
}
