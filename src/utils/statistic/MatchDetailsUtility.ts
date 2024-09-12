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
  public findMatchResult(
    userID: number,
    matchDetails: MatchDetails,
    heroList: HeroList[]
  ): MatchResult {
    const players = matchDetails.players

    // Returning data
    const matchResult: MatchResult = {
      resultOfMatch: false,
      playerSide: "NONE",
      matchDuration: (matchDetails.duration / 60).toFixed(2).replace(".", ":"),
      radiantScore: matchDetails.radiant_score.toString(),
      direScore: matchDetails.dire_score.toString(),
      playedHero: "",
    }

    players.forEach((player) => {
      // Result of match for player
      if (matchDetails.radiant_win) {
        matchResult.resultOfMatch = true
      } else {
        matchResult.resultOfMatch = false
      }

      // Player side
      if (userID === player.account_id && player.isRadiant) {
        matchResult.playerSide = "RADIANT"
      } else if (userID === player.account_id && !player.isRadiant) {
        matchResult.playerSide = "DIRE"
      }

      // Player nickname
      if (userID === player.account_id) {
        for (let i = 0; i < heroList.length; ++i) {
          const hero = heroList[i]

          if (player.hero_id === hero.id) {
            matchResult.playedHero = hero.localized_name
          }
        }
      }
    })

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
