import ability_ids from "../../../public/data/heroAbilities/ability_ids.json"
import abilities from "../../../public/data/heroAbilities/abilities.json"

import type { UAbilityDetails } from "@/types/statistic/abilityDetails"
import type { AbilityIDs } from "@/types/statistic/playerRow"

/**
 * AbilityDetailsUtility is an class that uses for setting
 * information in `TableAbilities.tsx`.
 *
 * Implements the Singleton pattern.
 *
 * @class
 * @implements {UAbilityDetails}
 */
export class AbilityDetailsUtility implements UAbilityDetails {
  /**
   * Retrieves the singleton instance of the AbilityDetailsUtility class.
   * If an instance does not exist, it creates one.
   *
   * @returns {AbilityDetailsUtility} The singleton instance of the class.
   */
  public static getInstance(): AbilityDetailsUtility {
    if (!this.instance) {
      this.instance = new AbilityDetailsUtility()
    }

    return this.instance
  }

  /**
   * Finds an ability name in JSON file by ID.
   *
   * @param {number} id The ID of the ability.
   * @returns {string} The name of the ability if found, otherwise "none".
   */
  public findAbilityByID(id: number): string {
    const abilityIDs: AbilityIDs = ability_ids

    if (abilityIDs[id]) {
      return abilityIDs[id]
    }

    return "none"
  }

  /**
   * Sets abilities to the appropriate hero levels
   * based on the given upgrades array.
   *
   * This method maps an array of ability upgrades
   * to a hero's 25 levels, following specific rules:
   * - Levels before index 16 are mapped directly.
   * - Special levels at indices (16, 17, 19, and 24) follow unique mapping logic.
   * - Other levels are initialized to `-1`.
   *
   * @param {number[]} ability_upgrades_arr - An array representing ability upgrades to map to hero levels.
   * @returns {number[]} An array of length 25 where each index corresponds to the ability assigned at that level.
   */
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

  /**
   * Finds real name of ability in JSON file.
   *
   * @param {string} abilityName The key representing the ability in the JSON file.
   * @returns {string} The real name of the ability.
   */
  public findAbilityRealName(abilityName: string): string {
    const data: any = abilities

    return data[abilityName].dname
  }

  /**
   * Finds ability behavior in JSON file:
   * - target
   * - dmg_type
   * - bkbpierce
   * - dispellable
   *
   * @param {string} abilityName The key representing the ability in the JSON file.
   * @returns {any} The ability behavior object:
   * `{
   *    target?: string,
   *    dmg_type?: string,
   *    bkbpierce?: string,
   *    dispellable?: string
   *  }`
   *
   */
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

  /**
   * Finds a description of an ability in JSON file.
   *
   * @param {string} abilityName The key representing the ability in the JSON file.
   * @returns {string} The description of the ability.
   */
  public findAbilityDescription(abilityName: string): string {
    const data: any = abilities

    return data[abilityName].desc
  }

  /**
   * Finds an attributes of an ability in JSON file.
   *
   * @param {string} abilityName The key representing the ability in the JSON file.
   * @returns {any} The array of objects that represent attributes:
   * `[{
   *    header: string,
   *    value: string
   *  }, ...]`
   */
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

  /**
   * Finds a mana cost and cooldown of an ability in JSON file.
   *
   * @param {string} abilityName The key representing the ability in the JSON file.
   * @returns {any} The mana cost and/or cooldown of the ability:
   * `{
   *    mc: string,
   *    cd: string
   *  }`
   */
  public findAbilityCost(abilityName: string): any {
    const data: any = abilities

    const cost = {
      mc: "",
      cd: "",
    }

    if (Array.isArray(data[abilityName].mc)) {
      const length = data[abilityName].mc.length
      for (let i = 0; i < length; ++i) {
        cost.mc += data[abilityName].mc[i]
        if (i < length - 1) {
          cost.mc += " / "
        }
      }
    } else if (typeof data[abilityName].mc === "string") {
      cost.mc = data[abilityName].mc
    }

    if (Array.isArray(data[abilityName].cd)) {
      const length = data[abilityName].cd.length
      for (let i = 0; i < length; ++i) {
        cost.cd += data[abilityName].cd[i]
        if (i < length - 1) {
          cost.cd += " / "
        }
      }
    } else if (typeof data[abilityName].cd === "string") {
      cost.cd = data[abilityName].cd
    }

    return cost
  }

  private static instance: AbilityDetailsUtility
  private constructor() {}
}
