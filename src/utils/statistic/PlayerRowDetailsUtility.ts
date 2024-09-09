import items from "../../../public/data/items/items.json"
import hero_abilities from "../../../public/data/heroAbilities/hero_abilities.json"

import type { Player } from "@/types/statistic/tableDetails"
import type { PlayerColors } from "@/types/statistic/matchDetails"
import type { HeroList, PlayerProfile } from "@/types/redux/statisticPageSlice"
import type {
  HeroAbilities,
  HeroAbilitiesValue,
} from "@/types/staticPage/staticPage"
import type {
  DetailsAboutHero,
  DetailsAboutPlayer,
  Item,
  ItemDetails,
  UPlayerRowDetails,
} from "@/types/statistic/playerRow"

// [CLASS] For handling data about appropriate player
export class PlayerRowDetailsUtility implements UPlayerRowDetails {
  // Find player hero
  public findAppropriateHero(
    player: Player,
    heroList: HeroList[]
  ): DetailsAboutHero {
    // Find player slot color
    this.findColor(player)

    // Find localized name and hero name
    this.findHeroName(player, heroList)

    // Find hero facet
    this.findHeroFacet(player)

    return this.m_HeroDetails
  }

  // Find player details
  public findAppropriatePlayer(
    player: Player,
    playersProfiles: PlayerProfile[]
  ): DetailsAboutPlayer {
    //
    // If player is not Anonymous -> find player data
    if ("account_id" in player) {
      playersProfiles.forEach((playerProfile) => {
        if ("profile" in playerProfile) {
          if (player.account_id === playerProfile.profile.account_id) {
            // avatar
            this.m_PlayerDetails.profileInfo.avatar =
              playerProfile.profile.avatar

            // profile url
            this.m_PlayerDetails.profileInfo.profileurl =
              playerProfile.profile.profileurl

            // rank
            this.m_PlayerDetails.leaderboard_rank_info =
              playerProfile.leaderboard_rank

            // rank tier
            this.m_PlayerDetails.rank_tier_info = playerProfile.rank_tier
          }
        }
      })
    }

    return this.m_PlayerDetails
  }

  public findPlayerRankIcon(): string {
    const leaderboardRank = this.m_PlayerDetails.leaderboard_rank_info

    const rankTier = this.m_PlayerDetails.rank_tier_info

    if (leaderboardRank && rankTier) {
      if (leaderboardRank <= 10 && leaderboardRank >= 1) {
        return `/pictures/dotaPlayerRanksIcon/${rankTier + 2}.png`
      }

      if (leaderboardRank > 10 && leaderboardRank <= 100) {
        return `/pictures/dotaPlayerRanksIcon/${rankTier + 1}.png`
      }

      if (leaderboardRank > 100) {
        return `/pictures/dotaPlayerRanksIcon/${rankTier}.png`
      }

      return `/pictures/dotaPlayerRanksIcon/${rankTier}.png`
    }

    return "/pictures/dotaPlayerRanksIcon/00.png"
  }

  public findPlayerAvatar(): string {
    const avatar = this.m_PlayerDetails.profileInfo.avatar

    if (avatar !== "") return avatar

    return "/pictures/dotaPlayerIcon/anonymous.jpg"
  }

  // Find item details
  public findAppropriateItems(player: Player): ItemDetails | null {
    const playerItems: Item = items

    const emptyValue = {
      abilities: [],
      hint: [],
      img: "empty_slot",
      id: "",
      dname: "Empty Slot",
      cost: null,
      attrib: [],
      behavior: undefined,
      bkbpierce: undefined,
      dispellable: undefined,
      mc: undefined,
      cd: undefined,
      lore: undefined,
      components: undefined,
      tier: undefined,
    }

    this.m_ItemDetails = {
      item_0: emptyValue,
      item_1: emptyValue,
      item_2: emptyValue,
      item_3: emptyValue,
      item_4: emptyValue,
      item_5: emptyValue,

      backpack_0: emptyValue,
      backpack_1: emptyValue,
      backpack_2: emptyValue,

      item_neutral: emptyValue,

      aghanims_scepter: emptyValue,
      aghanims_shard: emptyValue,
    }

    for (const [key, value] of Object.entries(playerItems)) {
      const itemValue = {
        abilities: value.abilities,
        hint: value.hint,
        img: key,
        id: value.id,
        dname: value.dname,
        cost: value.cost,
        attrib: value.attrib,
        behavior: value.behavior,
        bkbpierce: value.bkbpierce,
        dispellable: value.dispellable,
        mc: value.mc,
        cd: value.cd,
        lore: value.lore,
        components: value.components,
        tier: value.tier,
      }

      switch (value.id) {
        case player.item_0:
          this.m_ItemDetails["item_0"] = itemValue
          break

        case player.item_1:
          this.m_ItemDetails["item_1"] = itemValue
          break

        case player.item_2:
          this.m_ItemDetails["item_2"] = itemValue
          break

        case player.item_3:
          this.m_ItemDetails["item_3"] = itemValue
          break

        case player.item_4:
          this.m_ItemDetails["item_4"] = itemValue
          break
        case player.item_5:
          this.m_ItemDetails["item_5"] = itemValue
          break

        case player.backpack_0:
          this.m_ItemDetails["backpack_0"] = itemValue
          break

        case player.backpack_1:
          this.m_ItemDetails["backpack_1"] = itemValue
          break

        case player.backpack_2:
          this.m_ItemDetails["backpack_2"] = itemValue
          break

        case player.item_neutral:
          this.m_ItemDetails["item_neutral"] = itemValue

        default:
          break
      }
    }

    return this.m_ItemDetails
  }

