import type { Match, MatchDetails } from "@/types/staticPage/staticPageTypes"

export const getMatchData = async (startAtMatchId: number | null = null) => {
  let matchHistoryUrl =
    "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=3F8B2C146EB3A63816DE36C34A2F95E0&account_id=380571223&matches_requested=40"
  if (startAtMatchId) {
    matchHistoryUrl += `&start_at_match_id=${startAtMatchId.toString}`
  }

  //   TODO
  const matchDetailsUrl = "https://api.opendota.com/api/matches/7857969163"

  try {
    const [responseMatchHistory, responseMatchesDetailsData] =
      await Promise.all([fetch(matchHistoryUrl), fetch(matchDetailsUrl)])

    if (!responseMatchHistory.ok || !responseMatchesDetailsData.ok) {
      throw new Error("Failed to fetch data.")
    }

    const matchesHistoryData: Match = await responseMatchHistory.json()
    const matchesDetailsData: MatchDetails =
      await responseMatchesDetailsData.json()
    const matchesHistoryIDsData: number[] = []

    matchesHistoryData.result.matches.map((match) =>
      matchesHistoryIDsData.push(match.match_id)
    )

    const matchesStatisticData = {
      matchesHistoryData,
      matchesDetailsData,
      matchesHistoryIDsData,
    }

    return matchesStatisticData
  } catch (error) {
    console.error(error)
    throw new Error("[Fetch Error] Failed to fetch match data.")
  }
}
