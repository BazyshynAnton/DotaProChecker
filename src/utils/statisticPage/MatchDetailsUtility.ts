import type {
  HeroList,
  MatchDetails,
  Player,
} from "@/types/staticPage/staticPageTypes"
import type {
  MatchResult,
  MDUtility,
  PlayersByTeam,
} from "@/types/staticPage/matchDetailsTypes"

// [CLASS] FOR HANDLING DATA ABOUT APPROPRIATE MATCH
//         CLASS USES DEFAULT CONSTRUCTOR.
export class MatchDetailsUtility implements MDUtility {
  public m_PlayedHero = {
    heroName: "",
    heroLocalizedName: "",
  }

  // [FUNCTION] GET DETAILS ABOUT MATCH RESULT
  public getMatchResult(
    userID: number,
    matchDetails: MatchDetails,
    heroList: HeroList[]
  ): MatchResult {
    const players = matchDetails.players

    // RETURNING DATA
    const matchResult: MatchResult = {
      resultOfMatch: false,
      playerSide: "NONE",
      matchDuration: (matchDetails.duration / 60).toFixed(2).replace(".", ":"),
      radiantScore: matchDetails.radiant_score.toString(),
      direScore: matchDetails.dire_score.toString(),
      playedHero: "",
    }

    // > 1. SET RESULT OF MATCH FOR "USER"
    // > 2. SET PLAYER'S SIDE
    players.forEach((player) => {
      if (matchDetails.radiant_win) {
        matchResult.resultOfMatch = true
      } else {
        matchResult.resultOfMatch = false
      }

      if (userID === player.account_id && player.isRadiant) {
        matchResult.playerSide = "RADIANT"
      } else if (userID === player.account_id && !player.isRadiant) {
        matchResult.playerSide = "DIRE"
      }

      if (userID === player.account_id) {
        for (let i = 0; i < heroList.length; ++i) {
          const hero = heroList[i]

          if (player.hero_id === hero.id) {
            matchResult.playedHero = hero.localized_name
          }
        }
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
