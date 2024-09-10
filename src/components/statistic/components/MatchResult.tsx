import { MatchDetailsUtility } from "@/utils/statistic/MatchDetailsUtility"

import { useAppSelector } from "@/shared/reduxImports"
import { useEffect, useState } from "@/shared/reactImports"
import { Image } from "@/shared/nextjsImports"

import type { MatchResult } from "@/types/statistic/matchDetails"

import styles from "@/styles/statistic/MatchDetails.module.scss"

export default function ResultOfMatch() {
  const { matchDetails, heroList } = useAppSelector(
    (store) => store.statisticSlice
  )

  const [resultOfMatch, setResultOfMatch] = useState<MatchResult>()

  useEffect(() => {
    if (matchDetails && heroList) {
      const uMatchDetails = new MatchDetailsUtility()
      setResultOfMatch(
        uMatchDetails.findMatchResult(173978074, matchDetails, heroList)
      )
    }
  }, [heroList, matchDetails])

  const side = resultOfMatch?.resultOfMatch ? "RADIANT" : "DIRE"
  const sideColor = resultOfMatch?.resultOfMatch ? "#2eb872" : "#fa4659"

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
            color: sideColor,
          }}
        >
          TEAM {side} {"WIN"}
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
