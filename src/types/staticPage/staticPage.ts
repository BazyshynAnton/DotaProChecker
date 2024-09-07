export interface HeroAbilities {
  [key: string]: HeroAbilitiesValue
}

export interface HeroAbilitiesValue {
  abilities: string[]
  talents: {
    name: string
    level: number
  }[]
  facets: {
    name: string
    icon: string
    color: string
    gradient_id: number
    title: string
    description: string
  }[]
}
