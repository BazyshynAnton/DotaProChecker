import { UAbilityDetails } from "@/types/statistic/abilityDetails"
import { AbilityIDs } from "@/types/statistic/playerRow"
import ability_ids from "../../../public/data/heroAbilities/ability_ids.json"
import abilities from "../../../public/data/heroAbilities/abilities.json"
import { join } from "path/posix"

export class AbilityDetailsUtility implements UAbilityDetails {
  public static getInstance() {
    if (!this.instance) {
      this.instance = new AbilityDetailsUtility()
    }

    return this.instance
  }

  public findAbilityByID(id: number): string {
    const abilityIDs: AbilityIDs = ability_ids

    if (abilityIDs[id]) {
      return abilityIDs[id]
    }

    return "none"
  }

  public setAbilityBuild(ability_upgrades_arr: number[]): number[] {
    const build = new Array(25).fill(-1)

    const enum patterns {
      FirstLevels = 16,
      CriticalLevel = 17,
      TreeLevel = 19,
      LastLevel = 24,
    }

    for (let i = 0; i < build.length; ++i) {
      if (i == patterns.FirstLevels) continue

      if (i == patterns.CriticalLevel) {
        build[i] = ability_upgrades_arr[i - 1]
        continue
      }

      if (i == patterns.TreeLevel) {
        build[i] = ability_upgrades_arr[i - 2]

        continue
      }

      if (i == patterns.LastLevel) {
        build[i] = ability_upgrades_arr[i - 6]
        continue
      }

      if (i < patterns.FirstLevels) {
        build[i] = ability_upgrades_arr[i]
        continue
      }
    }
    return build
  }

  public findAbilityRealName(abilityName: string): string {
    const data: any = abilities

    return data[abilityName].dname
  }

  public findAbilityBehavior(abilityName: string): any {
    const data: any = abilities

    const res = {
      target: "",
      dmg_type: "",
      bkbpierce: "",
      dispellable: "",
    }

    if (Array.isArray(data[abilityName].behavior)) {
      let length = data[abilityName].behavior.length
      for (let i = 0; i < length; ++i) {
        res.target += data[abilityName].behavior[i]
        if (i < length - 1) {
          res.target += " / "
        }
      }
    } else if (typeof data[abilityName].behavior === "string") {
      res.target = data[abilityName].behavior
    }

    res.bkbpierce = data[abilityName].bkbpierce

    res.dmg_type = data[abilityName].dmg_type

    res.dispellable = data[abilityName].dispellable

    return res
  }

  public findAbilityDescription(abilityName: string): string {
    const data: any = abilities

    return data[abilityName].desc
  }

  public findAbilityAttributes(abilityName: string): any {
    const data: any = abilities

    const res: any = []

    const attrib = data[abilityName].attrib
    for (let i = 0; i < attrib.length; ++i) {
      const attribData = {
        header: attrib[i].header,
        value: "",
      }

      const value = attrib[i].value

      if (Array.isArray(value)) {
        for (let j = 0; j < value.length; ++j) {
          attribData.value += value[j]
          if (j < value.length - 1) {
            attribData.value += " / "
          }
        }
      } else if (typeof value === "string") {
        attribData.value = value
      }

      res.push(attribData)
    }

    return res
  }

  private static instance: AbilityDetailsUtility
  private constructor() {}
}
