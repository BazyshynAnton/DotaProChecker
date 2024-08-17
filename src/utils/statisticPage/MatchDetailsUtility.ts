import type { MatchDetails } from "@/types/staticPage/staticPageTypes"
import type {
  MatchResult,
  MDUtility,
  PlayersByTeam,
} from "@/types/staticPage/matchDetailsTypes"

// [CLASS] FOR HANDLING DATA ABOUT APPROPRIATE MATCH
//         CLASS USES DEFAULT CONSTRUCTOR.
export class MatchDetailsUtility implements MDUtility {
  // [FUNCTION] GET DETAILS ABOUT MATCH RESULT
  public getMatchResult(
    userID: number,
    matchDetails: MatchDetails
  ): MatchResult {
    const players = matchDetails.players

    // RETURNING DATA
    const matchResult: MatchResult = {
      resultOfMatch: "NONE",
      playerSide: "NONE",
      matchDuration: (matchDetails.duration / 60).toFixed(2).replace(".", ":"),
      radiantScore: matchDetails.radiant_score.toString(),
      direScore: matchDetails.dire_score.toString(),
    }

    // > 1. SET RESULT OF MATCH FOR "USER"
    // > 2. SET PLAYER'S SIDE
    players.forEach((player) => {
      if (userID === player.account_id && player.win === 1) {
        matchResult.resultOfMatch = "WIN"
      } else if (userID === player.account_id && player.win === 0) {
        matchResult.resultOfMatch = "LOSE"
      }

      if (userID === player.account_id && player.isRadiant) {
        matchResult.playerSide = "RADIANT"
      } else if (userID === player.account_id && !player.isRadiant) {
        matchResult.playerSide = "DIRE"
      }
    })
    // < 1. SET RESULT OF MATCH FOR "USER"
    // < 2. SET PLAYER'S SIDE

    return matchResult
  }

  // [FUNCTION] GET(SPLIT) PLAYERS BY TEAM
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
