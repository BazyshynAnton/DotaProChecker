import { useAppSelector } from "@/shared/reduxImports"
import { PicksAndBans } from "@/types/redux/statisticSlice"
import { MatchDetailsUtility } from "@/utils/statistic/MatchDetailsUtility"
import { Image } from "@/shared/nextjsImports"

import styles from "@/styles/statistic/PicksBans.module.scss"
import { HERO_ICON_URL } from "@/utils/urls"

export default function PickBans({ side }: { side: string }) {
  const { matchDetails, heroList } = useAppSelector(
    (store) => store.statisticSlice
  )
  const uMatchData = MatchDetailsUtility.getInstance()

  let statistic: PicksAndBans[] | string = ""
  if (matchDetails) {
    statistic = uMatchData.picksBans(side, matchDetails)
  }

  if (typeof statistic === "string" || !heroList) return

  return (
    <div className={styles.picksBans}>
      {statistic.map((el: PicksAndBans, idx: number) => {
        const hero = uMatchData.findHeroName(el.hero_id, heroList)
        return (
          <div
            key={idx}
            className={
              el.is_pick ? styles.picksBans_pick : styles.picksBans_ban
            }
          >
            <div className={styles.heroImg}>
              <Image
                src={`${HERO_ICON_URL}${hero}.png`}
                alt=""
                width={71}
                height={40}
              />
            </div>
            <span>
              {el.is_pick ? "pick " : "ban "}
              {el.order + 1}
            </span>
          </div>
        )
      })}
    </div>
  )
}
