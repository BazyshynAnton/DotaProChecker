import type {
  HeroAbilities,
  HeroList,
  Match,
  MatchDetails,
} from "@/types/staticPage/staticPageTypes"

export const getMatchData = async () => {
  let matchHistoryUrl =
    "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=3F8B2C146EB3A63816DE36C34A2F95E0&account_id=380571223"

  const matchDetailsUrl = "https://api.opendota.com/api/matches/"

  const heroListUrl = "https://api.opendota.com/api/heroes"

  try {
    const responseMatchHistory = await fetch(matchHistoryUrl, {
      cache: "force-cache",
    })

    if (!responseMatchHistory.ok) {
      throw new Error("Failed to fetch data.")
    }

    const matchesHistoryData: Match = await responseMatchHistory.json()
    const matchesHistoryIDsData: number[] = []

    matchesHistoryData.result.matches.map((match) =>
      matchesHistoryIDsData.push(match.match_id)
    )

    const responseMatchDetailsData = await fetch(
      matchDetailsUrl + matchesHistoryIDsData[0],
      { cache: "force-cache" }
    )
    const matchDetailsData: MatchDetails = await responseMatchDetailsData.json()

    const responseHeroList = await fetch(heroListUrl, { cache: "force-cache" })
    const heroListData: HeroList[] = await responseHeroList.json()

    const matchesStatisticData = {
      matchesHistoryData,
      matchDetailsData,
      matchesHistoryIDsData,
      heroListData,
    }

    return matchesStatisticData
  } catch (error) {
    console.error(error)
    throw new Error("[Fetch Error] Failed to fetch match data.")
  }
}
