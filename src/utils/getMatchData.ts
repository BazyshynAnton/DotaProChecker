import type {
  HeroList,
  Match,
  MatchDetails,
  PlayerProfile,
} from "@/types/staticPage/staticPageTypes"

//
//
//
// [FUNCTION] GET DATA FROM STEAM.API / OPENDOTA.API
export const getMatchData = async () => {
  //
  // CONSTANT FOR LINK FOR THE MATCH HISTORY DATA FROM STEAM.API
  const matchHistoryUrl =
    "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=3F8B2C146EB3A63816DE36C34A2F95E0&account_id=86738694"

  // CONSTANT FOR LINK FOR THE MATCH DETAILS DATA FROM OPENDOTA.API
  const matchDetailsUrl = "https://api.opendota.com/api/matches/"

  // CONSTANT FOR LINK FOR THE HERO LIST DATA FROM OPENDOTA.API
  const heroListUrl = "https://api.opendota.com/api/heroes"

  // CONSTANT FOR LINK FOR THE PLAYERS PROFILE DATA FROM OPENDOTA.API
  const playerProfileUrl = "https://api.opendota.com/api/players/"

  // [TRY-CATCH BLOCK] DATA FETCHING
  try {
    //
    // [FETCH] GET MATCH HISTORY DATA FROM STEAM.API
    const responseMatchHistory = await fetch(matchHistoryUrl, {
      cache: "force-cache",
    })

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
      matchDetailsUrl + matchesHistoryIDsData[0],
      { cache: "force-cache" }
    )

    // [TEST FETCH] GET THE LAST PLAYED MATCH DATA
    // const responseMatchDetailsData = await fetch(matchDetailsUrl + 7913916911, {
    //   cache: "force-cache",
    // })

    // [PARSE] PARSE LAST PLAYED MATCH DATA FROM RESPONSE
    const matchDetailsData: MatchDetails = await responseMatchDetailsData.json()

    // [FETCH] GET THE HERO LIST DATA FROM OPENDOTA.API
    const responseHeroList = await fetch(heroListUrl, { cache: "force-cache" })

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
      fetch(`${playerProfileUrl}${accountID}`, { cache: "force-cache" })
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
      // MATCH HISTORY DATA
      matchesHistoryData,

      // MATCH DATA
      matchDetailsData,

      // ID OF THE MATCHES
      matchesHistoryIDsData,

      // HERO LIST DATA
      heroListData,

      // PLAYERS PROFILE
      playersProfilesData,
    }

    // [RESULT] RETURN ALL DATA ABOUT MATCH
    return matchesStatisticData
  } catch (error) {
    //
    //[ERROR] DISPLAY AN ERROR
    console.error(error)
    //
    //[ERROR] NEW ERROR
    throw new Error("[Fetch Error] Failed to fetch match data.")
  }
}
