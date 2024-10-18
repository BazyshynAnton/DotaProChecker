import { ItemDetails, UPlayerRow } from "@/types/statistic/playerRow"

// [CLASS] Helper for PlayerRowReusable.tsx component
export class PlayerRowUtility implements UPlayerRow {
  public static getInstance() {
    if (!PlayerRowUtility.instance) {
      PlayerRowUtility.instance = new PlayerRowUtility()
    }
    return PlayerRowUtility.instance
  }

  // Array<string> for items
  public m_Items: string[] = []

  // Creates an Array<string> of items
  public setItems(detailsAboutItems: ItemDetails, flag: string) {
    if (flag === "main_slot") {
      for (let i = 0; i < 6; ++i) {
        const icon = detailsAboutItems[`item_${i}`]?.img
        if (typeof icon === "string") {
          this.m_Items.push(icon)
        }
      }
    } else if (flag === "backpack") {
      for (let i = 0; i < 3; ++i) {
        const icon = detailsAboutItems[`backpack_${i}`]?.img
        if (typeof icon === "string") {
          this.m_Items.push(icon)
        }
      }
    }
  }

  //  Update the state when mouse enter
  public handleMouseEnter(
    item: string,
    flag: string,
    idx?: number | string,
    setter?: any
  ) {
    switch (flag) {
      case "main_slot":
      case "backpack": {
        if (item === "empty_slot" || idx === undefined) return

        idx.toString()
        setter((prevState: any) => {
          const newState = { ...prevState, [idx]: true }

          return newState
        })

        break
      }
      case "neutral_slot": {
        if (item == "empty_slot") return

        setter(true)

        break
      }
      case "aghanim_slot": {
        if (idx === undefined) return
        setter((prevState: any) => {
          const newState = { ...prevState, [idx]: true }
          return newState
        })

        break
      }
      default:
        break
    }
  }

  // Update the state when mouse leave
  public handleMouseLeave(flag: string, idx?: number | string, setter?: any) {
    switch (flag) {
      case "main_slot":
      case "backpack": {
        if (idx === undefined) return

        idx.toString()
        setter((prevState: any) => {
          const newState = { ...prevState, [idx]: false }

          return newState
        })

        break
      }
      case "neutral_slot": {
        setter(false)
        break
      }
      case "aghanim_slot": {
        if (idx === undefined) return

        setter((prevState: any) => {
          const newState = { ...prevState, [idx]: false }
          return newState
        })

        break
      }
      default:
        break
    }
  }

  public findDetailsAboutCurrentItem(
    flag: string,
    item: string,
    detailsAboutItems?: ItemDetails
  ): ItemDetails | null {
    if (flag === "item" && detailsAboutItems) {
      const res: ItemDetails = {}

      for (const [_, value] of Object.entries(detailsAboutItems)) {
        if (item === value.img) {
          res[item] = value

          return res
        }
      }
    } else if (flag === "aghanim") {
      if (item === "ultimate_scepter") {
        return this.m_UltimateScepter
      }

      if (item === "aghanims_shard") {
        return this.m_AghanimsShard
      }
    }

    return null
  }

  // Private section below:
  //
  private static instance: PlayerRowUtility
  private constructor() {}

  // Constant for "ultimate_scepter" item
  private m_UltimateScepter: ItemDetails = {
    ultimate_scepter: {
      abilities: [
        {
          type: "passive",
          title: "Ability Upgrade",
          description:
            "Upgrades the ultimate, and some abilities, of all heroes.",
        },
      ],
      hint: [],
      id: 108,
      img: "ultimate_scepter",
      dname: "Aghanim's Scepter",
      cost: 4200,
      attrib: [
        {
          key: "bonus_all_stats",
          display: "+ {value} All Attributes",
          value: "10",
        },
        {
          key: "bonus_health",
          display: "+ {value} Health",
          value: "175",
        },
        {
          key: "bonus_mana",
          display: "+ {value} Mana",
          value: "175",
        },
      ],
      mc: false,
      cd: false,
      lore: "The scepter of a wizard with demigod-like powers.",
      components: [
        "point_booster",
        "staff_of_wizardry",
        "ogre_axe",
        "blade_of_alacrity",
      ],
    },
  }

  // Constant for "aghanims_shard" item
  private m_AghanimsShard: ItemDetails = {
    aghanims_shard: {
      abilities: [
        {
          type: "passive",
          title: "Ability Upgrade",
          description:
            "Upgrades an existing ability or adds a new ability to your hero.",
        },
      ],
      hint: [],
      id: 609,
      img: "aghanims_shard",
      dname: "Aghanim's Shard",
      cost: 1400,
      attrib: [],
      mc: false,
      cd: false,
      lore: "With origins known only to a single wizard, fragments of this impossible crystal are nearly as coveted as the renowned scepter itself.",
      components: null,
    },
  }
}
