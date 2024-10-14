import {
  HeroList,
  MatchDetails,
  PicksAndBans,
} from "@/types/redux/statisticSlice"
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

  public picksBans(
    side: string,
    matchDetails: MatchDetails
  ): PicksAndBans[] | string {
    switch (side) {
      case "radiant": {
        const radiantPicksBans = matchDetails.picks_bans.filter(
          (el) => el.team == 0
        )
        return radiantPicksBans
      }
      case "dire": {
        const direPicksBans = matchDetails.picks_bans.filter(
          (el) => el.team == 1
        )
        return direPicksBans
      }
    }

    return "error"
  }

  public findHeroName(hero_id: number, heroList: HeroList[]): void | string {
    for (let i = 0; i < heroList.length; ++i) {
      const hero = heroList[i]

      if (hero_id === hero.id) {
        return hero.localized_name
      }
    }
  }
}
