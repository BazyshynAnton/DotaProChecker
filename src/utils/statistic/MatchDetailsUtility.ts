import { HeroList, MatchDetails } from "@/types/redux/statisticSlice"
import type {
  MatchResult,
  PlayersByTeam,
  UMatchDetails,
} from "@/types/statistic/matchDetails"

// [CLASS] For handling appropriate match data
export class MatchDetailsUtility implements UMatchDetails {
  public m_PlayedHero = {
    heroName: "",
    heroLocalizedName: "",
  }

  // Find match result details
  public findMatchResult(matchDetails: MatchDetails): MatchResult {
    // Returning data
    const matchResult: MatchResult = {
      resultOfMatch: matchDetails.radiant_win,
      matchDuration: (matchDetails.duration / 60).toFixed(2).replace(".", ":"),
      radiantScore: matchDetails.radiant_score.toString(),
      direScore: matchDetails.dire_score.toString(),
    }

    return matchResult
  }

  public filterPlayersByTeam(matchDetails: MatchDetails): PlayersByTeam {
    const playersRadiant = matchDetails.players.filter(
      (player) => player.isRadiant
    )
    const playersDire = matchDetails.players.filter(
      (player) => !player.isRadiant
    )

    return { playersRadiant, playersDire }
  }
}
