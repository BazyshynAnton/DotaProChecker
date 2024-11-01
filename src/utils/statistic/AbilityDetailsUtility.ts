import { UAbilityDetails } from "@/types/statistic/abilityDetails"
import { AbilityIDs } from "@/types/statistic/playerRow"
import ability_ids from "../../../public/data/heroAbilities/ability_ids.json"
import abilities from "../../../public/data/heroAbilities/abilities.json"

export class AbilityDetailsUtility implements UAbilityDetails {
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

  public findAbilityRealName(ailityName: string): string {
    const data: any = abilities

    return data[ailityName].dname
  }

  public findAbilityBehavior(ailityName: string): any {}
}
