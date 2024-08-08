import hero_abilities from "../../../public/data/heroAbilities/hero_abilities.json"

import type {
  HeroAbilities,
  HeroList,
  MatchDetails,
  Player,
  PlayerProfile,
} from "@/types/staticPage/staticPageTypes"
import type {
  DetailsAboutHero,
  DetailsAboutPlayer,
} from "@/types/staticPage/matchDetailsTypes"

// GET DETAILS ABOUT MATCH RESULT
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

// GET(SPLIT) PLAYERS BY TEAM
export const filterPlayersByTeam = (matchDetails: MatchDetails) => {
  const playersRadiant = matchDetails.players.filter(
    (player) => player.isRadiant
  )
  const playersDire = matchDetails.players.filter((player) => !player.isRadiant)

  return { playersRadiant, playersDire }
}

// COLORS FOR PLAYER'S SLOT
const player_colors = {
  radiant: {
    team_number: 0,
    colors: {
      "0": "#3375ff",
      "1": "#66ffbf",
      "2": "#bf00bf",
      "3": "#f3f00b",
      "4": "#ff6b00",
    },
  },

  dire: {
    team_number: 1,
    colors: {
      "0": "#fe86c2",
      "1": "#a1b447",
      "2": "#65d9f7",
      "3": "#008321",
      "4": "#a46900",
    },
  },
}

// GET DETAILS ABOUT HERO
export const findAppropriateHero = (
  player: Player,
  heroList: HeroList[]
): DetailsAboutHero => {
  const heroAbilities: HeroAbilities = hero_abilities

  // RETURNING DATA
  let res: DetailsAboutHero = {
    heroLocalizedName: "",
    heroVariant: {
      icon: "",
      color: "",
      title: "",
      description: "",
    },
    playerColor: "",
  }

  // CACHE FOR CURRENT HERO
  let currentHero = ""

  // GET COLOR OF PLAYER SLOT >
  if (player.team_number === player_colors.radiant.team_number) {
    for (const [colorKey, colorValue] of Object.entries(
      player_colors.radiant.colors
    )) {
      if (player.player_slot.toString() === colorKey) {
        res.playerColor = colorValue
      }
    }
  }

  if (player.team_number === player_colors.dire.team_number) {
    for (const [colorKey, colorValue] of Object.entries(
      player_colors.dire.colors
    )) {
      if (player.team_slot.toString() === colorKey) {
        res.playerColor = colorValue
      }
    }
  }
  // < GET COLOR OF PLAYER SLOT

  // GET LOCALIZED NAME AND NAME OF HERO >
  for (let i = 0; i < heroList.length; ++i) {
    const hero = heroList[i]

    if (player.hero_id === hero.id) {
      res.heroLocalizedName = hero.localized_name
      currentHero = hero.name
    }
  }
  // < GET LOCALIZED NAME AND NAME OF HERO

  // GET INFORMATION ABOUT HERO FACET >
  for (const [heroID, value] of Object.entries(heroAbilities)) {
    if (currentHero === heroID) {
      switch (player.hero_variant) {
        case 1:
          res.heroVariant.icon = value.facets[0].icon
          res.heroVariant.color = value.facets[0].color
          res.heroVariant.title = value.facets[0].title
          res.heroVariant.description = value.facets[0].description
          break

        case 2:
          res.heroVariant.icon = value.facets[1].icon
          res.heroVariant.color = value.facets[1].color
          res.heroVariant.title = value.facets[1].title
          res.heroVariant.description = value.facets[1].description
          break

        case 3:
          res.heroVariant.icon = value.facets[2].icon
          res.heroVariant.color = value.facets[2].color
          res.heroVariant.title = value.facets[2].title
          res.heroVariant.description = value.facets[2].description
          break

        case 4:
          res.heroVariant.icon = value.facets[3].icon
          res.heroVariant.color = value.facets[3].color
          res.heroVariant.title = value.facets[3].title
          res.heroVariant.description = value.facets[3].description
          break

        case 5:
          res.heroVariant.icon = value.facets[4].icon
          res.heroVariant.color = value.facets[4].color
          res.heroVariant.title = value.facets[4].title
          res.heroVariant.description = value.facets[4].description
          break

        default:
          break
      }
    }
  }
  // < GET INFORMATION ABOUT HERO FACET

  return res
}

export function findAppropriatePlayer(
  player: Player,
  playersProfiles: PlayerProfile[]
): DetailsAboutPlayer {
  const res: DetailsAboutPlayer = {
    profileInfo: {
      avatar: "",
      profileurl: "",
    },
    rank_tier_info: null,
    leaderboard_rank_info: null,
  }

  if ("account_id" in player) {
    playersProfiles.forEach((playerProfile) => {
      if ("profile" in playerProfile) {
        if (player.account_id === playerProfile.profile.account_id) {
          res.profileInfo.avatar = playerProfile.profile.avatar
          res.profileInfo.profileurl = playerProfile.profile.profileurl
          res.leaderboard_rank_info = playerProfile.leaderboard_rank
          res.rank_tier_info = playerProfile.rank_tier
        }
      }
    })
  }

  return res
}
