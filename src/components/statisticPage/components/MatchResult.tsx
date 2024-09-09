import { MatchDetailsUtility } from "@/utils/statisticPage/MatchDetailsUtility"

import { useAppSelector } from "@/shared/reduxImports"
import { useEffect, useState } from "@/shared/reactImports"
import { Image } from "@/shared/nextjsImports"

import type { MatchResult } from "@/types/staticPage/matchDetails"

import styles from "@/styles/statisticPage/MatchDetails.module.scss"

export default function ResultOfMatch() {
  const { matchDetails, heroList } = useAppSelector(
    (store) => store.statisticPageSlice
  )

  const [resultOfMatch, setResultOfMatch] = useState<MatchResult>()

  useEffect(() => {
    if (matchDetails && heroList) {
      const uMatchDetails = new MatchDetailsUtility()
      setResultOfMatch(
        uMatchDetails.findMatchResult(86738694, matchDetails, heroList)
      )
    }
  }, [heroList, matchDetails])

  return (
    <>
      <div className={styles.match__header__playedHero}>
        <span>Played: </span>
        <Image
          src={`/pictures/dotaHeroIcon/${resultOfMatch?.playedHero}.png`}
          alt=""
          width={50}
          height={30}
        />
      </div>
      <div className={styles.match__result}>
        <h4
          style={{
            color: resultOfMatch?.resultOfMatch ? "#2eb872" : "#fa4659",
          }}
        >
          TEAM {resultOfMatch?.resultOfMatch ? "RADIANT" : "DIRE"} {"WIN"}
        </h4>
        <div className={styles.match__scoreAndTime}>
          <p className={styles.match__scoreAndTime__radiantScore}>
            {resultOfMatch?.radiantScore}
          </p>
          <p className={styles.match__scoreAndTime__duration}>
            {resultOfMatch?.matchDuration}
          </p>
          <p className={styles.match__scoreAndTime__direScore}>
            {resultOfMatch?.direScore}
          </p>
        </div>
      </div>
    </>
  )
}
