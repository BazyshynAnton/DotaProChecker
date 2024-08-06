import hero_abilities from "../../../public/data/heroAbilities/hero_abilities.json"

import type {
  HeroAbilities,
  HeroList,
  MatchDetails,
  Player,
} from "@/types/staticPage/staticPageTypes"

import type { DetailsAboutHero } from "@/types/staticPage/matchDetailsTypes"

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

export const findAppropriateHero = (
  player: Player,
  heroList: HeroList[]
): DetailsAboutHero => {
  const heroAbilities: HeroAbilities = hero_abilities

  let res: DetailsAboutHero = {
    heroLocalizedName: "",
    heroVariant: {
      icon: "",
      title: "",
      description: "",
    },
  }

  let currentHero = ""

  for (let i = 0; i < heroList.length; ++i) {
    const hero = heroList[i]

    if (player.hero_id === hero.id) {
      res.heroLocalizedName = hero.localized_name
      currentHero = hero.name
    }
  }

  for (const [heroID, value] of Object.entries(heroAbilities)) {
    if (currentHero === heroID) {
      if (player.hero_variant === 1) {
        res.heroVariant.icon = value.facets[0].icon
        res.heroVariant.title = value.facets[0].title
        res.heroVariant.description = value.facets[0].description
      }

      if (player.hero_variant === 2) {
        res.heroVariant.icon = value.facets[1].icon
        res.heroVariant.title = value.facets[1].title
        res.heroVariant.description = value.facets[1].description
      }
    }
  }

  return res
}
