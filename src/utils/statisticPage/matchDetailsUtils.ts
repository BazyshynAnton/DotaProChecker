import {
  heroAbilities,
  HeroList,
  MatchDetails,
  Player,
} from "@/types/staticPage/staticPageTypes"
import hero_abilities from "../../../public/data/heroAbilities/hero_abilities.json"
import { log } from "console"

export const getMatchResult = (userID: number, matchDetails: MatchDetails) => {
  const players = matchDetails.players
  let resultOfMatch = "NONE"
  let playerSide = "NONE"
  let matchDuration = (matchDetails.duration / 60).toFixed(2)
  let radiantScore = matchDetails.radiant_score.toString()
  let direScore = matchDetails.dire_score.toString()

  players.forEach((player) => {
    if (userID === player.account_id && player.win === 1) {
      resultOfMatch = "WIN"
    } else if (userID === player.account_id && player.win === 0) {
      resultOfMatch = "LOSE"
    }

    if (userID === player.account_id && player.isRadiant) {
      playerSide = "RADIANT"
    } else if (userID === player.account_id && !player.isRadiant) {
      playerSide = "DIRE"
    }
  })

  return { resultOfMatch, playerSide, matchDuration, radiantScore, direScore }
}

export const filterPlayersByTeam = (matchDetails: MatchDetails) => {
  const playersRadiant = matchDetails.players.filter(
    (player) => player.isRadiant
  )
  const playersDire = matchDetails.players.filter((player) => !player.isRadiant)

  return { playersRadiant, playersDire }
}

//TODO: get icons.
// export const findAppropriateHero = (player: Player, heroList: HeroList[]) => {
//   const heroAbilities: heroAbilities[] = hero_abilities

//   let res = {
//     heroLocalizedName: "",
//     heroVariant: "",
//   }

//   for (let i = 0; i < heroList.length; ++i) {
//     const hero = heroList[i]

//     if (player.hero_id === hero.id) {
//         res.heroLocalizedName = hero.localized_name
//     }
//   }

//   for
// }
