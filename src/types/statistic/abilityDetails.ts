export interface UAbilityDetails {
  findAbilityByID(id: number): string

  setAbilityBuild(ability_upgrades_arr: number[]): number[]

  findAbilityRealName(ailityName: string): string
}