  public findItemCostByName(item: string): string {
    const playerItems: Item = items
    let cost = 0

    for (const [key, value] of Object.entries(playerItems)) {
      if (item === key) {
        if (value.cost) cost = value.cost
      }
    }

    return cost.toString()
  }

  //
  // Hero details for [FUNCTION](findAppropriateHero)
  private m_HeroDetails: DetailsAboutHero = {
    heroLocalizedName: "",
    heroVariant: {
      icon: "",
      color: "",
      title: "",
      description: "",
    },
    playerColor: "",
  }

  // Player details for [FUNCTION](findAppropriatePlayer)
  private m_PlayerDetails: DetailsAboutPlayer = {
    profileInfo: {
      avatar: "",
      profileurl: "",
    },
    rank_tier_info: null,
    leaderboard_rank_info: null,
  }

  // Player's item details for [FUNCTION](findAppropriateItems)
  private m_ItemDetails: ItemDetails | any = {}

  // Cache for current hero
  private m_CurrentHero: string = ""

  // Player's slot colors
  private m_PlayerColors: PlayerColors = {
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

  private findColor(player: Player): void {
    if (player.team_number === this.m_PlayerColors.radiant.team_number) {
      for (const [colorKey, colorValue] of Object.entries(
        this.m_PlayerColors.radiant.colors
      )) {
        if (player.player_slot.toString() === colorKey) {
          this.m_HeroDetails.playerColor = colorValue
        }
      }
    }

    if (player.team_number === this.m_PlayerColors.dire.team_number) {
      for (const [colorKey, colorValue] of Object.entries(
        this.m_PlayerColors.dire.colors
      )) {
        if (player.team_slot.toString() === colorKey) {
          this.m_HeroDetails.playerColor = colorValue
        }
      }
    }
  }

  private findHeroName(player: Player, heroList: HeroList[]): void {
    for (let i = 0; i < heroList.length; ++i) {
      const hero = heroList[i]

      if (player.hero_id === hero.id) {
        this.m_HeroDetails.heroLocalizedName = hero.localized_name
        this.m_CurrentHero = hero.name
      }
    }
  }

  private findHeroFacet(player: Player): void {
    const heroAbilities: HeroAbilities = hero_abilities
    for (const [heroID, value] of Object.entries(heroAbilities)) {
      if (this.m_CurrentHero === heroID) {
        switch (player.hero_variant) {
          case 1:
            this.setHeroFacet(value, 0)
            break

          case 2:
            this.setHeroFacet(value, 1)
            break

          case 3:
            this.setHeroFacet(value, 2)
            break

          case 4:
            this.setHeroFacet(value, 3)
            break

          case 5:
            this.setHeroFacet(value, 4)
            break

          default:
            break
        }
      }
    }
  }

  private setHeroFacet(value: HeroAbilitiesValue, facetID: number): void {
    if (value.facets[facetID]) {
      this.m_HeroDetails.heroVariant.icon = value.facets[facetID].icon
      this.m_HeroDetails.heroVariant.color = value.facets[facetID].color
      this.m_HeroDetails.heroVariant.title = value.facets[facetID].title
      this.m_HeroDetails.heroVariant.description =
        value.facets[facetID].description
    }
  }
}
