import type {
  HeroList,
  Match,
  MatchDetails,
  PlayerProfile,
} from "@/types/staticPage/staticPageTypes"

export const getMatchData = async () => {
  const matchHistoryUrl =
    "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=3F8B2C146EB3A63816DE36C34A2F95E0&account_id=386383012"

  const matchDetailsUrl = "https://api.opendota.com/api/matches/"
  const heroListUrl = "https://api.opendota.com/api/heroes"
  const playerProfileUrl = "https://api.opendota.com/api/players/"

  try {
    const responseMatchHistory = await fetch(matchHistoryUrl, {
      cache: "force-cache",
    })

    if (!responseMatchHistory.ok) {
      throw new Error("Failed to fetch match history data.")
    }

    const matchesHistoryData: Match = await responseMatchHistory.json()
    const matchesHistoryIDsData: number[] = []

    matchesHistoryData.result.matches.forEach((match) =>
      matchesHistoryIDsData.push(match.match_id)
    )

    const responseMatchDetailsData = await fetch(
      matchDetailsUrl + matchesHistoryIDsData[0],
      { cache: "force-cache" }
    )
    const matchDetailsData: MatchDetails = await responseMatchDetailsData.json()

    const responseHeroList = await fetch(heroListUrl, { cache: "force-cache" })
    const heroListData: HeroList[] = await responseHeroList.json()

    const playersAccountIDs: number[] = []
    matchDetailsData.players.forEach((player) =>
      playersAccountIDs.push(player.account_id)
    )

    const playerProfilesPromises = playersAccountIDs.map((accountID) =>
      fetch(`${playerProfileUrl}${accountID}`, { cache: "force-cache" })
    )

    const playersProfilesResponses = await Promise.all(playerProfilesPromises)
    const playersProfilesData: PlayerProfile[] = await Promise.all(
      playersProfilesResponses.map((response) => response.json())
    )

    const matchesStatisticData = {
      matchesHistoryData,
      matchDetailsData,
      matchesHistoryIDsData,
      heroListData,
      playersProfilesData,
    }

    return matchesStatisticData
  } catch (error) {
    console.error(error)
    throw new Error("[Fetch Error] Failed to fetch match data.")
  }
}
